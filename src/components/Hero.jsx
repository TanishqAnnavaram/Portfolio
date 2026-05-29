import { Github, Linkedin, Mail, FileDown, MapPin } from 'lucide-react'
import { PROFILE } from '../data'

export default function Hero({ lens }) {
  const headline = PROFILE.headline[lens] ?? PROFILE.headline.all
  const blurb = PROFILE.blurb[lens] ?? PROFILE.blurb.all
  const resume = PROFILE.resume[lens] ?? PROFILE.resume.all

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-10 right-1/4 h-72 w-72 rounded-full bg-accent2/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="animate-fadeup">
          <p className="font-mono text-sm text-accent2 mb-3">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100">
            {PROFILE.name}
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-soft">
            {headline}
          </p>
          <p className="mt-5 max-w-xl text-slate-400 leading-relaxed">{blurb}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink hover:brightness-110 transition"
            >
              <FileDown size={16} /> Download résumé
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-edge px-4 py-2.5 text-sm font-semibold text-slate-200 hover:border-accent hover:text-accent transition"
            >
              View work
            </a>
          </div>

          <div className="mt-7 flex items-center gap-5 text-soft">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-accent transition" aria-label="GitHub"><Github size={20} /></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-accent transition" aria-label="Email"><Mail size={20} /></a>
            <span className="inline-flex items-center gap-1.5 text-xs"><MapPin size={14} /> {PROFILE.location}</span>
          </div>
        </div>

        {/* Photo placeholder — swap /public/headshot.jpg later */}
        <div className="justify-self-center md:justify-self-end animate-fadeup">
          <div className="relative h-44 w-44 md:h-60 md:w-60">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/40 to-accent2/30 blur-xl" />
            <PhotoSlot />
          </div>
        </div>
      </div>
    </section>
  )
}

function PhotoSlot() {
  // If you add /public/headshot.jpg it will be used; otherwise a styled placeholder shows.
  return (
    <div className="relative h-full w-full rounded-2xl border border-edge bg-panel overflow-hidden grid place-items-center">
      <img
        src="/headshot.jpg"
        alt="Tanishq Annavaram"
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextElementSibling.style.display = 'flex'
        }}
      />
      <div className="absolute inset-0 hidden flex-col items-center justify-center text-center px-4">
        <span className="text-5xl font-extrabold text-accent">TA</span>
        <span className="mt-2 text-xs text-soft">Add /public/headshot.jpg</span>
      </div>
    </div>
  )
}
