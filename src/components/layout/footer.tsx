'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowUp, Mail, Globe, Sun, Moon, Monitor } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { author, socialLinks, navItems } from '@/data'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/shared/theme-provider'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background border-t border-border" role="contentinfo">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-accent to-primary/50" />

      <div className="container-custom py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-4">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-5" aria-label="Yousaf - Home">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg">Y</span>
              <span className="text-heading-md font-semibold">Yousaf</span>
            </Link>
            <p className="text-body-md text-muted-foreground max-w-md mb-6 leading-relaxed">
              Computer Science student at UMT, Lahore. Full-stack web developer building modern
              applications with React, Firebase, Tailwind CSS, and Framer Motion.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-xl border border-border',
                    'text-muted-foreground hover:text-primary hover:border-primary/50',
                    'transition-all duration-200'
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                  <span className="hidden sm:inline text-body-sm font-medium">{social.platform}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-heading-sm font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-body-md text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-heading-sm font-semibold mb-4">Connect</h3>
            <address className="not-italic space-y-3">
              <a
                href="mailto:uussaff@gmail.com"
                className="flex items-center gap-3 text-body-md text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>uussaff@gmail.com</span>
              </a>
              <a
                href="https://github.com/uusaff"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-md text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4 flex-shrink-0" />
                <span>GitHub Profile</span>
              </a>
              <div className="flex items-center gap-3 text-body-md text-muted-foreground">
                <FaGithub className="h-4 w-4 flex-shrink-0" />
                <span>github.com/uusaff</span>
              </div>
              <div className="flex items-center gap-3 text-body-md text-muted-foreground">
                <FaLinkedin className="h-4 w-4 flex-shrink-0" />
                <span>linkedin.com/in/uusaff</span>
              </div>
            </address>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-body-sm text-muted-foreground">
            &copy; {currentYear} Yousaf. All rights reserved.
            <br />
            Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-body-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-body-sm text-muted-foreground">&middot;</span>
            <a
              href="/terms"
              className="text-body-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-body-sm text-muted-foreground">&middot;</span>
            <a
              href="/rss.xml"
              className="text-body-sm text-muted-foreground hover:text-primary transition-colors"
            >
              RSS Feed
            </a>
          </div>

          <button
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-accent/10 transition-all duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
