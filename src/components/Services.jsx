import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    title: 'Mobile App Development',
    description: 'End-to-end Flutter development for iOS and Android. From concept to App Store and Google Play deployment. Production-grade, scalable, and performant.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3" />
      </svg>
    ),
  },
  {
    title: 'Clean Architecture Consulting',
    description: 'Design scalable, maintainable architectures using Clean Architecture, MVVM, BLoC/Cubit. Modular codebases built for growth.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 3L3 8l9 5 9-5-9-5z" />
        <path d="M3 13l9 5 9-5" />
        <path d="M3 18l9 5 9-5" />
      </svg>
    ),
  },
  {
    title: 'Code Review & Mentoring',
    description: 'Establish best practices, conduct thorough code reviews, mentor junior developers, and enforce testing standards (unit, widget, integration).',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'CI/CD & Deployment',
    description: 'Automated build pipelines, Fastlane setup, App Store Connect and Google Play Console management, crash-free deployment workflows.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-number mb-2">SERVICES</p>
          <h2 className="oversize-sm mb-4">What I Offer</h2>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mb-16">
            End-to-end mobile expertise — from architecture to deployment.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              data-cursor
              className="border border-black/5 p-8 hover:bg-black/5 transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-black/10 flex items-center justify-center mb-4 text-gray-400">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold text-black mb-2 tracking-wide">
                {service.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
