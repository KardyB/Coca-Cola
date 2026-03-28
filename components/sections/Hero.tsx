'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

function Bubble({ delay, duration, left, size }: { delay: number; duration: number; left: number; size: number }) {
  return (
    <div
      className="absolute rounded-full bg-white/10 animate-rise-bubble"
      style={{
        '--delay': `${delay}s`,
        '--duration': `${duration}s`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
      } as React.CSSProperties}
    />
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 6 + Math.random() * 8,
    left: Math.random() * 100,
    size: 4 + Math.random() * 20,
  }))

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-coke-deep-red via-coke-red to-coke-deep-red" />

      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {mounted && bubbles.map((b) => (
          <Bubble key={b.id} {...b} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1
          className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold text-white leading-[1.05] ${
            mounted ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Taste the Feeling
        </h1>
        <p
          className={`mt-6 text-lg sm:text-xl text-white/60 max-w-[520px] mx-auto font-body leading-relaxed ${
            mounted ? 'animate-fade-in-up [animation-delay:0.2s]' : 'opacity-0'
          }`}
        >
          Discover the world&apos;s most iconic beverages. Crafted to perfection since 1886.
        </p>
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 ${
            mounted ? 'animate-fade-in-up [animation-delay:0.4s]' : 'opacity-0'
          }`}
        >
          <Link href="/products">
            <Button variant="white" size="lg">
              Shop Now
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="ghost" size="lg">
              Explore Products
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-chevron">
        <ChevronDown size={32} className="text-white/50" />
      </div>
    </section>
  )
}
