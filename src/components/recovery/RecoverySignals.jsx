import { SIGNALS } from "@/lib/recovery";

export default function RecoverySignals() {
  return (
    <div className="border-t border-border">
      <div className="hidden grid-cols-[1.1fr_1fr_1.1fr] gap-6 border-b border-border py-3 label-mono text-muted-foreground md:grid">
        <span>What you notice</span>
        <span>What it usually means</span>
        <span>What to do</span>
      </div>

      {SIGNALS.map((row) => (
        <div
          key={row.signal}
          className="grid gap-2 border-b border-border py-5 md:grid-cols-[1.1fr_1fr_1.1fr] md:gap-6 md:py-6"
        >
          <p className="text-[14px] font-medium leading-snug text-foreground">
            {row.signal}
          </p>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
            {row.means}
          </p>
          <p className="text-[13.5px] leading-relaxed text-foreground/80">
            {row.action}
          </p>
        </div>
      ))}
    </div>
  );
}