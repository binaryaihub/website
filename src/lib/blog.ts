// Blog helper functions — works with Velite-generated data
// The .velite directory is generated at build time

let posts: Post[] = [];

interface Post {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  slug: string;
  slugAsParams: string;
  body: string;
}

async function loadPosts(): Promise<Post[]> {
  try {
    const { blog } = await import("../../.velite");
    return blog as Post[];
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  if (posts.length === 0) {
    posts = await loadPosts();
  }
  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(
  slug: string
): Promise<Post | undefined> {
  const allPosts = await getAllPosts();
  return allPosts.find((post) => post.slugAsParams === slug);
}

export async function getRecentPosts(count: number = 3): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, count);
}
