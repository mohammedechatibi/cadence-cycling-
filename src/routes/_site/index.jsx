import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/Hero";
import StatTicker from "@/components/home/StatTicker";
import BenefitsPreview from "@/components/home/BenefitsPreview";
import ToolsTeaser from "@/components/home/ToolsTeaser";
import EvidenceBand from "@/components/home/EvidenceBand";

const HERO_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2022_Tour_of_Slovenia_%28Stage_3%2C_Tadej_Poga%C4%8Dar_celebrating_victory_on_Celje_Castle_v2%29.jpg/1920px-2022_Tour_of_Slovenia_%28Stage_3%2C_Tadej_Poga%C4%8Dar_celebrating_victory_on_Celje_Castle_v2%29.jpg";

const HERO_ALT =
  "Tadej Pogačar celebrating his stage win at the 2022 Tour of Slovenia";

const HERO_CREDIT = {
  text: "Tadej Pogačar, Tour of Slovenia 2022 · photo Petar Milošević, CC BY-SA 4.0",
  href: "https://commons.wikimedia.org/wiki/File:2022_Tour_of_Slovenia_(Stage_3,_Tadej_Poga%C4%8Dar_celebrating_victory_on_Celje_Castle_v2).jpg",
};

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Cadence — the health benefits of cycling, with the numbers" },
      {
        name: "description",
        content:
          "What cycling actually does for your heart, blood sugar, mood, joints and memory, backed by research, plus tools for calories burned, heart-rate zones and a weekly plan.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero imageUrl={HERO_IMAGE} alt={HERO_ALT} credit={HERO_CREDIT} />
      <StatTicker />
      <BenefitsPreview />
      <ToolsTeaser />
      <EvidenceBand />
    </>
  );
}