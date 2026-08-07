// SAVOR. Gourmet Chain Mock Dataset in JavaScript

export const CATEGORIES = [
  {
    id: "burgers",
    name: "Burgers & Sliders",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    description: "Dry-aged Wagyu & artisanal brioche crafted to order.",
    itemCount: 8
  },
  {
    id: "pizza",
    name: "Woodfired Pizza",
    iconName: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    description: "72-hour sourdough fermented crust fired at 900°F.",
    itemCount: 10
  },
  {
    id: "mains",
    name: "Chef's Signature Mains",
    iconName: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "Michelin-star inspired prime cuts & seafood creations.",
    itemCount: 7
  },
  {
    id: "pasta",
    name: "Handcrafted Pasta",
    iconName: "Wheat",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
    description: "Fresh egg pasta extruded daily with heirloom sauces.",
    itemCount: 6
  },
  {
    id: "asian",
    name: "Asian Fusion",
    iconName: "Soup",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800",
    description: "Bold umami flavors, robata grills & ramen broths.",
    itemCount: 9
  },
  {
    id: "desserts",
    name: "Craft Desserts",
    iconName: "Cake",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800",
    description: "Decadent Valrhona chocolate, gold leaf & patisserie.",
    itemCount: 5
  },
  {
    id: "beverages",
    name: "Elixirs & Wines",
    iconName: "Wine",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
    description: "Sommelier wine selections & zero-proof botanical mocktails.",
    itemCount: 12
  }
];

