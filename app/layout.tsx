import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from './client-layout'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coca-cola.com'),
  title: {
    default: 'Coca-Cola Official | Taste the Feeling',
    template: '%s | Coca-Cola Official',
  },
  description:
    'Discover the world\'s most iconic beverages. Shop Coca-Cola Original, Zero Sugar, Cherry, Vanilla, and limited editions. Free shipping on orders over $35.',
  keywords: [
    'Coca-Cola',
    'Coke',
    'soft drinks',
    'beverages',
    'Coca-Cola Zero Sugar',
    'Coca-Cola Cherry',
    'Coca-Cola Vanilla',
    'soda',
    'carbonated drinks',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.coca-cola.com',
    siteName: 'Coca-Cola',
    title: 'Coca-Cola Official | Taste the Feeling',
    description:
      'Discover the world\'s most iconic beverages. Shop the full Coca-Cola range.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Coca-Cola',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coca-Cola Official | Taste the Feeling',
    description: 'Discover the world\'s most iconic beverages.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.coca-cola.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The Coca-Cola Company',
              url: 'https://www.coca-cola.com',
              logo: 'https://www.coca-cola.com/logo.png',
              sameAs: [
                'https://www.instagram.com/cocacola',
                'https://www.twitter.com/cocacola',
                'https://www.youtube.com/cocacola',
                'https://www.facebook.com/cocacola',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-438-2653',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
            }),
          }}
        />
      </head>
      <body className="font-body">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
