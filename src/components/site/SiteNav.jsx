import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GUIDES = [
  { label: "Benefits", to: "/benefits", note: "What cycling does to the body" },
  { label: "Strength", to: "/strength", note: "Lifting alongside the bike" },
  { label: "Recovery", to: "/recovery", note: "Sleep, easy days, deload weeks" },
  { label: "Nutrition", to: "/nutrition", note: "Fuelling the ride" },
  { label: "About", to: "/about", note: "How this site works" },
];

const LINKS = [
  { label: "Plans", to: "/plans" },
  { label: "Tools", to: "/tools" },
  { label: "Shop", to: "/shop" },
];

export default function SiteNav() {
  return (
    <nav className="flex items-center gap-6 lg:gap-8">
      {LINKS.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="label-mono text-primary transition-colors duration-200 hover:text-foreground"
          activeProps={{ className: "text-foreground" }}
        >
          {item.label}
        </Link>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger className="group inline-flex items-center gap-1.5 label-mono text-primary outline-none transition-colors hover:text-foreground data-[state=open]:text-foreground">
          Guides
          <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={14}
          className="w-64 rounded-sm border-border bg-popover p-1.5"
        >
          {GUIDES.map((guide) => (
            <DropdownMenuItem key={guide.to} asChild>
              <Link
                to={guide.to}
                className="flex cursor-pointer flex-col items-start gap-0.5 rounded-sm px-3 py-2.5 focus:bg-secondary"
              >
                <span className="text-[13px] font-medium text-foreground">
                  {guide.label}
                </span>
                <span className="text-[11.5px] leading-snug text-muted-foreground">
                  {guide.note}
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}