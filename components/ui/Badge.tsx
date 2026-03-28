import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'popular' | 'limited' | 'sale'
  children: React.ReactNode
  className?: string
}

export default function Badge({ variant = 'popular', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        {
          'bg-coke-red text-white': variant === 'popular',
          'bg-coke-gold text-coke-black': variant === 'limited',
          'bg-green-600 text-white': variant === 'sale',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
