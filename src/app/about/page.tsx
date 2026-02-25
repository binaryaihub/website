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
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <AnimatedContainer key={value.title} delay={0.2 + index * 0.1}>
              <Card className="h-full border-border/50 bg-card/50">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
