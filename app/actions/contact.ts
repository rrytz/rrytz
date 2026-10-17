"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // TODO: Wire up your email provider here (Resend, EmailJS, Nodemailer, etc.)
  // Example: await emails.send({ ... })
  console.log("Contact form submission:", parsed.data);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    status: "success",
    message: "Thanks! Your message has been sent. I'll get back to you soon.",
  };
}
