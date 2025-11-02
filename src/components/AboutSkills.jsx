import { motion } from 'framer-motion'
import { Rocket, Brain, Layers } from 'lucide-react'

const skills = {
  Languages: ['Python', 'C++', 'JavaScript', 'SQL', 'HTML/CSS'],
  Frameworks: ['React', 'Node.js', 'Express.js', 'Flask', 'Supabase', 'Firebase', 'TailwindCSS'],
  'Developer Tools': ['Git', 'VS Code', 'PyCharm', 'Netlify'],
  Libraries: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'JWT'],
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function AboutSkills() {
  return (
    <section id="about" className="w-full bg-[#0b1220] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold sm:text-4xl">About Me</h2>
            <p className="mt-4 text-gray-300">
              I’m passionate about full-stack development, data-driven systems, and AI tools. I enjoy
              designing efficient solutions across domains, from web applications to machine learning
              integrations. I have hands-on experience with frameworks like React, Flask, Node.js, and
              Supabase, and I’m skilled in Python, C++, JavaScript, SQL, and TailwindCSS. I focus on
              creating seamless backend-frontend integrations and intuitive user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-medium text-cyan-300">Technical Skills</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {Object.entries(skills).map(([title, list]) => (
                <div key={title}>
                  <h4 className="text-sm uppercase tracking-wide text-gray-300">{title}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {list.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-white/10 px-3 py-1 text-xs text-gray-100 ring-1 ring-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Strength cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Layers className="h-5 w-5" />,
              title: 'Full-Stack Development',
              desc:
                'Proficient in developing and deploying end-to-end applications using modern tech stacks.',
            },
            {
              icon: <Brain className="h-5 w-5" />,
              title: 'Problem Solving & DSA',
              desc:
                'Strong grasp of algorithms and data structures, solving challenges on LeetCode and GFG.',
            },
            {
              icon: <Rocket className="h-5 w-5" />,
              title: 'AI Tools & Tech Fluency',
              desc:
                'Experience in AI-powered systems, ML model integration, and prompt engineering.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-lg backdrop-blur-sm"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-md bg-cyan-500/20 p-2 text-cyan-300 ring-1 ring-cyan-500/30">
                {c.icon}
              </div>
              <h4 className="text-lg font-medium">{c.title}</h4>
              <p className="mt-2 text-sm text-gray-300">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
