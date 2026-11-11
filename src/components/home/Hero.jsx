import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function Hero({ imageUrl, alt, credit }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
      <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="fade-up">
          <p className="label-mono text-muted-foreground">
            The case for getting on a bike
          </p>
          <h1 className="display-tight mt-6 text-[clamp(2.8rem,6.6vw,5.4rem)]">
            Every kilometre
            <br />
            is <span className="text-accent">medicine</span>.
          </h1>
          <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-muted-foreground md:text-base">
            Cycling is one of the few habits that works on your heart, your head and
            your knees at the same time. Below is what the research actually shows —
            and three tools to turn it into a week you will keep riding.
          </p>

          <p className="mt-5 max-w-lg border-l-2 border-accent pl-4 text-[15px] leading-relaxed text-foreground/90">
            Cycling guidance and training plans built around the demands of the Tour
            de France: the climbs, the time trials, and the recovery between stages.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/tools/plan"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              Build my week
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/benefits"
              className="group inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              See the benefits
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/tools/calories"
              className="group inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Calculate your burn
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <p className="mt-8 max-w-md border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
            Built on WHO activity guidance, UK Biobank commute data and
            exercise-physiology reviews. General information, not medical advice.
            Independent publication — not affiliated with, or endorsed by, the Tour de
            France or its organisers.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary">
            <Image
              src={imageUrl}
              alt={alt || "A cyclist at speed"}
              fittingType="fill"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/85 to-transparent" />
          </div>

          {credit && (
            <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground/80">
              <a
                href={credit.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground hover:underline"
              >
                {credit.text}
              </a>
            </p>
          )}

          <div className="absolute -left-3 bottom-6 w-[min(19rem,85%)] rounded-sm bg-background/95 p-5 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.55)] backdrop-blur md:-left-8">
            <p className="label-mono text-muted-foreground">All-cause mortality</p>
            <p className="display-tight mt-2 text-5xl text-primary">−41%</p>
            <p className="mt-2 text-[13px] leading-snug text-foreground/75">
              for people who commute by bike instead of by car
            </p>
            <p className="label-mono mt-3 text-muted-foreground">
              BMJ, 2017 · 264,000 adults · 5 years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}