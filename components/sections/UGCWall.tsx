import { Heart } from 'lucide-react'

const ugcPosts = [
  { id: 1, likes: 2341, color: 'from-rose-300 to-rose-500' },
  { id: 2, likes: 1892, color: 'from-amber-300 to-orange-500' },
  { id: 3, likes: 3150, color: 'from-sky-300 to-blue-500' },
  { id: 4, likes: 987, color: 'from-emerald-300 to-green-500' },
  { id: 5, likes: 4523, color: 'from-purple-300 to-violet-500' },
  { id: 6, likes: 1456, color: 'from-pink-300 to-fuchsia-500' },
  { id: 7, likes: 2890, color: 'from-yellow-300 to-amber-500' },
  { id: 8, likes: 1102, color: 'from-teal-300 to-cyan-500' },
  { id: 9, likes: 3678, color: 'from-red-300 to-coke-red' },
]

export default function UGCWall() {
  return (
    <section className="py-20 section-padding bg-white">
      <div className="section-max-width">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-coke-black">
            #CokeMyWay
          </h2>
          <p className="mt-3 text-neutral-500 text-lg">
            See how fans enjoy their Coca-Cola moments
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {ugcPosts.map((post, i) => (
            <div
              key={post.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-neutral-100"
            >
              {/* Placeholder image */}
              <div
                className={`w-full bg-gradient-to-br ${post.color}`}
                style={{ height: `${200 + (i % 3) * 80}px` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/80 font-display text-4xl font-bold">Coke</span>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />

              {/* Likes */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Heart size={14} className="text-white fill-white" />
                <span className="text-white text-xs font-semibold">
                  {post.likes.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
