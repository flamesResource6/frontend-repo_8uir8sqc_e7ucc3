import { Link } from 'react-router-dom'
import { ShoppingBag, Search, Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Sparkles className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-extrabold tracking-tight text-gray-900 text-lg">SneakPeek</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <a href="#latest" className="hover:text-gray-900">Latest</a>
          <a href="#trending" className="hover:text-gray-900">Trending</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
            <Search className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Search</span>
          </button>
          <button className="relative p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
          </button>
          <button className="md:hidden p-2 rounded-xl bg-gray-100">
            <Menu className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  )
}
