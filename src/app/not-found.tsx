'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, RotateCcw } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="mb-8"
          animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <span className="text-9xl font-bold gradient-text">404</span>
        </motion.div>

        <h1 className="text-display-md mb-4">Page Not Found</h1>
        <p className="text-body-lg text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved
          or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-body-lg font-medium text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-colors"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>

        </div>

        <div className="mt-12 flex items-center justify-center gap-4 text-body-sm text-muted-foreground">
          <a href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <RotateCcw className="h-4 w-4" />
            Refresh
          </a>
          <span>·</span>
          <a href="/contact" className="flex items-center gap-1 hover:text-primary transition-colors">
            Contact Support
          </a>
        </div>
      </motion.div>
    </main>
  )
}