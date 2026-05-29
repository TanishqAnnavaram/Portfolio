export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16 md:py-24 scroll-mt-20">
      <div className="mb-10">
        {eyebrow && (
          <p className="font-mono text-sm text-accent2 mb-2">{eyebrow}</p>
        )}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
