import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { cn } from "@/lib/utils";
import { Image } from "@/components/ui/image";
import { CHECKOUT_STORAGE_KEY } from "@/lib/site";

const formatPrice = (cents, currency) => {
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: currency || "EUR",
    }).format((cents || 0) / 100);
  } catch {
    return String((cents || 0) / 100);
  }
};

export default function ProductCard({ product }) {
  const [buying, setBuying] = useState(false);
  const [error, setError] = useState("");

  const buy = async () => {
    setBuying(true);
    setError("");
    try {
      const response = await base44.functions.invoke("create-checkout", {
        productId: product.id,
      });
      const data = response?.data ?? response;
      if (!data?.redirectUrl) throw new Error(data?.error || "checkout_failed");
      if (data.checkoutId) {
        window.sessionStorage.setItem(CHECKOUT_STORAGE_KEY, data.checkoutId);
      }
      window.location.href = data.redirectUrl;
    } catch {
      setError("Checkout could not start. Please try again.");
      setBuying(false);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-8 border border-border bg-card p-6 md:p-8">
      <div>
        {product.image_urls?.length > 0 && (
          <div
            className={cn(
              "mb-6 grid gap-2",
              product.image_urls.length > 1 ? "grid-cols-2" : "grid-cols-1"
            )}
          >
            {product.image_urls.map((url) => (
              <Image
                key={url}
                src={url}
                alt={product.name}
                className="aspect-[4/3] w-full border border-border"
              />
            ))}
          </div>
        )}
        <div className="flex items-baseline justify-between gap-4">
          <p className="label-mono text-muted-foreground">For sale</p>
          <p className="font-heading text-2xl font-semibold tracking-[-0.02em]">
            {formatPrice(product.price_cents, product.currency)}
          </p>
        </div>

        <h2 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.03em]">
          {product.name}
        </h2>
        {product.tagline && (
          <p className="mt-2 text-sm text-accent">{product.tagline}</p>
        )}
        {product.description && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        )}

        {product.includes?.length > 0 && (
          <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
            {product.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <button
          type="button"
          onClick={buy}
          disabled={buying}
          className="group inline-flex w-full items-center justify-between gap-3 rounded-sm bg-primary px-5 py-3.5 label-mono text-primary-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-70"
        >
          <span>{buying ? "Opening checkout" : "Buy now"}</span>
          {buying ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Card details and your address are collected on the secure payment page.
          One-off payment — nothing renews.
        </p>
        {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
      </div>
    </div>
  );
}