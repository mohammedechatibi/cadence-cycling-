import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Read",
    links: [
      { label: "The benefits", to: "/benefits" },
      { label: "Lifting + cycling", to: "/strength" },
      { label: "Recovery", to: "/recovery" },
      { label: "Nutrition", to: "/nutrition" },
      { label: "The evidence", href: "/benefits#evidence" },
      { label: "About Cadence", to: "/about" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "Training plans", to: "/plans" },
      { label: "Calories burned", to: "/tools/calories" },
      { label: "Heart-rate zones", to: "/tools/zones" },
      { label: "Weekly plan", to: "/tools/plan" },
      { label: "Shop", to: "/shop" },
    ],
  },
];

const LINK_CLASS =
  "text-sm text-foreground/80 transition-colors hover:text-accent";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display-tight text-3xl">Cadence</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              What the research says about cycling, translated into numbers you can
              ride with. No supplements, no shortcuts, just time in the saddle.
            </p>

            <p className="label-mono mt-8 text-muted-foreground">Get in touch</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-accent"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-accent"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="label-mono text-muted-foreground">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link to={link.to} className={LINK_CLASS}>
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className={LINK_CLASS}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="label-mono">General information, not medical advice</p>
          <p className="label-mono">Speak to a clinician before starting a new programme</p>
        </div>
      </div>
    </footer>
  );
}