import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ProductSpotlight from '@/components/sections/ProductSpotlight'
import BrandStory from '@/components/sections/BrandStory'
import PersonalizationUpsell from '@/components/sections/PersonalizationUpsell'
import LimitedDrop from '@/components/sections/LimitedDrop'
import UGCWall from '@/components/sections/UGCWall'
import Sustainability from '@/components/sections/Sustainability'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Coca-Cola Official | Taste the Feeling',
  description:
    'Discover the world\'s most iconic beverages. Shop Coca-Cola Original, Zero Sugar, Cherry, Vanilla and limited editions. Free shipping on orders over $35.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductSpotlight />
      <BrandStory />
      <PersonalizationUpsell />
      <LimitedDrop />
      <UGCWall />
      <Sustainability />
      <EmailCapture />
    </>
  )
}
