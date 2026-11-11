import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";

const SHELL_NOTE =
  "Every tool runs in your browser. Nothing is saved, nothing is sent anywhere, and no account is needed.";

export default function ToolShell({ imageUrl, label, title, intro, children }) {
  return (
    <div>
      <header className="mx-auto max-w-[1400px] px-5 pb-10 pt-10 md:px-10 md:pt-16">
        <Link
          to="/tools"
          className="label-mono text-muted-foreground transition-colors hover:text-foreground"
        >
          ← All tools
        </Link>
        <div className="mt-6 grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="label-mono text-accent">{label}</p>
            <h1 className="display-tight mt-4 text-[clamp(2.2rem,4.8vw,3.9rem)]">
              {title}
            </h1>
          </div>
          <p className="text-[15px] leading-relaxed text-muted-foreground">{intro}</p>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        {imageUrl && (
          <div className="relative mb-10 h-[22vh] min-h-[150px] w-full overflow-hidden rounded-sm bg-secondary">
            <Image
              src={imageUrl}
              alt=""
              fittingType="fill"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {children}
        <p className="mt-10 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
          {SHELL_NOTE} Estimates are for healthy adults and are not medical advice.
        </p>
      </div>
    </div>
  );
}