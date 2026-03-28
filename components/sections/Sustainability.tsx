import { Recycle, Droplets, Leaf } from 'lucide-react'

const pillars = [
  {
    icon: Recycle,
    title: 'Recycled Packaging',
    description:
      'By 2030, we aim to collect and recycle a bottle or can for each one we sell. Our bottles are now made with 50% recycled material.',
  },
  {
    icon: Droplets,
    title: 'Water Stewardship',
    description:
      'We replenish 100% of the water we use in our finished beverages and their production back to nature and communities.',
  },
  {
    icon: Leaf,
    title: 'Carbon Goals',
    description:
      'We\'re committed to reducing our absolute carbon emissions by 25% by 2030, with a goal of net-zero by 2050.',
  },
]

export default function Sustainability() {
  return (
    <section className="py-20 section-padding bg-coke-off-white">
      <div className="section-max-width">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-coke-red font-semibold mb-4">
            Our Commitment
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-coke-black">
            A World Without Waste
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-16 h-16 rounded-full bg-coke-red/10 flex items-center justify-center mx-auto mb-5">
                <pillar.icon size={28} className="text-coke-red" />
              </div>
              <h3 className="font-display text-xl font-bold text-coke-black mb-3">
                {pillar.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
