import type { Metadata } from "next";
import { Support } from "@/components/sections/support";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support BinaryAIHub's development. Buy us a coffee to help fund free AI-powered apps, open-source tools, and quality content.",
};

export default function SupportPage() {
  return <Support />;
}
