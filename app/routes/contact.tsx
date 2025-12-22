import { Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  TypographyH1,
  TypographyH4,
  TypographyLead,
  TypographyMuted,
  TypographySmall,
} from "~/components/ui/typography";
import type { Route } from "./+types/contact";
import { Form } from "react-router";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sunny Jha | Contact Page" },
    { name: "description", content: "Welcome to Portfolio Website" },
  ];
}

const handleSubmit = (e: React.FormEvent) => {
  console.log(e);
  e.preventDefault();
};
export function ContactForm() {
  return (
    <Form
      method="post"
      className="border-border bg-card flex w-full flex-col gap-4 rounded-lg p-4 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input type="text" required placeholder="Your name" />
        <TypographySmall
          value="Message must be at least 10 characters."
          className="text-destructive hidden"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input type="email" required placeholder="sunnyjha98971@gmail.com" />
        <TypographySmall
          value="Message must be at least 10 characters."
          className="text-destructive hidden"
        />
      </div>

      <div className="space-y-2">
        <Label>Your message *</Label>
        <Textarea className="h-30" />
        <TypographySmall
          value="Message must be at least 10 characters."
          className="text-destructive hidden"
        />
      </div>
      <Button
        type="submit"
        className="cursor-pointer"
        aria-label="Send message button"
      >
        <Send />
        Send Message
      </Button>
    </Form>
  );
}
export default function Contact() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center">
      <TypographyH1 value="Contact me" />
      <TypographyLead
        value="Drop in your info here and, I will get back to you."
        className="my-2 max-w-lg text-center text-neutral-400"
      />
      <div className="my-6 w-full space-y-2 text-left">
        <TypographyH4 value="Send me a message" />
        <TypographyMuted value="Fill out the form below and I will get back to you as soon as possible." />
      </div>
      <ContactForm />
    </div>
  );
}
