import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const milestones = [
  {
    period: 'Apr 2026 — Present',
    company: 'Greenline',
    role: 'Senior Software Engineer',
    location: 'Doha, Qatar · Remote',
    items: [
      'Leading Syanet Warsha — specialized workshop management system',
      'Architecting scalable Flutter solutions for workshop operations',
    ],
  },
  {
    period: 'Feb 2025 — Mar 2026',
    company: 'CareComm',
    role: 'Senior Software Engineer',
    items: [
      'Led Golden Collections e-commerce app — 10K+ users, 4.7★, 99.8% crash-free',
      'Clean Architecture + MVVM, REST APIs, GraphQL, secure payment integration',
      'Bi-weekly Agile releases, cross-functional team collaboration',
    ],
  },
  {
    period: 'Nov 2024 — Feb 2025',
    company: 'Developer Freelancer',
    role: 'Flutter Developer',
    location: 'Germany · Remote',
    items: [
      'Freelance Flutter development for German-based clients',
      'Delivered cross-platform mobile solutions with Clean Architecture',
    ],
  },
  {
    period: 'Jul 2022 — Nov 2024',
    company: 'ExtraSoft',
    role: 'Flutter Developer',
    location: 'Egypt · On-site',
    items: [
      'Built 5+ production apps serving 50K+ users with 4.5+★ ratings',
      'BeClean & BeTeam dual-app ecosystem for UAE on-demand services',
      'Integrated Stripe/PayPal, Firebase, WebSockets, Google Maps',
    ],
  },
  {
    period: '2018 — 2022',
    company: 'Zagazig University',
    role: 'BSc Information Technology',
    items: [
      'Faculty of Computers and Information',
      'Foundation in software engineering and computer science',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-number mb-2">BACKGROUND</p>
          <h2 className="oversize-sm mb-16">Experience</h2>
        </ScrollReveal>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className="absolute left-0 md:left-48 top-0 bottom-0 w-[1px] bg-black/10" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.company}
              variants={itemVariants}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-[12rem_1fr] gap-8 pb-16 last:pb-0"
            >
              <div className="hidden md:block text-right pt-1">
                <span className="text-[10px] tracking-[0.15em] uppercase text-gray-300 font-semibold">
                  {m.period}
                </span>
              </div>

              <div className="relative">
                <div className="absolute -left-8 md:left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-black border-2 border-white -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2" />
                <span className="md:hidden text-[10px] tracking-[0.15em] uppercase text-gray-300 font-semibold block mb-2">
                  {m.period}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-black mb-1">
                  {m.company}
                </h3>
                <p className="text-sm text-gray-400 font-semibold tracking-wide mb-1">
                  {m.role}
                </p>
                {m.location && (
                  <p className="text-[10px] tracking-[0.15em] uppercase text-gray-300 mb-3">
                    {m.location}
                  </p>
                )}
                <ul className="space-y-1.5">
                  {m.items.map((item) => (
                    <li key={item} className="text-xs text-gray-500 leading-relaxed flex gap-2">
                      <span className="text-gray-200 mt-[3px] shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
