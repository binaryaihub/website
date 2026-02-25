# BinaryAIHub.com

AI products company website — built with Next.js 15, Tailwind CSS v4, shadcn/ui, and Velite MDX.

**Live**: [binaryaihub.com](https://binaryaihub.com)

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Package Manager**: bun
- **Styling**: Tailwind CSS v4 + shadcn/ui (New York style, Zinc base)
- **Content**: Velite + MDX for blog posts
- **Animations**: motion (framer-motion v12+)
- **Icons**: lucide-react + custom SVG social icons
- **Hosting**: Vercel

## Prerequisites

- [bun](https://bun.sh) (v1.3+)
- [Node.js](https://nodejs.org) (v18+)
- [Vercel CLI](https://vercel.com/cli) (for deployment)

## Getting Started

```bash
# Install dependencies
bun install

# Run development server (starts Velite watcher + Next.js)
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
binaryaihub/
├── content/blog/              # MDX blog posts
├── public/images/             # Logo, OG images, product placeholders
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout (fonts, theme, header/footer)
│   │   ├── page.tsx           # Landing page
│   │   ├── globals.css        # Tailwind v4 + OKLCH dark theme
│   │   ├── products/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # header, footer, mobile-nav, theme-toggle
│   │   ├── sections/          # hero, products-preview, blog-highlights, cta
│   │   ├── blog/              # blog-card, blog-header, mdx-components
│   │   ├── products/          # product-card, app-store-badges
│   │   ├── icons/             # custom SVG social icons
│   │   └── shared/            # section-header, glow-effect, animated-container
│   ├── config/
│   │   ├── site.ts            # Site metadata, nav items, social links
│   │   └── products.ts        # Product data
│   ├── lib/
│   │   ├── utils.ts           # cn() helper
│   │   └── blog.ts            # Blog helper functions
│   └── types/index.ts
├── velite.config.ts           # Blog collection schema + MDX plugins
├── next.config.ts
├── components.json            # shadcn/ui config
└── package.json
```

## Common Tasks

### Adding a Blog Post

1. Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A short description."
date: "2025-03-01"
tags: ["tag1", "tag2"]
published: true
---

Your markdown content here.
```

2. Run `bun run dev` — Velite watches for changes and rebuilds automatically.

### Adding a shadcn/ui Component

```bash
bunx shadcn@latest add <component-name>
```

### Editing Products

Update the product list in `src/config/products.ts`.

### Editing Site Config (nav, social links, metadata)

Update `src/config/site.ts`.

## Build & Test Locally

```bash
# Production build (runs Velite build, then Next.js build)
bun run build

# Serve the production build locally
bun run start
```

Open [http://localhost:3000](http://localhost:3000) to verify.

## Deployment

### Automatic (Recommended)

Connect the GitHub repo to Vercel for automatic deploys on every push:

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import `binaryaihub/website` from GitHub
3. Vercel auto-detects Next.js — just click **Deploy**
4. Every push to `main` will auto-deploy to production

### Manual (via CLI)

```bash
# Login (one-time)
npx vercel login

# Deploy to preview
npx vercel

# Deploy to production
npx vercel --prod
```

### Full Workflow: Edit → Test → Deploy

```bash
# 1. Make your changes
# 2. Test locally
bun run dev

# 3. Build to check for errors
bun run build

# 4. Commit and push
git add .
git commit -m "your commit message"
git push

# 5a. If GitHub is connected to Vercel → auto-deploys
# 5b. Or deploy manually
npx vercel --prod
```

## Custom Domain (GoDaddy DNS)

The domain `binaryaihub.com` points to Vercel via these DNS records on GoDaddy:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | `76.76.21.21`            |
| CNAME | www  | `cname.vercel-dns.com`   |

If Vercel shows new recommended IPs in the dashboard, update accordingly.

## Routes

| Route              | Description                        |
|--------------------|------------------------------------|
| `/`                | Landing page                       |
| `/products`        | Product showcase                   |
| `/blog`            | Blog listing                       |
| `/blog/[slug]`     | Individual blog post               |
| `/about`           | Company mission, vision, values    |
| `/contact`         | Contact form + social links        |
| `/sitemap.xml`     | Auto-generated sitemap             |
| `/robots.txt`      | Auto-generated robots.txt          |
