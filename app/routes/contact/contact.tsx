import { Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  TypographyH2,
  TypographyLead,
  TypographyP,
  TypographySmall,
} from "~/components/ui/typography";
import type { Route } from "./+types/contact";
import {
  Form,
  useLocation,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { toast } from "sonner";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "~/components/ui/spinner";
import {
  contactFormSchema,
  type SubmitFormSchemaType,
} from "~/lib/schemas/contact.schema";
import { useEffect, useRef } from "react";
import { checkRateLimit } from "~/lib/rate-limit/contact.rate-limit";
import { sendContactEmail } from "~/lib/services/contact-email.service";
import clsx from "clsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Sunny Jha" },
    { name: "description", content: "Contact me by filling the form." },
  ];
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function ContactPage({ actionData }: Route.ComponentProps) {
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors: clientError },
    reset,
  } = useForm<SubmitFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  // Show toast based on actionData

  const location = useLocation();
  const hasShownToast = useRef(false);

  useEffect(() => {
    hasShownToast.current = false;
  }, [location.key]);

  useEffect(() => {
    if (!actionData || hasShownToast.current) return;

    if (actionData.emailSuccess) {
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      reset();
      navigate("/");
    }

    if (actionData.emailError) {
      toast.error("Failed to send message.", {
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
      reset();
      navigate("/");
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
    submit(data, { method: "POST" });
  };

  return (
    <>
      <div className="intro mx-auto flex max-w-lg flex-col items-center justify-center">
        <div className="w-full space-y-2 text-center">
          <TypographyH2 value="Contact" />
          <TypographyP value="Let's work together, or have a small conversation." />
        </div>
        <Form
          method="POST"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="border-border bg-card intro mt-6 flex w-full flex-col gap-4 rounded-lg border p-4 shadow-sm"
        >
          <TypographyLead value="Send Message" />

          <div className="space-y-2">
            <Label
              htmlFor="name"
              className={clientError?.name && "text-destructive"}
            >
              Name *
            </Label>
            <Input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              disabled={isSubmitting}
              className={clientError?.name && "border-destructive"}
            />
            {clientError?.name?.message && (
              <TypographySmall
                value={clientError.name.message}
                className="text-destructive"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className={clientError?.email && "text-destructive"}
            >
              Email *
            </Label>
            <Input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="sunnyjha98971@gmail.com"
              disabled={isSubmitting}
              className={clientError?.email && "border-destructive"}
            />
            {clientError?.email?.message && (
              <TypographySmall
                value={clientError.email.message}
                className="text-destructive"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className={clientError?.message && "text-destructive"}
            >
              Your message *
            </Label>
            <Textarea
              {...register("message")}
              id="message"
              name="message"
              className={clsx("h-30", {
                "border-destructive focus:border-destructive focus:ring-destructive":
                  clientError?.message,
              })}
              placeholder="Fill out the form below and I will get back to you as soon as possible."
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

/* -------------------------------------------------------------------------- */
/*                                 ACTION                                     */
/* -------------------------------------------------------------------------- */

export async function action({ request }: Route.ActionArgs) {
  //Exit early if not POST
  if (request?.method !== "POST") {
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

  // Parse and Validate form data
  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);
  const validatedForm = contactFormSchema.safeParse(formValues);

  // Handle validation errors
  if (!validatedForm.success) {
    return {
      serverFormValidationError: validatedForm.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    };
  }

  // Send contact email via external service
  try {
    await sendContactEmail(validatedForm.data);
    return { emailSuccess: true };
  } catch (error) {
    return {
      emailError: "External email service failed to send email.",
    };
  }
}
