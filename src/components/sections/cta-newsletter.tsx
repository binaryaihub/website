"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { GlowEffect } from "@/components/shared/glow-effect";

export function CtaNewsletter() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 py-24">
      <GlowEffect className="right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get notified when we launch new products and publish new articles.
            No spam, unsubscribe anytime.
          </p>

          <form
            className="mt-8 flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="you@example.com"
              className="flex-1"
              required
            />
            <Button type="submit">
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </AnimatedContainer>
      </div>
    </section>
  );
}
