"use client";

import { useState } from "react";
import { FaCode, FaStar } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Level = "Beginner" | "Intermediate" | "Advanced";

const levelWidth: Record<Level, string> = {
  Beginner: "w-1/3",
  Intermediate: "w-2/3",
  Advanced: "w-full",
};

const technical: {
  title: string;
  note: string;
  skills: { name: string; level: Level }[];
}[] = [
  {
    title: "Web Development",
    note: "From idea to interface",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Beginner" },
      { name: "Tailwind CSS", level: "Beginner" },
      { name: "HTML & CSS", level: "Intermediate" },
    ],
  },
  {
    title: "Backend & Databases",
    note: "Data behind the screen",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
      { name: "PostgreSQL", level: "Beginner" },
      { name: "MySQL", level: "Intermediate" },
    ],
  },
  {
    title: "Data Analytics",
    note: "Insights from data",
    skills: [
      { name: "Power BI", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Data Mining", level: "Beginner" },
    ],
  },
  {
    title: "Tools",
    note: "How I work",
    skills: [
      { name: "Git & GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Google Colab", level: "Intermediate" },
    ],
  },
];

const professional = [
  {
    title: "Communication",
    skills: ["Verbal & Written Communication", "Presentation Skills"],
  },
  {
    title: "Team & Productivity",
    skills: ["Teamwork", "Time Management", "Problem Solving"],
  },
  {
    title: "Self Development",
    skills: ["Self-Learning", "Adaptability", "Critical Thinking"],
  },
];

const tabs = [
  { name: "Technical", icon: FaCode },
  { name: "Professional", icon: FaStar },
];

export default function Skills() {
  const [active, setActive] = useState("Technical");

  return (
    <section
      id="skills"
      className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <SectionTitle title="Skills" />

      <div className="flex justify-center gap-3 mb-10">
        {tabs.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm transition ${
              active === name
                ? "bg-rose-dull text-zinc-900"
                : "bg-zinc-800 text-zinc-300 hover:text-rose-dull"
            }`}
          >
            <Icon /> {name}
          </button>
        ))}
      </div>

      {active === "Technical" ? (
        <div className="grid gap-6 md:grid-cols-2">
          {technical.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-800/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-rose-dull/60 hover:shadow-[0_10px_40px_rgba(192,132,151,0.2)]">
                <h3 className="text-xl font-bold text-rose-dull">
                  {group.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-5">{group.note}</p>

                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-200">{s.name}</span>
                        <span className="rounded-full bg-rose-dull/10 px-2 py-0.5 text-xs text-rose-dull">
                          {s.level}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-zinc-700">
                        <div
                          className={`h-full rounded-full bg-linear-to-r from-rose-dull to-rose-dull-light ${levelWidth[s.level]}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {professional.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-800/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-rose-dull/60 hover:shadow-[0_10px_40px_rgba(192,132,151,0.2)]">
                <h3 className="text-xl font-bold text-rose-dull">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3 text-zinc-300">
                  {group.skills.map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-rose-dull" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}