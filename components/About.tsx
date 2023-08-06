"use client"

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a Masters in{" "}
        <span className="font-medium">Computer Science</span>, I joined InfoEdge as a Software Engineer Intern.
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Springboot, MySQL
        </span>
        . I am also familiar with TypeScript and Flutter. I am always looking to
        learn new technologies. I am currently looking for some{" "}
        <span className="font-medium">part-time work</span> as a software
        developer.
      </p>

    </motion.section>
  )
}
