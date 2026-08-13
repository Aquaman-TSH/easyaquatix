import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const faqGroups = [
  {
    title: 'Getting Started',
    items: [
      {
        question: 'How do I get started with Aquatic Sentinel?',
        answer: (
          <>
            Download the software from our <Link to="/downloads" className="text-primary-600 font-medium">Downloads page</Link>, install it, and follow the setup wizard to configure your first tank. Most users are up and running in under 5 minutes.
          </>
        ),
      },
      {
        question: 'What platforms does Aquatic Sentinel support?',
        answer: 'Aquatic Sentinel runs locally on Windows. For remote users using phones and other mobile devices, it will run on devices that run Android, iOS, macOS, Linux, and others that support standard web browsers.',
      },
    ],
  },
  {
    title: 'Product & Pricing',
    items: [
      {
        question: 'Is Aquatic Sentinel free?',
        answer: (
          <>
            Yes! Aquatic Sentinel is completely free during the beta period. Download it now from the <Link to="/downloads" className="text-primary-600 font-medium">Downloads page</Link>.
          </>
        ),
      },
      {
        question: 'Can I use Aquatic Sentinel for multiple tanks?',
        answer: 'Absolutely! We have tested it with up to 200 tanks. You can switch between tanks, view them individually, or see a combined dashboard.',
      },
      {
        question: 'Do you offer refunds?',
        answer: (
          <>
            Yes! We offer a 30-day money-back guarantee on all our software products. If you're not satisfied, just <Link to="/contact" className="text-primary-600 font-medium">reach out</Link> and we'll process your refund.
          </>
        ),
      },
    ],
  },
  {
    title: 'Support',
    items: [
      {
        question: 'How do I report a bug?',
        answer: (
          <>
            Contact us through our <Link to="/contact" className="text-primary-600 font-medium">contact form</Link> or open an issue on our GitHub repository. We appreciate all bug reports and feature requests.
          </>
        ),
      },
      {
        question: 'Can I use Aquatic Sentinel with smart home devices?',
        answer: 'Yes. Aquatic Sentinel connects to smart plugs, sensors, and switches over your home network — including Tuya smart devices, Kasa/TP-Link plugs, ESPHome devices, and BLE probes. This enables live device monitoring, automation rules, and alerts.',
      },
      {
        question: 'Can I monitor my aquarium when I am away from home?',
        answer: 'Yes. Remote access opens the same dashboard in any web browser over a secure tunnel. On your phone, save the URL to your home screen and it runs as a standalone app with the interface cached for fast loading.',
      },
    ],
  },
]

export default function FAQ() {
  usePageMeta({
    title: 'FAQ | EasyAquatix',
    description: 'Answers to common questions about EasyAquatix and Aquatic Sentinel — getting started, pricing, platforms, smart device support, and support options.',
  })

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Quick answers about EasyAquatix and Aquatic Sentinel
          </p>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqGroups.map((group) => (
            <div key={group.title} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{group.title}</h2>
              <div className="space-y-4">
                {group.items.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-left hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-900 text-sm pr-4">{faq.question}</span>
                      <svg
                        className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-6">Still have questions? We're happy to help.</p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
