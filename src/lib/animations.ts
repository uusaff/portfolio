import { type Variants } from 'framer-motion'

export const springConfig = { type: 'spring' as const, stiffness: 100, damping: 15 }
export const springSoft = { type: 'spring' as const, stiffness: 80, damping: 20 }
export const springGentle = { type: 'spring' as const, stiffness: 60, damping: 25 }
const easeArr: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
export const easeOutSmooth = { duration: 0.5, ease: easeArr }
export const easeOutFast = { duration: 0.3, ease: easeArr }

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.02 },
  },
}

export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig,
  },
}

export const fadeSlideDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig,
  },
}

export const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springConfig,
  },
}

export const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springConfig,
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springSoft,
  },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springGentle,
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: easeOutSmooth,
  },
}

export const cardHover = {
  y: -5,
  boxShadow: '0 8px 30px hsl(var(--color-primary) / 0.12)',
  transition: springSoft,
}

export const timelineLine: Variants = {
  hidden: { scaleY: 0, transformOrigin: 'top' },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: easeArr },
  },
}

export function staggerItem(index: number, baseDelay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ...springConfig, delay: baseDelay + index * 0.08 },
    },
  }
}

export function staggerAlternate(index: number) {
  return {
    initial: { opacity: 0, x: index % 2 === 0 ? -24 : 24 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { ...springConfig, delay: index * 0.1 },
    },
  }
}
