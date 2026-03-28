'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.includes('@')) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 section-padding bg-coke-black relative overflow-hidden">
      {/* Ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-coke-red/20 blur-[100px] rounded-full" aria-hidden />

      <div className="section-max-width relative z-10 text-center max-w-xl mx-auto">
        {submitted ? (
          <div className="animate-fade-in-up">
            <div className="text-5xl mb-4">&#10003;</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              You&apos;re In
            </h2>
            <p className="mt-3 text-white/50">
              Watch your inbox for exclusive drops, early access, and more.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Be the First to Know
            </h2>
            <p className="mt-3 text-white/50 text-lg">
              Get early access to limited drops, personalized offers, and brand news.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-coke-red/50 font-body"
              />
              <Button type="submit" size="lg">
                Join
              </Button>
            </form>
            <p className="mt-4 text-xs text-white/30">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
