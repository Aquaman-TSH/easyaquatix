import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found | Easy Aquatix',
    description: 'The page you are looking for does not exist or has been moved.',
  })

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Wave Illustration */}
      <div className="mb-8">
        <svg
          className="w-64 h-40 text-primary-200"
          viewBox="0 0 256 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Water waves */}
          <path
            d="M0 100 C32 80, 64 120, 96 100 C128 80, 160 120, 192 100 C224 80, 256 120, 256 100 V160 H0Z"
            className="fill-primary-100"
          />
          <path
            d="M0 110 C40 90, 80 130, 120 110 C160 90, 200 130, 240 110 L256 115 V160 H0Z"
            className="fill-primary-200"
          />
          <path
            d="M0 125 C48 105, 96 145, 144 125 C192 105, 240 145, 256 130 V160 H0Z"
            className="fill-primary-300"
          />
          {/* Fish */}
          <g transform="translate(140, 55)" className="fill-primary-400">
            <ellipse cx="0" cy="0" rx="18" ry="10" />
            <polygon points="22,-12 32,0 22,12" />
            <circle cx="-8" cy="-2" r="2" fill="white" />
          </g>
          {/* Bubbles */}
          <circle cx="80" cy="60" r="4" className="fill-primary-200" />
          <circle cx="90" cy="45" r="3" className="fill-primary-200" />
          <circle cx="85" cy="30" r="2" className="fill-primary-200" />
          {/* 404 text */}
          <text
            x="128"
            y="85"
            textAnchor="middle"
            className="fill-primary-400"
            style={{ fontSize: '36px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}
          >
            404
          </text>
        </svg>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Looks like this page drifted away
      </h1>
      <p className="text-lg text-gray-500 mb-10 max-w-md">
        The page you're looking for doesn't exist or has been moved to deeper waters.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Go Home
      </Link>
    </div>
  )
}
