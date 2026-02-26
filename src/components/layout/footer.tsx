import Image from "next/image";
import Link from "next/link";
import { Coffee, Github, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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
    { title: "Support Us", href: siteConfig.links.buymeacoffee },
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

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Image src="/logo.svg" alt="BinaryAIHub" width={24} height={24} />
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Building intelligent mobile apps powered by AI.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.company.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.href}>
                    {isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Coffee className="h-3.5 w-3.5 text-[#FFDD00]" />
                        {link.title}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <Separator />
        <div className="flex flex-wrap items-center justify-center gap-3 py-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              title={social.name}
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>

        <Separator />
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
