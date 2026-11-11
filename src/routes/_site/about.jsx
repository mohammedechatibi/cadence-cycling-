import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import SectionIntro from "@/components/site/SectionIntro";
import AboutMethod from "@/components/about/AboutMethod";
import AboutPlans from "@/components/about/AboutPlans";
import AboutLimits from "@/components/about/AboutLimits";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — who writes Cadence and how it is made" },
      {
        name: "description",
        content:
          "Cadence is written by one person, from primary research and public-health guidance. How the pages and the training plans are made, what the site will not do, and how to get in touch.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
      <SectionIntro
        as="h1"
        size="lg"
        eyebrow="About"
        title={
          <>
            A cycling site that
            <br />
            shows its working
          </>
        }
        lede="Cadence is a one-person publication about what riding does to the body. Every claim is meant to survive a link to the study behind it, and the training plans are the only thing that costs money."
      />

      <section className="mt-14 grid gap-10 border-t border-border pt-12 md:mt-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="label-mono text-accent">Who writes it</p>
          <h2 className="display-tight mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)]">
            One person,
            <br />
            not a content team
          </h2>
        </div>

        <div className="space-y-4 text-[14.5px] leading-relaxed text-muted-foreground">
          <p>
            Cadence is written by Mohammed Echatibi. I ride, I lift, and I got tired
            of cycling advice that skipped the numbers — the sites that promise
            longevity and then sell you a marginal gain instead.
          </p>
          <p>
            So this site starts from the research: what the studies measured, over
            how long, and how big the effect actually was. Then it turns that into
            something you can do on a Tuesday evening with an hour to spare. There
            are no sponsored posts or paid placements here.
          </p>
          <p>
            If something on a page is wrong, out of date, or written less clearly
            than it should be, I would rather hear it than not.
          </p>

          <ul className="space-y-2.5 pt-2">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-3.5 w-3.5" />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
              >
                <Instagram className="h-3.5 w-3.5" />
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <AboutMethod />
      <AboutPlans />
      <AboutLimits />

      <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-sm bg-primary p-8 text-primary-foreground md:mt-20 md:flex-row md:items-center md:p-12">
        <div>
          <p className="display-tight text-2xl md:text-3xl">
            Start with the evidence.
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Everything is free to read. Read it, check the sources, and then decide
            whether a plan is worth your money.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/benefits" className="cta-on-accent group">
            Read the evidence
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/plans"
            className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground"
          >
            See the plans
          </Link>
        </div>
      </div>
    </div>
  );
}