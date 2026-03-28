'use client'

import { cn } from '@/lib/utils'
import { forwardRef, type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-body font-semibold rounded-full transition-all duration-200 ease-coke-ease focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coke-red disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-coke-red text-white hover:bg-coke-deep-red active:scale-[0.98]':
              variant === 'primary',
            'bg-coke-black text-white hover:bg-neutral-800 active:scale-[0.98]':
              variant === 'secondary',
            'border-2 border-white text-white hover:bg-white/10 active:scale-[0.98]':
              variant === 'ghost',
            'bg-white text-coke-red hover:bg-neutral-100 active:scale-[0.98]':
              variant === 'white',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-2.5 text-base': size === 'md',
            'px-8 py-3 text-lg': size === 'lg',
            'px-8 py-4 text-lg w-full': size === 'xl',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
