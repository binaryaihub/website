import { Ticker } from "@/components/shared/ticker";

interface BlogTickerPost {
  title: string;
  date: string;
  slugAsParams: string;
}

export function BlogTicker({ posts }: { posts: BlogTickerPost[] }) {
  if (posts.length === 0) return null;

  // Short content loops visibly — pad the track so the marquee stays seamless.
  const repeat = Math.max(2, Math.ceil(6 / posts.length));

  return (
    <Ticker repeat={repeat}>
      {posts.map((post) => (
        <span
          key={post.slugAsParams}
          className="inline-flex items-center gap-2 text-sm whitespace-nowrap"
        >
          <span className="bg-gradient-to-r from-[oklch(0.6_0.15_250)] via-[oklch(0.7_0.13_215)] to-[oklch(0.74_0.12_180)] bg-clip-text font-bold text-transparent">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="text-muted-foreground">{post.title}</span>
          <span
            aria-hidden
            className="ml-10 h-1 w-1 rounded-full bg-[oklch(0.6_0.15_250)]/60"
          />
        </span>
      ))}
    </Ticker>
  );
}
