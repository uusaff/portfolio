'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/use-media-query'

interface CustomCursorProps {
  enabled?: boolean
  className?: string
}

export function CustomCursor({ enabled = true, className }: CustomCursorProps) {
  const prefersReducedMotion = useReducedMotion()
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const posRef = useRef({ x: 0, y: 0 })
  const visibleRef = useRef(false)
  const clickingRef = useRef(false)
  const hoveringRef = useRef(false)

  useEffect(() => {
    if (!enabled || prefersReducedMotion) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const render = () => {
      const { x, y } = posRef.current
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      follower.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      rafRef.current = requestAnimationFrame(render)
    }
    rafRef.current = requestAnimationFrame(render)

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      visibleRef.current = true
    }

    const onDown = () => { clickingRef.current = true; cursor.style.transform += ' scale(0.8)'; follower.style.transform += ' scale(0.8)' }
    const onUp = () => { clickingRef.current = false; cursor.style.transform = follower.style.transform = '' }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [enabled, prefersReducedMotion])

  if (!enabled || prefersReducedMotion) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ background: 'var(--color-foreground)' }}
        aria-hidden="true"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9998] border border-primary/50 opacity-30 transition-all duration-200"
        aria-hidden="true"
      />
    </>
  )
}

export function CursorTrail({ enabled = true }: { enabled?: boolean }) {
  const prefersReducedMotion = useReducedMotion()

  if (!enabled || prefersReducedMotion) return null

  return null
}
