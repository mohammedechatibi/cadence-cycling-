import { createFileRoute } from "@tanstack/react-router";
import { listProducts } from "@/lib/server-fns";
import ProductCard from "@/components/shop/ProductCard";
import ShopTrust from "@/components/shop/ShopTrust";
import ShopHowItWorks from "@/components/shop/ShopHowItWorks";
import ShopPhotoCredits from "@/components/shop/ShopPhotoCredits";
import SectionIntro from "@/components/site/SectionIntro";

export const Route = createFileRoute("/_site/shop")({
  loader: () => listProducts(),
  head: () => ({
    meta: [
      { title: "Shop — Cadence training plans" },
      {
        name: "description",
        content:
          "Buy a Cadence training plan: cycling-only and cycling with lifting, from six to twelve weeks, laid out session by session.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const products = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
      <SectionIntro
        as="h1"
        size="lg"
        eyebrow="Shop"
        title={
          <>
            Take the plan
            <br />
            with you
          </>
        }
        lede="Everything on this site is free to read. The plans are the part that costs money: every week laid out session by session, so you never decide what to do on the day."
      />

      <ShopTrust />

      {products.length === 0 ? (
        <p className="mt-6 border border-border bg-card p-8 text-sm text-muted-foreground">
          Nothing is for sale right now.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <ShopPhotoCredits />

      <ShopHowItWorks />
    </div>
  );
}