import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products, getProductBySlug, getFeaturedProducts } from '@/lib/products'
import PDPClient from './pdp-client'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}

  return {
    title: `${product.name} | ${product.sizes[0].label}`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Coca-Cola Official`,
      description: product.tagline,
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
    },
  }
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const crossSell = getFeaturedProducts().filter((p) => p.id !== product.id).slice(0, 4)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    brand: { '@type': 'Brand', name: 'Coca-Cola' },
    offers: product.sizes.map((s) => ({
      '@type': 'Offer',
      price: s.price.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      name: s.label,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.coca-cola.com' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.coca-cola.com/products' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://www.coca-cola.com/products/${product.slug}` },
    ],
  }

  return (
    <>
      <PDPClient product={product} crossSell={crossSell} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  )
}
