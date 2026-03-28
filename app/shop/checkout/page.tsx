'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShieldCheck, Lock } from 'lucide-react'
import { useCartStore } from '@/stores/cart'
import Button from '@/components/ui/Button'

export default function CheckoutPage() {
  const { items, getSubtotal } = useCartStore()
  const subtotal = getSubtotal()
  const shipping = subtotal >= 35 ? 0 : 5.99
  const total = subtotal + shipping

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Order placed! (Demo)')
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-coke-red focus:outline-none transition-colors font-body text-sm'

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-20 section-padding min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-coke-black">Your cart is empty</h1>
          <Link href="/products" className="mt-4 inline-block text-coke-red hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-20 section-padding bg-coke-off-white min-h-screen">
      <div className="section-max-width max-w-6xl">
        {/* Minimal header */}
        <div className="text-center mb-10">
          <Link href="/" className="font-display text-2xl font-bold text-coke-red">
            Coca-Cola
          </Link>
          <div className="flex items-center justify-center gap-1.5 mt-2 text-sm text-neutral-500">
            <Lock size={14} />
            <span>Secure Checkout</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Left — Form */}
            <div className="space-y-8">
              {/* Contact */}
              <section className="bg-white rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold mb-4">Contact</h2>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={update('email')}
                  required
                  className={inputClass}
                />
              </section>

              {/* Shipping */}
              <section className="bg-white rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold mb-4">Shipping Address</h2>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={update('firstName')}
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={update('lastName')}
                      required
                      className={inputClass}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={update('address')}
                    required
                    className={inputClass}
                    autoComplete="street-address"
                  />
                  <div className="grid grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={update('city')}
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={formData.state}
                      onChange={update('state')}
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="ZIP"
                      value={formData.zip}
                      onChange={update('zip')}
                      required
                      className={inputClass}
                    />
                  </div>
                  <select value={formData.country} onChange={update('country')} className={inputClass}>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
              </section>

              {/* Payment */}
              <section className="bg-white rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold mb-4">Payment</h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Card number"
                    value={formData.cardNumber}
                    onChange={update('cardNumber')}
                    required
                    className={inputClass}
                    autoComplete="cc-number"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      value={formData.expiry}
                      onChange={update('expiry')}
                      required
                      className={inputClass}
                      autoComplete="cc-exp"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={update('cvv')}
                      required
                      className={inputClass}
                      autoComplete="cc-csc"
                    />
                  </div>
                </div>
              </section>

              <Button type="submit" size="xl" className="h-14 text-lg">
                Place Order &mdash; ${total.toFixed(2)}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400">
                <ShieldCheck size={14} />
                <span>Your order is protected. 256-bit SSL encryption.</span>
              </div>
            </div>

            {/* Right — Order summary */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-white rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.size}`} className="flex items-center gap-3">
                      <div className="relative w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-9 bg-gradient-to-b from-coke-red to-coke-deep-red rounded" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-neutral-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{item.name}</p>
                        <p className="text-xs text-neutral-500">{item.size}</p>
                      </div>
                      <span className="text-sm font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
