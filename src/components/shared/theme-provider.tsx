'use client'

import * as React from 'react'
import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getStoredTheme(storageKey: string, defaultTheme: Theme): Theme {
  if (typeof window === 'undefined') return defaultTheme
  try {
    const stored = localStorage.getItem(storageKey) as Theme | null
    return stored ?? defaultTheme
  } catch {
    return defaultTheme
  }
}

function resolveTheme(theme: Theme): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light' // Safeguard for SSR
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return theme
}

function applyThemeClass(resolved: 'light' | 'dark') {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (resolved === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  // Run once on mount to get client-side state
  useEffect(() => {
    const stored = getStoredTheme(storageKey, defaultTheme)
    setThemeState(stored)
    const resolved = resolveTheme(stored)
    setResolvedTheme(resolved)
    applyThemeClass(resolved)
  }, [storageKey, defaultTheme])

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    const resolved = resolveTheme(newTheme)
    setResolvedTheme(resolved)
    applyThemeClass(resolved)
    try {
      localStorage.setItem(storageKey, newTheme)
    } catch {}
  }, [storageKey])

  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const resolved = mediaQuery.matches ? 'dark' : 'light'
      setResolvedTheme(resolved)
      applyThemeClass(resolved)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted on the client before rendering dynamic UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a static skeleton/fallback to prevent hydration mismatch
    return (
      <div className="relative inline-flex items-center gap-1 p-1 bg-secondary rounded-xl opacity-50">
        <div className="h-8 w-[104px]" /> 
      </div>
    )
  }

  return (
    <div className="relative inline-flex items-center gap-1 p-1 bg-secondary rounded-xl">
      <div
        className="absolute inset-y-1 left-1 w-8 rounded-lg bg-primary/20 transition-all duration-300 ease-out"
        style={{
          transform: theme === 'light' ? 'translateX(0)' : theme === 'dark' ? 'translateX(36px)' : 'translateX(72px)',
        }}
        aria-hidden="true"
      />
      {(['light', 'dark', 'system'] as Theme[]).map((t) => (
        <Button
          key={t}
          variant="ghost"
          size="icon-sm"
          onClick={() => setTheme(t)}
          className={cn(
            'relative z-10 transition-all duration-200 h-8 w-8',
            theme === t ? 'text-primary' : 'text-muted-foreground'
          )}
          aria-pressed={theme === t}
          aria-label={`Switch to ${t} theme`}
        >
          {t === 'light' && <Sun className="h-4 w-4" aria-hidden="true" />}
          {t === 'dark' && <Moon className="h-4 w-4" aria-hidden="true" />}
          {t === 'system' && <Monitor className="h-4 w-4" aria-hidden="true" />}
        </Button>
      ))}
    </div>
  )
}