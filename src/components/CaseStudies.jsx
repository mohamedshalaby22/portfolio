import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const studies = [
  {
    number: '01',
    title: 'Golden Collections',
    subtitle: 'Premium E-Commerce Platform',
    role: 'Lead Developer — Architecture & Full Implementation',
    tech: ['Flutter', 'BLoC', 'Clean Architecture', 'Stripe', 'GraphQL', 'Firebase'],
    challenge: 'Build a production-grade e-commerce app handling 500+ products, complex checkout flow, and secure payments for 10,000+ active users.',
    solution: 'Architected Clean Architecture with MVVM pattern. Integrated REST APIs and GraphQL reducing load times by 40%. Implemented PCI-DSS compliant payment gateways with JWT authentication.',
    metrics: ['10,000+ Active Users', '4.7★ Rating', '99.8% Crash-Free', '40% Faster Load Times'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/golden-collections/id6443965225' },
      { label: 'Google Play', href: 'https://play.google.com/store/search?q=goldencollection&c=apps' },
    ],
  },
  {
    number: '02',
    title: 'BeClean Ecosystem',
    subtitle: 'Multi-App On-Demand Services (UAE)',
    role: 'Flutter Developer — Full App Suite',
    tech: ['Flutter', 'WebSockets', 'Google Maps', 'Firebase', 'Stripe'],
    challenge: 'Develop three integrated apps (customer, provider, management) for a car wash on-demand service operating across UAE.',
    solution: 'Built BeClean (customer booking), BeTeam (service provider), and BeOperations (management). Real-time tracking via GPS and WebSockets, secure payments, and Firebase backend.',
    metrics: ['5,000+ Active Users', '4.6★ Rating', '3 Integrated Apps', 'Real-Time GPS Tracking'],
    links: [
      { label: 'BeClean iOS', href: 'https://apps.apple.com/us/app/beclean-car-wash-tinting/id1658763780' },
      { label: 'BeClean Android', href: 'https://play.google.com/store/apps/details?id=com.becleanapp.client' },
      { label: 'BeTeam iOS', href: 'https://apps.apple.com/us/app/beteam-service-provider/id1658760376' },
      { label: 'BeTeam Android', href: 'https://play.google.com/store/apps/details?id=com.becleanapp.team' },
      { label: 'BeOperations iOS', href: 'https://apps.apple.com/us/app/beoperations-management-app/id1673785008' },
      { label: 'BeOperations Android', href: 'https://play.google.com/store/apps/details?id=com.becleanapp.provider' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="section-number mb-2">CASE STUDIES</p>
          <h2 className="oversize-sm mb-4">Deep Dive</h2>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xl mb-16">
            Architecture decisions, technical challenges, and measurable outcomes
            from production applications serving thousands of users.
          </p>
        </ScrollReveal>

        <div className="space-y-20">
          {studies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.15}>
              <motion.div
                className="border-t border-black/10 pt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-200 font-semibold">
                  {study.number}
                </span>

                <div className="grid md:grid-cols-5 gap-8 mt-4">
                  <div className="md:col-span-3">
                    <h3 className="text-3xl md:text-5xl font-black text-black leading-[0.95] mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-semibold tracking-wide mb-6">
                      {study.subtitle}
                    </p>

                    <p className="text-[10px] tracking-[0.15em] uppercase text-gray-300 font-semibold mb-1">
                      Role
                    </p>
                    <p className="text-xs text-gray-500 mb-5">{study.role}</p>

                    <p className="text-[10px] tracking-[0.15em] uppercase text-gray-300 font-semibold mb-1">
                      Challenge
                    </p>
                    <p className="text-xs text-gray-500 mb-5 leading-relaxed">{study.challenge}</p>

                    <p className="text-[10px] tracking-[0.15em] uppercase text-gray-300 font-semibold mb-1">
                      Solution
                    </p>
                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">{study.solution}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 bg-black/5 text-gray-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {study.links && (
                      <div className="flex flex-wrap gap-2">
                        {study.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor
                            className="text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-2 border border-black/10 text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2 md:border-l border-black/5 md:pl-8">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-gray-300 font-semibold mb-4">
                      Key Metrics
                    </p>
                    <div className="space-y-4">
                      {study.metrics.map((metric) => (
                        <div key={metric} className="border-b border-black/5 pb-3">
                          <p className="text-sm font-black text-black">{metric.split(' ')[0]}</p>
                          <p className="text-[10px] text-gray-400 tracking-wide">
                            {metric.split(' ').slice(1).join(' ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
