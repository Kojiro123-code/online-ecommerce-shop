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
    image: '/images/products/prod-001.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
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
    image: '/images/products/prod-002.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
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
    image: '/images/products/prod-003.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
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
    image: '/images/products/prod-004.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80',
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
    image: '/images/products/prod-005.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    description: 'Crystal-clear 4K video at 60 FPS powered by a high-grade optical sensor. Advanced low-light auto-correction and dual noise-cancelling beamforming microphones ensure professional video conferencing.',
    features: [
      'Native 4K UHD @ 60 FPS with glass optical elements',
      'Intelligent AI auto-framing and focus tracking',
      'Dual beamforming mics with echo cancellation',
      'Integrated magnetic physical privacy shutter'
    ],
    specs: {
      'Resolution': '4K @ 60fps / 1080p @ 120fps',
      'Field of View': '90° Adjustable Wide Angle',
      'Sensor': '1/2.8" Low-Noise Optical CMOS',
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
    image: '/images/products/prod-006.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
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
    image: '/images/products/prod-007.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
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
    image: '/images/products/prod-008.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
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
    image: '/images/products/prod-009.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
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
    image: '/images/products/prod-010.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80',
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
  },
  {
    id: 'prod-011',
    name: 'Horizon Ultra 34" Curved QD-OLED Monitor',
    tagline: 'Immersive panoramic QD-OLED workspace display with infinite contrast and 175Hz speed.',
    price: 899.00,
    originalPrice: 1099.00,
    rating: 4.9,
    reviewCount: 184,
    category: 'Workspace',
    image: '/images/products/prod-011.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    description: 'Transform your creative workflow and desktop experience. Featuring a breathtaking 34-inch 1800R curved Quantum Dot OLED panel with ultra-deep blacks, 0.03ms pixel response time, and 99.3% DCI-P3 cinema color fidelity.',
    features: [
      '34" Ultrawide WQHD (3440 x 1440) QD-OLED Panel',
      '175Hz refresh rate with 0.03ms near-instant response time',
      '99.3% DCI-P3 cinema color gamut & Factory Calibrated Delta E < 1',
      'Built-in USB-C 90W Power Delivery Hub with KVM switch'
    ],
    specs: {
      'Screen Size': '34-inch 21:9 Curved 1800R',
      'Resolution': '3440 x 1440 QD-OLED',
      'Refresh Rate': '175Hz (AMD FreeSync Premium Pro)',
      'Ports': 'USB-C (90W PD), 2x HDMI 2.1, 1x DisplayPort 1.4'
    },
    inStock: true,
    stockCount: 14
  },
  {
    id: 'prod-012',
    name: 'Veloce Aerobuds Pro Wireless Earbuds',
    tagline: 'Featherlight in-ear Hi-Fi acoustic drivers with next-gen adaptive transparency.',
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.8,
    reviewCount: 326,
    category: 'Audio',
    image: '/images/products/prod-012.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    description: 'Ultra-low distortion acoustic chamber paired with 11mm custom dual-magnet dynamic drivers. Intelligent hybrid noise cancellation eliminates up to 42dB of environmental distractions with seamless wireless Qi charging case.',
    features: [
      'Hybrid Active Noise Cancellation up to 42dB depth',
      'Personalized Spatial Audio with dynamic gyroscope head tracking',
      'Up to 36 hours combined listening with wireless charging case',
      'IP54 dust and splash resistant for sports and outdoor commutes'
    ],
    specs: {
      'Driver Size': '11mm Custom Titanium Dynamic',
      'Noise Cancellation': '42dB Hybrid ANC + Natural Transparency',
      'Battery Life': '8h single charge (36h with case)',
      'Connectivity': 'Bluetooth 5.4 with LDAC & AAC'
    },
    inStock: true,
    stockCount: 28
  },
  {
    id: 'prod-013',
    name: 'AeroGimbal 3-Axis Cinematic Stabilizer',
    tagline: 'Ultra-smooth cinematic handheld stabilization with AI magnetic tracking sensor.',
    price: 149.00,
    originalPrice: 179.00,
    rating: 4.7,
    reviewCount: 163,
    category: 'Photography',
    image: '/images/products/prod-013.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    description: 'Capture butter-smooth cinematic tracking shots, time-lapses, and vlogs. Equipped with aerospace-grade 3-axis brushless motors, an integrated magnetic AI vision tracking sensor that follows subjects without any phone app, and a built-in bi-color fill light.',
    features: [
      'Independent AI magnetic vision sensor with gesture control',
      '3-Axis motorized orthogonal stabilization with 360° infinite pan',
      'Built-in foldable extension rod and desktop tripod base',
      'Integrated magnetic bi-color LED video fill light'
    ],
    specs: {
      'Payload Capacity': 'Up to 300g (supports all modern smartphones)',
      'Battery Endurance': '18 hours continuous operation',
      'Weight': '395g ultra-compact folding design',
      'Charging Time': '2 hours fast USB-C charge'
    },
    inStock: true,
    stockCount: 22
  },
  {
    id: 'prod-014',
    name: 'Nexus MagDock 4-in-1 Foldable Travel Station',
    tagline: 'All-in-one wireless magnetic fast charging for phone, watch, and earbuds in an aluminum body.',
    price: 95.00,
    originalPrice: 115.00,
    rating: 4.8,
    reviewCount: 204,
    category: 'Accessories',
    image: '/images/products/prod-014.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
    description: 'The ultimate minimalist charging station for your nightstand or travel luggage. Folds completely flat into a pocket-sized aircraft-grade aluminum puck. Charges iPhone, Apple Watch, and AirPods simultaneously with full 15W Qi2 fast charging.',
    features: [
      'Certified Qi2 15W wireless magnetic fast charging',
      'Dedicated Apple Watch fast charging disc',
      'Recessed Qi pad for AirPods and wireless earbuds',
      'Precision machined CNC aluminum body with silicone pads'
    ],
    specs: {
      'Total Output': '25W Max simultaneous power delivery',
      'Dimensions': '110mm x 68mm x 18mm folded',
      'Weight': '210g solid aluminum alloy',
      'Included': '65W GaN adapter & braided 2m USB-C cable'
    },
    inStock: true,
    stockCount: 38
  },
  {
    id: 'prod-015',
    name: 'Aura Ring Gen 3 Smart Health Tracker',
    tagline: 'Discreet titanium biometric ring delivering clinical-grade sleep and recovery metrics.',
    price: 299.00,
    originalPrice: 349.00,
    rating: 4.9,
    reviewCount: 275,
    category: 'Wearables',
    image: '/images/products/prod-015.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    description: 'Weighing less than 5 grams, this aerospace titanium smart ring tracks your body’s baseline signals 24/7. Features research-grade sensors for heart rate variability (HRV), sleep staging, skin temperature fluctuations, and daytime stress tracking.',
    features: [
      'Medical-grade PPG infrared sensors & dual temperature sensors',
      'Up to 7 days battery life with fast 30-minute induction dock',
      'Ultra-durable lightweight Grade 5 titanium with PVD coating',
      'Water resistant to 100 meters (swimming and shower safe)'
    ],
    specs: {
      'Material': 'Grade 5 Titanium & Non-allergenic inner resin',
      'Sensors': 'Optical PPG, Skin Temp, 3D Accelerometer',
      'Battery Life': 'Up to 7 days',
      'Water Rating': '100m (10 ATM)'
    },
    inStock: true,
    stockCount: 16
  },
  {
    id: 'prod-016',
    name: 'CarbonEdge Dual-Tier Aluminum Laptop Stand',
    tagline: 'Rigid featherlight carbon fiber ergonomics with infinite angle ventilation.',
    price: 119.50,
    originalPrice: 139.00,
    rating: 4.7,
    reviewCount: 118,
    category: 'Workspace',
    image: '/images/products/prod-016.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
    description: 'Engineered with real 3K woven carbon fiber and heavy-gauge sandblasted aluminum. The dual-hinge design raises your laptop up to 12 inches to perfect eye-level, eliminating neck stiffness while the slotted base optimizes heat dissipation.',
    features: [
      'Aerospace 3K carbon fiber tray with cooling vents',
      'Ultra-stiff dual damped friction hinges rated for 50,000 cycles',
      'Supports laptops and tablets from 11" to 17.3" up to 15 lbs',
      'Folds flat in seconds for easy backpack portability'
    ],
    specs: {
      'Materials': '3K Woven Carbon Fiber & 6000-series Aluminum',
      'Adjustable Height': '2" to 12" stepless rise',
      'Weight Capacity': '15 lbs (6.8 kg)',
      'Dimensions Folded': '10.5" x 9.2" x 1.4"'
    },
    inStock: true,
    stockCount: 30
  },
  {
    id: 'prod-017',
    name: 'AeroDrone Mini 4K Folding Aerial Quadcopter',
    tagline: 'Pocket-sized 4K HDR aerial imaging with 38-minute extended flight endurance.',
    price: 449.00,
    originalPrice: 529.00,
    rating: 4.8,
    reviewCount: 195,
    category: 'Photography',
    image: '/images/products/prod-017.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80',
    description: 'Weighing under 249 grams to fly without mandatory regulatory registration in most jurisdictions. Captures true vertical and horizontal 4K HDR videos with a mechanical 3-axis gimbal, Level 5 wind resistance, and automated QuickShot cinematics.',
    features: [
      'Ultralight sub-249g folding pocket design',
      '4K @ 60fps HDR video with 48MP high-res raw photo capture',
      '38 minutes extended flight time per intelligent battery',
      '10km FHD digital video transmission range'
    ],
    specs: {
      'Takeoff Weight': '248 grams',
      'Camera Sensor': '1/1.3" CMOS f/1.7 aperture',
      'Transmission': 'O3+ Low Latency 1080p @ 60fps (10km)',
      'Wind Resistance': 'Scale 5 (up to 38 km/h)'
    },
    inStock: true,
    stockCount: 11
  },
  {
    id: 'prod-018',
    name: 'SonicStream Desktop Hi-Fi DAC & Amp',
    tagline: 'Audiophile-grade lossless decoding with dual ESS Sabre DAC and balanced amplification.',
    price: 219.00,
    originalPrice: 269.00,
    rating: 4.9,
    reviewCount: 152,
    category: 'Audio',
    image: '/images/products/prod-018.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    description: 'Unleash the full potential of your high-impedance headphones. Featuring dual ESS ES9038Q2M DAC chips operating in balanced configuration, paired with THX AAA amplification architecture to deliver crystal-pure sound with 0.0001% THD+N.',
    features: [
      'Dual ESS Sabre DAC architecture with 32-bit / 768kHz PCM & DSD512',
      'THX AAA-788+ balanced amplifier delivering 3000mW output',
      'Dual headphone outputs: 4.4mm Pentaconn balanced & 6.35mm single-ended',
      'Precision CNC milled aluminum knob with real-time OLED status display'
    ],
    specs: {
      'DAC Chips': 'Dual ESS Sabre ES9038Q2M',
      'Max Power Output': '3000mW @ 32Ω (Balanced 4.4mm)',
      'Inputs': 'USB-C, Optical, Coaxial, Bluetooth LDAC',
      'Signal-to-Noise': '> 128dB ultra-low floor noise'
    },
    inStock: true,
    stockCount: 17
  },
  {
    id: 'prod-019',
    name: 'Shishido Cyber-Kicks Futuristic Runners',
    tagline: 'Cyber-infused pneumatic adaptive cushioning with carbon-fiber architecture.',
    price: 749.00,
    originalPrice: 899.00,
    rating: 5.0,
    reviewCount: 428,
    category: 'Wearables',
    image: '/images/products/prod-019.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    description: 'A revolutionary cybernetic sneaker designed with pneumatic adaptive cushioning, glowing fiber-optic accents, and aerospace carbon-fiber architecture for unmatched street performance and mind-blowing visuals.',
    features: [
      'Pneumatic adaptive micro-cushioning sole unit',
      'Aerospace 3K woven carbon-fiber stabilizer plate',
      'Integrated fiber-optic glow channels with magnetic charging',
      'Ultra-breathable ballistic nylon and Kevlar upper weave'
    ],
    specs: {
      'Sole Tech': 'Pneumatic Multi-Chamber Air Cell',
      'Plate Material': '3K Toray Carbon Fiber Outrigger',
      'Upper': 'Ballistic Ripstop & TPU Exoskeleton',
      'Weight': '320g featherlight performance'
    },
    inStock: true,
    stockCount: 12
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
