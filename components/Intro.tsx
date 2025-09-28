"use client"

import { useState } from "react"
import Image from "next/image"
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs"

import ResumeModal from "./ResumeModal"

export default function Intro() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <section className="mb-28 max-w-[58rem] text-center" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image src="/mukul.jpeg" alt="Mukul Singh" width={192} height={192} quality={95} priority={true} className="h-24 w-24 mt-24 rounded-full border-[0.35rem] border-white shadow-xl" />
        </div>
      </div>

      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        Hello, I{`'`}m <strong>{`Mukul Singh`}</strong>
        {`,`} a <span className="italic">Senior Software Engineer</span> at <span className="underline"><a href="https://www.infoedge.in" target="_blank">Info Edge</a></span> (naukri.com) with <strong>3 year</strong> experience. My focus is <span className="italic">Springboot, MySQL, Kubernetes, Kafka, Distributed Systems</span>
      </p>

      <div className="flex flex-row flex-wrap gap-2 items-center justify-center px-4 font-medium">
        <button className="bg-white px-7 py-3 flex items-center gap-2 rounded-full border border-black/10" type="button" onClick={() => setIsResumeOpen(true)}>
          View Resume
        </button>
        <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
          <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10" href="https://github.com/mukuzz" target="_blank">
            <BsGithub />
          </a>
          <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10" href="https://www.linkedin.com/in/mukul124/" target="_blank">
            <BsLinkedin />
          </a>
          <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10" href="https://x.com/mukuz_" target="_blank">
            <BsTwitter />
          </a>
        </div>
      </div>

      <ResumeModal open={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  )
}
