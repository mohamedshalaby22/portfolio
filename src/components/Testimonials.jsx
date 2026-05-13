import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    quote: 'An exceptional Flutter developer with deep understanding of Clean Architecture. Mohamed consistently delivers high-quality, maintainable code.',
    author: 'Senior Engineering Manager',
    role: 'Carecomm',
  },
  {
    quote: 'Mohamed has a rare ability to translate complex requirements into elegant, scalable mobile solutions. His work on the BeClean ecosystem was outstanding.',
    author: 'Product Director',
    role: 'ExtraSoft',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-number mb-2">TESTIMONIALS</p>
          <h2 className="oversize-sm mb-4">What People Say</h2>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mb-16">
            Feedback from colleagues and leaders across the teams I've worked with.
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                className="border-t border-black/10 pt-10"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-6xl font-black text-black/5 leading-none block mb-4 select-none">
                  &ldquo;
                </span>
                <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                  {t.quote}
                </p>
                <div className="mt-6">
                  <p className="text-xs font-bold text-black tracking-wide">
                    {t.author}
                  </p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-gray-300">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-[10px] tracking-[0.15em] uppercase text-gray-200 mt-12 pt-6 border-t border-black/5">
            References available upon request
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
