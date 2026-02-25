"use client";

import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/shared/glow-effect";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <GlowEffect className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Mobile Apps
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Intelligence in
            <span className="block bg-gradient-to-r from-primary via-[oklch(0.7_0.15_250)] to-[oklch(0.65_0.2_280)] bg-clip-text text-transparent">
              Your Pocket
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            We build iOS & Android apps that harness the power of artificial
            intelligence. Smart, fast, and designed for the real world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
