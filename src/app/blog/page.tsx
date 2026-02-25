import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { BlogCard } from "@/components/blog/blog-card";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI, mobile development, and building products. Read our latest articles and technical deep-dives.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionHeader
            title="Blog"
            description="Thoughts on AI, mobile development, engineering, and the products we're building."
          />
        </AnimatedContainer>

        {posts.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard
                key={post.slugAsParams}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
                slug={post.slugAsParams}
                index={index}
              />
            ))}
          </div>
        ) : (
          <AnimatedContainer className="mt-12 text-center">
            <p className="text-muted-foreground">
              No posts yet. Check back soon!
            </p>
          </AnimatedContainer>
        )}
      </div>
    </div>
  );
}
