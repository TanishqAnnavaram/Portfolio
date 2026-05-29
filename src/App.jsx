import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [lens, setLens] = useState('all')

  return (
    <div className="min-h-screen bg-ink">
      <Nav lens={lens} setLens={setLens} />
      <main>
        <Hero lens={lens} />
        <About lens={lens} />
        <Skills lens={lens} />
        <Experience lens={lens} />
        <Projects lens={lens} />
        <Contact lens={lens} />
      </main>
    </div>
  )
}
