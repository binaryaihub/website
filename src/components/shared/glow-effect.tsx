"use client";

import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
}

export function GlowEffect({ className }: GlowEffectProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 overflow-hidden blur-3xl",
        className
      )}
    >
      <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[oklch(0.6_0.25_270)] to-[oklch(0.7_0.2_200)] opacity-20" />
    </div>
  );
}
