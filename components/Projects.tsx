"use client"

import { useState } from "react"

import { projectsData, type Project } from "@/lib/data"
import SectionHeading from "./SectionHeading"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="mb-28">
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project) => (
        <ProjectCard project={project} key={project.title} onOpen={setSelectedProject} />
      ))}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}