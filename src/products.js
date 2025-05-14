// PRODUCT IMAGE DATABASE - Using reliable Unsplash image URLs
const PRODUCT_IMAGES = {
  doors: {
    'WPC Skin Door': [
      'https://images.unsplash.com/photo-1600585152220-33d187db2e54?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e56?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    ],
    'Full WPC Door': [
      'https://images.unsplash.com/photo-1600585152220-33d187db2e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e58?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e59?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    ],
    'Aluminum Glass Door': [
      'https://images.unsplash.com/photo-1600585152220-33d187db2e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e61?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    ]
  },
  flooring: {
    'SPC Flooring': [
      'https://images.unsplash.com/photo-1600585152220-33d187db2e63?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e64?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e65?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    ],
    'LVT Flooring': [
      'https://images.unsplash.com/photo-1600585152220-33d187db2e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    ]
  },
  skirting: {
    'WPC Skirting': [
      'https://images.unsplash.com/photo-1600585152220-33d187db2e69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
      'https://images.unsplash.com/photo-1600585152220-33d187db2e71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    ]
  },
  default: [
    'https://via.placeholder.com/600x400/cccccc/969696?text=Product+Image',
    'https://via.placeholder.com/600x400/cccccc/969696?text=Product+Detail',
    'https://via.placeholder.com/600x400/cccccc/969696?text=Close+Up'
  ]
};

// PRODUCT CATEGORIES
export const productCategories = [
  'All', 'Flooring', 'Skirting Board', 'Wall Panels', 
  'Insulation', 'Boards', 'Doors', 'Safety Products', 
  'Electrical Items', 'Screws/Fasteners'
];

// SUBCATEGORIES
export const subCategories = {
  'All': ['All'],
  'Flooring': ['All', 'Vinyl/PVC Flooring', 'SPC Flooring', 'LVT Flooring', 'Carpet Paving'],
  'Skirting Board': ['All', 'MDF Skirting', 'WPC Skirting', 'PS Skirting Board'],
  'Wall Panels': ['All', 'PU Stone Panel', 'Acoustic Wall Panel', 'WPC Wall Panels', 'UV/PVC/PU Sheet'],
  'Insulation': ['All', 'Rockwool Blankets (Rolls)', 'Rockwool Boards (Slabs)'],
  'Boards': ['All', 'Fiber Cement Boards'],
  'Doors': ['All', 'Steel Doors', 'MDF Wooden Door', 'Melamine Wooden Door', 'Full WPC Door', 'WPC Skin Door', 'WPC Glass Door', 'WPC Assembly Door', 'Aluminum Glass Door', 'Invisible Door'],
  'Safety Products': ['All', 'Safety Shoes', 'Safety Jackets'],
  'Electrical Items': ['All', 'Switches', 'Sockets', 'Wiring', 'Conduits'],
  'Screws/Fasteners': ['All', 
    'Self Drilling Screw Hex Head W/EPDM',
    'Self Drilling Screw PAN Washer Head',
    'Self Drilling Screw Truss Head PHILIPS',
    'Self Drilling Drywall Screw Bungle',
    'Screw - Roto Bit'
  ]
};

// WPC MATERIAL ADVANTAGES
export const wpcAdvantages = [
  '100% Waterproof Core Structure',
  'Moisture-proof (0.2% water absorption rate)',
  'Anti-termite & insect resistant material',
  'Fire-resistant (Class B1 certified)',
  'No cracking or warping (-20°C to 60°C)',
  'Formaldehyde-free (ENF standard <0.025mg/m³)',
  'Sound insulation (28-35dB reduction)',
  'Thermal insulation (0.22 W/mK conductivity)',
  'Easy installation with pre-drilled hardware',
  'Low maintenance (no painting required)',
  '10-year structural warranty'
];

// PRODUCT SPECIFICATIONS
const productSpecs = {
  'WPC Skin Door': {
    thickness: ['40mm (±0.5mm)', '45mm (±0.5mm)', '50mm (±0.5mm)'],
    coreMaterial: ['Solid Wood Frame (SPF/Pine)', 'Honeycomb Structure', 'PU Foam Core (32kg/m³)'],
    surface: ['PVC Film (0.5mm, 30+ colors)', 'PP Film (0.3mm, 15+ patterns)', 'Real Wood Veneer (0.6mm)'],
    fireRating: ['Class B1 (self-extinguishing)', 'Class A2 (non-combustible)'],
    soundInsulation: ['28dB (standard)', '32dB (enhanced)', '35dB (premium)'],
    installation: ['Pre-hung frame', 'Slab only']
  },
  'Full WPC Door': {
    construction: ['Solid Core (72kg/m³)', 'Hollow Core (lightweight)', 'Flush Design'],
    surface: ['PVC Lamination (0.8mm)', 'PP Lamination (0.5mm)', 'UV Coating (7-layer)'],
    fireRating: ['Class B1', 'Class A2'],
    security: ['3-point locking', 'Multi-point locking', 'Standard lock'],
    edgeBand: ['PVC (2mm)', 'ABS (1.5mm)', 'Aluminum (3mm)']
  },
  'Aluminum Glass Door': {
    frameType: ['Narrow Profile (35mm)', 'Standard Profile (45mm)', 'Wide Profile (60mm)'],
    glassType: ['Clear Tempered (6-12mm)', 'Frosted', 'Laminated', 'Double Glazed'],
    hardware: ['Concealed Hinges', 'Surface-mounted', 'Pivot System'],
    finish: ['Anodized (5 colors)', 'Powder-coated (12 colors)']
  },
  'SPC Flooring': {
    thickness: ['3.2mm (±0.2mm)', '4.0mm (±0.2mm)', '5.0mm (±0.3mm)', '6.0mm (±0.3mm)'],
    wearLayer: ['0.3mm (commercial)', '0.5mm (heavy commercial)', '0.7mm (premium)'],
    installation: ['Click-lock', 'Glue-down', 'Loose-lay'],
    surface: ['Embossed Woodgrain', 'High Gloss', 'Hand-scraped']
  },
  'WPC Skirting': {
    height: ['70mm', '100mm', '120mm', '150mm'],
    length: ['2.4m', '3.0m'],
    profile: ['Simple', 'Decorative', 'Coved'],
    finish: ['Pre-primed', 'PVC Wrapped', 'Wood Veneer']
  }
};

// HELPER FUNCTIONS
const getProductImages = (subCategory) => {
  if (subCategory.includes('Door')) {
    return PRODUCT_IMAGES.doors[subCategory] || PRODUCT_IMAGES.doors['WPC Skin Door'];
  }
  if (subCategory.includes('Flooring')) {
    return PRODUCT_IMAGES.flooring[subCategory] || PRODUCT_IMAGES.flooring['SPC Flooring'];
  }
  if (subCategory.includes('Skirting')) {
    return PRODUCT_IMAGES.skirting[subCategory] || PRODUCT_IMAGES.skirting['WPC Skirting'];
  }
  return PRODUCT_IMAGES.default;
};

const generateProductCode = (subCategory, index) => {
  const prefixes = {
    'WPC Skin Door': 'YK-SD',
    'Full WPC Door': 'YK-FD',
    'Aluminum Glass Door': 'YK-AG',
    'SPC Flooring': 'YK-SF',
    'WPC Skirting': 'YK-SK'
  };
  
  const prefix = prefixes[subCategory] || 'YK-P';
  return `${prefix}${String(index+100).padStart(3,'0')}`;
};

const generateDetailedDescription = (product) => {
  const { name, subCategory, specs } = product;
  
  const descriptions = {
    'WPC Skin Door': `
      <h3>${name} - Premium WPC Skin Door</h3>
      <p>Our flagship waterproof composite interior door featuring:</p>
      <ul>
        <li><strong>Core:</strong> ${specs.coreMaterial} construction</li>
        <li><strong>Thickness:</strong> ${specs.thickness}</li>
        <li><strong>Surface:</strong> ${specs.surface} finish</li>
        <li><strong>Fire Rating:</strong> ${specs.fireRating}</li>
        <li><strong>Sound Insulation:</strong> ${specs.soundInsulation} reduction</li>
        <li><strong>Installation:</strong> ${specs.installation} options</li>
      </ul>
      <p>Ideal for bathrooms, kitchens, and high-humidity areas. Includes pre-installed hinge cups and strike plate reinforcement.</p>
    `,
    'Full WPC Door': `
      <h3>${name} - 100% Waterproof WPC Door</h3>
      <p>Complete waterproof door system with:</p>
      <ul>
        <li><strong>Construction:</strong> ${specs.construction}</li>
        <li><strong>Surface:</strong> ${specs.surface} treatment</li>
        <li><strong>Security:</strong> ${specs.security} preparation</li>
        <li><strong>Edge Banding:</strong> ${specs.edgeBand} for durability</li>
      </ul>
      <p>Suitable for both interior and exterior applications. Available in slab or pre-hung configurations.</p>
    `,
    'Aluminum Glass Door': `
      <h3>${name} - Architectural Glass Door</h3>
      <p>Modern aluminum glass door system featuring:</p>
      <ul>
        <li><strong>Frame:</strong> ${specs.frameType} with thermal break</li>
        <li><strong>Glass:</strong> ${specs.glassType} options</li>
        <li><strong>Hardware:</strong> ${specs.hardware} system</li>
        <li><strong>Finish:</strong> ${specs.finish} available in multiple colors</li>
      </ul>
      <p>Perfect for office partitions, storefronts, and contemporary residential applications.</p>
    `,
    'SPC Flooring': `
      <h3>${name} - Rigid Core Flooring</h3>
      <p>High-performance SPC flooring with:</p>
      <ul>
        <li><strong>Thickness:</strong> ${specs.thickness} rigid core</li>
        <li><strong>Wear Layer:</strong> ${specs.wearLayer} protection</li>
        <li><strong>Surface:</strong> ${specs.surface} texture</li>
        <li><strong>Installation:</strong> ${specs.installation} system</li>
      </ul>
      <p>100% waterproof core suitable for all rooms including basements. Compatible with radiant heating.</p>
    `,
    default: `
      <h3>${name}</h3>
      <p>High-quality ${subCategory.toLowerCase()} designed for professional applications.</p>
      <p>Key specifications:</p>
      <ul>
        ${Object.entries(specs).map(([key, val]) => 
          `<li><strong>${key}:</strong> ${Array.isArray(val) ? val.join(', ') : val}</li>`
        ).join('')}
      </ul>
    `
  };
  
  return descriptions[subCategory] || descriptions.default;
};

const calculatePrice = (subCategory, index) => {
  const basePrices = {
    'WPC Skin Door': 120,
    'Full WPC Door': 180,
    'Aluminum Glass Door': 250,
    'SPC Flooring': 35,
    'WPC Skirting': 8
  };
  
  const basePrice = basePrices[subCategory] || 50;
  const variation = (index % 5) * (basePrice * 0.15); // ±15% variation
  return Math.round(basePrice + variation);
};

// PRODUCT GENERATION
const generateProducts = (category, subCategory, count) => {
  const products = [];
  const baseSpecs = productSpecs[subCategory] || {};
  const images = getProductImages(subCategory);

  for (let i = 1; i <= count; i++) {
    const productCode = generateProductCode(subCategory, i);
    const product = {
      id: `${category.toLowerCase().replace(/\s+/g,'-')}-${subCategory.toLowerCase().replace(/\s+/g,'-')}-${i}`,
      name: productCode,
      category,
      subCategory,
      description: '',
      specs: {
        ...baseSpecs,
        material: ['WPC', 'Aluminum', 'Tempered Glass', 'Stainless Steel'][i % 4],
        certification: ['ENF', 'CE', 'FSC', 'ISO9001'][i % 4],
        warranty: `${5 + (i % 6)} years`,
        leadTime: `${7 + (i % 14)} days`,
        // Additional technical specs
        ...(subCategory.includes('Door') && {
          weight: `${25 + (i % 15)} kg`,
          hingeType: i % 2 ? '3D Adjustable' : 'Standard Butt'
        }),
        ...(subCategory.includes('Flooring') && {
          planksPerBox: Math.floor(20 + (i % 10)),
          coveragePerBox: `${2 + (i % 3)}.${i % 10} sqm`
        })
      },
      images,
      moq: `${5 + (i % 6)} ${subCategory.includes('Door') ? 'units' : subCategory.includes('Flooring') ? 'boxes' : 'pieces'}`,
      price: calculatePrice(subCategory, i)
    };
    product.description = generateDetailedDescription(product);
    products.push(product);
  }
  return products;
};

// PREMIUM PRODUCTS
const premiumProducts = [
  // WPC Skin Door
  {
    id: 'yk-sd200-premium',
    name: 'YK-SD200 Premium',
    category: 'Doors',
    subCategory: 'WPC Skin Door',
    description: generateDetailedDescription({
      name: 'YK-SD200 Premium',
      subCategory: 'WPC Skin Door',
      specs: {
        coreMaterial: 'Reinforced Solid Wood Frame',
        thickness: '45mm (±0.5mm)',
        surface: 'Premium PVC Film (0.5mm) - 12 finishes',
        fireRating: 'Class A2',
        soundInsulation: '35dB reduction',
        installation: 'Pre-hung frame with adjustable jamb'
      }
    }),
    specs: {
      coreMaterial: 'Reinforced Solid Wood Frame',
      thickness: '45mm (±0.5mm)',
      surface: 'Premium PVC Film (0.5mm)',
      fireRating: 'Class A2',
      soundInsulation: '35dB',
      material: 'WPC Composite',
      certification: 'ENF, CE, FSC',
      warranty: '12 years',
      leadTime: '20 days',
      weight: '32 kg',
      hingeType: '3D Adjustable (165°)'
    },
    images: PRODUCT_IMAGES.doors['WPC Skin Door'],
    moq: '5 units',
    price: 145
  },
  
  // Full WPC Door
  {
    id: 'yk-fd300-ultra',
    name: 'YK-FD300 Ultra',
    category: 'Doors',
    subCategory: 'Full WPC Door',
    description: generateDetailedDescription({
      name: 'YK-FD300 Ultra',
      subCategory: 'Full WPC Door',
      specs: {
        construction: 'Solid Core with Fiberglass',
        surface: '7-layer UV Coating',
        fireRating: 'Class A2',
        security: 'Multi-point Locking Prep',
        edgeBand: 'Aluminum (3mm)'
      }
    }),
    specs: {
      construction: 'Solid Core with Fiberglass',
      surface: '7-layer UV Coating',
      fireRating: 'Class A2',
      security: 'Multi-point Locking Prep',
      edgeBand: 'Aluminum (3mm)',
      material: 'WPC Composite',
      certification: 'ENF, CE, ADA',
      warranty: '15 years',
      leadTime: '25 days',
      weight: '38 kg',
      soundReduction: '37dB'
    },
    images: PRODUCT_IMAGES.doors['Full WPC Door'],
    moq: '3 units',
    price: 210
  },
  
  // Aluminum Glass Door
  {
    id: 'yk-ag500-pro',
    name: 'YK-AG500 Pro',
    category: 'Doors',
    subCategory: 'Aluminum Glass Door',
    description: generateDetailedDescription({
      name: 'YK-AG500 Pro',
      subCategory: 'Aluminum Glass Door',
      specs: {
        frameType: 'Thermally Broken 50mm',
        glassType: '10mm Tempered (Optional Laminated)',
        hardware: 'Heavy-Duty Concealed Hinges',
        finish: 'Powder-coated (25 color options)'
      }
    }),
    specs: {
      frameType: 'Thermally Broken 50mm',
      glassType: '10mm Tempered',
      hardware: 'Heavy-Duty Concealed Hinges',
      finish: 'Powder-coated',
      material: 'Aluminum 6063-T5',
      certification: 'ANSI/BHMA A156.22',
      warranty: '10 years',
      leadTime: '30 days',
      weight: '45 kg',
      windRating: 'Class 3 (50psf)'
    },
    images: PRODUCT_IMAGES.doors['Aluminum Glass Door'],
    moq: '2 units',
    price: 275
  },
  
  // SPC Flooring
  {
    id: 'yk-sf400-luxury',
    name: 'YK-SF400 Luxury',
    category: 'Flooring',
    subCategory: 'SPC Flooring',
    description: generateDetailedDescription({
      name: 'YK-SF400 Luxury',
      subCategory: 'SPC Flooring',
      specs: {
        thickness: '5.0mm (±0.3mm)',
        wearLayer: '0.7mm premium commercial',
        installation: 'Click-lock with attached pad',
        surface: 'Embossed Woodgrain (12 options)'
      }
    }),
    specs: {
      thickness: '5.0mm (±0.3mm)',
      wearLayer: '0.7mm premium commercial',
      installation: 'Click-lock with attached pad',
      surface: 'Embossed Woodgrain',
      material: 'Stone Plastic Composite',
      certification: 'FloorScore, CE',
      warranty: '25 years residential / 10 years commercial',
      leadTime: '15 days',
      planksPerBox: 22,
      coveragePerBox: '2.15 sqm'
    },
    images: PRODUCT_IMAGES.flooring['SPC Flooring'],
    moq: '10 boxes',
    price: 42
  }
];

// ALL PRODUCTS
export const allProducts = [
  ...premiumProducts,
  ...generateProducts('Doors', 'WPC Skin Door', 5),
  ...generateProducts('Doors', 'Full WPC Door', 5),
  ...generateProducts('Doors', 'Aluminum Glass Door', 3),
  ...generateProducts('Flooring', 'SPC Flooring', 5),
  ...generateProducts('Skirting Board', 'WPC Skirting', 4)
];

export default {
  productCategories,
  subCategories,
  wpcAdvantages,
  allProducts
};