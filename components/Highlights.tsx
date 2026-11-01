"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  FaCertificate,
  FaHandsHelping,
  FaTrophy,
  FaTimes,
  FaSearchPlus,
} from "react-icons/fa";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

type Item = {
  title: string;
  org: string;
  year?: string;
  note?: string;
  image?: string;
  link?: string;
};

const data: Record<string, Item[]> = {
  Certificates: [
    {
      title: "Power BI Essential Training",
      org: "LinkedIn Learning",
      year: "Jun 2026",
      image: "/PowerBICertificate.jpg",
    },
    {
      title: "Data Analytics for Business Professionals",
      org: "LinkedIn Learning",
      year: "May 2026",
      image: "/DataAnalyticsCertificate.jpg",
    },
    {
      title: "Learning Data Analytics: 1 Foundations",
      org: "LinkedIn Learning",
      year: "May 2026",
      image: "/DataAnalyticsFoundationCertificate.jpg",
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
      image: "/cryptxCertificate.jpg",
    },
  ],
};

const tabs = [
  { name: "Certificates", icon: FaCertificate },
  { name: "Volunteering", icon: FaHandsHelping },
  { name: "Awards", icon: FaTrophy },
];

/* ─── full-size certificate popup ───────────────────────── */
function ImageModal({
  item,
  onClose,
}: {
  item: Item;
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col items-center rounded-2xl border border-rose-dull/30 bg-zinc-900 p-5 shadow-[0_0_60px_rgba(192,132,151,0.25)]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-xl text-zinc-400 transition hover:text-rose-dull"
        >
          <FaTimes />
        </button>

        <h3 className="px-8 text-center text-lg font-bold text-zinc-100">
          {item.title}
        </h3>
        <p className="mb-4 text-center text-sm text-zinc-500">{item.org}</p>

        {item.image && (
          <Image
            src={item.image}
            alt={`${item.title} certificate`}
            width={1600}
            height={1100}
            style={{ width: "auto", height: "auto" }}
            className="max-h-[75vh] max-w-full rounded-lg border border-zinc-700 object-contain"
          />
        )}
      </div>
    </div>,
    document.body
  );
}

/* ─── section ───────────────────────────────────────────── */
export default function Highlights() {
  const [active, setActive] = useState("Certificates");
  const [preview, setPreview] = useState<Item | null>(null);

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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data[active].map((item, i) => {
          const clickable = Boolean(item.image);

          return (
            <Reveal key={`${active}-${i}`} delay={i * 100}>
              <div
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : undefined}
                onClick={clickable ? () => setPreview(item) : undefined}
                onKeyDown={
                  clickable
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setPreview(item);
                        }
                      }
                    : undefined
                }
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 border-l-4 border-l-rose-dull bg-zinc-800/60 transition duration-300 hover:-translate-y-2 hover:border-rose-dull/60 hover:shadow-[0_10px_40px_rgba(192,132,151,0.2)] focus:outline-none focus-visible:border-rose-dull ${
                  clickable ? "cursor-pointer" : ""
                }`}
              >
                {item.image && (
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-zinc-700 bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={`${item.title} certificate`}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-zinc-900/80 px-2.5 py-1 text-[11px] text-rose-dull backdrop-blur">
                      <FaSearchPlus /> View
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  {item.year && (
                    <p className="text-sm text-rose-dull">{item.year}</p>
                  )}
                  <h3 className="mt-1 text-lg font-bold leading-snug text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{item.org}</p>

                  {item.note && (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                      {item.note}
                    </p>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 inline-block text-sm text-rose-dull transition hover:text-rose-dull-light"
                    >
                      View credential →
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {preview && (
        <ImageModal item={preview} onClose={() => setPreview(null)} />
      )}
    </section>
  );
}