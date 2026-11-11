import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const RULES = [
  {
    title: "Sessions in 30-minute steps",
    body: "So a week fits around a job rather than replacing it.",
  },
  {
    title: "Effort, not wattage",
    body: "No power meter or smart trainer needed. Every session is written in an effort you can feel.",
  },
  {
    title: "Build, then consolidate",
    body: "Three weeks of building followed by a lighter one, because that is when the adaptation lands.",
  },
  {
    title: "Written to be repeated",
    body: "A plan you can restart next spring is worth more than one that peaks once.",
  },
];

export default function AboutPlans() {
  return (
    <section className="mt-14 border-t border-border pt-12 md:mt-20 md:pt-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="label-mono text-accent">How the plans are built</p>
          <h2 className="display-tight mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Same rules as the free guides
          </h2>
        </div>
        <Link
          to="/plans"
          className="group inline-flex items-center gap-2 self-start text-sm font-medium transition-colors hover:text-accent md:self-auto"
        >
          Read the plans free
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {RULES.map((rule) => (
          <div key={rule.title} className="border-t border-border pt-5">
            <dt className="font-heading text-lg font-semibold tracking-[-0.02em]">
              {rule.title}
            </dt>
            <dd className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {rule.body}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}