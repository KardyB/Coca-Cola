'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { useCartStore } from '@/stores/cart'

const fontOptions = ['Classic', 'Modern', 'Script']
const colorOptions = [
  { name: 'Red', value: '#F40009' },
  { name: 'Black', value: '#0A0A0A' },
  { name: 'Gold', value: '#C9A84C' },
]

export default function PersonalizePage() {
  const [name, setName] = useState('')
  const [font, setFont] = useState('Classic')
  const [color, setColor] = useState('#F40009')
  const addItem = useCartStore((s) => s.addItem)

  const handleAddToCart = () => {
    if (!name.trim()) return
    addItem({
      productId: `custom-${Date.now()}`,
      name: `Personalized Coke - "${name}"`,
      size: '330ml',
      price: 4.99,
      image: '/images/products/custom.jpg',
      slug: 'personalize',
    })
  }

  return (
    <div className="pt-24 pb-20 section-padding bg-coke-off-white min-h-screen">
      <div className="section-max-width max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-coke-red font-semibold mb-4">
            Share a Coke
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coke-black">
            Make It Yours
          </h1>
          <p className="mt-3 text-neutral-500 text-lg max-w-md mx-auto">
            Create a personalized Coca-Cola bottle with your name or special message
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="bg-white rounded-2xl p-8 space-y-6">
            {/* Name input */}
            <div>
              <label htmlFor="bottle-name" className="block text-sm font-semibold text-coke-black mb-2">
                Your Text
              </label>
              <input
                id="bottle-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a name or message..."
                maxLength={20}
                className="w-full px-5 py-3 rounded-xl border-2 border-neutral-200 focus:border-coke-red focus:outline-none transition-colors font-body"
              />
              <p className="text-xs text-neutral-400 mt-1">{name.length}/20 characters</p>
            </div>

            {/* Font selector */}
            <div>
              <p className="text-sm font-semibold text-coke-black mb-2">Font Style</p>
              <div className="flex gap-2">
                {fontOptions.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFont(f)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                      font === f
                        ? 'border-coke-red bg-coke-red text-white'
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Color selector */}
            <div>
              <p className="text-sm font-semibold text-coke-black mb-2">Bottle Color</p>
              <div className="flex gap-3">
                {colorOptions.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setColor(c.value)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      color === c.value ? 'border-coke-black scale-110' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.value }}
                    aria-label={`Select ${c.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <span className="text-neutral-600">Personalized Bottle</span>
                <span className="text-2xl font-bold">$4.99</span>
              </div>
              <Button size="xl" onClick={handleAddToCart} disabled={!name.trim()}>
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Preview */}
          <div className="flex justify-center lg:sticky lg:top-28">
            <div className="relative w-64 h-96">
              <div
                className="absolute inset-0 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: color }}
              >
                <div className="absolute top-6 w-20 h-8 bg-white/10 rounded-full" />

                <div className="text-center px-6 mt-4">
                  <p
                    className={`text-white text-3xl font-bold truncate ${
                      font === 'Script' ? 'italic' : font === 'Modern' ? 'tracking-wider uppercase text-2xl' : ''
                    }`}
                  >
                    {name || 'Your Name'}
                  </p>
                  <div className="mt-2 h-px w-3/4 mx-auto bg-white/30" />
                  <p className="mt-2 text-white/50 text-xs uppercase tracking-[0.3em]">
                    Coca-Cola
                  </p>
                </div>

                <div className="absolute bottom-6 text-white/30 text-[8px] uppercase tracking-widest">
                  330ml
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
