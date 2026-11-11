import { MYTHS } from "@/lib/strength";

export default function MythsBand() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <p className="label-mono text-accent">Four things people get wrong</p>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {MYTHS.map((myth) => (
            <div key={myth.claim} className="border-t border-border pt-5">
              <p className="font-heading text-lg text-foreground/90">
                “{myth.claim}”
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                {myth.truth}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}