import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  fade?: boolean;
}

export function GridBackground({ className, fade = true }: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        "[background-image:linear-gradient(to_right,oklch(0.7_0.02_285/0.07)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.7_0.02_285/0.07)_1px,transparent_1px)]",
        "[background-size:56px_56px]",
        fade &&
          "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]",
        className
      )}
    />
  );
}
