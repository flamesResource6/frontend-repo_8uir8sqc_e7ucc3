import { motion } from 'framer-motion'

export default function ProductCard({ item, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow text-left"
    >
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={item.images?.[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
          <span className="text-gray-900 font-bold">${item.price?.toFixed?.(2) || item.price}</span>
        </div>
        <p className="mt-1 text-sm text-gray-500 truncate">{item.brand}</p>
        <div className="mt-3 flex items-center gap-2">
          {item.colors?.slice(0,4).map((c,i) => (
            <span key={i} className="w-4 h-4 rounded-full border" style={{ backgroundColor: c.hex }} />
          ))}
        </div>
      </div>
    </motion.button>
  )
}
