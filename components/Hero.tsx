"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const roles = ["Software Developer", "Data Enthusiast", "Web Developer"];

const socials = [
  { icon: FaFacebookF, href: "https://facebook.com/your-username", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/your-username", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/your-username", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/your-username", label: "GitHub" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let delay = deleting ? 40 : 90;
    if (!deleting && text === current) delay = 1500;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* glow blobs */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-rose-dull/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-dull/10 blur-3xl" />

      {/* social icons (left side, bigger screens only) */}
      <div className="hidden md:flex absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 flex-col gap-6">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-2xl text-rose-dull hover:text-rose-dull-light hover:scale-125 transition"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* centred content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full pt-20">
        <span className="inline-block rounded-full border border-rose-dull/40 px-4 py-1 text-sm text-rose-dull">
          Open to internships
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 text-zinc-100">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-rose-dull to-rose-dull-light bg-clip-text text-transparent">
            Shihari
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-zinc-400 mt-4 h-12">
          {text}
          <span className="animate-pulse text-rose-dull">|</span>
        </h2>

        <p className="text-zinc-400 mt-4 max-w-md leading-relaxed">
          I build web apps and turn data into useful insights, and I love
          learning new technologies.
        </p>

        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <a
            href="#contact"
            className="rounded-xl bg-rose-dull px-6 py-3 font-medium text-zinc-900 hover:bg-rose-dull-light hover:-translate-y-0.5 transition"
          >
            Contact Me →
          </a>
          <a
            href="#projects"
            className="rounded-xl border border-rose-dull px-6 py-3 font-medium text-rose-dull hover:bg-rose-dull hover:text-zinc-900 transition"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* scroll down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-zinc-400 hover:text-rose-dull transition animate-bounce"
      >
        Scroll Down ↓
      </a>
    </section>
  );
}