export const FOOD_ITEMS = [
  {
    id: "food-1",
    name: "Truffle Wagyu Smash Burger",
    category: "burgers",
    price: 34,
    discountPrice: 28,
    rating: 4.9,
    reviewCount: 342,
    calories: 780,
    prepTime: "15-20 mins",
    spiceLevel: 1,
    isVeg: false,
    isBestseller: true,
    isChefsSpecial: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000",
    description: "Double A5 Wagyu beef patties smashed on cast iron, layered with 24-month aged Gruyère, black truffle aioli, caramelized shallots, and wild arugula on a toasted brioche bun.",
    ingredients: ["A5 Wagyu Beef", "Black Truffle Aioli", "Aged Gruyère", "Caramelized Shallots", "Wild Arugula", "Artisanal Brioche"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    nutrition: { protein: "48g", carbs: "52g", fat: "42g" },
    addOns: [
      { id: "ao-1", name: "Extra Black Truffle Slice", price: 6 },
      { id: "ao-2", name: "Smoked Applewood Bacon", price: 4 },
      { id: "ao-3", name: "Double Gruyère Cheese", price: 3 }
    ]
  },
  {
    id: "food-2",
    name: "Artisanal Burrata & Prosciutto Pizza",
    category: "pizza",
    price: 32,
    discountPrice: 26,
    rating: 4.8,
    reviewCount: 215,
    calories: 890,
    prepTime: "12-15 mins",
    spiceLevel: 0,
    isVeg: false,
    isBestseller: true,
    isChefsSpecial: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000",
    description: "72-hour cold-fermented sourdough crust topped with San Marzano DOP tomatoes, whole fresh Pugliese Burrata, San Daniele Prosciutto, and edible 24k gold leaf oil.",
    ingredients: ["Sourdough Crust", "Pugliese Burrata", "San Daniele Prosciutto", "San Marzano DOP", "Fresh Basil", "Evoo"],
    allergens: ["Gluten", "Dairy"],
    nutrition: { protein: "36g", carbs: "88g", fat: "34g" },
    addOns: [
      { id: "ao-4", name: "Extra Fresh Burrata Ball", price: 7 },
      { id: "ao-5", name: "Hot Honey Drizzle", price: 2.5 },
      { id: "ao-6", name: "Wild Porcini Mushrooms", price: 4.5 }
    ]
  },
  {
    id: "food-3",
    name: "Prime Dry-Aged Tomahawk Ribeye",
    category: "mains",
    price: 95,
    discountPrice: 85,
    rating: 5.0,
    reviewCount: 188,
    calories: 1120,
    prepTime: "25-30 mins",
    spiceLevel: 1,
    isVeg: false,
    isBestseller: false,
    isChefsSpecial: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
    description: "45-day dry-aged bone-in prime beef ribeye grilled over Japanese Binchotan charcoal. Served with bone marrow jus, roasted garlic head, and smoked sea salt flake.",
    ingredients: ["45-Day Dry-Aged Prime Beef", "Bone Marrow Reduction", "Roasted Garlic", "Maldon Sea Salt", "Rosemary Butter"],
    allergens: ["Dairy"],
    nutrition: { protein: "92g", carbs: "8g", fat: "76g" },
    addOns: [
      { id: "ao-7", name: "Seared Foie Gras Topper", price: 18 },
      { id: "ao-8", name: "Truffle Butter Glaze", price: 5 },
      { id: "ao-9", name: "Grilled Lobster Tail", price: 24 }
    ]
  },
  {
    id: "food-4",
    name: "Wild Mushroom Saffron Risotto",
    category: "pasta",
    price: 29,
    rating: 4.7,
    reviewCount: 142,
    calories: 620,
    prepTime: "18-22 mins",
    spiceLevel: 0,
    isVeg: true,
    isBestseller: false,
    isChefsSpecial: true,
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&q=80&w=1000",
    description: "Slow-simmered Acquerello carnaroli rice infused with Persian saffron threads, chanterelle and porcini mushrooms, finished with 24-month Parmigiano Reggiano.",
    ingredients: ["Acquerello Carnaroli Rice", "Persian Saffron", "Chanterelles", "Porcini", "Parmigiano Reggiano", "White Wine"],
    allergens: ["Dairy"],
    nutrition: { protein: "18g", carbs: "74g", fat: "22g" },
    addOns: [
      { id: "ao-10", name: "Fresh Shaved Black Truffle", price: 12 },
      { id: "ao-11", name: "Crispy Sage & Pine Nuts", price: 3 }
    ]
  },
  {
    id: "food-5",
    name: "Glazed Miso Black Cod",
    category: "asian",
    price: 44,
    discountPrice: 38,
    rating: 4.9,
    reviewCount: 280,
    calories: 540,
    prepTime: "20 mins",
    spiceLevel: 0,
    isVeg: false,
    isBestseller: true,
    isChefsSpecial: true,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1000",
    description: "Alaskan black cod marinated for 72 hours in sweet Saikyo miso & mirin, broiled to caramelized perfection. Served over dashi ginger jasmine rice.",
    ingredients: ["Alaskan Black Cod", "Saikyo Miso", "Mirin", "Dashi Rice", "Baby Bok Choy", "Pickled Ginger"],
    allergens: ["Fish", "Soy", "Sesame"],
    nutrition: { protein: "42g", carbs: "38g", fat: "24g" },
    addOns: [
      { id: "ao-12", name: "Edamame Truffle Dumpling Side", price: 8 },
      { id: "ao-13", name: "Extra Miso Glaze", price: 3 }
    ]
  },
  {
    id: "food-6",
    name: "Spicy Korean Gochujang Slider Trio",
    category: "burgers",
    price: 26,
    rating: 4.6,
    reviewCount: 98,
    calories: 710,
    prepTime: "15 mins",
    spiceLevel: 3,
    isVeg: false,
    isBestseller: false,
    isChefsSpecial: false,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1000",
    description: "Crispy double-dredged chicken thigh glazed with sticky hot Gochujang, pickled kimchi slaw, and spicy garlic crema on miniature potato buns.",
    ingredients: ["Organic Chicken", "Gochujang Glaze", "House Kimchi", "Garlic Crema", "Sesame Seed Buns"],
    allergens: ["Gluten", "Dairy", "Soy", "Sesame"],
    nutrition: { protein: "38g", carbs: "64g", fat: "32g" },
    addOns: [
      { id: "ao-14", name: "Extra Spicy Ghost Pepper Dip", price: 2 },
      { id: "ao-15", name: "Seasoned Waffle Fries", price: 5 }
    ]
  },
  {
    id: "food-7",
    name: "Valrhona Dark Chocolate Gold Sphere",
    category: "desserts",
    price: 22,
    rating: 4.9,
    reviewCount: 310,
    calories: 510,
    prepTime: "10 mins",
    spiceLevel: 0,
    isVeg: true,
    isBestseller: true,
    isChefsSpecial: true,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=1000",
    description: "70% Valrhona dark chocolate shell filled with hazelnut praline mousse, gold leaf flake, melted live at table with hot salted caramel ganache.",
    ingredients: ["Valrhona 70% Chocolate", "Praline Mousse", "Salted Caramel", "Gold Leaf", "Pistachio Crunch"],
    allergens: ["Dairy", "Nuts", "Soy"],
    nutrition: { protein: "9g", carbs: "58g", fat: "31g" },
    addOns: [
      { id: "ao-16", name: "Scoop Madagascar Vanilla Gelato", price: 4 },
      { id: "ao-17", name: "Espresso Shot Pour-over", price: 3.5 }
    ]
  },
  {
    id: "food-8",
    name: "Smoked Hibiscus Yuzu Botanical Mocktail",
    category: "beverages",
    price: 16,
    rating: 4.8,
    reviewCount: 120,
    calories: 120,
    prepTime: "5 mins",
    spiceLevel: 0,
    isVeg: true,
    isBestseller: false,
    isChefsSpecial: false,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000",
    description: "Wild Mexican hibiscus steeped with Japanese yuzu juice, rosemary syrup, and carbonated mountain water, presented under a cloche of applewood smoke.",
    ingredients: ["Wild Hibiscus", "Fresh Yuzu", "Rosemary Syrup", "Sparkling Water", "Applewood Smoke"],
    allergens: [],
    nutrition: { protein: "0g", carbs: "28g", fat: "0g" },
    addOns: [
      { id: "ao-18", name: "Add Edible Gold Shimmer", price: 3 }
    ]
  }
];

export const COMBO_MEALS = [
  {
    id: "combo-1",
    name: "The Royal Gourmet Tasting Experience",
    description: "2 Wagyu Smash Burgers, 1 Artisanal Burrata Pizza, Truffle Fries, and 2 Signature Desserts with drinks.",
    price: 110,
    originalPrice: 145,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    itemsIncluded: ["2x Truffle Wagyu Smash Burgers", "1x Burrata & Prosciutto Pizza", "1x Parmesan Truffle Fries", "2x Valrhona Gold Spheres"],
    servingSize: "Serves 3-4 Guests",
    badge: "Save 25%"
  },
  {
    id: "combo-2",
    name: "Romantic Starlight Candlelight Dinner",
    description: "2 Prime Dry-Aged Steaks or Black Cod, 1 Saffron Risotto, Valrhona Chocolate Sphere & Bottle of Sommelier Wine.",
    price: 165,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    itemsIncluded: ["2x Choice of Prime Steak or Black Cod", "1x Wild Mushroom Saffron Risotto", "1x Valrhona Dessert", "1x Reserve Wine Bottle"],
    servingSize: "Serves 2 Guests",
    badge: "Couple Favorite"
  },
  {
    id: "combo-3",
    name: "Executive Game-Night Party Bundle",
    description: "3 Woodfired Pizzas, 2 Burger Slider Trios, 2 Large Loaded Garlic Knots, and 4 Craft Beverages.",
    price: 140,
    originalPrice: 185,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    itemsIncluded: ["3x Woodfired Specialty Pizzas", "2x Gochujang Slider Trios", "2x Truffle Garlic Knots", "4x Botanical Mocktails"],
    servingSize: "Serves 5-6 Guests",
    badge: "Party Size"
  }
];

export const OFFERS = [
  {
    id: "offer-1",
    code: "SAVORVIP30",
    title: "30% OFF Your First Online Order",
    subtitle: "Unlock chef-curated dining delivered right to your residence.",
    discountPercentage: 30,
    maxDiscount: 35,
    minOrder: 50,
    validTill: "Limited Time Offer",
    bgGradient: "from-amber-900/60 to-black",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "offer-2",
    code: "PIZZANIGHT",
    title: "Complimentary Artisanal Pizza",
    subtitle: "Buy any 2 Signature Mains & receive 1 Burrata Pizza free.",
    discountFixed: 32,
    minOrder: 80,
    validTill: "Valid Weekdays",
    bgGradient: "from-amber-950 to-neutral-900",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "offer-3",
    code: "GOLDMOCKTAIL",
    title: "Free Gold Botanical Elixir",
    subtitle: "Orders above $60 receive a complimentary craft mocktail.",
    discountFixed: 16,
    minOrder: 60,
    validTill: "Tonight Only",
    bgGradient: "from-yellow-950 to-black",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600"
  }
];

export const RESTAURANT_LOCATIONS = [
  {
    id: "loc-1",
    name: "Manhattan Flagship Reserve",
    address: "745 5th Avenue, New York, NY 10022",
    neighborhood: "Midtown Manhattan",
    distance: "0.8 miles away",
    phone: "+1 (212) 889-9000",
    openHours: "11:30 AM – 11:00 PM Daily",
    dineInStatus: "Open",
    deliveryAvailable: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    mapUrl: "https://maps.google.com"
  },
  {
    id: "loc-2",
    name: "Brooklyn DUMBO Waterfront",
    address: "55 Water Street, Brooklyn, NY 11201",
    neighborhood: "DUMBO Waterfront",
    distance: "3.2 miles away",
    phone: "+1 (718) 440-2323",
    openHours: "12:00 PM – 10:30 PM",
    dineInStatus: "Busy",
    deliveryAvailable: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
    mapUrl: "https://maps.google.com"
  },
  {
    id: "loc-3",
    name: "Beverly Hills Golden Triangle",
    address: "9600 Wilshire Blvd, Beverly Hills, CA 90212",
    neighborhood: "Beverly Hills",
    distance: "West Coast",
    phone: "+1 (310) 650-1100",
    openHours: "11:00 AM – 11:30 PM",
    dineInStatus: "Open",
    deliveryAvailable: true,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    mapUrl: "https://maps.google.com"
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    customerName: "Chef Elena Rostova",
    customerPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "Yesterday",
    comment: "The Truffle Wagyu Smash Burger is unmatched in the city. Savoria delivers michelin-quality taste right to my doorstep with warm packaging.",
    dishName: "Truffle Wagyu Smash Burger",
    verifiedOrder: true
  },
  {
    id: "rev-2",
    customerName: "Marcus Vance",
    customerPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "3 days ago",
    comment: "The live order tracking was spot on, and the Valrhona Gold sphere dessert arrived perfectly intact. Magnificent experience!",
    dishName: "Valrhona Dark Chocolate Gold Sphere",
    verifiedOrder: true
  },
  {
    id: "rev-3",
    customerName: "Sophia Chen",
    customerPhoto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "1 week ago",
    comment: "Reserved a VIP table for our anniversary. The AI pairing recommended an incredible Pinot Noir that matched the Tomahawk Ribeye impeccably.",
    dishName: "Prime Dry-Aged Tomahawk Ribeye",
    verifiedOrder: true
  }
];

export const INITIAL_USER = {
  id: "usr-001",
  name: "Julian Vance",
  email: "julian.vance@gourmet.com",
  phone: "+1 (555) 234-5678",
  role: "customer",
  loyaltyPoints: 1240,
  walletBalance: 150.00,
  membershipTier: "Gold Connoisseur",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
  createdAt: "2025-11-10",
  status: "Active",
  savedAddresses: [
    { id: "addr-1", type: "Home", label: "Penthouse Residence", address: "432 Park Ave, Apt 62B, New York, NY", city: "New York", isDefault: true },
    { id: "addr-2", type: "Office", label: "Design Studio", address: "120 Wooster St, SoHo, New York, NY", city: "New York", isDefault: false }
  ]
};

export const MOCK_STAFF = [
  { id: "stf-1", name: "Chef Marcus Vane", email: "marcus@savoria.com", phone: "+1 (555) 101-2020", role: "admin", branch: "Manhattan Flagship", shift: "Morning", status: "Active", avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200" },
  { id: "stf-2", name: "Sarah Jenkins", email: "sarah.j@savoria.com", phone: "+1 (555) 303-4040", role: "manager", branch: "Brooklyn Waterfront", shift: "Full Day", status: "Active", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" },
  { id: "stf-3", name: "Chef Antoine Laurent", email: "antoine@savoria.com", phone: "+1 (555) 505-6060", role: "staff", branch: "Manhattan Flagship", shift: "Evening", status: "Active", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
  { id: "stf-4", name: "David Miller", email: "david.m@savoria.com", phone: "+1 (555) 707-8080", role: "staff", branch: "Beverly Hills", shift: "Night", status: "On Leave", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { id: "stf-5", name: "Elena Rostova", email: "elena.r@savoria.com", phone: "+1 (555) 909-0011", role: "superadmin", branch: "All Branches", shift: "Executive", status: "Active", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" }
];

export const MOCK_INVENTORY = [
  { id: "inv-1", name: "A5 Wagyu Beef Cuts", category: "Meats", stockQty: 18, unit: "kg", minThreshold: 25, supplier: "Tokyo Wagyu Imports", costPerUnit: 180, lastRestocked: "2026-07-27", status: "Low Stock" },
  { id: "inv-2", name: "Fresh Pugliese Burrata", category: "Dairy", stockQty: 42, unit: "balls", minThreshold: 20, supplier: "Puglia Artisanal Dairy", costPerUnit: 4.5, lastRestocked: "2026-07-28", status: "Optimal" },
  { id: "inv-3", name: "Black Winter Truffle", category: "Delicacies", stockQty: 3, unit: "kg", minThreshold: 5, supplier: "Umbria Truffles Co.", costPerUnit: 1200, lastRestocked: "2026-07-20", status: "Low Stock" },
  { id: "inv-4", name: "Acquerello Carnaroli Rice", category: "Dry Goods", stockQty: 120, unit: "kg", minThreshold: 30, supplier: "Piemonte Grains", costPerUnit: 8.0, lastRestocked: "2026-07-25", status: "Optimal" },
  { id: "inv-5", name: "24-Month Parmigiano", category: "Dairy", stockQty: 35, unit: "kg", minThreshold: 15, supplier: "Parma Cheese House", costPerUnit: 22, lastRestocked: "2026-07-22", status: "Optimal" },
  { id: "inv-6", name: "Persian Saffron Threads", category: "Spices", stockQty: 0.8, unit: "kg", minThreshold: 1.0, supplier: "Royal Spice Traders", costPerUnit: 2500, lastRestocked: "2026-07-15", status: "Low Stock" }
];

export const MOCK_CUSTOMERS = [
  { id: "cust-1", name: "Julian Vance", email: "julian.vance@gourmet.com", phone: "+1 (555) 234-5678", totalOrders: 18, totalSpent: 1280.50, loyaltyPoints: 1240, tier: "Gold Connoisseur", status: "Active", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" },
  { id: "cust-2", name: "Camilla Sterling", email: "camilla.s@luxury.com", phone: "+1 (555) 888-9999", totalOrders: 32, totalSpent: 3450.00, loyaltyPoints: 3100, tier: "Black Diamond VIP", status: "Active", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
  { id: "cust-3", name: "Liam Hemsworth", email: "liam.h@cinema.org", phone: "+1 (555) 444-3333", totalOrders: 9, totalSpent: 620.00, loyaltyPoints: 580, tier: "Silver Epicure", status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { id: "cust-4", name: "Sophia Martinez", email: "sophia.m@gmail.com", phone: "+1 (555) 111-2222", totalOrders: 2, totalSpent: 78.00, loyaltyPoints: 75, tier: "Gourmet Club", status: "Blocked", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" }
];

export const MOCK_ADMIN_ORDERS = [
  {
    id: "SVR-904812",
    customerName: "Julian Vance",
    customerPhone: "+1 (555) 234-5678",
    customerEmail: "julian.vance@gourmet.com",
    items: [
      { id: "item-1", foodItem: FOOD_ITEMS[0], quantity: 2, selectedAddOns: [FOOD_ITEMS[0].addOns[0]], itemTotal: 80.00 },
      { id: "item-2", foodItem: FOOD_ITEMS[1], quantity: 1, selectedAddOns: [], itemTotal: 32.00 }
    ],
    subtotal: 112.00,
    discountAmount: 10.00,
    deliveryFee: 5.00,
    tax: 9.18,
    tipAmount: 15.00,
    totalAmount: 131.18,
    status: "cooking",
    orderType: "delivery",
    deliveryAddress: "432 Park Ave, Apt 62B, New York, NY",
    paymentMethod: "Apple Pay",
    estimatedArrivalMinutes: 22,
    createdAt: "2026-07-29 11:42 AM",
    branch: "Manhattan Flagship Reserve"
  },
  {
    id: "SVR-904811",
    customerName: "Camilla Sterling",
    customerPhone: "+1 (555) 888-9999",
    customerEmail: "camilla.s@luxury.com",
    items: [
      { id: "item-3", foodItem: FOOD_ITEMS[2], quantity: 1, selectedAddOns: [FOOD_ITEMS[2].addOns[0]], itemTotal: 113.00 },
      { id: "item-4", foodItem: FOOD_ITEMS[4], quantity: 2, selectedAddOns: [], itemTotal: 88.00 }
    ],
    subtotal: 201.00,
    discountAmount: 0.00,
    deliveryFee: 0.00,
    tax: 18.09,
    tipAmount: 30.00,
    totalAmount: 249.09,
    status: "out_for_delivery",
    orderType: "delivery",
    deliveryAddress: "55 Water Street, DUMBO, Brooklyn, NY",
    paymentMethod: "Credit Card (Visa ending in 9012)",
    estimatedArrivalMinutes: 10,
    createdAt: "2026-07-29 11:15 AM",
    driverName: "Alexander Vance",
    driverPhone: "+1 (555) 999-0000",
    driverPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    driverVehicle: "Porsche Taycan Gourmet Express",
    branch: "Brooklyn DUMBO Waterfront"
  },
  {
    id: "SVR-904810",
    customerName: "Liam Hemsworth",
    customerPhone: "+1 (555) 444-3333",
    customerEmail: "liam.h@cinema.org",
    items: [
      { id: "item-5", foodItem: FOOD_ITEMS[3], quantity: 2, selectedAddOns: [], itemTotal: 58.00 }
    ],
    subtotal: 58.00,
    discountAmount: 5.00,
    deliveryFee: 0.00,
    tax: 4.77,
    tipAmount: 8.00,
    totalAmount: 65.77,
    status: "pending",
    orderType: "pickup",
    deliveryAddress: "Pickup at Manhattan Flagship",
    paymentMethod: "Credit Card (Mastercard)",
    estimatedArrivalMinutes: 30,
    createdAt: "2026-07-29 11:55 AM",
    branch: "Manhattan Flagship Reserve"
  },
  {
    id: "SVR-904809",
    customerName: "Sophia Martinez",
    customerPhone: "+1 (555) 111-2222",
    customerEmail: "sophia.m@gmail.com",
    items: [
      { id: "item-6", foodItem: FOOD_ITEMS[5], quantity: 2, selectedAddOns: [], itemTotal: 52.00 }
    ],
    subtotal: 52.00,
    discountAmount: 0,
    deliveryFee: 5.00,
    tax: 4.16,
    tipAmount: 5.00,
    totalAmount: 66.16,
    status: "delivered",
    orderType: "delivery",
    deliveryAddress: "88 Greenwich St, New York, NY",
    paymentMethod: "Cash on Delivery",
    estimatedArrivalMinutes: 0,
    createdAt: "2026-07-29 09:30 AM",
    branch: "Manhattan Flagship Reserve"
  }
];

export const MOCK_RESERVATIONS = [
  { id: "res-101", branchName: "Manhattan Flagship Reserve", date: "2026-07-30", time: "07:30 PM", guests: 4, seatingZone: "Chef Table Lounge", specialOccasion: "Anniversary", fullName: "Camilla Sterling", email: "camilla.s@luxury.com", phone: "+1 (555) 888-9999", specialRequests: "Window view preferred with champagne pre-chilled", status: "confirmed", confirmationCode: "SAV-8891" },
  { id: "res-102", branchName: "Brooklyn DUMBO Waterfront", date: "2026-07-30", time: "08:00 PM", guests: 2, seatingZone: "Outdoor Patio River View", specialOccasion: "Birthday", fullName: "Julian Vance", email: "julian.vance@gourmet.com", phone: "+1 (555) 234-5678", specialRequests: "Candlelit setup", status: "pending", confirmationCode: "SAV-9921" },
  { id: "res-103", branchName: "Beverly Hills Golden Triangle", date: "2026-07-31", time: "06:30 PM", guests: 6, seatingZone: "Private Dining Room", specialOccasion: "Business Dinner", fullName: "Lord Richard Sterling", email: "richard@sterling.com", phone: "+1 (555) 777-6666", specialRequests: "Sommelier wine pairing service requested", status: "confirmed", confirmationCode: "SAV-1042" }
];

export const MOCK_ANALYTICS = {
  dailyRevenue: [
    { day: "Mon", revenue: 4200, orders: 84 },
    { day: "Tue", revenue: 5100, orders: 98 },
    { day: "Wed", revenue: 6800, orders: 112 },
    { day: "Thu", revenue: 7400, orders: 130 },
    { day: "Fri", revenue: 11200, orders: 210 },
    { day: "Sat", revenue: 14800, orders: 280 },
    { day: "Sun", revenue: 12500, orders: 235 }
  ],
  categoryPerformance: [
    { category: "Burgers", percentage: 32, value: 18400 },
    { category: "Pizza", percentage: 24, value: 13800 },
    { category: "Mains", percentage: 22, value: 12650 },
    { category: "Asian", percentage: 12, value: 6900 },
    { category: "Desserts & Drinks", percentage: 10, value: 5750 }
  ],
  peakHours: [
    { hour: "12 PM", orders: 45 },
    { hour: "1 PM", orders: 88 },
    { hour: "2 PM", orders: 32 },
    { hour: "6 PM", orders: 75 },
    { hour: "7 PM", orders: 120 },
    { hour: "8 PM", orders: 145 },
    { hour: "9 PM", orders: 95 }
  ]
};

export const MOCK_CMS = {
  heroBanner: {
    title: "Culinary Precision Meets Modern Luxury",
    subtitle: "Experience 3-Michelin star standards delivered directly to your residence.",
    buttonText: "Order Online Now",
    bannerImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200"
  },
  faqs: [
    { question: "How are thermal containers kept warm during delivery?", answer: "Our delivery fleet utilizes custom heated insulated vaults maintained at 165°F to guarantee hot food arrival." },
    { question: "Can I customize ingredients for severe allergies?", answer: "Yes! Every food item features detailed allergen filters and custom notes for our head chef." },
    { question: "How does the Gourmet Loyalty Club work?", answer: "Earn 10 points for every $1 spent. Redeem points for sommelier wine bottles, truffle add-ons, and VIP table access." }
  ],
  blogs: [
    { id: "b-1", title: "The Art of Dry-Aging Wagyu Beef", date: "July 24, 2026", author: "Chef Marcus Vane", summary: "Discover how 45-day Himalayan salt brick dry-aging transforms Wagyu ribeye tenderness.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" },
    { id: "b-2", title: "Selecting Saffron for Persian Risotto", date: "July 18, 2026", author: "Sommelier Antoine", summary: "Grade 1 Sargol saffron threads and why origin matters in Michelin rice dishes.", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&q=80&w=600" }
  ]
};

export const MOCK_SETTINGS = {
  name: "SAVORIA Gourmet Chain",
  tagline: "Fine Dining Redefined",
  contactEmail: "concierge@savoria.com",
  contactPhone: "+1 (800) 555-SAVOR",
  address: "745 5th Avenue, New York, NY 10022",
  taxRate: 8.875,
  deliveryFeeBase: 5.00,
  minOrderForFreeDelivery: 75.00,
  operatingHours: "11:00 AM – 11:30 PM Daily",
  paymentGateways: {
    stripe: true,
    paypal: true,
    cashOnDelivery: true,
    applePay: true
  },
  socialLinks: {
    instagram: "@savoria.gourmet",
    facebook: "facebook.com/savoriagourmet",
    twitter: "@savoria"
  },
  apiKeySet: true
};

