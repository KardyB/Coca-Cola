import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RatingStarsProps {
  rating: number
  reviewCount?: number
  size?: 'sm' | 'md'
  className?: string
}

export default function RatingStars({
  rating,
  reviewCount,
  size = 'sm',
  className,
}: RatingStarsProps) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(rating)
    const partial = !filled && i < rating
    return { filled, partial }
  })

  const starSize = size === 'sm' ? 14 : 18

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex">
        {stars.map((star, i) => (
          <Star
            key={i}
            size={starSize}
            className={cn(
              star.filled
                ? 'fill-coke-gold text-coke-gold'
                : star.partial
                  ? 'fill-coke-gold/50 text-coke-gold'
                  : 'fill-neutral-200 text-neutral-200'
            )}
          />
        ))}
      </div>
      <span className={cn('font-body text-neutral-600', size === 'sm' ? 'text-sm' : 'text-base')}>
        {rating}
      </span>
      {reviewCount !== undefined && (
        <span className={cn('font-body text-neutral-400', size === 'sm' ? 'text-sm' : 'text-base')}>
          ({reviewCount.toLocaleString()} reviews)
        </span>
      )}
    </div>
  )
}
