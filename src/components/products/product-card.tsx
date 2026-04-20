"use client";

import * as motion from "motion/react-client";
import {
  Brain,
  Languages,
  Dumbbell,
  Smartphone,
  CheckCircle2,
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
import { AnimatedContainer } from "@/components/shared/animated-container";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import type { Product } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  languages: Languages,
  dumbbell: Dumbbell,
};

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const Icon = iconMap[product.icon] || Brain;

  return (
    <AnimatedContainer delay={index * 0.08} variant="fade-up">
      <SpotlightCard className="h-full rounded-xl">
        <Card className="group relative h-full overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-[0_0_30px_-10px_oklch(0.7_0.2_270/0.3)]">
          <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(135deg,oklch(0.7_0.25_270/0.15),transparent_40%,oklch(0.75_0.18_200/0.15))]" />
          <CardHeader>
            <div className="mb-3 flex items-center justify-between">
              <motion.div
                whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
                transition={{ duration: 0.55 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-border/40"
              >
                <Icon className="h-6 w-6 text-primary" />
              </motion.div>
              <Badge
                variant={product.status === "live" ? "default" : "secondary"}
              >
                {product.status === "coming-soon"
                  ? "Coming Soon"
                  : product.status === "beta"
                    ? "Beta"
                    : "Live"}
              </Badge>
            </div>
            <CardTitle className="text-xl">{product.name}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              {product.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-1.5">
                {product.platforms.map((platform) => (
                  <Badge key={platform} variant="outline" className="text-xs">
                    {platform === "ios" ? "iOS" : "Android"}
                  </Badge>
                ))}
              </div>
            </div>

            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/60" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </SpotlightCard>
    </AnimatedContainer>
  );
}
