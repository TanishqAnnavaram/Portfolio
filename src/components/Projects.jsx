import { useEffect, useState } from 'react'
import { Github, ExternalLink, X, ArrowUpRight } from 'lucide-react'
import Section from './Section'
import { PROJECTS } from '../data'

function rank(lens) {
  return [...PROJECTS].sort((a, b) => {
    if (lens === 'all') return 0
    return (b.weight?.[lens] ?? 0) - (a.weight?.[lens] ?? 0)
  })
}

export default function Projects({ lens }) {
  const items = rank(lens)
  const [openId, setOpenId] = useState(null)
  const active = items.find((p) => p.id === openId)

  // lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  return (
    <Section id="projects" eyebrow="04 / projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((p) => {
          const relevant = lens !== 'all' && (p.lens === lens || p.lens === 'both')
          return (
            <button
              key={p.id}
              onClick={() => setOpenId(p.id)}
              className={`group text-left rounded-xl border bg-panel p-6 transition-all hover:-translate-y-1 ${
                relevant ? 'border-accent/40' : 'border-edge'
              } hover:border-accent`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-slate-100 leading-snug">{p.title}</h3>
                <ArrowUpRight size={18} className="text-soft group-hover:text-accent transition shrink-0" />
              </div>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 5).map((s) => (
                  <span key={s} className="rounded-md border border-edge bg-ink px-2 py-0.5 text-[11px] font-mono text-soft">
                    {s}
                  </span>
                ))}
                {p.stack.length > 5 && (
                  <span className="text-[11px] font-mono text-soft px-1">+{p.stack.length - 5}</span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {active && <ProjectModal project={active} onClose={() => setOpenId(null)} />}
    </Section>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-edge bg-panel p-7 animate-fadeup"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-soft hover:text-slate-100"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold text-slate-100 pr-8">{project.title}</h3>
        <p className="mt-3 text-sm text-slate-400 leading-relaxed">{project.summary}</p>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-soft mb-2">Tech stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="rounded-md border border-edge bg-ink px-2 py-0.5 text-[11px] font-mono text-soft">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-soft mb-2">What I built</p>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-edge px-3 py-2 text-sm font-medium text-slate-200 hover:border-accent hover:text-accent transition"
            >
              {l.type === 'github' ? <Github size={15} /> : <ExternalLink size={15} />}
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
