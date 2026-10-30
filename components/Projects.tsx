"use client";

import { useState } from "react";

const projects = [
  {
    title: "Scholar Track",
    description:
      "A full-stack student task management web app built with React, Flask and PostgreSQL.",
    category: "Web",
    tags: ["React", "Flask", "PostgreSQL"],
  },
  {
    title: "Pet Adoption & Care",
    description:
      "A website for pet listings, adoption requests, lost and found, a vet directory and user accounts.",
    category: "Web",
    tags: ["Web App", "Full Stack"],
  },
  {
    title: "Crochet Shop",
    description:
      "An online store for selling handmade crochet items, built with React.",
    category: "Web",
    tags: ["React", "E-commerce"],
  },
  {
    title: "Sri Lanka Tourism Analysis",
    description:
      "Analysis of tourist arrivals from 2023 to 2025 using Python, MySQL and Power BI.",
    category: "Data",
    tags: ["Python", "MySQL", "Power BI"],
  },
];

const filters = ["All", "Web", "Data"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        My work
      </p>
      <h2 className="text-4xl font-bold text-zinc-100 mt-2">
        Featured <span className="text-rose-dull">Projects</span>
      </h2>
      <div className="h-1 w-16 rounded-full bg-rose-dull mt-4 mb-8" />

      <div className="flex gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-5 py-2 transition ${
              active === f
                ? "bg-rose-dull text-zinc-900"
                : "bg-zinc-800 text-zinc-300 hover:text-rose-dull"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl border border-zinc-800 border-t-2 border-t-rose-dull bg-zinc-800/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-rose-dull/60 hover:shadow-[0_10px_40px_rgba(192,132,151,0.2)]"
          >
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-rose-dull transition">
              {p.title}
            </h3>
            <p className="text-zinc-400 mt-3 leading-relaxed">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-rose-dull/10 px-3 py-1 text-xs text-rose-dull"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}