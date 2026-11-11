import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Loader2, ReceiptText } from "lucide-react";

const COPY = {
  checking: {
    icon: Loader2,
    spin: true,
    title: "Confirming your payment",
    body: "This takes a few seconds. Keep this page open.",
  },
  paid: {
    icon: Check,
    title: "Payment confirmed",
    body: "Your order is recorded as paid and the payment provider has sent your receipt. The plan is open on the site, so you can start whenever you like.",
  },
  pending: {
    icon: Clock,
    title: "Your payment is still settling",
    body: "The payment provider has not confirmed it yet, which normally takes a moment. Your order is already recorded, so nothing is lost. Check again in a few seconds.",
  },
  not_found: {
    icon: ReceiptText,
    title: "We could not match that order",
    body: "If you have just paid, the order is still recorded on our side and will be confirmed automatically. If you were not charged, nothing was bought.",
  },
  unknown: {
    icon: ReceiptText,
    title: "Nothing to confirm here",
    body: "This page has no order attached to it. If you completed a payment, the confirmation and receipt arrive by email.",
  },
};

export default function ThankYouStatus({ phase, productName, onRetry }) {
  const copy = COPY[phase] ?? COPY.unknown;
  const Icon = copy.icon;

  return (
    <div>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icon className={copy.spin ? "h-5 w-5 animate-spin" : "h-5 w-5"} />
      </span>

      <h1 className="display-tight mt-7 text-[clamp(2.2rem,4.6vw,3.4rem)]">
        {copy.title}
      </h1>

      {phase === "paid" && productName ? (
        <p className="mt-4 font-heading text-xl tracking-[-0.02em] text-accent">
          {productName}
        </p>
      ) : null}

      <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
        {copy.body}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {phase === "paid" ? (
          <Link to="/plans" className="cta-primary group">
            Read your plan
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ) : null}

        {phase === "pending" || phase === "checking" ? (
          <button
            type="button"
            onClick={onRetry}
            disabled={phase === "checking"}
            className="cta-primary disabled:opacity-60"
          >
            {phase === "checking" ? "Checking" : "Check again"}
          </button>
        ) : null}

        <Link to="/shop" className="cta-outline">
          Back to the shop
        </Link>
      </div>
    </div>
  );
}