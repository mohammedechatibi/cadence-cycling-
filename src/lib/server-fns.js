import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getServerInfo = createServerFn({ method: "GET" }).handler(async () => ({
  renderedAt: new Date().toISOString(),
}));

const asList = (result) =>
  Array.isArray(result) ? result : (result?.items ?? []);

/** The whole curated shelf in running order. Public reads. */
export const listClips = createServerFn({ method: "GET" }).handler(async ({ context }) => {
  const base44 = context.getBase44();
  const result = await base44.entities.Clip.filter({}, { sort: "rank", limit: 200 });
  return asList(result);
});

/** Products on sale, in shop order. Public read. */
export const listProducts = createServerFn({ method: "GET" }).handler(async ({ context }) => {
  const result = await context
    .getBase44()
    .entities.Product.filter({ active: true }, { sort: "rank", limit: 50 });
  return asList(result);
});

export const getClip = createServerFn({ method: "GET" })
  .validator(z.object({ id: z.string().min(1).max(64) }))
  .handler(async ({ data, context }) => {
    try {
      const clip = await context.getBase44().entities.Clip.get(data.id);
      return clip ?? null;
    } catch (error) {
      if (error?.status === 404) return null;
      throw error;
    }
  });

/**
 * Confirms one checkout with the payment provider, for the buyer's thank-you page.
 * Public by design (buyers rarely have an account) and returns only the status and
 * the product name: the grant and the delivery email are driven from the stored
 * record, never from the request, so a checkout id someone else sends unlocks nothing.
 */
export const confirmPurchase = createServerFn({ method: "POST" })
  .validator(z.object({ checkoutId: z.string().min(1).max(120) }))
  .handler(async ({ data, context }) => {
    const base44 = context.getBase44().asServiceRole;

    const page = await base44.entities.Purchase.filter(
      { checkout_id: data.checkoutId },
      { limit: 1 },
    );
    const record = (page?.items ?? [])[0];
    if (!record) return { status: "not_found", productName: "" };

    const productName = record.product_name || "";
    if (record.status === "paid") return { status: "paid", productName };

    const { items } = await base44.payments.listPurchases({
      checkout_id: data.checkoutId,
    });
    const purchase = items?.[0];
    if (purchase?.status !== "paid") return { status: "pending", productName };

    const { markPaidAndDeliver } = await import("./purchases.server.js");
    await markPaidAndDeliver(base44, record, purchase);

    return { status: "paid", productName };
  });