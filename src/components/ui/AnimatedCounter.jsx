import { useEffect, useRef, useState } from 'react'
import { useInView } from '../../hooks/useInView'

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000, className = '' }) {
  const [count, setCount] = useState(() => 10 + Math.floor(Math.random() * 40))
  const [ref, isVisible] = useInView()
  const phaseRef = useRef(0)

  // Initial count-up animation
  useEffect(() => {
    if (!isVisible || phaseRef.current !== 0) return
    phaseRef.current = 1

    const startTime = performance.now()
    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isVisible, end, duration])

  // Continuous slow climb
  useEffect(() => {
    if (!isVisible || phaseRef.current !== 1) return

    const interval = setInterval(() => {
      setCount((c) => c + 1)
    }, 2000 + Math.random() * 1500)

    return () => clearInterval(interval)
  }, [isVisible])

  // Reset every 10 minutes to a small random number
  useEffect(() => {
    const resetInterval = setInterval(() => {
      setCount(10 + Math.floor(Math.random() * 40))
    }, 10 * 60 * 1000)

    return () => clearInterval(resetInterval)
  }, [end])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
