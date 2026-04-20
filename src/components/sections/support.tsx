"use client";

import * as motion from "motion/react-client";
import { Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Magnetic } from "@/components/shared/magnetic";
import { siteConfig } from "@/config/site";

export function Support() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 py-24">
      <AuroraBackground intensity="subtle" className="opacity-70" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-md">
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            </motion.span>
            Support
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Have questions, feedback, or want to support our work? We&apos;d
            love to hear from you. Reach out to us anytime.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.15}
          variant="scale"
          className="mx-auto mt-12 max-w-md [perspective:1200px]"
        >
          <SpotlightCard className="rounded-2xl">
            <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-border hover:shadow-[0_0_40px_-10px_oklch(0.7_0.2_270/0.35)]">
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(135deg,oklch(0.7_0.25_270/0.15),transparent_40%,oklch(0.75_0.18_200/0.15))]" />
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.06 }}
                transition={{ duration: 0.55 }}
                className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-border/40"
              >
                <Mail className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold">Email Us</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Drop us an email and we&apos;ll get back to you as soon as
                possible.
              </p>
              <Magnetic className="mt-6">
                <a href={`mailto:${siteConfig.email}`}>
                  <Button className="group/btn relative gap-2 overflow-hidden">
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[oklch(0.6_0.25_270)] via-[oklch(0.7_0.2_220)] to-[oklch(0.65_0.22_310)] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                    <Mail className="h-4 w-4" />
                    {siteConfig.email}
                  </Button>
                </a>
              </Magnetic>
            </div>
          </SpotlightCard>
        </AnimatedContainer>
      </div>
    </section>
  );
}
