"use client"

import { experienceData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useSectionInView } from "@/lib/hooks";


export default function Experience() {
  const ref = useSectionInView("Experience", 0.5)

  return (
    <section ref={ref} className="mb-20 sm:mb-28 scroll-mt-28" id="experience">
      <SectionHeading>Work Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {
          experienceData.map((item, index) => (
            <VerticalTimelineElement key={index}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3 rem 2rem"
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
              }}
              date={item.date.toString()}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: "1.5rem",
              }}
            >

              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.company}</p>
              <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}
