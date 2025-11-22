import { motion } from 'framer-motion'

export default function Showcase() {
  const items = [
    {
      title: 'AirFlex Pro',
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Runner X',
      img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Court Classic',
      img: 'https://images.unsplash.com/photo-1542291024-54f8c2b590bd?q=80&w=1200&auto=format&fit=crop',
    },
  ]
  return (
    <section id="trending" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Trending now</h2>
            <p className="text-gray-600">Movement in culture right now</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-3xl group">
              <img src={i.img} alt="" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-xl">{i.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
