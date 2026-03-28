import type { Metadata } from 'next'
import { Recycle, Droplets, Leaf, Globe, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about The Coca-Cola Company\'s mission, heritage, and commitment to sustainability. From Atlanta to the world since 1886.',
}

const milestones = [
  { year: '1886', text: 'Dr. John Pemberton creates Coca-Cola in Atlanta, Georgia' },
  { year: '1915', text: 'The iconic contour bottle is introduced' },
  { year: '1928', text: 'Coca-Cola becomes an Olympic Games sponsor' },
  { year: '1955', text: 'First Coca-Cola cans are produced' },
  { year: '1985', text: 'Coca-Cola becomes the first soft drink in space' },
  { year: '2009', text: 'PlantBottle packaging — first recyclable PET plastic bottle from plants' },
  { year: '2018', text: 'World Without Waste initiative launched' },
  { year: '2024', text: '100% recycled plastic bottles in 40+ markets' },
]

const stats = [
  { icon: Globe, value: '200+', label: 'Countries' },
  { icon: Users, value: '2B+', label: 'Daily Servings' },
  { icon: Award, value: '138', label: 'Years of Refreshment' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-coke-off-white min-h-screen">
      {/* Hero */}
      <section className="section-padding py-20 bg-gradient-to-b from-coke-deep-red to-coke-red text-white text-center">
        <div className="section-max-width max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold">
            Refreshing the World Since 1886
          </h1>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            We are The Coca-Cola Company — a total beverage company with products sold in more than 200 countries and territories. Our mission is to refresh the world and make a difference.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding -mt-8">
        <div className="section-max-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <Icon size={32} className="mx-auto text-coke-red mb-3" />
                <p className="font-display text-4xl font-bold text-coke-black">{value}</p>
                <p className="text-neutral-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="section-padding py-20">
        <div className="section-max-width max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-coke-black text-center mb-12">
            Our Heritage
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-coke-red flex-shrink-0 mt-1" />
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-neutral-200" />}
                </div>
                <div className="pb-10">
                  <span className="font-display text-xl font-bold text-coke-red">{m.year}</span>
                  <p className="text-neutral-600 mt-1">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="section-padding py-20 bg-white">
        <div className="section-max-width">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-coke-red font-semibold mb-4">
              Our Commitment
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-coke-black">
              A World Without Waste
            </h2>
            <p className="mt-3 text-neutral-500 max-w-lg mx-auto">
              We&apos;re on a journey to create a more sustainable future for all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Recycle, title: 'Recycled Packaging', text: 'By 2030, we aim to collect and recycle a bottle or can for each one we sell.' },
              { icon: Droplets, title: 'Water Stewardship', text: 'We replenish 100% of the water used in our beverages back to nature and communities.' },
              { icon: Leaf, title: 'Carbon Goals', text: 'Committed to reducing absolute carbon emissions 25% by 2030, net-zero by 2050.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-coke-off-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-coke-red/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={28} className="text-coke-red" />
                </div>
                <h3 className="font-display text-xl font-bold text-coke-black mb-3">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
