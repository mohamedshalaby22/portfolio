import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="py-10 px-8 border-t border-black/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] tracking-[0.15em] uppercase text-gray-300">
          © {new Date().getFullYear()} Mohamed Shalaby
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://linkedin.com/in/mo7amed-shalaby"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.15em] uppercase text-gray-300 hover:text-black transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mohamedshalaby22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.15em] uppercase text-gray-300 hover:text-black transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:shalabymohamed578@gmail.com"
            className="text-[10px] tracking-[0.15em] uppercase text-gray-300 hover:text-black transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
