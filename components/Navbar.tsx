"use client";

import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/70 backdrop-blur">
      <div className="flex items-center justify-between px-8 py-4 max-w-5xl mx-auto">
        <span className="text-xl font-bold text-rose-dull">Shihari.</span>

        {/* desktop links */}
        <ul className="hidden md:flex gap-6 text-zinc-300">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} className="hover:text-rose-dull transition">
                {l.name}
              </a>
            </li>
          ))}
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
        <ul className="md:hidden flex flex-col gap-4 px-8 pb-6 text-zinc-300">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block hover:text-rose-dull transition"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}