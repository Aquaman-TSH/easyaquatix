import { useState } from 'react'

export default function NewsletterCTA({
  title = 'Stay in the Flow',
  subtitle = 'Get the latest aquarium tips, product updates, and exclusive offers delivered to your inbox.',
}) {
  const [email, setEmail] = useState('')
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const cleanEmail = email.trim()
    if (!cleanEmail) return
    setSubmitStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/mljrngpr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: cleanEmail,
          subject: 'Newsletter Signup',
          message: 'Subscription request from the homepage newsletter form.',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
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
                disabled={submitStatus === 'loading'}
                className="px-8 py-3 rounded-lg bg-white text-primary-700 font-semibold text-sm hover:bg-primary-50 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitStatus === 'loading' && (
                  <svg
                    className="animate-spin h-4 w-4 text-primary-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                {submitStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-primary-100 text-sm font-medium">
                Thanks for subscribing — welcome aboard!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-200 text-sm font-medium">
                Couldn't subscribe right now. Please try again.
              </p>
            )}
            <p className="mt-4 text-primary-200 text-xs">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
