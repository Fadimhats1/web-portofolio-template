"use client";

import { links, topThresholds } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import { useRouter } from "next/navigation";
import React, { createContext, useEffect, useMemo, useRef, useState } from "react";

type ActiveSectionContextProviderProps = { children: React.ReactNode };

type ActiveSectionContextType = {
  activeSection: TActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<TActiveSection>>;
  sections: SectionData;
};

type SectionData = { [key: string]: {
  element: React.RefObject<HTMLElement>;
  topThreshold: number;
} }

export type TActiveSection = {
  section: SectionName,
  isScrollAllow: boolean
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider: React.FC<
  ActiveSectionContextProviderProps
> = ({ children }) => {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<TActiveSection>({
    section: "Home",
    isScrollAllow: true
  });
  const sections = useMemo(() => {
    let sections: SectionData = {};
    links.forEach((value, index) => {
      sections[value.name] = {
        element: React.createRef<HTMLElement>(),
        topThreshold: topThresholds[index]
      };
    });
    return sections;
  }, []);
  const isFirstReload = useRef(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleHashChange = () => {
        const hash = window.location.hash
        if (hash === '') {
          setActiveSection({ section: "Home", isScrollAllow: isFirstReload.current });
        } else {
          const newHash = hash.replace("#", "");
          setActiveSection({ section: (newHash.charAt(0).toUpperCase() + newHash.slice(1)) as SectionName, isScrollAllow: isFirstReload.current });
        }
      };

      handleHashChange();

      window.addEventListener('hashchange', handleHashChange);

      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && isFirstReload.current) {
      router.push("/" + window.location.hash);
      isFirstReload.current = false;
    }
  }, [activeSection])

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        sections,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
