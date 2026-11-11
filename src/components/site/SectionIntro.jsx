import { cn } from "@/lib/utils";

const SIZES = {
  sm: "text-[clamp(1.8rem,3.2vw,2.6rem)]",
  md: "text-[clamp(2rem,3.6vw,3rem)]",
  lg: "text-[clamp(2.6rem,5.6vw,4.4rem)]",
};

/** The site's one section opening: eyebrow, heading left, supporting line right. */
export default function SectionIntro({
  eyebrow,
  title,
  lede,
  size = "md",
  as: Title = "h2",
  className,
}) {
  return (
    <div
      className={cn(
        "grid items-end gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16",
        className
      )}
    >
      <div>
        {eyebrow ? <p className="label-mono text-accent">{eyebrow}</p> : null}
        <Title className={cn("display-tight", eyebrow && "mt-4", SIZES[size])}>
          {title}
        </Title>
      </div>
      {lede ? (
        <p className="text-[14.5px] leading-relaxed text-muted-foreground md:text-[15px]">
          {lede}
        </p>
      ) : null}
    </div>
  );
}