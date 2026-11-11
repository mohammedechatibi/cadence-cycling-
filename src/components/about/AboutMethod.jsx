const RULES = [
  {
    n: "01",
    title: "Start from the primary source",
    body: "Studies and public-health guidance, not summaries of summaries. The source lists on the benefits and strength pages are the working material.",
  },
  {
    n: "02",
    title: "Prefer effect sizes to adjectives",
    body: "How much, over how long, in whom. A number says more than the word “significant” ever will.",
  },
  {
    n: "03",
    title: "Separate proven from promising",
    body: "Where the evidence is thin or mixed, the page says so instead of rounding it up to certainty.",
  },
  {
    n: "04",
    title: "Keep it revisable",
    body: "Every page carries its sources, so a claim can be re-read and argued with later.",
  },
];

export default function AboutMethod() {
  return (
    <section className="mt-14 border-t border-border pt-12 md:mt-20 md:pt-16">
      <p className="label-mono text-accent">How the writing is made</p>
      <h2 className="display-tight mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)]">
        Four rules the pages follow
      </h2>

      <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
        {RULES.map((rule) => (
          <div key={rule.n} className="bg-background p-6 md:p-8">
            <span className="label-mono text-muted-foreground">{rule.n}</span>
            <h3 className="mt-4 font-heading text-xl font-semibold tracking-[-0.02em]">
              {rule.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {rule.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}