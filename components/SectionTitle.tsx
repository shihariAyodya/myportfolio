export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-12 text-center">
      {/* faded word on top */}
      <span
        aria-hidden="true"
        className="block select-none pointer-events-none text-5xl md:text-7xl font-bold leading-none text-zinc-100/10"
      >
        {title}
      </span>

      {/* title pulled up so it only touches the bottom of the faded word */}
      <h2 className="relative z-10 -mt-3 md:-mt-4 text-3xl md:text-4xl font-bold leading-none text-zinc-100">
        {title}
      </h2>

      <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-rose-dull" />
    </div>
  );
}