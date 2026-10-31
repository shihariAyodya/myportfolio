"use client";

import { useState, useEffect } from "react";
import {
  FaCode,
  FaStar,
  FaReact,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaChartBar,
  FaChartPie,
  FaHtml5,
  FaCss3Alt,
  FaTools,
  FaTerminal,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiGooglecolab,
  SiJupyter,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

/* ─── types ─────────────────────────────────────────────── */
interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
  color: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

/* ─── data ─────────────────────────────────────────────── */
const categories: Category[] = [
  { id: "web",     label: "Web Dev",        icon: FaCode,     color: "#c08497" },
  { id: "backend", label: "Backend & DB",   icon: FaDatabase, color: "#a78bfa" },
  { id: "data",    label: "Data Analytics", icon: FaChartBar, color: "#34d399" },
  { id: "tools",   label: "Tools",          icon: FaTools,    color: "#7dd3fc" },
];

const skills: Skill[] = [
  /* web */
  { name: "React",            icon: FaReact,       category: "web",     color: "#61dafb" },
  { name: "Next.js",          icon: SiNextdotjs,   category: "web",     color: "#e2e8f0" },
  { name: "Tailwind CSS",     icon: SiTailwindcss, category: "web",     color: "#38bdf8" },
  { name: "HTML",             icon: FaHtml5,       category: "web",     color: "#f97316" },
  { name: "CSS",              icon: FaCss3Alt,     category: "web",     color: "#60a5fa" },
  /* backend */
  { name: "Python",           icon: FaPython,      category: "backend", color: "#7dd3fc" },
  { name: "Flask",            icon: SiFlask,       category: "backend", color: "#e2e8f0" },
  { name: "PostgreSQL",       icon: SiPostgresql,  category: "backend", color: "#60a5fa" },
  { name: "MySQL",            icon: SiMysql,       category: "backend", color: "#f97316" },
  /* data */
  { name: "Power BI",         icon: FaChartPie,    category: "data",    color: "#7dd3fc" },
  { name: "SQL",              icon: TbSql,         category: "data",    color: "#34d399" },
  { name: "Data Mining",      icon: FaChartBar,    category: "data",    color: "#a78bfa" },
  { name: "Jupyter Notebook", icon: SiJupyter,     category: "data",    color: "#fb923c" },
  { name: "Google Colab",     icon: SiGooglecolab, category: "data",    color: "#7dd3fc" },
  /* tools */
  { name: "Git",              icon: FaGitAlt,      category: "tools",   color: "#f97316" },
  { name: "GitHub",           icon: SiGithub,      category: "tools",   color: "#e2e8f0" },
  { name: "VS Code",          icon: FaTerminal,    category: "tools",   color: "#38bdf8" },
];

const professional = [
  { group: "Communication",       items: ["Verbal & Written Communication", "Presentation Skills"] },
  { group: "Team & Productivity", items: ["Teamwork", "Time Management", "Problem Solving"] },
  { group: "Self Development",    items: ["Self-Learning", "Adaptability", "Critical Thinking"] },
];

/* ─── skill card ─────────────────────────────────────────── */
function SkillCard({
  name,
  icon: Icon,
  color,
  index,
}: Skill & { index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${index * 70}ms`,
        boxShadow: hovered ? `0 0 28px 6px ${color}30` : "none",
        borderColor: hovered ? `${color}70` : "rgb(63 63 70)",
        transform: hovered ? "translateY(-8px) scale(1.07)" : "translateY(0) scale(1)",
        transition: "transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      className="skill-card group flex w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.67rem)] md:w-[calc(25%-0.75rem)] flex-col items-center justify-center gap-3 rounded-2xl border bg-zinc-800/70 backdrop-blur-sm p-5 cursor-default"
    >
      {/* icon */}
      <div
        style={{
          color: hovered ? color : "#71717a",
          transform: hovered ? "scale(1.25) rotate(-5deg)" : "scale(1) rotate(0deg)",
          transition: "color 0.25s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1)",
          filter: hovered ? `drop-shadow(0 0 8px ${color}80)` : "none",
        }}
        className="text-3xl"
      >
        <Icon />
      </div>

      {/* name */}
      <span
        style={{ color: hovered ? "#f4f4f5" : "#a1a1aa", transition: "color 0.2s ease" }}
        className="text-sm font-medium text-center leading-tight"
      >
        {name}
      </span>

      {/* bottom accent dot */}
      <span
        style={{
          background: color,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "opacity 0.2s ease, transform 0.25s ease",
          display: "block",
          height: "2px",
          width: "24px",
          borderRadius: "9999px",
        }}
      />
    </div>
  );
}

/* ─── main component ─────────────────────────────────────── */
export default function Skills() {
  const [tab, setTab]       = useState<"Technical" | "Professional">("Technical");
  const [activeId, setActiveId] = useState("web");
  const [animKey, setAnimKey]   = useState(0);

  // retrigger card animation when category changes
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [activeId]);

  const activeCat = categories.find((c) => c.id === activeId)!;
  const filtered  = skills.filter((s) => s.category === activeId);

  return (
    <>
      <style>{`
        @keyframes skillIn {
          from { opacity: 0; transform: translateY(24px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0)    scale(1);   }
        }
        .skill-card {
          opacity: 0;
          animation: skillIn 0.45s cubic-bezier(.34,1.56,.64,1) forwards;
        }
        @keyframes proIn {
          from { opacity: 0; transform: translateX(-14px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        .pro-item {
          opacity: 0;
          animation: proIn 0.35s ease forwards;
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 3rem; }
        }
        .accent-line {
          animation: lineGrow 0.4s ease forwards;
        }
      `}</style>

      <section
        id="skills"
        className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
      >
        <SectionTitle title="Skills" />

        {/* ── top tab toggle ── */}
        <div className="flex justify-center gap-3 mb-10">
          {(["Technical", "Professional"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                tab === t
                  ? "bg-rose-dull text-zinc-900 shadow-[0_0_20px_rgba(192,132,151,0.45)]"
                  : "bg-zinc-800 text-zinc-400 hover:text-rose-dull hover:bg-zinc-700"
              }`}
            >
              {t === "Technical" ? <FaCode /> : <FaStar />}
              {t}
            </button>
          ))}
        </div>

        {/* ══ TECHNICAL TAB ══ */}
        {tab === "Technical" && (
          <div className="flex flex-col gap-8">

            {/* category selector pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => {
                const Icon    = cat.icon;
                const isActive = cat.id === activeId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveId(cat.id)}
                    style={{
                      borderColor: isActive ? cat.color : "transparent",
                      color:       isActive ? cat.color : "#71717a",
                      boxShadow:   isActive ? `0 0 16px ${cat.color}40` : "none",
                      background:  isActive ? `${cat.color}15` : "rgb(39 39 42)",
                    }}
                    className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <Icon />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* active category label + underline */}
            <div className="text-center">
              <h3
                key={activeId + "-title"}
                style={{ color: activeCat.color }}
                className="text-2xl font-bold"
              >
                {activeCat.label}
              </h3>
              <div
                key={activeId + "-line"}
                style={{ background: activeCat.color }}
                className="accent-line mx-auto mt-2 h-0.5 rounded-full"
              />
            </div>

            {/* skill cards (centred rows) */}
            <div
              key={animKey}
              className="flex flex-wrap justify-center gap-4"
            >
              {filtered.map((s, i) => (
                <SkillCard key={s.name} {...s} index={i} />
              ))}
            </div>

            {/* sliding dot indicators */}
            <div className="flex justify-center gap-2 mt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  title={cat.label}
                  style={{
                    background: cat.id === activeId ? cat.color : "rgb(63 63 70)",
                    width:      cat.id === activeId ? "28px"    : "8px",
                    boxShadow:  cat.id === activeId ? `0 0 8px ${cat.color}80` : "none",
                  }}
                  className="h-2 rounded-full transition-all duration-300 hover:opacity-80"
                />
              ))}
            </div>
          </div>
        )}

        {/* ══ PROFESSIONAL TAB ══ */}
        {tab === "Professional" && (
          <div className="grid gap-6 md:grid-cols-3">
            {professional.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 100}>
                <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-800/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-rose-dull/60 hover:shadow-[0_10px_40px_rgba(192,132,151,0.2)]">
                  <h3 className="text-lg font-bold text-rose-dull mb-1">{group.group}</h3>
                  <div className="mb-4 h-0.5 w-8 rounded-full bg-rose-dull/40" />
                  <ul className="space-y-3">
                    {group.items.map((item, ii) => (
                      <li
                        key={item}
                        className="pro-item flex items-center gap-3 text-zinc-300 text-sm"
                        style={{ animationDelay: `${gi * 80 + ii * 70}ms` }}
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-rose-dull shadow-[0_0_6px_rgba(192,132,151,0.6)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}