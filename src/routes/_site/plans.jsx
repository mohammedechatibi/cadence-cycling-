import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import PlanSwitcher from "@/components/plans/PlanSwitcher";
import PlanWeekStrip from "@/components/plans/PlanWeekStrip";
import PlanWeekDetail from "@/components/plans/PlanWeekDetail";
import PlanNotes from "@/components/plans/PlanNotes";
import PlanSessionSearch from "@/components/plans/PlanSessionSearch";
import { PLANS, KIND_LABEL, buildPlanWeeks } from "@/lib/plans";

export const Route = createFileRoute("/_site/plans")({
  head: () => ({
    meta: [
      { title: "Training plans: cycling only, or cycling + lifting | Cadence" },
      {
        name: "description",
        content:
          "Two four-week training plans: four rides a week, or two full-body lifts beside three rides, with session detail and a clear progression.",
      },
    ],
  }),
  component: PlansPage,
});

function PlansPage() {
  const [planId, setPlanId] = useState(PLANS[0].id);
  const [weekIndex, setWeekIndex] = useState(0);
  const [query, setQuery] = useState("");

  const plan = PLANS.find((item) => item.id === planId);
  const weeks = buildPlanWeeks(plan);
  const week = weeks[weekIndex];

  const selectPlan = (id) => {
    setPlanId(id);
    setWeekIndex(0);
  };

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return PLANS.flatMap((item) =>
      buildPlanWeeks(item).flatMap((itemWeek, index) =>
        itemWeek.days
          .filter((day) =>
            `${day.title} ${KIND_LABEL[day.kind]}`.toLowerCase().includes(term)
          )
          .map((day) => ({
            ...day,
            planId: item.id,
            planName: item.name,
            weekIndex: index,
            weekLabel: itemWeek.label,
          }))
      )
    );
  }, [query]);

  const openResult = (result) => {
    setPlanId(result.planId);
    setWeekIndex(result.weekIndex);
    setQuery("");
  };

  const facts = [
    { label: "Rides / week", value: plan.sessions.filter((s) => ["easy", "hard", "long"].includes(s.kind)).length },
    { label: "Lifts / week", value: plan.sessions.filter((s) => s.kind === "lift").length },
    { label: "Week 1 total", value: `${weeks[0].total} min` },
    { label: "Block", value: "4 weeks × 3" },
  ];

  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
      <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="label-mono text-accent">Training plans</p>
          <h1 className="display-tight mt-4 text-[clamp(2.6rem,5.6vw,4.4rem)]">
            Two plans.
            <br />
            Pick the one you'll keep.
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Both are four-week blocks with the same internal logic: two hard days,
          the rest genuinely easy, and a lighter week that lets the work land. Repeat
          the block three times before you change anything.
        </p>
      </div>

      <div className="mt-12">
        <PlanSessionSearch
          query={query}
          onChange={setQuery}
          results={results}
          onSelect={openResult}
        />
      </div>

      <div className="mt-6">
        <PlanSwitcher plans={PLANS} activeId={planId} onChange={selectPlan} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-background p-5">
            <p className="label-mono text-muted-foreground">{fact.label}</p>
            <p className="mt-2 font-mono text-lg tabular-nums">{fact.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex items-baseline justify-between">
          <p className="label-mono text-muted-foreground">The block</p>
          <p className="label-mono text-muted-foreground">{plan.name}</p>
        </div>
        <div className="mt-4">
          <PlanWeekStrip
            weeks={weeks}
            activeIndex={weekIndex}
            onSelect={setWeekIndex}
          />
        </div>
        <div className="mt-6">
          <PlanWeekDetail week={week} />
        </div>
      </div>

      <div className="mt-10">
        <PlanNotes />
      </div>
    </div>
  );
}