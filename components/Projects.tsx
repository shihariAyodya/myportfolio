"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
  FaChartBar,
} from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Project = {
  title: string;
  description: string;
  category: "Web" | "Data";
  tags: string[];
  status?: string;
  image?: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Petzy",
    description:
      "A pet adoption and care platform with adoption, lost and found, and a vet directory. I built the Home, Browse/Search, Lost & Found, Vet Directory and Find Match pages, and an English/Sinhala language toggle.",
    category: "Web",
    tags: ["React.js", "Node.js"],
    status: "Group Project · Ongoing",
    image: "/petzy.png",
    github: "",
    live: "",
  },
  {
    title: "Scholar Track",
    description:
      "A task management system for students. It reads tasks from academic documents with an OCR and NLP pipeline and sends email reminders. I built the core interface in React.",
    category: "Web",
    tags: ["React.js", "Flask", "PostgreSQL", "OCR", "NLP"],
    status: "Group Project",
    github: "",
    live: "",
  },
  {
    title: "Crochet Business Web Showcase",
    description:
      "A frontend where customers browse my crochet products and create a pre-filled WhatsApp order message.",
    category: "Web",
    tags: ["React.js", "HTML", "CSS"],
    image: "/crochet.png",
    github: "",
    live: "",
  },
  {
    title: "Sri Lanka Tourism Data Analysis",
    description:
      "Cleaned and explored tourist arrival data from 2023 to 2025 with Python, then used SQL queries to find peak and off-peak months and compare the top source countries. An interactive Power BI dashboard is in progress.",
    category: "Data",
    tags: ["Python", "MySQL", "Power BI"],
    status: "Ongoing",
    github: "",
    live: "",
  },
  {
    title: "Personal Productivity Daily Planner",
    description:
      "A calm, privacy-focused productivity web app to track daily study hours, hobby goals, tasks and internship applications. Data is saved in the browser, with JSON backup and restore so it can be moved easily.",
    category: "Web",
    tags: ["React.js", "Local Storage"],
    image: "/dailyplanner.png",
    github: "",
    live: "https://personal-productivity-planner-one.vercel.app/",
  },
  {
    title: "Pizza Sales Dashboard",
    description:
      "An interactive dashboard that shows sales trends, revenue and product performance to support business decisions.",
    category: "Data",
    tags: ["Power BI", "Excel", "SQL"],
    github: "",
    live: "",
  },
  {
    title: "Retail Sales Analysis Dashboard",
    description:
      "A multi-page dashboard that analyses retail store performance across districts and chains, including sales by district manager, new store growth and category performance.",
    category: "Data",
    tags: ["Power BI"],
    status: "Ongoing",
    github: "",
    live: "",
  },
];

const filters = ["All", "Web", "Data"];
const MAX_TAGS = 3;

/* ─── popup ─────────────────────────────────────────────── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-rose-dull/30 bg-zinc-900 p-6 shadow-[0_0_60px_rgba(192,132,151,0.25)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-xl text-zinc-400 transition hover:text-rose-dull"
        >
          <FaTimes />
        </button>

        <h3 className="px-8 text-center text-2xl font-bold text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-1 text-center text-zinc-500">
          {project.category} Project
          {project.status ? ` · ${project.status}` : ""}
        </p>

        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={800}
            height={450}
            className="mt-5 h-52 max-h-[38vh] w-full rounded-xl border border-zinc-700 object-cover object-top sm:h-60"
          />
        )}

        <p className="mt-5 leading-relaxed text-zinc-300">
          {project.description}
        </p>

        {/* tags on the left, buttons on the right */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-rose-dull/10 px-3 py-1 text-xs text-rose-dull"
              >
                {t}
              </span>
            ))}
          </div>

          {(project.github || project.live) && (
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-rose-dull px-4 py-2 text-sm font-medium text-rose-dull transition hover:bg-rose-dull hover:text-zinc-900"
                >
                  <FaGithub /> View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-rose-dull px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-rose-dull-light"
                >
                  <FaExternalLinkAlt /> Explore Live
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ─── section ───────────────────────────────────────────── */
export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <SectionTitle title="Projects" />

      <div className="flex justify-center gap-3 mb-10">
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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => {
          const shownTags = p.tags.slice(0, MAX_TAGS);
          const extra = p.tags.length - shownTags.length;

          return (
            <Reveal key={p.title} delay={i * 100}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelected(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(p);
                  }
                }}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-800 border-t-2 border-t-rose-dull bg-zinc-800/60 transition duration-300 hover:-translate-y-2 hover:border-rose-dull/60 hover:shadow-[0_10px_40px_rgba(192,132,151,0.2)] focus:outline-none focus-visible:border-rose-dull"
              >
                {/* picture area (placeholder if no image yet) */}
                <div className="relative aspect-video overflow-hidden border-b border-zinc-700">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      width={600}
                      height={338}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-rose-dull/20 via-zinc-800 to-zinc-900 text-4xl text-rose-dull/60">
                      {p.category === "Data" ? <FaChartBar /> : <FaCode />}
                    </div>
                  )}

                  {p.status && (
                    <span className="absolute right-2 top-2 rounded-full border border-rose-dull/40 bg-zinc-900/80 px-2.5 py-0.5 text-[11px] text-rose-dull backdrop-blur">
                      {p.status}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-lg font-bold leading-snug text-zinc-100 transition group-hover:text-rose-dull">
                    {p.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                    {p.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {shownTags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-rose-dull/10 px-2.5 py-0.5 text-[11px] text-rose-dull"
                      >
                        {t}
                      </span>
                    ))}
                    {extra > 0 && (
                      <span className="rounded-full bg-zinc-700/50 px-2.5 py-0.5 text-[11px] text-zinc-400">
                        +{extra}
                      </span>
                    )}
                  </div>

                  <p className="mt-auto pt-4 text-xs text-rose-dull">
                    View details →
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}