'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}

const badgeVariants = {
  default: 'bg-primary/10 text-primary border border-primary/20',
  secondary: 'bg-secondary text-secondary-foreground border border-border',
  success: 'bg-success/10 text-success border border-success/20',
  warning: 'bg-warning/10 text-warning border border-warning/20',
  destructive: 'bg-destructive/10 text-destructive border border-destructive/20',
  outline: 'border border-border bg-transparent',
}

const sizeVariants = {
  default: 'px-3 py-1 text-caption',
  sm: 'px-2.5 py-0.5 text-caption',
  lg: 'px-4 py-1.5 text-body-sm',
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-200',
        badgeVariants[variant],
        sizeVariants[size],
        className
      )}
      {...props}
    />
  )
)
Badge.displayName = 'Badge'

export { Badge }
