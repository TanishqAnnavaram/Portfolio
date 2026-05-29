import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LENSES } from '../data'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ lens, setLens }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur border-b border-edge' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight text-slate-100">
          T<span className="text-accent">.</span>Annavaram
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-soft hover:text-slate-100 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Lens toggle (desktop) */}
        <div className="hidden md:flex items-center rounded-full border border-edge bg-panel p-1">
          {LENSES.map((l) => (
            <button
              key={l.id}
              onClick={() => setLens(l.id)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                lens === l.id
                  ? 'bg-accent text-ink'
                  : 'text-soft hover:text-slate-100'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-slate-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-edge bg-ink/95 backdrop-blur px-5 py-4 space-y-4">
          <div className="flex flex-wrap gap-2">
            {LENSES.map((l) => (
              <button
                key={l.id}
                onClick={() => setLens(l.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                  lens === l.id
                    ? 'bg-accent text-ink border-accent'
                    : 'text-soft border-edge'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-soft hover:text-slate-100"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
