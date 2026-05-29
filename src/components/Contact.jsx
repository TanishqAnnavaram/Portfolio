import { Github, Linkedin, Mail, FileDown } from 'lucide-react'
import { PROFILE } from '../data'

export default function Contact({ lens }) {
  const resume = PROFILE.resume[lens] ?? PROFILE.resume.all
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28 scroll-mt-20">
      <div className="rounded-2xl border border-edge bg-panel p-8 md:p-12 text-center">
        <p className="font-mono text-sm text-accent2 mb-3">05 / contact</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100">Let's talk</h2>
        <p className="mt-4 max-w-md mx-auto text-slate-400">
          I'm open to software engineering and data/ML roles and internships. The fastest
          way to reach me is email.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink hover:brightness-110 transition"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-edge px-4 py-2.5 text-sm font-semibold text-slate-200 hover:border-accent hover:text-accent transition"
          >
            <FileDown size={16} /> Résumé
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-soft">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-accent transition" aria-label="GitHub"><Github size={20} /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-accent transition" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>

      <footer className="mt-10 text-center text-xs text-soft">
        Built by {PROFILE.name} · React + Tailwind · {new Date().getFullYear()}
      </footer>
    </section>
  )
}
