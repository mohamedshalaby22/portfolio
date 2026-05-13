import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [isTouch] = useState(
    () => typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  )
  if (isTouch) return null
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [hovering, setHovering] = useState(false)

  const springX = useSpring(cursorX, { stiffness: 400, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 400, damping: 30 })

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const add = () => setHovering(true)
    const remove = () => setHovering(false)

    const refresh = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', add)
        el.removeEventListener('mouseleave', remove)
        el.addEventListener('mouseenter', add)
        el.addEventListener('mouseleave', remove)
      })
    }
    refresh()
    const observer = new MutationObserver(refresh)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: hovering ? 32 : 6,
        height: hovering ? 32 : 6,
        background: '#ffffff',
        transition: 'width 0.2s, height 0.2s',
      }}
    />
  )
}
