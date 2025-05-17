// Product Categories
export const productCategories = [
  'All', 'Flooring', 'Skirting Board', 'Wall Panels',
  'Insulation', 'Boards', 'Doors', 'Safety Products',
  'Electrical Items', 'Screws/Fasteners'
];

// Subcategories for each main category
export const subCategories = {
  'All': ['All'],
  'Flooring': ['All', 'Vinyl/PVC Flooring', 'SPC Flooring', 'LVT Flooring'],
  'Skirting Board': ['All', 'MDF Skirting', 'WPC Skirting', 'PS Skirting Board'],
  'Wall Panels': ['All', 'PU Stone Panel', 'Acoustic Wall Panel', 'WPC Wall Panels', 'UV/PVC/PU Sheet'],
  'Insulation': ['All', 'Rockwool Blankets (Rolls)', 'Rockwool Boards (Slabs)'],
  'Boards': ['All', 'Fiber Cement Boards'],
  'Doors': ['All', 'Steel Doors', 'MDF Wooden Door', 'Melamine Wooden Door', 'Full WPC Door', 'WPC Skin Door', 'WPC Glass Door'],
  'Safety Products': ['All', 'Safety Shoes', 'Safety Jackets'],
  'Electrical Items': [
    'All', 
    'Wires and cables',
    'Circuit Breakers & Distribution Boards',
    'Light Fittings',
    'Lighting',
    'Fans',
    'Electrical Appliances',
    'Home Automation',
    'Electrical switches and sockets',
    'Electrical Conduit Pipes',
    'Cable Tray Systems',
    'Electrical Boxes & Covers',
    'Electrical Enclosures'
  ],
  'Screws/Fasteners': ['All',
    'Self Drilling Screw Hex Head W/EPDM',
    'Self Drilling Screw PAN Washer Head',
    'Self Drilling Screw Truss Head PHILIPS',
    'Self Drilling Drywall Screw Bungle',
    'Screw - Roto Bit'
  ]
};

// Generate unique product ID
const generateProductId = (name) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

