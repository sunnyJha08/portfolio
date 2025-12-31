import { z } from "zod";

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

export { contactFormSchema, type SubmitFormSchemaType };
