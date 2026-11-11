import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import NutritionNumbers from "@/components/nutrition/NutritionNumbers";
import NutritionPillars from "@/components/nutrition/NutritionPillars";
import NutritionDay from "@/components/nutrition/NutritionDay";
import NutritionMyths from "@/components/nutrition/NutritionMyths";
import NutritionSources from "@/components/nutrition/NutritionSources";

export const Route = createFileRoute("/_site/nutrition")({
  head: () => ({
    meta: [
      { title: "Nutrition — fuelling the ride and the recovery" },
      {
        name: "description",
        content:
          "What to eat as a cyclist: total energy, carbohydrate timing, protein spread and fluid, a full day of eating around a long ride, and four myths worth dropping.",
      },
    ],
  }),
  component: NutritionPage,
});

function NutritionPage() {
  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-10 md:px-10 md:pb-16 md:pt-16">
        <SectionIntro
          as="h1"
          size="lg"
          eyebrow="Nutrition"
          title={
            <>
              Food is the
              <br />
              other half of
              <br />
              the training
            </>
          }
          lede="A perfect training week on too little food is a slow way to feel worse. The good news is that this is the least complicated part of the sport: enough total energy, carbohydrate around the hard rides, protein spread across the day, and fluid that matches the weather."
        />
      </section>

      <NutritionNumbers />

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <SectionIntro
          eyebrow="Four things"
          title="Everything that actually matters"
          lede="Nearly every question about cycling nutrition is a version of one of these four. Everything else is detail, preference or marketing."
        />
        <div className="mt-10 md:mt-12">
          <NutritionPillars />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 md:px-10 md:pb-20">
        <NutritionDay />
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 md:px-10 md:pb-20">
        <SectionIntro
          eyebrow="Four myths"
          title="What you can stop worrying about"
          lede="Each of these has cost riders money, sleep or an evening meal. None of them survives a look at the research."
        />
        <div className="mt-8">
          <NutritionMyths />
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-sm bg-primary p-8 text-primary-foreground md:mb-20 md:flex-row md:items-center md:p-12">
          <div>
            <p className="display-tight text-2xl md:text-3xl">
              Know what the ride cost you.
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Estimate the calories for a ride, then eat for the day around it instead
              of guessing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/tools/calories" className="cta-on-accent group">
              Calories burned
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/plans"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground"
            >
              See the training plans
            </Link>
          </div>
        </div>

        <NutritionSources />
      </div>
    </div>
  );
}