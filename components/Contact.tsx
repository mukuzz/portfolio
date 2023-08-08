"use client"

import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function Contact() {
  const ref = useSectionInView("Contact", 0.5)
  const { pending } = useFormStatus()

  return (
    <section ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)]" id="contact">
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at <a href="mailto:mukulsingh1248@gmail.com" className="underline">mukulsingh1248@gmail.com</a> or through this form
      </p>

      <form className="mt-10 flex flex-col" action={async (formData) => {
        await sendEmail(formData)
      }}>
        <input className="h-14 px-4 rounded-lg border border-black/10" type="email" required maxLength={500} placeholder="Your email" name="senderEmail" />
        <textarea className="h-52 my-3 rounded-lg border border-black/10 p-4" required maxLength={5000} placeholder="Your message" name="message" />
        <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950" type="submit">
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </section>
  )
}
