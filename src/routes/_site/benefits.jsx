import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import BenefitRow from "@/components/benefits/BenefitRow";
import EvidenceList from "@/components/benefits/EvidenceList";
import { BENEFITS } from "@/lib/benefits";

const BANNER =
  "https://media.base44.com/images/public/6af3984bf517548003da0788/a4065dca3_generated_image.png";

export const Route = createFileRoute("/_site/benefits")({
  head: () => ({
    meta: [
      { title: "The health benefits of cycling — Cadence" },
      {
        name: "description",
        content:
          "Eight research-backed ways cycling changes your body and mind: cardiovascular fitness, blood pressure, blood sugar, longevity, mood, joints, sleep and memory.",
      },
    ],
  }),
  component: BenefitsPage,
});

function BenefitsPage() {
  return (
    <div>
      <header className="mx-auto max-w-[1400px] px-5 pb-10 pt-10 md:px-10 md:pb-14 md:pt-16">
        <p className="label-mono text-accent">The full case</p>
        <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <h1 className="display-tight text-[clamp(2.6rem,6vw,4.8rem)]">
            Eight ways cycling
            <br />
            changes you
          </h1>
          <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">
            Each section below gives you the mechanism, the size of the effect and a
            source you can look up. Where the evidence is weaker, it says so. Read
            one, or read all eight in twenty minutes.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative h-[38vh] min-h-[240px] w-full overflow-hidden rounded-sm bg-secondary">
          <Image
            src={BANNER}
            alt="A cyclist's legs and crankset in morning light"
            fittingType="fill"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {BENEFITS.map((benefit) => (
          <BenefitRow key={benefit.id} benefit={benefit} />
        ))}

        <EvidenceList />

        <div className="border-t border-border py-14 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-sm bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:p-12">
            <div>
              <p className="display-tight text-2xl md:text-3xl">
                Reading is the easy part.
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/70">
                Give us your goal and your week. We will hand back a schedule that
                fits inside it.
              </p>
            </div>
            <Link
              to="/tools/plan"
              className="group inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Build my week
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}