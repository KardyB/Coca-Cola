import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'

const articles: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  'history-of-coca-cola': {
    title: 'The History of Coca-Cola: From Pharmacy to Global Icon',
    category: 'Heritage',
    date: 'Mar 15, 2026',
    readTime: '8 min read',
    content: [
      'In 1886, Dr. John S. Pemberton, a pharmacist in Atlanta, Georgia, created a flavored syrup that would change the world. He carried a jug of the new product down the street to Jacobs\' Pharmacy, where it was sampled, pronounced "excellent," and placed on sale for five cents a glass.',
      'Pemberton\'s bookkeeper, Frank M. Robinson, suggested the name and penned the famous Coca-Cola script that remains largely unchanged to this day. In its first year, Coca-Cola sold an average of just nine drinks per day.',
      'By 1895, Coca-Cola was being sold in every state in the United States. In 1915, the Root Glass Company of Terre Haute, Indiana, designed the iconic contour bottle — a shape so distinct that it could be recognized by touch alone in the dark or even when broken.',
      'The brand\'s global expansion accelerated in the mid-20th century. During World War II, Coca-Cola promised that every service member would get a bottle for five cents, wherever they were. This led to 64 bottling plants being built around the world.',
      'Today, The Coca-Cola Company sells products in more than 200 countries and territories, with over 2 billion servings consumed daily. From that small Atlanta pharmacy to the global stage, Coca-Cola remains the world\'s most recognized and beloved brand.',
    ],
  },
  'how-much-caffeine-in-coke-zero': {
    title: 'How Much Caffeine Is in Coke Zero? Everything You Need to Know',
    category: 'FAQ',
    date: 'Mar 10, 2026',
    readTime: '5 min read',
    content: [
      'Coca-Cola Zero Sugar contains 34mg of caffeine per 12 fl oz (355ml) can. This is slightly less than a regular Coca-Cola, which contains 34mg per 12 fl oz can, and significantly less than a standard cup of coffee, which contains about 95mg per 8 fl oz.',
      'The caffeine in Coca-Cola Zero Sugar is identical in amount to regular Coca-Cola. The "zero" in the name refers to zero sugar and zero calories — not zero caffeine. If you\'re looking for a caffeine-free option, Coca-Cola also offers Caffeine-Free Coca-Cola Zero Sugar.',
      'How does this compare to other beverages? A 12 oz can of Pepsi contains about 38mg of caffeine, while a 12 oz can of Mountain Dew contains about 54mg. An 8 oz cup of green tea contains about 28mg, and an 8 oz cup of coffee contains roughly 80-100mg.',
      'For most healthy adults, the FDA considers 400mg of caffeine per day to be safe. That means you could theoretically drink about 11 cans of Coke Zero before reaching that limit — though we wouldn\'t recommend it!',
      'The caffeine in Coca-Cola Zero Sugar serves an important purpose: it contributes to the flavor profile. Caffeine has a slightly bitter taste that balances the sweetness and contributes to the overall taste experience that Coca-Cola is known for.',
    ],
  },
}

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles[params.slug]
  if (!article) return { title: 'Story Not Found' }
  return {
    title: article.title,
    description: article.content[0]?.slice(0, 160),
  }
}

export default function StoryPage({ params }: Props) {
  const article = articles[params.slug]

  if (!article) {
    return (
      <div className="pt-24 pb-20 section-padding min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-coke-black">Story Not Found</h1>
          <Link href="/stories" className="mt-4 inline-block text-coke-red hover:underline">
            Back to Stories
          </Link>
        </div>
      </div>
    )
  }

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    datePublished: '2026-03-15',
    author: { '@type': 'Organization', name: 'The Coca-Cola Company' },
    publisher: {
      '@type': 'Organization',
      name: 'The Coca-Cola Company',
      logo: { '@type': 'ImageObject', url: 'https://www.coca-cola.com/logo.png' },
    },
  }

  return (
    <div className="pt-24 pb-20 section-padding bg-coke-off-white min-h-screen">
      <article className="section-max-width max-w-3xl">
        <Link
          href="/stories"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-coke-red transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Stories
        </Link>

        <span className="inline-block px-3 py-1 bg-coke-red/10 text-coke-red rounded-full text-xs font-semibold mb-4">
          {article.category}
        </span>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-coke-black leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 mt-4 text-sm text-neutral-500">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {article.readTime}
          </span>
        </div>

        <div className="mt-10 space-y-6">
          {article.content.map((paragraph, i) => (
            <p key={i} className="text-neutral-700 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </div>
  )
}
