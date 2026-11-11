import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Flame, HeartPulse, CalendarDays } from "lucide-react";

const TOOLS = [
  {
    href: "/tools/calories",
    icon: Flame,
    title: "Calories burned",
    copy: "Weight, pace and duration in — an energy estimate out, with what a weekly routine adds up to.",
    meta: "5 inputs · instant",
  },
  {
    href: "/tools/zones",
    icon: HeartPulse,
    title: "Heart-rate zones",
    copy: "Your five training zones from age and resting pulse, and what each one is actually for.",
    meta: "Zone 1–5 · bpm",
  },
  {
    href: "/tools/plan",
    icon: CalendarDays,
    title: "Weekly plan",
    copy: "Pick a goal and how many days you can ride. Get a week that fits the guidance.",
    meta: "Four goals · 2–6 days",
  },
];

export default function ToolsTeaser() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <p className="label-mono text-primary-foreground/55">Tools</p>
          <h2 className="display-tight mt-3 text-[clamp(2rem,3.8vw,3.4rem)]">
            Turn the reading into a week
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 md:text-base">
            Three small calculators, honest about being estimates. No account, no
            tracking, nothing stored.
          </p>
        </div>

        <div className="mt-10 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-3">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                to={tool.href}
                className="group flex flex-col justify-between gap-10 bg-primary p-6 transition-colors duration-300 hover:bg-primary-foreground/5 md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-primary-foreground" strokeWidth={1.5} />
                    <ArrowUpRight className="h-4 w-4 text-primary-foreground/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold tracking-[-0.02em]">
                    {tool.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">
                    {tool.copy}
                  </p>
                </div>
                <span className="label-mono text-primary-foreground/45">{tool.meta}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}