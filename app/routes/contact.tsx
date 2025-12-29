import { Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  TypographyH4,
  TypographyLead,
  TypographyMuted,
  TypographySmall,
} from "~/components/ui/typography";
import type { Route } from "./+types/contact";
import { Form, Navigate, useNavigation, useSubmit } from "react-router";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { toast } from "sonner";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "~/components/ui/spinner";

import { Resend } from "resend";
import { z } from "zod";
import { useEffect, useRef } from "react";

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

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Helper function to check rate limit
function checkRateLimit(ip: string): { allowed: boolean; message?: string } {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);

  // If no record or reset time passed, allow and create new record
  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 12 * 60 * 60 * 1000, // 12 hours from now
    });
    return { allowed: true };
  }

  // Check if limit exceeded
  if (limit.count >= 2) {
    const hoursLeft = Math.ceil((limit.resetTime - now) / (60 * 60 * 1000));
    return {
      allowed: false,
      message: `Rate limit exceeded. You can submit 2 messages every 12 hours. Try again in ${hoursLeft} hour(s) or email me directly at 'sunnyjha98971@gmail.com.`,
    };
  }

  // Increment count
  limit.count++;
  return { allowed: true };
}

export default function ContactPage({ actionData }: Route.ComponentProps) {
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const {
    register,
    handleSubmit,
    formState: { errors: clientError },
    reset,
  } = useForm<SubmitFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  // Show toast based on actionData

  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!actionData || hasShownToast.current) return;

    if (actionData.emailSuccess) {
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      reset();
      <Navigate to={"/"} />;
    }

    if (actionData.emailError) {
      toast.error("Failed to send message", {
        description: actionData.emailError,
      });
    }

    if (actionData.methodError) {
      toast.warning(actionData.methodError);
    }

    if (actionData.rateLimitError) {
      toast.warning("Rate limit exceeded", {
        description: actionData.rateLimitError,
      });
    }

    if (actionData?.serverFormValidationError) {
      toast.error(
        actionData.serverFormValidationError.map((e) => e.message).join(", "),
        {
          description: "Form validation error.",
        },
      );
    }

    hasShownToast.current = true;
  }, [actionData, reset]);

  const onSubmit: SubmitHandler<SubmitFormSchemaType> = (data) => {
    // Submit form data to action

    submit(data, { method: "post" });
  };

  return (
    <>
      <div className="mx-auto mt-4 flex max-w-lg flex-col items-center justify-center">
        <div className="my-6 w-full space-y-2 text-center">
          <TypographyH4 value="Let's work together, or have a small conversation" />
          <TypographyMuted value="Fill out the form below and I will get back to you as soon as possible." />
        </div>
        <Form
          method="post"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="border-border bg-card flex w-full flex-col gap-4 rounded-lg border p-4 shadow-sm"
        >
          <TypographyLead value="Send Message" />

          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              disabled={isSubmitting}
              className={
                clientError?.name &&
                "border-destructive focus:border-destructive focus:ring-destructive active:border-destructive invalid:border-destructive"
              }
            />
            {clientError?.name?.message && (
              <TypographySmall
                value={clientError.name.message}
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
              name="email"
              autoComplete="email"
              placeholder="sunnyjha98971@gmail.com"
              disabled={isSubmitting}
            />
            {clientError?.email?.message && (
              <TypographySmall
                value={clientError.email.message}
                className="text-destructive"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your message *</Label>
            <Textarea
              {...register("message")}
              id="message"
              name="message"
              className="h-30"
              placeholder="If somehow this lambda function didn't work for contact form. You can mail me on 'sunnyjha98971@gmail.com'."
              disabled={isSubmitting}
            />
            {clientError?.message?.message && (
              <TypographySmall
                value={clientError.message.message}
                className="text-destructive"
              />
            )}
          </div>

          <Button
            type="submit"
            className="cursor-pointer"
            aria-label="Send message button"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner /> : <Send />}
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Form>
      </div>
    </>
  );
}

export async function action({ request }: Route.ActionArgs) {
  if (request?.method?.toLowerCase() !== "post") {
    return { methodError: "Method not allowed" };
  }

  // Get client IP for rate limiting
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // Check rate limit
  const rateLimitCheck = checkRateLimit(ip);
  if (!rateLimitCheck.allowed) {
    return { rateLimitError: rateLimitCheck.message };
  }

  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);
  const validatedForm = contactFormSchema.safeParse(formValues);

  if (!validatedForm.success) {
    return {
      serverFormValidationError: validatedForm.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    };
  }

  const { name, email, message } = validatedForm.data;
  const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

  const { error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["sunnyjha98971@gmail.com"],
    subject: "Portfolio Contact Form Submission",
    html: `
          <h2>New message from ${name}</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
  });
  if (error) return { emailError: "Failed to send email." };

  return { emailSuccess: true };
}
