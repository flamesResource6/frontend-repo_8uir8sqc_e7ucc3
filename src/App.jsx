import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Showcase from './components/Showcase'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Showcase />
      </main>
      <footer className="border-t border-gray-100 py-10 mt-10" id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} SneakPeek. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
