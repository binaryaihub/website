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
    <AnimatedContainer delay={index * 0.1}>
      <Card className="group h-full border-border/50 bg-card/50 transition-colors hover:border-border">
        <CardHeader>
          <div className="mb-3 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
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
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary/60" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </AnimatedContainer>
  );
}
