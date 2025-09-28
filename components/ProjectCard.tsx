"use client"

import type { Project } from "@/lib/data";

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const { title, description, tags, links } = project

  return (
    <div className="mb-8 w-full max-w-[42rem] rounded-lg border border-black/5 bg-gray-100 p-6 shadow-sm cursor-pointer" onClick={() => onOpen(project)}>
      <div className="w-full text-left">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-3 leading-relaxed text-gray-700">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              className="rounded-full bg-black/[0.75] px-3 py-1 text-[0.7rem] tracking-wider text-white"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {links.map(link => (
          <a
            key={link.url}
            className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-200"
            href={link.url}
            target="_blank"
            rel="noreferrer"
            onClick={event => event.stopPropagation()}
          >
            {link.name}
          </a>
        ))}

        <button
          type="button"
          className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-200"
          onClick={() => onOpen(project)}
        >
          View Images
        </button>
      </div>
    </div>
  )
}
