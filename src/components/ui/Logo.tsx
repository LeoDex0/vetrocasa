import { cn } from "@/lib/utils";

export default function Logo({
  className,
  markClassName,
  light = false,
}: {
  className?: string;
  markClassName?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex flex-col gap-1", className)}>
      <span className="inline-flex items-center gap-2.5">
        <svg
          viewBox="0 0 40 40"
          aria-hidden
          className={cn("h-8 w-8 shrink-0", markClassName)}
        >
          {/* top-left, bottom-left, bottom-right: blue squares rounded only on their outer corner */}
          <path d="M0,6 A6,6 0 0 1 6,0 L18.5,0 L18.5,18.5 L0,18.5 Z" fill="#6c98bf" />
          <path d="M0,21.5 L18.5,21.5 L18.5,40 L6,40 A6,6 0 0 1 0,34 Z" fill="#6c98bf" />
          <path d="M21.5,21.5 L40,21.5 L40,34 A6,6 0 0 1 34,40 L21.5,40 Z" fill="#6c98bf" />
          {/* top-right: lime-green circle */}
          <circle cx="30.75" cy="9.25" r="8" fill="#b4d44a" />
        </svg>
        <span className="leading-none">
          <span
            className={cn(
              "block font-display text-[17px] font-bold tracking-tight",
              light ? "text-paper" : "text-ink"
            )}
          >
            WINDOWS STYLE
          </span>
          <span
            className={cn(
              "block text-[10px] font-medium tracking-[0.35em]",
              light ? "text-paper/60" : "text-muted"
            )}
          >
            TRADING
          </span>
        </span>
      </span>
      <span className="italy-stripe">
        <span />
        <span />
        <span />
      </span>
    </span>
  );
}
