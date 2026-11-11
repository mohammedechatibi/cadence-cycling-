import { Bike, Dumbbell } from "lucide-react";
import { ENGINES } from "@/lib/strength";

const ICONS = { Engine: Bike, Frame: Dumbbell };

export default function EngineCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {ENGINES.map((engine) => {
        const Icon = ICONS[engine.kicker];
        return (
          <article
            key={engine.kicker}
            className="flex flex-col rounded-sm border border-border bg-card p-7 md:p-9"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <span className="label-mono text-muted-foreground">
                {engine.kicker}
              </span>
            </div>

            <h3 className="display-tight mt-6 text-2xl md:text-[1.75rem]">
              {engine.title}
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
              {engine.short}
            </p>

            <ul className="mt-6 space-y-3 border-t border-border pt-6">
              {engine.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[13.5px] leading-relaxed text-foreground/80"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-6 border-l-2 border-primary pl-4 text-[13px] italic leading-relaxed text-muted-foreground">
              {engine.limits}
            </p>
          </article>
        );
      })}
    </div>
  );
}