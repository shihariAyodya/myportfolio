"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const info = [
  {
    icon: FaEnvelope,
    label: "Email Address",
    value: "shihariayodya@gmail.com",
    href: "mailto:shihariayodya@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Sri Lanka",
    href: "",
  },
];

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shihari-ayodya-33406a34b/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/shihariAyodya",
  },
];

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-zinc-700 bg-zinc-800/60 px-4 py-3 text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-rose-dull focus:shadow-[0_0_20px_rgba(192,132,151,0.2)]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <SectionTitle title="Contact" />

      <div className="grid gap-10 md:grid-cols-2">
        {/* left: info */}
        <div>
          <h3 className="text-2xl font-bold text-zinc-100">
  Open to Internship Opportunities
</h3>
<p className="text-zinc-400 mt-3 leading-relaxed">
  I&apos;m a student looking for an internship and happy to hear about new
  projects too. Send me a message and I&apos;ll get back to you as soon as I
  can.
</p>

          <div className="mt-8 space-y-6">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="rounded-lg bg-rose-dull/15 p-3 text-rose-dull">
                  <Icon />
                </div>
                <div>
                  <p className="font-semibold text-zinc-100">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-zinc-400 hover:text-rose-dull transition break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-zinc-400">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg bg-rose-dull/15 p-3 text-xl text-rose-dull hover:bg-rose-dull hover:text-zinc-900 hover:-translate-y-0.5 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* right: form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* hidden spam trap */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={fieldClass}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={fieldClass}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className={fieldClass}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
            className={fieldClass}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center gap-2 rounded-xl bg-rose-dull px-6 py-3 font-medium text-zinc-900 hover:bg-rose-dull-light hover:-translate-y-0.5 transition disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <FaPaperPlane />
          </button>

          {status === "success" && (
            <p className="text-sm text-rose-dull">
              Thank you! Your message was sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again, or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}