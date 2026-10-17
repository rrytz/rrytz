"use server";

import { z } from "zod";
import { getResend } from "@/lib/resend";

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

  const { name, email, subject, message } = parsed.data;

  try {
    await getResend().emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["ritzlloydsastrillas@gmail.com"],
      subject: `[Portfolio] ${subject}`,
      text: `
New message from your portfolio contact form:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Reply directly to: ${email}
      `,
      html: `
        <h2>New message from your portfolio contact form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; font-family: system-ui, sans-serif; line-height: 1.6;">${message}</p>
        <hr />
        <p style="color: #666; font-size: 0.9rem;">Reply directly to: <a href="mailto:${email}">${email}</a></p>
      `,
      replyTo: email,
    });
  } catch (error) {
    console.error("Resend error:", error);
    return {
      status: "error",
      message: "Failed to send message. Please try again or email me directly.",
    };
  }

  return {
    status: "success",
    message: "Thanks! Your message has been sent. I'll get back to you soon.",
  };
}
