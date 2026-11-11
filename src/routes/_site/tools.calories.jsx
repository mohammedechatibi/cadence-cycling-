import { createFileRoute } from "@tanstack/react-router";
import ToolShell from "@/components/tools/ToolShell";
import CalorieCalculator from "@/components/tools/CalorieCalculator";

export const Route = createFileRoute("/_site/tools/calories")({
  head: () => ({
    meta: [
      { title: "Calories burned cycling — calculator | Cadence" },
      {
        name: "description",
        content:
          "Estimate the calories you burn on a ride from your weight, duration and pace, and see what a regular week adds up to.",
      },
    ],
  }),
  component: CaloriesPage,
});

function CaloriesPage() {
  return (
    <ToolShell
      label="Tool 01 · Energy"
      title="Calories burned"
      intro="Energy cost on a bike is mostly a function of three things: how much you weigh, how long you ride and how hard you push. Set them below and the arithmetic follows the standard metabolic equation used in exercise testing."
    >
      <CalorieCalculator />
    </ToolShell>
  );
}