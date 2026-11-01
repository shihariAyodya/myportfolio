import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Highlights from "../components/Highlights";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Highlights />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}