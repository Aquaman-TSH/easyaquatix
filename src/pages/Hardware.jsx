import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const hardwareItems = [
  {
    category: 'Temperature',
    name: 'Digital Probe Thermometer',
    priceRange: '$8-12',
    why: 'The cheapest insurance in the hobby. A battery-powered probe thermometer gives you an instant, accurate read so you know the tank is in the right range in seconds — and it works for spot-checking during water changes or acclimation.',
    lookFor: 'Suction-cup probe, large backlit display, Fahrenheit/Celsius toggle, and a reading that holds so you can read it away from the tank.',
    beginner: true,
  },
  {
    category: 'Temperature',
    name: 'Temperature Monitor with Alarm',
    priceRange: '$15-25',
    why: 'A heater can fail at 2 AM while everyone is asleep. A temperature monitor with a wired probe tracks the water continuously and sounds a high/low alarm the moment it drifts out of range — the difference between a fix and a crash.',
    lookFor: 'Min/max memory, adjustable high and low alarm thresholds, a probe that reads inside the tank, and battery backup so it still alerts during a power outage.',
    beginner: true,
  },
  {
    category: 'Heating',
    name: 'Adjustable Submersible Heater',
    priceRange: '$15-30',
    why: 'Temperature swings stress fish more than almost anything else. A reliable heater with a thermostat holds the tank at your target temp and turns itself off if the water gets too warm.',
    lookFor: 'Wattage matched to your tank (roughly 5 watts per gallon), an adjustable set point, automatic shutoff, and a known brand with a guard option for glass models.',
    beginner: false,
  },
  {
    category: 'Maintenance',
    name: 'Gravel Vacuum / Siphon',
    priceRange: '$10-15',
    why: 'The weekly water change is the single most important routine in fishkeeping, and a gravel vacuum is what makes it a ten-minute task. It drains water while pulling waste out of the substrate in one pass.',
    lookFor: 'Wide tube that reaches the bottom, a one-hand primer bulb, flow control, and a model sized to your tank so draining is quick but not violent.',
    beginner: false,
  },
]

export default function Hardware() {
  usePageMeta({
    title: 'Recommended Hardware | EasyAquatix',
    description: 'The inexpensive aquarium hardware we actually recommend for beginners — digital thermometer, temperature monitor with alarm, submersible heater, and gravel vacuum.',
  })

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Recommended Hardware</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            The inexpensive gear we actually recommend for beginners — everything here costs less than you think
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            You do not need a lot of gear to keep a healthy aquarium, but you do need a few good pieces of
            hardware. Every item below is beginner-friendly, inexpensive, and earns its place in a first tank.
            We started with the four that matter most — new picks will be added over time.
          </p>
          <p className="mt-4 text-gray-500">
            Want the reasoning behind each one? Read{' '}
            <Link to="/blog/inexpensive-aquarium-hardware-beginners" className="text-primary-600 font-medium underline underline-offset-2 hover:text-primary-700">
              Inexpensive Aquarium Hardware Every Beginner Should Own
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Items */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hardwareItems.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col hover:shadow-md hover:border-teal-200 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <h2 className="mt-3 text-xl font-bold text-gray-900">{item.name}</h2>
                  </div>
                  <span className="text-sm font-semibold text-gray-500 whitespace-nowrap bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                    ~{item.priceRange}
                  </span>
                </div>

                <div className="space-y-4 text-sm text-gray-600 flex-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Why it matters</h3>
                    <p>{item.why}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">What to look for</h3>
                    <p>{item.lookFor}</p>
                  </div>
                </div>

                {item.beginner && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full self-start">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Must-have for your first tank
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Closing note */}
          <div className="mt-12 bg-gray-50 border border-gray-100 rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">More picks on the way</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              We are testing and adding new recommendations over time — test kits, filters, lighting, and more.
              If there is a piece of gear you want us to review, let us know through the contact page.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/blog/inexpensive-aquarium-hardware-beginners"
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-teal-600 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors"
              >
                Read the hardware guide
              </Link>
              <Link
                to="/care-guides"
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:border-teal-200 hover:text-teal-600 transition-colors"
              >
                Browse care guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
