import { createFileRoute } from "@tanstack/react-router";
import ToolShell from "@/components/tools/ToolShell";
import PlanBuilder from "@/components/tools/PlanBuilder";

export const Route = createFileRoute("/_site/tools/plan")({
  head: () => ({
    meta: [
      { title: "Weekly cycling plan builder | Cadence" },
      {
        name: "description",
        content:
          "Pick a goal, the days you can ride and how long you have. Get a weekly cycling schedule built around the WHO activity guidance.",
      },
    ],
  }),
  component: PlanPage,
});

function PlanPage() {
  return (
    <ToolShell
      label="Tool 03 · Routine"
      title="Build my week"
      intro="The hard part is not knowing that cycling is good for you, it is finding the hours. Choose a goal and an honest number of riding days, and this lays out sessions that fit inside the week you actually have."
    >
      <PlanBuilder />
    </ToolShell>
  );
}