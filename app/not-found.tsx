import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding bg-coke-off-white">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-bold text-coke-red mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-coke-black mb-3">
          Page Not Found
        </h1>
        <p className="text-neutral-500 mb-8">
          Looks like this page has gone flat. Let&apos;s get you back to something refreshing.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link href="/products">
            <Button variant="secondary" size="lg">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
