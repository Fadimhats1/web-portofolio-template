import { links } from "@/lib/data";
import { MutableRefObject, ReactNode } from "react";

export type SectionName = (typeof links)[number]["name"];

export type SectionActiveStatusType = {
  [key in SectionName]: boolean;
};

export interface SectionProps {
  callback: (value: MutableRefObject<HTMLElement | null>) => void;
  children: ReactNode;
}
