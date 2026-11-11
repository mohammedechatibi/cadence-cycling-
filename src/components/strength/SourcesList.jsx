import { SOURCES } from "@/lib/strength";

export default function SourcesList() {
  return (
    <div id="sources" className="scroll-mt-24 border-t border-border py-14 md:py-20">
      <p className="label-mono text-muted-foreground">Where this comes from</p>
      <ul className="mt-6 space-y-4">
        {SOURCES.map((source) => (
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
        Associations from cohort studies are not proof of cause, and no training
        programme replaces medical care. If you have heart, joint or blood-pressure
        problems, plan the programme with a clinician or a qualified coach.
      </p>
    </div>
  );
}