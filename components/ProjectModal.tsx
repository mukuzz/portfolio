"use client"

import Image from "next/image"
import { useEffect } from "react"

import type { Project } from "@/lib/data"

const dialogStyles = "fixed inset-0 flex items-center justify-center px-4"
const panelStyles = "max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl border border-gray-200"
const gridStyles = "mt-6 grid gap-4"

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) {
      return
    }

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", onEsc)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", onEsc)
      document.body.style.overflow = previousOverflow
    }
  }, [project, onClose])

  if (!project) {
    return null
  }

  const { title, description, tags, images, links } = project

  return (
    <div
      className={dialogStyles}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div className={panelStyles}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="project-modal-title" className="text-2xl font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li key={index} className="rounded-full bg-black/[0.75] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <button type="button" className="rounded-full border border-black/10 px-3 py-1 text-sm text-gray-600 bg-white hover:bg-gray-200" onClick={onClose}>
            Close
          </button>
        </div>

        {images.length > 0 && (
          <div className={gridStyles}>
            {images.map((image, index) => (
              typeof image === "string" ? (
                <Image
                  key={index}
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="h-full w-full rounded-lg border border-black/10 object-cover"
                  width={800}
                  height={600}
                />
              ) : (
                <Image
                  key={index}
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="h-full w-full rounded-lg border border-black/10 object-cover"
                />
              )
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {links.map(link => (
            <a
              key={link.url}
              className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-200"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
