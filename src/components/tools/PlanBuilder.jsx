import { useState } from "react";
import { DAYS, GOALS, buildWeek } from "@/lib/cycleMath";
import { cn } from "@/lib/utils";

const LENGTHS = [30, ...Array.from({ length: 9 }, (_, i) => 60 + i * 30)];

const formatLength = (value) => {
  const hours = Math.floor(value / 60);
  const rest = value % 60;
  if (hours === 0) return `${value} min`;
  return rest ? `${hours}h${String(rest).padStart(2, "0")}` : `${hours}h`;
};
const DAY_OPTIONS = [2, 3, 4, 5, 6];

export default function PlanBuilder() {
  const [goal, setGoal] = useState("health");
  const [days, setDays] = useState(3);
  const [minutes, setMinutes] = useState(60);

  const { week, totalMinutes, sessions } = buildWeek({ goal, days, minutes });
  const activeGoal = GOALS.find((item) => item.id === goal);
  const coverage = Math.round((totalMinutes / 150) * 100);

  return (
    <div>
      <div className="grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-3">
        <div className="bg-background p-6 md:p-8">
          <p className="label-mono text-muted-foreground">Goal</p>
          <div className="mt-4 space-y-px border border-border bg-border">
            {GOALS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setGoal(item.id)}
                className={cn(
                  "block w-full px-4 py-3 text-left transition-colors",
                  goal === item.id ? "bg-primary text-primary-foreground" : "bg-card hover:bg-secondary"
                )}
              >
                <span className="block text-sm font-medium">{item.label}</span>
                <span
                  className={cn(
                    "mt-0.5 block text-xs leading-snug",
                    goal === item.id ? "text-primary-foreground/60" : "text-muted-foreground"
                  )}
                >
                  {item.blurb}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-background p-6 md:p-8">
          <p className="label-mono text-muted-foreground">Days you can ride</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {DAY_OPTIONS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setDays(value)}
                className={cn(
                  "h-11 w-11 rounded-sm border font-mono text-sm transition-colors",
                  days === value
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card hover:border-foreground/40"
                )}
              >
                {value}
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            The plan spaces sessions out so you are never riding hard two days
            running.
          </p>
        </div>

        <div className="bg-background p-6 md:p-8">
          <p className="label-mono text-muted-foreground">Time per session</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {LENGTHS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setMinutes(value)}
                className={cn(
                  "rounded-sm border px-3.5 py-2.5 font-mono text-sm transition-colors",
                  minutes === value
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card hover:border-foreground/40"
                )}
              >
                {formatLength(value)}
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Rounded to a realistic door-to-door time, warm-up included.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-[1.35fr_0.65fr]">
        <div className="bg-card p-6 md:p-8">
          <div className="flex items-baseline justify-between">
            <p className="label-mono text-muted-foreground">Your week</p>
            <p className="label-mono text-muted-foreground">{activeGoal.label}</p>
          </div>

          <div className="mt-5 divide-y divide-border border-t border-border">
            {week.map((item) => (
              <div key={item.day} className="flex items-center gap-4 py-3">
                <span
                  className={cn(
                    "label-mono w-9 shrink-0",
                    item.session ? "text-foreground" : "text-muted-foreground/60"
                  )}
                >
                  {item.day}
                </span>
                {item.session ? (
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">
                      {item.session.name}
                      <span className="ml-2 font-mono text-xs font-normal text-muted-foreground">
                        {item.session.zone}
                      </span>
                    </p>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {item.session.note}
                    </p>
                  </div>
                ) : (
                  <p className="flex-1 text-sm text-muted-foreground">Rest day</p>
                )}
                <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                  {item.session ? `${item.minutes} min` : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 bg-primary p-6 text-primary-foreground md:p-8">
          <div>
            <p className="label-mono text-primary-foreground/55">Weekly total</p>
            <p className="display-tight mt-3 text-5xl leading-none">
              {totalMinutes}
              <span className="ml-1.5 font-body text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
                min
              </span>
            </p>
            <div className="mt-4 h-1 w-full bg-primary-foreground/15">
              <div
                className="h-1 bg-accent transition-all duration-500"
                style={{ width: `${Math.min(coverage, 100)}%` }}
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-primary-foreground/65">
              {coverage >= 100
                ? `${coverage}% of the WHO's 150-minute weekly target. Nicely done.`
                : `${coverage}% of the WHO's 150-minute weekly target. ${150 - totalMinutes} minutes still to find.`}
            </p>
          </div>

          <dl className="space-y-2 border-t border-primary-foreground/15 pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-primary-foreground/60">Sessions</dt>
              <dd className="font-mono">{sessions}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-primary-foreground/60">Average ride</dt>
              <dd className="font-mono">{Math.round(totalMinutes / sessions)} min</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-primary-foreground/60">Hard days</dt>
              <dd className="font-mono">
                {week.filter((item) => ["intervals", "tempo"].includes(item.key)).length}
              </dd>
            </div>
          </dl>

          <p className="text-xs leading-relaxed text-primary-foreground/45">
            Hold this week for four weeks before adding time. Consistency, not
            ambition, is what moves the numbers on these pages.
          </p>
        </div>
      </div>

      <p className="mt-4 label-mono text-muted-foreground">
        Rest days shown as {DAYS.filter((day) => !week.find((item) => item.day === day && item.session)).join(", ") || "none"}
      </p>
    </div>
  );
}