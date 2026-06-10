"use client";

import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Send, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Status = "idle" | "sending" | "sent";

const buttonContent: Record<Status, { icon: React.ReactNode; label: string }> =
  {
    idle: { icon: <Send className="mr-2 h-4 w-4" />, label: "Send Message" },
    sending: {
      icon: <Loader2 className="mr-2 h-4 w-4 animate-spin" />,
      label: "Sending...",
    },
    sent: { icon: <Check className="mr-2 h-4 w-4" />, label: "Message Sent" },
  };

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    const form = e.currentTarget;
    setStatus("sending");
    timers.current.push(
      setTimeout(() => {
        setStatus("sent");
        form.reset();
        timers.current.push(setTimeout(() => setStatus("idle"), 3500));
      }, 900)
    );
  }

  const { icon, label } = buttonContent[status];

  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>
          Fill out the form and we&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium transition-colors duration-200 group-focus-within:text-primary"
              >
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="group space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium transition-colors duration-200 group-focus-within:text-primary"
              >
                Email
              </label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div className="group space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium transition-colors duration-200 group-focus-within:text-primary"
            >
              Subject
            </label>
            <Input id="subject" placeholder="What's this about?" />
          </div>
          <div className="group space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium transition-colors duration-200 group-focus-within:text-primary"
            >
              Message
            </label>
            <Textarea id="message" placeholder="Tell us more..." rows={5} />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={status === "sending"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={status}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center"
              >
                {icon}
                {label}
              </motion.span>
            </AnimatePresence>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
