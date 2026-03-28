import type { Metadata } from "next";
import { Support } from "@/components/sections/support";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get in touch with BinaryAIHub. Reach out to us at hello@binaryaihub.com for questions, feedback, or support.",
};

export default function SupportPage() {
  return <Support />;
}
