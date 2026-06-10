import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TickerProps {
  children: ReactNode;
  className?: string;
  /** Copies of the items per track — raise for short content so the loop stays seamless. */
  repeat?: number;
}

function Track({
  children,
  repeat,
  hidden = false,
}: {
  children: ReactNode;
  repeat: number;
  hidden?: boolean;
}) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="marquee-track flex shrink-0 items-center gap-12 pr-12"
    >
      {Array.from({ length: repeat }, (_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </div>
  );
}

export function Ticker({ children, className, repeat = 2 }: TickerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border/40 bg-card/20 py-3",
        className
      )}
    >
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Track repeat={repeat}>{children}</Track>
        <Track repeat={repeat} hidden>
          {children}
        </Track>
      </div>
    </div>
  );
}
