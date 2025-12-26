import { Send, CircleX, CircleCheck } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  TypographyH4,
  TypographyLead,
  TypographyMuted,
  TypographySmall,
} from "~/components/ui/typography";
import type { Route } from "./+types/contact";
import { data, Form, redirect, useActionData } from "react-router";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Spinner } from "~/components/ui/spinner";

import { Resend } from "resend";
import { z } from "zod";
import { Toaster } from "sonner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Sunny Jha" },
    { name: "description", content: "Contact me by filling the form." },
  ];
}

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      error: "Name is required and must be between 2 and 64 characters.",
    })
    .max(64, {
      error: "Name is required and must be between 2 and 64 characters.",
    }),
  email: z.email({ error: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, {
      error: "Message is required and must be between 10 and 160 characters.",
    })
    .max(160, {
      error: "Message is required and must be between 10 and 160 characters.",
    }),
});

type SubmitFormSchemaType = z.infer<typeof contactFormSchema>;

const onSubmit: SubmitHandler<SubmitFormSchemaType> = async (data) => {
  console.log(data);
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

export function ContactForm({ actionData }: Route.ComponentProps) {
  const { serverError } = actionData || {};

  const {
    register,
    handleSubmit,
    formState: { errors: clientError, isSubmitting },
  } = useForm<SubmitFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  // const {error, setError} = useState(clientError)

  return (
    <Form
      method="post"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="border-border bg-card flex w-full flex-col gap-4 rounded-lg p-4 shadow-sm"
    >
      <TypographyLead value="Send Message" />
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          {...register("name")}
          type="text"
          id="name"
          autoComplete="username"
          placeholder="Your name"
        />
        {clientError?.name?.message && (
          <TypographySmall
            value={clientError.name.message}
            className="text-destructive"
          />
        )}
        {serverError?.fieldErrors.name && (
          <TypographySmall
            value={serverError.fieldErrors.name}
            className="text-destructive"
          />
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          {...register("email")}
          type="email"
          id="email"
          autoComplete="email"
          placeholder="sunnyjha98971@gmail.com"
        />
        {clientError?.email?.message && (
          <TypographySmall
            value={clientError.email.message}
            className="text-destructive"
          />
        )}
        {serverError?.fieldErrors.email && (
          <TypographySmall
            value={serverError?.fieldErrors.email}
            className="text-destructive"
          />
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Your message *</Label>
        <Textarea
          {...register("message")}
          id="message"
          className="h-30"
          placeholder="If somehow this lambda function didn't work for contact form. You can mail me on 'sunnyjha98971@gmail.com'."
        />
        {clientError?.message?.message && (
          <TypographySmall
            value={clientError.message.message}
            className="text-destructive"
          />
        )}
        {serverError?.fieldErrors.message && (
          <TypographySmall
            value={serverError?.fieldErrors.message}
            className="text-destructive"
          />
        )}
      </div>

      <Button
        type="submit"
        className="cursor-pointer"
        aria-label="Send message button"
      >
        {isSubmitting ? <Spinner /> : <Send />}
        Send Message
      </Button>
    </Form>
  );
}

export default function ContactPage() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center">
      <div className="my-6 w-full space-y-2 text-center">
        <TypographyH4 value="Let's work together, or have a small conversation" />
        <TypographyMuted value="Fill out the form below and I will get back to you as soon as possible." />
      </div>
      <ContactForm actionData={actionData} />
    </div>
  );
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);
  const validatedForm = contactFormSchema.safeParse(formValues);
  //Destructure variables from the validated
  if (!validatedForm.success)
    return { serverError: z.flattenError(validatedForm.error) };

  const { name, email, message } = validatedForm.data;
  const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["sunnyjha98971@gmail.com"],
    subject: "New Contact Form Submission",
    html: `
        <h2>New message from ${name}</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
  });

  if (error) return Response.json({ error });

  if (data) return Response.json({ data });
  return redirect("/");
}
