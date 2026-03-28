import type { Metadata } from 'next'
import { products } from '@/lib/products'
import ProductGrid from './product-grid'

export const metadata: Metadata = {
  title: 'All Products',
  description:
    'Browse the full Coca-Cola range. From Original to Zero Sugar, Cherry, Vanilla, and limited editions. Find your perfect refreshment.',
}

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20 section-padding bg-coke-off-white min-h-screen">
      <div className="section-max-width">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li><a href="/" className="hover:text-coke-red transition-colors">Home</a></li>
            <li>/</li>
            <li className="text-coke-black font-semibold">Products</li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coke-black">
            Our Products
          </h1>
          <p className="mt-3 text-neutral-500 text-lg max-w-md mx-auto">
            Find your perfect Coca-Cola
          </p>
        </div>

        <ProductGrid products={products} />
      </div>

      {/* JSON-LD BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.coca-cola.com' },
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.coca-cola.com/products' },
            ],
          }),
        }}
      />
    </div>
  )
}
