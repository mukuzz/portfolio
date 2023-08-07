"use client"

import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const ref = useSectionInView("Projects", 0.5)

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <ProjectCard {...project} key={index} />
      ))}
    </section>
  )
}