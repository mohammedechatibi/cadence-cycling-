import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function EvidenceBand() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="label-mono text-accent">The one-line summary</p>
          <blockquote className="display-tight mt-5 text-[clamp(1.75rem,3vw,2.6rem)] leading-[1.08]">
            “If physical activity were a drug, we would call it a miracle cure.”
          </blockquote>
          <p className="mt-5 label-mono text-muted-foreground">
            Academy of Medical Royal Colleges, Exercise: the miracle cure, 2015
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          <p className="text-[15px] leading-relaxed text-foreground/80 md:text-base">
            That claim sounds like marketing until you look at the size of the
            effects: cardiovascular risk, blood sugar, mood, sleep, balance and
            memory all move in the same direction. Cycling is simply one of the
            easiest ways to accumulate the minutes, because it doubles as transport.
          </p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            The caveat is the same for every form of exercise: the benefit comes
            from what you repeat, not from what you attempt once. Twenty minutes
            twice this week beats a hundred kilometres next spring.
          </p>
          <Link
            to="/tools/plan"
            className="cta-outline group w-fit"
          >
            Build a week you can keep
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}