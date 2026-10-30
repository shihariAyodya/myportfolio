export default function Contact() {
  return (
    <section
  id="contact"
  className="w-full min-h-screen px-8 pt-28 pb-16 max-w-5xl mx-auto"
>
      <p className="text-sm uppercase tracking-widest text-zinc-500">Say hello</p>
<h2 className="text-4xl font-bold text-zinc-100 mt-2">
  Contact <span className="text-rose-dull">Me</span>
</h2>
<div className="h-1 w-16 rounded-full bg-rose-dull mt-4 mb-8" />

      <p className="text-zinc-300 leading-relaxed">
        I'm open to internship opportunities and new projects. Feel free to
        reach out, and I'll get back to you as soon as I can.
      </p>

      <div className="grid gap-6 mt-10 md:grid-cols-3">
        <a
          href="shihariayodya@gmail.com"
          className="rounded-xl bg-zinc-800 p-6 text-center hover:-translate-y-1 transition"
        >
          <h3 className="text-xl font-bold text-rose-dull">Email</h3>
          <p className="text-zinc-400 mt-2 break-all">shihariayodya@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/shihari-ayodya-33406a34b/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-zinc-800 p-6 text-center hover:-translate-y-1 transition"
        >
          <h3 className="text-xl font-bold text-rose-dull">LinkedIn</h3>
          <p className="text-zinc-400 mt-2">View my profile</p>
        </a>

        <a
          href="https://github.com/shihariAyodya"
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