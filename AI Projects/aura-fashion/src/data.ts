import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Heavyweight Oversized Hoodie",
    price: 135,
    originalPrice: 175,
    category: "streetwear",
    rating: 4.9,
    reviewsCount: 142,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Mineral Gray", hex: "#4b5563" },
      { name: "Chalk White", hex: "#f3f4f6" },
      { name: "Onyx Black", hex: "#111827" }
    ],
    description: "Tailored with a high-density 480GSM organic cotton loopback fleece. This piece features drop shoulders, a double-layer structured hood without drawstrings, and a Kangaroo-pocketless front body for a sculptural, modern drape.",
    details: [
      "100% Organic Loops cotton fleece",
      "Heavyweight 480GSM fabric density",
      "Lint-free brushed interior",
      "Pre-shrunk for optimal dimensional stability",
      "Made in Portugal"
    ],
    isNew: true,
    isTrending: true,
    discountBadge: "22% OFF"
  },
  {
    id: "prod-2",
    name: "Minimalist Structured Trench",
    price: 340,
    category: "outerwear",
    rating: 4.8,
    reviewsCount: 88,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Sienna Beige", hex: "#c2b29c" },
      { name: "Onyx Black", hex: "#111827" }
    ],
    description: "An architectural interpretation of the classic trench coat. Fabricated in a water-resistant technical cotton gabardine, featuring a hidden button storm flap placket, storm shield vent, and adjustable cuffs. Fully lined in visual viscose jacquard.",
    details: [
      "65% Cotton, 35% Recycled Polyamide gabardine",
      "Japanese dry-touch technical finish",
      "Tonal natural horn custom buttons",
      "Detachable self-belt for multi-styling",
      "Dry clean only"
    ],
    isBestSeller: true
  },
  {
    id: "prod-3",
    name: "Raw Edge Distressed Denim Jacket",
    price: 185,
    originalPrice: 220,
    category: "streetwear",
    rating: 4.7,
    reviewsCount: 95,
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Acid Indigo", hex: "#4b7bec" },
      { name: "Sunbleached Charcoal", hex: "#3f3f46" }
    ],
    description: "Crafted from dry 14oz rigid selvedge denim. This jacket showcases a vintage washed fade, featuring hand-frayed distressed margins on raw wrist cuffs and waist trim. Finished with heavy-duty gunmetal rivet closure.",
    details: [
      "14oz premium cotton selvedge denim",
      "Custom laser-etched hardware",
      "Relaxed vintage trucker silhouette",
      "Hand-frayed distressing throughout",
      "Designed in Paris"
    ],
    isTrending: true,
    discountBadge: "SAVE $35"
  },
  {
    id: "prod-4",
    name: "The Soft Luxury Knit Sweater",
    price: 210,
    category: "clothing",
    rating: 4.9,
    reviewsCount: 76,
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Alabaster Cream", hex: "#fafaf9" },
      { name: "Suede Tan", hex: "#d7c49e" }
    ],
    description: "A sensory masterwork blended with super-fine baby alpaca wool and fine merino fibers. Hand-knit style rib details are placed at the crew neck, waistband, and extra-long sleeves for an cozy modern fit.",
    details: [
      "50% Baby Alpaca, 30% Extra-fine Merino, 20% recycled nylon",
      "Extremely soft cloud-touch handle",
      "Stretched-over neck seam detail",
      "Naturally insulative and breathable",
      "Ethical cruelty-free fibers"
    ],
    isNew: true
  },
  {
    id: "prod-5",
    name: "Architectural Cargo Trousers",
    price: 165,
    category: "streetwear",
    rating: 4.6,
    reviewsCount: 112,
    images: [
      "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Tactical Olive", hex: "#3f4238" },
      { name: "Onyx Black", hex: "#111827" },
      { name: "Sand Dune", hex: "#e5e5e0" }
    ],
    description: "Redesigning utilitarian uniform. These trousers boast an advanced dual-panel structure through knee pleats and modular cargo flap pockets. Includes quick-release nylon adjustable hems for variable straight-fit or jogger crop options.",
    details: [
      "High-density cotton herringbone twill",
      "Dual hidden-snap cargo bays",
      "Ergonomic angled side pockets",
      "Polished gunmetal waist adjuster buckles",
      "Reinforced rear panel construction"
    ],
    isTrending: true
  },
  {
    id: "prod-6",
    name: "Boxy Mid-Weight Mockneck Tee",
    price: 65,
    originalPrice: 85,
    category: "basics",
    rating: 4.9,
    reviewsCount: 205,
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Chalk White", hex: "#f3f4f6" },
      { name: "Charcoal Ash", hex: "#374151" },
      { name: "Dust Ochre", hex: "#c4a482" }
    ],
    description: "The modern daily uniform. A boxy, retro relaxed fit with drop shoulders and a sturdy mockneck collar that retains its shape. Knitted from heavy organic compact cotton carded yarns for a dry, clean aesthetic.",
    details: [
      "240GSM organic compact cotton jersey",
      "Tall 1.2 inch ribbed collar neckline",
      "Relaxed retro drop-shoulder comfort",
      "Double-needle flatlock stitched seams",
      "Enzyme washed for soft skin-feel"
    ],
    isBestSeller: true,
    discountBadge: "SPECIAL VALUE"
  },
  {
    id: "prod-7",
    name: "Handcrafted Suede Chelsea Boots",
    price: 280,
    category: "accessories",
    rating: 4.8,
    reviewsCount: 64,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Tobacco Suede", hex: "#b1906c" },
      { name: "Coal Black", hex: "#2d2d2d" }
    ],
    description: "An dressy sleek Chelsea silhouette handmade in Italy. Patterned with butter-soft Calf Skin suede, an agile leather sole with rubber reinforcement inserts, and a premium contrast elastic expansion side gore.",
    details: [
      "100% Selected Italian Kid Suede leather",
      "Full cowhide premium interior lining",
      "Double-weave structural elastomeric side panel",
      "Hand-stitched leather storm welt",
      "Crafted inside artisanal workshops in Tuscany"
    ],
    isNew: true
  },
  {
    id: "prod-8",
    name: "Sleek Minimal Leather Tote",
    price: 320,
    category: "accessories",
    rating: 4.9,
    reviewsCount: 52,
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["M"],
    colors: [
      { name: "Raw Umber", hex: "#5a4d41" },
      { name: "Onyx Black", hex: "#111827" }
    ],
    description: "An exercise in architectural restraint. Structured with thick, heavy-duty vegetable tanned calfskin leather. Exhibits a highly spacious interior fitted with a detachable suede zipper pouch and raw hand-finished structural edges.",
    details: [
      "Full Vegetable Tanned Calfskin",
      "Suede-lined main compartment",
      "Dual-length hand and over-shoulder leather straps",
      "Silver-finished custom hardware stamp",
      "Ships with organic canvas storage dustbag"
    ],
    isBestSeller: true
  },
  {
    id: "prod-9",
    name: "Washed Silk Slip Satin Dress",
    price: 245,
    category: "clothing",
    rating: 4.9,
    reviewsCount: 93,
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Liquid Gold", hex: "#e0cca7" },
      { name: "Onyx Black", hex: "#111827" }
    ],
    description: "Sleek and provocative. Cut on the bias to hug and flatter natural body contours with sublime movement. Fully structured with high grade fluid organic silk charmeuse, finished with microadjustable spaghetti back shoulder ribbon straps.",
    details: [
      "100% Luxury silk-charmeuse satin weave",
      "V-neck front flat finishing",
      "Deep cowl-drop statement upper back",
      "Naturally cooling high-skin breathability",
      "Made carefully in Paris workshops"
    ],
    isNew: true,
    isTrending: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Aria Sterling",
    role: "Senior Stylist, Vogue",
    rating: 5,
    comment: "The heavy 480GSM hoodie sets a new bar for high-street basics. The lack of standard drawstrings and pockets produces a pure, structural drape that is impossible to find elsewhere.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "test-2",
    name: "Marcus Vance",
    role: "Creative Director, ATELIER",
    rating: 5,
    comment: "Aura is standard apparel made divine. The Trench coat's Japanese dry-gabardine has an unmatched weather-beating texture that flows beautifully matching fluid trousers.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "test-3",
    name: "Kimberly Nguyen",
    role: "Fashion Collector",
    rating: 5,
    comment: "The Chelsea boots are gorgeous! Incredibly soft Italian suede and immediate comfort from day one. I am converted to Aura's seasonal drops completely.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80"
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Collection' },
  { id: 'clothing', name: 'Premium apparel' },
  { id: 'streetwear', name: 'Luxury streetwear' },
  { id: 'outerwear', name: 'Minimalist coats' },
  { id: 'basics', name: 'Everyday uniform' },
  { id: 'accessories', name: 'Artisanal objects' }
];

export const INSTAGRAM_POSTS = [
  {
    id: "insta-1",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=450&auto=format&fit=crop&q=80",
    likes: "2.4k"
  },
  {
    id: "insta-2",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=450&auto=format&fit=crop&q=80",
    likes: "4.1k"
  },
  {
    id: "insta-3",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=450&auto=format&fit=crop&q=80",
    likes: "3.2k"
  },
  {
    id: "insta-4",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=450&auto=format&fit=crop&q=80",
    likes: "5.8k"
  },
  {
    id: "insta-5",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=450&auto=format&fit=crop&q=80",
    likes: "1.9k"
  },
  {
    id: "insta-6",
    img: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=450&auto=format&fit=crop&q=80",
    likes: "3.7k"
  }
];
