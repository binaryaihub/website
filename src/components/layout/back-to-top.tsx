"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 640);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className={cn(
            "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full",
            "border border-border/60 bg-background/60 text-foreground backdrop-blur-xl",
            "shadow-[0_0_30px_-8px_oklch(0.7_0.2_270/0.45)] transition-shadow hover:shadow-[0_0_40px_-6px_oklch(0.7_0.2_270/0.6)]"
          )}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.6_0.25_270)]/25 via-transparent to-[oklch(0.75_0.18_200)]/25 opacity-0 transition-opacity hover:opacity-100" />
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
