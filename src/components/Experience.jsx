import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import Section from './Section'
import { EXPERIENCE } from '../data'

function rank(lens) {
  return [...EXPERIENCE].sort((a, b) => {
    if (lens === 'all') return 0
    return (b.weight?.[lens] ?? 0) - (a.weight?.[lens] ?? 0)
  })
}

export default function Experience({ lens }) {
  const items = rank(lens)
  // Open the top (most relevant) item by default.
  const [open, setOpen] = useState(items[0]?.id ?? null)
  const [caseStudyOpen, setCaseStudyOpen] = useState(null)

  return (
    <Section id="experience" eyebrow="03 / experience" title="Experience">
      <div className="space-y-3">
        {items.map((e) => {
          const isOpen = open === e.id
          const relevant = lens !== 'all' && e.lens === lens
          return (
            <div
              key={e.id}
              className={`rounded-xl border bg-panel overflow-hidden transition-colors ${
                relevant ? 'border-accent/40' : 'border-edge'
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : e.id)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-slate-100">{e.role}</h3>
                    {relevant && (
                      <span className="rounded-full bg-accent/15 text-accent text-[10px] font-medium px-2 py-0.5">
                        Most relevant
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-soft mt-0.5">{e.org}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:block text-xs text-soft">{e.period}</span>
                  <ChevronDown
                    size={18}
                    className={`text-soft transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pt-1">
                    <div className="flex items-center gap-3 text-xs text-soft mb-3 sm:hidden">
                      <span>{e.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-soft mb-3">
                      <MapPin size={13} /> {e.location}
                    </div>
                    <ul className="space-y-2">
                      {e.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                          <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.tags.map((t) => (
                        <span key={t} className="rounded-md border border-edge bg-ink px-2 py-0.5 text-[11px] font-mono text-soft">
                          {t}
                        </span>
                      ))}
                    </div>

                    {e.caseStudy && (
                      <CaseStudy
                        data={e.caseStudy}
                        isOpen={caseStudyOpen === e.id}
                        onToggle={() =>
                          setCaseStudyOpen(caseStudyOpen === e.id ? null : e.id)
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

function CaseStudy({ data, isOpen, onToggle }) {
  return (
    <div className="mt-4">
      <button
        onClick={onToggle}
        className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent/20 transition"
      >
        Learn more about this experience
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-xl border border-edge bg-ink p-5 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent2 mb-2">Overview</p>
              <p className="text-sm text-slate-300 leading-relaxed">{data.overview}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent2 mb-2">Problem</p>
              <p className="text-sm text-slate-300 leading-relaxed">{data.problem}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent2 mb-2">Approach</p>
              <ul className="space-y-2">
                {data.approach.map((a, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    <span>
                      <span className="font-semibold text-slate-100">{a.title}: </span>
                      {a.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent2 mb-2">Results</p>
              <ul className="space-y-2">
                {data.results.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-300 leading-relaxed">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent2 mb-2">Skills demonstrated</p>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((s) => (
                  <span key={s} className="rounded-md border border-edge bg-panel px-2 py-0.5 text-[11px] text-soft">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
