export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Construction&BuildinMeterialsBusiness',
  '@id': 'https://www.mojaf-sa.com',
  name: 'MOJAF SA',
  image: 'https://mojaf-sa.com/MOJ.jpg',
  url: 'https://www.mojaf-sa.com',
  email: 'info@mojaf-sa.com',
  telephone: '+966 56 840 1900',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Multiple Locations Across KSA',
    addressLocality: ['Jeddah', 'Riyadh', 'Dammam', 'Khobar', 'Makkah', 'Madinah'],
    addressRegion: 'Saudi Arabia',
    addressCountry: 'SA'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '21.543333',
    longitude: '39.172778'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'https://schema.org/Monday',
      'https://schema.org/Tuesday',
      'https://schema.org/Wednesday',
      'https://schema.org/Thursday',
      'https://schema.org/Friday',
      'https://schema.org/Saturday',
      'https://schema.org/Sunday'
    ],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61576350434274#',
    'https://www.mojaf-sa.com',
    'https://www.mojaf-as.com',
    'https://mojaf-as.com',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction Materials Catalog',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Flooring Solutions',
        itemListElement: [
          {
            '@type': 'Product',
            name: 'LVT Flooring',
            description: 'Luxury Vinyl Tile flooring for commercial spaces'
          },
          {
            '@type': 'Product',
            name: 'SPC Flooring',
            description: 'Stone Plastic Composite waterproof flooring'
          }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Wall Systems',
        itemListElement: [
          {
            '@type': 'Product',
            name: 'MDF Skirting Boards',
            description: 'High-quality wall skirting solutions'
          },
          {
            '@type': 'Product',
            name: 'Acoustic Wall Panels',
            description: 'Noise-reduction wall panels'
          }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Fasteners & Hardware',
        itemListElement: [
          {
            '@type': 'Product',
            name: 'Self-Drilling Screws',
            description: 'Premium construction screws'
          },
          {
            '@type': 'Product',
            name: 'Stainless Steel Fasteners',
            description: 'Durable fastening solutions'
          }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Electrical Components',
        itemListElement: [
          {
            '@type': 'Product',
            name: 'LED Lighting Systems',
            description: 'Energy-efficient lighting solutions'
          },
          {
            '@type': 'Product',
            name: 'Circuit Breakers',
            description: 'Electrical safety components'
          }
        ]
      }
    ]
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MOJAF SA',
  alternateName: 'MOJAF',
  url: 'https://www.mojaf-sa.com'
};