// Generate products with empty images array and no description
const generateProducts = () => {
  const products = [];

  // ==================== FLOORING CATEGORY ====================
  
  // Vinyl/PVC Flooring
  products.push({
    id: 'highly-resistance-pvc-vinyl-plastic-material-dance-covering-mat',
    name: 'Vinyl/ PVC Flooring/ Carpet Paving',
    category: 'Flooring',
    subCategory: 'Vinyl/PVC Flooring',
    shortDescription: 'Durable PVC vinyl flooring roll for dance studios and performance areas',
    description: 'High-quality PVC vinyl flooring roll with anti-scratch, waterproof, and anti-slip properties. Available in customizable thickness (1.5-3mm), width (2-4m), and wood/stone patterns. Ideal for hotels, schools, libraries, and bedrooms with blue mesh fabric backing for added durability.',
    specs: {
      'Material': 'PVC',
      'Product Type': 'Vinyl Roll',
      'Feature': 'Anti-Scratch, Waterproof, Anti-Slip, wear resistant',
      'Thickness': '1.5 MM, 2 MM, 2.5 MM, 3 MM (customizable)',
      'Width': '4 Meter, 2 Meter (customizable)',
      'Length': '20m/25m/30m (customizable)',
      'Color': 'Wood Plank Stone (customizable)',
      'Surface Treatment': 'Parquet',
      'Application': 'Hotel, School, Library, Bedroom',
      'Backing': 'Blue Mesh Fabric',
    },
    images: [
      '//s.alicdn.com/@sc04/kf/Hb00e41042d4d4cd68084a2ade6dd548aC.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H82508bd9c2cc48ce9983ffee77de382ci.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H6f56487df6894198b67080ac53022c72q.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H540effeb733f41218c10974c1437b253K.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hedaee8d559054e6aa141f7244a80b756i.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H0b15482dcfd5436196fc618de52edb0a1.jpg_720x720q50.jpg'
    ],
    price: 0,
    rating: 0,
    stock: 0,
  });

  // SPC Flooring
  products.push({
    id: 'modern-8mm-grey-spc-hybrid-flooring',
    name: 'PC Flooring Paving',
    category: 'Flooring',
    subCategory: 'SPC Flooring',
    shortDescription: '8mm SPC flooring with moisture resistance and modern forrest design',
    description: '8mm thick SPC (Stone Plastic Composite) flooring featuring moisture-resistance, heat insulation, and anti-slip properties. The modern forrest design combines aesthetics with functionality, offering waterproof and wear-resistant performance. Ideal for villas and homes with click lock installation system.',
    specs: {
      'Thickness': '8mm',
      'Material': 'SPC (Stone Plastic Composite)',
      'Feature': 'Moisture-Resistant, Heat-Insulation, Anti-Slip, Waterproof, Wear-Resistant',
      'Design': 'Forrest Design',
      'Color': 'Grey',
      'Application': 'Villa, Home',
      'Installation': 'Click Lock System',
    },
    images: [
      '//s.alicdn.com/@sc04/kf/Hc3a18d1449734c32a5921847578f5273W.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H1d39512705ca45f9a0255c65741c37e54.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/He29fd34dd17f4f4ab220e3276de77f0f6.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H469efcd0b71f455baec8948eac7314b50.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/He2ca58522540491ea8b79cdf9c76b9ddi.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H38ca245330f34967aff693f461794095r.jpg_720x720q50.jpg'
    ],
    price: 0,
    rating: 0,
    stock: 0,
  });

  // LVT Flooring
  products.push({
    id: 'waterproof-wood-luxury-cheapest-pvc-tiles-lvt-flooring-self-adhesive-vinyl-flooring-lvt',
    name: 'LVT Flooring Paving',
    category: 'Flooring',
    subCategory: 'LVT Flooring',
    shortDescription: 'Waterproof luxury vinyl tile with wood design and self-adhesive installation',
    description: 'Premium LVT (Luxury Vinyl Tile) flooring with waterproof and fireproof properties. Features self-adhesive installation, textured surface, and eco-friendly materials. Suitable for offices, hotels, villas, apartments, hospitals, schools, and malls with modern design style.',
    specs: {
      'Feature': 'Waterproof, wear resistant, Anti-Scratch, Eco-Friendly, Fireproof',
      'Installation': 'Self-Adhesive',
      'Shape': 'Rectangle',
      'Surface Texture': 'Textured',
      'Model': '1.5mm 2mm',
      'Use': 'indoor',
      'Surface Treatment': 'Simple Color',
      'Water Protection': 'Waterproof',
      'Application': 'Office Building, Hotel, Villa, Apartment, Hospital, School, Mall',
      'Design Style': 'Modern'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/H22848372da1249cf9e7f5fd17328f405E.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H5cd32d64e45b47dcb2ab9269aa0fd120x.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H201c36c755614c46871b9080c58778afx.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H01c2c2137a3a4211b83e33bfe87dcfb0A.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H0031ac6977b247f4a436c5483fe7eb31q.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H9f90d957d0dd43c9afc637458d3eb339m.jpg_720x720q50.jpg'
    ],
    price: 0,
    rating: 0,
    stock: 0,
  });

  // ==================== SKIRTING BOARD CATEGORY ====================
  
  // MDF Skirting
  products.push({
    id: 'modern-water-proof-timber-white-primed-wall-mdf-skirting-boards-baseboard-moulding',
    name: 'MDF Skirting Board',
    category: 'Skirting Board',
    subCategory: 'MDF Skirting',
    shortDescription: 'Durable MDF skirting board with waterproof properties and white finish',
    description: 'High-quality MDF skirting board with waterproof properties and white primed finish. Available in customizable sizes (69.9x15.9x2134mm) and colors (white/black). Features film coated, painted surface treatments and comes with more than 5 years warranty. Suitable for home and office applications with modern design style.',
    specs: {
      'Material': 'MDF',
      'Size': '69.9x15.9x2134mm (customizable)',
      'Color': 'White/Black (customizable)',
      'Surface Treatment': 'Film coated, White primed, Painted',
      'Feature': 'Eco-friendly',
      'Warranty': 'More than 5 years',
      'After-sale Service': 'Online technical support, Onsite Installation, Onsite Training, Onsite Inspection',
      'Project Solution Capability': 'graphic design, Others',
      'Application': 'Home Office',
      'Design Style': 'Modern'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/Ac60cde59848447af8d36f75b674b520eq.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Aa4d099aa7ca542f7be32e52b01a4f28eu.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/A6cc5b4822b154d648aadd0c4cb1634adb.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/A34739a90669b4641a5a1903b04dacea8a.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/A97251067d998497d8dc4c066b4aa9e62f.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Ab0e5083c077841e8b93c5002f941ead2a.jpg_720x720q50.jpg'
    ],
    price: 0,
    rating: 0,
  });

  // WPC Skirting
  products.push({
    id: 'wpc-composite-wpc-skirting-board-anti-termite',
    name: 'WPC Skirting',
    category: 'Skirting Board',
    subCategory: 'WPC Skirting',
    shortDescription: 'Anti-termite WPC skirting board with formaldehyde-free materials',
    description: 'WPC (Wood Plastic Composite) skirting board with anti-termite properties and formaldehyde-free materials. Features easy installation with PVC lamination surface treatment. Available in customizable colors with standard size of 75*14mm and length of 2.5M/piece. Comes with more than 5 years warranty.',
    specs: {
      'Warranty': 'More than 5 years',
      'Size': '75*14mm',
      'Output': '2000m/day',
      'Material': 'WPC',
      'Color': 'Customizable',
      'Length': '2.5M/piece',
      'Surface treatment': 'Pvc lamination'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/H460204ec35d24943badfb2aa4a34c33by.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/He5ab6850b6d34f14b38d3769ed4e0882o.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hb64faf2d8be64302a8035cb052ac24f6C.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hf6d2a26eccaf418aa65de7a94e027f78q.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hc6b11d2b26184c6d8bbc390952397eedi.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/He7ccefcaa5c549c58c8c67d668cf1511K.jpg_720x720q50.jpg'
    ],
    price: 0,
    priceRange: { min: 0.38, max: 3.05 },
    rating: 0,
    stock: 0,
  });

  // PS Skirting Board
  products.push({
    id: 'black-color-waterproof-ps-skirting-corner-baseboard-flooring-accessories-skirting-profiles',
    name: 'Black Color Waterproof PS Skirting Corner Baseboard Flooring Accessories Skirting Profiles',
    category: 'Skirting Board',
    subCategory: 'PS Skirting Board',
    shortDescription: 'Waterproof PS skirting board in black for flooring accessories',
    description: 'Black waterproof PS (Polystyrene) skirting board with polished surface treatment. Available in lengths of 2200/2400mm and 12mm thickness. Features hard, environment-friendly properties with easy installation. Comes with 5 years warranty for peace of mind.',
    specs: {
      'Material': 'Polystyrene (PS)',
      'Color': 'Black (also available in white or custom colors)',
      'Thickness': '12 mm',
      'Length': '2200/2400mm',
      'Feature': 'Waterproof, hard, environment-friendly, easy installation',
      'Surface Treatment': 'Polished',
      'Warranty': '5 years',
    },
    images: [
      '//s.alicdn.com/@sc04/kf/Hc5346ebd26134442a83f0516e722fc980.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H1ab0726454ba4533a5f2d98e301c7294V.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hd295d466da1f4c1d8ce992d953e0b5c7g.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H5233379f5f1d49a0a8c81a051d3d2da5k.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Ha00761913ae24c5f980f25e0ef5f8566K.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H6b66e27b328747b48cb2e609b9c8bc73B.jpeg_720x720q50.jpg'
    ],
    price: 0,
    rating: 0,
    stock: 0,
  });

  // ==================== WALL PANELS CATEGORY ====================
  
  // PU Stone Panel
  products.push({
    id: 'decorative-easy-to-install-veneer-sheet-3d-effect-foam-pu-stone-wall-panel-polyurethane-artificial-stone-for-apartment',
    name: 'PU Stone Panel',
    category: 'Wall Panels',
    subCategory: 'PU Stone Panel',
    shortDescription: '3D effect polyurethane artificial stone wall panel',
    description: 'Decorative polyurethane artificial stone wall panel with realistic 3D effect. Features waterproof and fire-resistant properties with customizable colors. Standard size of 2400mm*800mm makes it ideal for villa applications. Comes with 3 years warranty and project solutions including graphic design and 3D model design.',
    specs: {
      'Material': 'Polyurethane',
      'Size': '2400mm*800mm',
      'Color': 'Customized Colors',
      'Style': 'Modern',
      'Advantage': 'Waterproof and fire-resistant',
      'Usage': 'Decoration',
      'Warranty': '3 years',
      'Project Solution Capability': 'graphic design, 3D model design, total solution for projects',
      'Application': 'Villa',
      'Design Style': 'Modern',
      'Stone Form': 'Big Slab'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/H5745ee44375d44ef85cc71848e476327m.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H97b917ca359d4f4286ae290345645d47a.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H65328e9c3cf44ed5a11263209ab02454C.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hdac097b3785e4855bb137e2a2986f7c7V.jpg_720x720q50.jpg'
    ],
    price: 0,
    rating: 5.0,
    stock: 0,
  });

  // Acoustic Wall Panel
  products.push({
    id: 'china-sound-proof-wall-slat-pannelli-fonoassorbenti',
    name: 'Acoustic Wall Panel',
    category: 'Wall Panels',
    subCategory: 'Acoustic Wall Panel',
    shortDescription: 'Wood decorative acoustic panels for soundproofing',
    description: '100% polyester fiber acoustic wall panels with excellent sound insulation and noise reduction properties. Available in thicknesses of 9mm/12mm/15mm with customizable shapes. Features E0 environmental rating and Grade B fireproof certification for safety and eco-friendliness.',
    specs: {
      'Material': '100% Polyester Fiber',
      'Feature': 'Sound Insulation, Noise Reduction, decoration',
      'Thickness': '9mm/12mm/15mm (customizable)',
      'Fireproof Grade': 'Grade B',
      'Environmental': 'E0',
      'Shape': 'Customized Shape',
    },
    images: [
      '//s.alicdn.com/@sc04/kf/H5ce97e06e0634438aa3d84f2360b4683P.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H724ed9f20d0a43019b95acf36bb973e8j.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H86774bb61e954517ad2c124f9e31374cS.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H0d7acf94cfdc4f4e9a55cc67435e95093.jpeg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H33cee8ad9f7d47cf8b788daa64a96f45R.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hd498ee5c798340b893bc1273f2d87a25Q.jpeg_720x720q50.jpg'
    ],
    price: 0,
    rating: 0,
    stock: 0,
  });

  // WPC Wall Panels
  products.push({
    id: 'co-extrusion-outdoor-decoration-12725mm-wpc-wall-cladding-wall-panel-for-home-decoration',
    name: 'WPC Wall Panel',
    category: 'Wall Panels',
    subCategory: 'WPC Wall Panels',
    shortDescription: 'Outdoor WPC wall panel with co-extrusion technology',
    description: 'High-quality WPC (Wood Plastic Composite) wall panel for exterior decoration. Features moisture-proof and termite-proof properties with 12 color options. Standard size of 127*25mm and normal length of 3m/pcs (customizable). Comes with more than 5 years warranty and over 20 years service life for outdoor use.',
    specs: {
      'Size': '127*25mm',
      'Material': 'Wood Plastic Composite',
      'Color': '12 colors available',
      'Application': 'Exterior Wall Decoration',
      'Length': 'Normal length is 3m/pcs, can be customized',
      'Surface treatment': 'Brushed',
      'Service life': 'More than 20 years for outdoor use',
      'Installation': 'Use screw to fix to the joist directly',
      'Function': 'Moisture-Proof, termite-proof',
      'Warranty': 'More than 5 years',
      'Feature': 'Waterproof, easily clean, Eco-Friendly'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/H36cb14d5add34272bbc4f92c826f3d8cC.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H68c907949116414a8571dcf587d200856.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H2d96f9f17c324562898b5477c0bc265bf.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H10ff2bbed2cf4546ae632563821ed10et.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/He623a63e8f2640d0a3722899e94a1276i.jpg_720x720q50.jpg'
    ],
    price: 0,
    rating: 5.0,
    stock: 0,
  });

  // UV/PVC/PU Sheet
  products.push({
    id: generateProductId('Waterproof UV Board PVC Sheet in Marble Colors for Interior Walls and Ceilings Decoration'),
    name: 'UV/PVC/PU Sheet',
    category: 'Wall Panels',
    subCategory: 'UV/PVC/PU Sheet',
    shortDescription: 'Waterproof PVC sheet with UV coating in marble colors',
    description: 'Premium PVC sheet with UV coating available in marble colors for interior decoration. Features waterproof, fireproof, and wear-resistant properties with thickness options from 1.3-6.0mm. Ideal for hotels, KTVs, bath centers, offices, and public places with glue-on installation. Certified by CQC, SGS, and ISO with 2 years warranty.',
    specs: {
      'Material': 'PVC',
      'Feature': 'Waterproof, fireproof, wear-resistant',
      'Technology': 'Hot stamping, UV-curing',
      'Thickness': '1.3-6.0mm',
      'Density': '1.2g/cm³',
      'Thickness Tolerance': '±0.1mm',
      'Surface Material': 'Ultraviolet Curing Paint',
      'Color': 'Marble colors (customizable)',
      'Usage': 'Hotel, KTV, Bath center, Office, Public places',
      'Installation': 'Glue on wall',
      'Certificate': 'CQC, SGS, ISO',
      'Warranty': '2 years'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/Hf16d48d5331e4e3ba18424a65d10bae0Z.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/HTB1vIAoX3aH3KVjSZFpq6zhKpXac.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/HTB1XEUxXW5s3KVjSZFNq6AD3FXaV.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/HTB1xL.pX8iE3KVjSZFMq6zQhVXa9.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/HTB1Er3qX8GE3KVjSZFhq6AkaFXaJ.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/HTB1L8ZoX3KG3KVjSZFLq6yMvXXaC.jpg_720x720q50.jpg'
    ],
    price: 11.68,
    minOrder: 200,
    rating: 0,
    stock: 0,
  });

  // ==================== INSULATION CATEGORY ====================
  
  // Rockwool Blankets (Slabs)
  products.push({
    id: 'rockwool-boards-slabs',
    name: 'Rockwool Boards (Slabs)',
    category: 'Insulation',
    subCategory: 'Rockwool Boards (Slabs)',
    shortDescription: 'Mineral rock fiber insulation boards for thermal and acoustic applications',
    description: 'ROCKAL Rockwool Boards composed of mineral rock fibers processed from volcanic basaltic rocks. Excellent for wall, roof, and floor insulation with various facing options including aluminum foil and kraft paper. Features fire resistance, soundproofing, and moisture resistance with Class A1 fire safety rating.',
    images: [
      'https://board.rockal.org/assets/42c7b051-bea6-411b-bc0c-96ba4fd9398f?fit=cover&width=900&height=600&quality=80',
    ],
    shopLink: 'https://rockal.org/',
    catalogLink: '#downloads',
    features: {
      application: [
        'Wall insulation - Used to insulate both residential and commercial buildings',
        'Roof insulation - Prevents heat loss and reduces energy costs',
        'Floor insulation - Particularly in commercial buildings where soundproofing is important',
        'HVAC systems - Insulate heating and cooling ducts'
      ],
      facing: [
        'Non-Faced',
        'Reinforced Aluminum Foil FSK',
        'Kraft Paper',
        'Fiber glass tissue BGT or BGF'
      ],
      advantages: [
        'Excellent fire resistance',
        'Superior soundproofing properties',
        'Long-lasting and durable',
        'Resistant to moisture and mold growth',
        'Environmentally friendly',
        'Easy installation'
      ],
      fireSafety: [
        'Class 1 Surface spread of flame (BS 476)',
        'Class 0 (BS 476)',
        'Class A1 (European standards)',
        'Fire Spread Index: Less than 10',
        'Smoke Developed Index: Less than 25'
      ]
    },
    technicalProperties: {
      serviceTemp: '400°C to 750°C',
      meltingTemp: '1500°C',
      outerFacingTempRange: '-29°C to 66°C',
      moistureAbsorption: '< 1% (By weight, Water repellant, Non-Hygroscopic)',
      corrosionResistance: 'PH 7 or Slightly Alkaline',
      solubleChlorides: '6 PPM',
      fungiResistance: "Doesn't encourage Fungi growth",
      noiseReductionCoefficient: '≈ 0.85',
      asbestosContent: 'Non-Toxic and Asbestos Free',
      environment: 'CFC and HCFC Free',
      expansionAndContraction: 'Completely Stable',
      shotContent: 'Less than 25% (ASTM C-1335)',
      condensation: 'Vapor diffusion is negligible',
      rigidity: 'Rigid (ASTM C-1101 / M)'
    },
    thermalConductivity: {
      headers: ['Mean Temperature (°C)', '35', '40', '50', '70', '100', '128', '140'],
      rows: [
        ['10', '0.036', '0.036', '0.036', '0.038', '0.037', '0.038', '0.038'],
        ['50', '0.036', '0.036', '0.036', '0.038', '0.037', '0.039', '0.035'],
        ['100', '0.046', '0.047', '0.047', '0.046', '0.046', '0.049', '0.039'],
        ['150', '0.054', '0.054', '0.055', '0.053', '0.054', '0.053', '0.041'],
        ['200', '0.066', '0.067', '0.068', '0.064', '0.060', '0.058', '0.049'],
        ['250', '0.081', '0.082', '0.084', '0.080', '0.081', '0.069', '0.056'],
        ['350', '0.112', '0.122', '0.124', '0.120', '0.121', '0.091', '0.084'],
        ['450', '0.131', '0.142', '0.146', '0.135', '0.136', '0.139', '0.132']
      ]
    },
    certifications: ['ASTM C-612', 'BS 476', 'European standards', 'ASTM E-84'],
    compliance: ['ASTM', 'BS', 'EN', 'ISO'],
    price: 0,
    rating: 0,
    stock: 0,
  });

  // Rockwool Blankets (Rolls)
  products.push({
    id: generateProductId('Rockwool Blankets (Rolls)'),
    name: 'Rockwool Blankets (Rolls)',
    category: 'Insulation',
    subCategory: 'Rockwool Blankets (Rolls)',
    shortDescription: 'Flexible mineral wool insulation for thermal and acoustic applications',
    description: 'ROCKAL flexible insulation made from spun mineral wool derived from volcanic rock and slag. Ideal for thermal & acoustic insulation in commercial and industrial buildings with various facing options. Features fire resistance (Class A1), soundproofing, and moisture resistance with service temperature up to 750°C.',
    images: [
      'https://board.rockal.org/assets/dccf33ba-cfa3-4f93-aefc-6fb9de0f0b36?fit=cover&width=900&height=600&quality=80',
    ],
    shopLink: 'https://rockal.org/',
    catalogLink: '#downloads',
    features: {
      application: [
        'Thermal & Acoustic insulation of rectangular and round, heating, ventilation, air conditioning duct work temperature range 10°C to 600°C',
        'Used in commercial, industrial, and residential buildings specially for small areas. Helps saving energy up to 80%, controlling heat loss or gain and condensation during system operations',
        'Wall insulation - Rock wool blanket insulation can also be used in walls, either as a standalone insulation solution or as a supplement to existing insulation',
        'HVAC systems - Rock wool blanket insulation is commonly used to insulate heating and cooling ducts, reducing heat loss and improving energy efficiency',
        'Fireproofing - Rock wool blanket insulation can also be used for fireproofing in areas where fire safety is a concern'
      ],
      facing: [
        'Reinforced Aluminum Foil FSK',
        'FRK',
        'Unfaced',
        'Wire mesh',
        'BGT',
        'BGF',
        'Kraft Paper',
        'Vinyl Film'
      ],
      advantages: [
        'Fire resistance - Rockal Rock wool blanket insulation has excellent fire resistance',
        'Soundproofing - Rockal Rock wool blanket insulation provides excellent soundproofing properties',
        'Durability - Rockal Rock wool blanket insulation is long-lasting, durable and does not deteriorate over time',
        'Moisture and mold resistance - Rockal Rock wool blanket insulation is resistant to moisture and mold growth',
        'Environmentally friendly - Rockal Rock wool blanket insulation is made from sustainable and renewable materials and can be recycled',
        'Easy installation - Rockal Rock wool blanket insulation is easy to install'
      ],
      fireSafety: [
        'Class 1 Surface spread of flame in accordance to BS 476',
        'Class 0 in accordance to BS 476',
        'Class A1 in accordance to European standards',
        'Surface burning characteristics in accordance to ASTM E-84',
        'Fire Spread Index: Less than 10',
        'Smoke Developed Index: Less than 25'
      ]
    },
    technicalProperties: {
      serviceTemp: '400°C to 750°C',
      meltingTemp: '1500°C',
      outerFacingTempRange: '-29°C to 66°C',
      moistureAbsorption: '< 1% (By weight, Water repellant, Non-Hygroscopic, Non-Capillary, No Effect on Stability',
      corrosionResistance: 'PH 7 or Slightly Alkaline',
      solubleChlorides: '6 PPM',
      fungiResistance: "Doesn't encourage Fungi growth",
      noiseReductionCoefficient: '≈ 0.85',
      asbestosContent: 'Non-Toxic and not hazardous to health and Asbestos Free. Does not contain: AMPHIBOLE {CA2 MG3(OH)2 SI8 O22} Nor SERPENTINE Asbestos {MG3 SI2 (OH)4 O5}',
      environment: 'CFC and HCFC Free',
      expansionAndContraction: 'Completely Stable',
      shotContent: 'Less than 25% (ASTM C-1335)',
      condensation: 'The vapor diffusion of Rockal Rock wool is negligible it is considered zero compared to other insulation materials'
    },
    thermalConductivity: {
      headers: ['Mean Temperature (°C)', '35', '40', '50', '70', '100', '128', '140', '160', '200'],
      rows: [
        ['10', '0.036', '0.036', '0.036', '0.038', '0.037', '0.038', '0.038', '0.028', '0.028'],
        ['50', '0.036', '0.036', '0.036', '0.038', '0.037', '0.039', '0.035', '0.037', '0.037'],
        ['100', '0.046', '0.047', '0.047', '0.046', '0.046', '0.049', '0.039', '0.040', '0.040'],
        ['150', '0.054', '0.054', '0.055', '0.053', '0.054', '0.053', '0.041', '0.056', '0.057'],
        ['200', '0.066', '0.067', '0.068', '0.064', '0.060', '0.058', '0.049', '0.055', '0.059'],
        ['250', '0.081', '0.082', '0.084', '0.080', '0.081', '0.069', '0.056', '0.065', '0.067'],
        ['350', '0.112', '0.122', '0.124', '0.120', '0.121', '0.091', '0.084', '0.087', '0.088'],
        ['450', '0.131', '0.142', '0.146', '0.135', '0.136', '0.139', '0.132', '0.128', '0.135']
      ]
    },
    certifications: [
      'ASTM C-553-92 Type VII',
      'ASTM E-84',
      'ASTM E-119',
      'BS 476',
      'European standards'
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: 'ROCKAL'
  });

  // ==================== BOARDS CATEGORY ====================
  
  // Fiber Cement Boards
  products.push({
    id: 'fiber-cement-board',
    name: 'Fiber Cement Board',
    category: 'Boards',
    subCategory: 'Fiber Cement Boards',
    shortDescription: 'ASTM C-1186 compliant fiber cement board for interior and exterior applications',
    description: 'Mada Fiber Cement Board manufactured according to ASTM C-1186 standards. Available in standard dimensions with smooth texture finish for modern buildings. Suitable for wall paneling, false ceilings, mezzanine flooring, fire-rated partitions, and wet area applications. Standard size of 2400x1200mm with thickness options from 9.5mm to 18mm.',
    images: [
      'https://thumbs.dreamstime.com/b/close-up-stacked-fiber-cement-boards-showcasing-their-texture-edges-ready-construction-projects-351231325.jpg'
    ],
    specs: {
      'Length': '2400mm',
      'Width': '1200mm',
      'Thickness': '9.5mm, 12mm, 15mm, 16mm, 18mm',
      'Edge': 'Square',
      'Color': 'Grey',
      'Standard': 'ASTM C-1186'
    },
    features: {
      application: [
        'Wall paneling',
        'False ceiling',
        'Mezzanine flooring',
        'Fire rated partitions', 
        'Acoustic partitions',
        'Wet area application',
        'External application'
      ]
    },
    price: 0,
    rating: 0,
    stock: 0,
    brand: 'Mada'
  });

  // ==================== DOORS CATEGORY ====================
  
  // Steel Doors
  products.push({
    id: generateProductId('High Quality 2025 New Zhejiang Factory Steel Door'),
    name: 'Steel Doors (Single, One and Half, Double)',
    category: 'Doors',
    subCategory: 'Steel Doors',
    shortDescription: 'Modern design exterior steel door from Zhejiang factory',
    description: 'High-quality steel doors from Zhejiang factory with modern Southwestern design. Suitable for exterior residential and commercial applications. Minimum order quantity of 1 set with onsite inspection after-sale service. Project solution capability includes 3D model design for customized requirements.',
    specs: {
      'Material': 'Steel',
      'Application': 'Exterior',
      'Design Style': 'Southwestern',
      'After-sale Service': 'Onsite Inspection',
      'Project Solution Capability': '3D model design',
      'Min Order Quantity': '1 set',
    },
    images: [
      '//s.alicdn.com/@sc04/kf/Ha9b818f5c5bf444f94131d9d6086eefeJ.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H90f5221b18074402b6b38e5b528ae617Q.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H46eee2e0c5e84dc7a08e50b562755838p.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hf824c96437bb49118a6c5919ab4fc8a8C.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hb56ff820a9dd41119b75c69a1eb59a51i.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H6427d97f861d4e3ab7a25042799de923f.jpg_720x720q50.jpg'
    ],
    price: 0,
    rating: 0,
    stock: 100,
    brand: 'Zhejiang Shenggu',
    leadTime: '25 days for 1-100 sets, negotiable for larger orders'
  });

  // MDF Wooden Door
  products.push({
    id: generateProductId('Prehung WPC MDF Shaker Door Interior Flush Front Entry Bedroom Single Slab Wood Doors Design With Frames'),
    name: 'MDF Wooden Door',
    category: 'Doors',
    subCategory: 'MDF Wooden Door',
    shortDescription: 'Customizable modern interior MDF doors with heat insulation',
    description: 'Customizable MDF wooden doors with heat insulation, soundproofing, and waterproof features. Available in various sizes (customizable) and colors with paint finished or PVC film coated surface treatments. Includes lock set with handles and keys. MOQ of 10 pieces with 2 years warranty. Certified with ISO9001, ISO14001, SGS, and BV.',
    specs: {
      'Door Material': 'MDF',
      'Feature': 'Sound Insulation',
      'Main Material': 'Wooden',
      'Application': 'Bedroom',
      'Design Style': 'Modern',
      'Material': 'Moulded Board',
      'After-sale Service': 'Online technical support, Free spare parts',
      'Project Solution Capability': 'total solution for projects',
      'Position': 'Interior',
      'Warranty': '2 years',
      'Surface Finishing': 'Finished',
      'Opening Method': 'Side Opening',
      'Door Type': 'Polymer',
      'Material Details': 'HDF Wood Etc/Melamine Composite Wood/MDF',
      'Color': 'Customized Colors',
      'Size': 'Customized Size Acceptable',
      'Surface treatment': 'Paint Finished/PVC Film Coated',
      'Accessories': 'Lock Set - Handles + Keys',
      'Packing': 'Foam+Carton',
      'Infilling': 'Hollow Core/Honeycomb Paper',
      'Door leaf thickness': '40/45/50mm',
      'Advantage': 'Heat Insulation, Waterproof'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/H0dfeb7a7939e409a897293e80461be44Q.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/He78a2274a181439fbe230e078f76cf476.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hd0bb4528f12e416186da969d274ef99cB.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hfdae5bd669ec42bd8431abc1a17c7ad9R.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H699764d7c1c3400aafd6111ffd24dbb92.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H916036e1f0bf462fbddef39469aaf032P.jpg_720x720q50.jpg'
    ],
    price: 75,
    priceTiers: [
      { minQty: 10, maxQty: 99, price: 75 },
      { minQty: 100, maxQty: 199, price: 70 },
      { minQty: 200, price: 65 }
    ],
    rating: 0,
    stock: 0,
    brand: 'Hongnai',
    supplier: {
      name: 'Luoyang Hongnai Trading Co., Ltd.',
      type: 'Trading Company',
      location: 'China',
      yearsOnAlibaba: '2 yrs',
      responseTime: '≤2h',
      deliveryRate: '100.0%'
    },
    certifications: ['ISO9001', 'ISO14001', 'SGS', 'BV'],
    leadTime: '20 days for 1-500 pieces, negotiable for larger orders'
  });

  // Melamine Wooden Door
  products.push({
    id: generateProductId('Custom Modern WPC WPS Black White Prehung Interior Double Pivot Melamine Frameless Solid Oak Wood Door With Metal Strips'),
    name: 'Melamine Wooden Door',
    category: 'Doors',
    subCategory: 'Melamine Wooden Door',
    shortDescription: 'Custom modern door combining bamboo charcoal fiberboard and solid oak wood',
    description: 'High-end melamine wooden door combining bamboo charcoal fiberboard and solid oak wood. Features fire and moisture resistance with sound insulation. Suitable for kitchen, bathroom, bedroom, living room, and basement applications. Available in customized sizes and colors with 1 year warranty. Certified by UL 10C, WH, and CE.',
    specs: {
      'Door Material': 'MDF',
      'Feature': 'anti-theft',
      'Main Material': 'Wooden',
      'Application': 'Kitchen, Bathroom, Bedroom, Living Room, Basement',
      'Design Style': 'Modern',
      'Material': 'Wooden, PVC, Aluminum, Steel, Solid Oak Wood',
      'After-sale Service': 'Online technical support, Onsite Training, Free spare parts',
      'Project Solution Capability': 'graphic design',
      'Warranty': '1 Year',
      'Surface Finishing': 'Finished',
      'Opening Method': 'Push and Pull',
      'Color': 'Customized',
      'Size': 'Accept customized'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/H0917a7f98d0345c18665c5e71fc37977A.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H519b58b8eaa7451ca0e396e1fb3cf3b8K.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hefa512e116cb47d18cd2cb53d79f1bd3l.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H8c8e73b2a8b14b12a478e837d7ec52b5I.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H2b12dc375eb7492eae32c72ef3d49735j.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H95f977a1900047b4adb6b2501145fc6bz.jpg_720x720q50.jpg'
    ],
    price: 80,
    rating: 0,
    stock: 0,
    brand: 'TOF DOOR',
    supplier: 'Zhejiang Tofine Commercial & Trade Co., Ltd.',
    leadTime: '35 days for 1-3000 pieces, 45 days for 3001-4000 pieces, negotiable for >4000 pieces',
    certifications: ['UL 10C', 'WH', 'CE'],
    packaging: {
      'Selling units': 'Single item',
      'Single package size': '205X96X7 cm',
      'Single gross weight': '50.000 kg'
    },
    priceTiers: [
      { quantity: '100-249 pieces', price: 100 },
      { quantity: '250-399 pieces', price: 90 },
      { quantity: '≥400 pieces', price: 80 }
    ]
  });

  // Full WPC Door
  products.push({
    id: generateProductId('WPC Door'),
    name: 'WPC Door',
    category: 'Doors',
    subCategory: 'Full WPC Door',
    shortDescription: 'Eco-friendly WPC door with waterproof and flame retardant properties',
    description: 'Full WPC (Wood Plastic Composite) door made from eco-friendly, recyclable materials. Features waterproofing, flame retardancy, insect resistance, sound insulation, and warmth. Modern design with customizable color options and foldable opening. Ideal for hotel interior applications. Model XG-001 with 20 days lead time for 1-200 sets.',
    specs: {
      'Door Material': 'WPC',
      'Main Material': 'wpc',
      'Application': 'Hotel',
      'Design Style': 'Modern',
      'After-sale Service': 'Online technical support, Onsite Installation, Onsite Training',
      'Surface Finishing': 'Finished',
      'Opening Method': 'Foldable',
      'Door Type': 'Glass',
      'STYLE': 'INTERIOR',
      'Color': 'Customized Color',
      'Position': 'Interior',
      'Open Style': 'Folding',
      'Type': 'Entry Doors',
      'Packaging Details': 'carton or pallet',
      'Port': 'Qingdao',
      'Supply Ability': '10000 Set/Sets per Month'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/Hf03d196683af471e86e8d4a37ec74f5eX.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H23dca117778343b6bcbd286b1ff84528v.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H7147b11dd4444c51bfc89196bad24674s.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hff0497b8ae894fcba74f2fa352fac916t.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H59c22a2ccac34e9db891ed701ed1934cB.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hb02cf6366e9b4238a4c4920d13a3016ac.jpg_720x720q50.jpg'
    ],
    price: 80,
    rating: 0,
    stock: 0,
    brand: 'XG',
    leadTime: '20 days for 1-200 sets, negotiable for larger orders',
    supplier: {
      name: 'Shandong Everjoy Technology Material Co., Ltd.',
      type: 'Manufacturer, Trading Company',
      location: 'China',
      yearsOnAlibaba: 5,
      deliveryRate: '100.0%',
      responseTime: '≤4h'
    }
  });

  // WPC Skin Door
  products.push({
    id: generateProductId('WPC Skin Door'),
    name: 'WPC Skin Door',
    category: 'Doors',
    subCategory: 'WPC Skin Door',
    shortDescription: 'Hollow core interior bathroom WPC skin door with waterproof feature',
    description: 'WPC skin door with hollow core design featuring waterproof properties. Standard size options include height*width*thickness=2000*700/800/900*35/40/45mm (customizable). Functions include waterproof, fire-retardant, soundproof, and environmental features. Gross weight of 30-40kg with swing open style for interior entry doors.',
    specs: {
      'Door Material': 'wood plastic composite',
      'Feature': 'Waterproof',
      'Application': 'Bedroom',
      'Design Style': 'Modern',
      'After-sale Service': 'yes',
      'Model': 'wpc skin door',
      'Color': 'reference to our color card or clients\' color sample',
      'Standard Size': 'Height*Width*Thickness=2000*700/800/900*35/40/45mm',
      'Thickness': '35/40/45mm, other thickness need open mould',
      'Other Width': '600/650/700/750/800/850/900/950/1000/1080mm',
      'Height': 'can be customized',
      'Gross weight': '30-40kg',
      'Door Type': 'Interior entry door',
      'Door Frame': 'as per wall width',
      'Open style': 'swing',
      'Function': 'waterproof, Fire-retardant, Soundproof, Environmental'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/H7dd04f73d65047f18e4423a56876e142k.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hfd214bec58954299bd1d4714d8e7232bm.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H5b081eb6c9714d65acbac6673cd854f0R.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Ha916d2d3320b43c19ca5fc201fa5cf67C.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H5ba528111b7149dd97947353f043e711d.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H02b6a07e7b7b4270961c13f2e61416a4p.png_720x720q50.jpg'
    ],
    price: 50,
    rating: 0,
    stock: 100,
    brand: 'Huangshan Best Balance',
    leadTime: '15 days for 1-50 sets, negotiable for larger orders',
    supplier: {
      name: 'Huangshan Best Balance Industry & Trade Co., Ltd.',
      type: 'Manufacturer, Trading Company',
      location: 'China',
      yearsOnAlibaba: 4,
      responseTime: '≤3h',
      onlineRevenue: 'US$30,000+'
    }
  });

  // WPC Glass Door
  products.push({
    id: generateProductId('WPC Glass Door'),
    name: 'WPC Glass Door',
    category: 'Doors',
    subCategory: 'WPC Glass Door',
    shortDescription: 'High-quality WPC glass door for various interior applications',
    description: 'WPC glass door with soundproof and environmental features. Available in base material or customized colors with door leaf thickness options of 35mm/40mm/45mm. Standard door widths from 600mm to 1080mm with customizable heights. Features include waterproof, fire-retardant, and soundproof properties with 5 years warranty.',
    specs: {
      'Door Material': 'Wood Plastic Composite',
      'Feature': 'Waterproof',
      'Application': 'Bedroom/Hotel/Office',
      'Design Style': 'Modern',
      'After-sale Service': 'Online technical support',
      'Warranty': '5 years',
      'Surface Finishing': 'Finished',
      'Opening Method': 'Side Opening',
      'Door Type': 'Polymer',
      'Color': 'Base Material Or Customized Color',
      'Door leaf thickness': '35mm/40mm/45mm',
      'Door Width': '600mm/700mm/830mm/900mm/920mm/1000mm/1080mm',
      'Door Height': 'Customized',
      'Gross weight': '30-40KG',
      'Function': 'Soundproof/Environmental/Fireretardant'
    },
    images: [
      '//s.alicdn.com/@sc04/kf/Habb11d28da014a74bcee2fcb72f0d593O.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H4323168fdc0c4e3a88fb51fabfeee83cJ.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H55845edddcbb41939b61e0cb20af54b3n.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H8a0c1828fd27445596394439034be52bw.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H90b16569d11544648dbbc5032cec0588Y.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/He19b3e96da5841d5bed22a91991bb3beL.jpg_720x720q50.jpg'
    ],
    price: { min: 50, max: 120, currency: 'USD' },
    minOrder: 50,
    rating: 0,
    stock: 0,
    brand: 'Best Balance',
    supplier: {
      name: 'Huangshan Best Balance Industry & Trade Co., Ltd.',
      type: 'Manufacturer, Trading Company',
      yearsOnAlibaba: 4,
      location: 'China',
      responseTime: '≤3h',
      onlineRevenue: 'US$ 30,000+'
    },
    customizationOptions: [
      'Customized logo (Min. order: 100 sets)',
      'Customized packaging (Min. order: 100 sets)',
      'Graphic customization (Min. order: 100 sets)'
    ],
    leadTime: {
      '1-50 sets': '15 days',
      '>50 sets': 'To be negotiated'
    },
    packaging: {
      singlePackageSize: '240X10X10 cm',
      singleGrossWeight: '20.000 kg'
    }
  });

  // ==================== SAFETY PRODUCTS CATEGORY ====================
  
  // Safety Shoes
  products.push({
    id: generateProductId('Summer Breathable Safety Shoes'),
    name: 'Safety Shoes',
    category: 'Safety Products',
    subCategory: 'Safety Shoes',
    shortDescription: 'Breathable safety shoes with steel toe protection',
    description: 'Summer breathable safety shoes featuring steel toe protection with smash-proof and stab-proof capabilities. Made from microfiber leather upper and PVC/rubber outsole. CE certified with unisex design suitable for construction and factory environments. Available in various sizes with competitive pricing starting from $13.90.',
    specs: {
      'Upper Material': 'Microfiber leather',
      'Outsole Material': 'PVC, Rubber',
      'Feature': 'Steel Toe',
      'Midsole Material': 'Rubber',
      'Lining Material': 'Mesh, Cotton Fabric',
      'Gender': 'Unisex',
      'Application': 'Construction, Factory',
      'Season': 'All seasons',
      'Style': 'Work',
      'Toe Style': 'Steel toe',
      },
    features: {
        application:[
      'Stab-proof protection',
      'Smash-proof steel toe',
      'Waterproof design',
      'Construction',
      'Wear-resistant materials',
      'Breathable for construction use',
      'Anti-slip outsole'
    ]
  },
    images: [
      '//s.alicdn.com/@sc04/kf/H6e20d809ecdd493bbf27d6b1ac459cc0w.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hd6af6b8de6c948bbaf0e2635d4b33281L.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H73090046091941d985cc2475b6944cddx.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hf0e11d8f72fd4eda8b23987eed2ee1dfj.jpg_720x720q50.jpg'
    ],
    price: 13.90,
    rating: 5.0,
    stock: 1000,
    brand: 'Coeffort',
    leadTime: '3 days for 1-100 pairs, 7 days for 101-1000 pairs',
    supplier: {
      name: 'Xiamen Coeffort Import And Export Co., Ltd.',
      location: 'China',
      yearsInBusiness: 2,
      rating: '96.4% positive reviews'
    },
    customizationOptions: [
      'Customized logo (Min. order: 100 pairs)',
      'Customized packaging (Min. order: 100 pairs)',
      'Graphic customization (Min. order: 100 pairs)'
    ]
  });

  // Safety Jackets
  products.push({
    id: generateProductId('Factory Supply Safety Vest Ropa De Trabajo Work Clothing Heavy Duty High Visibility Reflective Work Vest'),
    name: 'Safety Jackets',
    category: 'Safety Products',
    subCategory: 'Safety Jackets',
    shortDescription: 'Heavy duty high visibility reflective work vest',
    description: 'CAT 2 Hi-Visibility safety vests made from 7.5oz 88% Cotton 12%Nylon FR Twill fabric. Available in high visibility yellow color with sizes from XS-6XL. Certified by UL, TUV, Oeko-Tex 100, ISO9001, CE, SGS, and AITEX. Meets standards including NFPA2112, CGSB155.20, ASTM F1506, EN 11611, EN11612, EN1149, and EN61482.',
    specs: {
      'Function': 'Reflective',
      'Product Type': 'CAT 2 Hi-Visibility Yellow Flame Resistant & Retardant Safety Vests',
      'Fabric': '7.5oz 88% Cotton 12%Nylon FR Twill',
      'Color': 'High Visibility Yellow',
      'Size': 'XS-6XL',
      'Service': 'OEM/ODM service',
      'Certification': 'UL, TUV, Oeko-Tex 100, ISO9001, CE, SGS, AITEX',
      'Standards': 'NFPA2112, CGSB155.20, ASTM F1506, EN 11611, EN11612, EN1149, EN61482',
    },
    images: [
      '//s.alicdn.com/@sc04/kf/H8a200ff749424bc4b0488b7fe98e4d24o.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/He6355243e0ad49cd887e90a823e9cc84C.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H945d011d8da648e38bf068f8fa7fa305l.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H5a5aae91d6dd479fa347da7b71e6a51cA.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H7f88e90e8da843cf837b09305aebf548n.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Ha44e1a569b54406391c3bf429d854d37P.jpg_720x720q50.jpg'
    ],
    features: {
        application:[
      'Mining Industry',
      'Welding',
      'Electric power',
      'Oil and Gas',
      'Wear-resistant materials',
      'Construct Industry',
    ]
  },
    price: 0,
    rating: 0,
    stock: 0,
    brand: 'Henan Eastman Protection Technology Co., Ltd.',
    leadTime: '35 days for 1-5000 pieces, negotiable for larger orders',
  });

  // ==================== ELECTRICAL ITEMS CATEGORY ====================
  
  // Wires and cables
  products.push({
    id: generateProductId('Wires and cables'),
    name: 'Wires and cables',
    category: 'Electrical Items',
    subCategory: 'Wires and cables',
    shortDescription: 'High-quality electrical wires and cables for residential and commercial use',
    description: 'Premium electrical wires and cables including PVC insulated wires, armored cables, and flexible cords. Available in various sizes (1.5mm² to 10mm²) and colors (red, black, blue, yellow/green, white). Voltage ratings of 300/500V and 450/750V with temperature range of -15°C to +70°C. Complies with IEC 60227 and BS 6004 standards.',
    specs: {
      'Material': 'Copper conductor with PVC insulation',
      'Voltage Rating': '300/500V, 450/750V',
      'Temperature Range': '-15°C to +70°C',
      'Standards': 'IEC 60227, BS 6004',
      'Available Sizes': '1.5mm², 2.5mm², 4mm², 6mm², 10mm²',
      'Colors': 'Red, Black, Blue, Yellow/Green, White'
    },
    images: [
  "https://s.alicdn.com/@sc04/kf/H200c2741cb2b44a688b81d2add60f01eL.png_720x720q50.jpg",
  "https://s.alicdn.com/@sc04/kf/H67ed7530b3f2436bb7458fa14e0b700cH.png_720x720q50.jpg",
  "https://s.alicdn.com/@sc04/kf/H899af4ee43dc4c8c90b58af6a76117118.jpeg_720x720q50.jpg",
  "https://s.alicdn.com/@sc04/kf/Hd713de46411143d5aec2ea3708e4f2d5T.jpeg_720x720q50.jpg",
  "https://s.alicdn.com/@sc04/kf/H1c40df69a552461b84c41a5951f242e76.jpeg_720x720q50.jpg",
  "https://s.alicdn.com/@sc04/kf/Hf016138c0a8b49178085e4f031e149c54.jpeg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For more details about specific cable types and technical specifications, please contact us.'
  });

  // Circuit Breakers & Distribution Boards
  products.push({
    id: generateProductId('Circuit Breakers & Distribution Boards'),
    name: 'Circuit Breakers & Distribution Boards',
    category: 'Electrical Items',
    subCategory: 'Circuit Breakers & Distribution Boards',
    shortDescription: 'Reliable circuit protection devices including MCBs and RCCBs',
    description: 'Comprehensive range of circuit protection devices including MCBs (Miniature Circuit Breakers), RCCBs (Residual Current Circuit Breakers), and distribution boards. Available in single pole to four pole configurations with current ratings from 6A to 63A and breaking capacity of 6kA to 10kA. Complies with IEC 60898 and IEC 61009 standards.',
    specs: {
      'Types': 'Single Pole, Double Pole, Triple Pole, Four Pole',
      'Current Rating': '6A to 63A',
      'Breaking Capacity': '6kA to 10kA',
      'Standards': 'IEC 60898, IEC 61009',
      'Enclosure Material': 'Plastic or Metal (for distribution boards)',
      'Protection Class': 'IP40 to IP65'
    },
    images: [
  "//s.alicdn.com/@sc04/kf/H158927b95dde4c838d811fe117e39aefA.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H6bd5459a82584d1282d8b173eb62b322Z.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H1f7e772a8987416cba5cf67fd7d25057M.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hdb2393303d554dfa9c14dd4906592a0bI.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hb7009c6f5d444a9e9007542a045d71a1W.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H0a13b3568cb24cb88d5b4d344bf039b73.jpg_720x720q50.jpg",
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Contact us for complete product range including RCBOs and surge protection devices.'
  });

  // Light Fittings
  products.push({
    id: generateProductId('Light Fittings'),
    name: 'Light Fittings',
    category: 'Electrical Items',
    subCategory: 'Light Fittings',
    shortDescription: 'Modern and durable light fittings for various applications',
    description: 'High-quality light fittings including ceiling roses, batten holders, and weatherproof fixtures. Made from polycarbonate, aluminum, or steel with IP ratings from IP20 to IP65. Compatible with LED, CFL, and incandescent lamps. Available in surface, pendant, and recessed mounting types. CE and RoHS compliant.',
    specs: {
      'Material': 'Polycarbonate, Aluminum, Steel',
      'IP Rating': 'IP20 to IP65 (weatherproof options available)',
      'Voltage': '220-240V AC',
      'Lamp Compatibility': 'LED, CFL, Incandescent',
      'Mounting Type': 'Surface, Pendant, Recessed',
      'Certifications': 'CE, RoHS compliant'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/H16f076e9001440aaa0fc44c6fc8beafdk.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Head21f66f238436388b86ef0686b635a2.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H82d64462450d476589046cf736dfb400x.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hb2fbc7e6510b4bf493bc7011ce32a8edH.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H28001511321d4959bc1ba8427d5c91d72.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H5578bc7eaf964ceba703dc3a636ba964Z.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For complete catalog of light fittings including decorative options, please contact us.'
  });

  // Lighting
  products.push({
    id: generateProductId('Lighting'),
    name: 'Lighting',
    category: 'Electrical Items',
    subCategory: 'Lighting',
    shortDescription: 'Energy-efficient LED lighting solutions for various applications',
    description: 'Comprehensive range of LED lighting solutions including bulbs, tubes, panels, and flood lights. Available in wattages from 5W to 200W with color temperatures from 2700K (Warm White) to 6500K (Daylight). Features luminous flux from 800lm to 20,000lm and lifespan of 25,000 to 50,000 hours. Dimmable options available for selected models.',
    specs: {
      'Wattage': '5W to 200W',
      'Color Temperature': '2700K (Warm White) to 6500K (Daylight)',
      'Luminous Flux': '800lm to 20,000lm',
      'Lifespan': '25,000 to 50,000 hours',
      'Dimmable Options': 'Available for selected models',
      'Warranty': '2-5 years depending on product'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/H417b8c14c9854e429bf7a39db10d1e4fH.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H532fef1ad6f54c38972c488840ed22bdl.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H6dfe26790e5140d7a3a87590a9d332b5W.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H8172cfb08d51478eb11a3caa2ad8bf1fH.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H43f5c720ce0648738cb8333b43c50259D.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H191cf8bd32564bae86041d1539b328e2n.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Contact us for specialized lighting solutions including smart lighting systems.'
  });

  // Fans
  products.push({
    id: generateProductId('Fans'),
    name: 'Fans',
    category: 'Electrical Items',
    subCategory: 'Fans',
    shortDescription: 'High-performance ceiling fans, exhaust fans, and industrial fans',
    description: 'Wide range of fans including ceiling, exhaust, pedestal, and wall-mounted models. Sizes from 900mm to 1400mm (ceiling fans) with 3-6 speed options. Power consumption of 50W to 100W with air delivery from 200 CMM to 500 CMM. Special features include remote control, reversible direction, and decorative designs.',
    specs: {
      'Types': 'Ceiling, Exhaust, Pedestal, Wall-mounted',
      'Size': '900mm to 1400mm (ceiling fans)',
      'Speed': '3-6 speed options',
      'Power Consumption': '50W to 100W',
      'Air Delivery': '200 CMM to 500 CMM',
      'Special Features': 'Remote control, reversible direction, decorative designs'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/H52db4b4f63e34ec2b56b54053ece72a3M.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H17fb6e6cdb13414090ef704dbcd925503.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H9a9c27f2b9d047af90ce7ec39c0c8c8fN.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Ha2e33f0dd5eb45d2a153c514c718b97aK.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H0ffc0da1a57b44edada9984182c7fc1fj.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For commercial and industrial fan requirements, please contact our sales team.'
  });

  // Electrical Appliances
  products.push({
    id: generateProductId('Electrical Appliances'),
    name: 'Electrical Appliances',
    category: 'Electrical Items',
    subCategory: 'Electrical Appliances',
    shortDescription: 'Range of quality electrical appliances for home and commercial use',
    description: 'Comprehensive selection of electrical appliances including water heaters, water pumps, mixers, and toasters. Power ratings from 500W to 3000W depending on appliance with 220-240V AC voltage. Features thermal cut-off and dry burn protection for safety. Comes with 1-2 years manufacturer warranty.',
    specs: {
      'Product Range': 'Water heaters, water pumps, mixers, toasters',
      'Power Rating': '500W to 3000W depending on appliance',
      'Voltage': '220-240V AC',
      'Safety Features': 'Thermal cut-off, dry burn protection',
      'Warranty': '1-2 years manufacturer warranty'
    },
    images: ['https://cdn.firstcry.com/education/2023/01/13101355/Names-Of-Household-Appliances-In-English.jpg'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Contact us for complete product catalog and specifications of each appliance.'
  });

  // Home Automation
  products.push({
    id: generateProductId('Home Automation'),
    name: 'Home Automation',
    category: 'Electrical Items',
    subCategory: 'Home Automation',
    shortDescription: 'Smart home automation systems for lighting control and security',
    description: 'Advanced home automation systems compatible with Alexa and Google Assistant. Uses WiFi, Zigbee, and Z-Wave protocols for control via mobile app, voice, or wall panels. System components include smart switches, sensors, and gateways. Can integrate with existing electrical systems for comprehensive home automation solutions.',
    specs: {
      'Compatibility': 'Works with Alexa, Google Assistant',
      'Protocols': 'WiFi, Zigbee, Z-Wave',
      'Control Options': 'Mobile app, voice control, wall panels',
      'System Components': 'Smart switches, sensors, gateways',
      'Integration': 'Can integrate with existing electrical systems'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/H3948b2dda0cf47ff88e04163f4057ce5d.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Ha168b66f3e494dda89e3a3f2ef57b3015.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/He009cc73c6d24074bda1496135c86de1b.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H5b2e4d15126943b4b3cfd719112ed65cI.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H23444879d9c3490087ba33d122ab29fcZ.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hedfc9ccbc8484ea4aa08642e9115c4d7n.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For customized home automation solutions and installation services, please contact us.'
  });

  // Electrical switches and sockets
  products.push({
    id: generateProductId('Electrical switches and sockets'),
    name: 'Electrical switches and sockets',
    category: 'Electrical Items',
    subCategory: 'Electrical switches and sockets',
    shortDescription: 'Premium quality switches and sockets in modern designs',
    description: 'High-quality switches and sockets including toggle switches, rocker switches, dimmers, and USB sockets. Current ratings of 10A, 16A, and 20A with high-grade PC material and silver contacts. Complies with IEC 60669 and BS 1363 standards. Available in white, metallic, matte, and glossy finishes.',
    specs: {
      'Range': 'Toggle switches, rocker switches, dimmers, USB sockets',
      'Current Rating': '10A, 16A, 20A',
      'Material': 'High-grade PC with silver contacts',
      'Safety Standards': 'IEC 60669, BS 1363',
      'Finishes': 'White, metallic, matte, glossy options'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/H5ba5e59b38c845088ba12341476b58bdV.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H951019c01a1f448eb70d804137eae3eaf.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hc99db67aa0974ba2875265c368544501k.png_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For modular wiring accessories and complete range details, contact our sales team.'
  });

  // Electrical Conduit Pipes
  products.push({
    id: generateProductId('Electrical Conduit Pipes'),
    name: 'Electrical Conduit Pipes',
    category: 'Electrical Items',
    subCategory: 'Electrical Conduit Pipes',
    shortDescription: 'Durable conduit pipes for electrical wiring protection',
    description: 'Robust conduit pipes for electrical wiring protection in buildings and industrial applications. Available in PVC and galvanized steel materials with sizes from 20mm to 50mm. Includes rigid, flexible, and corrugated types. Temperature range of -5°C to +60°C (PVC). Complies with IEC 61386 and BS 4607 standards.',
    specs: {
      'Material': 'PVC, Galvanized Steel',
      'Sizes': '20mm, 25mm, 32mm, 40mm, 50mm',
      'Types': 'Rigid, Flexible, Corrugated',
      'Temperature Range': '-5°C to +60°C (PVC)',
      'Standards': 'IEC 61386, BS 4607'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/H6e946f0c896e454cb574c1f015bb36b4A.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H500c4d2c8fff4dbeaa7172c83718ad5ba.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H4be4c47ba8c34c888968b69850a8b510O.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H4b57bbeea66b47b9bd01a8340dfb32ffe.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H9375e3679aad4d628105d6defa913a21x.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H96005dfd937d47f2a3fd6223e0946b70K.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For bulk orders and specialized conduit solutions, please contact us.'
  });

  // Cable Tray Systems
  products.push({
    id: generateProductId('Cable Tray Systems'),
    name: 'Cable Tray Systems',
    category: 'Electrical Items',
    subCategory: 'Cable Tray Systems',
    shortDescription: 'Complete cable management solutions for industrial and commercial use',
    description: 'Comprehensive cable management solutions including ladder type, perforated, and channel cable trays. Available in galvanized steel, stainless steel, and aluminum with widths from 50mm to 600mm. Features light, medium, and heavy duty load capacities with hot-dip galvanized or powder coated finishes. Includes bends, reducers, and connectors.',
    specs: {
      'Material': 'Galvanized steel, Stainless steel, Aluminum',
      'Width': '50mm to 600mm',
      'Load Capacity': 'Light, Medium, Heavy duty',
      'Finish': 'Hot-dip galvanized, Powder coated',
      'Accessories': 'Bends, reducers, connectors available'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/Hbc2019a4cec64819bf277fe05a527087v.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H8c0ab00c76894e9bbc770698e5d533b8s.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H07300342f6774c1c8fc0bfd760e05c54y.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H6ce9009f346947698fdc70ee84c8ca126.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hd2ffa5f7cbed469a97c84bcec25048f7n.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H361b26bcab364cce86bc831226961bc3S.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Contact us for custom cable tray solutions and installation support.'
  });

  // Electrical Boxes & Covers
  products.push({
    id: generateProductId('Electrical Boxes & Covers'),
    name: 'Electrical Boxes & Covers',
    category: 'Electrical Items',
    subCategory: 'Electrical Boxes & Covers',
    shortDescription: 'Junction boxes and covers for safe electrical connections',
    description: 'Durable electrical boxes and covers including junction boxes, back boxes, and weatherproof fixtures. Available in PVC, polycarbonate, and metal materials with surface mount and flush mount options. IP ratings up to IP65 for outdoor use with wall, ceiling, and floor mounting options.',
    specs: {
      'Material': 'PVC, Polycarbonate, Metal',
      'Types': 'Surface mount, Flush mount, Weatherproof',
      'Size': 'Standard and custom sizes available',
      'IP Rating': 'IP55, IP65 for outdoor use',
      'Mounting': 'Wall, Ceiling, Floor mounting options'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/H6495b8066d2443c390fbdedfc2e9af28e.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hef7365c31d91437cae531bc24469990bt.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H5727619f430c4f15a40fcde345b008587.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H78e53992ef33440fac06c56093f29c1d6.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H3ef6770d621e4e638d3392312042c75dE.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H4268a1d2ac8842298ca7c503aaa77263X.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For specialized enclosure requirements, please contact our technical team.'
  });

  // Electrical Enclosures
  products.push({
    id: generateProductId('Electrical Enclosures'),
    name: 'Electrical Enclosures',
    category: 'Electrical Items',
    subCategory: 'Electrical Enclosures',
    shortDescription: 'Robust electrical enclosures for housing electrical components',
    description: 'Durable electrical enclosures for housing electrical components, control panels, and distribution systems. Available in stainless steel, aluminum, and fiberglass with protection class from IP54 to IP66. Sizes range from small (200x200mm) to large (2000x1000mm) with wall-mounted, free-standing, and rack-mounted options. Special features include lockable doors and ventilation options.',
    specs: {
      'Material': 'Stainless steel, Aluminum, Fiberglass',
      'Protection Class': 'IP54 to IP66',
      'Size Range': 'Small (200x200mm) to Large (2000x1000mm)',
      'Mounting': 'Wall-mounted, Free-standing, Rack-mounted',
      'Special Features': 'Lockable, Transparent doors, Ventilation options'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/Hb93f78da707b427bb7f87650b5280fd1o.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H95b57353b9c7431c98d35f94a1047ab53.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hb78846f9a8dd4d2289ebd931e49f4d93K.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H01657409cfe344fb8c7e0b39e16b0414n.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H919375fa17af4175b27c279c486d6d89b.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H5fa750eb81b9460aaadd14761f09b76fO.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Custom enclosure solutions available - contact us for design requirements.'
  });

  // ==================== SCREWS/FASTENERS CATEGORY ====================
  
  // Self Drilling Screw Hex Head W/EPDM
  products.push({
    id: generateProductId('Self Drilling Screw Hex Head W/EPDM'),
    name: 'Self Drilling Screw Hex Head W/EPDM',
    category: 'Screws/Fasteners',
    subCategory: 'Self Drilling Screw Hex Head W/EPDM',
    shortDescription: 'Hex head self drilling screws with EPDM washer',
    description: 'High-quality self drilling screws with hex head and EPDM washer. Available in various sizes including 6.3*75mm (13.5kg/1000pcs), 6.3*63mm (11.8kg/1000pcs), 6.3*25mm (6.4kg/1000pcs), 5.5*25mm (5.3kg/1000pcs), and 6.3*100mm (17.1kg/1000pcs). Ideal for construction and metal applications.',
    specs: {
      'Size 6.3*75mm': 'Weight 13.5kg/1000pcs - 14*3',
      'Size 6.3*63mm': 'Weight 11.8kg/1000pcs - 14*2',
      'Size 6.3*25mm': 'Weight 6.4kg/1000pcs - 12*1',
      'Size 5.5*25mm': 'Weight 5.3kg/1000pcs - 14*1',
      'Size 6.3*100mm': 'Weight 17.1kg/1000pcs - 14*4'
    },
    images: [
  "//s.alicdn.com/@sc04/kf/Hb144d21d6a87443990b78c4b5fdcccd6U.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Had2a3d9a4e994c63bcb60790fa778114j.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H7d97425e2c13460bbce8a8e731ecc96dD.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H68f76ebe43c74fbf890886b9116b50745.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H1ca3fd5f8ce546fb89d9a95a30d2593cQ.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H1f862aee99f54f6aa0118145a4f67761N.png_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Reach out to our team for detailed information.'
  });

  // Self Drilling Screw PAN Washer Head
  products.push({
    id: generateProductId('Self Drilling Screw PAN Washer Head'),
    name: 'Self Drilling Screw PAN Washer Head',
    category: 'Screws/Fasteners',
    subCategory: 'Self Drilling Screw PAN Washer Head',
    shortDescription: 'PAN washer head self drilling screws',
    description: 'Self drilling screws with PAN washer head design. Available in size 4.2*19mm with weight of 1.45kg/1000pcs. Ideal for various construction and metal joining applications where a flush finish is required.',
    specs: {
      'Size 4.2*19mm': 'Weight 1.45kg/1000pcs - 8*3/4'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/H106ca44810884916b12d620d5812132ah.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H03c067b57b9745ba95bacce6e02ac3b7o.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H594b70ff784244bbbad981e725658252E.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H4c8226537bee4d73814d6f217a4321b7Z.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H9357ba5140fd49298e64fae7d6ea7e2fI.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H58cbedefeecd483d8a1937e76eea21feE.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Reach out to our team for detailed information.'
  });

  // Self Drilling Screw Truss Head PHILIPS
  products.push({
    id: generateProductId('Self Drilling Screw Truss Head PHILIPS'),
    name: 'Self Drilling Screw Truss Head PHILIPS',
    category: 'Screws/Fasteners',
    subCategory: 'Self Drilling Screw Truss Head PHILIPS',
    shortDescription: 'Truss head PHILIPS self drilling screws',
    description: 'Self drilling screws with truss head and PHILIPS drive. Available in size 4.8*19mm. Ideal for applications requiring a low-profile head with good bearing surface.',
    specs: {
      'Size 4.8*19mm': '10*3/4'
    },
    images: [
      "//s.alicdn.com/@sc04/kf/Ha77c26421b624a16a187731b0fa61a63X.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H918207bd26fa4e1fabd551b318f8e499b.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H6aa26bbf81144d82a3c8c8c66ff5a24dV.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hcf6a8109f5a241a78c81c6e8fd8dd58eU.jpg_720x720q50.jpg",
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Reach out to our team for detailed information.'
  });

  // Self Drilling Drywall Screw Bungle
  products.push({
    id: generateProductId('Self Drilling Drywall Screw Bungle'),
    name: 'Self Drilling Drywall Screw Bungle',
    category: 'Screws/Fasteners',
    subCategory: 'Self Drilling Drywall Screw Bungle',
    shortDescription: 'Drywall screws with bungle head for plasterboard applications',
    description: 'Self drilling drywall screws with bungle head design. Available in sizes 3.9*38mm (2.65kg/1000pcs), 4.2*32mm (2.1kg/1000pcs), and 3.9*32mm (2.65kg/1000pcs). Features include flat head with wings and phosphating treatment for corrosion resistance.',
    specs: {
      'Size 3.9*38mm': 'Weight 2.65kg/1000pcs - 7*1 1/2 - Flat Head with wings',
      'Size 4.2*32mm': 'Weight 2.1kg/1000pcs - 8*1 1/4 - Philis Bungle Head Phosphating Treatment',
      'Size 3.9*32mm': 'Weight 2.65kg/1000pcs - 7*1 1/4 - Flat Head with wings'
    },
    images: [
  "//s.alicdn.com/@sc04/kf/H9b76612b448647ceaf31f14ec8cb1eed6.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hf3f41de5b72f470395b95bd74deb8af00.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H804096cff83b4ba1a9936ccc21945526W.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H17733b8d838b4f4da6dbdeb113ccabae0.png_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H7899f968a49046c3ae1a8b5c15a877f8e.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H182abdb510b847b0ad612b7ef16e5da5u.jpg_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Reach out to our team for detailed information.'
  });

  // Screw - Roto Bit
  products.push({
    id: generateProductId('Screw - Roto Bit'),
    name: 'Screw - Roto Bit',
    category: 'Screws/Fasteners',
    subCategory: 'Screw - Roto Bit',
    shortDescription: 'Specialized roto bit screws for specific applications',
    description: 'Specialized screws designed for use with roto bit applications. Available in size 2*65mm. Ideal for specific fastening requirements where standard screws may not be suitable.',
    specs: {
      'Size': '2*65 mm'
    },
    images: [
        "//s.alicdn.com/@sc04/kf/H846cc34b258d47cbbc1e87bf6447a4baL.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hae8bc0fc37c4411ea2331dc9e97ae3c79.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H6bf2f311b63a41a1985ac2af365b8a74S.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/Hdf30b60e1e224527a8dba7dbfecb25c0Q.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H9689739c5a6e4cd28df943dc25ce398dK.jpg_720x720q50.jpg",
  "//s.alicdn.com/@sc04/kf/H17257231735d45b9a75102f7e3a82d46b.png_720x720q50.jpg"
    ],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Reach out to our team for detailed information.'
  });

  return products;
};

// Generate all products
export const allProducts = generateProducts();

// Helper functions
export const getProductById = (productId) => {
  return allProducts.find(product => product.id === productId);
};

export const getRelatedProducts = (productId) => {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return [];
  return allProducts
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, 4);
};

export default {
  productCategories,
  subCategories,
  allProducts,
  getProductById,
  getRelatedProducts
};