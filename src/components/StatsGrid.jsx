import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

function AnimatedCounter({ end, suffix = '', decimals = 0, label }) {
  const ref = useRef(null)
  const count = useMotionValue(0)
  const spring = useSpring(count, { stiffness: 40, damping: 25 })
  const rounded = useTransform(spring, (v) => v.toFixed(decimals))
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true
          count.set(end)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center py-8">
      <motion.p className="text-5xl md:text-7xl font-black text-black -tracking-[0.03em]">
        <motion.span>{rounded}</motion.span>
        <span className="text-gray-300">{suffix}</span>
      </motion.p>
      <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mt-3">{label}</p>
    </div>
  )
}

const stats = [
  { end: 240, suffix: 'K+', decimals: 0, label: 'Total Downloads' },
  { end: 5, suffix: '+', decimals: 0, label: 'Years Experience' },
  { end: 12, suffix: '+', decimals: 0, label: 'Production Apps' },
  { end: 99.8, suffix: '%', decimals: 1, label: 'Crash-Free Rate' },
]

export default function StatsGrid() {
  return (
    <section id="stats" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="section-number mb-2">STATISTICS</p>
          <h2 className="oversize-sm mb-16">By the Numbers</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-black/5 pt-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedCounter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
