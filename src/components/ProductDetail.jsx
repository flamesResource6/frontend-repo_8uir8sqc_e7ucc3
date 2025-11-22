import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Star, ShoppingCart, Check } from 'lucide-react'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [size, setSize] = useState(null)
  const [color, setColor] = useState(null)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${baseUrl}/products/${slug}`)
      .then(res => res.json())
      .then(setProduct)
      .catch(() => setProduct(undefined))
  }, [slug])

  if (product === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Product not found.</p>
          <button onClick={() => navigate(-1)} className="px-4 py-2 rounded-xl bg-gray-900 text-white">Go back</button>
        </div>
      </div>
    )
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-gray-600">Loading...</div>
  }

  return (
    <div className="pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="mt-6 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={product.images?.[activeImage]}
                  alt=""
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-3">
              {product.images?.map((img, i) => (
                <button key={i} onClick={() => setActiveImage(i)} className={`relative aspect-square rounded-xl overflow-hidden border ${activeImage === i ? 'border-gray-900' : 'border-transparent'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">{product.title}</h1>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'fill-yellow-400' : ''}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating} / 5</span>
            </div>
            <p className="mt-6 text-3xl font-extrabold">${product.price.toFixed(2)}</p>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Color</h3>
              <div className="flex items-center gap-3">
                {product.colors?.map((c, i) => (
                  <button key={i} onClick={() => setColor(c.name)} className={`w-8 h-8 rounded-full border-2 ${color === c.name ? 'border-gray-900' : 'border-white'} shadow`} style={{ backgroundColor: c.hex }} />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes?.map((s) => (
                  <button key={s} onClick={() => setSize(s)} className={`px-4 py-2 rounded-xl border ${size === s ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200'}`}>{s}</button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1200) }} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gray-900 text-white hover:bg-gray-800">
                <ShoppingCart className="w-5 h-5" /> Add to bag
              </button>
              <button className="px-6 py-4 rounded-2xl bg-gray-100 hover:bg-gray-200">Buy now</button>
            </div>

            <AnimatePresence>
              {added && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-3 inline-flex items-center gap-2 text-green-600">
                  <Check className="w-4 h-4" /> Added to cart
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-10">
              <h3 className="font-semibold text-gray-900 mb-3">Details</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Free shipping on orders over $100</li>
                <li>• 30-day hassle-free returns</li>
                <li>• Secure checkout with multiple payment options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
