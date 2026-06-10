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
          <span className="bg-gradient-to-r from-[oklch(0.7_0.25_270)] via-[oklch(0.75_0.2_220)] to-[oklch(0.78_0.2_310)] bg-clip-text font-bold text-transparent">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="text-muted-foreground">{post.title}</span>
          <span
            aria-hidden
            className="ml-10 h-1 w-1 rounded-full bg-[oklch(0.7_0.2_270)]/60"
          />
        </span>
      ))}
    </Ticker>
  );
}
