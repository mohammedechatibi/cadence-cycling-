import { LEVERS } from "@/lib/recovery";

export default function RecoveryLevers() {
  return (
    <div className="grid gap-px border border-border bg-border md:grid-cols-2">
      {LEVERS.map((lever) => (
        <article key={lever.n} className="bg-card p-6 md:p-8">
          <div className="flex items-baseline gap-3">
            <span className="label-mono text-primary">{lever.n}</span>
            <h3 className="display-tight text-[22px] leading-none">{lever.title}</h3>
          </div>

          <p className="mt-4 text-[14px] font-medium text-foreground/90">
            {lever.lede}
          </p>

          {lever.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}

          <p className="mt-5 border-t border-border pt-4 text-[12.5px] leading-relaxed text-foreground/70">
            {lever.detail}
          </p>
        </article>
      ))}
    </div>
  );
}