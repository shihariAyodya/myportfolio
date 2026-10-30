import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
    >
      <SectionTitle title="Contact" />

      <p className="text-zinc-300 leading-relaxed text-center max-w-2xl mx-auto">
        I&apos;m open to internship opportunities and new projects. Feel free to
        reach out, and I&apos;ll get back to you as soon as I can.
      </p>

      <div className="grid gap-6 mt-10 md:grid-cols-3">
        <a
          href="mailto:your-email@example.com"
          className="rounded-xl bg-zinc-800 p-6 text-center hover:-translate-y-1 transition"
        >
          <h3 className="text-xl font-bold text-rose-dull">Email</h3>
          <p className="text-zinc-400 mt-2 break-all">your-email@example.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-zinc-800 p-6 text-center hover:-translate-y-1 transition"
        >
          <h3 className="text-xl font-bold text-rose-dull">LinkedIn</h3>
          <p className="text-zinc-400 mt-2">View my profile</p>
        </a>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-zinc-800 p-6 text-center hover:-translate-y-1 transition"
        >
          <h3 className="text-xl font-bold text-rose-dull">GitHub</h3>
          <p className="text-zinc-400 mt-2">See my code</p>
        </a>
      </div>

      <p className="text-center text-zinc-500 text-sm mt-16">
        © 2026 Shihari Ayodya. All rights reserved.
      </p>
    </section>
  );
}