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
    fallbackImage: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
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
    fallbackImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
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
    fallbackImage: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80',
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
    fallbackImage: 'https://images.unsplash.com/photo-1626771740645-b4618764047a?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
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
    fallbackImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
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
    fallbackImage: 'https://images.unsplash.com/photo-1534972195531-a756b1126f24?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80',
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
    fallbackImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
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
  },
  {
    id: 'prod-020',
    name: 'AcousticLine Hi-Fi Open-Back Studio Headphones',
    tagline: 'Planar magnetic drivers delivering an airy, expansive holographic soundstage.',
    price: 429.00,
    originalPrice: 499.00,
    rating: 4.9,
    reviewCount: 194,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    description: 'Engineered for critical studio mastering and discerning audiophiles. Hand-assembled planar magnetic drivers suspended in CNC milled aviation aluminum with lambskin ear cushions provide breathtaking transient detail and distortion-free low end.',
    features: [
      'Ultra-thin 90mm planar magnetic diaphragm',
      'Open-back acoustically transparent resonance chamber',
      'Solid CNC milled aerospace aluminum housing',
      'Detachable silver-plated 4.4mm balanced cable'
    ],
    specs: {
      'Frequency Response': '5Hz - 50,000Hz',
      'Impedance': '32 Ohms @ 1kHz',
      'Sensitivity': '102 dB/mW',
      'Weight': '370g'
    },
    inStock: true,
    stockCount: 16
  },
  {
    id: 'prod-021',
    name: 'Symphony Pure Audiophile Valve Tube Amplifier',
    tagline: 'Warm analog harmonic bloom powered by dual matched 12AU7 vacuum tubes.',
    price: 649.00,
    originalPrice: 749.00,
    rating: 5.0,
    reviewCount: 88,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80',
    description: 'Experience the organic warmth and silky mid-range of classic class-A tube amplification. Incorporating high-purity toroidal power transformers and point-to-point analog wiring to elevate modern digital sources into pure acoustic euphoria.',
    features: [
      'Dual matched vacuum tubes (12AU7 pre-amp stage)',
      'Pure Class-A discrete output architecture',
      'Heavy solid brass volume potentiometer',
      'Gold-plated RCA and balanced XLR inputs'
    ],
    specs: {
      'Power Output': '2000mW x 2 @ 32Ω',
      'THD+N': '< 0.05% at rated power',
      'SNR': '112dB',
      'Chassis': 'Brushed Black Anodized Steel'
    },
    inStock: true,
    stockCount: 9
  },
  {
    id: 'prod-022',
    name: 'EchoSpatial 7.1.4 Dolby Atmos Soundbar System',
    tagline: '13 discrete transducers creating an authentic 3D spatial acoustic dome.',
    price: 799.00,
    originalPrice: 949.00,
    rating: 4.8,
    reviewCount: 142,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    description: 'Transform your living space into a private cinema. Up-firing height channels bounce acoustic waves off your ceiling for pinpoint spatial audio accuracy, complemented by a wireless 8-inch down-firing subwoofer.',
    features: [
      'True 7.1.4 Channel Dolby Atmos & DTS:X Decoding',
      'Dedicated 8" wireless long-throw subwoofer',
      'Dual HDMI eARC 2.1 with 4K 120Hz Passthrough',
      'Room-sensing acoustic room calibration microphone'
    ],
    specs: {
      'Total Output': '650W Peak Power',
      'Drivers': '13 Custom Silk Dome & Carbon Cones',
      'Connectivity': 'HDMI eARC, Optical, AirPlay 2, Spotify Connect',
      'Soundbar Dimensions': '1100mm x 75mm x 120mm'
    },
    inStock: true,
    stockCount: 14
  },
  {
    id: 'prod-023',
    name: 'VinylPro Carbon Direct-Drive Turntable',
    tagline: 'Precision quartz-locked motor with 3K woven carbon tonearm.',
    price: 549.00,
    originalPrice: 629.00,
    rating: 4.9,
    reviewCount: 116,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    description: 'Engineered for vinyl purists. The low-resonance MDF plinth is wrapped in brushed gunmetal, housing a silent brushless direct-drive motor that eliminates wow and flutter, paired with an elliptical diamond phono cartridge.',
    features: [
      'Precision single-piece 3K carbon-fiber tonearm',
      'Ultra-silent brushless direct-drive motor',
      'Ortofon 2M Red elliptical cartridge pre-installed',
      'Integrated switchable phono pre-amplifier'
    ],
    specs: {
      'Speeds': '33-1/3 and 45 RPM (Electronic Switching)',
      'Wow & Flutter': '< 0.08% WRMS',
      'Platter': 'Die-cast 1.8kg Anti-Resonant Aluminum',
      'Output': 'Gold RCA Line/Phono Switchable'
    },
    inStock: true,
    stockCount: 11
  },
  {
    id: 'prod-024',
    name: 'Sonance Pro Studio Near-Field Active Monitors',
    tagline: 'Bi-amplified acoustic fidelity with custom Kevlar mid-bass woofers.',
    price: 389.00,
    originalPrice: 449.00,
    rating: 4.8,
    reviewCount: 175,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80',
    description: 'Near-field reference monitors designed for sound designers, producers, and audiophile desks. Dual Class-D amplifiers deliver neutral, flat frequency response with effortless dynamic headroom.',
    features: [
      'Bi-amplified design with 100W Class-D RMS power',
      '5.25" woven yellow Kevlar mid-bass cone',
      '1" silk dome high-frequency waveguide',
      'Rear acoustic boundary EQ switches'
    ],
    specs: {
      'Frequency Range': '45Hz - 22,000Hz',
      'Max SPL': '108 dB Peak',
      'Inputs': 'Balanced XLR, 1/4" TRS, Unbalanced RCA',
      'Pair Weight': '12.4 kg'
    },
    inStock: true,
    stockCount: 18
  },
  {
    id: 'prod-025',
    name: 'ClarityX Multi-Pattern Vocal Condenser Mic',
    tagline: '34mm gold-sputtered capsule capturing every breath and subtle nuance.',
    price: 229.00,
    originalPrice: 279.00,
    rating: 4.9,
    reviewCount: 203,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    description: 'A versatile large-diaphragm studio condenser microphone featuring switchable Cardioid, Omni, and Figure-8 polar patterns for podcasting, vocal tracking, and orchestral instruments.',
    features: [
      'True 34mm gold-sputtered large diaphragm capsule',
      'Switchable Cardioid, Omnidirectional & Figure-8 patterns',
      'Integrated -10dB pad and 80Hz high-pass filter',
      'Includes custom spider elastic shockmount and magnetic pop filter'
    ],
    specs: {
      'Acoustic Principle': 'Externally Polarized Condenser',
      'Self-Noise': '6 dBA ultra-quiet floor',
      'Power Requirement': '+48V Phantom Power',
      'Chassis': 'Heavy Zinc Die-Cast Body'
    },
    inStock: true,
    stockCount: 25
  },
  {
    id: 'prod-026',
    name: 'Titanium Horizon GPS Adventure Watch',
    tagline: 'Dual-frequency multi-GNSS tracking with sapphire solar crystal lens.',
    price: 499.00,
    originalPrice: 599.00,
    rating: 4.9,
    reviewCount: 168,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    description: 'Engineered for extreme expedition durability. Grade 5 titanium bezel, solar-harvesting sapphire crystal, offline topographic maps, and 28-day battery reserve for mountain trails or deep-sea dives.',
    features: [
      'Multi-band L1/L5 dual-frequency satellite positioning',
      'Power Glass solar charging lens extending battery life',
      'Titanium bezel with DLC diamond-like carbon coating',
      '10 ATM 100-meter water resistance'
    ],
    specs: {
      'Display': '1.4" Sunlight-Visible Transflective MIP',
      'Battery Life': 'Up to 28 days smartwatch / 89 hours GPS',
      'Sensors': 'Optical HR, Pulse Ox, Compass, Barometric Altimeter',
      'Weight': '68g with titanium bracelet'
    },
    inStock: true,
    stockCount: 14
  },
  {
    id: 'prod-027',
    name: 'Verve Ultra-Thin Ceramic Fitness Band',
    tagline: 'Featherlight zirconia ceramic chassis with continuous biosensing.',
    price: 179.00,
    originalPrice: 219.00,
    rating: 4.8,
    reviewCount: 231,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    description: 'Crafted from micro-polished hypoallergenic zirconia ceramic. Discreet, screen-free or subtle hidden OLED notification bar, tracking HRV, resting heart rate, and metabolic recovery without visual distraction.',
    features: [
      'Scratch-proof micro-polished zirconia ceramic case',
      'Screenless minimalist aesthetic with subtle haptic alerts',
      'Automated sleep staging and circadian rhythm coach',
      '14-day continuous battery life'
    ],
    specs: {
      'Thickness': '6.8mm ultra-slim profile',
      'Weight': '22g featherweight comfort',
      'Waterproof': '50 meters (5 ATM)',
      'Connectivity': 'Bluetooth 5.3 Low Energy'
    },
    inStock: true,
    stockCount: 29
  },
  {
    id: 'prod-028',
    name: 'Aura Vision AR Smart Audio Eyewear',
    tagline: 'Open-ear directional acoustic speakers built into Italian acetate frames.',
    price: 349.00,
    originalPrice: 399.00,
    rating: 4.7,
    reviewCount: 154,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80',
    description: 'High-fashion luxury eyewear infused with cutting-edge micro-acoustics. Directional speakers beam crystal-clear calls and podcasts directly to your ears while keeping your ear canals completely free.',
    features: [
      'Handcrafted Italian Mazzucchelli acetate frames',
      'Directional acoustic beamforming with near-zero sound leakage',
      'Touch gesture controls on both temples for volume & track skipping',
      'Polarized Zeiss lenses with 100% UVA/UVB defense'
    ],
    specs: {
      'Battery Life': '6 hours playback / 24 hours with charging case',
      'Microphones': 'Dual beamforming ENC voice mics',
      'Weight': '42g ergonomic sunglasses weight',
      'Water Resistance': 'IPX4 splash and sweat proof'
    },
    inStock: true,
    stockCount: 17
  },
  {
    id: 'prod-029',
    name: 'Chrono Diver Automatic 300M Ocean Watch',
    tagline: 'Swiss automatic mechanical movement housed in 904L superalloy steel.',
    price: 850.00,
    originalPrice: 990.00,
    rating: 5.0,
    reviewCount: 79,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    description: 'A genuine high-luxury mechanical timepiece designed for maritime expeditions. Featuring a 38-hour power reserve automatic movement, unidirectional ceramic bezel with luminous markers, and 300-meter helium release valve.',
    features: [
      'Swiss-engineered 28,800 vph automatic caliber',
      'Unidirectional rotating scratch-proof ceramic bezel',
      'Super-LumiNova BGW9 glowing dial indices',
      'Scratch-resistant sapphire crystal with anti-reflective coating'
    ],
    specs: {
      'Water Resistance': '300 meters / 30 ATM',
      'Case Diameter': '41mm 904L Stainless Steel',
      'Movement': 'Self-winding mechanical automatic',
      'Bracelet': 'Solid-link oyster bracelet with glide-lock clasp'
    },
    inStock: true,
    stockCount: 8
  },
  {
    id: 'prod-030',
    name: 'Somna Wave Biometric Sleep Tracking Band',
    tagline: 'Continuous core temperature, blood oxygen, and neural recovery monitoring.',
    price: 199.00,
    originalPrice: 239.00,
    rating: 4.8,
    reviewCount: 188,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
    description: 'Designed exclusively for restorative health. Worn comfortably on the wrist or bicep with soft breathable jacquard fabric, Somna Wave collects millions of data points to generate actionable daily recovery scores.',
    features: [
      'Medical-grade photoplethysmography sensor array',
      'Real-time skin temperature and respiratory rate tracking',
      'Hypoallergenic antibacterial elastic woven strap',
      'Wireless magnetic inductive fast-charging puck'
    ],
    specs: {
      'Battery Endurance': '10 days continuous monitoring',
      'Charging Time': '40 minutes to full charge',
      'Weight': '19g barely-there feel',
      'Compatibility': 'iOS & Android HealthKit integration'
    },
    inStock: true,
    stockCount: 22
  },
  {
    id: 'prod-031',
    name: 'Apex Kinetic Luxury Carbon Chronograph',
    tagline: 'Exoskeleton forged carbon casing with skeletonized dual-register dial.',
    price: 920.00,
    originalPrice: 1100.00,
    rating: 4.9,
    reviewCount: 64,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    description: 'A fusion of hypercar carbon engineering and haute horlogerie. The marbled forged-carbon case is ultra-rigid and featherweight, showcasing a skeleton dial exposing the mechanical chronograph gears.',
    features: [
      'Forged marbled carbon-composite case block',
      'Skeletonized architectural dial with titanium bridges',
      'Dual chronograph registers with column-wheel actuation',
      'Integrated FKM fluorocarbon rubber sport strap'
    ],
    specs: {
      'Case Size': '42.5mm x 12.5mm',
      'Crystal': 'Double-curved anti-reflective sapphire',
      'Waterproof': '100 meters (10 ATM)',
      'Weight': '58g total featherweight'
    },
    inStock: true,
    stockCount: 7
  },
  {
    id: 'prod-032',
    name: 'Strata Carbon Minimalist Daily Runners',
    tagline: 'Ultralight supercritical nitrogen foam with full-length carbon propulsion plate.',
    price: 269.00,
    originalPrice: 320.00,
    rating: 4.9,
    reviewCount: 312,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    description: 'Engineered for relentless marathon speed and daily streetwear elegance. The supercritical nitrogen-infused foam midsole delivers 85% energy return, propelled forward by a curved aerospace carbon-fiber spoon plate.',
    features: [
      'Full-length curved 3K carbon-fiber propulsion plate',
      'Supercritical nitrogen-infused PEBA responsive foam',
      'One-piece seamless breathable engineered mesh upper',
      'Continental road traction rubber outsole'
    ],
    specs: {
      'Heel-to-Toe Drop': '8mm',
      'Weight': '195g (Size 9) featherweight',
      'Plate Geometry': 'Custom aggressive rocker camber',
      'Lacing': 'Anti-slip ribbed racing laces'
    },
    inStock: true,
    stockCount: 20
  },
  {
    id: 'prod-033',
    name: 'StudioDesk Modular Aluminum Monitor Arm',
    tagline: 'Counterbalanced gas-spring articulation supporting ultrawide displays up to 49".',
    price: 189.00,
    originalPrice: 229.00,
    rating: 4.8,
    reviewCount: 145,
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    description: 'Elevate your heavy ultrawide screen with fingertip zero-gravity adjustment. Machined from solid forged aluminum alloy with concealed internal magnetic cable routing channels.',
    features: [
      'Heavy-duty gas-spring counterbalance mechanism',
      'Supports monitors from 17" to 49" (up to 44 lbs)',
      'Concealed internal magnetic cable management channels',
      'Quick-release VESA 75/100 mounting bracket'
    ],
    specs: {
      'Tilt Range': '+90° to -15°',
      'Swivel Range': '+90° to -90°',
      'Rotation': '360° Portrait & Landscape',
      'Desk Clamp': 'C-clamp and grommet mount included'
    },
    inStock: true,
    stockCount: 24
  },
  {
    id: 'prod-034',
    name: 'KeySonic Custom Acrylic Gasket Numpad',
    tagline: 'Hot-swappable mechanical numpad with programmable rotary aluminum encoder.',
    price: 89.00,
    originalPrice: 109.00,
    rating: 4.8,
    reviewCount: 112,
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    description: 'The companion keypad for financial modeling, streaming, and editing macros. Frosted CNC stacked acrylic housing, Poron gasket dampening, and pre-lubed linear switches for thocky acoustic perfection.',
    features: [
      'Gasket-mounted stacked frosted acrylic chassis',
      'CNC milled aluminum rotary encoder knob with click switch',
      'Hot-swappable 5-pin south-facing RGB PCB',
      'Tri-mode wireless: 2.4Ghz, Bluetooth 5.0, USB-C'
    ],
    specs: {
      'Keys': '19 Keys + Clickable Rotary Dial',
      'Switches': 'Factory-Lubed Gateron Yellow Pro',
      'Battery': '2000mAh rechargeable lithium',
      'Software': 'QMK / VIA programmable macro layers'
    },
    inStock: true,
    stockCount: 35
  },
  {
    id: 'prod-035',
    name: 'Nordic Wool Felt & Full-Grain Leather Desk Pad',
    tagline: 'Natural merino wool felt bound with vegetable-tanned Italian leather.',
    price: 65.00,
    originalPrice: 85.00,
    rating: 4.9,
    reviewCount: 278,
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    description: 'Transform your desk surface with tactile acoustic dampening. Natural high-density merino wool felt provides cushion for wrists and protects wood desks, accented with vegetable-tanned leather trim.',
    features: [
      '100% Organic high-density German merino wool felt',
      'Full-grain Italian vegetable-tanned leather side dock',
      'Anti-slip natural cork and rubber backing',
      'Water and stain resistant hydrophobic coating'
    ],
    specs: {
      'Dimensions': '900mm x 400mm x 4mm extra-large',
      'Surface': 'Precision tracking for all optical mice',
      'Edge': 'Hand-burnished anti-fray stitched border',
      'Colorway': 'Charcoal Felt & Cognac Leather'
    },
    inStock: true,
    stockCount: 40
  },
  {
    id: 'prod-036',
    name: 'OmniDock 14-Port Thunderbolt 4 Station',
    tagline: 'Dual 8K display support with 96W host Power Delivery in solid aluminum.',
    price: 299.00,
    originalPrice: 349.00,
    rating: 4.9,
    reviewCount: 167,
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    description: 'The single-cable workstation solution. Plug one Thunderbolt 4 cable into your MacBook or PC laptop to drive dual 4K 144Hz displays, 2.5GbE Ethernet, UHS-II SD cards, and high-speed USB peripheral busses.',
    features: [
      'Certified Intel Thunderbolt 4 (40Gbps bandwidth)',
      '96W Dynamic Power Delivery fast-charges laptops',
      'Dual 4K @ 144Hz or single 8K @ 60Hz display outputs',
      'Built-in SD 4.0 and MicroSD UHS-II card readers'
    ],
    specs: {
      'Ports': '3x TB4, 4x USB-A 3.2, 1x USB-C 10Gbps, 2.5GbE LAN, 3.5mm Audio',
      'Enclosure': 'Anodized Space Gray Aluminum heatsink chassis',
      'Power Supply': '180W external GaN power brick included',
      'Dimensions': '198mm x 74mm x 26mm'
    },
    inStock: true,
    stockCount: 15
  },
  {
    id: 'prod-037',
    name: 'AeroLift Motorized Solid Oak Standing Desk',
    tagline: 'Dual ultra-quiet German motors with 4 memory presets and solid hardwood slab.',
    price: 849.00,
    originalPrice: 999.00,
    rating: 5.0,
    reviewCount: 92,
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
    description: 'Handcrafted from 1.5-inch thick solid American white oak with beveled organic live edges. Dual synchronized German electric motors lift up to 350 lbs with silent sub-45dB movement and anti-collision gyro safety.',
    features: [
      '100% Solid sustainable American White Oak desktop slab',
      'Heavy-gauge 3-stage steel lifting columns with dual motors',
      'OLED digital controller with 4 custom height presets & child lock',
      'Integrated underside steel cable management trough'
    ],
    specs: {
      'Dimensions': '60" Length x 30" Depth x 1.5" Thickness',
      'Height Range': '24.5" to 50.2" stepless adjustment',
      'Lifting Capacity': '350 lbs (160 kg)',
      'Speed': '1.6 inches per second smooth glide'
    },
    inStock: true,
    stockCount: 6
  },
  {
    id: 'prod-038',
    name: 'ErgoRest Memory Foam Floating Palm Rest',
    tagline: 'Ergonomic cooling gel memory foam encased in breathable textured fabric.',
    price: 45.00,
    originalPrice: 55.00,
    rating: 4.7,
    reviewCount: 304,
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80',
    description: 'Maintain neutral carpal alignment during marathon typing and coding sessions. The infused cooling gel layer dissipates heat while the high-density contour foam distributes pressure away from the median nerve.',
    features: [
      'Infused temperature-regulating cooling gel core',
      'Slow-rebound high-density ergonomic contour foam',
      'Anti-fray reinforced edge stitching',
      'Heavy textured silicone base prevents sliding'
    ],
    specs: {
      'Compatibility': 'Fits 60%, 75%, TKL, and Full-size keyboards',
      'Dimensions': '360mm x 85mm x 18mm',
      'Cover': 'Removable, washable athletic knit fabric',
      'Weight': '240g weighted stability'
    },
    inStock: true,
    stockCount: 45
  },
  {
    id: 'prod-039',
    name: 'Lumix Prime 50mm f/1.2 Cinema Lens',
    tagline: 'Ultra-fast aperture delivering creamy, dreamlike bokeh and corner-to-corner sharpness.',
    price: 899.00,
    originalPrice: 1050.00,
    rating: 5.0,
    reviewCount: 97,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    description: 'The definitive portrait and cinematic prime. Built with 14 optical elements including extra-low dispersion (ED) and dual aspherical glass to eliminate chromatic aberration while yielding mesmerizing subject isolation.',
    features: [
      'Massive f/1.2 maximum aperture for breathtaking low-light',
      '11-blade circular aperture diaphragm for buttery circular bokeh',
      'Dual linear autofocus motors with silent stepping for video',
      'Weather-sealed magnesium alloy barrel with de-clickable aperture ring'
    ],
    specs: {
      'Mount': 'Sony E / Canon RF / Nikon Z available',
      'Focal Length': '50mm Standard Prime',
      'Filter Thread': '77mm',
      'Weight': '740g robust solid optical glass'
    },
    inStock: true,
    stockCount: 9
  },
  {
    id: 'prod-040',
    name: 'AeroCarbon Ultra-Compact Travel Tripod',
    tagline: '10-layer woven carbon fiber legs folding into an ultra-slim 3.1" diameter cylinder.',
    price: 279.00,
    originalPrice: 329.00,
    rating: 4.8,
    reviewCount: 160,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    description: 'Designed for travel photographers who refuse to carry dead weight. The space-saving triangular center column packs down seamlessly into water bottle pockets, offering 33 lbs of rigid payload support.',
    features: [
      '10-Layer Toray 3K carbon-fiber leg architecture',
      'Arca-Swiss compatible low-profile panoramic ball head',
      'Reversible center column for ground-level macro shooting',
      'Integrated hidden smartphone clamp in center hook'
    ],
    specs: {
      'Max Height': '60.5 inches (154 cm)',
      'Folded Length': '15.4 inches (39 cm)',
      'Payload Capacity': '33 lbs (15 kg)',
      'Weight': '2.7 lbs (1.25 kg) featherlight'
    },
    inStock: true,
    stockCount: 18
  },
  {
    id: 'prod-041',
    name: 'Spectra Bi-Color 120W Studio LED Panel',
    tagline: 'CRI 97+ broadcast studio illumination with wireless Bluetooth mesh control.',
    price: 320.00,
    originalPrice: 380.00,
    rating: 4.9,
    reviewCount: 124,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80',
    description: 'Flawless color rendering for studio interviews, portrait sessions, and live broadcasting. The silent convection-cooled aviation aluminum body outputs 12,000 lux at 1 meter with zero fan noise.',
    features: [
      'Ultra-high color fidelity: CRI 97+ and TLCI 98+',
      'Stepless bi-color temperature from 2700K warm to 6500K daylight',
      'Silent passive convection cooling with zero audio fan interference',
      'Wireless smartphone app control and DMX 512 support'
    ],
    specs: {
      'Power Consumption': '120W Max Output',
      'Illuminance': '12,000 Lux @ 1 meter',
      'Power Source': 'AC Adapter or Dual V-Mount Battery (optional)',
      'Dimensions': '320mm x 280mm x 35mm'
    },
    inStock: true,
    stockCount: 13
  },
  {
    id: 'prod-042',
    name: 'Wireless Dual Lavalier Mic Transmitter Kit',
    tagline: '32-bit float onboard recording with 250m range and intelligent noise cancellation.',
    price: 249.00,
    originalPrice: 299.00,
    rating: 4.9,
    reviewCount: 215,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    description: 'Never clip an audio take again. Built-in 32-bit float internal memory stores pristine audio files directly on the transmitter microphones, paired with dual-channel camera receiver and mobile USB-C adapters.',
    features: [
      '32-bit float onboard backup recording (no clipped audio)',
      '250m (820ft) line-of-sight encrypted 2.4Ghz transmission',
      'Intelligent one-touch AI background environmental noise reduction',
      'Charging case provides up to 18 hours total battery operation'
    ],
    specs: {
      'Transmitters': 'Dual clip-on mics with built-in omni capsules',
      'Internal Storage': '8GB per transmitter (14 hours uncompressed)',
      'Outputs': '3.5mm TRS Camera, USB-C Digital, Lightning',
      'Weight': '28g per clip-on transmitter'
    },
    inStock: true,
    stockCount: 21
  },
  {
    id: 'prod-043',
    name: 'Polaris Multi-Coated Variable ND Filter Set',
    tagline: 'German Schott B270 optical glass delivering 1 to 9 stops of precise light reduction.',
    price: 119.00,
    originalPrice: 149.00,
    rating: 4.8,
    reviewCount: 183,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800&q=80',
    description: 'Shoot wide open at f/1.4 in blinding midday sun. Features rotation stops to eliminate the dreaded X-pattern cross polarization, finished with 28 layers of anti-reflective nano-coating.',
    features: [
      'German Schott B270 optical glass with zero color cast',
      '28-layer multi-resistant hydrophobic and oleophobic nano-coating',
      'Hard rotation stops from ND2 to ND400 (1 to 9 stops)',
      'Slim CNC brass ring prevents wide-angle vignetting'
    ],
    specs: {
      'Filter Thread Sizes': '77mm / 82mm options included with step-up rings',
      'Frame Material': 'Aviation Brass Alloy',
      'Light Transmission': '0.2% to 50% stepless rotation',
      'Case': 'Weather-sealed magnetic leather storage pouch'
    },
    inStock: true,
    stockCount: 27
  },
  {
    id: 'prod-044',
    name: 'AquaShield 50M Waterproof Cinema Housing',
    tagline: 'Cast aluminum deep-dive housing for professional full-frame mirrorless cameras.',
    price: 360.00,
    originalPrice: 420.00,
    rating: 4.7,
    reviewCount: 68,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=800&q=80',
    description: 'Take your full-frame camera surfing, into waterfalls, or scuba diving down to 50 meters. Built-in moisture vacuum leak detector and mechanical button extensions for full manual exposure control.',
    features: [
      'Rated for deep underwater diving up to 50 meters (164 ft)',
      'Integrated acoustic & LED vacuum leak detection system',
      'Full access to shutter, dual control dials, and video record buttons',
      'Optical glass dome port included for wide-angle lenses'
    ],
    specs: {
      'Material': 'Corrosion-Resistant Cast Aluminum & Optical Polycarbonate',
      'Buoyancy': 'Slightly positive in seawater',
      'Port Mount': 'Interchangeable Bayonet Lens Port System',
      'Dimensions': '240mm x 185mm x 160mm'
    },
    inStock: true,
    stockCount: 10
  },
  {
    id: 'prod-045',
    name: 'Horizon Falcon 8K Cinema Gimbal Drone',
    tagline: 'Full-frame sensor aerial drone with 360° omnidirectional obstacle avoidance.',
    price: 1299.00,
    originalPrice: 1499.00,
    rating: 5.0,
    reviewCount: 52,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80',
    description: 'The pinnacle of autonomous cinematic filmmaking. Equipped with an 8K Apple ProRes camera on a 3-axis brushless gimbal, 46 minutes of flight endurance, and 15km live HD transmission.',
    features: [
      '8K @ 30fps & 4K @ 120fps 10-bit D-Log ProRes recording',
      'Omnidirectional binocular vision and infrared obstacle sensing',
      'Extended 46-minute flight time per high-capacity intelligent battery',
      'O4 Video Transmission with 15km 1080p 60fps low-latency live feed'
    ],
    specs: {
      'Camera': '4/3 CMOS Hasselblad Sensor',
      'Wind Resistance': '12 m/s (Level 6)',
      'Max Speed': '21 m/s (47 mph)',
      'Takeoff Weight': '895g pro folding airframe'
    },
    inStock: true,
    stockCount: 5
  },
  {
    id: 'prod-046',
    name: 'VoltMax 140W Multi-Port GaN Fast Charger',
    tagline: 'Pocket-sized GaN III architecture charging 3 laptops and phones simultaneously.',
    price: 99.00,
    originalPrice: 129.00,
    rating: 4.9,
    reviewCount: 340,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
    description: 'Replace your bulky laptop chargers with one palm-sized block. Powered by Gallium Nitride (GaN III) semiconductors to deliver full 140W USB-C Power Delivery 3.1 to charge a 16" MacBook Pro at maximum speed.',
    features: [
      'Next-gen GaN III semiconductor efficiency running 35% cooler',
      'Supports USB-C Power Delivery 3.1 up to 140W single-port',
      'Intelligent dynamic power allocation across 3 USB-C & 1 USB-A ports',
      'Foldable wall prongs with interchangeable EU/UK travel adapters'
    ],
    specs: {
      'Total Output': '140W Max Simultaneous Delivery',
      'Ports': '3x USB-C (140W, 100W, 30W), 1x USB-A (22.5W)',
      'Dimensions': '75mm x 75mm x 32mm ultra-compact',
      'Weight': '290g'
    },
    inStock: true,
    stockCount: 32
  },
  {
    id: 'prod-047',
    name: 'Titanium RFID Minimalist Card Wallet',
    tagline: 'Grade 5 aerospace titanium plates with integrated elastic cash strap.',
    price: 79.00,
    originalPrice: 99.00,
    rating: 4.8,
    reviewCount: 420,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
    description: 'Ditch the bulky leather wallet. Precision CNC machined from two Grade 5 titanium plates, blocked against RFID card skimming and holding up to 12 credit cards and folded bills in an ultra-slim pocket footprint.',
    features: [
      'Genuine Grade 5 titanium alloy with matte PVD stonewash finish',
      'Guaranteed RFID & NFC wireless electronic pickpocketing defense',
      'Military-spec replaceable elastic cash strap & money clip',
      'Holds 1 to 12 cards without stretching or deformation'
    ],
    specs: {
      'Thickness': '6mm unloaded profile',
      'Weight': '54g featherlight front-pocket carry',
      'Fasteners': 'Corrosion-resistant stainless steel Torx screws',
      'Warranty': 'Lifetime structural guarantee'
    },
    inStock: true,
    stockCount: 40
  },
  {
    id: 'prod-048',
    name: 'Braided Kevlar Ultra-Durable USB-C Cable (2m)',
    tagline: 'Ballistic Kevlar core rated for 100W Power Delivery and 50,000 bend cycles.',
    price: 35.00,
    originalPrice: 45.00,
    rating: 4.9,
    reviewCount: 512,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1609592426815-5e6e30129a2d?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
    description: 'The last charging cable you will ever need to purchase. Reinforced with DuPont Kevlar fibers and an ultra-tough double-braided nylon exterior, terminating in heavy-gauge CNC zinc alloy connector heads.',
    features: [
      'Reinforced interior DuPont Kevlar core with 50,000+ bend rating',
      '100W E-Marker smart chip charges laptops, tablets, and phones',
      'High-speed 480Mbps data synchronization support',
      'Includes silicone magnetic cable tie organizer'
    ],
    specs: {
      'Length': '2 Meters (6.6 Feet)',
      'Current Capacity': '5A / 20V (100W PD)',
      'Connector Housing': 'Solid Anodized Zinc Alloy',
      'Colorway': 'Stealth Matte Obsidian'
    },
    inStock: true,
    stockCount: 60
  },
  {
    id: 'prod-049',
    name: 'AeroTech Weatherproof Tech Organizer Folio',
    tagline: 'Waterproof Cordura ballistic nylon with origami interior divider pockets.',
    price: 85.00,
    originalPrice: 105.00,
    rating: 4.8,
    reviewCount: 230,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    description: 'Keep all chargers, hard drives, cables, and dongles pristinely organized on your travels. Opens flat like an accordion with 18 specialized elastic slots and water-repellent YKK AquaGuard zippers.',
    features: [
      'Weather-resistant 840D Cordura ballistic nylon fabric',
      'Accordion-style origami interior opening flat at 180°',
      'Dedicated zippered passport, pen, and AirTag tracking pocket',
      'Heavy-duty YKK AquaGuard weatherproof zippers'
    ],
    specs: {
      'Capacity': '2.5 Liters of organized tech gear',
      'Dimensions': '240mm x 150mm x 100mm',
      'External Pass-Through': 'Cable port to charge phone while stored',
      'Weight': '280g'
    },
    inStock: true,
    stockCount: 28
  },
  {
    id: 'prod-050',
    name: 'MagSnap Magnetic Wireless Powerbank 10,000mAh',
    tagline: 'Strong 13N magnetic lock with digital battery percentage display and kickstand.',
    price: 69.00,
    originalPrice: 89.00,
    rating: 4.8,
    reviewCount: 388,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80',
    description: 'Snaps magnetically to the back of your phone for wireless fast charging on the go. Equipped with a fold-out zinc alloy kickstand to watch movies while charging, plus two-way 20W USB-C wired charging.',
    features: [
      '15W Qi2/MagSafe magnetic wireless fast charging',
      '10,000mAh capacity provides 2 full phone recharges',
      'Foldable zinc-alloy desktop viewing kickstand',
      'Real-time OLED display shows exact remaining battery percentage'
    ],
    specs: {
      'Cell Capacity': '10,000mAh (38.5Wh airline approved)',
      'Output': '15W Wireless + 20W USB-C PD Wired',
      'Magnetic Pull': '13N strong neodymium array',
      'Dimensions': '105mm x 67mm x 16mm'
    },
    inStock: true,
    stockCount: 34
  },
  {
    id: 'prod-051',
    name: 'Grade 5 Titanium Apple Watch Link Bracelet',
    tagline: 'Custom DLC coated titanium links with seamless magnetic butterfly clasp.',
    price: 189.00,
    originalPrice: 229.00,
    rating: 4.9,
    reviewCount: 147,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    description: 'Designed specifically to color-match the natural titanium finish of Apple Watch Ultra and Series cases. Each link is individually machined from Grade 5 titanium, featuring a hidden dual-fold butterfly clasp.',
    features: [
      'Crafted from genuine Grade 5 Aerospace Titanium',
      'Diamond-Like Carbon (DLC) scratch-resistant coating',
      'Hidden micro-engineered magnetic butterfly deployment clasp',
      'Includes link removal tool for custom wrist sizing'
    ],
    specs: {
      'Compatibility': 'Apple Watch Ultra (49mm) & 44/45mm models',
      'Wrist Fit': '140mm to 220mm circumference',
      'Weight': '62g solid titanium comfort',
      'Finish': 'Satin Brushed Natural Titanium'
    },
    inStock: true,
    stockCount: 19
  },
  {
    id: 'prod-052',
    name: 'KeyVault Aerospace Carbon Fiber Key Organizer',
    tagline: 'Eliminates pocket jingle and scratches with rigid forged carbon plates.',
    price: 55.00,
    originalPrice: 70.00,
    rating: 4.8,
    reviewCount: 260,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    description: 'Compact your messy key ring into a sleek, silent Swiss Army style pocket knife profile. Accommodates up to 14 keys between real forged carbon-fiber slabs, integrated with a stainless steel bottle opener and loop for car fobs.',
    features: [
      'Forged marbled carbon-fiber exterior plates',
      'Holds 2 to 14 standard keys silently without pocket jingle',
      'Includes stainless steel bottle opener & titanium key ring loop',
      'Prevents metal keys from scratching phone screens in your pocket'
    ],
    specs: {
      'Dimensions': '88mm x 18mm x 12mm',
      'Weight': '26g featherlight',
      'Hardware': 'Black PVD coated stainless steel extension posts',
      'Hardware Included': 'Spacers, washers, and extension posts'
    },
    inStock: true,
    stockCount: 38
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
