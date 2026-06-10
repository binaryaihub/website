import { cn } from "@/lib/utils";

// Deterministic positions — random values would cause hydration mismatches.
const dots = [
  { left: "6%", top: "22%", size: 4, duration: 9, delay: 0 },
  { left: "14%", top: "68%", size: 3, duration: 12, delay: 1.4 },
  { left: "22%", top: "35%", size: 5, duration: 8, delay: 0.6 },
  { left: "31%", top: "78%", size: 3, duration: 11, delay: 2.2 },
  { left: "38%", top: "14%", size: 4, duration: 13, delay: 0.9 },
  { left: "47%", top: "60%", size: 3, duration: 7, delay: 1.8 },
  { left: "55%", top: "26%", size: 5, duration: 10, delay: 0.3 },
  { left: "63%", top: "72%", size: 4, duration: 14, delay: 2.6 },
  { left: "70%", top: "40%", size: 3, duration: 9, delay: 1.1 },
  { left: "78%", top: "16%", size: 4, duration: 12, delay: 0.5 },
  { left: "86%", top: "58%", size: 5, duration: 8, delay: 1.6 },
  { left: "93%", top: "30%", size: 3, duration: 11, delay: 2.0 },
];

export function FloatingDots({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {dots.map((dot, i) => (
        <span
          key={i}
          className="float-dot absolute rounded-full bg-[oklch(0.72_0.15_270)] opacity-20 blur-[1px]"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
