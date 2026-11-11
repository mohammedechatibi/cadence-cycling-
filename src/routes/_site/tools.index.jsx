import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const DAWN =
  "https://media.base44.com/images/public/6af3984bf517548003da0788/6d632ce53_generated_image.png";

const TOOLS = [
  {
    href: "/tools/calories",
    index: "01",
    title: "Calories burned",
    copy: "Weight, duration and pace in; an energy estimate out, along with what a normal week adds up to.",
    meta: "MET-based · instant",
  },
  {
    href: "/tools/zones",
    index: "02",
    title: "Heart-rate zones",
    copy: "Your five training zones in beats per minute, and what each one actually trains.",
    meta: "Karvonen · 5 zones",
  },
  {
    href: "/tools/plan",
    index: "03",
    title: "Weekly plan",
    copy: "A goal, your available days and session length. Out comes a week you can keep.",
    meta: "Four goals · 2–6 rides",
  },
  {
    href: "/plans",
    index: "04",
    title: "Training plans",
    copy: "Two four-week blocks: cycling only, or cycling with two lifts a week. Session by session.",
    meta: "Two plans · 4-week blocks",
  },
];

export const Route = createFileRoute("/_site/tools/")({
  head: () => ({
    meta: [
      {
        title:
          "Cycling tools — calories, heart-rate zones, weekly plan, training plans | Cadence",
      },
      {
        name: "description",
        content:
          "Free tools for cyclists: calories burned per ride, heart-rate training zones, a weekly plan built around a goal, and two four-week training plans.",
      },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
      <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="label-mono text-accent">Tools</p>
          <h1 className="display-tight mt-4 text-[clamp(2.6rem,5.6vw,4.4rem)]">
            Numbers you can
            <br />
            ride with
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Three calculators built on published equations rather than guesses, and
          two training plans you could start this week. No accounts, no tracking,
          everything runs in your browser.
        </p>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {TOOLS.map((tool) => (
          <Link
            key={tool.href}
            to={tool.href}
            className="group flex flex-col justify-between gap-10 bg-background p-6 transition-colors duration-300 hover:bg-card md:p-8"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="label-mono text-muted-foreground">{tool.index}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.02em]">
                {tool.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tool.copy}
              </p>
            </div>
            <span className="label-mono text-foreground/45">{tool.meta}</span>
          </Link>
        ))}
      </div>

      <div className="relative mt-10 h-[34vh] min-h-[220px] w-full overflow-hidden rounded-sm bg-secondary">
        <Image
          src={DAWN}
          alt="A cyclist on an empty road at dawn"
          fittingType="fill"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}