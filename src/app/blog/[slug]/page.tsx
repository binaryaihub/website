import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/blog/mdx-content";
import { BlogHeader } from "@/components/blog/blog-header";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/config/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteConfig.url}/blog/${post.slugAsParams}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <BlogHeader title={post.title} date={post.date} tags={post.tags} />
        <div className="prose prose-zinc dark:prose-invert mt-10 max-w-none">
          <MDXContent code={post.body} />
        </div>
      </div>
    </article>
  );
}
