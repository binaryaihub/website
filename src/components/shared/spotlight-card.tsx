"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import * as motion from "motion/react-client";
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

export function SpotlightCard({
  children,
  className,
  tilt = true,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 150, damping: 18 });

  const spotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(420px circle at ${x}px ${y}px, oklch(0.7 0.2 270 / 0.15), transparent 60%)`
  );

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    if (tilt) {
      const px = (x / rect.width - 0.5) * 2;
      const py = (y / rect.height - 0.5) * 2;
      rotateYRaw.set(px * 4);
      rotateXRaw.set(-py * 4);
    }
  }

  function handleLeave() {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        tilt
          ? { rotateX, rotateY, transformStyle: "preserve-3d" }
          : undefined
      }
      className={cn("group/spot relative", className)}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
      />
      {children}
    </motion.div>
  );
}
