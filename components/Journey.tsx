"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

type Entry = {
  title: string;
  place: string;
  period?: string;
  note?: string;
};

const tabs: Record<string, Entry[]> = {
  Education: [
    {
      title: "Bachelor of Science in Information Systems",
      place: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
      period: "07/2024 – 07/2028",
      note: "Specializing in Data Analytics.",
    },
    {
      title: "G.C.E. Advanced Level, Physical Science Stream",
      place: "Bandarawela Central College",
      period: "2022 (23)",
    },
  ],
  Experience: [
    {
      title: "Founder, Handmade Crochet Small Business",
      place: "Independent business",
      note: "Ran the business from product design to customer service, and used a Facebook page to market products, answer customer questions and drive sales.",
    },
  ],
};

export default function Journey() {
  const [active, setActive] = useState("Education");

  return (
    <section
      id="journey"
      className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <SectionTitle title="Journey" />

      <div className="flex justify-center gap-3 mb-10">
        {Object.keys(tabs).map((name) => (
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

      <div className="max-w-2xl mx-auto border-l-2 border-rose-dull/40 pl-8 space-y-8">
        {tabs[active].map((item) => (
          <div key={item.title} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-rose-dull shadow-[0_0_12px_rgba(192,132,151,0.6)]" />

            {item.period && (
              <p className="text-sm text-rose-dull">{item.period}</p>
            )}
            <h3 className="text-xl font-bold text-zinc-100 mt-1">
              {item.title}
            </h3>
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