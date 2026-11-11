import { DAY } from "@/lib/nutrition";

export default function NutritionDay() {
  return (
    <div className="border border-border bg-card">
      <div className="border-b border-border p-6 md:p-8">
        <p className="label-mono text-accent">{DAY.eyebrow}</p>
        <h3 className="display-tight mt-3 text-[clamp(1.5rem,2.6vw,2rem)]">
          {DAY.title}
        </h3>
        <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-muted-foreground">
          {DAY.lede}
        </p>
      </div>

      <div>
        {DAY.rows.map((row) => (
          <div
            key={row.time}
            className="grid gap-1 border-b border-border/70 px-6 py-4 last:border-b-0 md:grid-cols-[110px_1.2fr_1.3fr] md:items-baseline md:gap-6 md:px-8"
          >
            <p className="label-mono text-primary">{row.time}</p>
            <p className="text-[14px] font-medium leading-snug text-foreground">
              {row.what}
            </p>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {row.why}
            </p>
          </div>
        ))}
      </div>

      <p className="border-t border-border bg-secondary/40 p-6 text-[13px] leading-relaxed text-foreground/75 md:p-8">
        {DAY.footer}
      </p>
    </div>
  );
}