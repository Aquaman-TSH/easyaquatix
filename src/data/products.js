export const products = [
  {
    id: 1,
    name: 'Aquatic Sentinel',
    slug: 'aquatic-sentinel',
    tagline: 'Smart Aquarium Monitoring Software',
    description: 'Aquatic Sentinel is a powerful desktop application that helps you monitor and manage your aquarium with ease. Track water parameters, set alerts, log maintenance, and keep your aquatic environment thriving.',
    shortDescription: 'Monitor water parameters, set alerts, and manage your aquarium with intelligent software.',
    price: 49.99,
    originalPrice: 69.99,
    category: 'software',
    features: [
      'Real-time water parameter tracking',
      'Customizable alerts and notifications',
      'Maintenance scheduling and reminders',
      'Historical data logging and charts',
      'Multi-tank support',
      'Export reports as PDF'
    ],
    image: '/images/products/aquatic-sentinel.svg',
    images: ['/images/products/aquatic-sentinel.svg'],
    badge: 'Best Seller',
    rating: 4.8,
    reviewCount: 124,
    version: '2.1.0',
    platform: 'Windows, macOS, Linux',
    lemonSqueezyVariantId: 'YOUR_VARIANT_ID_HERE',
  },
  {
    id: 2,
    name: 'Aquatic Sentinel Pro',
    slug: 'aquatic-sentinel-pro',
    tagline: 'Professional Aquarium Management Suite',
    description: 'The pro version of Aquatic Sentinel includes everything in the standard version plus advanced analytics, API integration, cloud sync, and priority support. Perfect for serious aquarists and professionals.',
    shortDescription: 'Advanced aquarium management with cloud sync, API access, and professional analytics.',
    price: 89.99,
    originalPrice: 129.99,
    category: 'software',
    features: [
      'Everything in Aquatic Sentinel',
      'Cloud sync across devices',
      'API integration for smart devices',
      'Advanced analytics dashboard',
      'Priority email support',
      'Lifetime updates included'
    ],
    image: '/images/products/aquatic-sentinel-pro.svg',
    images: ['/images/products/aquatic-sentinel-pro.svg'],
    badge: 'Premium',
    rating: 4.9,
    reviewCount: 67,
    version: '2.1.0',
    platform: 'Windows, macOS, Linux',
    lemonSqueezyVariantId: 'YOUR_VARIANT_ID_HERE',
  },
  {
    id: 3,
    name: 'Aquarium Water Calculator',
    slug: 'aquarium-water-calculator',
    tagline: 'Precise Dosing & Water Change Calculator',
    description: 'A handy utility for calculating water changes, dosage amounts for medications and supplements, and tank volume conversions. Essential for maintaining healthy water conditions.',
    shortDescription: 'Calculate dosages, water changes, and tank volumes with precision.',
    price: 14.99,
    category: 'software',
    features: [
      'Water change volume calculator',
      'Medication dosage calculator',
      'Tank volume conversions (US/Imperial/Liters)',
      'Saved calculation history',
      'Lightweight and fast'
    ],
    image: '/images/products/water-calculator.svg',
    images: ['/images/products/water-calculator.svg'],
    badge: null,
    rating: 4.6,
    reviewCount: 45,
    version: '1.3.0',
    platform: 'Windows, macOS, Linux',
    lemonSqueezyVariantId: 'YOUR_VARIANT_ID_HERE',
  },
  {
    id: 4,
    name: 'Freshwater Aquarium Guide',
    slug: 'freshwater-aquarium-guide',
    tagline: 'Complete Beginner to Advanced Handbook',
    description: 'A comprehensive digital guide covering everything from setting up your first freshwater tank to advanced aquascaping techniques. Includes species profiles, planting guides, and troubleshooting tips.',
    shortDescription: 'The ultimate digital guide to freshwater aquarium keeping.',
    price: 24.99,
    category: 'guides',
    features: [
      '400+ pages of expert content',
      '200+ species profiles with photos',
      'Step-by-step setup guides',
      'Aquascaping techniques',
      'Disease identification and treatment',
      'Printable reference charts'
    ],
    image: '/images/products/freshwater-guide.svg',
    images: ['/images/products/freshwater-guide.svg'],
    badge: 'Popular',
    rating: 4.7,
    reviewCount: 89,
    version: '3.0',
    platform: 'PDF, EPUB',
    lemonSqueezyVariantId: 'YOUR_VARIANT_ID_HERE',
  },
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'software', name: 'Software', count: products.filter(p => p.category === 'software').length },
  { id: 'guides', name: 'Guides & Books', count: products.filter(p => p.category === 'guides').length },
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts() {
  return products.filter(p => p.badge);
}
