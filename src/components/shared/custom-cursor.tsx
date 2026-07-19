'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'

interface CustomCursorProps {
  enabled?: boolean
  className?: string
}

export function CustomCursor({ enabled = true, className }: CustomCursorProps) {
  const prefersReducedMotion = useReducedMotion()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  const updatePosition = useCallback((x: number, y: number) => {
    setPosition({ x, y })
    if (!isVisible) setIsVisible(true)
  }, [isVisible])

  useEffect(() => {
    if (!enabled || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [enabled, prefersReducedMotion, updatePosition])

  useEffect(() => {
    if (!enabled || prefersReducedMotion) return

    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement
      const isInteractive = target.matches(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer, [data-cursor-hover]'
      )
      setIsHovering(isInteractive)
    }

    document.addEventListener('mouseover', handleHover)
    document.addEventListener('mouseout', () => setIsHovering(false))

    return () => {
      document.removeEventListener('mouseover', handleHover)
      document.removeEventListener('mouseout', () => setIsHovering(false))
    }
  }, [enabled, prefersReducedMotion])

  if (!enabled || prefersReducedMotion) return null

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <>
          <motion.div
            ref={cursorRef}
            className={cn('fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] mix-blend-difference', className)}
            style={{
              background: 'var(--color-foreground)',
              transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
            }}
            animate={{
              scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
              borderRadius: isHovering ? '50%' : '50%',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
          <motion.div
            ref={followerRef}
            className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9998] border border-primary/50"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
            }}
            animate={{
              scale: isClicking ? 0.8 : isHovering ? 2 : 1,
              opacity: isHovering ? 0.6 : 0.3,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
        </>
      )}
    </AnimatePresence>
  )
}

export function CursorTrail({ length = 10, enabled = true }: { length?: number; enabled?: boolean }) {
  const prefersReducedMotion = useReducedMotion()
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>(
    Array.from({ length }, () => ({ x: 0, y: 0 }))
  )

  useEffect(() => {
    if (!enabled || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setPositions(prev => [
        { x: e.clientX, y: e.clientY },
        ...prev.slice(0, -1),
      ])
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [enabled, prefersReducedMotion])

  if (!enabled || prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997]" aria-hidden="true">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: `hsl(var(--color-primary) / ${0.15 * (1 - i / length)})`,
            transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
          }}
          animate={{ scale: 1 - i / length, opacity: 1 - i / length }}
          transition={{ duration: 0.05 * (i + 1) }}
        />
      ))}
    </div>
  )
}