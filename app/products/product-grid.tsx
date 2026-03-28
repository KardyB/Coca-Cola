'use client'

import { useState } from 'react'
import ProductCard from '@/components/ui/ProductCard'
import type { Product } from '@/lib/products'

const categories = [
  { value: 'all', label: 'All' },
  { value: 'classic', label: 'Classic' },
  { value: 'zero', label: 'Zero Sugar' },
  { value: 'flavored', label: 'Flavored' },
  { value: 'limited', label: 'Limited' },
  { value: 'packs', label: 'Packs' },
]

export default function ProductGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === cat.value
                ? 'bg-coke-red text-white'
                : 'bg-white text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-neutral-400 py-12">No products found in this category.</p>
      )}
    </>
  )
}
