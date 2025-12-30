import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2).max(64),
  email: z.email(),
  message: z.string().min(10).max(160),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
