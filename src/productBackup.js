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
  products.push(
  {
  id: 'highly-resistance-pvc-vinyl-plastic-material-dance-covering-mat',
  name: 'Vinyl/ PVC Flooring/ Carpet Paving',
  category: 'Flooring',
  subCategory: 'Vinyl/PVC Flooring',
  description: 'Dance room floor studio flooring roll for gymnastics ballet. Highly resistant PVC vinyl material suitable for dance studios and performance areas.',
  specs: {
    'Material': 'PVC',
    'Product Type': 'Vinyl Roll',
    'Feature': 'Anti-Scratch, Waterproof, Anti-Slip, wear resistant',
    'Thickness': '1.5 MM, 2 MM, 2.5 MM, 3 MM (customizable)',
    'Width': ' 4 Meter, 2 Meter (customizable)',
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
  price: 0, // Price not specified in the HTML
  rating: 0, // No reviews yet
  stock: 0, // Stock information not provided
}
  );

  // SPC Flooring
  products.push(
  {
  id: 'modern-8mm-grey-spc-hybrid-flooring',
  name: 'PC Flooring Paving',
  category: 'Flooring',
  subCategory: 'SPC Flooring',
  description: ' SPC Flooring with moisture resistance, heat insulation, and modern forrest design. Features anti-slip, waterproof, and wear-resistant properties while supporting custom sizes and colors.',
  specs: {
    'Thickness': '8mm',
    'Material': 'SPC (Stone Plastic Composite)',
    'Feature': 'Moisture-Resistant, Heat-Insulation, Anti-Slip, Waterproof, Wear-Resistant',
    'Design': 'Forrest Design',
    'Color': 'Grey',
    'Application': 'Villa, Home',
    'Installation': 'Click Lock System',  },
  images: [
    '//s.alicdn.com/@sc04/kf/Hc3a18d1449734c32a5921847578f5273W.jpg_720x720q50.jpg',
    '//s.alicdn.com/@sc04/kf/H1d39512705ca45f9a0255c65741c37e54.jpg_720x720q50.jpg',
    '//s.alicdn.com/@sc04/kf/He29fd34dd17f4f4ab220e3276de77f0f6.png_720x720q50.jpg',
    '//s.alicdn.com/@sc04/kf/H469efcd0b71f455baec8948eac7314b50.jpg_720x720q50.jpg',
    '//s.alicdn.com/@sc04/kf/He2ca58522540491ea8b79cdf9c76b9ddi.jpg_720x720q50.jpg',
    '//s.alicdn.com/@sc04/kf/H38ca245330f34967aff693f461794095r.jpg_720x720q50.jpg'
  ],
  price: 0, // Price not specified in the HTML
  rating: 0, // No reviews yet
  stock: 0, // Stock quantity not specified

}
  );

  // LVT Flooring
  products.push(
   {
  id: 'waterproof-wood-luxury-cheapest-pvc-tiles-lvt-flooring-self-adhesive-vinyl-flooring-lvt',
  name: 'LVT Flooring Paving',
  category: 'Flooring',
  subCategory: 'LVT Flooring',
  description: 'Waterproof luxury vinyl tile (LVT) flooring with wood design, self-adhesive installation',
  specs: {
    'Feature': 'Waterproof, wear resistant, Anti-Scratch, Eco-Friendly, Fireproof',
    'Installation': 'Self-Adhesive',
    'Shape': 'Rectangle',
    'Surface Texture': 'Textured',
    'Place of Origin': 'Henan, China',
    'Brand Name': 'LONGDI',
    'Model Number': '1.5mm 2mm',
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
  price: 0, // Price not specified in the HTML
  rating: 0, // No reviews yet
  stock: 0, // Stock not specified
}
  );


  // ==================== SKIRTING BOARD CATEGORY ====================
  
  // MDF Skirting
  products.push(
  {
  id: 'modern-water-proof-timber-white-primed-wall-mdf-skirting-boards-baseboard-moulding',
  name: 'MDF Skirting Board',
  category: 'Skirting Board',
  subCategory: 'MDF Skirting',
  description: 'Durable and eco-friendly MDF skirting board with waterproof properties and white primed finish',
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
  rating: 0, // No reviews yet
}
  );

  // WPC Skirting
  products.push(
{
  id: 'wpc-composite-wpc-skirting-board-anti-termite',
  name: 'WPC Skirting ',
  category: 'Skirting Board',
  subCategory: 'WPC Skirting',
  description: 'Anti Termite and Formaldehyde Free and Easy Install in the Wall',
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
}
  );

  // PS Skirting Board
  products.push(
   {
  id: 'black-color-waterproof-ps-skirting-corner-baseboard-flooring-accessories-skirting-profiles',
  name: 'Black Color Waterproof PS Skirting Corner Baseboard Flooring Accessories Skirting Profiles',
  category: 'Skirting Board',
  subCategory: 'PS Skirting Board',
  description: 'Waterproof PS skirting board with black color, suitable for flooring accessories and corner baseboard applications.',
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
}
  );

  // ==================== WALL PANELS CATEGORY ====================
  
  // PU Stone Panel
  products.push(
    {
  id: 'decorative-easy-to-install-veneer-sheet-3d-effect-foam-pu-stone-wall-panel-polyurethane-artificial-stone-for-apartment',
  name: 'PU Stone Panel',
  category: 'Wall Panels',
  subCategory: 'PU Stone Panel',
  description: 'Decorative polyurethane artificial stone wall panel with 3D effect, easy to install for apartment interiors and exteriors.',
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
  price: 0, // Price not specified in the HTML
  rating: 5.0,
  stock: 0, // Stock not specified
}
  );

  // Acoustic Wall Panel
  products.push(
  {
  id: 'china-sound-proof-wall-slat-pannelli-fonoassorbenti',
  name: 'Acoustic Wall Panel',
  category: 'Wall Panels',
  subCategory: 'Acoustic Wall Panel',
  description: 'Wood decorative acoustic panels for interior wall decor with sound proofing capabilities',
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
  price: 0, // Price would need to be added based on actual pricing
  rating: 0, // No reviews yet
  stock: 0, // Stock information not provided
});

  // WPC Wall Panels
  products.push(
   {
  id: 'co-extrusion-outdoor-decoration-12725mm-wpc-wall-cladding-wall-panel-for-home-decoration',
  name: 'WPC Wall Panel',
  category: 'Wall Panels',
  subCategory: 'WPC Wall Panels',
  description: 'Outdoor WPC wall panel for home decoration with co-extrusion technology',
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
  price: 0, // Price would need to be added
  rating: 5.0,
  stock: 0, // Stock would need to be added
}
  );

  // UV/PVC/PU Sheet
  products.push(
    {
  id: generateProductId('Waterproof UV Board PVC Sheet in Marble Colors for Interior Walls and Ceilings Decoration'),
  name: 'UV/PVC/PU Sheet',
  category: 'Wall Panels',
  subCategory: 'UV/PVC/PU Sheet',
  description: 'Waterproof PVC sheet with UV coating in marble colors for interior decoration of walls and ceilings',
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
  price: 11.68, // US$11.68 as mentioned in the competitive pricing section
  minOrder: 200, // pieces (minimum order quantity)
  rating: 0,
  stock: 0,
}
  );

  // ==================== INSULATION CATEGORY ====================
  
  // Rockwool Blankets (Slabs)
  products.push(
   {
    id: 'rockwool-boards-slabs',
    name: 'Rockwool Boards (Slabs)',
    category: 'Insulation',
    subCategory: 'Rockwool Boards (Slabs)',
    description: 'ROCKAL Rockwool Boards are composed of mineral rock fibers, processed from volcanic basaltic rocks. Fibers are bonded together with a thermosetting binder which gives the flexibility & resilience to the product.',
    shortDescription: 'High-performance rockwool insulation boards for thermal and acoustic applications',
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
    compliance: ['ASTM', 'BS', 'EN', 'ISO']
  },
  );


// Rockwool Blankets (Rolls)
products.push({
  id: generateProductId('Rockwool Blankets (Rolls)'),
  name: 'Rockwool Blankets (Rolls)',
  category: 'Insulation',
  subCategory: 'Rockwool Blankets (Rolls)',
  description: 'ROCKAL Duct Warp is a type of flexible insulation made from spun mineral wool, which is derived from a mixture of volcanic rock and slag. Fibers are bonded together with a thermosetting binder which gives the flexibility & resilience to the products. Rockal Rock wool Rolls are high performance solution for thermal & acoustic insulation for a range of commercial and industrial Buildings.',
  shortDescription: 'Rock wool blanket insulation is a type of flexible insulation made from spun mineral wool, which is derived from a mixture of volcanic rock and slag. Rock wool Rolls are high performance solution for thermal & acoustic insulation for a range of commercial and industrial Buildings.',
  images: [
    'https://board.rockal.org/assets/dccf33ba-cfa3-4f93-aefc-6fb9de0f0b36?fit=cover&width=900&height=600&quality=80',
    // Add more image URLs if available
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
// Add this to your generateProducts() function in product.js

// Fiber Cement Board
products.push({
  id: generateProductId('Fiber Cement Board'),
  name: 'Fiber Cement Board',
  category: 'Boards',
  subCategory: 'Fiber Cement Boards',
  description: 'Mada Fiber Cement Board is manufactured according to ASTM C-1186 standards. It is available in standard dimension with smooth texture finish to meet the requirements of modern buildings for interior and exterior applications.',
  shortDescription: 'Flexible and aesthetically appealing product suitable for wall paneling, false ceiling, mezzanine flooring, fire rated partitions, and more.',
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
  // Add this to your generateProducts() function in product.js
// Inside the Doors category section where Steel Doors is defined

// Steel Doors
products.push(
  {
    id: generateProductId('High Quality 2025 New Zhejiang Factory Steel Door'),
    name: 'Steel Doors (Single, One and Half, Double)',
    category: 'Doors',
    subCategory: 'Steel Doors',
    description: 'Modern design exterior steel door from Zhejiang factory with high quality and competitive price. Suitable for residential and commercial applications.',
    specs: {
      'Material': 'Steel',
      'Application': 'Exterior',
      'Design Style': 'Southwestern',
      'Place of Origin': 'China',
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
  }
);

  // MDF Wooden Door
products.push(
  {
    id: generateProductId('Prehung WPC MDF Shaker Door Interior Flush Front Entry Bedroom Single Slab Wood Doors Design With Frames'),
    name: 'MDF Wooden Door',
    category: 'Doors',
    subCategory: 'MDF Wooden Door',
    description: 'Customizable modern interior MDF doors with heat insulation, soundproofing, and waterproof features. Certified with ISO9001, ISO14001, SGS, and BV for quality assurance and regulatory compliance.',
    specs: {
      'Door Material': 'MDF',
      'Feature': 'Sound Insulation',
      'Main Material': 'Wooden',
      'Application': 'Bedroom',
      'Design Style': 'Modern',
      'Place of Origin': 'Henan, China',
      'Material': 'Moulded Board',
      'After-sale Service': 'Online technical support, Free spare parts',
      'Project Solution Capability': 'total solution for projects',
      'Model Number': 'IWD-12',
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
      'MOQ': '10 Pieces',
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
    price: 75, // Starting from $75 for 10-99 pieces
    priceTiers: [
      { minQty: 10, maxQty: 99, price: 75 },
      { minQty: 100, maxQty: 199, price: 70 },
      { minQty: 200, price: 65 }
    ],
    rating: 0, // No reviews yet
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
  }
);

 // Melamine Wooden Door
products.push(
  {
    id: generateProductId('Custom Modern WPC WPS Black White Prehung Interior Double Pivot Melamine Frameless Solid Oak Wood Door With Metal Strips'),
    name: 'Melamine Wooden Door',
    category: 'Doors',
    subCategory: 'Melamine Wooden Door',
    description: 'This custom modern door combines high-end bamboo charcoal fiberboard and solid oak wood, ensuring fire and moisture resistance with sound insulation. Certified by UL 10C, WH, and CE, it complies with stringent safety standards while offering reliability and style for living rooms, bedrooms, bathrooms, and more.',
    specs: {
      'Door Material': 'MDF',
      'Feature': 'anti-theft',
      'Main Material': 'Wooden',
      'Application': 'Kitchen, Bathroom, Bedroom, Living Room, Basement',
      'Design Style': 'Modern',
      'Place of Origin': 'Zhejiang, China',
      'Material': 'Wooden, PVC, Aluminum, Steel, Solid Oak Wood',
      'After-sale Service': 'Online technical support, Onsite Training, Free spare parts',
      'Project Solution Capability': 'graphic design',
      'Model Number': 'TC-90',
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
    price: 80, // Starting from $80 for >=400 pieces
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
  }
);

  // Full WPC Door
 // WPC Door product to be added to the Doors category
products.push(
  {
    id: generateProductId('WPC Door'),
    name: 'WPC Door',
    category: 'Doors',
    subCategory: 'Full WPC Door',
    description: 'This WPC door is made from eco-friendly, recyclable materials, offering features like waterproofing, flame retardancy, insect resistance, sound insulation, and warmth. With a modern design, customizable color options, and foldable opening, it suits interior hotel applications. Certified for quality, it ensures compliance with safety standards.',
    specs: {
      'Door Material': 'WPC',
      'Main Material': 'wpc',
      'Application': 'Hotel',
      'Design Style': 'Modern',
      'Place of Origin': 'Shandong, China',
      'After-sale Service': 'Online technical support, Onsite Installation, Onsite Training',
      'Model Number': 'XG-001',
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
    price: 80, // USD
    rating: 0, // No reviews yet
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
  }
);

  // WPC Skin Door
products.push(
  {
    id: generateProductId('WPC Skin Door'),
    name: 'WPC Skin Door',
    category: 'Doors',
    subCategory: 'WPC Skin Door',
    description: 'Widely Used Superior Quality Hollow Core Interior Bathroom Manufacturer WPC Skin Door Waterproof',
    specs: {
      'Door Material': 'wood plastic composite',
      'Feature': 'Waterproof',
      'Application': 'Bedroom',
      'Design Style': 'Modern',
      'Place of Origin': 'Anhui, China',
      'After-sale Service': 'yes',
      'Model Number': 'wpc skin door',
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
    price: 50, // Starting price (USD)
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
  }
);

  // WPC Glass Door
// WPC Glass Door
products.push(
  {
    id: generateProductId('WPC Glass Door'),
    name: 'WPC Glass Door',
    category: 'Doors',
    subCategory: 'WPC Glass Door',
    description: 'High-Quality Glass Door for Various Applications',
    specs: {
      'Door Material': 'Wood Plastic Composite',
      'Feature': 'Waterproof',
      'Application': 'Bedroom/Hotel/Office',
      'Design Style': 'Modern',
      'Place of Origin': 'Anhui, China',
      'After-sale Service': 'Online technical support',
      'Model Number': 'BBGD07',
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
  }
);

  // ==================== SAFETY PRODUCTS CATEGORY ====================
  
  // Safety Shoes
// Inside the Safety Products category section where Safety Shoes is defined
products.push(
  {
    id: generateProductId('Summer Breathable Safety Shoes'),
    name: 'Safety Shoes',
    category: 'Safety Products',
    subCategory: 'Safety Shoes',
    description: 'High quality safety shoes with multiple protective features including stab-proof, smash-proof, and waterproof capabilities. Designed for summer wear with breathable materials.',
    shortDescription: 'Breathable safety shoes with steel toe protection for industrial and construction use',
    specs: {
      'Upper Material': 'Microfiber leather',
      'Outsole Material': 'PVC, Rubber',
      'Feature': 'Steel Toe',
      'Midsole Material': 'Rubber',
      'Lining Material': 'Mesh, Cotton Fabric',
      'Gender': 'Unisex',
      'Application': 'Construction, Factory',
      'Season': 'Summer',
      'Style': 'Work',
      'Toe Style': 'Steel toe',
      'Place of Origin': 'Shandong, China',
      'Brand Name': 'OEM',
      'Model Number': '13',
      'Certifications': 'CE certified'
    },
    features: {
        application:[
      'Stab-proof protection',
      'Smash-proof steel toe',
      'Waterproof design',
      'Construction',
      'Wear-resistant materials',
      'Breathable for summer use',
      'Anti-slip outsole'
    ]
  },
    images: [
      '//s.alicdn.com/@sc04/kf/H6e20d809ecdd493bbf27d6b1ac459cc0w.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hd6af6b8de6c948bbaf0e2635d4b33281L.png_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/H73090046091941d985cc2475b6944cddx.jpg_720x720q50.jpg',
      '//s.alicdn.com/@sc04/kf/Hf0e11d8f72fd4eda8b23987eed2ee1dfj.jpg_720x720q50.jpg'
    ],
    price: 13.90, // USD
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
  }
);

  // Safety Jackets
// Safety Jackets
products.push(
  {
    id: generateProductId('Factory Supply Safety Vest Ropa De Trabajo Work Clothing Heavy Duty High Visibility Reflective Work Vest'),
    name: 'Safety Jackets',
    category: 'Safety Products',
    subCategory: 'Safety Jackets',
    description: 'Heavy duty high visibility reflective work vest for industrial safety applications',
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
    price: 0, // Price would need to be added based on actual pricing
    rating: 0, // Initial rating
    stock: 0, // Initial stock
    brand: 'Henan Eastman Protection Technology Co., Ltd.',
    leadTime: '35 days for 1-5000 pieces, negotiable for larger orders',
  }
);

  // ==================== ELECTRICAL ITEMS CATEGORY ====================
  
// ==================== ELECTRICAL ITEMS CATEGORY ====================
  
// ==================== ELECTRICAL ITEMS CATEGORY ====================
  
// Wires and cables
products.push(
  {
    id: generateProductId('Wires and cables'),
    name: 'Wires and cables',
    category: 'Electrical Items',
    subCategory: 'Wires and cables',
    description: 'High-quality electrical wires and cables suitable for residential and commercial applications. Our range includes PVC insulated wires, armored cables, and flexible cords meeting international safety standards.',
    specs: {
      'Material': 'Copper conductor with PVC insulation',
      'Voltage Rating': '300/500V, 450/750V',
      'Temperature Range': '-15°C to +70°C',
      'Standards': 'IEC 60227, BS 6004',
      'Available Sizes': '1.5mm², 2.5mm², 4mm², 6mm², 10mm²',
      'Colors': 'Red, Black, Blue, Yellow/Green, White'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/72914/conversions/Wires_and_cables-removebg-preview-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For more details about specific cable types and technical specifications, please contact us.'
  }
);

// Circuit Breakers & Distribution Boards
products.push(
  {
    id: generateProductId('Circuit Breakers & Distribution Boards'),
    name: 'Circuit Breakers & Distribution Boards',
    category: 'Electrical Items',
    subCategory: 'Circuit Breakers & Distribution Boards',
    description: 'Reliable circuit protection devices including MCBs, RCCBs, and distribution boards for safe electrical installations. Our products offer overload and short-circuit protection for residential and industrial applications.',
    specs: {
      'Types': 'Single Pole, Double Pole, Triple Pole, Four Pole',
      'Current Rating': '6A to 63A',
      'Breaking Capacity': '6kA to 10kA',
      'Standards': 'IEC 60898, IEC 61009',
      'Enclosure Material': 'Plastic or Metal (for distribution boards)',
      'Protection Class': 'IP40 to IP65'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/61804/conversions/circuit-breakers-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Contact us for complete product range including RCBOs and surge protection devices.'
  }
);

// Light Fittings
products.push(
  {
    id: generateProductId('Light Fittings'),
    name: 'Light Fittings',
    category: 'Electrical Items',
    subCategory: 'Light Fittings',
    description: 'Modern and durable light fittings including ceiling roses, batten holders, and weatherproof fixtures for various lighting applications.',
    specs: {
      'Material': 'Polycarbonate, Aluminum, Steel',
      'IP Rating': 'IP20 to IP65 (weatherproof options available)',
      'Voltage': '220-240V AC',
      'Lamp Compatibility': 'LED, CFL, Incandescent',
      'Mounting Type': 'Surface, Pendant, Recessed',
      'Certifications': 'CE, RoHS compliant'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/61746/conversions/light-fittings-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For complete catalog of light fittings including decorative options, please contact us.'
  }
);

// Lighting
products.push(
  {
    id: generateProductId('Lighting'),
    name: 'Lighting',
    category: 'Electrical Items',
    subCategory: 'Lighting',
    description: 'Energy-efficient LED lighting solutions including bulbs, tubes, panels, and flood lights for residential, commercial and industrial applications.',
    specs: {
      'Wattage': '5W to 200W',
      'Color Temperature': '2700K (Warm White) to 6500K (Daylight)',
      'Luminous Flux': '800lm to 20,000lm',
      'Lifespan': '25,000 to 50,000 hours',
      'Dimmable Options': 'Available for selected models',
      'Warranty': '2-5 years depending on product'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/61752/conversions/lighting-removebg-preview-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Contact us for specialized lighting solutions including smart lighting systems.'
  }
);

// Fans
products.push(
  {
    id: generateProductId('Fans'),
    name: 'Fans',
    category: 'Electrical Items',
    subCategory: 'Fans',
    description: 'High-performance ceiling fans, exhaust fans, and industrial fans with energy-efficient motors and durable construction.',
    specs: {
      'Types': 'Ceiling, Exhaust, Pedestal, Wall-mounted',
      'Size': '900mm to 1400mm (ceiling fans)',
      'Speed': '3-6 speed options',
      'Power Consumption': '50W to 100W',
      'Air Delivery': '200 CMM to 500 CMM',
      'Special Features': 'Remote control, reversible direction, decorative designs'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/61761/conversions/fans-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For commercial and industrial fan requirements, please contact our sales team.'
  }
);

// Electrical Appliances
products.push(
  {
    id: generateProductId('Electrical Appliances'),
    name: 'Electrical Appliances',
    category: 'Electrical Items',
    subCategory: 'Electrical Appliances',
    description: 'Range of quality electrical appliances including water heaters, pumps, and kitchen appliances for home and commercial use.',
    specs: {
      'Product Range': 'Water heaters, water pumps, mixers, toasters',
      'Power Rating': '500W to 3000W depending on appliance',
      'Voltage': '220-240V AC',
      'Safety Features': 'Thermal cut-off, dry burn protection',
      'Warranty': '1-2 years manufacturer warranty'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/61770/conversions/electrical-appliances-removebg-preview-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Contact us for complete product catalog and specifications of each appliance.'
  }
);

// Home Automation
products.push(
  {
    id: generateProductId('Home Automation'),
    name: 'Home Automation',
    category: 'Electrical Items',
    subCategory: 'Home Automation',
    description: 'Smart home automation systems including lighting control, security systems, and energy management solutions.',
    specs: {
      'Compatibility': 'Works with Alexa, Google Assistant',
      'Protocols': 'WiFi, Zigbee, Z-Wave',
      'Control Options': 'Mobile app, voice control, wall panels',
      'System Components': 'Smart switches, sensors, gateways',
      'Integration': 'Can integrate with existing electrical systems'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/61776/conversions/home-automation-removebg-preview-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For customized home automation solutions and installation services, please contact us.'
  }
);

// Electrical switches and sockets
products.push(
  {
    id: generateProductId('Electrical switches and sockets'),
    name: 'Electrical switches and sockets',
    category: 'Electrical Items',
    subCategory: 'Electrical switches and sockets',
    description: 'Premium quality switches and sockets in modern designs with superior safety features and durability.',
    specs: {
      'Range': 'Toggle switches, rocker switches, dimmers, USB sockets',
      'Current Rating': '10A, 16A, 20A',
      'Material': 'High-grade PC with silver contacts',
      'Safety Standards': 'IEC 60669, BS 1363',
      'Finishes': 'White, metallic, matte, glossy options'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/61786/conversions/electrical-switches-and-sockets-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For modular wiring accessories and complete range details, contact our sales team.'
  }
);

// Electrical Conduit Pipes
products.push(
  {
    id: generateProductId('Electrical Conduit Pipes'),
    name: 'Electrical Conduit Pipes',
    category: 'Electrical Items',
    subCategory: 'Electrical Conduit Pipes',
    description: 'Durable conduit pipes for electrical wiring protection in buildings and industrial applications.',
    specs: {
      'Material': 'PVC, Galvanized Steel',
      'Sizes': '20mm, 25mm, 32mm, 40mm, 50mm',
      'Types': 'Rigid, Flexible, Corrugated',
      'Temperature Range': '-5°C to +60°C (PVC)',
      'Standards': 'IEC 61386, BS 4607'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/122907/conversions/HTB1XRWGcvWG3KVjSZFPq6xaiXXai-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For bulk orders and specialized conduit solutions, please contact us.'
  }
);

// Cable Tray Systems
products.push(
  {
    id: generateProductId('Cable Tray Systems'),
    name: 'Cable Tray Systems',
    category: 'Electrical Items',
    subCategory: 'Cable Tray Systems',
    description: 'Complete cable management solutions including ladder type, perforated, and channel cable trays for industrial and commercial installations.',
    specs: {
      'Material': 'Galvanized steel, Stainless steel, Aluminum',
      'Width': '50mm to 600mm',
      'Load Capacity': 'Light, Medium, Heavy duty',
      'Finish': 'Hot-dip galvanized, Powder coated',
      'Accessories': 'Bends, reducers, connectors available'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/288097/conversions/cable-tray-system-1-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Contact us for custom cable tray solutions and installation support.'
  }
);

// Electrical Boxes & Covers
products.push(
  {
    id: generateProductId('Electrical Boxes & Covers'),
    name: 'Electrical Boxes & Covers',
    category: 'Electrical Items',
    subCategory: 'Electrical Boxes & Covers',
    description: 'Junction boxes, back boxes and covers for safe electrical connections and equipment protection.',
    specs: {
      'Material': 'PVC, Polycarbonate, Metal',
      'Types': 'Surface mount, Flush mount, Weatherproof',
      'Size': 'Standard and custom sizes available',
      'IP Rating': 'IP55, IP65 for outdoor use',
      'Mounting': 'Wall, Ceiling, Floor mounting options'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/336619/conversions/Electrical-Boxes-and-Covers-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'For specialized enclosure requirements, please contact our technical team.'
  }
);

// Electrical Enclosures
products.push(
  {
    id: generateProductId('Electrical Enclosures'),
    name: 'Electrical Enclosures',
    category: 'Electrical Items',
    subCategory: 'Electrical Enclosures',
    description: 'Robust electrical enclosures for housing electrical components, control panels and distribution systems.',
    specs: {
      'Material': 'Stainless steel, Aluminum, Fiberglass',
      'Protection Class': 'IP54 to IP66',
      'Size Range': 'Small (200x200mm) to Large (2000x1000mm)',
      'Mounting': 'Wall-mounted, Free-standing, Rack-mounted',
      'Special Features': 'Lockable, Transparent doors, Ventilation options'
    },
    images: ['https://youmats-media.s3.me-central-1.amazonaws.com/360522/conversions/cabinets-enclosures-size_100_100.webp'],
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    note: 'Custom enclosure solutions available - contact us for design requirements.'
  }
);

  // ==================== SCREWS/FASTENERS CATEGORY ====================
  
  // Self Drilling Screw Hex Head W/EPDM
  products.push(
    {
      id: generateProductId('Self Drilling Screw Hex Head W/EPDM'),
      name: 'Self Drilling Screw Hex Head W/EPDM',
      category: 'Screws/Fasteners',
      subCategory: 'Self Drilling Screw Hex Head W/EPDM',
      description: '',
      specs: {
        'Size 6.3*75mm': 'Weight 13.5kg/1000pcs - 14*3',
        'Size 6.3*63mm': 'Weight 11.8kg/1000pcs - 14*2',
        'Size 6.3*25mm': 'Weight 6.4kg/1000pcs - 12*1',
        'Size 5.5*25mm': 'Weight 5.3kg/1000pcs - 14*1',
        'Size 6.3*100mm': 'Weight 17.1kg/1000pcs - 14*4'
      },
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      brand: '',
      note: 'Reach out to our team for detailed information.'

    }
  );

  // Self Drilling Screw PAN Washer Head
  products.push(
    {
      id: generateProductId('Self Drilling Screw PAN Washer Head'),
      name: 'Self Drilling Screw PAN Washer Head',
      category: 'Screws/Fasteners',
      subCategory: 'Self Drilling Screw PAN Washer Head',
      description: '',
      specs: {
        'Size 4.2*19mm': 'Weight 1.45kg/1000pcs - 8*3/4'
      },
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      brand: '',
       note: 'Reach out to our team for detailed information.'
    }
  );

  // Self Drilling Screw Truss Head PHILIPS
  products.push(
    {
      id: generateProductId('Self Drilling Screw Truss Head PHILIPS'),
      name: 'Self Drilling Screw Truss Head PHILIPS',
      category: 'Screws/Fasteners',
      subCategory: 'Self Drilling Screw Truss Head PHILIPS',
      description: '',
      specs: {
        'Size 4.8*19mm': '10*3/4'
      },
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      brand: '',
       note: 'Reach out to our team for detailed information.'
    }
  );

  // Self Drilling Drywall Screw Bungle
  products.push(
    {
      id: generateProductId('Self Drilling Drywall Screw Bungle'),
      name: 'Self Drilling Drywall Screw Bungle',
      category: 'Screws/Fasteners',
      subCategory: 'Self Drilling Drywall Screw Bungle',
      description: '',
      specs: {
        'Size 3.9*38mm': 'Weight 2.65kg/1000pcs - 7*1 1/2 - Flat Head with wings',
        'Size 4.2*32mm': 'Weight 2.1kg/1000pcs - 8*1 1/4 - Philis Bungle Head Phosphating Treatment',
        'Size 3.9*32mm': 'Weight 2.65kg/1000pcs - 7*1 1/4 - Flat Head with wings'
      },
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      brand: '',
       note: 'Reach out to our team for detailed information.'
    }
  );

  // Screw - Roto Bit
  products.push(
    {
      id: generateProductId('Screw - Roto Bit'),
      name: 'Screw - Roto Bit',
      category: 'Screws/Fasteners',
      subCategory: 'Screw - Roto Bit',
      description: '',
      specs: {
        'Size': '2*65 mm'
      },
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      brand: '',
       note: 'Reach out to our team for detailed information.'
    }
  );

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