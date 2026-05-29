import { useMemo, useState } from 'react'
import Section from './Section'
import { SKILL_GROUPS, EXPERIENCE, PROJECTS } from '../data'

// Build a lookup: skill -> list of {type,title} items that use it.
function buildUsage() {
  const map = {}
  const add = (skill, item) => {
    const key = skill.toLowerCase()
    if (!map[key]) map[key] = []
    map[key].push(item)
  }
  EXPERIENCE.forEach((e) =>
    e.tags.forEach((t) => add(t, { type: 'Experience', title: `${e.role} · ${e.org}` }))
  )
  PROJECTS.forEach((p) =>
    p.stack.forEach((s) => add(s, { type: 'Project', title: p.title }))
  )
  return map
}

export default function Skills() {
  const usage = useMemo(buildUsage, [])
  const [active, setActive] = useState(null)

  const matches = active ? usage[active.toLowerCase()] ?? [] : []

  return (
    <Section id="skills" eyebrow="02 / skills" title="Technical skills">
      <p className="-mt-6 mb-8 text-sm text-soft">
        Tap any skill to see where I've used it.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((g) => (
          <div key={g.category} className="rounded-xl border border-edge bg-panel p-5">
            <h3 className="text-sm font-semibold text-slate-100 mb-3">{g.category}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => {
                const isActive = active === s
                return (
                  <button
                    key={s}
                    onClick={() => setActive(isActive ? null : s)}
                    className={`rounded-md border px-2.5 py-1 text-xs font-mono transition ${
                      isActive
                        ? 'border-accent bg-accent/15 text-accent'
                        : 'border-edge bg-ink text-soft hover:border-accent/60 hover:text-slate-100'
                    }`}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="mt-6 rounded-xl border border-accent/40 bg-accent/5 p-5 animate-fadeup">
          <p className="text-sm text-slate-100 font-semibold mb-2">
            Where I've used <span className="text-accent font-mono">{active}</span>
          </p>
          {matches.length ? (
            <ul className="space-y-1.5">
              {matches.map((m, i) => (
                <li key={i} className="text-sm text-soft">
                  <span className="font-mono text-xs text-accent2 mr-2">{m.type}</span>
                  {m.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-soft">
              Used across coursework and smaller work not listed here.
            </p>
          )}
        </div>
      )}
    </Section>
  )
}
