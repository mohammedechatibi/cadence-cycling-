import { createFileRoute } from "@tanstack/react-router";
import ToolShell from "@/components/tools/ToolShell";
import ZoneCalculator from "@/components/tools/ZoneCalculator";

export const Route = createFileRoute("/_site/tools/zones")({
  head: () => ({
    meta: [
      { title: "Cycling heart-rate zones — calculator | Cadence" },
      {
        name: "description",
        content:
          "Work out your five cycling heart-rate zones in beats per minute from your age and resting pulse, and what each zone trains.",
      },
    ],
  }),
  component: ZonesPage,
});

function ZonesPage() {
  return (
    <ToolShell
      label="Tool 02 · Intensity"
      title="Heart-rate zones"
      intro="Training zones turn a vague feeling of effort into a number you can steer by. They come from your maximum heart rate and how much of it you have spare above resting — the reserve your zones are carved out of."
    >
      <ZoneCalculator />
    </ToolShell>
  );
}