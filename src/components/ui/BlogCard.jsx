import { useState } from 'react'
import { Link } from 'react-router-dom'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogCard({ post }) {
  const {
    slug,
    title,
    excerpt,
    image,
    category,
    author,
    date,
    readTime,
  } = post

  const [imgFailed, setImgFailed] = useState(false)

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden">
        {image && !imgFailed ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
            <svg className="w-16 h-16 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5" />
            </svg>
          </div>
        )}

        {category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-teal-700 rounded-full">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">{excerpt}</p>

        {/* Meta */}
        <div className="flex items-center justify-between gap-2 text-xs text-gray-400 mb-4">
          <span className="truncate">{author}</span>
          <span className="whitespace-nowrap">{formatDate(date)}</span>
          <span className="whitespace-nowrap">{readTime}</span>
        </div>

        {/* Read More */}
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-teal-600 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors mt-auto"
        >
          Read More
          <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
