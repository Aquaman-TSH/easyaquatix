import { useState } from 'react'
import { categories, getProductsByCategory } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')

  usePageMeta({
    title: 'Shop | Easy Aquatix',
    description: 'Explore EasyAquatix software tools and guides to build and maintain the perfect aquarium.',
  })
  const filteredProducts = getProductsByCategory(activeCategory)

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Products</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Software tools and guides to help you build and maintain the perfect aquarium
          </p>
        </div>
      </section>

      {/* Category Filter + Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/25'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {cat.name}
                <span className={`ml-2 text-xs ${
                  activeCategory === cat.id ? 'text-primary-200' : 'text-gray-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
