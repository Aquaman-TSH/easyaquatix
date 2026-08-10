import { useState } from 'react'

export default function NewsletterCTA({
  title = 'Stay in the Flow',
  subtitle = 'Get the latest aquarium tips, product updates, and exclusive offers delivered to your inbox.',
}) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-400 rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-primary-100 text-lg max-w-xl mx-auto mb-8">{subtitle}</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-lg bg-white/15 border border-white/25 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-white text-primary-700 font-semibold text-sm hover:bg-primary-50 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="mt-4 text-primary-100 text-sm font-medium">
                Thanks for subscribing — welcome aboard!
              </p>
            )}
            <p className="mt-4 text-primary-200 text-xs">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
