export default function BenefitRow({ benefit }) {
  return (
    <section
      id={benefit.id}
      className="scroll-mt-28 border-t border-border py-10 md:py-14"
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] md:gap-14">
        <div className="md:sticky md:top-28 md:self-start">
          <span className="label-mono text-muted-foreground">{benefit.number}</span>
          <p className="display-tight mt-3 text-4xl text-accent md:text-5xl">
            {benefit.stat}
          </p>
          <p className="mt-3 max-w-[15rem] text-xs leading-relaxed text-muted-foreground">
            {benefit.statLabel}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-[34px]">
            {benefit.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/80 md:text-base">
            {benefit.short}
          </p>
          {benefit.detail.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-4 text-[15px] leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-6 border-t border-border pt-3 label-mono text-foreground/55">
            {benefit.source}
          </p>
        </div>
      </div>
    </section>
  );
}