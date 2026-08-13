export const products = [
  {
    id: 1,
    name: 'Aquatic Sentinel',
    slug: 'aquatic-sentinel',
    tagline: 'Smart Aquarium Management Software',
    description: 'Aquatic Sentinel is a powerful desktop application that helps you manage your aquarium with ease. Track water parameters, set alerts, log maintenance, and keep your aquatic environment thriving.',
    shortDescription: 'Manage water parameters, set alerts, and manage your aquarium with intelligent software.',
    price: 0.0,
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
    image: '/images/shop/dashboard.png',
    images: ['/images/shop/dashboard.png'],
    badge: 'Best Seller',
    rating: 5,
    reviewCount: 124,
    platform: 'Windows',
    lemonSqueezyVariantId: 'YOUR_VARIANT_ID_HERE',
  },
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'software', name: 'Software', count: products.filter(p => p.category === 'software').length },
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
