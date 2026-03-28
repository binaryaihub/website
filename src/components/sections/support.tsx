import { Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { GlowEffect } from "@/components/shared/glow-effect";
import { siteConfig } from "@/config/site";

export function Support() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 py-24">
      <GlowEffect className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-red-500" />
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
          delay={0.1}
          className="mx-auto mt-12 flex max-w-md flex-col items-center rounded-2xl border border-border/60 bg-card/50 p-8 text-center backdrop-blur-sm"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Email Us</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Drop us an email and we&apos;ll get back to you as soon as possible.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="mt-6">
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </Button>
          </a>
        </AnimatedContainer>
      </div>
    </section>
  );
}
