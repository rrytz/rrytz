import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResend() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not set. Create .env.local with your Resend key.");
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

export function isResendConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}
