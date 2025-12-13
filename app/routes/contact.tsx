import { Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import { InputWithLabel, TextareaWithLabel } from "~/components/ui/input";
import {
  TypographyH1,
  TypographyH4,
  TypographyLead,
} from "~/components/ui/typography";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sunny Jha | Contact Page" },
    { name: "description", content: "Welcome to Portfolio Website" },
  ];
}

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    console.log(e);
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <TypographyH1 value="Contact me" />
      <TypographyLead
        value="I will get back to you as soon as the Lambda function wakes up and notifies me through SES service."
        className="mt-2 max-w-lg text-center text-neutral-400"
      />

      <form
        action="# Specifies the URL where the form data will be sent for processing when the form is submitted. This URL typically points to a server-side script or program"
        method="post"
        className="border-border bg-card mt-6 flex w-full max-w-lg flex-col gap-4 rounded-lg p-4 shadow-sm"
        onSubmit={handleSubmit}
      >
        <TypographyH4 value="Send me a message" />
        <InputWithLabel
          htmlForAndId={"senderName"}
          label={"Name *"}
          placeholder={"Your Name"}
          type="text"
          required={true}
        />
        <InputWithLabel
          htmlForAndId={"email"}
          label={"Email *"}
          placeholder={"sunnyjha98971@gmail.com"}
          type={"email"}
          required={true}
        />
        <TextareaWithLabel />
        <Button type="submit" className="cursor-pointer">
          <Send />
          Send Message
        </Button>
      </form>
    </div>
  );
}
