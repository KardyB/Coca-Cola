'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/lib/products'
import Badge from './Badge'
import Button from './Button'
import RatingStars from './RatingStars'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem)

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      size: product.sizes[0].label,
      price: product.sizes[0].price,
      image: product.image,
      slug: product.slug,
    })
  }

  return (
    <div
      className={cn(
        'group relative bg-white rounded-2xl overflow-hidden transition-all duration-200 ease-coke-ease hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {product.id === '1' && <Badge variant="popular">Most Popular</Badge>}
        {product.isLimited && <Badge variant="limited">Limited</Badge>}
      </div>

      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square bg-neutral-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-100/50" />
          <div className="w-full h-full flex items-center justify-center p-8 transition-transform duration-200 ease-coke-ease group-hover:scale-[1.04]">
            <div className="w-32 h-48 bg-gradient-to-b from-coke-red to-coke-deep-red rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-white font-display text-sm text-center px-2">
                {product.name.replace('Coca-Cola ', '')}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-lg font-bold text-coke-black hover:text-coke-red transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-neutral-500 mt-1">{product.tagline}</p>

        <RatingStars rating={product.rating} className="mt-2" />

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-coke-black">
            ${product.sizes[0].price.toFixed(2)}
          </span>
          {product.sizes.length > 1 && (
            <span className="text-xs text-neutral-400">
              {product.sizes.length} sizes
            </span>
          )}
        </div>

        <div className="flex gap-2 mt-3">
          <Button
            size="sm"
            className="flex-1"
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </Button>
          <Link href={`/products/${product.slug}`}>
            <Button variant="ghost" size="sm" className="border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-coke-black">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
