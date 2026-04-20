"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-xl supports-backdrop-filter:bg-background/55 shadow-[0_8px_30px_-18px_oklch(0_0_0/0.4)]"
          : "bg-background/30 backdrop-blur-sm"
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0",
          "bg-gradient-to-r from-transparent via-[oklch(0.7_0.2_270)]/60 to-transparent"
        )}
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 font-bold text-lg"
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[oklch(0.7_0.2_270)]/0 blur-md transition-all duration-300 group-hover:bg-[oklch(0.7_0.2_270)]/40" />
            <Image src="/logo.svg" alt="BinaryAIHub" width={28} height={28} />
          </motion.div>
          <span className="transition-colors group-hover:text-primary">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-muted/60 ring-1 ring-border/40"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
