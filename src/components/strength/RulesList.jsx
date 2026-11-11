import { RULES } from "@/lib/strength";

export default function RulesList() {
  return (
    <ol className="mt-10 divide-y divide-border border-y border-border">
      {RULES.map((rule, index) => (
        <li key={rule.title} className="grid gap-3 py-6 md:grid-cols-[auto_1fr] md:gap-8">
          <span className="label-mono pt-1 text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="font-heading text-lg leading-snug md:text-xl">
              {rule.title}
            </p>
            <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
              {rule.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}