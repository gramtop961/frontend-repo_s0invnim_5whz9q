import { useEffect } from 'react'
import Hero from './components/Hero'
import AboutSkills from './components/AboutSkills'
import Projects from './components/Projects'
import EduContact from './components/EduContact'
import CustomCursor from './components/CustomCursor'

function App() {
  useEffect(() => {
    // Enable smooth scrolling behavior
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <CustomCursor />
      {/* Simple top nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0f1a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-300">
            ARD
          </a>
          <nav className="hidden gap-6 text-sm text-gray-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="mailto:ankitdas3758@gmail.com"
            className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <AboutSkills />
        <Projects />
        <EduContact />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0f1a] py-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Ankit Ranjan Das • Built with React, Tailwind CSS, and Framer Motion
        </p>
      </footer>
    </div>
  )
}

export default App
