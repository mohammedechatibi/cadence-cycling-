import { useState } from "react";
import { heartRateZones, maxHeartRate } from "@/lib/cycleMath";

export default function ZoneCalculator() {
  const [age, setAge] = useState(35);
  const [resting, setResting] = useState(62);

  const max = maxHeartRate(age);
  const zones = heartRateZones({ age, resting });

  return (
    <div className="grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-[0.85fr_1.15fr]">
      <div className="bg-background p-6 md:p-10">
        <p className="label-mono text-muted-foreground">About you</p>

        <div className="mt-8">
          <div className="flex items-baseline justify-between">
            <label htmlFor="age" className="text-sm font-medium">
              Age
            </label>
            <span className="font-mono text-sm text-muted-foreground">{age} yrs</span>
          </div>
          <input
            id="age"
            type="range"
            min={16}
            max={85}
            value={age}
            onChange={(event) => setAge(Number(event.target.value))}
            className="mt-3 w-full accent-accent"
          />
        </div>

        <div className="mt-8">
          <label htmlFor="resting" className="text-sm font-medium">
            Resting heart rate
          </label>
          <input
            id="resting"
            type="number"
            min={35}
            max={110}
            value={resting}
            onChange={(event) => setResting(Number(event.target.value) || 62)}
            className="mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 font-mono text-lg outline-none focus:border-foreground"
          />
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Measured before you get out of bed. If you do not know it, leave 62 — the
            average adult sits between 60 and 70.
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-5">
          <p className="label-mono text-muted-foreground">Estimated maximum</p>
          <p className="display-tight mt-2 text-4xl">{max} bpm</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            208 − 0.7 × age, the Tanaka formula. It is a population estimate, not a
            measurement: fit riders are often ten beats above it.
          </p>
        </div>
      </div>

      <div className="bg-background p-6 md:p-10">
        <div className="flex items-baseline justify-between">
          <p className="label-mono text-muted-foreground">Your five zones</p>
          <p className="label-mono text-muted-foreground">Beats per minute</p>
        </div>

        <div className="mt-6 space-y-px border border-border bg-border">
          {zones.map((zone) => (
            <div key={zone.id} className="bg-card px-4 py-4 md:px-5">
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="label-mono text-accent">{zone.name}</span>
                  <span className="font-heading text-base font-semibold">
                    {zone.label}
                  </span>
                </div>
                <span className="font-mono text-sm tabular-nums">
                  {zone.low}–{zone.high}
                </span>
              </div>
              <div className="mt-3 h-1 w-full bg-border">
                <div
                  className="h-1 bg-primary"
                  style={{ width: `${Math.round(zone.to * 100)}%` }}
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {zone.purpose}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Most of your riding should be easy enough that you can speak in sentences.
          Aim for four easy sessions to every hard one — the easy ones build the base
          the hard ones are spent on.
        </p>
      </div>
    </div>
  );
}