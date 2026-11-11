const STATS = [
  { value: "150–300", unit: "min", label: "moderate activity the WHO asks of adults each week" },
  { value: "46%", unit: "", label: "lower cardiovascular disease incidence in bike commuters" },
  { value: "≈8", unit: "METs", label: "a brisk hour on the bike, roughly eight times resting energy" },
  { value: "0", unit: "", label: "age limit — the guidelines hold at 70 as much as at 30" },
];

export default function StatTicker() {
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto grid max-w-[1400px] gap-px px-5 py-6 sm:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-8 lg:py-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-3 py-2">
            <span className="display-tight whitespace-nowrap text-3xl md:text-4xl">
              {stat.value}
              {stat.unit && (
                <span className="ml-1 font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.unit}
                </span>
              )}
            </span>
            <span className="max-w-[16rem] text-xs leading-snug text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}