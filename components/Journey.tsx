"use client";

import { useState } from "react";

const tabs = {
  Education: [
    {
      title: "Bachelor of Science in Information Systems",
      place: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
      period: "2024 - Present",
      note: "Studying software development, data analytics and enterprise architecture.",
    },
    {
      title: "Advanced Level / School",
      place: "Bandarawela Central College, Bandarawela, Sri Lanka",
      period: "2014 - 2023",
      note: "",
    },
  ],
  Experience: [
    {
      title: "Personal & Academic Projects",
      place: "Scholar Track, Pet Adoption & Care, Crochet Shop, Tourism Analysis",
      period: "YEAR - Present",
      note: "Built full-stack web apps and data analysis projects on my own and with teammates.",
    },
    // add an internship or part-time job here when you have one
  ],
};

type TabName = keyof typeof tabs;

export default function Journey() {
  const [active, setActive] = useState<TabName>("Education");

  return (
    <section
      id="journey"
      className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        My path
      </p>
      <h2 className="text-4xl font-bold text-zinc-100 mt-2">
        My <span className="text-rose-dull">Journey</span>
      </h2>
      <div className="h-1 w-16 rounded-full bg-rose-dull mt-4 mb-8" />

      <div className="flex gap-3 mb-10">
        {(Object.keys(tabs) as TabName[]).map((name) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`rounded-full px-5 py-2 transition ${
              active === name
                ? "bg-rose-dull text-zinc-900"
                : "bg-zinc-800 text-zinc-300 hover:text-rose-dull"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="border-l-2 border-rose-dull/40 pl-8 space-y-8">
        {tabs[active].map((item) => (
          <div key={item.title} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-rose-dull shadow-[0_0_12px_rgba(192,132,151,0.6)]" />

            <p className="text-sm text-rose-dull">{item.period}</p>
            <h3 className="text-xl font-bold text-zinc-100 mt-1">{item.title}</h3>
            <p className="text-zinc-400 mt-1">{item.place}</p>
            {item.note && (
              <p className="text-zinc-500 mt-2 leading-relaxed">{item.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}