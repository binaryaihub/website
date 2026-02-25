"use client";

import { type ReactNode } from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedContainer({
  children,
  className,
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
