'use client'

import * as React from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  animate,
  useReducedMotion,
} from 'framer-motion'

export function InteractiveGradient() {
  const reduce = useReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)
  const phase = useMotionValue(0)

  React.useEffect(() => {
    if (reduce) return
    const controls = animate(phase, Math.PI * 2, {
      duration: 20,
      ease: 'linear',
      repeat: Infinity,
    })
    return () => controls.stop()
  }, [reduce, phase])

  const pointerX = useMotionValue(50)
  const pointerY = useMotionValue(50)
  const pX = useSpring(pointerX, { stiffness: 100, damping: 30, mass: 1 })
  const pY = useSpring(pointerY, { stiffness: 100, damping: 30, mass: 1 })

  React.useEffect(() => {
    if (reduce) return
    let frame: number
    let running = true
    function tick() {
      if (!running) return
      const el = ref.current
      if (!el) return
      const cx = 50 + (pX.get() - 50) * 0.2
      const cy = 50 + (pY.get() - 50) * 0.2
      const t = phase.get()
      el.style.setProperty('--gx1', `${cx.toFixed(0)}%`)
      el.style.setProperty('--gy1', `${cy.toFixed(0)}%`)
      el.style.setProperty('--gx2', `${(50 + Math.cos(t) * 25).toFixed(0)}%`)
      el.style.setProperty('--gy2', `${(50 + Math.sin(t) * 25).toFixed(0)}%`)
      el.style.setProperty('--gx3', `${(50 + Math.cos(t + 4.18879) * 25).toFixed(0)}%`)
      el.style.setProperty('--gy3', `${(50 + Math.sin(t + 4.18879) * 25).toFixed(0)}%`)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => { running = false; cancelAnimationFrame(frame) }
  }, [pX, pY, phase, reduce])

  const handleMove = (e: React.PointerEvent) => {
    if (reduce) return
    const rect = e.currentTarget.getBoundingClientRect()
    pointerX.set(((e.clientX - rect.left) / rect.width) * 100)
    pointerY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  const handleLeave = () => {
    if (reduce) return
    animate(pointerX, 50, { duration: 0.5, ease: 'easeOut' })
    animate(pointerY, 50, { duration: 0.5, ease: 'easeOut' })
  }

  if (reduce) {
    return <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />
  }

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.08]"
      aria-hidden="true"
      style={{
        background: [
          'radial-gradient(circle at var(--gx1,50%) var(--gy1,50%), hsl(var(--primary)) 0%, hsl(var(--primary)) 25%, transparent 60%)',
          'radial-gradient(circle at var(--gx2,78%) var(--gy2,50%), hsl(var(--accent)) 0%, hsl(var(--accent)) 25%, transparent 60%)',
          'radial-gradient(circle at var(--gx3,50%) var(--gy3,78%), hsl(var(--primary)) 0%, hsl(var(--primary)) 25%, transparent 60%)',
        ].join(', '),
        filter: 'blur(100px)',
        willChange: 'background',
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    />
  )
}
