"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Highlights", href: "#highlights" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));

    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      let current = ids[0];
      let bestTop = -Infinity;

      // pick the section whose top is closest to (but above) the line
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= line && top > bestTop) {
          bestTop = top;
          current = id;
        }
      }

      // at the very bottom of the page, highlight Contact
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = "contact";

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/70 backdrop-blur">
      <div className="flex items-center justify-between px-8 py-4 max-w-5xl mx-auto">
        <span className="text-xl font-bold text-rose-dull">Shihari.</span>

        {/* desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.name}>
                <a
                  href={l.href}
                  className={`transition hover:text-rose-dull ${
                    isActive
                      ? "text-rose-dull border-b-2 border-rose-dull pb-1"
                      : "text-zinc-300"
                  }`}
                >
                  {l.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* hamburger button (phones only) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden text-2xl text-zinc-300 hover:text-rose-dull transition"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-8 pb-6">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.name}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block transition hover:text-rose-dull ${
                    isActive ? "text-rose-dull" : "text-zinc-300"
                  }`}
                >
                  {l.name}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}