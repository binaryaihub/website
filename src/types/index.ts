export interface Post {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  slug: string;
  slugAsParams: string;
  body: string;
}

export interface Product {
  name: string;
  description: string;
  status: "coming-soon" | "beta" | "live";
  platforms: ("ios" | "android")[];
  features: string[];
  icon: string;
}

export interface NavItem {
  title: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  email: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    youtube: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    discord: string;
    reddit: string;
    threads: string;
    devto: string;
    medium: string;
    hashnode: string;
    producthunt: string;
    huggingface: string;
  };
  navItems: NavItem[];
}
