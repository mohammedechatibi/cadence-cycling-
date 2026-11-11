import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PLAN_RULES } from "@/lib/plans";

export default function PlanNotes() {
  return (
    <div className="grid gap-px border border-border bg-border lg:grid-cols-[1.4fr_0.6fr]">
      <div className="bg-background p-6 md:p-8">
        <p className="label-mono text-muted-foreground">How to run it</p>
        <ol className="mt-5 space-y-4">
          {PLAN_RULES.map((rule, index) => (
            <li key={rule} className="flex gap-4">
              <span className="font-mono text-xs tabular-nums text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{rule}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col justify-between gap-6 bg-card p-6 md:p-8">
        <p className="text-sm leading-relaxed text-foreground/80">
          Want the hours to fit your own week instead? The builder does the same job
          with your goal and your available days.
        </p>
        <Link
          to="/tools/plan"
          className="group inline-flex items-center gap-2 self-start rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Build my week
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}