"use client";

import * as motion from "motion/react-client";
import { useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-[oklch(0.6_0.25_270)] via-[oklch(0.7_0.2_200)] to-[oklch(0.75_0.18_160)]"
    />
  );
}
