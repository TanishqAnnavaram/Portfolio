import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { EDUCATION, PROFILE } from '../data'

export default function About({ lens }) {
  const blurb = PROFILE.blurb[lens] ?? PROFILE.blurb.all
  return (
    <Section id="about" eyebrow="01 / about" title="About me">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 text-slate-400 leading-relaxed">
          <p>{blurb}</p>
          <p>
            I like work that sits at the seam between systems and data — building
            services that stay reliable under failure, and ML pipelines that are
            reproducible and measurable. Whether the role leans software or data, the
            same instincts carry over: clear interfaces, honest metrics, and code that
            other people can pick up.
          </p>
          <p>
            Use the <span className="text-accent font-medium">role toggle</span> in the
            nav to see this site framed for either a Software Engineering or a Data/ML
            audience — same work, re-ranked for what you care about.
          </p>
        </div>

        <div className="rounded-xl border border-edge bg-panel p-5">
          <div className="flex items-center gap-2 text-slate-100 font-semibold">
            <GraduationCap size={18} className="text-accent" /> Education
          </div>
          <p className="mt-3 text-sm text-slate-200 font-medium">{EDUCATION.school}</p>
          <p className="text-sm text-soft">{EDUCATION.degree}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-soft">
            <span>Grad {EDUCATION.grad}</span>
            <span className="h-1 w-1 rounded-full bg-edge" />
            <span>GPA {EDUCATION.gpa}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {EDUCATION.coursework.map((c) => (
              <span key={c} className="rounded-md bg-ink border border-edge px-2 py-1 text-[11px] text-soft">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
