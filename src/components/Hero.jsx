import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Elevate your stride
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">with iconic sneakers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg text-gray-600 max-w-xl"
          >
            Explore limited editions, everyday essentials, and the trends redefining footwear culture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#latest" className="px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800">Shop now</a>
            <a href="#trending" className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200">Browse drops</a>
          </motion.div>
        </div>
        <div className="relative h-[420px] sm:h-[520px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Spline scene="https://prod.spline.design/IdQWQy3hU6Hj3k1A/scene.splinecode" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
