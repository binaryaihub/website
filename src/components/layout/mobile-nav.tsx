"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9 md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] overflow-hidden border-border/60 bg-background/80 backdrop-blur-2xl"
      >
        <AuroraBackground intensity="subtle" className="opacity-70" />
        <SheetHeader className="relative">
          <SheetTitle>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-bold"
              onClick={() => setOpen(false)}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/logo.svg"
                  alt="BinaryAIHub"
                  width={24}
                  height={24}
                />
              </motion.div>
              <span className="transition-colors group-hover:text-primary">
                {siteConfig.name}
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="relative mt-8 flex flex-col gap-1 px-2">
          {siteConfig.navItems.map((item, i) => {
            const active = pathname === item.href;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group relative flex items-center gap-2 overflow-hidden rounded-md px-3 py-2.5 text-sm font-medium transition-all",
                    active
                      ? "bg-accent/80 text-accent-foreground ring-1 ring-border/50"
                      : "text-muted-foreground hover:bg-accent/40 hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all",
                      active
                        ? "bg-gradient-to-br from-[oklch(0.7_0.2_270)] to-[oklch(0.75_0.18_200)] shadow-[0_0_8px_oklch(0.7_0.2_270)]"
                        : "bg-muted-foreground/30 group-hover:bg-foreground/60"
                    )}
                  />
                  {item.title}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
