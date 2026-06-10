"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { GridBackground } from "@/components/shared/grid-background";
import { Magnetic } from "@/components/shared/magnetic";

export function CtaNewsletter() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 py-24 noise-overlay">
      <AuroraBackground intensity="normal" />
      <GridBackground />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer
          variant="scale"
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stay in the{" "}
            <span className="bg-gradient-to-r from-[oklch(0.6_0.15_250)] via-[oklch(0.7_0.13_215)] to-[oklch(0.74_0.12_180)] bg-clip-text text-transparent gradient-shimmer">
              Loop
            </span>
          </h2>
          <p className="mt-4 text-foreground/75">
            Get notified when we launch new products and publish new articles.
            No spam, unsubscribe anytime.
          </p>

          <form
            className="mt-8 flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="you@example.com"
              className="h-10 flex-1 border-2 border-foreground/25 bg-background dark:bg-background placeholder:text-muted-foreground/90 hover:border-foreground/40"
              required
            />
            <Magnetic>
              <Button type="submit" className="group relative overflow-hidden">
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[oklch(0.5_0.16_255)] via-[oklch(0.68_0.13_220)] to-[oklch(0.7_0.12_180)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Subscribe
              </Button>
            </Magnetic>
          </form>
          <p className="mt-3 text-xs text-foreground/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </AnimatedContainer>
      </div>
    </section>
  );
}
