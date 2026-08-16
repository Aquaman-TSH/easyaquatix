import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Downloads() {
  usePageMeta({
    title: 'Downloads | Easy Aquatix',
    description: 'Download the latest Easy Aquatix software and resources, including Aquatic Sentinel for Windows.',
  })

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Downloads</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Get the latest Easy Aquatix software and resources
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Aquatic Sentinel */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7.5v11.25C3 20.35 4.66 22 6.75 22h10.5C19.34 22 21 20.35 21 18.75V7.5M3 7.5h18M3 7.5l3-3h12l3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Aquatic Sentinel</h3>
                    <p className="text-sm text-gray-500 mb-2">Windows</p>
                    <p className="text-sm text-gray-600">
                      Smart aquarium management software for monitoring water parameters, alerts, and maintenance.
                    </p>
                  </div>
                </div>
                <a
                  href="https://github.com/Aquaman-TSH/aquasentinel-releases/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                  Download Beta
                </a>
              </div>
            </div>

            {/* Freshwater Guide Placeholder */}
            <div className="bg-gray-50/50 rounded-2xl border border-gray-200 border-dashed p-8 text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gray-200 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5v3.75m-3.75 0h7.5M12 11.25v3.75m-3.75 0h7.5M5.25 6h13.5A2.25 2.25 0 0121 8.25V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V8.25A2.25 2.25 0 015.25 6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">More downloads coming soon</h3>
              <p className="text-gray-500 text-sm">We're working on additional resources. Check back later.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
