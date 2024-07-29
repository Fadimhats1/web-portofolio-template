import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "@/lib/types";
import { useActiveSectionContext } from "./useActiveSectionContext";

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  // const { ref, entry } = useInView({ threshold });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  // useEffect(() => {
  //   if (
  //     entry?.boundingClientRect.top == 0 &&
  //     Date.now() - timeOfLastClick > 1000
  //   )
  //     setActiveSection(sectionName);
  // }, [setActiveSection, timeOfLastClick]);
  // return {
  //   ref,
  // };
};
