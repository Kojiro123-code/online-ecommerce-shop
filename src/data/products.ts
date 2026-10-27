import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Apex Pro Wireless ANC Headphones',
    tagline: 'Studio-grade acoustic precision with adaptive noise cancellation.',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.9,
    reviewCount: 342,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    description: 'Immerse yourself in rich, high-resolution audio with custom 40mm beryllium drivers. Built-in hybrid active noise cancellation eliminates ambient distractions, while memory foam ear cushions provide all-day ergonomic comfort.',
    features: [
      'Active Noise Cancellation with Transparency Mode',
      'Up to 45 hours battery life with fast USB-C charging',
      'Multipoint Bluetooth 5.3 connection',
      'Spatial 3D audio with dynamic head tracking'
    ],
    specs: {
      'Driver Size': '40mm Custom Beryllium',
      'Battery Life': '45 hours (ANC on)',
      'Connectivity': 'Bluetooth 5.3 & 3.5mm AUX',
      'Weight': '250g'
    },
    inStock: true,
    stockCount: 24
  },
  {
    id: 'prod-002',
    name: 'Chrono Pulse OLED Smartwatch',
    tagline: 'All-day biometric tracking in a lightweight aerospace titanium body.',
    price: 249.00,
    originalPrice: 289.00,
    rating: 4.8,
    reviewCount: 215,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    description: 'Track cardiovascular metrics, sleep stages, and workout intensity with medical-grade precision. Features a vivid 1.43-inch AMOLED display visible under direct sunlight and a 7-day battery life.',
    features: [
      'Always-on 1.43" AMOLED display (1000 nits)',
      'Continuous SpO2, ECG, and heart rate monitoring',
      'Water resistant up to 50 meters (5 ATM)',
      'Over 100 sports and activity tracking modes'
    ],
    specs: {
      'Case Material': 'Grade 5 Titanium',
      'Display': '1.43" AMOLED 466x466',
      'Water Resistance': '5 ATM (50m)',
      'Battery': '7 Days Typical Use'
    },
    inStock: true,
    stockCount: 18
  },
  {
    id: 'prod-003',
    name: 'Lumina Ergo Mechanical Keyboard',
    tagline: 'Custom tactile switches encased in CNC anodized aluminum.',
    price: 159.50,
    originalPrice: 189.00,
    rating: 4.9,
    reviewCount: 512,
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    description: 'Designed for discerning typists and programmers. Hot-swappable PCB, factory-lubed linear switches, and sound-dampening silicone gaskets deliver an ultra-smooth, creamy typing acoustic profile.',
    features: [
      'Gasket-mounted acoustic dampening architecture',
      'Hot-swappable 5-pin mechanical switches',
      'Per-key South-facing RGB backlighting',
      'Tri-mode connectivity: 2.4Ghz, Bluetooth 5.1, USB-C'
    ],
    specs: {
      'Layout': '75% Compact (82 Keys)',
      'Switch Type': 'Pre-lubed Matcha Linear',
      'Case': 'CNC Anodized Aluminum',
      'Keycaps': 'Double-shot PBT Cherry Profile'
    },
    inStock: true,
    stockCount: 31
  },
  {
    id: 'prod-004',
    name: 'AeroGlide Precision Ergonomic Mouse',
    tagline: 'Engineered for natural hand posture and frictionless workflow.',
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.7,
    reviewCount: 178,
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80',
    description: 'A 57-degree vertical tilt relieves wrist strain and reduces muscle fatigue during extended work sessions. Equipped with a 26,000 DPI optical sensor and whisper-quiet tactile switches.',
    features: [
      '57-degree natural handshake ergonomic angle',
      '26K DPI optical sensor with glass surface tracking',
      'Dual magnetic smart-speed scroll wheel',
      'Quiet-click switches rated for 20M clicks'
    ],
    specs: {
      'Sensor': 'PixArt 26,000 DPI Optical',
      'Battery Life': 'Up to 90 days per charge',
      'Connectivity': 'Bluetooth / 2.4GHz Wireless',
      'Weight': '110g'
    },
    inStock: true,
    stockCount: 42
  },
  {
    id: 'prod-005',
    name: 'Prism Ultra 4K Cinema Webcam',
    tagline: 'Broadcast-quality 4K streaming with AI face tracking and HDR.',
    price: 179.00,
    originalPrice: 219.00,
    rating: 4.8,
    reviewCount: 135,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
    description: 'Crystal-clear 4K video at 60 FPS powered by a Sony STARVIS sensor. Advanced low-light auto-correction and dual noise-cancelling beamforming microphones ensure professional video conferencing.',
    features: [
      'Native 4K UHD @ 60 FPS with Sony STARVIS CMOS',
      'Intelligent AI auto-framing and focus tracking',
      'Dual beamforming mics with echo cancellation',
      'Integrated magnetic physical privacy shutter'
    ],
    specs: {
      'Resolution': '4K @ 60fps / 1080p @ 120fps',
      'Field of View': '90° Adjustable Wide Angle',
      'Sensor': 'Sony 1/2.8" STARVIS CMOS',
      'Mount': 'Universal monitor clip & 1/4" tripod'
    },
    inStock: true,
    stockCount: 15
  },
  {
    id: 'prod-006',
    name: 'NovaBeam Studio Dynamic Microphone',
    tagline: 'Warm broadcast timbre with built-in DSP vocal processing.',
    price: 139.99,
    originalPrice: 169.99,
    rating: 4.9,
    reviewCount: 288,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    description: 'Engineered for podcasting, vocal recording, and live streaming. Cardioid polar pattern isolates your voice while rejecting background keyboard and room noise. Supports direct USB-C and professional XLR outputs.',
    features: [
      'Dual output: Plug-and-play USB-C and professional XLR',
      'Built-in internal pop filter and shock isolation',
      'Integrated headphone jack with zero-latency monitoring',
      'Touch-capacitive mute button with LED indicator'
    ],
    specs: {
      'Capsule': 'Dynamic Cardioid',
      'Bit Depth': '24-bit / 96kHz',
      'Frequency Response': '20Hz - 20,000Hz',
      'Connector': 'USB-C and XLR'
    },
    inStock: true,
    stockCount: 20
  },
  {
    id: 'prod-007',
    name: 'ZenDesk Solid Walnut Desk Organizer',
    tagline: 'Handcrafted premium American walnut dual-shelf riser.',
    price: 119.00,
    originalPrice: 140.00,
    rating: 4.8,
    reviewCount: 94,
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    description: 'Elevate your monitors to ergonomic eye height while organizing keyboard, notebook, and desktop essentials. Made from sustainably harvested solid walnut and heavy-gauge powder-coated steel legs.',
    features: [
      '100% Solid American Walnut with organic matte finish',
      'Supports dual 32-inch monitors up to 80 lbs',
      'Dedicated storage channel for keyboards and accessories',
      'Felt-lined bottom feet protect desk surface'
    ],
    specs: {
      'Dimensions': '46" L x 9" W x 4.2" H',
      'Material': 'Solid Walnut & Matte Steel',
      'Weight Capacity': '80 lbs (36 kg)',
      'Origin': 'Handcrafted in USA'
    },
    inStock: true,
    stockCount: 12
  },
  {
    id: 'prod-008',
    name: 'AuraGlow Smart Monitor Lightbar',
    tagline: 'Asymmetrical optical glare-free workspace illumination.',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviewCount: 165,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    description: 'Custom optical design illuminates your desk without causing screen reflections or glare. Wireless desktop dial allows stepless adjustment of brightness and color temperature from warm to cool daylight.',
    features: [
      'Zero screen glare asymmetrical optical design',
      'Stepless wireless 2.4GHz rotary control dial',
      'Adjustable color temperature from 2700K to 6500K',
      'Auto-dimming ambient light sensor'
    ],
    specs: {
      'Color Temp': '2700K - 6500K',
      'CRI Rating': 'Ra > 95 High Color Fidelity',
      'Power Source': 'USB-C 5V 1A',
      'Compatibility': 'Flat & Curved Monitors (0.5 - 4cm)'
    },
    inStock: true,
    stockCount: 35
  },
  {
    id: 'prod-009',
    name: 'TitanShield Magnetic 20000mAh Power Bank',
    tagline: 'Ultra-fast 65W PD fast-charging with MagSafe magnetic snap.',
    price: 69.95,
    originalPrice: 85.00,
    rating: 4.6,
    reviewCount: 310,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1609592426815-5e6e30129a2d?w=800&q=80',
    description: 'Power laptops, phones, and accessories on the move. Features a 15W Qi2/MagSafe wireless charging pad on top, plus dual USB-C ports delivering 65W Power Delivery to recharge a MacBook Pro from 0 to 50% in 30 minutes.',
    features: [
      'Strong 12N magnetic alignment for iPhone & Qi2 devices',
      '65W bidirectional USB-C Power Delivery',
      'Large 20,000mAh airline-approved flight capacity',
      'Smart real-time digital power status LCD'
    ],
    specs: {
      'Capacity': '20,000mAh / 74Wh',
      'Max Output': '65W USB-C PD / 15W Wireless',
      'Ports': '2x USB-C, 1x USB-A, 1x Magnetic Pad',
      'Weight': '360g'
    },
    inStock: true,
    stockCount: 50
  },
  {
    id: 'prod-010',
    name: 'SoundSphere 360 Spatial Speaker',
    tagline: 'Room-filling acoustic immersion with IPX7 waterproof durability.',
    price: 199.00,
    originalPrice: 239.00,
    rating: 4.9,
    reviewCount: 147,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80',
    description: 'Equipped with quad opposing drivers and dual passive radiators, the SoundSphere distributes balanced 360-degree high-fidelity audio to every corner of the room. Robust IPX7 waterproof enclosure for indoor and outdoor versatility.',
    features: [
      'Omnidirectional 360° acoustic projection',
      'IPX7 waterproof and dustproof submersible rating',
      '24-hour battery endurance with reverse phone charging',
      'Stereo party link connects up to 100 speakers'
    ],
    specs: {
      'Audio Output': '60W RMS Peak',
      'Battery': '24 Hours (7,800mAh)',
      'Waterproof': 'IPX7 (1m immersion for 30m)',
      'Dimensions': '190mm x 85mm cylindrical'
    },
    inStock: true,
    stockCount: 19
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getRelatedProducts(currentId: string, limit = 3): Product[] {
  const current = getProductById(currentId);
  if (!current) return products.slice(0, limit);
  return products
    .filter(p => p.id !== currentId && p.category === current.category)
    .concat(products.filter(p => p.id !== currentId && p.category !== current.category))
    .slice(0, limit);
}
