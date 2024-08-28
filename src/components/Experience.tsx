"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import TimelineElement from "./TimelineElement";
import { useSectionScrollObserver } from "@/hooks/useSectionScrollObserver";

const Experience = () => {
  const { ref } = useSectionScrollObserver("Experience");

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <TimelineElement
            key={index}
            experience={experience}
          ></TimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
