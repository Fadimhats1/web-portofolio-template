"use client";

import { useSectionScrollObserver } from "@/hooks/useSectionScrollObserver";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  const { ref } = useSectionScrollObserver("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am an individual full of enthusiasm for exploring new things,
        especially in technology. My experience and interest in innovation have
        broadened my horizons, while my analytical and problem-solving skills
        allow me to tackle challenges with confidence. I am always open to new
        learning and sharing knowledge with others, while my commitment to
        self-development and making positive contributions to the technology
        industry remains the main focus in every step I take.
      </p>
    </motion.section>
  );
};

export default About;
