"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!email || !message) {
    throw new Error("Please fill in all fields");
  }

  try {
    await resend.emails.send({
      from: "Contact Form <contact@tomk.online>",
      to: formData.get('to') as string,
      subject: "New Contact Form Submission",
      text: `From: ${email}\n\nMessage: ${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
