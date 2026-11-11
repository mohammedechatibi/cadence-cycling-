// Base44 Payments checkout — base44/functions/create-checkout/entry.ts
//
// Provided by the platform. Edit only the two regions marked `// ===== APP-SPECIFIC =====`: resolve,
// SERVER-SIDE, what the buyer is purchasing and its price (NEVER take an amount from the browser), and
// save the pending purchase record for `checkout.checkout_id` once the checkout exists.
// PUBLIC by design: storefront buyers often have no account, so never 401 here.

import { createClientFromRequest } from "npm:@base44/sdk@0.8.54";

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  const base44 = createClientFromRequest(req);
  const body = await req.json().catch(() => ({}));

  // ===== APP-SPECIFIC =====
  // The price comes from the Product record, never from the request.
  const productId = String(body.productId ?? "");
  if (!productId) {
    return Response.json({ error: "Choose a product first" }, { status: 400 });
  }

  let product;
  try {
    product = await base44.asServiceRole.entities.Product.get(productId);
  } catch {
    product = null;
  }
  if (!product || product.active === false) {
    return Response.json({ error: "That product is not available" }, { status: 404 });
  }

  const amount = Number(product.price_cents);
  if (!Number.isInteger(amount) || amount < 50) {
    return Response.json({ error: "This product has no valid price yet" }, { status: 400 });
  }

  const items = [{ name: product.name, amount, quantity: 1 }];
  const success_path = "/thank-you";
  // ===== END APP-SPECIFIC =====

  try {
    const checkout = await base44.asServiceRole.payments.createCheckout({
      items,
      success_path,
      cancel_path: "/shop",
    });

    // ===== APP-SPECIFIC =====
    // Saved before returning: the confirmation step finds the purchase by this id, so a
    // checkout with no record can never be marked paid.
    await base44.asServiceRole.entities.Purchase.create({
      checkout_id: checkout.checkout_id,
      product_id: product.id,
      product_name: product.name,
      amount_cents: amount,
      currency: product.currency || "",
      status: "pending",
    });
    // ===== END APP-SPECIFIC =====

    // checkoutId goes back to the browser so /thank-you can confirm this exact order.
    return Response.json({
      redirectUrl: checkout.redirect_url,
      checkoutId: checkout.checkout_id,
    });
  } catch (err) {
    console.error("create-checkout: createCheckout failed", productId, err);
    return Response.json({ error: "Could not start checkout" }, { status: 502 });
  }
});