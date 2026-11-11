import { MYTHS } from "@/lib/nutrition";

export default function NutritionMyths() {
  return (
    <div className="grid gap-px border border-border bg-border md:grid-cols-2">
      {MYTHS.map((item) => (
        <div key={item.myth} className="bg-card p-6 md:p-8">
          <p className="display-tight text-[19px] leading-snug text-foreground">
            {item.myth}
          </p>
          <p className="label-mono mt-5 text-accent">What the evidence says</p>
          <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
            {item.truth}
          </p>
        </div>
      ))}
    </div>
  );
}