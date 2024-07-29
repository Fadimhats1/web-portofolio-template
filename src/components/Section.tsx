import { SectionProps } from "@/lib/types";
import React, { useEffect, useRef } from "react";

const Section: React.FC<SectionProps> = ({ callback, children }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      callback(ref);
    }
  }, []);

  return <>{children}</>;
};

export default Section;
