"use client";

import Link from "next/link";
import * as motion from "motion/react-client";
import {
  Brain,
  Languages,
  Dumbbell,
  Gem,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Magnetic } from "@/components/shared/magnetic";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { products } from "@/config/products";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  languages: Languages,
  dumbbell: Dumbbell,
  gem: Gem,
  "heart-handshake": HeartHandshake,
};

const platformLabels: Record<string, string> = {
  ios: "iOS",
  android: "Android",
  web: "Web",
};

export function ProductsPreview() {
  return (
    <section className="relative overflow-hidden py-24">
      <AuroraBackground intensity="subtle" className="opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionHeader
            title="Our Products"
            description="Live web experiences and upcoming AI-powered mobile apps, built to solve real problems."
          />
        </AnimatedContainer>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
          {products.slice(0, 3).map((product, index) => {
            const Icon = iconMap[product.icon] || Brain;
            return (
              <AnimatedContainer
                key={product.name}
                delay={index * 0.12}
                variant="fade-up"
              >
                <SpotlightCard className="h-full rounded-xl">
                  <Card className="group relative h-full overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-[0_0_30px_-10px_oklch(0.7_0.2_270/0.3)]">
                    <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(135deg,oklch(0.7_0.25_270/0.15),transparent_40%,oklch(0.75_0.18_200/0.15))]" />
                    <CardHeader>
                      <div className="mb-3 flex items-center justify-between">
                        <motion.div
                          whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
                          transition={{ duration: 0.5 }}
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-border/40"
                        >
                          <Icon className="h-5 w-5 text-primary" />
                        </motion.div>
                        <Badge
                          variant={
                            product.status === "live" ? "default" : "secondary"
                          }
                        >
                          {product.status === "coming-soon"
                            ? "Coming Soon"
                            : product.status === "beta"
                              ? "Beta"
                              : "Live"}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg transition-colors group-hover:text-foreground">
                        {product.name}
                      </CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {product.platforms.map((platform) => (
                          <Badge
                            key={platform}
                            variant="outline"
                            className="text-xs"
                          >
                            {platformLabels[platform] ?? platform}
                          </Badge>
                        ))}
                      </div>
                      {product.url && (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          Visit site
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </AnimatedContainer>
            );
          })}
        </div>

        <AnimatedContainer delay={0.3} className="mt-10 text-center">
          <Magnetic>
            <Button asChild variant="outline" className="group">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Magnetic>
        </AnimatedContainer>
      </div>
    </section>
  );
}
