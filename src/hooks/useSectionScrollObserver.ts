import { SectionName } from "@/lib/types";
import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "./useActiveSectionContext";
import { throttle } from "lodash";
import { links } from "@/lib/data";

export const useSectionScrollObserver = (
  sectionName: SectionName | null = null,
  isSetHandleScroll: boolean = false
) => {
  const { setActiveSection, activeSection, sections, } = useActiveSectionContext();
  const prevActiveSection = useRef(activeSection);

  useEffect(() => {
    if(isSetHandleScroll){
      const handleScroll = throttle(() => {
        let newActiveSection = "";
        if(activeSection.isScrollAllow){
          Object.values(sections).forEach((value, index) => {
            if (value.element.current) {
              const rect = value.element.current.getBoundingClientRect();
              if (rect.top <= value.topThreshold && rect.top >= rect.height * -1) {
                newActiveSection = links[index].name;
              } 
            }
          });
        } else {
          const section = sections[activeSection.section];
          if (section && section.element.current) {
            const rect = section.element.current.getBoundingClientRect();
            if(rect.top <= section.topThreshold && rect.top >= rect.height * -1){
              setActiveSection((prevValue) => ({...prevValue, isScrollAllow: true}));
            }
          }
        }
        
        if(newActiveSection != prevActiveSection.current.section && newActiveSection != ""){
          setActiveSection((prevValue) => ({...prevValue, section: newActiveSection as SectionName}));
          prevActiveSection.current.section = newActiveSection as SectionName;
        }
      }, 100);
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [activeSection]);

  return {
    ref: sectionName ? sections[sectionName]?.element : null
  };
};
