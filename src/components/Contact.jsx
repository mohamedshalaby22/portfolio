import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const contacts = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mo7amed-shalaby',
    href: 'https://linkedin.com/in/mo7amed-shalaby',
  },
  {
    label: 'GitHub',
    value: 'github.com/mohamedshalaby22',
    href: 'https://github.com/mohamedshalaby22',
  },
  {
    label: 'WhatsApp',
    value: '+20 102 396 0692',
    href: 'https://wa.me/201023960692',
  },
  {
    label: 'Email',
    value: 'shalabymohamed578@gmail.com',
    href: 'mailto:shalabymohamed578@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-number mb-2">CONTACT</p>
          <h2 className="oversize-sm mb-16">Get in Touch</h2>
        </ScrollReveal>

        <div className="border-t border-black/5 pt-12">
          {contacts.map((contact, i) => (
            <ScrollReveal key={contact.label} delay={i * 0.08}>
              <motion.a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="flex items-center justify-between py-5 border-b border-black/5 group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-300 font-semibold mb-1">
                    {contact.label}
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-black transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
                <span className="text-gray-200 group-hover:text-black transition-colors duration-300 text-sm">
                  ↗
                </span>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
