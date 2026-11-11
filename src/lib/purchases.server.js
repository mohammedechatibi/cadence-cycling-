/**
 * Server-only purchase fulfilment, shared by the thank-you confirmation and the
 * payment workflow sweep. Both may run for the same order, so this is idempotent:
 * a record already paid returns early and sends nothing twice.
 * Returns null on success, or a short message describing a delivery problem.
 */
export function formatAmount(cents, currency) {
  return `${(Number(cents || 0) / 100).toFixed(2)} ${currency || "EUR"}`;
}

export async function markPaidAndDeliver(base44, record, purchase) {
  if (!record || record.status === "paid") return null;

  const buyerEmail = purchase?.buyer_email || "";

  await base44.entities.Purchase.update(record.id, {
    status: "paid",
    paid_at: new Date().toISOString(),
    buyer_email: buyerEmail,
  });

  if (!buyerEmail) return "The provider did not return a buyer email";

  try {
    await base44.integrations.Core.SendEmail({
      to: buyerEmail,
      template_name: "PlanDelivery",
      variables: {
        product_name: record.product_name || "Your Cadence plan",
        amount: formatAmount(record.amount_cents, record.currency),
        order_id: record.checkout_id,
      },
      category: "transactional",
    });
    return null;
  } catch (error) {
    // The order is already paid; a failed send must not undo that.
    return error?.message ?? "Plan delivery email failed";
  }
}