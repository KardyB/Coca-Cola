import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stories',
  description:
    'Explore Coca-Cola stories — from brand history to recipes, caffeine facts, and the latest innovations.',
}

const stories = [
  {
    slug: 'history-of-coca-cola',
    title: 'The History of Coca-Cola: From Pharmacy to Global Icon',
    excerpt:
      'How a $0.05 drink invented in a small Atlanta pharmacy became the world\'s most recognized brand, serving over 2 billion drinks daily.',
    category: 'Heritage',
    date: 'Mar 15, 2026',
    readTime: '8 min read',
    color: 'from-amber-600 to-amber-800',
  },
  {
    slug: 'how-much-caffeine-in-coke-zero',
    title: 'How Much Caffeine Is in Coke Zero? Everything You Need to Know',
    excerpt:
      'A comprehensive guide to the caffeine content in Coca-Cola Zero Sugar, how it compares to other beverages, and what it means for your daily intake.',
    category: 'FAQ',
    date: 'Mar 10, 2026',
    readTime: '5 min read',
    color: 'from-coke-red to-coke-deep-red',
  },
  {
    slug: 'coca-cola-recipes',
    title: '10 Refreshing Coca-Cola Recipes for Summer',
    excerpt:
      'From Coca-Cola BBQ sauce to Coke float variations, discover creative ways to use Coca-Cola in your kitchen.',
    category: 'Recipes',
    date: 'Mar 5, 2026',
    readTime: '6 min read',
    color: 'from-orange-500 to-red-600',
  },
  {
    slug: 'sustainability-journey',
    title: 'Our Sustainability Journey: Progress Report 2026',
    excerpt:
      'An in-depth look at how we\'re working toward a World Without Waste and our progress on recycled packaging, water stewardship, and carbon goals.',
    category: 'Sustainability',
    date: 'Feb 28, 2026',
    readTime: '10 min read',
    color: 'from-emerald-600 to-green-800',
  },
  {
    slug: 'share-a-coke-story',
    title: 'Share a Coke: How Personalization Changed Marketing Forever',
    excerpt:
      'The story behind one of the most successful marketing campaigns in history and how it continues to evolve.',
    category: 'Marketing',
    date: 'Feb 20, 2026',
    readTime: '7 min read',
    color: 'from-purple-600 to-indigo-800',
  },
  {
    slug: 'coca-cola-starlight-behind-scenes',
    title: 'Behind the Scenes: Creating Coca-Cola Starlight',
    excerpt:
      'An exclusive look at how our flavor scientists developed the limited-edition Starlight blend, inspired by the cosmos.',
    category: 'Innovation',
    date: 'Feb 12, 2026',
    readTime: '6 min read',
    color: 'from-indigo-900 to-purple-900',
  },
]

export default function StoriesPage() {
  return (
    <div className="pt-24 pb-20 section-padding bg-coke-off-white min-h-screen">
      <div className="section-max-width">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coke-black">
            Stories
          </h1>
          <p className="mt-3 text-neutral-500 text-lg max-w-md mx-auto">
            Explore the world of Coca-Cola
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <div className={`h-48 bg-gradient-to-br ${story.color} flex items-center justify-center`}>
                <span className="text-white/80 font-display text-2xl font-bold">{story.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                  <span className="px-2 py-1 bg-coke-red/10 text-coke-red rounded-full font-semibold">
                    {story.category}
                  </span>
                  <span>{story.date}</span>
                  <span>{story.readTime}</span>
                </div>
                <h2 className="font-display text-lg font-bold text-coke-black group-hover:text-coke-red transition-colors leading-snug">
                  {story.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-500 line-clamp-2">{story.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Coca-Cola Stories',
            description: 'Explore the world of Coca-Cola — stories, recipes, and insights.',
            url: 'https://www.coca-cola.com/stories',
            publisher: {
              '@type': 'Organization',
              name: 'The Coca-Cola Company',
            },
          }),
        }}
      />
    </div>
  )
}
