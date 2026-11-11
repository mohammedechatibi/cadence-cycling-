import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import RecoveryNumbers from "@/components/recovery/RecoveryNumbers";
import RecoveryLevers from "@/components/recovery/RecoveryLevers";
import RecoverySignals from "@/components/recovery/RecoverySignals";
import RecoveryWeek from "@/components/recovery/RecoveryWeek";
import RecoverySources from "@/components/recovery/RecoverySources";

export const Route = createFileRoute("/_site/recovery")({
  head: () => ({
    meta: [
      { title: "Recovery — sleep, easy days and the week that makes it stick" },
      {
        name: "description",
        content:
          "How cyclists actually recover: sleep, genuinely easy days, refuelling, lighter weeks and the warning signs that say cut back, with a written-out recovery week.",
      },
    ],
  }),
  component: RecoveryPage,
});

function RecoveryPage() {
  return (
    <div>
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-10 md:px-10 md:pb-16 md:pt-16">
        <SectionIntro
          as="h1"
          size="lg"
          eyebrow="Recovery"
          title={
            <>
              The training
              <br />
              happens when
              <br />
              you rest
            </>
          }
          lede="You do not get fitter on the ride. You get tired on the ride, and the body spends the next day or two turning that into a bigger engine. Everything on this page is about protecting that second part — which is the half most riders leave to chance."
        />
      </section>

      <RecoveryNumbers />

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <SectionIntro
          eyebrow="Six levers"
          title="What actually moves the needle"
          lede="Ranked roughly by how much difference they make. Note that the top two cost nothing and the bottom one is usually what people buy instead."
        />
        <div className="mt-10 md:mt-12">
          <RecoveryLevers />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 md:px-10 md:pb-20">
        <SectionIntro
          eyebrow="Reading the body"
          title="Signs you are running on empty"
          lede="None of these is proof on its own. Two or more together, lasting a week or more, is the point where the honest answer is to back off rather than to dig in."
        />
        <div className="mt-8">
          <RecoverySignals />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 md:px-10 md:pb-20">
        <RecoveryWeek />
      </section>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-sm bg-primary p-8 text-primary-foreground md:mb-20 md:flex-row md:items-center md:p-12">
          <div>
            <p className="display-tight text-2xl md:text-3xl">
              Build a week with the easy days in it.
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              The plan tool sets the hard sessions — then leaves room for the rest,
              which is the part that makes them work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/tools/plan" className="cta-on-accent group">
              Build my week
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/strength"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground"
            >
              Read the lifting case
            </Link>
          </div>
        </div>

        <RecoverySources />
      </div>
    </div>
  );
}