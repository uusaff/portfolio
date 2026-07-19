'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sun, Moon, Monitor } from 'lucide-react'
import { navItems, socialLinks } from '@/data'
import { useTheme } from '@/components/shared/theme-provider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <motion.div
      className="fixed inset-0 z-[9999] md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="absolute right-0 top-0 h-full w-full max-w-sm bg-card border-l border-border shadow-2xl flex flex-col"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-border">
          <span className="text-heading-sm font-semibold">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex-1 px-6 py-6 space-y-4 overflow-y-auto" role="navigation" aria-label="Mobile navigation">
          <motion.ul
            className="space-y-2"
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
          >
            {navItems.map((item) => (
              <motion.li key={item.href} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-body-lg font-medium transition-all duration-200',
                    'hover:bg-accent/10',
                    window.location.pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <div className="pt-6 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-body-sm font-medium text-muted-foreground">Theme</span>
              <div className="flex items-center gap-2">
                {['light', 'dark', 'system'].map((t) => (
                  <Button
                    key={t}
                    variant={theme === t ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTheme(t as 'light' | 'dark' | 'system')}
                    className="min-w-0 px-3"
                  >
                    {t === 'light' && <Sun className="h-4 w-4" />}
                    {t === 'dark' && <Moon className="h-4 w-4" />}
                    {t === 'system' && <Monitor className="h-4 w-4" />}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </motion.aside>
    </motion.div>
  )
}