import { ActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useContext } from "react";

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
};
