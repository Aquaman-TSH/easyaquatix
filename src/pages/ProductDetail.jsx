import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductBySlug } from '../data/products'
import { useCart } from '../context/CartContext'
import { usePageMeta } from '../hooks/usePageMeta'

const screenshots = [
  { src: '/images/app/dashboard.png', caption: 'Real-time dashboard with live parameters and trends' },
  { src: '/images/app/parameters.png', caption: 'Water parameter tracking and charts' },
  { src: '/images/app/automations.png', caption: 'Automation engine — WHEN/THEN rules with triggers and actions' },
  { src: '/images/app/devices.png', caption: 'Smart device management — plugs, sensors, and switches' },
  { src: '/images/app/power.png', caption: 'Power monitoring, cost estimates, and phantom loads' },
  { src: '/images/app/timers.png', caption: 'Countdown and alarm timers with alerts' },
  { src: '/images/app/schedules.png', caption: 'Maintenance scheduling across all your tanks' },
  { src: '/images/app/assistant.png', caption: 'AI assistant with voice control' },
  { src: '/images/app/settings.png', caption: 'Settings — including remote access' },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [lightbox, setLightbox] = useState(null)

  usePageMeta({
    title: product ? `${product.name} | Easy Aquatix` : 'Product Not Found | Easy Aquatix',
    description: product
      ? product.shortDescription
      : 'The product you are looking for does not exist or has been removed.',
  })

  const jsonLd = product
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: (typeof window !== 'undefined' ? window.location.origin : '') + product.image,
        description: product.description,
        brand: { '@type': 'Brand', name: 'Easy Aquatix' },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: product.rating,
          reviewCount: product.reviewCount,
        },
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      }
    : null

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const stepLightbox = (dir) => {
    if (lightbox === null) return
    const next = (lightbox + dir + screenshots.length) % screenshots.length
    setLightbox(next)
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Product Not Found</h1>
        <p className="text-gray-500 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Shop
        </Link>
      </div>
    )
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i <= Math.round(rating) ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
    return stars
  }

  return (
    <div className="bg-white">
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link to="/shop" className="hover:text-primary-600 transition-colors">Shop</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="relative rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 p-4 flex items-center justify-center">
            {product.badge && (
              <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold tracking-wide uppercase">
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain max-h-[400px]"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-primary-600 font-medium mb-4">
              {product.tagline}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-0.5">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="relative flex items-baseline gap-3 mb-8">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
              <div className="absolute left-20 top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none">
                <img
                  src="/images/shop/price-badge.svg"
                  alt="Free during Beta"
                  className="w-60 h-auto opacity-85"
                />
              </div>
            </div>

            {/* Add to Cart */}
            <a
              href="https://github.com/Aquaman-TSH/aquasentinel-releases/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 active:bg-primary-800 transition-colors shadow-lg shadow-primary-600/25 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10y-2v4l3 3m0 0l-3-3m3 3v2a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v2m-2 0h2a2 2 0 012 2v2m-4 0h2m2-4h-2" />
              </svg>
              Download Beta Now
            </a>

            {/* Platform & Version */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {product.platform}
              </div>
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Take a Look Inside</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Real screenshots of Aquatic Sentinel in action
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((shot, index) => (
              <button
                key={shot.src}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 text-left"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3 bg-white">
                  <p className="text-sm font-medium text-gray-700">{shot.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && screenshots[lightbox] && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
        >
          <button
            onClick={closeLightbox}
            aria-label="Close screenshot viewer"
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              stepLightbox(-1)
            }}
            aria-label="Previous screenshot"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[lightbox].src}
              alt={screenshots[lightbox].caption}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <p className="text-center text-white/90 text-sm mt-4">
              {screenshots[lightbox].caption}
            </p>
            <p className="text-center text-white/50 text-xs mt-1">
              {lightbox + 1} / {screenshots.length}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              stepLightbox(1)
            }}
            aria-label="Next screenshot"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
