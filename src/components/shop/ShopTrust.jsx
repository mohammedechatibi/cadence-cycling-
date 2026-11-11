import { ListChecks, Receipt, ShieldCheck } from "lucide-react";

const FACTS = [
  {
    icon: Receipt,
    title: "One-off payment",
    body: "No subscription, no account, nothing renews.",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    body: "Card details are entered on the Base44 Payments page, never on this site.",
  },
  {
    icon: ListChecks,
    title: "Same rules as the guides",
    body: "Every plan follows the progression and effort rules published free on this site.",
  },
];

export default function ShopTrust() {
  return (
    <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
      {FACTS.map(({ icon: Icon, title, body }) => (
        <div key={title} className="bg-background p-6">
          <Icon className="h-4 w-4 text-accent" />
          <p className="mt-4 font-heading text-base font-semibold tracking-[-0.01em]">
            {title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
      ))}
    </div>
  );
}