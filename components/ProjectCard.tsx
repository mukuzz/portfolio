"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import { projectsData } from "@/lib/data";

type ProjectCardProps = typeof projectsData[number];

export default function ProjectCard({ title, description, tags, links, imageUrl }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgres = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgres,
      }}
      className="group mb-3 sm:mb-8 last:mb-0">
      <a className="block bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-4 relative sm:h-[20rem] sm:group-odd:pl-8 hover:bg-gray-200 transition cursor-pointer" href={links[0].url} target="_blank">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:group-odd:pl-6 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-odd:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <Image src={imageUrl} alt={title} quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
          group-odd:right-[initial] group-odd:-left-40
          transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
          group-odd:group-hover:translate-x-3 group-odd:group-hover:translate-y-3 group-odd:group-hover:rotate-2" />
      </a>
    </motion.div>
  )
}
