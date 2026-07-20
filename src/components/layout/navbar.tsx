'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { navItems, socialLinks } from '@/data'
import { ThemeToggle } from '@/components/shared/theme-provider'
import { CustomCursor } from '@/components/shared/custom-cursor'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { staggerContainer, fadeSlideDown, springConfig, springSoft } from '@/lib/animations'

export function Navbar() {
  const prefersReducedMotion = React.useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])
  const motionSafe = !prefersReducedMotion
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleLinkClick = () => setIsOpen(false)

  return (
    <>
      <CustomCursor />
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-2xl border-b border-border/40 shadow-[0_1px_2px_hsl(var(--color-foreground)/0.02)]'
        )}
        role="banner"
      >
        <nav
          className="container-custom"
          aria-label="Main navigation"
        >
          <div className="flex h-16 md:h-20 items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="Yousaf - Home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">Y</span>
              <span className="hidden sm:block text-heading-sm font-semibold">Yousaf</span>
            </Link>

            <motion.div
              className="hidden md:flex md:items-center md:gap-1"
              variants={staggerContainer}
              initial="hidden"
              animate={motionSafe ? 'visible' : 'hidden'}
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={fadeSlideDown}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 rounded-xl text-body-md font-medium transition-all duration-200',
                      'hover:bg-accent/10 hover:text-primary',
                      pathname === item.href
                        ? 'bg-primary/10 text-primary shadow-sm'
                        : ''
                    )}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={pathname === item.href ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={springSoft}
                      style={{ transformOrigin: 'left' }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="hidden md:flex md:items-center md:gap-3">
              <ThemeToggle />
              <Button
                variant="default"
                size="lg"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            <button
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                id="mobile-menu"
                className="md:hidden overflow-hidden border-t border-border/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                role="navigation"
                aria-label="Mobile navigation"
              >
                <motion.div
                  className="px-4 py-6 space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={motionSafe ? 'visible' : 'hidden'}
                >
                  {navItems.map((item) => (
                    <motion.div key={item.href} variants={fadeSlideDown}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-4 py-3 rounded-xl text-body-lg font-medium transition-all duration-200',
                          'hover:bg-accent/10 hover:text-primary',
                          pathname === item.href ? 'bg-primary/10 text-primary' : ''
                        )}
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={fadeSlideDown} className="pt-4 border-t border-border flex items-center gap-3">
                    <ThemeToggle />
                    <Button variant="default" size="lg" className="flex-1" asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </motion.div>
                  <motion.div variants={fadeSlideDown} className="pt-4 flex flex-wrap gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'flex h-10 w-10 items-center justify-center rounded-xl border border-border',
                          'text-muted-foreground hover:text-primary hover:border-primary/50',
                          'transition-all duration-200'
                        )}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  )
}
