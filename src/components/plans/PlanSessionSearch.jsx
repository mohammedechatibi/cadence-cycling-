import { Search } from "lucide-react";
import PlanSessionResult from "@/components/plans/PlanSessionResult";

export default function PlanSessionSearch({ query, onChange, results, onSelect }) {
  const term = query.trim();

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search sessions by name or type</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search sessions — intervals, long ride, lift…"
          className="w-full border border-border bg-card py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </label>

      {term && (
        <div className="mt-3 border border-border bg-card">
          <div className="flex items-baseline justify-between border-b border-border px-4 py-2.5">
            <p className="label-mono text-muted-foreground">Matches</p>
            <p className="label-mono text-muted-foreground">{results.length}</p>
          </div>
          {results.length === 0 ? (
            <p className="px-4 py-6 text-sm text-muted-foreground">
              Nothing matches “{term}”. Try a name like long ride, or a type like easy,
              hard or lift.
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {results.map((result) => (
                <PlanSessionResult
                  key={`${result.planId}-${result.weekIndex}-${result.day}`}
                  result={result}
                  onSelect={onSelect}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}