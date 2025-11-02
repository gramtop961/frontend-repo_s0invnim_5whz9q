import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const backendBase = import.meta.env.VITE_BACKEND_URL || ''

export default function EduContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', msg: '' })
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', msg: 'Please fill in all fields.' })
      return
    }
    try {
      setLoading(true)
      const res = await fetch(`${backendBase}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail || 'Failed to send message')
      setStatus({ type: 'success', msg: 'Message sent successfully! I will get back to you soon.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: err.message || 'Something went wrong.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative w-full bg-[#0b1220] py-20 text-white overflow-hidden">
      {/* Subtle decorative 3D in the background */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 hidden h-[420px] w-[520px] opacity-60 md:block">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[#0b1220] via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-3xl font-semibold">Education</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-cyan-300">2022–2026</p>
                <p className="mt-1 font-medium">Vellore Institute of Technology, Bhopal</p>
                <p className="text-gray-300">B.Tech in Computer Science</p>
              </div>
              <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-medium">Loyola School, Jamshedpur (ICSE Board)</p>
                <p className="text-gray-300">Class X & XII</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="mt-2 text-gray-300">
              I’m open to collaborations, internships, and interesting problems.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-200">
              <a href="mailto:ankitdas3758@gmail.com" className="inline-flex items-center gap-2">
                <Mail size={16} /> ankitdas3758@gmail.com
              </a>
              <a href="tel:+919572537578" className="inline-flex items-center gap-2">
                <Phone size={16} /> +91 9572537578
              </a>
            </div>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm text-gray-300">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded-lg border border-white/10 bg-[#0a0f1a] px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-lg border border-white/10 bg-[#0a0f1a] px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-[#0a0f1a] px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="How can I help?"
                />
              </div>
              {status.msg && (
                <div
                  className={
                    'rounded-md px-3 py-2 text-sm ' +
                    (status.type === 'success'
                      ? 'bg-emerald-600/20 text-emerald-200 ring-1 ring-emerald-600/30'
                      : 'bg-red-600/20 text-red-200 ring-1 ring-red-600/30')
                  }
                >
                  {status.msg}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
