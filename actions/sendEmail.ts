"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEy)

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message)
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
}

const validateString = (str: unknown, maxLength: number) => {
  if (!str || typeof str !== "string" || str.length > maxLength) {
    return false
  }
  return true
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  console.log(senderEmail, message)

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid email" }
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form <mail@mukulsingh.in>',
      to: 'mukulsingh1248@gmail.com',
      subject: 'Message from portfolio website',
      reply_to: senderEmail as string,
      text: message as string,
    })
  } catch (error) {
    console.error(error)
    return { error: getErrorMessage(error) }
  }
}