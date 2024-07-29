import React from "react";
import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";

type TimelineElementPropsType = {
  experience: (typeof experiencesData)[number];
};

const TimelineElement: React.FC<TimelineElementPropsType> = ({
  experience,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0,0,0,0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem soldi #9ca3af",
        }}
        date={experience.date}
        icon={experience.icon}
        iconStyle={{ background: "white", fontSize: "1.5rem" }}
        visible={inView}
      >
        <h4 className="font-semibold capitalize">{experience.title}</h4>
        <p className="!mt-0 font-normal">{experience.location}</p>
        <p className="!mt-1 !font-normal text-gray-700">
          {experience.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;
