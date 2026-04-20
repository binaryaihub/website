"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { GridBackground } from "@/components/shared/grid-background";
import { Magnetic } from "@/components/shared/magnetic";

const LINE_ONE = "Intelligence in";
const LINE_TWO = "Your Pocket";
const TAGLINES = [
  "Smart apps for the real world.",
  "AI that fits in your pocket.",
  "Built for iOS. Built for Android.",
  "Fast, focused, beautifully useful.",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  const orb1X = useTransform(smx, (v) => v * 30);
  const orb1Y = useTransform(smy, (v) => v * 30);
  const orb2X = useTransform(smx, (v) => v * -40);
  const orb2Y = useTransform(smy, (v) => v * -40);
  const orb3X = useTransform(smx, (v) => v * 20);
  const orb3Y = useTransform(smy, (v) => v * -25);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44 noise-overlay"
    >
      <AuroraBackground intensity="normal" />
      <GridBackground />

      <motion.div
        aria-hidden
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute left-[8%] top-[18%] h-24 w-24 rounded-full bg-[oklch(0.7_0.2_270)] opacity-30 blur-2xl"
      />
      <motion.div
        aria-hidden
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute right-[10%] top-[28%] h-32 w-32 rounded-full bg-[oklch(0.75_0.18_200)] opacity-30 blur-2xl"
      />
      <motion.div
        aria-hidden
        style={{ x: orb3X, y: orb3Y }}
        className="pointer-events-none absolute left-[20%] bottom-[12%] h-28 w-28 rounded-full bg-[oklch(0.7_0.22_310)] opacity-25 blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-md">
              <motion.span
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <Sparkles className="h-3.5 w-3.5 text-[oklch(0.75_0.18_280)]" />
              </motion.span>
              AI-Powered Mobile Apps
            </div>
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <SplitLine text={LINE_ONE} delay={0.1} />
            <span className="mt-1 block bg-gradient-to-r from-[oklch(0.7_0.25_270)] via-[oklch(0.75_0.2_220)] to-[oklch(0.78_0.2_310)] bg-clip-text text-transparent gradient-shimmer">
              <SplitLine text={LINE_TWO} delay={0.4} gradient />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 min-h-[3.5rem] text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            <Typewriter phrases={TAGLINES} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Magnetic>
              <Button asChild size="lg" className="group relative overflow-hidden">
                <Link href="/products">
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[oklch(0.6_0.25_270)] via-[oklch(0.7_0.2_220)] to-[oklch(0.65_0.22_310)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline" size="lg" className="group backdrop-blur-sm">
                <Link href="/blog">
                  Read Our Blog
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
              <span className="tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-8 w-[1px] bg-gradient-to-b from-muted-foreground/60 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SplitLine({
  text,
  delay = 0,
  gradient = false,
}: {
  text: string;
  delay?: number;
  gradient?: boolean;
}) {
  return (
    <span className={gradient ? "inline-block" : "block"}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, y: "60%", rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + wi * 0.08 + ci * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < text.split(" ").length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const done = !deleting && display === current;
    const empty = deleting && display === "";

    if (done) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (empty) {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }
    const t = setTimeout(
      () => {
        setDisplay((d) =>
          deleting ? current.slice(0, d.length - 1) : current.slice(0, d.length + 1)
        );
      },
      deleting ? 28 : 52
    );
    return () => clearTimeout(t);
  }, [display, deleting, index, phrases]);

  return (
    <span>
      {display}
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] bg-foreground/70 align-middle"
      />
    </span>
  );
}
