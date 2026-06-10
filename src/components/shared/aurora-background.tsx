"use client";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  intensity?: "subtle" | "normal" | "vivid";
}

export function AuroraBackground({
  className,
  intensity = "normal",
}: AuroraBackgroundProps) {
  const opacity = {
    subtle: "opacity-[0.25]",
    normal: "opacity-40",
    vivid: "opacity-60",
  }[intensity];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute -inset-[25%] blur-3xl aurora-blob will-change-transform",
          opacity
        )}
      >
        <div className="absolute left-[10%] top-[10%] h-[45%] w-[45%] rounded-full bg-[oklch(0.5_0.16_255)]" />
        <div className="absolute right-[5%] top-[30%] h-[50%] w-[50%] rounded-full bg-[oklch(0.72_0.12_195)]" />
        <div className="absolute left-[25%] bottom-[5%] h-[40%] w-[55%] rounded-full bg-[oklch(0.7_0.12_180)]" />
        <div className="absolute right-[20%] bottom-[20%] h-[35%] w-[35%] rounded-full bg-[oklch(0.76_0.11_175)]" />
      </div>
    </div>
  );
}
