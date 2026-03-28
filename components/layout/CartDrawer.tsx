'use client'

import { useEffect } from 'react'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/stores/cart'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const FREE_SHIPPING_THRESHOLD = 35

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal, getFreeShippingProgress } =
    useCartStore()

  const subtotal = getSubtotal()
  const shippingProgress = getFreeShippingProgress()
  const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/50 transition-opacity"
          onClick={closeCart}
          aria-hidden
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-coke-ease ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="font-display text-xl font-bold">Your Cart</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free shipping bar */}
          {items.length > 0 && (
            <div className="px-6 py-3 bg-neutral-50">
              {amountToFreeShipping > 0 ? (
                <p className="text-sm text-neutral-600 mb-2">
                  Add <span className="font-bold text-coke-red">${amountToFreeShipping.toFixed(2)}</span> more for free shipping
                </p>
              ) : (
                <p className="text-sm font-semibold text-green-600 mb-2">
                  You&apos;ve earned free shipping!
                </p>
              )}
              <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-coke-red rounded-full transition-all duration-500 ease-coke-ease"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-neutral-300 mb-4" />
                <p className="font-display text-lg font-bold text-neutral-400">
                  Your cart is empty
                </p>
                <p className="text-sm text-neutral-400 mt-1">
                  Add some refreshment to get started
                </p>
                <Button className="mt-6" onClick={closeCart}>
                  Shop Now
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.size}`}
                    className="flex gap-4 py-4 border-b border-neutral-100 last:border-0"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 bg-neutral-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <div className="w-10 h-14 bg-gradient-to-b from-coke-red to-coke-deep-red rounded" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                      <p className="text-xs text-neutral-500 mt-0.5">{item.size}</p>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity */}
                        <div className="flex items-center gap-2 border rounded-full px-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.size, item.quantity - 1)
                            }
                            className="p-1 hover:bg-neutral-100 rounded-full"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.size, item.quantity + 1)
                            }
                            className="p-1 hover:bg-neutral-100 rounded-full"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <span className="font-bold text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.productId, item.size)}
                      className="p-1 h-fit text-neutral-400 hover:text-coke-red transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}

                {/* Upsell */}
                <div className="bg-coke-red/5 rounded-xl p-4 border border-coke-red/10">
                  <p className="text-sm font-semibold text-coke-red">
                    Add a 6-pack for $4 more?
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Customers who bought this also loved the Original 6-Pack
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t px-6 py-4 space-y-3 bg-white">
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>Estimated delivery</span>
                <span className="font-semibold text-coke-black">Apr 2 - Apr 4</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold">Subtotal</span>
                <span className="text-xl font-bold">${subtotal.toFixed(2)}</span>
              </div>

              {/* Express checkout */}
              <div className="flex gap-2">
                <button className="flex-1 h-11 bg-black text-white rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-colors">
                  Apple Pay
                </button>
                <button className="flex-1 h-11 bg-[#5A31F4] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-colors">
                  Shop Pay
                </button>
              </div>

              <Link href="/shop/checkout" onClick={closeCart}>
                <Button size="xl" className="mt-1">
                  Checkout &mdash; ${subtotal.toFixed(2)}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
