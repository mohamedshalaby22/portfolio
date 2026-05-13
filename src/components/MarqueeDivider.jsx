import { motion } from 'framer-motion'

const words = 'Flutter · Dart · Clean Architecture · BLoC · REST APIs · Firebase ·  '

export default function MarqueeDivider() {
  return (
    <div className="py-6 border-t border-b border-black/5 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-[10px] tracking-[0.2em] uppercase text-gray-200 font-semibold mx-4"
          >
            {words}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
