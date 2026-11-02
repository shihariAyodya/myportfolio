export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl md:text-6xl font-bold leading-none text-zinc-100">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-rose-dull" />
    </div>
  );
}