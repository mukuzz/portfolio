"use client"

import { useEffect, useRef } from "react"

import { HiDownload } from "react-icons/hi"

const dialogStyles = "fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
const panelStyles = "max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl"

export default function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!open) {
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
  }, [open, onClose])

  useEffect(() => {
    if (open && iframeRef.current) {
      iframeRef.current.focus()
    }
  }, [open])

  if (!open) {
    return null
  }

  return (
    <div
      className={dialogStyles}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div className={panelStyles}>
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
          <h2 id="resume-modal-title" className="text-lg font-semibold text-gray-900">Resume</h2>
          <div className="flex items-center gap-3">
            <a
              className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              href="/MukulSingh-Resume.pdf"
              download
            >
              Download
              <HiDownload />
            </a>
            <button
              type="button"
              className="rounded-full border border-black/10 px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>

        <iframe
          ref={iframeRef}
          src="/MukulSingh-Resume.pdf"
          className="h-[75vh] w-full"
          title="Mukul Singh Resume"
        />
      </div>
    </div>
  )
}
