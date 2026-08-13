import { Link } from 'react-router-dom'
import { getFeaturedProducts } from '../data/products'
import { getRecentPosts } from '../data/blog'
import ProductCard from '../components/ui/ProductCard'
import BlogCard from '../components/ui/BlogCard'
import NewsletterCTA from '../components/ui/NewsletterCTA'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import { Bubbles, BubbleStream } from '../components/ui/AquaticAnimations'
import { useInView } from '../hooks/useInView'
import { usePageMeta } from '../hooks/usePageMeta'

function AnimSection({ children, className = '', animClass = 'anim-hidden', delay = '' }) {
  const [ref, isVisible] = useInView()
  return (
    <div ref={ref} className={`${animClass} ${isVisible ? 'anim-visible' : ''} ${delay} ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const recentPosts = getRecentPosts(3)

  usePageMeta({
    title: 'EasyAquatix - Smart Aquarium Solutions',
    description: 'EasyAquatix helps aquarists monitor water parameters, track maintenance, and keep aquatic environments thriving with intelligent software and expert guides.',
  })

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0e2a4a] to-[#e8f4f8] text-white">
        {/* Animated background orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl float-slow" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-300 rounded-full blur-3xl float" />
        </div>

        {/* Bubbles */}
        <Bubbles count={10} />

        {/* Airstone bubble stream on the right */}
        <BubbleStream count={160} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-28 sm:pb-36 lg:pb-44">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="shimmer-text">Smart Solutions for</span>{' '}
              <span className="shimmer-text">Your Aquarium</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-2xl leading-relaxed">
              Monitor water parameters, track maintenance, and keep your aquatic environment thriving with our intelligent software and expert guides.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-white text-primary-700 font-semibold text-sm hover:bg-primary-50 transition-colors shadow-lg pulse-glow"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 2880 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <g className="wave-anim" style={{ width: '200%' }}>
              <path d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96V120H0Z" fill="#fafbfc"/>
              <path d="M1440,64L1488,58.7C1536,53,1632,43,1728,48C1824,53,1920,75,2016,80C2112,85,2208,75,2304,64C2400,53,2496,43,2592,48C2688,53,2784,75,2832,85.3L2880,96V120H1440Z" fill="#fafbfc"/>
            </g>
          </svg>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="relative -mt-1 bg-[#fafbfc] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimSection delay="anim-delay-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="mt-1 text-sm text-gray-500">Tanks Monitored</p>
            </AnimSection>
            <AnimSection delay="anim-delay-2">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600">
                <AnimatedCounter end={250} suffix="+" />
              </div>
              <p className="mt-1 text-sm text-gray-500">Water Tests Logged</p>
            </AnimSection>
            <AnimSection delay="anim-delay-3">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="mt-1 text-sm text-gray-500">Parameters Tracked</p>
            </AnimSection>
            <AnimSection delay="anim-delay-4">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="mt-1 text-sm text-gray-500">Aquatic Lives Saved</p>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ===== Featured Products ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
              Our most popular tools trusted by aquarists worldwide
            </p>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <AnimSection key={product.id} delay={`anim-delay-${i + 1}`}>
                <ProductCard product={product} />
              </AnimSection>
            ))}
          </div>
          <AnimSection className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View all products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimSection>
        </div>
      </section>

      {/* ===== Alternating Features ===== */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why EasyAquatix?</h2>
            <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
              We are dedicated to making products that make aquarium keeping easier and more intelligent with the goal of making you more successful and happier as a aquarist
            </p>
          </AnimSection>

          {/* Feature 1 - image left */}
          <AnimSection animClass="anim-hidden-left" className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl transform rotate-3 float" />
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Dashboard</h3>
                <p className="text-gray-500">All your water parameters at a glance — pH, ammonia, nitrite, nitrate, temperature, and more.</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Monitoring</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Track every critical water parameter in real-time. Our intelligent dashboard visualizes trends over time so you can spot problems before they become emergencies.
              </p>
              <ul className="space-y-3">
                {['Instant alerts when parameters drift', 'Historical trend analysis', 'Custom safe-range thresholds'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimSection>

          {/* Feature 2 - image right */}
          <AnimSection animClass="anim-hidden-right" className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-200 to-primary-200 rounded-3xl transform -rotate-3 float-slow" />
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Knowledge Base</h3>
                <p className="text-gray-500">Step-by-step guides from cycling your first tank to advanced aquascaping techniques.</p>
              </div>
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Guides</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comprehensive guides written by experienced aquarists. From beginner basics to advanced techniques, we help you build confidence at every level.
              </p>
              <ul className="space-y-3">
                {['Beginner to advanced topics', 'Step-by-step instructions', 'Troubleshooting common issues'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimSection>

          {/* Feature 3 - image left */}
          <AnimSection animClass="anim-hidden-left" className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl transform rotate-2 float" />
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Setup</h3>
                <p className="text-gray-500">Get started in minutes with our intuitive, lightweight software.</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Setup</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Get started in minutes. Our software is intuitive, lightweight, and works on all major platforms. No complicated configuration — just sign up and start monitoring.
              </p>
              <ul className="space-y-3">
                {['No complex configuration', 'Cloud-synced across devices'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ===== Latest Blog Posts ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Latest from the Blog</h2>
            <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
              Tips, guides, and insights for aquarists of all levels
            </p>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, i) => (
              <AnimSection key={post.id} delay={`anim-delay-${i + 1}`}>
                <BlogCard post={post} />
              </AnimSection>
            ))}
          </div>
          <AnimSection className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Read all articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimSection>
        </div>
      </section>

      {/* ===== Newsletter CTA ===== */}
      <AnimSection>
        <NewsletterCTA />
      </AnimSection>
    </div>
  )
}
