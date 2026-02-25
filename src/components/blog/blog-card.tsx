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
    <AnimatedContainer delay={index * 0.1}>
      <Link href={`/blog/${slug}`}>
        <Card className="group h-full border-border/50 bg-card/50 transition-colors hover:border-border">
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
              {title}
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
    </AnimatedContainer>
  );
}
