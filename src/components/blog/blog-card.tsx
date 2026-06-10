"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
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

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  index: number;
}

export function BlogCard({
  title,
  description,
  date,
  tags,
  slug,
  index,
}: BlogCardProps) {
  return (
    <AnimatedContainer delay={Math.min(index, 5) * 0.08} variant="blur-up">
      <SpotlightCard className="h-full rounded-xl">
        <Link href={`/blog/${slug}`} className="block h-full">
          <Card className="group relative h-full overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-[0_0_30px_-10px_oklch(0.7_0.2_270/0.3)]">
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(135deg,oklch(0.7_0.25_270/0.15),transparent_40%,oklch(0.75_0.18_200/0.15))]" />
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <CardTitle className="text-xl leading-snug transition-colors group-hover:text-primary">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  {title}
                </span>
              </CardTitle>
              <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      </SpotlightCard>
    </AnimatedContainer>
  );
}
