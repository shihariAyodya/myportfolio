"use client";

import { useState } from "react";
import { FaCertificate, FaHandsHelping, FaTrophy } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Item = {
  title: string;
  org: string;
  year: string;
  link?: string;
};

const data: Record<string, Item[]> = {
  Certificates: [
    {
      title: "YOUR CERTIFICATE NAME",
      org: "ISSUED BY",
      year: "YEAR",
      link: "",
    },
    {
      title: "YOUR CERTIFICATE NAME",
      org: "ISSUED BY",
      year: "YEAR",
      link: "",
    },
  ],
  Volunteering: [
    {
      title: "YOUR ROLE",
      org: "ORGANIZATION OR CLUB",
      year: "YEAR",
    },
  ],
  Awards: [
    {
      title: "YOUR AWARD OR ACHIEVEMENT",
      org: "EVENT OR ORGANIZATION",
      year: "YEAR",
    },
  ],
};

const tabs = [
  { name: "Certificates", icon: FaCertificate },
  { name: "Volunteering", icon: FaHandsHelping },
  { name: "Awards", icon: FaTrophy },
];

export default function Highlights() {
  const [active, setActive] = useState("Certificates");

  return (
    <section
      id="highlights"
      className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <SectionTitle title="Highlights" />

      <div className="flex flex-wrap justify-center gap-3 mb-10">
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

      <div className="grid gap-6 md:grid-cols-2">
        {data[active].map((item, i) => (
          <Reveal key={`${active}-${i}`} delay={i * 100}>
            <div className="h-full rounded-2xl border border-zinc-800 border-l-4 border-l-rose-dull bg-zinc-800/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-rose-dull/60 hover:shadow-[0_10px_40px_rgba(192,132,151,0.2)]">
              <p className="text-sm text-rose-dull">{item.year}</p>
              <h3 className="text-xl font-bold text-zinc-100 mt-1">
                {item.title}
              </h3>
              <p className="text-zinc-400 mt-1">{item.org}</p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-rose-dull hover:text-rose-dull-light transition"
                >
                  View credential →
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}