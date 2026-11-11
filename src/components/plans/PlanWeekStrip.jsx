import { cn } from "@/lib/utils";

export default function PlanWeekStrip({ weeks, activeIndex, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
      {weeks.map((week, index) => {
        const active = index === activeIndex;
        return (
          <button
            key={week.label}
            type="button"
            onClick={() => onSelect(index)}
            className={cn(
              "p-5 text-left transition-colors",
              active ? "bg-foreground text-background" : "bg-background hover:bg-card"
            )}
          >
            <span className="label-mono opacity-60">{week.label}</span>
            <span className="mt-2 block font-heading text-lg font-semibold tracking-[-0.02em]">
              {week.focus}
            </span>
            <span className="mt-3 block font-mono text-xs tabular-nums opacity-60">
              {week.total} min
            </span>
          </button>
        );
      })}
    </div>
  );
}