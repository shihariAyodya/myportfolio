"use client";

import { useState } from "react";
import { FaCertificate, FaHandsHelping, FaTrophy } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Item = {
  title: string;
  org: string;
  year?: string;
  note?: string;
  link?: string;
};

const data: Record<string, Item[]> = {
  Certificates: [
    {
      title: "Power BI Essential Training",
      org: "LinkedIn Learning",
      year: "Jun 2026",
    },
    {
      title: "Data Analytics for Business Professionals",
      org: "LinkedIn Learning",
      year: "May 2026",
    },
    {
      title: "Learning Data Analytics: 1 Foundations",
      org: "LinkedIn Learning",
      year: "May 2026",
    },
    {
      title: "Front-End Web Development",
      org: "CODL, University of Moratuwa",
    },
    {
      title: "Python for Beginners",
      org: "CODL, University of Moratuwa",
    },
  ],
  Volunteering: [
    {
      title: "Club Designer",
      org: "Rotaract Club of SUSL",
      year: "2025 – Present",
      note: "Project Chair (2026) and Co-Chair (2025) of the SDG Project Series: Life Below Water.",
    },
    {
      title: "Club Designer",
      org: "Sabra Leos",
      year: "2025 – Present",
    },
    {
      title: "Member",
      org: "IEEE",
      year: "2026 – Present",
    },
  ],
  Awards: [
    {
      title: "Top 30, Data Storm 7.0",
      org: "University of Moratuwa × OCTAVE, John Keells Group",
      note: "Team WeCodeX placed among the top 30 teams in a 36-hour data science hackathon solving a real-world industry problem.",
    },
    {
      title: "Top 15 Finalist, CryptX 2.0 Hackathon",
      org: "University of Sri Jayewardenepura, ICT Society",
      note: "Team WeCodeX was selected among the top 15 finalist teams.",
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
              {item.year && (
                <p className="text-sm text-rose-dull">{item.year}</p>
              )}
              <h3 className="text-xl font-bold text-zinc-100 mt-1">
                {item.title}
              </h3>
              <p className="text-zinc-400 mt-1">{item.org}</p>

              {item.note && (
                <p className="text-zinc-500 mt-3 text-sm leading-relaxed">
                  {item.note}
                </p>
              )}

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