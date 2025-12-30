import { Resend } from "resend";

export async function sendContactEmail(
  name: string,
  email: string,
  message: string,
) {
  if (!process.env.RESEND_EMAIL_API_KEY) {
    throw new Error("Missing RESEND_EMAIL_API_KEY");
  }

  const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

  return resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["sunnyjha98@gmail.com"],
    subject: "Contact Form Submission",
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `,
  });
}
