import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Mail } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  useEffect(() => {
    document.title = 'Ankit Ranjan Das | Full Stack Developer & AI Enthusiast'
  }, [])

  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-[#0a0f1a] text-white overflow-hidden">
      {/* gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        {/* Content panel placed on the left so the right side Spline stays interactive */}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-cyan-300 ring-1 ring-white/10"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          >
            Ankit Ranjan Das
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 text-lg text-gray-300"
          >
            Full-Stack Developer | AI & ML Enthusiast
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-gray-300"
          >
            Building intelligent, scalable, and efficient web applications with modern stacks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/ankit-ranjan-das"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/ankitdas3758"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="mailto:ankitdas3758@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90"
            >
              <Mail size={18} /> Email
            </a>
          </motion.div>
        </div>

        {/* 3D Spline hero */}
        <div className="relative h-[380px] w-full md:h-[520px]">
          <Spline
            scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* overlay gradient to blend with dark bg - does not block interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
    </section>
  )
}
