"use client";

import { QRCodeSVG } from "qrcode.react";
import { Heart, Coffee, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { GlowEffect } from "@/components/shared/glow-effect";
import { siteConfig } from "@/config/site";

const BMC_URL = siteConfig.links.buymeacoffee;

export function Support() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 py-24">
      <GlowEffect className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-red-500" />
            Support Our Work
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Buy Us a Coffee
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            If you find our apps, tools, and content valuable, consider
            supporting continued development. Every coffee fuels more
            innovation!
          </p>
        </AnimatedContainer>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* BMC Button & Link */}
          <AnimatedContainer
            delay={0.1}
            className="flex flex-col items-center rounded-2xl border border-border/60 bg-card/50 p-8 text-center backdrop-blur-sm"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFDD00]/10">
              <Coffee className="h-8 w-8 text-[#FFDD00]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">One-Time Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Buy us a coffee to show your appreciation for our work.
            </p>
            <a
              href={BMC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              <Button className="gap-2 bg-[#FFDD00] text-black hover:bg-[#FFDD00]/90">
                <Coffee className="h-4 w-4" />
                Buy Me a Coffee
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </a>
          </AnimatedContainer>

          {/* QR Code */}
          <AnimatedContainer
            delay={0.2}
            className="flex flex-col items-center rounded-2xl border border-border/60 bg-card/50 p-8 text-center backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold">Scan to Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Scan the QR code with your phone camera to open the support page.
            </p>
            <div className="mt-6 rounded-xl bg-white p-4">
              <QRCodeSVG
                value={BMC_URL}
                size={160}
                level="H"
                marginSize={0}
                bgColor="#FFFFFF"
                fgColor="#000000"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              buymeacoffee.com/BINARYAIHUB
            </p>
          </AnimatedContainer>

          {/* Why Support */}
          <AnimatedContainer
            delay={0.3}
            className="flex flex-col rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold">Why Support Us?</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#FFDD00]">&#9679;</span>
                Fund development of free AI-powered apps
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#FFDD00]">&#9679;</span>
                Help us create more open-source tools
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#FFDD00]">&#9679;</span>
                Support quality blog content and tutorials
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#FFDD00]">&#9679;</span>
                Keep our services running and accessible
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#FFDD00]">&#9679;</span>
                Enable research into new AI capabilities
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <a
                href={BMC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Learn more on our BMC page &rarr;
              </a>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
