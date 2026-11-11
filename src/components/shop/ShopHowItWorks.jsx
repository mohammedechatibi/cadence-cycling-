import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";

const STEPS = [
  {
    n: "01",
    title: "Pick a plan",
    body: "Each card lists exactly what is inside before you pay, including how many weeks and how many sessions a week.",
  },
  {
    n: "02",
    title: "Pay once",
    body: "You are taken to a secure payment page. This site never sees or stores your card details, and there is nothing to cancel later.",
  },
  {
    n: "03",
    title: "Start the week",
    body: "The plan is a written sequence: every week, every session, with the duration and the effort you are aiming for.",
  },
];

export default function ShopHowItWorks() {
  return (
    <section className="mt-14 border-t border-border pt-12 md:mt-20 md:pt-16">
      <p className="label-mono text-accent">Before you buy</p>
      <h2 className="display-tight mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)]">
        How buying works
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.n} className="border-t border-border pt-5">
            <span className="label-mono text-muted-foreground">{step.n}</span>
            <p className="mt-3 font-heading text-lg font-semibold tracking-[-0.02em]">
              {step.title}
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
        <Mail className="h-3.5 w-3.5 text-accent" />
        Not sure which plan fits?
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent"
        >
          Ask before you buy
        </a>
        and you will get an answer from the person who wrote the plan.
      </p>
    </section>
  );
}