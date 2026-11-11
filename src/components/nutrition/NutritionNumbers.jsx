import { NUMBERS } from "@/lib/nutrition";

export default function NutritionNumbers() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-[1400px] divide-y divide-border px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-10">
        {NUMBERS.map((item) => (
          <div key={item.label} className="py-8 md:px-8 md:py-10 md:first:pl-0">
            <p className="display-tight text-[clamp(2rem,3.4vw,2.75rem)] text-primary">
              {item.value}
            </p>
            <p className="label-mono mt-3 text-foreground">{item.label}</p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              {item.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}