import { createFileRoute } from "@tanstack/react-router";
import { requireUserRoute } from "@/lib/auth-middleware";
import { markPaidAndDeliver } from "@/lib/purchases.server.js";

// Called by the "Confirm purchase" workflow after a payment succeeds, and safe to call
// again: a record that is already paid is skipped, so nothing is ever granted twice.
export const Route = createFileRoute("/api/confirm-purchases")({
  server: {
    middleware: [requireUserRoute],
    handlers: {
      POST: async ({ context }) => {
        if (context.user.role !== "admin") {
          return Response.json({ error: "Forbidden" }, { status: 403 });
        }

        const base44 = context.getBase44().asServiceRole;
        const pending = await base44.entities.Purchase.filter(
          { status: "pending" },
          { limit: 50 },
        );
        const records = pending?.items ?? [];
        const paid = [];
        const deliveryErrors = [];

        for (const record of records) {
          const { items } = await base44.payments.listPurchases({
            checkout_id: record.checkout_id,
          });
          const purchase = items?.[0];
          if (purchase?.status !== "paid") continue;

          const buyerEmail = purchase.buyer_email || "";
          // Marks paid and emails the buyer in one idempotent step, shared with the thank-you page.
          const deliveryError = await markPaidAndDeliver(base44, record, purchase);
          if (deliveryError) deliveryErrors.push(`${record.checkout_id}: ${deliveryError}`);
          paid.push({
            checkout_id: record.checkout_id,
            product_name: record.product_name || "A training plan",
            amount:
              (Number(record.amount_cents) / 100).toFixed(2) +
              " " +
              (record.currency || "EUR"),
            buyer_email: buyerEmail || "Not shown by the provider",
          });
        }

        const notifyError = await notifySales(base44, paid);

        return Response.json({
          checked: records.length,
          paid: paid.map((sale) => sale.checkout_id),
          notified: paid.length > 0 && !notifyError,
          notify_error: notifyError,
          delivery_errors: deliveryErrors,
        });
      },
    },
  },
});

/**
 * Emails the store owner (every admin app user) once per newly confirmed sale.
 * A failed send is reported back instead of thrown: the order is already marked
 * paid, and a mail problem must not undo that.
 */
async function notifySales(base44, sales) {
  if (!sales.length) return null;

  const admins = await base44.entities.User.filter(
    { role: "admin" },
    "-created_date",
    50,
    0,
  );
  const recipients = (admins ?? []).map((user) => user.email).filter(Boolean);
  if (!recipients.length) return "No admin email to notify";

  const saleTime = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/Brussels",
    dateStyle: "medium",
    timeStyle: "short",
  });

  try {
    for (const sale of sales) {
      for (const to of recipients) {
        await base44.integrations.Core.SendEmail({
          to,
          template_name: "NewSale",
          variables: {
            product_name: sale.product_name,
            amount: sale.amount,
            buyer_email: sale.buyer_email,
            sale_time: saleTime,
            order_id: sale.checkout_id,
          },
          category: "transactional",
        });
      }
    }
  } catch (error) {
    return error?.message ?? "Sale notification failed";
  }

  return null;
}