import { usePageMeta } from '../hooks/usePageMeta'

export default function Terms() {
  usePageMeta({
    title: 'Terms of Service | Easy Aquatix',
    description: 'The terms of service that govern your use of easyaquatix.com and EasyAquatix products, including Aquatic Sentinel.',
  })

  const sections = [
    {
      title: '1. Acceptance of Terms',
      body: 'By accessing this website or purchasing or using any EasyAquatix product, including Aquatic Sentinel, you agree to these Terms of Service. If you do not agree, please do not use the website or our products.',
    },
    {
      title: '2. Description of Services',
      body: "EasyAquatix provides digital products for aquarium enthusiasts, including aquarium management software and guides. Aquatic Sentinel is currently offered free of charge during its beta period and is designed to run locally on Windows™. Future versions, editions, and pricing are subject to change.",
    },
    {
      title: '3. Purchases and Payments',
      body: "All purchases are processed through our payment provider, Lemon Squeezy. By completing a purchase, you agree to Lemon Squeezy's terms as well. You are responsible for providing accurate payment and contact information. Keys, downloads, and license details are delivered to the email address you provide at checkout.",
    },
    {
      title: '4. Software License',
      body: 'When you purchase or download our software, you receive a limited, non-exclusive, non-transferable license to use it for your own personal or business purposes. You may not redistribute, resell, decompile, reverse engineer, or create derivative works from our software unless expressly permitted. We retain all rights not explicitly granted to you.',
    },
    {
      title: '5. Beta Software',
      body: 'Aquatic Sentinel is provided "as is" during beta and may contain bugs, incomplete features, or unexpected behavior. Free beta access does not create any expectation of continued availability, support, or a future free tier.',
    },
    {
      title: '6. Refunds',
      body: 'We offer a 30-day money-back guarantee on paid products. To request a refund, contact us at support@easyaquatix.com within 30 days of purchase. Refund processing is handled through our payment provider.',
    },
    {
      title: '7. User Conduct',
      body: 'You agree not to misuse our website or products, attempt to interfere with their operation, or use them for any unlawful purpose. You may not share, resell, or bypass licensing protections of our software.',
    },
    {
      title: '8. Intellectual Property',
      body: 'The EasyAquatix name, logo, website content, and our software and guides are protected by copyright, trademark, and other intellectual property laws. You may not use our branding or content without our prior written permission.',
    },
    {
      title: '9. Disclaimer of Warranties',
      body: 'Our website and products are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our products will be error-free or that the results of using them will be correct, and aquarium-keeping advice should always be verified.',
    },
    {
      title: '10. Limitation of Liability',
      body: 'To the maximum extent permitted by law, EasyAquatix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising out of or related to your use of the website or products. Our total liability shall not exceed the amount you paid us, if any, for the product in question.',
    },
    {
      title: '11. Indemnification',
      body: 'You agree to indemnify and hold harmless EasyAquatix and its owners, employees, and agents from any claims, damages, liabilities, and expenses arising out of your use of the website or products or your violation of these Terms.',
    },
    {
      title: '12. Governing Law',
      body: 'These Terms are governed by the laws of the jurisdiction in which EasyAquatix operates, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts in that location for any disputes.',
    },
    {
      title: '13. Changes to These Terms',
      body: 'We may update these Terms from time to time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of the website or products after changes take effect constitutes acceptance of the revised Terms.',
    },
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-lg text-primary-100">Last Updated: August 12, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 leading-relaxed mb-8">
            These Terms of Service ("Terms") govern your use of easyaquatix.com and the products and services
            provided by EasyAquatix, including the Aquatic Sentinel software.
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
              Questions about these Terms? Contact us at{' '}
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
