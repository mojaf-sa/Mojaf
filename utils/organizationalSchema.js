export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.mojaf-sa.com',
  name: 'MOJAF',
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
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '18:00'
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61576350434274',
    'https://www.mojaf-sa.com'
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
            description: 'Luxury Vinyl Tile flooring for commercial spaces',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SAR',
              availability: 'https://www.mojaf-sa.com/',
              url: 'https://www.mojaf-sa.com/'
            }
          },
          {
            '@type': 'Product',
            name: 'SPC Flooring',
            description: 'Stone Plastic Composite waterproof flooring',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SAR',
              availability: 'https://www.mojaf-sa.com/',
              url: 'https://www.mojaf-sa.com/'
            }
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
            description: 'High-quality wall skirting solutions',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SAR',
              availability: 'https://www.mojaf-sa.com/',
              url: 'https://www.mojaf-sa.com/'
            }
          },
          {
            '@type': 'Product',
            name: 'Acoustic Wall Panels',
            description: 'Noise-reduction wall panels',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SAR',
              availability: 'https://www.mojaf-sa.com/',
              url: 'https://www.mojaf-sa.com/'
            }
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
            description: 'Premium construction screws',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SAR',
              availability: 'https://www.mojaf-sa.com/',
              url: 'https://www.mojaf-sa.com/'
            }
          },
          {
            '@type': 'Product',
            name: 'Stainless Steel Fasteners',
            description: 'Durable fastening solutions',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SAR',
              availability: 'https://www.mojaf-sa.com/',
              url: 'https://www.mojaf-sa.com/'
            }
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
            description: 'Energy-efficient lighting solutions',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SAR',
              availability: 'https://www.mojaf-sa.com/',
              url: 'https://www.mojaf-sa.com/'
            }
          },
          {
            '@type': 'Product',
            name: 'Circuit Breakers',
            description: 'Electrical safety components',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SAR',
              availability: 'https://www.mojaf-sa.com/',
              url: 'https://www.mojaf-sa.com/'
            }
          }
        ]
      }
    ]
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MOJAF',
  alternateName: 'MOJAF',
  url: 'https://www.mojaf-sa.com'
};
