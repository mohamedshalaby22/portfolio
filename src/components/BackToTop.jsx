import { motion, useScroll, useTransform } from 'framer-motion'

export default function BackToTop() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [300, 600], [0, 1])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      data-cursor
      className="fixed bottom-8 right-8 z-40 w-10 h-10 border border-black/10 bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center justify-center"
      style={{ opacity }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 12V2M2 7l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  )
}
