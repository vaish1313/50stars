export interface ProductItem {
  id: number;
  title: string;
  category: string;
  image: string;
  standard: string;
  sourcing: string;
  overview: string;
}

export const productsData: ProductItem[] = [
  // 1. Light & Medium Fabrication
  {
    id: 1,
    title: 'Structural Weldments & Support Frames',
    category: 'Light & Medium Fabrication',
    image: '/assets/service-1.jpg',
    standard: 'AWS D1.1 / AISC 360',
    sourcing: 'Vetted Fabrication Network',
    overview: 'Heavy-duty weldments and precision support frames engineered for industrial equipment, machinery, and structural loads.'
  },
  {
    id: 2,
    title: 'Platforms, Walkways & Access Structures',
    category: 'Light & Medium Fabrication',
    image: '/assets/product-7.png',
    standard: 'OSHA 1910.28 / IBC',
    sourcing: 'Pre-Qualified Shop Network',
    overview: 'Complete industrial access systems including OSHA-compliant handrail systems, toe boards, and anti-slip walkways.'
  },
  {
    id: 3,
    title: 'Stair Stringers & Ladder Cages',
    category: 'Light & Medium Fabrication',
    image: '/assets/service-4.png',
    standard: 'OSHA / ANSI A14.3',
    sourcing: 'Certified Fabricators',
    overview: 'Heavy-duty steel stair stringers, safety cage ladders, platforms, and modular landings designed for rapid site erection.'
  },
  {
    id: 4,
    title: 'Skid-Mounted Equipment Bases',
    category: 'Light & Medium Fabrication',
    image: '/assets/product-8.png',
    standard: 'AISC / AWS Specifications',
    sourcing: 'Custom Fabrication Shops',
    overview: 'Precision structural skid bases for pumps, compressors, power modules, and chemical process equipment assemblies.'
  },
  {
    id: 5,
    title: 'Chutes, Hoppers & Transition Ductwork',
    category: 'Light & Medium Fabrication',
    image: '/assets/product-2.jpg',
    standard: 'AWS / ASME Specs',
    sourcing: 'Specialized Sheet & Plate Shops',
    overview: 'Custom fabricated bulk material handling chutes, storage hoppers, and industrial transition ducting with wear liners.'
  },
  {
    id: 6,
    title: 'Brackets, Gussets & Stiffener Plates',
    category: 'Light & Medium Fabrication',
    image: '/assets/product-1.jpg',
    standard: 'ASTM A36 / A572 Grade 50',
    sourcing: 'CNC Cutting & Forming Partners',
    overview: 'Precision CNC laser and plasma cut connection brackets, structural gussets, shear tabs, and stiffener plates.'
  },
  {
    id: 7,
    title: 'Sheet Metal Enclosures & Guarding',
    category: 'Light & Medium Fabrication',
    image: '/assets/product-3.jpg',
    standard: 'OSHA / NEMA Standards',
    sourcing: 'Sheet Metal Fabrication Network',
    overview: 'Industrial machine safety guards, weather-tight equipment enclosures, acoustic baffles, and protective paneling.'
  },

  // 2. Reactor Internals
  {
    id: 8,
    title: 'Trays (Sieve, Valve, Bubble-Cap)',
    category: 'Reactor Internals',
    image: '/assets/service-2.jpg',
    standard: 'ASME Sec VIII / API 560',
    sourcing: 'Certified Process Equipment Partners',
    overview: 'High-efficiency fractionation and distillation tower trays including sieve, valve, and bubble-cap configurations.'
  },
  {
    id: 9,
    title: 'Packing & Packing Supports',
    category: 'Reactor Internals',
    image: '/assets/product-4.jpg',
    standard: 'ASME Code Compliant',
    sourcing: 'Process Vessel Network',
    overview: 'Structured and random column packing elements paired with heavy-duty liquid and vapor packing support grids.'
  },
  {
    id: 10,
    title: 'Distributors & Redistributors',
    category: 'Reactor Internals',
    image: '/assets/service-3.jpg',
    standard: 'ASME / ISO 9001',
    sourcing: 'Specialized Vessel Partners',
    overview: 'High-precision liquid distribution headers, trough distributors, and wall redistributors for process towers.'
  },
  {
    id: 11,
    title: 'Demisters & Mist Eliminators',
    category: 'Reactor Internals',
    image: '/assets/service-6.png',
    standard: 'ASME / Process Specifications',
    sourcing: 'Certified Equipment Partners',
    overview: 'Knitted wire mesh demister pads and vane-type mist eliminators for optimal liquid-gas separation efficiency.'
  },
  {
    id: 12,
    title: 'Baffles, Weirs & Downcomers',
    category: 'Reactor Internals',
    image: '/assets/service-5.jpg',
    standard: 'ASME Sec VIII Div 1',
    sourcing: 'Certified Pressure Vessel Shops',
    overview: 'Internal shell baffles, overflow weirs, and downcomer channels engineered to optimize process fluid dynamics.'
  },
  {
    id: 13,
    title: 'Nozzles & Manways',
    category: 'Reactor Internals',
    image: '/assets/product-5.png',
    standard: 'ASME B16.5 / B16.47',
    sourcing: 'Pressure-Vessel Sourcing Network',
    overview: 'Forged and fabricated vessel nozzles, heavy manway assemblies, and cover flanges with 100% material traceability.'
  },

  // 3. Structural Steel & Materials Sourcing
  {
    id: 14,
    title: 'Beams, Columns & Joists',
    category: 'Structural Steel & Materials Sourcing',
    image: '/assets/product-1.jpg',
    standard: 'ASTM A992 / A572 Gr 50 / SJI',
    sourcing: 'Global Primary Mills',
    overview: 'Wide-flange beams (W, HP, S), built-up plate columns, open-web joists (K, LH/DLH), and heavy joist girders.'
  },
  {
    id: 15,
    title: 'Plates & Sheets',
    category: 'Structural Steel & Materials Sourcing',
    image: '/assets/product-4.jpg',
    standard: 'ASTM A36 / A516 / A588 / EN 10025',
    sourcing: 'Major Steel Rolling Mills',
    overview: 'Structural, pressure-vessel, and weathering steel plates, floor diamond plates, and coil-cut steel sheets.'
  },
  {
    id: 16,
    title: 'Channels, Angles & Structural Tubing',
    category: 'Structural Steel & Materials Sourcing',
    image: '/assets/product-2.jpg',
    standard: 'ASTM A500 Gr B/C / A36',
    sourcing: 'Vetted Tube & Section Mills',
    overview: 'Square (SHS), rectangular (RHS), and round (CHS) structural tubing, equal/unequal leg angles, and C/MC channels.'
  },
  {
    id: 17,
    title: 'Rebar & Mesh',
    category: 'Structural Steel & Materials Sourcing',
    image: '/assets/product-6.png',
    standard: 'ASTM A615 / A706 Grade 60/80',
    sourcing: 'Rebar Rolling Mills Network',
    overview: 'Deformed concrete reinforcing bars, epoxy-coated rebar, and heavy welded wire reinforcement mesh.'
  },

  // 4. Hardware & Fasteners
  {
    id: 18,
    title: 'Structural Bolts, Nuts & Washers',
    category: 'Hardware & Fasteners',
    image: '/assets/product-5.png',
    standard: 'ASTM F3125 (A325 / A490) / A563',
    sourcing: 'Approved Fastener Mills',
    overview: 'Heavy-strength structural bolting assemblies, heavy hex nuts, and hardened flat & direct-tension-indicator washers.'
  },
  {
    id: 19,
    title: 'Anchor Bolts & Embed Plates',
    category: 'Hardware & Fasteners',
    image: '/assets/product-8.png',
    standard: 'ASTM F1554 (Gr 36, 55, 105)',
    sourcing: 'Specialized Anchor Mills',
    overview: 'Headed and bent anchor rods, sleeved foundation bolts, and pre-fabricated steel embed plates with welded studs.'
  },
  {
    id: 20,
    title: 'Specialty & High-Grade Fasteners',
    category: 'Hardware & Fasteners',
    image: '/assets/product-3.jpg',
    standard: 'Stainless 304/316 / B7 / L7',
    sourcing: 'Specialty Alloy Fastener Partners',
    overview: 'Stainless steel structural fasteners, B7/L7 alloy studs, duplex fasteners, and anti-corrosion coated hardware.'
  },
  {
    id: 21,
    title: 'Studs, U-Bolts & Clamps',
    category: 'Hardware & Fasteners',
    image: '/assets/service-1.jpg',
    standard: 'AWS D1.1 / ASTM Specifications',
    sourcing: 'Industrial Hardware Suppliers',
    overview: 'Headed shear connector studs, heavy-duty pipe U-bolts, structural beam clamps, and rigging connection hardware.'
  }
];

export const productCategories = [
  'All Products',
  'Light & Medium Fabrication',
  'Reactor Internals',
  'Structural Steel & Materials Sourcing',
  'Hardware & Fasteners'
];
