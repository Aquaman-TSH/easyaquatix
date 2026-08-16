import { usePageMeta } from '../hooks/usePageMeta'

export default function Humor() {
  usePageMeta({
    title: 'Humor | Easy Aquatix',
    description: 'Fishkeeping with a smile — comics, stories, and lighthearted takes on the aquarium hobby.',
  })

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#0f3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Humor</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Fishkeeping with a smile
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This section will be used to educate people in fishkeeping in a humorous, whimsical, and fun way.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From tank mishaps to fish personalities, we believe the best lessons come with a laugh.
              Stay tuned for comics, stories, and lighthearted takes on the hobby we all love.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}