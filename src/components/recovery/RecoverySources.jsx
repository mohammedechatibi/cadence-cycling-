import { RECOVERY_SOURCES } from "@/lib/recovery";

export default function RecoverySources() {
  return (
    <div id="sources" className="scroll-mt-24 border-t border-border py-14 md:py-20">
      <p className="label-mono text-muted-foreground">Where this comes from</p>
      <ul className="mt-6 space-y-4">
        {RECOVERY_SOURCES.map((source) => (
          <li
            key={source}
            className="flex gap-4 text-[12.5px] leading-relaxed text-foreground/70"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
            {source}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
        Recovery advice is general information, not medical advice. Persistent
        fatigue, unexplained weight loss or a niggle that will not settle deserves a
        doctor rather than a lighter week.
      </p>
    </div>
  );
}