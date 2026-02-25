"use client";

import { Send } from "lucide-react";
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

export function ContactForm() {
  return (
    <Card className="border-border/50 bg-card/50">
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>
          Fill out the form and we&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input id="subject" placeholder="What's this about?" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea id="message" placeholder="Tell us more..." rows={5} />
          </div>
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
