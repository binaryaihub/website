"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Binary } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Binary className="h-6 w-6 text-primary" />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
