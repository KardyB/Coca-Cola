import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/shop/checkout', '/api/'],
      },
    ],
    sitemap: 'https://www.coca-cola.com/sitemap.xml',
  }
}
