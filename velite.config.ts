import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const blog = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      tags: s.array(s.string()).optional().default([]),
      published: s.boolean().default(true),
      slug: s.path(),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split("/").slice(1).join("/"),
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blog },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark-default" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
