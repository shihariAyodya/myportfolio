import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import Skills from "../components/Skills";
import Journey from "../components/Journey";
import Highlights from "../components/Highlights";

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        {/* soft glow blobs in the background */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-rose-dull/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-dull/10 blur-3xl" />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl pt-20">
          {/* text side */}
          <div className="text-center md:text-left">
            <span className="inline-block rounded-full border border-rose-dull/40 px-4 py-1 text-sm text-rose-dull">
              Open to internships
            </span>

            <p className="text-lg text-zinc-400 mt-6">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mt-2 bg-linear-to-r from-rose-dull to-rose-dull-light bg-clip-text text-transparent">
              Shihari Ayodya
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-300 mt-4">
              Software Developer | Data Enthusiast
            </h2>
            <p className="text-zinc-400 mt-4 max-w-md">
              I build web apps and turn data into useful insights.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-rose-dull px-6 py-3 font-medium text-zinc-900 hover:bg-rose-dull-light hover:-translate-y-0.5 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-rose-dull px-6 py-3 font-medium text-rose-dull hover:bg-rose-dull hover:text-zinc-900 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* avatar side */}
          <div className="flex h-56 w-56 md:h-72 md:w-72 shrink-0 items-center justify-center rounded-full border-2 border-rose-dull/50 bg-zinc-800 text-6xl font-bold text-rose-dull shadow-[0_0_60px_rgba(192,132,151,0.3)]">
            SA
          </div>
        </div>
      </main>

     <Reveal>
  <About />
</Reveal>
<Reveal>
  <Skills />
</Reveal>
<Reveal>
  <Journey />
</Reveal>
<Reveal>
  <Highlights />
</Reveal>
<Reveal>
  <Projects />
</Reveal>
<Reveal>
  <Contact />
</Reveal>
    </>
  );
}