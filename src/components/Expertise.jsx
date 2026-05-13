import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

function SkillBar({ name, level }) {
  const ref = useRef(null)
  const width = useMotionValue(0)
  const spring = useSpring(width, { stiffness: 35, damping: 20 })
  const barWidth = useTransform(spring, (v) => `${v}%`)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true
          width.set(level)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const display = useTransform(spring, (v) => `${Math.round(v)}%`)

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs tracking-[0.15em] uppercase font-semibold text-gray-500">
          {name}
        </span>
        <motion.span className="text-xs font-mono font-semibold text-gray-300">
          {display}
        </motion.span>
      </div>
      <div className="h-[2px] bg-black/5">
        <motion.div
          className="h-full bg-black"
          style={{ width: barWidth }}
        />
      </div>
    </div>
  )
}

const skills = [
  { name: 'Flutter', level: 95 },
  { name: 'Dart', level: 95 },
  { name: 'Clean Architecture', level: 95 },
  { name: 'BLoC / Cubit', level: 95 },
  { name: 'REST APIs', level: 95 },
  { name: 'Provider / GetX / Riverpod', level: 90 },
  { name: 'Firebase Services', level: 90 },
  { name: 'GraphQL', level: 85 },
  { name: 'Payment Integration', level: 85 },
  { name: 'Maps & Location', level: 85 },
  { name: 'CI/CD & Git', level: 85 },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-number mb-2">EXPERTISE</p>
          <h2 className="oversize-sm mb-16">Technical Skills</h2>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 gap-x-16 gap-y-8 border-t border-black/5 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <ScrollReveal delay={i * 0.05}>
                <SkillBar {...skill} />
              </ScrollReveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
