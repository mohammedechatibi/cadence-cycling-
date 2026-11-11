import { PILLARS } from "@/lib/nutrition";

export default function NutritionPillars() {
  return (
    <div className="grid gap-px border border-border bg-border md:grid-cols-2">
      {PILLARS.map((pillar) => (
        <article key={pillar.n} className="bg-card p-6 md:p-8">
          <div className="flex items-baseline gap-3">
            <span className="label-mono text-primary">{pillar.n}</span>
            <h3 className="display-tight text-[22px] leading-none">{pillar.title}</h3>
          </div>

          <p className="mt-4 text-[14px] font-medium text-foreground/90">
            {pillar.lede}
          </p>

          <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
            {pillar.body}
          </p>

          <p className="mt-5 border-t border-border pt-4 text-[12.5px] leading-relaxed text-foreground/70">
            {pillar.detail}
          </p>
        </article>
      ))}
    </div>
  );
}