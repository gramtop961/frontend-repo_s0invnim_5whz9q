import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const projects = [
  {
    title: 'Edcare: Virtual Healthcare Platform',
    desc:
      'Full-stack app with patient/doctor dashboards, online pharmacy, and ML-based Breast Cancer Predictor.',
    stack: ['Flask', 'Supabase', 'Scikit-learn'],
  },
  {
    title: 'Fire TV Recommendation App',
    desc:
      'Fire TV-style movie recommender featuring collaborative filtering and personalized recommendations.',
    stack: ['React', 'Flask', 'Firebase'],
  },
  {
    title: 'Quizmaster: Interactive Quiz Platform',
    desc:
      'Real-time quiz system with dynamic scoring, detailed explanations, and responsive UI.',
    stack: ['React', 'Supabase', 'TailwindCSS'],
  },
  {
    title: 'Management System',
    desc:
      'University project automation system to manage supervisor allotments and project submissions.',
    stack: ['Node.js', 'React', 'JWT'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0f1a] py-20 text-white overflow-hidden">
      {/* Decorative Spline background */}
      <div className="pointer-events-none absolute -left-56 -top-40 hidden h-[520px] w-[720px] opacity-60 lg:block">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold sm:text-4xl">Projects</h2>
          <p className="text-sm text-gray-400">Hover to see details</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4, rotateX: 4, rotateY: -4, scale: 1.01 }}
              style={{ transformPerspective: 900 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              {/* Glow sweep unique to projects */}
              <div className="pointer-events-none absolute -inset-1 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10" />
              </div>
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/10 px-3 py-1 text-xs text-gray-100 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
