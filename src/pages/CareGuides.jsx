import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function CareGuides() {
  usePageMeta({
    title: 'Care Guides | EasyAquatix',
    description: 'Comprehensive aquarium care guides for every level — cycling, water quality, maintenance, and advanced topics.',
  })

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Care Guides</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Comprehensive guides for every level of aquarium enthusiast
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Getting Started */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  to="/blog/complete-guide-cycling-aquarium"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">The Complete Guide to Cycling a New Aquarium</h3>
                  <p className="text-sm text-gray-500">Learn how to properly cycle your new aquarium to establish a healthy biological filter.</p>
                </Link>
                <Link
                  to="/blog/top-10-freshwater-fish-beginners"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Top 10 Freshwater Fish for Beginners</h3>
                  <p className="text-sm text-gray-500">Discover the hardiest, most beginner-friendly freshwater fish species.</p>
                </Link>
                <Link
                  to="/blog/top-5-beginner-fish-care-guide"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Top 5 Beginner Fish: The Complete Care Guide</h3>
                  <p className="text-sm text-gray-500">Full care profiles for bettas, neon tetras, corydoras, guppies, and zebra danios — with photos.</p>
                </Link>
                <Link
                  to="/blog/understanding-water-parameters"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Understanding Water Parameters</h3>
                  <p className="text-sm text-gray-500">Master the key water parameters every aquarist needs to know.</p>
                </Link>
                <Link
                  to="/blog/10-common-beginner-fishkeeping-mistakes"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">10 Common Beginner Mistakes</h3>
                  <p className="text-sm text-gray-500">The ten mistakes behind most beginner tank failures — and how to avoid each one.</p>
                </Link>
                <Link
                  to="/blog/shrimp-keeping-guide-caridina-vs-neocaridina"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">The Complete Shrimp-Keeper's Guide</h3>
                  <p className="text-sm text-gray-500">Caridina vs. Neocaridina, tank setup, feeding, and breeding for your first colony.</p>
                </Link>
                <Link
                  to="/hardware"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Recommended Hardware</h3>
                  <p className="text-sm text-gray-500">The inexpensive gear we actually recommend — thermometers, monitors, heaters, and more.</p>
                </Link>
              </div>
            </div>

            {/* Maintenance */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Maintenance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  to="/blog/10-minute-weekly-water-change-routine"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">The 10-Minute Weekly Water Change Routine</h3>
                  <p className="text-sm text-gray-500">A simple routine that keeps your tank healthy without taking up your whole day.</p>
                </Link>
                <Link
                  to="/blog/fall-tank-care-checklist"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Fall Tank Care Checklist</h3>
                  <p className="text-sm text-gray-500">Seasonal checklist to keep your aquarium stable through fall and winter.</p>
                </Link>
                <Link
                  to="/blog/5-parameter-alerts-save-fish-lives"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">5 Parameter Alerts That Save Fish Lives</h3>
                  <p className="text-sm text-gray-500">The five critical alerts that catch aquarium disasters before it's too late.</p>
                </Link>
                <Link
                  to="/blog/complete-algae-control-guide"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">The Complete Algae Control Guide</h3>
                  <p className="text-sm text-gray-500">Identify algae types, find the root cause, and starve it for good.</p>
                </Link>
                <Link
                  to="/blog/deep-clean-your-aquarium-30-minute-refresh"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Deep-Clean Your Aquarium</h3>
                  <p className="text-sm text-gray-500">A 30-minute monthly refresh that cleans the tank without crashing the cycle.</p>
                </Link>
                <Link
                  to="/blog/vacation-care-keeping-aquarium-safe-while-away"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Vacation Care for Your Aquarium</h3>
                  <p className="text-sm text-gray-500">The pre-trip checklist that keeps your tank stable while you're away.</p>
                </Link>
                <Link
                  to="/blog/summer-tank-care-beating-the-heat"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Summer Tank Care</h3>
                  <p className="text-sm text-gray-500">Beating the heat, evaporation, and storm-related power outages.</p>
                </Link>
              </div>
            </div>

            {/* Water Quality */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Water Quality</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  to="/blog/gh-kh-water-hardness-explained"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">GH & KH: Water Hardness Explained</h3>
                  <p className="text-sm text-gray-500">The hardness guide aquarists forget — and the hidden cause of most pH crashes.</p>
                </Link>
                <Link
                  to="/blog/how-often-should-you-test-aquarium-water"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">How Often Should You Test Your Water?</h3>
                  <p className="text-sm text-gray-500">A practical testing cadence for every stage of a tank's life.</p>
                </Link>
              </div>
            </div>

            {/* Advanced */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  to="/blog/reef-vs-planted-first-advanced-setup"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Reef vs. Planted: Choosing Your First Advanced Setup</h3>
                  <p className="text-sm text-gray-500">An honest comparison to help you pick the right advanced aquarium path.</p>
                </Link>
                <Link
                  to="/blog/multi-tank-tracking-without-losing-your-mind"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Multi-Tank Setup: How to Track 3+ Tanks</h3>
                  <p className="text-sm text-gray-500">A system for keeping multiple tanks tracked, scheduled, and healthy.</p>
                </Link>
                <Link
                  to="/blog/why-cloud-sync-api-telemetry-matter"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Why Cloud Sync and API Telemetry Matter</h3>
                  <p className="text-sm text-gray-500">When you're managing delicate systems, local-only logs are a disaster waiting to happen.</p>
                </Link>
                <Link
                  to="/blog/turn-your-aquarium-into-a-smart-tank"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Turn Your Aquarium Into a Smart Tank</h3>
                  <p className="text-sm text-gray-500">A beginner's automation setup — sensing, alerts, and smart plugs, step by step.</p>
                </Link>
                <Link
                  to="/blog/aquascaping-101-low-tech-to-high-tech"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Aquascaping 101</h3>
                  <p className="text-sm text-gray-500">From low-tech to high-tech planted tanks — pick your path and start scaping.</p>
                </Link>
                <Link
                  to="/blog/why-every-tank-needs-a-quarantine-tank"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Why Every Tank Needs a Quarantine Tank</h3>
                  <p className="text-sm text-gray-500">The best insurance in the hobby — and how to set one up for under $50.</p>
                </Link>
                <Link
                  to="/blog/nano-pico-tanks-small-space-setups"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Nano & Pico Tanks</h3>
                  <p className="text-sm text-gray-500">Big fun in small spaces — and why small tanks need to be run like big ones.</p>
                </Link>
                <Link
                  to="/blog/aquatic-sentinel-for-beginners"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Aquatic Sentinel for Beginners</h3>
                  <p className="text-sm text-gray-500">Start smart, not overwhelmed — how our software turns testing chaos into a simple system.</p>
                </Link>
                <Link
                  to="/blog/aquatic-sentinel-advanced-hobbyists-guide"
                  className="block bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-teal-200 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-teal-600">Aquatic Sentinel: The Advanced Guide</h3>
                  <p className="text-sm text-gray-500">Threshold engineering, trend analysis, scheduling systems, and PDF workflows for serious hobbyists.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
