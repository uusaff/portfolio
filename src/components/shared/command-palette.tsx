'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Search, Command, X, ChevronRight, ExternalLink, FileText, Zap } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useTheme } from '@/components/shared/theme-provider'

interface CommandItem {
  id: string
  title: string
  description: string
  shortcut?: string
  icon?: React.ReactNode
  action: () => void
  category: string
  keywords: string[]
}

const commands: CommandItem[] = [
  {
    id: 'home',
    title: 'Go to Home',
    description: 'Navigate to the home page',
    shortcut: 'H',
    icon: <Zap className="h-4 w-4" />,
    action: () => window.location.href = '/',
    category: 'Navigation',
    keywords: ['home', 'hero', 'landing'],
  },
  {
    id: 'about',
    title: 'About Me',
    description: 'View my bio, experience, and skills',
    shortcut: 'A',
    icon: <FileText className="h-4 w-4" />,
    action: () => window.location.href = '/about',
    category: 'Navigation',
    keywords: ['about', 'bio', 'profile'],
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'Browse my featured projects and case studies',
    shortcut: 'P',
    icon: <Zap className="h-4 w-4" />,
    action: () => window.location.href = '/projects',
    category: 'Navigation',
    keywords: ['projects', 'portfolio', 'work'],
  },
  {
    id: 'experience',
    title: 'Experience & Skills',
    description: 'View my work history and technical skills',
    shortcut: 'E',
    icon: <FileText className="h-4 w-4" />,
    action: () => window.location.href = '/experience',
    category: 'Navigation',
    keywords: ['experience', 'skills', 'career', 'timeline'],
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch with me',
    shortcut: 'C',
    icon: <ExternalLink className="h-4 w-4" />,
    action: () => window.location.href = '/contact',
    category: 'Navigation',
    keywords: ['contact', 'hire', 'email', 'reach'],
  },
  {
    id: 'github',
    title: 'GitHub Profile',
    description: 'View my GitHub repositories and contributions',
    shortcut: 'G',
    icon: <FaGithub className="h-4 w-4" />,
    action: () => window.open('https://github.com/uusaff', '_blank'),
    category: 'External',
    keywords: ['github', 'code', 'repos', 'open source'],
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn',
    shortcut: 'L',
    icon: <ExternalLink className="h-4 w-4" />,
    action: () => window.open('https://linkedin.com/in/uusaff', '_blank'),
    category: 'External',
    keywords: ['linkedin', 'network', 'professional'],
  },
  {
    id: 'twitter',
    title: 'Twitter',
    description: 'Follow me on Twitter for tech updates',
    shortcut: 'T',
    icon: <ExternalLink className="h-4 w-4" />,
    action: () => window.open('https://twitter.com/uusaff', '_blank'),
    category: 'External',
    keywords: ['twitter', 'x', 'social'],
  },
  {
    id: 'theme-toggle',
    title: 'Toggle Theme',
    description: 'Switch between light and dark mode',
    shortcut: '⌘⇧L',
    icon: <Zap className="h-4 w-4" />,
    action: () => {
      const html = document.documentElement
      const current = html.classList.contains('dark') ? 'light' : 'dark'
      html.classList.remove('light', 'dark')
      html.classList.add(current)
      localStorage.setItem('theme', current)
    },
    category: 'Actions',
    keywords: ['theme', 'dark', 'light', 'mode'],
  },
  {
    id: 'scroll-top',
    title: 'Scroll to Top',
    description: 'Quickly scroll back to the top of the page',
    shortcut: '⌘↑',
    icon: <Zap className="h-4 w-4" />,
    action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    category: 'Actions',
    keywords: ['scroll', 'top', 'up'],
  },
  {
    id: 'download-resume',
    title: 'Download Resume',
    description: 'Download my latest resume as PDF',
    shortcut: '⌘R',
    icon: <FileText className="h-4 w-4" />,
    action: () => window.open('/resume.pdf', '_blank'),
    category: 'Actions',
    keywords: ['resume', 'cv', 'download', 'pdf'],
  },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  let setTheme: (t: 'light' | 'dark' | 'system') => void = (t) => localStorage.setItem('theme', t)
  try {
    setTheme = useTheme().setTheme
  } catch {}

  const filteredCommands = commands.map(cmd => {
    if (cmd.id === 'theme-toggle') {
      return { ...cmd, action: () => setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark') }
    }
    return cmd
  })
    .filter((cmd) => {
      if (!query) return true
      const search = query.toLowerCase()
      return (
        cmd.title.toLowerCase().includes(search) ||
        cmd.description.toLowerCase().includes(search) ||
        cmd.category.toLowerCase().includes(search) ||
        cmd.keywords.some((k) => k.toLowerCase().includes(search))
      )
    })
    .sort((a, b) => {
      const aTitle = a.title.toLowerCase()
      const bTitle = b.title.toLowerCase()
      const search = query.toLowerCase()
      const aStarts = aTitle.startsWith(search)
      const bStarts = bTitle.startsWith(search)
      if (aStarts && !bStarts) return -1
      if (!aStarts && bStarts) return 1
      return 0
    })

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return

    switch (e.key) {
      case 'Escape':
        setIsOpen(false)
        setQuery('')
        setSelectedIndex(0)
        break
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex((prev) => Math.min(prev + 1, filteredCommands.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex((prev) => Math.max(prev - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action()
          setIsOpen(false)
          setQuery('')
          setSelectedIndex(0)
        }
        break
    }
  }, [isOpen, filteredCommands, selectedIndex])

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
      const metaKey = isMac ? e.metaKey : e.ctrlKey

      if (metaKey && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
        setSelectedIndex(0)
      }
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (itemsRef.current && filteredCommands[selectedIndex]) {
      const item = itemsRef.current.children[selectedIndex] as HTMLElement
      if (item) {
        item.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [selectedIndex, filteredCommands])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[999] bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <motion.div
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[1000]"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="glass-card rounded-2xl shadow-2xl overflow-hidden border border-border/50">
              <div className="flex items-center gap-3 p-4 border-b border-border/50">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0) }}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a command or search..."
                    className="w-full bg-transparent pl-10 pr-4 py-2.5 text-body-lg placeholder:text-muted-foreground focus:outline-none"
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <kbd className="ml-2 px-2 py-1 text-body-xs text-muted-foreground bg-muted rounded">⌘K</kbd>
                </div>
                <button
                  onClick={() => { setIsOpen(false); setQuery(''); setSelectedIndex(0) }}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-xl transition-colors"
                  aria-label="Close command palette"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div
                ref={itemsRef}
                className="max-h-96 overflow-y-auto p-2"
                role="listbox"
                aria-label="Available commands"
              >
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center text-muted-foreground">
                    <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No commands found for &ldquo;{query}&rdquo;</p>
                  </div>
                ) : (
                  <ul className="space-y-1" role="presentation">
                    {Object.entries(
                      filteredCommands.reduce((acc, cmd) => {
                        const cat = cmd.category
                        if (!acc[cat]) acc[cat] = []
                        acc[cat].push(cmd)
                        return acc
                      }, {} as Record<string, CommandItem[]>)
                    ).map(([category, cmds]) => (
                      <li key={category} className="px-4 py-2 text-body-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {category}
                      </li>
                    ))}
                    {filteredCommands.map((cmd, index) => (
                      <motion.li
                        key={cmd.id}
                        role="option"
                        aria-selected={index === selectedIndex}
                        className={cn(
                          'flex items-center justify-between gap-4 px-4 py-3 rounded-xl cursor-pointer transition-colors',
                          index === selectedIndex
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground hover:bg-accent/10'
                        )}
                        onClick={() => {
                          cmd.action()
                          setIsOpen(false)
                          setQuery('')
                          setSelectedIndex(0)
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.02 }}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {cmd.icon && (
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                              {cmd.icon}
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="text-body-md font-medium truncate">{cmd.title}</p>
                            <p className="text-body-sm text-muted-foreground truncate">{cmd.description}</p>
                          </div>
                        </div>
                        {cmd.shortcut && (
                          <kbd className="px-2 py-1 text-body-xs font-mono text-muted-foreground bg-muted rounded flex-shrink-0">
                            {cmd.shortcut}
                          </kbd>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="px-4 py-3 border-t border-border/50 text-center text-body-xs text-muted-foreground">
                <kbd className="px-2 py-1 text-body-xs font-mono text-muted-foreground bg-muted rounded mr-2">⌘K</kbd>
                Open palette &nbsp;|&nbsp;
                <kbd className="px-2 py-1 text-body-xs font-mono text-muted-foreground bg-muted rounded mr-2">Esc</kbd>
                Close
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}