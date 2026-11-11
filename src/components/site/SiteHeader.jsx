import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import SiteNav from "@/components/site/SiteNav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 md:h-20 md:px-10">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="display-tight text-[22px] leading-none tracking-[-0.05em]">
            Cadence
          </span>
          <span className="label-mono hidden text-muted-foreground sm:block">
            Cycling &amp; Health
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden sm:block">
            <SiteNav />
          </div>
          <Link
            to="/tools/plan"
            className="group inline-flex items-center gap-1.5 rounded-sm bg-primary px-3.5 py-2.5 label-mono text-primary-foreground transition-colors duration-200 hover:bg-foreground md:px-4"
          >
            Build my week
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}