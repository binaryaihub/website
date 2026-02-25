import type { Metadata } from "next";
import { Mail, Twitter, Github } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { ContactForm } from "@/components/shared/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with BinaryAIHub. Questions, partnerships, or just a hello — we'd love to hear from you.",
};

const socialLinks = [
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    description: siteConfig.email,
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    icon: Twitter,
    description: "@binaryaihub",
  },
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
    description: "binaryaihub",
  },
];

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionHeader
            title="Get in Touch"
            description="Have a question, partnership idea, or just want to say hello? We'd love to hear from you."
          />
        </AnimatedContainer>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <AnimatedContainer delay={0.1}>
            <ContactForm />
          </AnimatedContainer>

          <AnimatedContainer delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect With Us</h3>
              <p className="text-sm text-muted-foreground">
                Prefer social media? Find us on your favorite platform.
              </p>

              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:border-border hover:bg-card"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{link.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {link.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
}
