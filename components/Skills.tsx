const skillGroups = [
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML & CSS", "JavaScript"],
  },
  {
    title: "Backend & Databases",
    skills: ["Python", "Flask", "PostgreSQL", "MySQL"],
  },
  {
    title: "Data Analytics",
    skills: ["Python", "Power BI", "SQL", "Data Mining"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "VS Code", "Google Colab", "LaTeX"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        What I use
      </p>
      <h2 className="text-4xl font-bold text-zinc-100 mt-2">
        My <span className="text-rose-dull">Skills</span>
      </h2>
      <div className="h-1 w-16 rounded-full bg-rose-dull mt-4 mb-10" />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-800/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-rose-dull/60 hover:shadow-[0_10px_40px_rgba(192,132,151,0.2)]"
          >
            <h3 className="text-xl font-bold text-rose-dull">{group.title}</h3>

            <div className="flex flex-wrap gap-2 mt-5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-900 border border-zinc-700 px-4 py-1.5 text-sm text-zinc-300 hover:border-rose-dull hover:text-rose-dull transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}