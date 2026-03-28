'use client'

import { create } from 'zustand'

export interface CartItem {
  productId: string
  name: string
  size: string
  price: number
  quantity: number
  image: string
  slug: string
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  getItemCount: () => number
  getSubtotal: () => number
  getFreeShippingProgress: () => number
}

const FREE_SHIPPING_THRESHOLD = 35

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.productId === item.productId && i.size === item.size
      )
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === item.productId && i.size === item.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          isOpen: true,
        }
      }
      return { items: [...state.items, { ...item, quantity: 1 }], isOpen: true }
    }),

  removeItem: (productId, size) =>
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.productId === productId && i.size === size)
      ),
    })),

  updateQuantity: (productId, size, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          items: state.items.filter(
            (i) => !(i.productId === productId && i.size === size)
          ),
        }
      }
      return {
        items: state.items.map((i) =>
          i.productId === productId && i.size === size
            ? { ...i, quantity }
            : i
        ),
      }
    }),

  clearCart: () => set({ items: [] }),

  getItemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

  getSubtotal: () =>
    get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

  getFreeShippingProgress: () => {
    const subtotal = get().getSubtotal()
    return Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)
  },
}))
