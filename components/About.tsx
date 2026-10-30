import {
  FaBriefcase,
  FaRocket,
  FaGraduationCap,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

const stats = [
  { icon: FaRocket, value: "5+", label: "Projects" },
  { icon: FaBriefcase, value: "2", label: "Focus Areas" },
  { icon: FaGraduationCap, value: "IT", label: "Undergraduate" },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        Get to know me
      </p>
      <h2 className="text-4xl font-bold text-zinc-100 mt-2">
        About <span className="text-rose-dull">Me</span>
      </h2>
      <div className="h-1 w-16 rounded-full bg-rose-dull mt-4 mb-10" />

      <div className="grid gap-10 md:grid-cols-[300px_1fr] items-center">
        {/* photo card (placeholder until you add your photo) */}
        <div className="flex aspect-[4/5] w-full max-w-xs mx-auto md:mx-0 items-center justify-center rounded-3xl border border-rose-dull/40 bg-zinc-800 text-7xl font-bold text-rose-dull shadow-[0_0_60px_rgba(192,132,151,0.2)]">
          SA
        </div>

        {/* text side */}
        <div>
          <h3 className="text-2xl font-bold text-zinc-100">
            Software Developer &amp; Data Enthusiast
          </h3>

          <p className="text-zinc-400 leading-relaxed mt-4">
            I am studying Information Technology at the Faculty of Computing,
            Sabaragamuwa University of Sri Lanka. I enjoy building full-stack
            web apps with React and Flask, and I also like turning data into
            useful insights using Python, MySQL and Power BI.
          </p>
          <p className="text-zinc-400 leading-relaxed mt-4">
            My projects include Scholar Track, a pet adoption platform, a
            crochet shop and a Sri Lanka tourism data analysis. I am looking
            for internship opportunities where I can learn, contribute and grow
            as a developer and data analyst.
          </p>

          <div className="border-t border-zinc-700 mt-6 pt-6 grid gap-4 sm:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-800/60 p-4 hover:border-rose-dull/60 transition"
              >
                <div className="rounded-lg bg-rose-dull/15 p-3 text-rose-dull">
                  <Icon />
                </div>
                <div>
                  <p className="text-2xl font-bold text-zinc-100">{value}</p>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/cv-developer.pdf"
              download
              className="flex items-center gap-2 rounded-xl bg-rose-dull px-6 py-3 font-medium text-zinc-900 hover:bg-rose-dull-light hover:-translate-y-0.5 transition"
            >
              <FaDownload /> Developer CV
            </a>
            <a
              href="/cv-data.pdf"
              download
              className="flex items-center gap-2 rounded-xl bg-rose-dull px-6 py-3 font-medium text-zinc-900 hover:bg-rose-dull-light hover:-translate-y-0.5 transition"
            >
              <FaDownload /> Data Analytics CV
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-rose-dull px-6 py-3 font-medium text-rose-dull hover:bg-rose-dull hover:text-zinc-900 transition"
            >
              <FaEnvelope /> Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}