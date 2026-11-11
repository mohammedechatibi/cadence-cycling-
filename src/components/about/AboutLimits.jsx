const LIMITS = [
  {
    title: "Not medical advice",
    body: "If you have a heart condition, are pregnant, or are coming back from injury, talk to a clinician before you start.",
  },
  {
    title: "Not a coaching service",
    body: "The plans are documents. Nobody is watching your sessions, and nothing adjusts itself to how you feel on the day.",
  },
  {
    title: "Not a shortcut",
    body: "The benefits described on this site come from repetition. No purchase changes that, which is why it is all written down plainly.",
  },
];

export default function AboutLimits() {
  return (
    <section className="mt-14 border-t border-border pt-12 md:mt-20 md:pt-16">
      <p className="label-mono text-accent">What this isn't</p>
      <h2 className="display-tight mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)]">
        Said plainly, up front
      </h2>

      <ul className="mt-8 space-y-6">
        {LIMITS.map((item) => (
          <li
            key={item.title}
            className="grid gap-2 border-l border-accent/60 pl-5 sm:grid-cols-[220px_1fr] sm:gap-8"
          >
            <p className="font-heading text-lg font-semibold tracking-[-0.02em]">
              {item.title}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}