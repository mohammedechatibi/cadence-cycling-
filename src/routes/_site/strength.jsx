import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import StrengthHero from "@/components/strength/StrengthHero";
import EngineCards from "@/components/strength/EngineCards";
import MarkerTable from "@/components/strength/MarkerTable";
import WeeklyStack from "@/components/strength/WeeklyStack";
import RulesList from "@/components/strength/RulesList";
import MythsBand from "@/components/strength/MythsBand";
import SourcesList from "@/components/strength/SourcesList";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6af3984bf517548003da0788/7b412f7b2_generated_image.png";

export const Route = createFileRoute("/_site/strength")({
  head: () => ({
    meta: [
      { title: "Lifting + cycling: the longevity case — Cadence" },
      {
        name: "description",
        content:
          "Why weight training and cycling together cover what either misses: aerobic capacity, muscle, bone density, balance and blood sugar, with a sample week and the research behind it.",
      },
    ],
  }),
  component: StrengthPage,
});

function StrengthPage() {
  return (
    <div>
      <StrengthHero imageUrl={HERO_IMAGE} />

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <h2 className="display-tight text-[clamp(2rem,3.6vw,3rem)]">
            Two adaptations.
            <br />
            One body to hold them.
          </h2>
          <p className="text-[14.5px] leading-relaxed text-muted-foreground">
            Ageing removes capacity and structure on two separate timelines. Cardio
            fitness falls a few percent a decade. Muscle and bone quietly follow. You
            can train both, but only if you train both — and most people pick one, then
            wonder why the other half still feels fragile.
          </p>
        </div>

        <div className="mt-10 md:mt-14">
          <EngineCards />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 md:px-10 md:pb-20">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <h2 className="display-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Where each one falls short
          </h2>
          <p className="text-[14.5px] leading-relaxed text-muted-foreground">
            The pattern in the table is the argument: no row is covered well by only
            one modality. The rows that matter most for independence — capacity,
            strength, bone, balance — are split cleanly between them.
          </p>
        </div>
        <div className="mt-8">
          <MarkerTable />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 md:px-10 md:pb-20">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <h2 className="display-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
            A week that does both
          </h2>
          <p className="text-[14.5px] leading-relaxed text-muted-foreground">
            Two short lifts, three rides, two days off. Nothing here is heroic; the
            point is that it survives a normal life, because the version you can repeat
            for twenty years beats the one that lasts a season.
          </p>
        </div>
        <div className="mt-8">
          <WeeklyStack />
        </div>
      </section>

      <MythsBand />

      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-14 md:px-10 md:pb-20 md:pt-20">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <h2 className="display-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Six rules that decide the outcome
          </h2>
          <p className="text-[14.5px] leading-relaxed text-muted-foreground">
            Most of the long-term difference between two people doing roughly the same
            thing comes down to these. They are boring on purpose.
          </p>
        </div>
        <RulesList />
      </section>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-sm bg-primary p-8 text-primary-foreground md:mb-20 md:flex-row md:items-center md:p-12">
          <div>
            <p className="display-tight text-2xl md:text-3xl">
              Two sessions to protect your seventies.
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Build the riding side of the week first, then bolt your lift days onto it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/tools/plan"
              className="cta-on-accent group"
            >
              Build my week
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/benefits"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground"
            >
              Read the cycling case
            </Link>
          </div>
        </div>

        <SourcesList />
      </div>
    </div>
  );
}