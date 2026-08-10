import { useState } from 'react'
import { Link } from 'react-router-dom'
import { posts, getAllCategories } from '../data/blog'
import BlogCard from '../components/ui/BlogCard'
import NewsletterCTA from '../components/ui/NewsletterCTA'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = getAllCategories()

  // Newest first, newest featured post gets the hero slot
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
  const featured = sortedPosts.find((p) => p.featured) || sortedPosts[0]
  const rest = sortedPosts.filter((p) => p.slug !== featured?.slug)

  const q = query.trim().toLowerCase()
  const filtered = rest.filter((post) => {
    const matchesCategory = category === 'All' || post.category === category
    const matchesQuery =
      !q ||
      [post.title, post.excerpt, post.content, post.tags?.join(' ')]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(q))
    return matchesCategory && matchesQuery
  })

  const resetFilters = () => {
    setQuery('')
    setCategory('All')
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Blog & Resources</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Tips, guides, and insights to help you become a better aquarist
          </p>
          {/* Search */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides, tips, and species..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/15 border border-white/25 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featured && (
          <section className="pt-12">
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300"
            >
              {/* Image side */}
              <div className="relative aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                {featured.image && (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                )}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-primary-700 rounded-full">
                  Featured
                </span>
              </div>
              {/* Content side */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="px-2.5 py-1 font-semibold bg-teal-50 text-teal-700 rounded-full">
                    {featured.category}
                  </span>
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary-600 font-semibold">
                  Read the guide
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* Toolbar */}
        <section className="pt-12 pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {['All', ...categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            </p>
          </div>
        </section>

        {/* Grid / Empty state */}
        <section className="py-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-5">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500 mb-6">
                {category !== 'All' || query
                  ? 'Try a different search term or category.'
                  : 'New articles are on the way.'}
              </p>
              {(category !== 'All' || query) && (
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </section>
      </div>

      {/* Newsletter */}
      <NewsletterCTA
        title="Never Miss a Guide"
        subtitle="Join the EasyAquatix newsletter for aquarium tips, product updates, and exclusive offers — straight to your inbox."
      />
    </div>
  )
}
