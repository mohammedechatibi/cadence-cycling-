import { useState } from "react";
import { Bike, Flame } from "lucide-react";
import { INTENSITIES, caloriesBurned } from "@/lib/cycleMath";
import { cn } from "@/lib/utils";

const KG = 75;
const MIN = 60;

export default function CalorieCalculator() {
  const [weight, setWeight] = useState(KG);
  const [minutes, setMinutes] = useState(MIN);
  const [intensity, setIntensity] = useState("moderate");

  const selected = INTENSITIES.find((item) => item.id === intensity);
  const kcal = caloriesBurned({ weightKg: weight, minutes, met: selected.met });
  const perHour = caloriesBurned({ weightKg: weight, minutes: 60, met: selected.met });
  const weeklyKcal = kcal * 3;
  const weeklyMinutes = minutes * 3;
  const kmPerHour = { leisure: 14, moderate: 18, brisk: 21, vigorous: 24, racing: 30 }[
    intensity
  ];

  return (
    <div className="grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-[0.95fr_1.05fr]">
      <div className="bg-background p-6 md:p-10">
        <p className="label-mono flex items-center gap-2 text-muted-foreground">
          <Bike className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
          Your ride
        </p>

        <div className="mt-8">
          <label htmlFor="weight" className="text-sm font-medium">
            Body weight <span className="text-muted-foreground">(kg)</span>
          </label>
          <input
            id="weight"
            type="number"
            min={35}
            max={200}
            value={weight}
            onChange={(event) => setWeight(Number(event.target.value) || KG)}
            className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 font-mono text-lg outline-none focus:border-foreground"
          />
        </div>

        <div className="mt-6">
          <div className="flex items-baseline justify-between">
            <label htmlFor="minutes" className="text-sm font-medium">
              Ride length
            </label>
            <span className="font-mono text-sm text-muted-foreground">{minutes} min</span>
          </div>
          <input
            id="minutes"
            type="range"
            min={15}
            max={180}
            step={5}
            value={minutes}
            onChange={(event) => setMinutes(Number(event.target.value))}
            className="mt-3 w-full accent-accent"
          />
        </div>

        <div className="mt-8">
          <p className="flex items-center gap-2 text-sm font-medium">
            <Flame className="h-4 w-4 text-accent" strokeWidth={1.75} />
            How hard
          </p>
          <div className="mt-3 space-y-px border border-border bg-border">
            {INTENSITIES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIntensity(item.id)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 bg-background px-4 py-3 text-left transition-colors",
                  intensity === item.id ? "bg-card" : "hover:bg-card/70"
                )}
              >
                <span>
                  <span className="block text-sm font-medium">{item.label}</span>
                  <span className="block text-xs text-muted-foreground">{item.detail}</span>
                </span>
                <span
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full transition-colors",
                    intensity === item.id ? "bg-accent" : "bg-border"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-primary p-6 text-primary-foreground md:p-10">
        <Bike
          className="pointer-events-none absolute -bottom-10 -right-8 h-44 w-44 text-primary-foreground/10"
          strokeWidth={0.85}
        />
        <div className="relative">
          <p className="label-mono flex items-center gap-2 text-primary-foreground/55">
            <Flame className="h-3.5 w-3.5" strokeWidth={2} />
            Energy for this ride
          </p>
          <p className="display-tight mt-4 text-[clamp(3.5rem,9vw,5.5rem)] leading-none">
            {kcal.toLocaleString("en-US")}
            <span className="ml-2 font-body text-sm font-medium uppercase tracking-widest text-primary-foreground/60">
              kcal
            </span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            That is {perHour.toLocaleString("en-US")} kcal per hour at {kmPerHour} km/h,
            using a metabolic cost of {selected.met} METs.
          </p>
        </div>

        <dl className="relative space-y-px border-t border-primary-foreground/15 pt-6">
          <div className="flex items-baseline justify-between gap-6 py-2">
            <dt className="text-sm text-primary-foreground/65">Three rides a week</dt>
            <dd className="font-mono text-sm">
              {weeklyKcal.toLocaleString("en-US")} kcal
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-6 py-2">
            <dt className="text-sm text-primary-foreground/65">Weekly riding time</dt>
            <dd className="font-mono text-sm">{weeklyMinutes} min</dd>
          </div>
          <div className="flex items-baseline justify-between gap-6 py-2">
            <dt className="text-sm text-primary-foreground/65">WHO target (150 min)</dt>
            <dd className="font-mono text-sm">
              {Math.round((weeklyMinutes / 150) * 100)}%
            </dd>
          </div>
        </dl>

        <p className="relative text-xs leading-relaxed text-primary-foreground/45">
          Estimates assume a healthy adult and a mostly flat ride. Wind, hills and
          drafting can move the real number by a third either way.
        </p>
      </div>
    </div>
  );
}