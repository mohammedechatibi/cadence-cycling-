import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { HOME_BENEFITS } from "@/lib/benefits";

export default function BenefitsPreview() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
      <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="label-mono text-accent">Six of the eight</p>
          <h2 className="display-tight mt-3 text-[clamp(2rem,3.6vw,3.2rem)]">
            What changes in your body
          </h2>
        </div>
        <Link
          to="/benefits"
          className="group inline-flex items-center gap-2 self-start text-sm font-medium text-foreground transition-colors hover:text-accent md:self-auto"
        >
          Read all eight with the evidence
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {HOME_BENEFITS.map((benefit) => (
          <a
            key={benefit.id}
            href={`/benefits#${benefit.id}`}
            className="group flex flex-col justify-between gap-8 bg-background p-6 transition-colors duration-300 hover:bg-card md:p-8"
          >
            <div>
              <div className="flex items-baseline justify-between">
                <span className="label-mono text-muted-foreground">{benefit.number}</span>
                <span className="display-tight text-lg text-accent">{benefit.stat}</span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold leading-tight tracking-[-0.02em] md:text-[22px]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {benefit.short}
              </p>
            </div>
            <span className="label-mono inline-flex items-center gap-1.5 text-foreground/60 transition-colors group-hover:text-foreground">
              Evidence
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}