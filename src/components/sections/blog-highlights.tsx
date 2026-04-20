import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Magnetic } from "@/components/shared/magnetic";
import { BlogCard } from "./blog-card";
import { getRecentPosts } from "@/lib/blog";

export async function BlogHighlights() {
  const posts = await getRecentPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-t border-border/40 py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionHeader
            title="Latest from the Blog"
            description="Insights on AI, mobile development, and building products that matter."
          />
        </AnimatedContainer>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slugAsParams}
              href={`/blog/${post.slugAsParams}`}
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              index={index}
            />
          ))}
        </div>

        <AnimatedContainer delay={0.3} className="mt-10 text-center">
          <Magnetic>
            <Button asChild variant="outline" className="group">
              <Link href="/blog">
                All Posts
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Magnetic>
        </AnimatedContainer>
      </div>
    </section>
  );
}
