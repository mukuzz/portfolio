import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { SectionName } from "./types"

export function useSectionInView(section: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold: threshold })
  const { setActiveSection, timeofLastClick } = useActiveSectionContext()
  useEffect(() => {
    if (inView && Date.now() - timeofLastClick > 1000) {
      setActiveSection(section)
    }
  }, [inView, timeofLastClick])
  return ref
}