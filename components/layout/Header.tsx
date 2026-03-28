'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/stores/cart'

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/personalize', label: 'Experiences' },
  { href: '/stories', label: 'Stories' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const openCart = useCartStore((s) => s.openCart)
  const itemCount = useCartStore((s) => s.getItemCount())

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-coke-ease',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="section-padding">
          <div className="section-max-width flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                size={24}
                className={cn(scrolled ? 'text-coke-black' : 'text-white')}
              />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'font-display text-2xl lg:text-3xl font-bold tracking-tight transition-colors',
                scrolled ? 'text-coke-red' : 'text-white'
              )}
            >
              Coca-Cola
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-semibold tracking-wide uppercase transition-colors hover:opacity-80',
                    scrolled ? 'text-coke-black' : 'text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Search"
                className={cn(
                  'hidden lg:flex p-2 rounded-full transition-colors',
                  scrolled
                    ? 'text-coke-black hover:bg-neutral-100'
                    : 'text-white hover:bg-white/10'
                )}
              >
                <Search size={20} />
              </button>
              <button
                aria-label="Account"
                className={cn(
                  'hidden lg:flex p-2 rounded-full transition-colors',
                  scrolled
                    ? 'text-coke-black hover:bg-neutral-100'
                    : 'text-white hover:bg-white/10'
                )}
              >
                <User size={20} />
              </button>
              <button
                onClick={openCart}
                aria-label={`Cart with ${itemCount} items`}
                className={cn(
                  'relative p-2 rounded-full transition-colors',
                  scrolled
                    ? 'text-coke-black hover:bg-neutral-100'
                    : 'text-white hover:bg-white/10'
                )}
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-coke-red text-white text-[10px] font-bold flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-coke-black">
          <div className="flex items-center justify-between p-4">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Coca-Cola
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-8 mt-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-display font-bold text-white hover:text-coke-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
