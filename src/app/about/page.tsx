import type { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { GridBackground } from "@/components/shared/grid-background";
import { SpotlightCard } from "@/components/shared/spotlight-card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BinaryAIHub — our mission, vision, and values driving the future of AI-powered mobile apps.",
};

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To make artificial intelligence accessible and practical through beautifully crafted mobile applications that solve real problems for real people.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A world where intelligent technology seamlessly enhances daily life — where AI isn't a buzzword, but a quiet, powerful companion in your pocket.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "We believe in privacy-first design, transparent AI, and building with care. Every feature we ship has been tested against one question: does this genuinely help?",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-24">
      <AuroraBackground intensity="subtle" />
      <GridBackground />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionHeader
            title="About BinaryAIHub"
            description="We're an AI products company building the next generation of intelligent mobile applications."
          />
        </AnimatedContainer>

        <AnimatedContainer delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              BinaryAIHub was founded with a simple belief: AI should work{" "}
              <em>for</em> people, not the other way around. Too many AI
              products are built as tech demos — impressive on stage but useless
              in practice.
            </p>
            <p>
              We take a different approach. Every app we build starts with a
              real problem, then applies AI as the solution — not the other way
              around. Our hybrid architecture means our apps work offline,
              respect your privacy, and get smarter over time.
            </p>
            <p>
              Based in the intersection of mobile engineering and artificial
              intelligence, our team brings together expertise in Swift, Kotlin,
              machine learning, and product design.
            </p>
          </div>
        </AnimatedContainer>

        <div className="mt-20 grid gap-6 sm:grid-cols-3 [perspective:1200px]">
          {values.map((value, index) => (
            <AnimatedContainer
              key={value.title}
              delay={0.2 + index * 0.1}
              variant="fade-up"
            >
              <SpotlightCard className="h-full rounded-xl">
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-[0_0_30px_-10px_oklch(0.7_0.2_270/0.3)]">
                  <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(135deg,oklch(0.7_0.25_270/0.15),transparent_40%,oklch(0.75_0.18_200/0.15))]" />
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-border/40 transition-transform duration-300 group-hover:scale-110">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SpotlightCard>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
