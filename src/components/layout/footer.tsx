"use client";

import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Github, Mail, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { siteConfig } from "@/config/site";
import {
  XIcon,
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
  DiscordIcon,
  RedditIcon,
  ThreadsIcon,
  DevToIcon,
  MediumIcon,
  HashnodeIcon,
  ProductHuntIcon,
  HuggingFaceIcon,
} from "@/components/icons/social-icons";

const footerLinks = {
  product: [
    { title: "Products", href: "/products" },
    { title: "Blog", href: "/blog" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Support", href: "/support" },
  ],
  legal: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "X", href: siteConfig.links.twitter, icon: XIcon },
  { name: "GitHub", href: siteConfig.links.github, icon: Github },
  { name: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedInIcon },
  { name: "YouTube", href: siteConfig.links.youtube, icon: YouTubeIcon },
  { name: "Instagram", href: siteConfig.links.instagram, icon: InstagramIcon },
  { name: "TikTok", href: siteConfig.links.tiktok, icon: TikTokIcon },
  { name: "Facebook", href: siteConfig.links.facebook, icon: FacebookIcon },
  { name: "Discord", href: siteConfig.links.discord, icon: DiscordIcon },
  { name: "Reddit", href: siteConfig.links.reddit, icon: RedditIcon },
  { name: "Threads", href: siteConfig.links.threads, icon: ThreadsIcon },
  { name: "Dev.to", href: siteConfig.links.devto, icon: DevToIcon },
  { name: "Medium", href: siteConfig.links.medium, icon: MediumIcon },
  { name: "Hashnode", href: siteConfig.links.hashnode, icon: HashnodeIcon },
  {
    name: "Product Hunt",
    href: siteConfig.links.producthunt,
    icon: ProductHuntIcon,
  },
  {
    name: "Hugging Face",
    href: siteConfig.links.huggingface,
    icon: HuggingFaceIcon,
  },
];

const columns: { title: string; links: { title: string; href: string }[] }[] = [
  { title: "Product", links: footerLinks.product },
  { title: "Company", links: footerLinks.company },
  { title: "Legal", links: footerLinks.legal },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.7_0.2_270)]/60 to-transparent" />
      <AuroraBackground intensity="subtle" className="opacity-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-bold"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
                transition={{ duration: 0.5 }}
              >
                <Image src="/logo.svg" alt="BinaryAIHub" width={24} height={24} />
              </motion.div>
              <span className="transition-colors group-hover:text-primary">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Building intelligent mobile apps powered by AI.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-all hover:border-border hover:bg-background/60 hover:text-foreground hover:shadow-[0_0_20px_-8px_oklch(0.7_0.2_270/0.5)]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{siteConfig.email}</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-wide text-foreground/90">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="h-px w-0 bg-gradient-to-r from-[oklch(0.7_0.2_270)] to-[oklch(0.75_0.18_200)] transition-all duration-300 group-hover:w-3" />
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        {link.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border/40" />
        <div className="flex flex-wrap items-center justify-center gap-2 py-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              title={social.name}
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-background/40 text-muted-foreground backdrop-blur-sm transition-colors hover:border-border hover:bg-background/70 hover:text-foreground"
            >
              <social.icon className="h-4 w-4" />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>

        <Separator className="bg-border/40" />
        <div className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Crafted with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            >
              <span className="text-red-500">♥</span>
            </motion.span>
            for intelligent apps.
          </p>
        </div>
      </div>
    </footer>
  );
}
