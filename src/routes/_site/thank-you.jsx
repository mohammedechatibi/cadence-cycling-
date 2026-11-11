import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { confirmPurchase } from "@/lib/server-fns";
import ThankYouStatus from "@/components/shop/ThankYouStatus";
import { CHECKOUT_STORAGE_KEY } from "@/lib/site";

export const Route = createFileRoute("/_site/thank-you")({
  ssr: false,
  validateSearch: (search) =>
    typeof search.checkout_id === "string" ? { checkout_id: search.checkout_id } : {},
  head: () => ({
    meta: [
      { title: "Order confirmation | Cadence" },
      {
        name: "description",
        content: "Confirming your Cadence training plan order with the payment provider.",
      },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const { checkout_id: checkoutIdParam } = Route.useSearch();
  const confirm = useServerFn(confirmPurchase);
  const [checkoutId, setCheckoutId] = useState(checkoutIdParam ?? null);
  const [attempt, setAttempt] = useState(0);
  const [phase, setPhase] = useState("checking");
  const [productName, setProductName] = useState("");

  // The provider redirect does not always carry the id back, so the shop stashes it.
  useEffect(() => {
    if (checkoutIdParam) return;
    const stored = window.sessionStorage.getItem(CHECKOUT_STORAGE_KEY);
    if (stored) setCheckoutId(stored);
    else setPhase("unknown");
  }, [checkoutIdParam]);

  useEffect(() => {
    if (!checkoutId) return;
    let cancelled = false;
    setPhase("checking");

    confirm({ data: { checkoutId } })
      .then((result) => {
        if (cancelled) return;
        setProductName(result?.productName || "");
        setPhase(
          result?.status === "paid"
            ? "paid"
            : result?.status === "not_found"
              ? "not_found"
              : "pending"
        );
        if (result?.status === "paid") {
          window.sessionStorage.removeItem(CHECKOUT_STORAGE_KEY);
        }
      })
      .catch(() => {
        if (!cancelled) setPhase("pending");
      });

    return () => {
      cancelled = true;
    };
  }, [checkoutId, attempt, confirm]);

  return (
    <div className="mx-auto max-w-[760px] px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <ThankYouStatus
        phase={phase}
        productName={productName}
        onRetry={() => setAttempt((value) => value + 1)}
      />
    </div>
  );
}