import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import { useEffect, useRef } from "react";

export default function Home() {
  // const observedRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (observedRef.current) {
  //       const rect = observedRef.current.getBoundingClientRect();
  //       // Do something with rect if needed
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial check

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
