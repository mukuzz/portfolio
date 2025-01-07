"use client"

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"
import { HiDownload } from "react-icons/hi"

export default function Intro() {
  const ref = useSectionInView("Home")
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.2,
            }}
          >
            <Image src="/mukul.jpeg" alt="Mukul Singh" width={192} height={192} quality={95} priority={true} className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl" />
          </motion.div>

          <motion.span className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              stiffness: 125,
              delay: 0.1,
            }}
          >👋</motion.span>
        </div>
      </div>

      <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        Hello, I{`'`}m <strong>{`Mukul Singh`}</strong>
        {`,`} a <span className="italic">software engineer</span> at <span className="underline"><a href="https://www.infoedge.in" target="_blank">Info Edge</a></span> (naukri.com) with <strong>2 year</strong> experience. My focus is <span className="italic">Springboot, MySQL, Kubernetes, Kafka, Aerospike</span>
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row gap-2 items-center justify-center px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}>
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" href="/mukul-cv.pdf" download>
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10" href="https://www.linkedin.com/in/mukul124/" target="_blank">
          <BsLinkedin />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10" href="https://github.com/mukuzz" target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
