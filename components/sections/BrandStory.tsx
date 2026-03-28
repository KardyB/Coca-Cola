import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left — Image */}
        <div className="relative bg-neutral-200 min-h-[300px] lg:min-h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800/60 to-amber-900/80" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMTUiLz48L3N2Zz4=')] opacity-30" />
          <div className="relative z-10 flex items-center justify-center h-full p-12">
            <div className="text-center">
              <span className="text-7xl font-display font-bold text-white/90">1886</span>
              <p className="mt-2 text-white/60 text-sm uppercase tracking-widest">Atlanta, Georgia</p>
            </div>
          </div>
        </div>

        {/* Right — Copy */}
        <div className="flex items-center bg-coke-off-white">
          <div className="p-10 lg:p-16 max-w-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-coke-red font-semibold mb-4">
              Our Heritage
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-coke-black leading-tight">
              Born in Atlanta.
              <br />
              Loved everywhere.
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              From a small pharmacy in Atlanta to the world&apos;s most recognized brand, Coca-Cola has been bringing people together for over 130 years.
            </p>
            <Link href="/about" className="inline-block mt-6">
              <Button variant="secondary" size="md">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
