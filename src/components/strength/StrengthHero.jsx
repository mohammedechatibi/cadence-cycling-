import { Image } from "@/components/ui/image";

const FIGS = [
  { value: "30–60 min", label: "Weekly lifting linked to lower mortality" },
  { value: "−17%", label: "All-cause mortality, strongest vs. weakest" },
  { value: "~80%", label: "Lower death risk, fittest vs. least fit" },
];

export default function StrengthHero({ imageUrl }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageUrl}
          alt="A barbell on the gym floor with a road bike behind it"
          fittingType="fill"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/40" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 pb-14 pt-12 md:px-10 md:pb-20 md:pt-20">
        <p className="label-mono text-accent">Longevity · the two-engine case</p>
        <h1 className="display-tight mt-6 max-w-4xl text-[clamp(2.4rem,6vw,5rem)]">
          Ride for the years.
          <br />
          Lift for the <span className="text-accent">life</span> in them.
        </h1>
        <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Cycling and resistance training do almost nothing to each other's jobs. One
          rebuilds the heart, lungs and blood-sugar machinery. The other keeps the
          muscle, bone and tendon you would otherwise lose unnoticed. Together they
          cover the whole of what ageing takes away — and the research on that
          combination is unusually consistent.
        </p>

        <div className="mt-10 grid max-w-2xl gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {FIGS.map((fig) => (
            <div key={fig.value} className="bg-background/90 p-5 backdrop-blur">
              <p className="display-tight text-2xl text-primary md:text-3xl">
                {fig.value}
              </p>
              <p className="mt-2 text-[12px] leading-snug text-foreground/70">
                {fig.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}