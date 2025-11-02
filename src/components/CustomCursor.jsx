import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// A lightweight custom cursor with a smooth trailing ring and a small core dot.
// Hidden on touch/small screens to avoid interference.
export default function CustomCursor() {
  const [visible, setVisible] = useState(true)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 })
  const smoothY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 })

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onEnter = () => setVisible(true)
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseleave', onLeave)

    // Hide cursor on touch devices
    const mq = window.matchMedia('(pointer: coarse)')
    if (mq.matches) setVisible(false)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block" aria-hidden>
      {/* Outer ring */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: smoothX,
          top: smoothY,
          width: 36,
          height: 36,
          opacity: visible ? 0.45 : 0,
          background:
            'radial-gradient(40% 40% at 50% 50%, rgba(34,211,238,0.35) 0%, rgba(37,99,235,0.25) 100%)',
          boxShadow:
            '0 0 30px rgba(34,211,238,0.25), 0 0 60px rgba(37,99,235,0.2)'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      {/* Inner dot */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: smoothX,
          top: smoothY,
          width: 6,
          height: 6,
          opacity: visible ? 1 : 0,
          backgroundColor: '#67e8f9',
          boxShadow: '0 0 10px rgba(103,232,249,0.8)'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      />
    </div>
  )
}
