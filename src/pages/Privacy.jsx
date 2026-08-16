import { usePageMeta } from '../hooks/usePageMeta'

export default function Privacy() {
  usePageMeta({
    title: 'Privacy Policy | Easy Aquatix',
    description: "Easy Aquatix's privacy policy — how we collect, use, and protect your information.",
  })

  const sections = [
    {
      title: '1. Information We Collect',
      body: 'We collect information you provide directly to us, such as your name and email address when you contact us, sign up for our newsletter, or place an order. When you purchase a product, payment details are processed by our payment provider, Lemon Squeezy; we do not store or process your credit card information ourselves.',
    },
    {
      title: '2. How We Use Your Information',
      body: 'We use the information we collect to provide and improve our products, respond to your inquiries, process your orders and downloads, send you newsletters you have requested, and send transactional or service-related communications. We do not sell your personal information.',
    },
    {
      title: '3. Sharing of Information',
      body: 'We share information only with trusted service providers who help us operate this website and deliver our products. These include Lemon Squeezy (order processing), Formspree (contact form delivery), Buttondown (newsletter delivery), and Cloudflare (website hosting). These providers are permitted to use your information only to provide services on our behalf.',
    },
    {
      title: '4. Cookies and Analytics',
      body: 'Our website may use cookies and similar technologies to understand how visitors use the site and to keep the site functioning properly. We do not use cookies to sell advertising, and we do not track you across other websites.',
    },
    {
      title: '5. Data Security and Retention',
      body: 'We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. We retain your information only as long as necessary to provide our services, comply with legal obligations, and resolve disputes.',
    },
    {
      title: '6. Your Rights and Choices',
      body: 'You may request access to, correction of, or deletion of the personal information we hold about you. You may also unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email we send. To exercise any of these rights, contact us at support@easyaquatix.com.',
    },
    {
      title: "7. Children's Privacy",
      body: "Our website and products are not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.",
    },
    {
      title: '8. Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. We will post any changes on this page with a revised "Last Updated" date. We encourage you to review this page periodically.',
    },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-lg text-primary-100">Last Updated: August 12, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 leading-relaxed mb-8">
            This Privacy Policy explains how Easy Aquatix ("we," "us," or "our") collects, uses, and
            protects your information when you visit easyaquatix.com or use our products and services.
          </p>
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 border border-gray-100 rounded-xl">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or your personal information, contact us at{' '}
              <a href="mailto:support@easyaquatix.com" className="text-primary-600 hover:text-primary-700">
                support@easyaquatix.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
