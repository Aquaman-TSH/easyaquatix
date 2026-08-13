import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

function StarRating({ rating = 0 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-amber-400' : 'text-gray-200'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const { addItem } = useCart()

  const handleViewDetails = () => {
    navigate(`/product/${slug}`)
    window.scrollTo(0, 0)
  }

  const {
    slug,
    name,
    description,
    price,
    originalPrice,
    image,
    badge,
    rating = 0,
    reviewCount = 0,
  } = product

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
        )}

        {badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-teal-600 text-white rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-1">{description}</p>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-2 mb-3">
            <StarRating rating={rating} />
            <span className="text-xs text-gray-400">({reviewCount})</span>
          </div>
        )}

        {/* Price */}
        <div className="relative flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-teal-600">${price?.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
          )}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none">
            <img
              src="/images/shop/price-badge.svg"
              alt="Free during Beta"
              className="w-36 h-auto opacity-90"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleViewDetails}
            className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-teal-600 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors"
          >
            View Details
          </button>
          <a
            href="https://github.com/Aquaman-TSH/aquasentinel-releases/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-colors"
          >
            Download Beta Now
          </a>
        </div>
      </div>
    </div>
  )
}
