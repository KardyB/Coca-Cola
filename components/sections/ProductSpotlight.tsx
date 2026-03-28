'use client'

import { getFeaturedProducts } from '@/lib/products'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductSpotlight() {
  const products = getFeaturedProducts()

  return (
    <section className="py-20 section-padding bg-coke-off-white">
      <div className="section-max-width">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-coke-black">
            Our Products
          </h2>
          <p className="mt-3 text-neutral-500 text-lg max-w-md mx-auto">
            Discover the flavors that bring the world together
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
