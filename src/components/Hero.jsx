import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="editorial-grid items-end">
          <div>
            <ScrollReveal>
              <motion.span
                className="section-number block mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                SENIOR SOFTWARE ENGINEER
              </motion.span>
            </ScrollReveal>

            <div className="overflow-hidden mb-4">
              <motion.h1
                className="oversize text-black"
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              >
                Mohamed
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                className="oversize text-black"
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
              >
                Shalaby
              </motion.h1>
            </div>

            <ScrollReveal delay={0.4}>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md tracking-wide">
                Senior Software Engineer with 4+ years of experience building
                high-performance cross-platform applications. Currently @ Greenline,
                Doha, Qatar. Specializing in Clean Architecture, BLoC, and
                production-grade mobile solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex gap-4 mt-8">
                <a
                  href="#work"
                  data-cursor
                  className="text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 bg-black text-white hover:bg-gray-900 transition-all duration-300"
                >
                  View Projects
                </a>
                <a
                  href={`${base}images/Mohamed%20Shalaby%20CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} className="hidden md:block">
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <img
                  src={`${base}images/my-image.jpeg`}
                  alt="Mohamed Shalaby"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white border border-black/10 px-6 py-4">
                <p className="text-3xl font-black">4+</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400">Years Exp.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-16 pt-8 border-t border-black/5 flex flex-wrap gap-x-16 gap-y-4">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1">Location</p>
              <p className="text-sm font-semibold">Egypt / Qatar</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1">Current</p>
              <p className="text-sm font-semibold">Greenline, Doha — Syanet Warsha</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1">Total Downloads</p>
              <p className="text-sm font-semibold">240K+ Across All Apps</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1">Apps Delivered</p>
              <p className="text-sm font-semibold">12+ Production Apps</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
