import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
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
import { getRecentPosts } from "@/lib/blog";

export async function BlogHighlights() {
  const posts = await getRecentPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionHeader
            title="Latest from the Blog"
            description="Insights on AI, mobile development, and building products that matter."
          />
        </AnimatedContainer>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <AnimatedContainer key={post.slugAsParams} delay={index * 0.1}>
              <Link href={`/blog/${post.slugAsParams}`}>
                <Card className="group h-full border-border/50 bg-card/50 transition-colors hover:border-border">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedContainer>
          ))}
        </div>

        <AnimatedContainer delay={0.3} className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">
              All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedContainer>
      </div>
    </section>
  );
}
