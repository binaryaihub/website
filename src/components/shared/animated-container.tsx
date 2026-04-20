"use client";

import { type ReactNode } from "react";
import * as motion from "motion/react-client";
import type { TargetAndTransition } from "motion/react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade" | "scale" | "slide-left" | "slide-right";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  duration?: number;
}

const variants: Record<
  Variant,
  { initial: TargetAndTransition; whileInView: TargetAndTransition }
> = {
  "fade-up": {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.94 },
    whileInView: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
  },
};

export function AnimatedContainer({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  duration = 0.6,
}: AnimatedContainerProps) {
  const v = variants[variant];
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
