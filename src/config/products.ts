import type { Product } from "@/types";

export const products: Product[] = [
  {
    name: "AI Note Companion",
    description:
      "An intelligent note-taking app that understands context, auto-tags, and surfaces insights from your notes using on-device AI.",
    status: "coming-soon",
    platforms: ["ios", "android"],
    features: [
      "On-device AI processing",
      "Smart auto-tagging",
      "Contextual search",
      "Markdown support",
    ],
    icon: "brain",
  },
  {
    name: "SnapTranslate",
    description:
      "Point your camera at any text and get instant, accurate translations powered by state-of-the-art language models.",
    status: "coming-soon",
    platforms: ["ios", "android"],
    features: [
      "Real-time camera translation",
      "50+ languages",
      "Offline mode",
      "History & favorites",
    ],
    icon: "languages",
  },
  {
    name: "FitAI Coach",
    description:
      "Your personal AI fitness coach that creates adaptive workout plans and provides real-time form feedback using computer vision.",
    status: "coming-soon",
    platforms: ["ios"],
    features: [
      "Adaptive workout plans",
      "Real-time form analysis",
      "Progress tracking",
      "Voice guidance",
    ],
    icon: "dumbbell",
  },
];
