'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function PersonalizationUpsell() {
  const [name, setName] = useState('')

  return (
    <section className="py-20 section-padding bg-coke-deep-red relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" aria-hidden />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5" aria-hidden />

      <div className="section-max-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-4">
              Share a Coke
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Make It Yours.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed max-w-md mx-auto lg:mx-0">
              Create a personalized Coca-Cola bottle with your name, a friend&apos;s name, or a special message.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a name..."
                maxLength={20}
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 font-body"
              />
              <Link href="/personalize">
                <Button variant="white" size="lg">
                  Create Your Bottle
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — Bottle preview */}
          <div className="flex justify-center">
            <div className="relative w-48 h-72">
              {/* Bottle shape */}
              <div className="absolute inset-0 bg-gradient-to-b from-coke-red via-coke-deep-red to-coke-red rounded-[2rem] shadow-2xl border border-white/10">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-4">
                  <p className="text-white font-display text-2xl font-bold truncate">
                    {name || 'Your Name'}
                  </p>
                  <div className="mt-1 h-px w-3/4 mx-auto bg-white/30" />
                  <p className="mt-1 text-white/50 text-[10px] uppercase tracking-widest">
                    Coca-Cola
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
