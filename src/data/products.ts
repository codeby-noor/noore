import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ================= ABAYAS (8 PRODUCTS) =================
  {
    id: 'prod-abaya-01',
    slug: 'classic-black-abaya',
    name: 'Classic Black Abaya',
    tagline: 'The definitive architectural black silhouette',
    price: 185,
    category: 'abayas',
    categoryName: 'Abayas',
    subcategory: 'Classic',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 4.9,
    reviewCount: 142,
    colors: [
      { name: 'Noir Obsidian', hex: '#111111' },
      { name: 'Deep Espresso', hex: '#2A201A' }
    ],
    sizes: ['52 (Petite 5\'0"-5\'2")', '54 (Regular 5\'3"-5\'4")', '56 (Classic 5\'5"-5\'6")', '58 (Tall 5\'7"-5\'8")', '60 (Extended 5\'9"+)'],
    images: [
      'https://images.unsplash.com/photo-1772474500365-c2c520545f44?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1772474578035-bebcd90b355d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1772474521525-c022114367ce?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An iconic investment piece hand-tailored in our Dubai atelier. Woven from heavyweight double-face Japanese crepe, the Classic Black Abaya offers a clean lapel line, hidden magnetic cuffs for seamless sleeve styling, and a graceful floor-sweeping fluid silhouette.',
    fabricDetails: [
      '100% Japanese Crepe de Chine',
      'Anti-static and wrinkle-resistant treatment',
      'Hand-finished French seams',
      'Concealed matte magnetic snap closures'
    ],
    careInstructions: [
      'Dry clean recommended or gentle hand wash cold',
      'Steam iron on reverse at low temperature',
      'Do not tumble dry'
    ],
    features: [
      'Discreet deep side-seam pockets',
      'Removable matching Japanese crepe belt included',
      'Can be worn open as an elegant duster or closed'
    ],
    modelInfo: 'Model is 5\'8" (173cm) wearing size 56 with 2-inch kitten heels.',
    featured: true,
    bestSeller: true
  },
  {
    id: 'prod-abaya-02',
    slug: 'everyday-open-abaya',
    name: 'Everyday Open Abaya',
    tagline: 'Effortless fluid drape for modern city living',
    price: 165,
    category: 'abayas',
    categoryName: 'Abayas',
    subcategory: 'Open Abaya',
    badge: 'NEW',
    inStock: true,
    rating: 4.8,
    reviewCount: 98,
    colors: [
      { name: 'Oat Taupe', hex: '#C2B69D' },
      { name: 'Soft Alabaster', hex: '#EDE8DF' },
      { name: 'Warm Charcoal', hex: '#343332' }
    ],
    sizes: ['52', '54', '56', '58', '60'],
    images: [
      'https://images.unsplash.com/photo-1760083545495-b297b1690672?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1752794673269-dc356838c5fd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1762605135012-56a59a059e60?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Designed for purposeful simplicity, the Everyday Open Abaya is cut with a relaxed shoulder and minimalist collarless neckline. Crafted from our signature Medina silk-touch blend, it catches the slightest breeze without transparency.',
    fabricDetails: [
      'High-grade Medina Crepe Silk blend',
      'Opaque yet ultra-breathable composition',
      'Zero pilling with satin soft drape'
    ],
    careInstructions: [
      'Machine wash gentle cycle cold with like colors',
      'Line dry in shade',
      'Low heat iron or garment steamer'
    ],
    features: [
      'Side slit detailing for effortless stride',
      'Dual deep pockets',
      'Wide kimono-inspired sleeves'
    ],
    modelInfo: 'Model is 5\'7" wearing size 56 in Oat Taupe.',
    featured: true,
    bestSeller: false
  },
  {
    id: 'prod-abaya-03',
    slug: 'dubai-luxury-abaya',
    name: 'Dubai Luxury Abaya',
    tagline: 'Haute couture cordonnet embroidery on midnight obsidian',
    price: 295,
    originalPrice: 340,
    category: 'abayas',
    categoryName: 'Abayas',
    subcategory: 'Couture',
    badge: 'HAUTE COUTURE',
    inStock: true,
    rating: 5.0,
    reviewCount: 64,
    colors: [
      { name: 'Obsidian Midnight', hex: '#0B0B0C' },
      { name: 'Smoked Quartz', hex: '#4A403A' }
    ],
    sizes: ['52', '54', '56', '58', '60'],
    images: [
      'https://images.unsplash.com/photo-1597578843067-5d33f44383db?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1772474500365-c2c520545f44?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1724412665971-114bd351a42d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An homage to modern Gulf grandeur, this couture masterpiece features hand-guided tone-on-tone cordonnet lace trailing down the center and sleeve cuffs. Sculpted from premium Nidha fabric known for its cooling hand-feel and midnight depth.',
    fabricDetails: [
      'Grade A Royal Korean Nidha Fabric',
      'Imported French cordonnet lace inserts',
      'Satin-bound inner seam construction'
    ],
    careInstructions: [
      'Professional dry clean only',
      'Keep hung on padded luxury hanger in dust bag'
    ],
    features: [
      'Hidden cuff buttons for modesty lock',
      'Matching couture chiffon shayla included',
      'Floor-sweeping structured train'
    ],
    modelInfo: 'Model is 5\'9" wearing size 58.',
    featured: true,
    bestSeller: true
  },
  {
    id: 'prod-abaya-04',
    slug: 'pleated-abaya',
    name: 'Pleated Abaya',
    tagline: 'Architectural knife pleats sculpted from fluid micro-crepe',
    price: 210,
    category: 'abayas',
    categoryName: 'Abayas',
    subcategory: 'Pleated',
    badge: 'EXCLUSIVE',
    inStock: true,
    rating: 4.7,
    reviewCount: 53,
    colors: [
      { name: 'Desert Sand', hex: '#D2C3B0' },
      { name: 'Pure Noir', hex: '#111111' },
      { name: 'Pearl Sage', hex: '#BAC5B8' }
    ],
    sizes: ['52', '54', '56', '58'],
    images: [
      'https://images.unsplash.com/photo-1762605135326-5c4bcc5ef006?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1762605135376-ae5af70a5628?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1728487235101-664d87965931?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Crisp vertical knife pleating cascades from the yoke through the hemline, creating mesmerizing kinetic movement with every stride. The lightweight micro-crepe retains its razor-sharp pleats wash after wash.',
    fabricDetails: [
      'Permanent heat-set micro-crepe',
      'Fluid high-density filament weave',
      'Opaque, non-transparent fabric structure'
    ],
    careInstructions: [
      'Gentle hand wash cold or hand cycle',
      'Drip dry on hanger — do not wring or press directly over pleats',
      'Light steam from a distance only'
    ],
    features: [
      'Hidden push-stud collar closure',
      'Full-length pleated raglan sleeves',
      'Flowing flared hemline'
    ],
    modelInfo: 'Model is 5\'8" wearing size 56 in Desert Sand.',
    featured: false,
    bestSeller: false
  },
  {
    id: 'prod-abaya-05',
    slug: 'linen-abaya',
    name: 'Linen Abaya',
    tagline: 'Washed European flax in earthy desert neutrals',
    price: 190,
    category: 'abayas',
    categoryName: 'Abayas',
    subcategory: 'Linen',
    badge: 'NEW',
    inStock: true,
    rating: 4.9,
    reviewCount: 77,
    colors: [
      { name: 'Earthy Clay', hex: '#B89B84' },
      { name: 'Raw Flax', hex: '#DFD8CA' },
      { name: 'Olive Bark', hex: '#5E5D4B' }
    ],
    sizes: ['52', '54', '56', '58', '60'],
    images: [
      'https://images.unsplash.com/photo-1561442748-c50715dc32f6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1762605135012-56a59a059e60?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1752794673269-dc356838c5fd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Handcrafted from 100% stonewashed European linen that softens with every wear. Tailored with relaxed raglan sleeves, utility patch pockets, and a timeless collar for modern Mediterranean and Gulf summers alike.',
    fabricDetails: [
      '100% Certified European Washed Flax Linen',
      'Breathable, natural thermal regulator',
      'Hypoallergenic and eco-friendly dyes'
    ],
    careInstructions: [
      'Machine wash cold on gentle linen cycle',
      'Tumble dry low or air dry for natural relaxed linen crinkle',
      'Warm iron if crisp finish is desired'
    ],
    features: [
      'Twin deep exterior patch pockets',
      'Real horn button closures',
      'Detachable sash tie'
    ],
    modelInfo: 'Model is 5\'7" wearing size 54 in Raw Flax.',
    featured: false,
    bestSeller: true
  },
  {
    id: 'prod-abaya-06',
    slug: 'embroidered-abaya',
    name: 'Embroidered Abaya',
    tagline: 'Minimalist metallic threadwork along cuff and lapel',
    price: 245,
    category: 'abayas',
    categoryName: 'Abayas',
    subcategory: 'Embroidered',
    badge: 'EXCLUSIVE',
    inStock: true,
    rating: 4.8,
    reviewCount: 46,
    colors: [
      { name: 'Noir & Brushed Gold', hex: '#171717' },
      { name: 'Ivory & Silver Thread', hex: '#F5F3EF' }
    ],
    sizes: ['52', '54', '56', '58'],
    images: [
      'https://images.unsplash.com/photo-1772474521525-c022114367ce?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1772474578035-bebcd90b355d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1724412665971-114bd351a42d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Subtle opulence redefined. Featuring delicate geometric linear embroidery executed with matte lurex threads that catch the light like molten gold, set against pitch-black Korean crepe.',
    fabricDetails: [
      'Korean Ultra-Crepe with matte finish',
      'Tarnish-resistant metallic thread embroidery',
      'Silk satin piping on inner neckline'
    ],
    careInstructions: [
      'Professional dry clean recommended',
      'Steam gently avoiding direct contact with metallic thread'
    ],
    features: [
      'Tailored cuff slits with embroidery borders',
      'Invisible snap fasteners along placket',
      'Includes matching embroidered shayla'
    ],
    modelInfo: 'Model is 5\'8" wearing size 56.',
    featured: false,
    bestSeller: false
  },
  {
    id: 'prod-abaya-07',
    slug: 'minimalist-kimono-abaya',
    name: 'Minimalist Kimono Abaya',
    tagline: 'Wide dropped sleeves and an understated wrap silhouette',
    price: 175,
    category: 'abayas',
    categoryName: 'Abayas',
    subcategory: 'Kimono',
    badge: 'NEW',
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    colors: [
      { name: 'Warm Alabaster', hex: '#EAE6DF' },
      { name: 'Desert Dune', hex: '#CDBFAF' },
      { name: 'Caviar Black', hex: '#1C1C1C' }
    ],
    sizes: ['52', '54', '56', '58', '60'],
    images: [
      'https://images.unsplash.com/photo-1752794673269-dc356838c5fd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1762605135376-ae5af70a5628?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1760083545495-b297b1690672?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Inspired by Japanese minimalism and Gulf grace. Cut with an oversized square kimono sleeve, dramatic side vents, and clean raw-edge bindings in a buttery heavy viscose-silk weave.',
    fabricDetails: [
      'Heavyweight Viscose-Silk Crepe',
      'Exceptional fluid drape and opacity',
      'Cool hand-feel suitable for all seasons'
    ],
    careInstructions: [
      'Hand wash cold inside out with wool-safe detergent',
      'Dry flat on towel',
      'Low steam iron'
    ],
    features: [
      'Generous 22-inch sleeve opening',
      'Drop shoulders for an oversized editorial profile',
      'Optional obi-style tie belt included'
    ],
    modelInfo: 'Model is 5\'9" wearing size 58 in Warm Alabaster.',
    featured: true,
    bestSeller: false
  },
  {
    id: 'prod-abaya-08',
    slug: 'premium-occasion-abaya',
    name: 'Premium Occasion Abaya',
    tagline: 'Lustrous crinkled satin with flared bell cuffs for celebrations',
    price: 260,
    originalPrice: 310,
    category: 'abayas',
    categoryName: 'Abayas',
    subcategory: 'Occasion',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 5.0,
    reviewCount: 112,
    colors: [
      { name: 'Champagne Silk', hex: '#E6DCB8' },
      { name: 'Midnight Pearl', hex: '#1F2024' },
      { name: 'Dusty Rose Gold', hex: '#D1B4AB' }
    ],
    sizes: ['52', '54', '56', '58', '60'],
    images: [
      'https://images.unsplash.com/photo-1724412665971-114bd351a42d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1772474500365-c2c520545f44?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1772474578035-bebcd90b355d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Tailored for evening galas, Eid banquets, and intimate weddings. Crafted from liquid-finish hammered satin that shimmers subtly under ambient lighting without being overtly glossy. Features flared bell cuffs lined with silk organza.',
    fabricDetails: [
      'Hammered Crepe Back Satin',
      'Organza-reinforced cuff structure',
      'Fully lined with ultra-breathable cupro'
    ],
    careInstructions: [
      'Dry clean only',
      'Steam only — do not iron directly on satin face'
    ],
    features: [
      'Subtle train with discreet finger loop',
      'Covered silk satin buttons down center back',
      'Includes premium matching satin belt'
    ],
    modelInfo: 'Model is 5\'8" wearing size 56 in Champagne Silk.',
    featured: false,
    bestSeller: true
  },

  // ================= HIJABS (6 PRODUCTS) =================
  {
    id: 'prod-hijab-01',
    slug: 'premium-chiffon-hijab',
    name: 'Premium Chiffon Hijab',
    tagline: 'Laser-cut georgette with zero slip and effortless volume',
    price: 28,
    category: 'hijabs',
    categoryName: 'Hijabs',
    subcategory: 'Chiffon',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 4.9,
    reviewCount: 310,
    colors: [
      { name: 'Soft Nougat', hex: '#D7C4B7' },
      { name: 'Desert Oat', hex: '#E5DACB' },
      { name: 'Midnight Noir', hex: '#111111' },
      { name: 'Smoky Taupe', hex: '#9C8F85' }
    ],
    sizes: ['Standard Maxi (200cm x 75cm)'],
    images: [
      'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1681152299027-17efe7da7081?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1746366618640-9b0257c3cd64?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Our most famous hijab. Woven from high-twist georgette chiffon with a subtle micro-texture that clings gently without slipping or losing structure. Laser-finished rolled edges ensure clean drape around the neckline.',
    fabricDetails: [
      '100% High-Twist Georgette Chiffon',
      'Ultra-fine laser baby rolled hem',
      'Breathable, airy, medium opacity'
    ],
    careInstructions: [
      'Machine wash gentle cold in laundry net',
      'Hang dry in shade',
      'Iron on lowest synthetic setting'
    ],
    features: [
      'Extra 200cm length for multi-layered styling',
      'Non-slip textured hand',
      'Pairs perfectly with our Matte Hijab Magnets'
    ],
    modelInfo: 'One Size fits all. Shown styled with classic single wrap.',
    featured: true,
    bestSeller: true
  },
  {
    id: 'prod-hijab-02',
    slug: 'everyday-jersey-hijab',
    name: 'Everyday Jersey Hijab',
    tagline: 'Four-way stretch modal cotton with pin-free security',
    price: 32,
    category: 'hijabs',
    categoryName: 'Hijabs',
    subcategory: 'Jersey',
    badge: 'NEW',
    inStock: true,
    rating: 4.9,
    reviewCount: 215,
    colors: [
      { name: 'Espresso Noir', hex: '#1A1817' },
      { name: 'Warm Camel', hex: '#B89065' },
      { name: 'Heather Stone', hex: '#C2BFBA' }
    ],
    sizes: ['Standard (185cm x 70cm)'],
    images: [
      'https://images.unsplash.com/photo-1626254180993-10f70536cfc4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1643458025240-db4819ce22bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1638701130403-e7ced85f0f24?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Engineered for women on the move. Crafted from long-staple combed cotton spun with Austrian modal and spandex, providing 100% pin-free hold that stays locked all day through morning workouts to evening dinners.',
    fabricDetails: [
      '50% Long-Staple Cotton, 45% Modal, 5% Spandex',
      'Medium-heavyweight zero-transparency knit',
      'Four-way resilient stretch'
    ],
    careInstructions: [
      'Machine wash warm with like colors',
      'Tumble dry medium',
      'No iron necessary'
    ],
    features: [
      'Pin-free styling capability',
      'Soft on sensitive skin and baby hair',
      'Snag-resistant knit structure'
    ],
    modelInfo: 'One Size. Worn without pins or undercaps.',
    featured: false,
    bestSeller: true
  },
  {
    id: 'prod-hijab-03',
    slug: 'modal-hijab',
    name: 'Modal Hijab',
    tagline: '100% Austrian Lenzing modal with buttery cooling touch',
    price: 35,
    category: 'hijabs',
    categoryName: 'Hijabs',
    subcategory: 'Modal',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 5.0,
    reviewCount: 180,
    colors: [
      { name: 'Desert Clay', hex: '#C2987E' },
      { name: 'Raw Ivory', hex: '#F7F4EB' },
      { name: 'Charcoal Slate', hex: '#3B3C3E' }
    ],
    sizes: ['Maxi (205cm x 80cm)'],
    images: [
      'https://images.unsplash.com/photo-1613447895817-e617a4093f50?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1640154852340-9de73a0643a8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1641427862119-d5c76c51ef4c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Eco-conscious luxury at its pinnacle. Woven exclusively from certified Austrian beechwood Lenzing Modal. Feathery lightweight yet completely opaque when folded once, it drapes like liquid velvet.',
    fabricDetails: [
      '100% Certified Lenzing Modal',
      'Naturally hypoallergenic & thermo-regulating',
      'Biodegradable natural fibers'
    ],
    careInstructions: [
      'Hand wash cold with delicate silk detergent',
      'Lay flat to dry',
      'Low iron if needed'
    ],
    features: [
      'Eyelash raw fringe border detail',
      'Silky hand without the slippery shine',
      'All-day cool scalp comfort'
    ],
    modelInfo: 'Shown styled draped across shoulders.',
    featured: true,
    bestSeller: true
  },
  {
    id: 'prod-hijab-04',
    slug: 'silk-feel-hijab',
    name: 'Silk-Feel Hijab',
    tagline: 'Opulent satin-weave with pearlescent sheen for formal attire',
    price: 38,
    category: 'hijabs',
    categoryName: 'Hijabs',
    subcategory: 'Satin Silk',
    badge: 'EXCLUSIVE',
    inStock: true,
    rating: 4.8,
    reviewCount: 94,
    colors: [
      { name: 'Champagne Gold', hex: '#E5D7A3' },
      { name: 'Pearl Silver', hex: '#E2E2E6' },
      { name: 'Midnight Navy', hex: '#182030' }
    ],
    sizes: ['Square (100cm x 100cm)', 'Rectangle (190cm x 70cm)'],
    images: [
      'https://images.unsplash.com/photo-1585728748176-455ac5eed962?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613611927458-3ddd4b0afdb9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Crafted with a luxurious dual-face construction: lustrous pearlescent satin on the exterior for formal opulence, paired with a brushed matte backing that anchors securely against the undercap.',
    fabricDetails: [
      'Premium Satin-Poly Twill blend',
      'Dual-faced non-slip backing',
      'Hand-rolled luxury hem finish'
    ],
    careInstructions: [
      'Dry clean or gentle hand wash cold',
      'Steam only on reverse matte side'
    ],
    features: [
      'Mirror-sheen finish catches light effortlessly',
      'Does not produce static or muffle hearing',
      'Designed for weddings, formal galas and celebrations'
    ],
    modelInfo: 'Shown in Champagne Gold in formal turban-drape.',
    featured: false,
    bestSeller: false
  },
  {
    id: 'prod-hijab-05',
    slug: 'premium-cotton-hijab',
    name: 'Premium Cotton Hijab',
    tagline: 'Fine-spun organic combed cotton with raw fringe edge',
    price: 30,
    category: 'hijabs',
    categoryName: 'Hijabs',
    subcategory: 'Cotton',
    badge: 'NEW',
    inStock: true,
    rating: 4.7,
    reviewCount: 65,
    colors: [
      { name: 'Pure Alabaster', hex: '#F9F8F5' },
      { name: 'Warm Bisque', hex: '#ECDCCB' },
      { name: 'Slate Olive', hex: '#737A6A' }
    ],
    sizes: ['Maxi (195cm x 85cm)'],
    images: [
      'https://images.unsplash.com/photo-1746366618640-9b0257c3cd64?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1643458180338-02c4fa4be53c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1681152299027-17efe7da7081?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Spun from 100% GOTS certified organic Aegean cotton. Features a subtle airy weave that provides generous volume around the crown without adding bulk or heat.',
    fabricDetails: [
      '100% GOTS Certified Organic Cotton',
      'Breathable open-plain weave',
      'Zero synthetic additives'
    ],
    careInstructions: [
      'Machine wash gentle 30°C',
      'Line dry flat to preserve edge fringe',
      'Warm iron'
    ],
    features: [
      'Micro-fringed natural hem',
      'Zero static electricity',
      'Perfect grip for all-day styling'
    ],
    modelInfo: 'Standard Maxi size shown.',
    featured: false,
    bestSeller: false
  },
  {
    id: 'prod-hijab-06',
    slug: 'crinkle-hijab',
    name: 'Crinkle Hijab',
    tagline: 'No-iron textured linen viscose with effortless volume',
    price: 26,
    category: 'hijabs',
    categoryName: 'Hijabs',
    subcategory: 'Crinkle',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 4.9,
    reviewCount: 188,
    colors: [
      { name: 'Olive Bark', hex: '#585949' },
      { name: 'Spiced Terracotta', hex: '#A85D4A' },
      { name: 'Sandstone', hex: '#D8CEBE' }
    ],
    sizes: ['Generous Maxi (200cm x 90cm)'],
    images: [
      'https://images.unsplash.com/photo-1643457750585-14ee3c47d8bd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1643458048025-72acad148ef9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613447895817-e617a4093f50?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The ultimate travel and daily hijab. Featuring permanent heat-crinkled micro-textures that disguise wrinkles and add natural sculptural body without pins or shaping accessories.',
    fabricDetails: [
      '60% Viscose, 40% Flax Blend',
      'Permanent crinkle texture finish',
      'Super lightweight and breathable'
    ],
    careInstructions: [
      'Machine wash cold gentle in mesh bag',
      'Twist lightly and let air dry to lock in crinkle structure',
      'Never iron'
    ],
    features: [
      'Completely iron-free',
      'Extra wide 90cm coverage for maximum drape',
      'Featherweight hand-feel'
    ],
    modelInfo: 'Maxi length shown wrapped effortlessly.',
    featured: false,
    bestSeller: true
  },

  // ================= MODEST ESSENTIALS (10 PRODUCTS) =================
  {
    id: 'prod-ess-01',
    slug: 'modest-two-piece-set',
    name: 'Modest Two-Piece Set',
    tagline: 'High-neck tunic with matching wide-leg trousers',
    price: 215,
    category: 'sets',
    categoryName: 'Two-Piece Sets',
    subcategory: 'Co-ord Sets',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 4.9,
    reviewCount: 165,
    colors: [
      { name: 'Ivory Bone', hex: '#EAE6DC' },
      { name: 'Midnight Charcoal', hex: '#2B2B2B' },
      { name: 'Camel Tan', hex: '#A68261' }
    ],
    sizes: ['XS (US 2-4)', 'S (US 6)', 'M (US 8-10)', 'L (US 12-14)', 'XL (US 16)'],
    images: [
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1552874869-5c39ec9288dc?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The epitome of refined modest dressing. Comprising a structured high-neck longline tunic featuring dramatic high side-slits and paired with fluid floor-skimming wide-leg trousers with an elasticated back waistband.',
    fabricDetails: [
      'Heavy Double-Knit Ponte Crepe',
      'Smooth structure with comfortable stretch',
      'Non-sheer and wrinkle-defying'
    ],
    careInstructions: [
      'Machine wash gentle cold or dry clean',
      'Hang dry on shaped hanger',
      'Medium iron or steam'
    ],
    features: [
      'Concealed back zip on tunic with hook-and-eye',
      'Side pockets on trousers',
      'High side tunic vents for complete freedom of movement'
    ],
    modelInfo: 'Model is 5\'9" (175cm) with a 33" bust, wearing size Small.',
    featured: true,
    bestSeller: true
  },
  {
    id: 'prod-ess-02',
    slug: 'longline-tunic',
    name: 'Longline Tunic',
    tagline: 'Calf-grazing silhouette with mother-of-pearl buttons',
    price: 135,
    category: 'essentials',
    categoryName: 'Modest Essentials',
    subcategory: 'Tunics',
    badge: 'NEW',
    inStock: true,
    rating: 4.8,
    reviewCount: 54,
    colors: [
      { name: 'Pure Ivory', hex: '#FDFCF9' },
      { name: 'Oat Taupe', hex: '#D2C8B8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1552874869-5c39ec9288dc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A versatile foundational garment designed to be layered under open abayas or worn alone over wide-leg pants. Features a clean mandarin band collar, concealed placket, and real Australian mother-of-pearl buttons.',
    fabricDetails: [
      '70% Lyocell, 30% Fine Cotton',
      'Silky hand with substantial weight',
      'Opaque weave'
    ],
    careInstructions: [
      'Machine wash cold delicate',
      'Line dry flat',
      'Steam iron'
    ],
    features: [
      'Mandarin collar with subtle keyhole',
      'Generous 18-inch side vents',
      'Single button barrel cuffs'
    ],
    modelInfo: 'Model is 5\'8" wearing size Small.',
    featured: false,
    bestSeller: false
  },
  {
    id: 'prod-ess-03',
    slug: 'wide-leg-trousers',
    name: 'Wide-Leg Trousers',
    tagline: 'Tailored high-rise trousers with puddle hem drape',
    price: 120,
    category: 'essentials',
    categoryName: 'Modest Essentials',
    subcategory: 'Bottoms',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 4.9,
    reviewCount: 140,
    colors: [
      { name: 'Charcoal Black', hex: '#1C1C1D' },
      { name: 'Warm Taupe', hex: '#B8ABA0' },
      { name: 'Vanilla Cream', hex: '#F3EFE6' }
    ],
    sizes: ['XS (26")', 'S (28")', 'M (30")', 'L (32")', 'XL (34")'],
    images: [
      'https://images.unsplash.com/photo-1668028554553-f83cac89ce0f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1668028554854-245f8ccae15b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Cut with a flattering high waist, deep front pleats, and wide flowing legs that skim gracefully over footwear. Featuring a flat front with comfort-elasticated back waist.',
    fabricDetails: [
      'Tailored Wool-Touch Rayon Twill',
      'Fluid drape that does not cling to legs',
      'Crease-resistant finish'
    ],
    careInstructions: [
      'Dry clean or machine wash cold on delicate',
      'Hang to dry',
      'Press with pressing cloth'
    ],
    features: [
      'Dual deep slash pockets',
      'Elasticated back waistband for adaptive fit',
      'Reinforced blind hem with 2 inches of let-down room'
    ],
    modelInfo: 'Model is 5\'8" with 27" waist wearing size Small.',
    featured: false,
    bestSeller: true
  },
  {
    id: 'prod-ess-04',
    slug: 'prayer-dress',
    name: 'Prayer Dress',
    tagline: 'All-in-one attached hijab prayer gown in cooling bamboo',
    price: 95,
    category: 'prayer-wear',
    categoryName: 'Prayer Wear',
    subcategory: 'One-Piece',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 5.0,
    reviewCount: 224,
    colors: [
      { name: 'Pearl White', hex: '#F8F7F3' },
      { name: 'Soft Olive', hex: '#9E9F8E' },
      { name: 'Muted Rose', hex: '#CDB1AC' }
    ],
    sizes: ['Petite (Under 5\'3")', 'Regular (5\'4"-5\'7")', 'Tall (5\'8"+)'],
    images: [
      'https://images.unsplash.com/photo-1662806407800-56793fa8e924?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1643458180338-02c4fa4be53c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1638701130403-e7ced85f0f24?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Engineered for peace and spiritual tranquility. Crafted from 100% cooling organic bamboo rayon, featuring an integrated attached headscarf that slips on in under 3 seconds with zero pins required. Includes hidden wrist loops to ensure arms remain covered in all postures.',
    fabricDetails: [
      '100% Bamboo Rayon Jersey',
      'Naturally antibacterial and moisture-wicking',
      'Feather-soft and cooling on touch'
    ],
    careInstructions: [
      'Machine wash gentle cold',
      'Tumble dry low or air dry',
      'No iron needed'
    ],
    features: [
      'Integrated headscarf with generous chest coverage',
      'Elasticated smocked cuffs with thumb loops',
      'Comes with a matching zippered travel pouch'
    ],
    modelInfo: 'Model is 5\'7" wearing size Regular in Pearl White.',
    featured: true,
    bestSeller: true
  },
  {
    id: 'prod-ess-05',
    slug: 'prayer-set',
    name: 'Prayer Set',
    tagline: 'Two-piece matching prayer khimar and skirt set',
    price: 110,
    category: 'prayer-wear',
    categoryName: 'Prayer Wear',
    subcategory: 'Two-Piece',
    badge: 'NEW',
    inStock: true,
    rating: 4.9,
    reviewCount: 88,
    colors: [
      { name: 'Sage Dust', hex: '#C2C9BD' },
      { name: 'Pure Ivory', hex: '#F8F7F2' },
      { name: 'Smoky Lilac', hex: '#C1B6BD' }
    ],
    sizes: ['One Size (Adaptable elastic waistband)'],
    images: [
      'https://images.unsplash.com/photo-1638701130403-e7ced85f0f24?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1662806407800-56793fa8e924?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1643458180338-02c4fa4be53c?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A traditional French jilbab silhouette refined into a modern two-piece prayer set. Includes a knee-length overhead khimar with tie-back straps and an A-line elasticated floor skirt. Packaged in a compact drawstring satin bag.',
    fabricDetails: [
      'Washed Aerobin Crepe',
      'Completely non-sheer with breathable micro-crinkle',
      'Weightless feel on shoulders'
    ],
    careInstructions: [
      'Machine wash 30°C delicate',
      'Hang dry — shakes out wrinkle-free'
    ],
    features: [
      'Tie-back head ties (fits any head circumference without pins)',
      'Drawstring travel pouch included',
      'Wide stretchy skirt waistband'
    ],
    modelInfo: 'One Size fits all (Heights 5\'1" to 5\'10").',
    featured: false,
    bestSeller: false
  },
  {
    id: 'prod-ess-06',
    slug: 'modest-maxi-dress',
    name: 'Modest Maxi Dress',
    tagline: 'Slip-resistant long sleeve foundational underdress',
    price: 115,
    category: 'essentials',
    categoryName: 'Modest Essentials',
    subcategory: 'Underdresses',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 4.8,
    reviewCount: 176,
    colors: [
      { name: 'Sandy Nude', hex: '#CDBFAF' },
      { name: 'Caviar Black', hex: '#141414' },
      { name: 'Porcelain White', hex: '#F9F8F6' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1616313253719-c46514cddee1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1773439879064-53483d0ce0d1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1552874869-5c39ec9288dc?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The definitive foundation for every open abaya or kimono. Tailored with a modest crewneck, long slim sleeves, and a column A-line silhouette in our non-static, non-cling modal jersey blend.',
    fabricDetails: [
      '95% Lenzing Modal, 5% Elastane',
      'Anti-static micro-finish prevents abaya clinging',
      '100% opaque double-layered chest'
    ],
    careInstructions: [
      'Machine wash cold with gentle detergent',
      'Tumble dry low'
    ],
    features: [
      'Hidden back neck zip',
      'Slight A-line flare at hem for stride ease',
      'Zero static cling'
    ],
    modelInfo: 'Model is 5\'8" wearing size Small in Sandy Nude.',
    featured: false,
    bestSeller: true
  },
  {
    id: 'prod-ess-07',
    slug: 'undercaps',
    name: 'Bamboo Undercaps (Set of 3)',
    tagline: 'Non-slip cross-front caps engineered for zero tension on hairline',
    price: 36,
    category: 'essentials',
    categoryName: 'Modest Essentials',
    subcategory: 'Undercaps',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 4.9,
    reviewCount: 290,
    colors: [
      { name: 'Trio: Noir, Taupe, Stone', hex: '#242424' }
    ],
    sizes: ['One Size (Adjustable tie back)'],
    images: [
      'https://images.unsplash.com/photo-1614177919002-8b868f0ac5bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1585728748176-455ac5eed962?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1626254180993-10f70536cfc4?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Pack of three essential cross-front undercaps. Specially contoured with an open tube back and tie-strings to alleviate tension headaches and protect fragile edges from friction or breakage.',
    fabricDetails: [
      '95% Organic Bamboo Fiber, 5% Spandex',
      'Hypoallergenic and breathable',
      'Silky smooth texture prevents hair frizz'
    ],
    careInstructions: [
      'Machine wash gentle in lingerie bag',
      'Air dry'
    ],
    features: [
      'Contoured criss-cross front framing the forehead',
      'Adjustable back ties fit any hair volume or bun',
      'Includes 3 neutral shades: Noir, Warm Taupe, and Stone'
    ],
    modelInfo: 'Pack of 3 individual caps included.',
    featured: false,
    bestSeller: true
  },
  {
    id: 'prod-ess-08',
    slug: 'hijab-magnets',
    name: 'Hijab Magnets (Matte Duo)',
    tagline: 'Ultra-strong neodymium magnets in Matte Rose Gold & Noir',
    price: 24,
    category: 'essentials',
    categoryName: 'Modest Essentials',
    subcategory: 'Hardware',
    badge: 'BESTSELLER',
    inStock: true,
    rating: 5.0,
    reviewCount: 380,
    colors: [
      { name: 'Matte Rose Gold & Noir', hex: '#C49E8B' },
      { name: 'Brushed Gold & Silver', hex: '#D4AF37' }
    ],
    sizes: ['Pair of 2 Sets (4 pieces)'],
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Replace dangerous needles with our sleek magnetic closures. Featuring ultra-grade neodymium magnets encapsulated in scratch-resistant matte alloy that glides on silk and chiffon without snagging or puncturing threads.',
    fabricDetails: [
      'N52 Rare Earth Neodymium Magnets',
      'Triple-coated matte PVD alloy finish',
      'Nickel-free and skin-safe'
    ],
    careInstructions: [
      'Wipe clean with dry microfiber cloth',
      'Store separated on velvet magnetic card'
    ],
    features: [
      'Zero fabric damage or holes',
      'Holds through up to 8 layers of jersey or silk',
      'Includes velvet storage pouch and presentation card'
    ],
    modelInfo: 'Contains 2 matching pairs.',
    featured: true,
    bestSeller: true
  },
  {
    id: 'prod-ess-09',
    slug: 'hijab-pins',
    name: 'Hijab Pins (Set of 4)',
    tagline: 'Micro-fine pearled styling pins designed for delicate silks',
    price: 18,
    category: 'essentials',
    categoryName: 'Modest Essentials',
    subcategory: 'Hardware',
    badge: 'NEW',
    inStock: true,
    rating: 4.8,
    reviewCount: 92,
    colors: [
      { name: 'Ivory Pearl & Brushed Brass', hex: '#EAE6DC' }
    ],
    sizes: ['Set of 4'],
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Handcrafted jeweler-grade styling pins tipped with cultured freshwater shell pearls. Ultra-polished 0.5mm stainless steel shafts slide effortlessly through chiffon without causing thread pulls.',
    fabricDetails: [
      'Cultured Shell Pearls',
      'Surgical grade 316L stainless steel shaft',
      'Hand-polished smooth tips'
    ],
    careInstructions: [
      'Keep dry in provided presentation box'
    ],
    features: [
      'Surgical sharpness prevents fiber snagging',
      'Elegant vintage jewelry aesthetic',
      'Comes in embossed NOORÉ keepsake gift box'
    ],
    modelInfo: 'Set of 4 pins in velvet box.',
    featured: false,
    bestSeller: false
  },
  {
    id: 'prod-ess-10',
    slug: 'abaya-belts',
    name: 'Braided Leather & Silk Abaya Belt',
    tagline: 'Hand-braided supple lambskin and silk cord with brass aglets',
    price: 68,
    category: 'essentials',
    categoryName: 'Modest Essentials',
    subcategory: 'Belts',
    badge: 'EXCLUSIVE',
    inStock: true,
    rating: 4.9,
    reviewCount: 58,
    colors: [
      { name: 'Noir & Brass', hex: '#171717' },
      { name: 'Cognac Saddle', hex: '#875135' }
    ],
    sizes: ['Regular (170cm)', 'Long (210cm)'],
    images: [
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The finishing couture touch. Hand-plaited by European leather artisans using fine strips of supple lambskin intermeshed with pure mulberry silk cord, capped with heavy brushed brass finials.',
    fabricDetails: [
      'Full grain Italian lambskin leather',
      '100% Mulberry silk cord',
      'Solid brushed brass hardware'
    ],
    careInstructions: [
      'Specialist leather clean only',
      'Store coiled in provided cotton dust bag'
    ],
    features: [
      'Versatile self-tie design with no pre-set holes',
      'Weighted brass tassels for elegant drape',
      'Elevates simple abayas into tailored statement looks'
    ],
    modelInfo: 'Length 170cm shown wrapped double around waist.',
    featured: false,
    bestSeller: false
  }
];

