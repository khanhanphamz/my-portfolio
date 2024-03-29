import About from "./components/home/about";
import Contact from "./components/home/contact";
import Experience from "./components/home/experience";
import Hero from "./components/home/hero";
import Projects from "./components/home/projects";
import Skills from "./components/home/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
