import { SectionName } from "@/lib/types";
import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "./useActiveSectionContext";

export const useSectionScrollObserver = (
  sectionName: SectionName,
  topThreshold: number
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        console.log(rect.height);
        if (rect.top <= topThreshold && rect.top >= rect.height * 0.3 * -1) {
          setActiveSection(sectionName);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    ref,
  };
};
