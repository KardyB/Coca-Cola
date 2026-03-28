export interface ProductSize {
  label: string
  price: number
}

export interface Product {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  sizes: ProductSize[]
  category: string
  isLimited: boolean
  rating: number
  reviewCount: number
  image: string
  images: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Coca-Cola Original',
    slug: 'coca-cola-original',
    tagline: 'The original taste since 1886',
    description:
      'Nothing beats the refreshing taste of Coca-Cola Original. The iconic flavor that has been bringing people together for over a century. Perfectly carbonated, perfectly balanced, perfectly Coke.',
    sizes: [
      { label: '330ml', price: 1.99 },
      { label: '500ml', price: 2.49 },
      { label: '1.5L', price: 3.49 },
    ],
    category: 'classic',
    isLimited: false,
    rating: 4.8,
    reviewCount: 12847,
    image: '/images/products/original.jpg',
    images: [
      '/images/products/original.jpg',
      '/images/products/original-2.jpg',
      '/images/products/original-3.jpg',
      '/images/products/original-4.jpg',
    ],
  },
  {
    id: '2',
    name: 'Coca-Cola Zero Sugar',
    slug: 'coca-cola-zero-sugar',
    tagline: 'Great Coke taste, zero sugar',
    description:
      'Coca-Cola Zero Sugar delivers real Coca-Cola taste with zero sugar. Enjoy the crisp, refreshing taste you love without the calories. Same iconic flavor, reimagined.',
    sizes: [
      { label: '330ml', price: 1.99 },
      { label: '500ml', price: 2.49 },
      { label: '1.5L', price: 3.49 },
    ],
    category: 'zero',
    isLimited: false,
    rating: 4.7,
    reviewCount: 9234,
    image: '/images/products/zero.jpg',
    images: [
      '/images/products/zero.jpg',
      '/images/products/zero-2.jpg',
      '/images/products/zero-3.jpg',
      '/images/products/zero-4.jpg',
    ],
  },
  {
    id: '3',
    name: 'Coca-Cola Cherry',
    slug: 'coca-cola-cherry',
    tagline: 'A sweet twist on the classic',
    description:
      'The perfect fusion of Coca-Cola and cherry flavor creates a deliciously unique taste experience. Sweet, bold, and undeniably refreshing.',
    sizes: [
      { label: '330ml', price: 2.19 },
      { label: '500ml', price: 2.69 },
    ],
    category: 'flavored',
    isLimited: false,
    rating: 4.6,
    reviewCount: 5621,
    image: '/images/products/cherry.jpg',
    images: [
      '/images/products/cherry.jpg',
      '/images/products/cherry-2.jpg',
      '/images/products/cherry-3.jpg',
      '/images/products/cherry-4.jpg',
    ],
  },
  {
    id: '4',
    name: 'Coca-Cola Vanilla',
    slug: 'coca-cola-vanilla',
    tagline: 'Smooth vanilla, bold taste',
    description:
      'Coca-Cola Vanilla blends the classic Coca-Cola taste with smooth, creamy vanilla for a flavor that is both familiar and surprising. Indulgently refreshing.',
    sizes: [
      { label: '330ml', price: 2.19 },
      { label: '500ml', price: 2.69 },
    ],
    category: 'flavored',
    isLimited: false,
    rating: 4.5,
    reviewCount: 4389,
    image: '/images/products/vanilla.jpg',
    images: [
      '/images/products/vanilla.jpg',
      '/images/products/vanilla-2.jpg',
      '/images/products/vanilla-3.jpg',
      '/images/products/vanilla-4.jpg',
    ],
  },
  {
    id: '5',
    name: 'Coca-Cola Orange Cream',
    slug: 'coca-cola-orange-cream',
    tagline: 'Dreamsicle meets Coca-Cola',
    description:
      'A nostalgic blend of Coca-Cola with orange cream flavor, reminiscent of a classic dreamsicle. Limited batch, unlimited refreshment.',
    sizes: [{ label: '330ml', price: 2.49 }],
    category: 'limited',
    isLimited: true,
    rating: 4.9,
    reviewCount: 1876,
    image: '/images/products/orange-cream.jpg',
    images: [
      '/images/products/orange-cream.jpg',
      '/images/products/orange-cream-2.jpg',
      '/images/products/orange-cream-3.jpg',
      '/images/products/orange-cream-4.jpg',
    ],
  },
  {
    id: '6',
    name: 'Coca-Cola Starlight',
    slug: 'coca-cola-starlight',
    tagline: 'A taste of the cosmos',
    description:
      'Coca-Cola Starlight is a limited edition inspired by the magic of stargazing. A unique blend with a touch of the unexpected that will transport your taste buds beyond the everyday.',
    sizes: [{ label: '330ml', price: 2.99 }],
    category: 'limited',
    isLimited: true,
    rating: 4.4,
    reviewCount: 2341,
    image: '/images/products/starlight.jpg',
    images: [
      '/images/products/starlight.jpg',
      '/images/products/starlight-2.jpg',
      '/images/products/starlight-3.jpg',
      '/images/products/starlight-4.jpg',
    ],
  },
  {
    id: '7',
    name: 'Coca-Cola Original 6-Pack',
    slug: 'coca-cola-original-6-pack',
    tagline: 'Share the taste with everyone',
    description:
      'Six cans of pure Coca-Cola Original goodness. Perfect for gatherings, parties, or keeping your fridge stocked with the world\'s favorite refreshment.',
    sizes: [{ label: '6 x 330ml', price: 8.99 }],
    category: 'packs',
    isLimited: false,
    rating: 4.9,
    reviewCount: 7654,
    image: '/images/products/6-pack.jpg',
    images: [
      '/images/products/6-pack.jpg',
      '/images/products/6-pack-2.jpg',
      '/images/products/6-pack-3.jpg',
      '/images/products/6-pack-4.jpg',
    ],
  },
  {
    id: '8',
    name: 'Coca-Cola Zero 24-Pack',
    slug: 'coca-cola-zero-24-pack',
    tagline: 'Stock up on zero sugar',
    description:
      'Twenty-four cans of Coca-Cola Zero Sugar. The ultimate value pack for the dedicated Zero fan. Zero sugar, maximum taste, fully stocked.',
    sizes: [{ label: '24 x 330ml', price: 22.99 }],
    category: 'packs',
    isLimited: false,
    rating: 4.8,
    reviewCount: 5432,
    image: '/images/products/24-pack.jpg',
    images: [
      '/images/products/24-pack.jpg',
      '/images/products/24-pack-2.jpg',
      '/images/products/24-pack-3.jpg',
      '/images/products/24-pack-4.jpg',
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4)
}

export function getLimitedProducts(): Product[] {
  return products.filter((p) => p.isLimited)
}
