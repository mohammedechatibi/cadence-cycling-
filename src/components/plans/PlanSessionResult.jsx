import { KIND_LABEL } from "@/lib/plans";

export default function PlanSessionResult({ result, onSelect }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(result)}
        className="flex w-full items-baseline justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-secondary"
      >
        <span className="min-w-0">
          <span className="text-sm font-medium">{result.title}</span>
          <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {KIND_LABEL[result.kind]}
          </span>
          <span className="label-mono mt-1 block text-muted-foreground">
            {result.planName} · {result.weekLabel} · {result.day}
          </span>
        </span>
        <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
          {result.minutes} min
        </span>
      </button>
    </li>
  );
}