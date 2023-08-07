"use client"

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const ref = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As part of my Masters in{" "}
        <span className="font-medium">Computer Science</span>, I joined InfoEdge as a Software Engineer Intern in the last semester.{" "}
        <span className="italic">I was offered a full-time position</span> as a Software Engineer after my internship ended. I will be joining InfoEdge in October 2023.{" "}
        <span className="italic">My <span className="underline">favorite</span> part of programming</span> is the
        problem-solving aspect. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Springboot, MySQL
        </span>
        . I am also familiar with TypeScript and Flutter. I am always looking to
        learn new technologies. I am currently looking for some{" "}
        <span className="font-medium">part-time work</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">{`When I'm not coding`}</span>, I enjoy exercising, watching movies, and spending time with my family and friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning how to {" "}
        <span className="font-medium">play the guitar</span>.
      </p>

    </motion.section>
  )
}
