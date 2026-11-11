import { cn } from "@/lib/utils";
import { KIND_LABEL } from "@/lib/plans";

export default function PlanWeekDetail({ week }) {
  return (
    <div className="grid gap-px border border-border bg-border lg:grid-cols-[1.55fr_0.45fr]">
      <div className="bg-card p-6 md:p-8">
        <div className="divide-y divide-border border-t border-border">
          {week.days.map((day) => (
            <div key={day.day} className="flex items-start gap-4 py-3">
              <span
                className={cn(
                  "label-mono w-9 shrink-0 pt-0.5",
                  day.kind === "rest"
                    ? "text-muted-foreground/60"
                    : "text-foreground"
                )}
              >
                {day.day}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">
                  {day.title}
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {KIND_LABEL[day.kind]}
                  </span>
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {day.detail}
                </p>
                {day.exercises && (
                  <ul className="mt-3 space-y-1.5 border-l border-border pl-3">
                    {day.exercises.map((exercise) => (
                      <li
                        key={exercise.name}
                        className="flex items-baseline justify-between gap-4 text-xs"
                      >
                        <span className="text-foreground/75">{exercise.name}</span>
                        <span className="shrink-0 font-mono tabular-nums text-muted-foreground">
                          {exercise.sets}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                {day.minutes ? `${day.minutes} min` : "—"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 bg-primary p-6 text-primary-foreground md:p-8">
        <div>
          <p className="label-mono text-primary-foreground/55">
            {week.label} · {week.focus}
          </p>
          <p className="display-tight mt-3 text-4xl leading-none">
            {week.total}
            <span className="ml-1.5 font-body text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
              min
            </span>
          </p>
        </div>
        <p className="text-xs leading-relaxed text-primary-foreground/70">
          {week.note}
        </p>
      </div>
    </div>
  );
}