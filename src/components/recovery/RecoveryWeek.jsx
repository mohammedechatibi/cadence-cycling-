import { DELOAD } from "@/lib/recovery";

export default function RecoveryWeek() {
  return (
    <div className="border border-border bg-card">
      <div className="border-b border-border p-6 md:p-8">
        <p className="label-mono text-accent">{DELOAD.eyebrow}</p>
        <h3 className="display-tight mt-3 text-[clamp(1.5rem,2.6vw,2rem)]">
          {DELOAD.title}
        </h3>
        <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-muted-foreground">
          {DELOAD.lede}
        </p>
      </div>

      <div>
        {DELOAD.rows.map((row) => (
          <div
            key={row.day}
            className="grid gap-1 border-b border-border/70 px-6 py-4 last:border-b-0 md:grid-cols-[120px_1.1fr_1.4fr] md:items-baseline md:gap-6 md:px-8"
          >
            <p className="label-mono text-muted-foreground">{row.day}</p>
            <p className="text-[14px] font-medium text-foreground">{row.session}</p>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {row.note}
            </p>
          </div>
        ))}
      </div>

      <p className="border-t border-border bg-secondary/40 p-6 text-[13px] leading-relaxed text-foreground/75 md:p-8">
        {DELOAD.footer}
      </p>
    </div>
  );
}