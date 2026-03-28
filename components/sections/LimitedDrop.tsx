'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime()
      const diff = targetDate.getTime() - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[72px]">
        <span className="font-display text-3xl md:text-4xl font-bold text-white">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-white/50 mt-2 block">
        {label}
      </span>
    </div>
  )
}

export default function LimitedDrop() {
  // Drop in 14 days from now
  const [targetDate] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() + 14)
    return d
  })

  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <section className="py-20 section-padding bg-coke-black relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-coke-gold/5 blur-3xl" aria-hidden />

      <div className="section-max-width relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-coke-gold/20 text-coke-gold text-xs font-semibold uppercase tracking-wider mb-6">
          Limited Edition
        </span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Coca-Cola Starlight
        </h2>
        <p className="mt-3 text-white/50 text-lg max-w-md mx-auto">
          A taste of the cosmos. Limited batch, unlimited wonder.
        </p>

        {/* Product visual */}
        <div className="my-10 flex justify-center">
          <div className="w-32 h-48 bg-gradient-to-b from-indigo-900 via-purple-900 to-coke-deep-red rounded-lg shadow-2xl shadow-purple-500/20 flex items-center justify-center border border-white/10">
            <span className="text-white font-display text-sm text-center px-3">Starlight</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <TimeBlock value={days} label="Days" />
          <span className="text-2xl text-white/30 font-light mt-[-20px]">:</span>
          <TimeBlock value={hours} label="Hours" />
          <span className="text-2xl text-white/30 font-light mt-[-20px]">:</span>
          <TimeBlock value={minutes} label="Minutes" />
          <span className="text-2xl text-white/30 font-light mt-[-20px]">:</span>
          <TimeBlock value={seconds} label="Seconds" />
        </div>

        {/* Scarcity */}
        <p className="mt-6 text-coke-gold text-sm font-semibold">
          Only 500 remaining
        </p>

        <Link href="/products/coca-cola-starlight" className="inline-block mt-6">
          <Button size="lg" className="bg-coke-gold text-coke-black hover:bg-coke-gold/90">
            Get Yours Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
