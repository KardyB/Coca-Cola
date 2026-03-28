'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, Truck, RotateCcw, ShieldCheck, ChevronDown, Eye, Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/lib/products'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import RatingStars from '@/components/ui/RatingStars'
import ProductCard from '@/components/ui/ProductCard'

interface Props {
  product: Product
  crossSell: Product[]
}

const accordionItems = [
  {
    key: 'ingredients',
    title: 'Ingredients',
    content:
      'Carbonated water, high fructose corn syrup, caramel color, phosphoric acid, natural flavors, caffeine.',
  },
  {
    key: 'nutrition',
    title: 'Nutrition Facts',
    content:
      'Serving Size: 1 can (330ml). Calories: 140. Total Fat: 0g. Sodium: 45mg. Total Carbohydrate: 39g. Sugars: 39g. Protein: 0g.',
  },
  {
    key: 'sustainability',
    title: 'Sustainability',
    content:
      'This product is packaged in 100% recyclable aluminum. Our cans contain an average of 70% recycled content. Please recycle after use.',
  },
  {
    key: 'shipping',
    title: 'Shipping Info',
    content:
      'Free standard shipping on orders over $35. Standard delivery: 3-5 business days. Express delivery: 1-2 business days ($9.99). Available in the contiguous US only.',
  },
]

export default function PDPClient({ product, crossSell }: Props) {
  const [selectedSize, setSelectedSize] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [viewers, setViewers] = useState(0)
  const [showStickyBar, setShowStickyBar] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  useEffect(() => {
    setViewers(Math.floor(Math.random() * 17) + 8)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        name: product.name,
        size: product.sizes[selectedSize].label,
        price: product.sizes[selectedSize].price,
        image: product.image,
        slug: product.slug,
      })
    }
    setQuantity(1)
  }

  return (
    <div className="pt-24 pb-20 section-padding bg-coke-off-white min-h-screen">
      <div className="section-max-width">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li><Link href="/" className="hover:text-coke-red transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-coke-red transition-colors">Products</Link></li>
            <li>/</li>
            <li className="text-coke-black font-semibold truncate">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12">
          {/* Left — Images */}
          <div>
            {/* Main image */}
            <div className="bg-white rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative">
              {product.isLimited && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="limited">Limited</Badge>
                </div>
              )}
              {product.id === '1' && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="popular">Most Popular</Badge>
                </div>
              )}
              <div className="w-48 h-72 bg-gradient-to-b from-coke-red to-coke-deep-red rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-white font-display text-xl text-center px-4">
                  {product.name.replace('Coca-Cola ', '')}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3 mt-3">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  className={cn(
                    'bg-white rounded-xl aspect-square flex items-center justify-center transition-all',
                    i === 0 ? 'ring-2 ring-coke-red' : 'hover:ring-2 hover:ring-neutral-300'
                  )}
                >
                  <div className="w-10 h-14 bg-gradient-to-b from-coke-red/80 to-coke-deep-red/80 rounded" />
                </button>
              ))}
            </div>

            {/* Video placeholder */}
            <div className="mt-3 bg-white rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:bg-neutral-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-coke-red/10 flex items-center justify-center flex-shrink-0">
                <span className="text-coke-red text-lg">&#9654;</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Watch the Story</p>
                <p className="text-xs text-neutral-500">See how {product.name} is made</p>
              </div>
            </div>
          </div>

          {/* Right — Details */}
          <div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-[48px] font-bold text-coke-black leading-tight">
              {product.name}
            </h1>
            <p className="mt-2 text-lg italic text-neutral-500">{product.tagline}</p>

            <RatingStars
              rating={product.rating}
              reviewCount={product.reviewCount}
              size="md"
              className="mt-3"
            />

            {/* Viewers */}
            <div className="flex items-center gap-2 mt-4 text-sm text-neutral-500">
              <Eye size={16} className="text-coke-red" />
              <span>{viewers} people viewing this now</span>
            </div>

            {/* Stock */}
            <p className="mt-2 text-sm text-green-600 font-semibold">
              In stock &mdash; ships today if ordered by 2PM EST
            </p>

            {/* Size selector */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-coke-black mb-3">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, i) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(i)}
                    className={cn(
                      'px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200',
                      selectedSize === i
                        ? 'border-coke-red bg-coke-red text-white'
                        : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
                    )}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <p className="mt-4 text-3xl font-bold text-coke-black">
              ${product.sizes[selectedSize].price.toFixed(2)}
            </p>

            {/* Quantity */}
            <div className="mt-4 flex items-center gap-3">
              <p className="text-sm font-semibold text-coke-black">Quantity</p>
              <div className="flex items-center border-2 border-neutral-200 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-neutral-100 rounded-l-full"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="w-10 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-neutral-100 rounded-r-full"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              size="xl"
              className="mt-6 h-14 text-lg"
              onClick={handleAddToCart}
            >
              Add to Cart &mdash; ${(product.sizes[selectedSize].price * quantity).toFixed(2)}
            </Button>

            {/* Wishlist */}
            <button className="mt-3 w-full h-12 rounded-full border-2 border-neutral-200 text-neutral-600 font-semibold text-sm flex items-center justify-center gap-2 hover:border-neutral-400 transition-colors">
              <Heart size={18} />
              Add to Wishlist
            </button>

            {/* Trust row */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: Truck, text: 'Free Shipping >$35' },
                { icon: RotateCcw, text: 'Easy Returns' },
                { icon: ShieldCheck, text: 'Secure Checkout' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center text-center gap-1.5 p-3 bg-white rounded-xl">
                  <Icon size={20} className="text-neutral-400" />
                  <span className="text-xs text-neutral-600 font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-neutral-200">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-neutral-200">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === item.key ? null : item.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                    aria-expanded={openAccordion === item.key}
                  >
                    <span className="font-semibold text-sm">{item.title}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        'text-neutral-400 transition-transform duration-200',
                        openAccordion === item.key && 'rotate-180'
                      )}
                    />
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 text-sm text-neutral-600 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-sell */}
        {crossSell.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-coke-black mb-8">
              Pairs Well With
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {crossSell.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky mobile Add to Cart bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4 lg:hidden">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-sm truncate">{product.name}</p>
              <p className="text-lg font-bold text-coke-red">
                ${product.sizes[selectedSize].price.toFixed(2)}
              </p>
            </div>
            <Button onClick={handleAddToCart} className="flex-shrink-0">
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
