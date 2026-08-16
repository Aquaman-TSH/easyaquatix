import { Link } from 'react-router-dom'
import NewsletterCTA from '../components/ui/NewsletterCTA'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Support() {
  usePageMeta({
    title: 'Support Center | Easy Aquatix',
    description: 'Find answers, get help, and learn how to make the most of Easy Aquatix products. Contact support within 24 hours.',
  })

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Support Center</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Find answers, get help, and learn how to make the most of Easy Aquatix products
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">How can we help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75m19.5 0V9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 9V6.75" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Support</h3>
              <p className="text-gray-500 text-sm mb-5">
                Have a specific question? Reach out to our support team and we'll get back to you fast.
              </p>
              <Link
                to="/contact"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Send a message
              </Link>
            </div>

            {/* Documentation */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 0112 3c3.234 0 6.184.997 8.5 2.64A8.978 8.978 0 0121 9.96c0 1.64-.69 3.17-1.804 4.29l-.25.25a.75.75 0 00-.205.568l-.02.172a.75.75 0 00.342.65l.018.01a.75.75 0 01-.343.65l-.018.01c-.34.181-.74.282-1.177.282h-.017a.75.75 0 01-.627-.872l.02-.083a.75.75 0 00-.504-.565.75.75 0 01-.504-.565l.02-.083a.75.75 0 00-.627-.872h-.017c-.437 0-.837-.101-1.177-.282a.75.75 0 01-.343-.65l.018-.01a.75.75 0 00-.205-.568l-.25-.25A8.978 8.978 0 003.5 9.96c0-2.314.827-4.519 2.247-6.228A9.004 9.004 0 0112 3.002c1.15.007 2.261.233 3.287.668.967.412 1.84.97 2.59 1.65l-.037-.003v-.03a.75.75 0 011.06-0l.037.003c.75-.68 1.623-1.238 2.59-1.65 1.026-.435 2.137-.66 3.287-.667z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation</h3>
              <p className="text-gray-500 text-sm mb-5">
                Browse our guides and tutorials to get started quickly and troubleshoot common issues.
              </p>
              <Link
                to="/care-guides"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Browse guides
              </Link>
            </div>

            {/* Downloads */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7.5v11.25C3 20.35 4.66 22 6.75 22h10.5C19.34 22 21 20.35 21 18.75V7.5M3 7.5h18M3 7.5l3-3h12l3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Downloads</h3>
              <p className="text-gray-500 text-sm mb-5">
                Get the latest versions of our software and resources.
              </p>
              <Link
                to="/downloads"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                View downloads
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-left hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm pr-4">How do I get started with Aquatic Sentinel?</span>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                Download the software from our <Link to="/downloads" className="text-primary-600 font-medium">Downloads page</Link>, install it, and follow the setup wizard to configure your first tank. Most users are up and running in under 5 minutes.
              </div>
            </details>

            <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-left hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm pr-4">Is Aquatic Sentinel free?</span>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                Yes! Aquatic Sentinel is completely free during the beta period. Download it now from the Downloads page.
              </div>
            </details>

            <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-left hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm pr-4">What platforms are supported?</span>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                Currently, Aquatic Sentinel is available for Windows. macOS and Linux versions are planned for future releases.
              </div>
            </details>

            <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-left hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm pr-4">How do I report a bug?</span>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                Contact us through our <Link to="/contact" className="text-primary-600 font-medium">contact form</Link> or open an issue on our GitHub repository. We appreciate all bug reports and feature requests.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterCTA
        title="Need More Help?"
        subtitle="Reach out directly and our support team will get back to you within 24 hours."
      />
    </div>
  )
}
