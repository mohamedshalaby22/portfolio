import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL

const links = [
  { href: '#timeline', label: 'Experience' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#services', label: 'Services' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-black/5' : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
            <a
              href="#hero"
              className="text-xs font-semibold tracking-[0.25em] uppercase text-black"
            >
              Mohamed Shalaby
            </a>

            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-cursor
                  className="text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${base}images/Mohamed%20Shalaby%20CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8"
              data-cursor
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4 4l10 10M14 4L4 14" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 4h12M3 9h12M3 14h12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                data-cursor
                className="text-2xl font-black tracking-[-0.02em] text-black hover:text-gray-300 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${base}images/Mohamed%20Shalaby%20CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              data-cursor
              className="mt-4 text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
