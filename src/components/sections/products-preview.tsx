import Link from "next/link";
import {
  Brain,
  Languages,
  Dumbbell,
  ArrowRight,
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
import { products } from "@/config/products";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  languages: Languages,
  dumbbell: Dumbbell,
};

export function ProductsPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionHeader
            title="Our Products"
            description="AI-powered mobile apps designed to make your life smarter and more productive."
          />
        </AnimatedContainer>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product, index) => {
            const Icon = iconMap[product.icon] || Brain;
            return (
              <AnimatedContainer key={product.name} delay={index * 0.1}>
                <Card className="group relative overflow-hidden border-border/50 bg-card/50 transition-colors hover:border-border">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="secondary">Coming Soon</Badge>
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {product.platforms.map((platform) => (
                        <Badge
                          key={platform}
                          variant="outline"
                          className="text-xs"
                        >
                          {platform === "ios" ? "iOS" : "Android"}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedContainer>
            );
          })}
        </div>

        <AnimatedContainer delay={0.3} className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedContainer>
      </div>
    </section>
  );
}
