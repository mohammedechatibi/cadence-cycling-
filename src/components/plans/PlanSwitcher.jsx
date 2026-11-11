import { cn } from "@/lib/utils";

export default function PlanSwitcher({ plans, activeId, onChange }) {
  return (
    <div className="grid gap-px border border-border bg-border md:grid-cols-2">
      {plans.map((plan) => {
        const active = plan.id === activeId;
        return (
          <button
            key={plan.id}
            type="button"
            onClick={() => onChange(plan.id)}
            className={cn(
              "p-6 text-left transition-colors md:p-8",
              active
                ? "bg-primary text-primary-foreground"
                : "bg-card hover:bg-secondary"
            )}
          >
            <span
              className={cn(
                "label-mono",
                active ? "text-primary-foreground/60" : "text-muted-foreground"
              )}
            >
              {plan.kicker}
            </span>
            <span className="mt-3 block font-heading text-2xl font-semibold tracking-[-0.02em]">
              {plan.name}
            </span>
            <span
              className={cn(
                "mt-2 block text-sm leading-relaxed",
                active ? "text-primary-foreground/70" : "text-muted-foreground"
              )}
            >
              {plan.who}
            </span>
          </button>
        );
      })}
    </div>
  );
}