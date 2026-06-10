import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { GlowEffect } from "@/components/shared/glow-effect";
import { GridBackground } from "@/components/shared/grid-background";
import { Magnetic } from "@/components/shared/magnetic";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4">
      <GlowEffect className="left-1/2 top-0 -translate-x-1/2" />
      <GridBackground />
      <div className="relative flex flex-col items-center text-center">
        <AnimatedContainer variant="blur-up">
          <h1 className="bg-gradient-to-r from-[oklch(0.7_0.25_270)] via-[oklch(0.75_0.2_220)] to-[oklch(0.78_0.2_310)] bg-clip-text text-7xl font-bold text-transparent gradient-shimmer sm:text-8xl">
            404
          </h1>
        </AnimatedContainer>
        <AnimatedContainer delay={0.1}>
          <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
        </AnimatedContainer>
        <AnimatedContainer delay={0.2}>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </AnimatedContainer>
        <AnimatedContainer delay={0.3}>
          <Magnetic>
            <Button asChild className="mt-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </Magnetic>
        </AnimatedContainer>
      </div>
    </div>
  );
}
