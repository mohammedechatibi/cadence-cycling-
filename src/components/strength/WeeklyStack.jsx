import { WEEK } from "@/lib/strength";

const TONE = {
  lift: "border-primary/60 bg-primary/10",
  ride: "border-border bg-card",
  rest: "border-border bg-secondary/40",
};

const LABEL = {
  lift: "text-primary",
  ride: "text-foreground/85",
  rest: "text-muted-foreground",
};

export default function WeeklyStack() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {WEEK.map((item) => (
        <div
          key={item.day}
          className={`rounded-sm border p-4 ${TONE[item.tone]}`}
        >
          <p className="label-mono text-muted-foreground">{item.day}</p>
          <p className={`mt-2 font-heading text-lg ${LABEL[item.tone]}`}>
            {item.block}
          </p>
          <p className="mt-1 text-[12.5px] leading-snug text-muted-foreground">
            {item.detail}
          </p>
        </div>
      ))}
      <div className="flex flex-col justify-center rounded-sm border border-dashed border-primary/50 p-4">
        <p className="label-mono text-primary">Total</p>
        <p className="mt-2 font-heading text-lg">≈ 5 hours</p>
        <p className="mt-1 text-[12.5px] leading-snug text-muted-foreground">
          80 min lifting, the rest easy riding
        </p>
      </div>
    </div>
  );
}