import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, Heart, Trash2, ArrowRight, ArrowLeft, Plus, Minus, 
  Check, Play, Star, Sparkles, AlertCircle, ShoppingCart, ShieldCheck 
} from 'lucide-react';

import { Product, CartItem, ProductSize, ProductColor, ProductCategory } from './types';
import { PRODUCTS, TESTIMONIALS, CATEGORIES } from './data';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import AiStylistSection from './components/AiStylistSection';
import BrandStory from './components/BrandStory';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // CartState: with local persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aura_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('aura_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Recently Viewed tracker
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  // Modals & Drawers state
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);
  const [isStylistOpen, setIsStylistOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Checkout & Authentication flow states
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'success'>('details');
  const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '', address: '', card: '', expiry: '', cvv: '' });
  const [lastOrderId, setLastOrderId] = useState('');
  
  // Login form status
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [authForm, setAuthForm] = useState({ email: '', password: '', name: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  // Shop Sorting Order
  const [sortBy, setSortBy] = useState<'default' | 'priceAsc' | 'priceDesc' | 'rating' | 'popular'>('default');

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('aura_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('aura_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Handle recently viewed push on look
  useEffect(() => {
    if (selectedProduct) {
      setRecentlyViewed(prev => {
        const filtered = prev.filter(p => p.id !== selectedProduct.id);
        return [selectedProduct, ...filtered].slice(0, 4);
      });
    }
  }, [selectedProduct]);

  // Back to top on tab swap
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage, selectedProduct]);

  // Wishlist handler toggle
  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some(p => p.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter(p => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // Add Item to Bag Cart
  const handleAddToCart = (product: Product, size: ProductSize, color: ProductColor, qnty: number = 1) => {
    const itemUniqueId = `${product.id}-${size}-${color.name}`;
    const existingIndex = cart.findIndex(item => item.id === itemUniqueId);

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += qnty;
      setCart(updated);
    } else {
      const newItem: CartItem = {
        id: itemUniqueId,
        product,
        selectedSize: size,
        selectedColor: color,
        quantity: qnty
      };
      setCart([...cart, newItem]);
    }
  };

  const handleUpdateCartQuantity = (itemId: string, diff: number) => {
    const updated = cart.map(item => {
      if (item.id === itemId) {
        const newQty = item.quantity + diff;
        return { ...item, quantity: newQty < 1 ? 1 : newQty };
      }
      return item;
    });
    setCart(updated);
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const handleBuyNow = (product: Product, size: ProductSize, color: ProductColor) => {
    handleAddToCart(product, size, color, 1);
    setSelectedQuickViewProduct(null);
    setActivePage('cart');
  };

  // Cost calculators
  const getSubtotal = () => cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const getDiscountAmount = () => getSubtotal() * appliedDiscount;
  const getTaxAmount = () => (getSubtotal() - getDiscountAmount()) * 0.12; // 12% standard Vat tax
  const getTotal = () => (getSubtotal() - getDiscountAmount()) + getTaxAmount() + (getSubtotal() > 150 ? 0 : 25); // Free over $150

  // Apply Coupon promo code
  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'AURA15' || promoCode.trim().toUpperCase() === 'ATELIER') {
      setAppliedDiscount(0.15); // 15% discount
    } else if (promoCode.trim().toUpperCase() === 'CYBER') {
      setAppliedDiscount(0.20); // 20% discount
    } else {
      alert("Atelier Code Not Found. Try AURA15");
    }
  };

  // Complete checkout purchase order
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = 'AUR-' + Math.floor(Math.random() * 900000 + 100000);
    setLastOrderId(orderId);
    setCheckoutStep('success');
    setCart([]); // Reset Cart bag after successful order placement
  };

  // Authenticate user login session
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setLoggedInUser(authForm.name || authForm.email.split('@')[0]);
    setActivePage('home');
    setAuthForm({ email: '', password: '', name: '' });
  };

  // Get matching filtered data products
  const getFilteredProducts = () => {
    let filtered = [...PRODUCTS];
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Perform Sorting matching
    if (sortBy === 'priceAsc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'popular') {
      filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return filtered;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark-mode bg-neutral-950 text-neutral-100' : 'bg-[#faf9f6] text-neutral-900'}`}>
      
      {/* 1. Header Navigation elements */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        wishlistCount={wishlist.length}
        setSelectedCategory={setSelectedCategory}
        onOpenStylist={() => setIsStylistOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="pt-24 min-h-[75vh]">
        <AnimatePresence mode="wait">
          
          {/* ==================== PAGE: HOME ==================== */}
          {activePage === 'home' && (
            <motion.div
              key="home-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-24 pb-20"
            >
              
              {/* Animated fashion model Hero Section with glass details */}
              <section id="banner-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] min-h-[480px] bg-neutral-900 text-white flex items-center p-8 sm:p-16">
                  {/* Backdrop beautiful model image */}
                  <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&auto=format&fit=crop&q=80"
                    alt="AURA Winter Haute Couture model"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-55"
                  />
                  {/* Gradient dark backing */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

                  <div className="relative max-w-xl space-y-6 z-10">
                    <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-amber-500 font-mono flex items-center gap-1.5 leading-none">
                      <Sparkles size={12} /> HAUTE STREETWEAR / SEASON 01
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-semibold leading-none tracking-tight">
                      Aesthetic Restraint.<br />Structured Grace.
                    </h1>
                    <p className="text-sm font-light text-neutral-300 max-w-md leading-relaxed">
                      Minimalist luxury apparel designed to wear as personal architecture. Engineered with Portugal loops organic fleece.
                    </p>
                    <div className="flex gap-4 pt-4">
                      <button
                        id="hero-shop-all"
                        onClick={() => { setSelectedCategory('all'); setActivePage('shop'); }}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs py-3.5 px-7 rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
                      >
                        Explore Atelier Drops
                        <ArrowRight size={14} />
                      </button>
                      <button
                        id="hero-ai-stylist"
                        onClick={() => setIsStylistOpen(true)}
                        className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs py-3.5 px-6 rounded-lg uppercase tracking-wider border border-white/20 backdrop-blur-sm transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Sparkles size={14} className="text-amber-500" />
                        AI Style Curation
                      </button>
                    </div>
                  </div>

                  {/* Ambient stats badge overlaid */}
                  <div className="absolute bottom-8 right-8 hidden lg:flex p-4 rounded-xl glassmorphism-dark text-xs font-mono space-x-6">
                    <div>
                      <span className="text-amber-500 block">DENSITY</span>
                      <span className="font-semibold text-white">480GSM HEAVY</span>
                    </div>
                    <div className="border-l border-white/10 pl-5">
                      <span className="text-amber-500 block">ORIGIN</span>
                      <span className="font-semibold text-white">PORTO, PORTUGAL</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Category Showcase Cards */}
              <section id="category-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">SELECTIVE SHAPES</span>
                  <h2 className="mt-2 text-2xl font-serif font-bold tracking-wider">Atelier Core Categories</h2>
                  <p className="text-xs font-light text-neutral-400 mt-1.5">Meticulously constructed seasonal categories to cover daily requirements.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Luxury Streetwear", catId: "streetwear" as ProductCategory, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=450&auto=format&fit=crop&q=80", subtitle: "Oversized, heavy loopback elements" },
                    { title: "Minimalist Coats", catId: "outerwear" as ProductCategory, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=450&auto=format&fit=crop&q=80", subtitle: "Waterproof dry-touch gabardines" },
                    { title: "Artisanal Accessories", catId: "accessories" as ProductCategory, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=450&auto=format&fit=crop&q=80", subtitle: "Vegetable-tanned calf leather items" }
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      id={`hero-cat-card-${card.catId}`}
                      onClick={() => { setSelectedCategory(card.catId); setActivePage('shop'); }}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-500/10 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={card.img}
                        alt={card.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                      <div className="absolute bottom-5 left-5 text-white">
                        <span className="text-[9px] uppercase font-semibold text-amber-500 font-mono block">{card.subtitle}</span>
                        <h3 className="text-lg font-serif tracking-wide mt-1 font-semibold flex items-center gap-1">
                          {card.title}
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Featured products grid */}
              <section id="trending-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8.5">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">TOP CURATED SELECTIONS</span>
                    <h2 className="mt-2 text-2xl font-serif font-bold tracking-wider">The Trending Catalog</h2>
                  </div>
                  <button
                    id="home-view-all-trending"
                    onClick={() => { setSelectedCategory('all'); setActivePage('shop'); }}
                    className="text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 hover:text-amber-600 transition-colors font-mono"
                  >
                    View Entire Drops
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {PRODUCTS.slice(0, 4).map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      onSelect={(p) => { setSelectedProduct(p); setActivePage('product-detail'); }}
                      onQuickView={setSelectedQuickViewProduct}
                      onAddToCart={handleAddToCart}
                      onToggleWishlist={handleToggleWishlist}
                      isWishlisted={wishlist.some(w => w.id === prod.id)}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              </section>

              {/* Limited offer banner ("CHALK MOCKNECK EXCLUSIVE") */}
              <section id="limited-drop-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl overflow-hidden relative glassmorphism-dark min-h-[340px] flex items-center p-8 sm:p-14 text-white">
                  <img
                    src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1000&auto=format&fit=crop&q=80"
                    alt="Premium Mockneck details"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-neutral-950/75" />
                  <div className="relative max-w-lg space-y-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-amber-500 font-mono">LIMITED SINGLE-BATCH PRODUCTION</span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-wide leading-none">The Boxy compact Mockneck Drop</h2>
                    <p className="text-xs font-light text-neutral-300 leading-relaxed max-w-sm">
                      Meticulously knitted with double-needle flats and tall shape-retaining ribs. Standard drop is almost depleted.
                    </p>
                    <div className="flex items-center space-x-6 pt-2 text-xs font-mono">
                      <div>
                        <span className="block text-amber-500 font-bold">FABRIC</span>
                        <span className="text-white">240GSM COMBED</span>
                      </div>
                      <div className="border-l border-white/20 pl-6">
                        <span className="block text-amber-500 font-bold">OFFER</span>
                        <span className="text-white">SAVE $20 THIS WEEK</span>
                      </div>
                    </div>
                    <button
                      id="buy-mockneck-hero-btn"
                      onClick={() => {
                        const targetMockneck = PRODUCTS.find(p => p.id === 'prod-6');
                        if (targetMockneck) {
                          setSelectedProduct(targetMockneck);
                          setActivePage('product-detail');
                        }
                      }}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs py-3.5 px-6 rounded-lg uppercase tracking-wider block pt-3 transition-colors active:scale-95 text-center sm:inline-block cursor-pointer"
                    >
                      Instant Purchase Mockneck
                    </button>
                  </div>
                </div>
              </section>

              {/* Customer reviews/testimonials */}
              <section id="testimonials-home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">EDITORIAL CRITICISM</span>
                  <h2 className="mt-2 text-2xl font-serif font-bold tracking-wider">Atelier Critiques</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((t) => (
                    <div
                      key={t.id}
                      className={`p-6 rounded-xl border flex flex-col justify-between ${
                        darkMode ? 'bg-neutral-900 border-white/5' : 'bg-white border-black/5 shadow-xs'
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex text-amber-500">
                          {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <p className="text-xs font-light italic leading-relaxed text-neutral-500 dark:text-neutral-300">
                          "{t.comment}"
                        </p>
                      </div>

                      <div className="flex items-center gap-3 pt-6 border-t border-neutral-500/10 mt-6">
                        <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <h4 className="text-xs font-bold leading-none">{t.name}</h4>
                          <span className="text-[10px] text-neutral-400 font-mono mt-1 block">{t.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Brand editorial story & contact links details */}
              <BrandStory darkMode={darkMode} />

            </motion.div>
          )}

          {/* ==================== PAGE: SHOP ==================== */}
          {activePage === 'shop' && (
            <motion.div
              key="shop-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10"
            >
              
              {/* Core Shop Banner */}
              <div className="text-center py-8 border-b border-neutral-500/10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-600 font-mono block">AURA COLLECTION drops</span>
                <h1 className="text-3xl font-serif font-bold tracking-wide mt-2">The Architectural Catalog</h1>
                <p className="text-xs font-light text-neutral-400 max-w-md mx-auto mt-2 leading-relaxed">
                  Browse Portugal loopbacks, dry gabardines, and Tuscan kid suede boot collections fitted for clean, boxy modular drapes.
                </p>
              </div>

              {/* Filtering + sorting Controls Row */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Category selectors */}
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1 w-full md:w-auto">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      id={`shop-filter-${cat.id}`}
                      onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                      className={`text-xs uppercase tracking-wider py-2 px-4 rounded-full transition-all flex-shrink-0 ${
                        selectedCategory === cat.id
                          ? 'bg-amber-600 text-white font-medium'
                          : 'bg-neutral-500/5 hover:bg-neutral-500/10 text-neutral-500'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Sorting options */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400">Sort By:</span>
                  <select
                    id="shop-sort-dropdown"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className={`text-xs uppercase tracking-wider border rounded-lg p-2 focus:outline-none bg-transparent ${
                      darkMode ? 'border-white/10 text-white' : 'border-black/10 text-neutral-900'
                    }`}
                  >
                    <option value="default" className="text-neutral-900">Default Drop Order</option>
                    <option value="priceAsc" className="text-neutral-900">Price: Low to High</option>
                    <option value="priceDesc" className="text-neutral-900">Price: High to Low</option>
                    <option value="rating" className="text-neutral-900">Ratings Review Scale</option>
                    <option value="popular" className="text-neutral-900">Highly Reviewed Popular</option>
                  </select>
                </div>

              </div>

              {/* Dynamic Grid Layout of products list */}
              {getFilteredProducts().length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {getFilteredProducts().map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      onSelect={(p) => { setSelectedProduct(p); setActivePage('product-detail'); }}
                      onQuickView={setSelectedQuickViewProduct}
                      onAddToCart={handleAddToCart}
                      onToggleWishlist={handleToggleWishlist}
                      isWishlisted={wishlist.some(w => w.id === prod.id)}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 border rounded-xl border-dashed border-neutral-500/10 space-y-3">
                  <AlertCircle className="mx-auto text-neutral-400" size={32} />
                  <h3 className="text-base font-medium">No Drops Found</h3>
                  <p className="text-xs text-neutral-400">Please choose another active category selector.</p>
                </div>
              )}

            </motion.div>
          )}

          {/* ==================== PAGE: SINGLE PRODUCT DETAIL ==================== */}
          {activePage === 'product-detail' && selectedProduct && (
            <motion.div
              key="product-detail-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16"
            >
              {/* Back to catalog button */}
              <button
                id="back-to-shop-btn"
                onClick={() => setActivePage('shop')}
                className="flex items-center gap-1.5 text-xs uppercase tracking-wider hover:text-amber-600 transition-colors font-mono"
              >
                <ArrowLeft size={14} /> Back to Catalog Drop
              </button>

              {/* Core Layout Detail grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                
                {/* Images column (multi views) */}
                <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-150 dark:bg-neutral-900 border border-neutral-500/10">
                    <img
                      src={selectedProduct.images[0]}
                      alt={selectedProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {/* Additional photos displays */}
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProduct.images.map((img, idx) => (
                      <div key={idx} className="aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
                        <img src={img} alt="Detail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Copy & config options Column */}
                <div className="space-y-6">
                  
                  {/* Category bread */}
                  <span className="text-xs uppercase tracking-widest text-amber-600 font-semibold font-mono">
                    AURA ATELIER drops / {selectedProduct.category}
                  </span>

                  {/* Title */}
                  <h1 className="text-3xl font-serif font-bold tracking-wide">{selectedProduct.name}</h1>

                  {/* Rating counts */}
                  <div className="flex items-center space-x-2">
                    <div className="flex text-amber-500">
                      {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="currentColor" />)}
                    </div>
                    <span className="text-xs text-neutral-450 font-mono font-light">
                      4.9 out of {selectedProduct.reviewsCount} critiques
                    </span>
                  </div>

                  {/* Price breakup */}
                  <div className="flex items-baseline space-x-2 border-b border-neutral-500/10 pb-5">
                    <span className="text-2xl font-bold font-mono text-neutral-900 dark:text-white">${selectedProduct.price}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-sm line-through text-neutral-400 font-mono">${selectedProduct.originalPrice}</span>
                    )}
                  </div>

                  {/* Product Copy Description */}
                  <div className="space-y-2 text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-400">
                    <p>{selectedProduct.description}</p>
                  </div>

                  {/* Technical Specifications checklist list */}
                  <div className="space-y-2 bg-neutral-500/5 p-4 rounded-xl border border-neutral-500/10 text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="text-[10px] uppercase font-bold tracking-wider mb-1 block">Atelier Build Specifications:</span>
                    <ul className="space-y-1 list-inside list-disc">
                      {selectedProduct.details.map((det, idx) => <li key={idx} className="font-light">{det}</li>)}
                    </ul>
                  </div>

                  {/* Product selectors */}
                  <div className="space-y-4 pt-4 border-t border-neutral-500/10">
                    
                    {/* Size Select */}
                    <div>
                      <span className="text-xs uppercase font-medium tracking-wider text-neutral-400 mb-2 block">Choose Drape Size</span>
                      <div className="flex gap-2">
                        {selectedProduct.sizes.map((s) => (
                          <button
                            key={s}
                            id={`details-size-${s}`}
                            className="w-12 h-12 border rounded-lg text-xs font-semibold flex items-center justify-center transition-all bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color selection */}
                    <div>
                      <span className="text-xs uppercase font-medium tracking-wider text-neutral-400 mb-2 block">Material Colorway</span>
                      <div className="flex gap-3">
                        {selectedProduct.colors.map((c, idx) => (
                          <button
                            key={idx}
                            id={`details-color-${idx}`}
                            style={{ backgroundColor: c.hex }}
                            className="w-8 h-8 rounded-full border border-white dark:border-neutral-900 shadow-sm hover:scale-105 active:scale-95 duration-200 relative"
                            title={c.name}
                          >
                            {idx === 0 && <Check size={12} className="absolute inset-0 m-auto text-white" />}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Final Action purchase Buttons */}
                  <div className="flex gap-3 pt-6">
                    <button
                      id="details-add-to-cart-btn"
                      onClick={() => handleAddToCart(selectedProduct, selectedProduct.sizes[0], selectedProduct.colors[0], 1)}
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer font-mono"
                    >
                      <ShoppingBag size={15} />
                      Add to Atelier Bag
                    </button>
                    <button
                      id="details-wishlist-btn"
                      onClick={() => handleToggleWishlist(selectedProduct)}
                      className={`p-4 border rounded-xl flex items-center justify-center transition-colors shadow-xs ${
                        wishlist.some(w => w.id === selectedProduct.id)
                          ? 'bg-amber-600 border-amber-655 text-white'
                          : 'bg-transparent text-neutral-400'
                      }`}
                    >
                      <Heart size={18} fill={wishlist.some(w => w.id === selectedProduct.id) ? "currentColor" : "none"} />
                    </button>
                  </div>

                </div>

              </div>

              {/* RELATED PRODUCTS SLIDER */}
              <div className="pt-16 border-t border-neutral-500/10">
                <div className="mb-8.5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">Curated Harmonious Drops</span>
                  <h3 className="text-xl font-serif font-bold tracking-wide mt-1">Complete The Look</h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {PRODUCTS.filter(p => p.id !== selectedProduct.id).slice(0, 4).map(relProd => (
                    <ProductCard
                      key={relProd.id}
                      product={relProd}
                      onSelect={(p) => { setSelectedProduct(p); }}
                      onQuickView={setSelectedQuickViewProduct}
                      onAddToCart={handleAddToCart}
                      onToggleWishlist={handleToggleWishlist}
                      isWishlisted={wishlist.some(w => w.id === relProd.id)}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {/* ==================== PAGE: CART ==================== */}
          {activePage === 'cart' && (
            <motion.div
              key="cart-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10"
            >
              <div className="border-b border-neutral-500/10 pb-5">
                <h1 className="text-2xl font-serif font-bold tracking-wide">Your Shopping Bag</h1>
                <p className="text-xs text-neutral-400 font-light font-mono">Traceable premium goods selected</p>
              </div>

              {cart.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Cart Item logs list (col 8) */}
                  <div className="lg:col-span-8 space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        id={`cart-item-${item.id}`}
                        className={`p-4 rounded-xl border flex gap-4 justify-between items-center ${
                          darkMode ? 'bg-neutral-900 border-white/5' : 'bg-white border-black/5 shadow-xs'
                        }`}
                      >
                        {/* Photo detail */}
                        <div className="flex items-center gap-4 flex-1">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-20 rounded-md object-cover object-center bg-neutral-100"
                          />
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider">{item.product.name}</h3>
                            <div className="flex gap-2 text-[10px] text-neutral-400 font-mono mt-1">
                              <span>Size: {item.selectedSize}</span>
                              <span className="border-l border-neutral-500/20 pl-2">Fabric: {item.selectedColor.name}</span>
                            </div>
                            <span className="text-xs font-mono font-medium block mt-2 text-neutral-900 dark:text-white">
                              ${item.product.price}
                            </span>
                          </div>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            id={`qty-minus-${item.id}`}
                            onClick={() => handleUpdateCartQuantity(item.id, -1)}
                            className="p-1.5 rounded-md hover:bg-neutral-500/10 border"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-xs font-mono font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            id={`qty-plus-${item.id}`}
                            onClick={() => handleUpdateCartQuantity(item.id, 1)}
                            className="p-1.5 rounded-md hover:bg-neutral-500/10 border"
                          >
                            <Plus size={10} />
                          </button>
                        </div>

                        {/* Cost & Delete actions */}
                        <div className="flex items-center space-x-6 text-right">
                          <span className="text-xs font-mono font-bold w-16">
                            ${item.product.price * item.quantity}
                          </span>
                          <button
                            id={`cart-remove-${item.id}`}
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="p-2 text-neutral-400 hover:text-red-500 rounded-md transition-colors"
                            title="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>

                  {/* Pricing break downs column (col 4) */}
                  <div className="lg:col-span-4 space-y-6">
                    
                    {/* Coupon panel */}
                    <form onSubmit={handleApplyPromo} className={`p-4 rounded-xl border flex gap-2 ${
                      darkMode ? 'bg-neutral-900 border-white/5' : 'bg-white border-black/5 shadow-xs'
                    }`}>
                      <input
                        id="promo-code-input"
                        type="text"
                        placeholder="Coupon e.g. AURA15"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 rounded-md border text-xs px-3 py-2 bg-transparent text-white"
                      />
                      <button type="submit" className="bg-neutral-900 border text-white dark:bg-white dark:text-neutral-900 px-3.5 py-2 text-xs font-bold rounded-md uppercase tracking-wider">
                        Apply
                      </button>
                    </form>

                    {/* Order summary calculations */}
                    <div className={`p-6 rounded-xl border space-y-5 ${
                      darkMode ? 'bg-neutral-900 border-white/5' : 'bg-white border-black/5 shadow-xs'
                    }`}>
                      <h3 className="text-xs uppercase font-bold tracking-wider mb-2">Checkout summary</h3>
                      
                      <div className="space-y-3.5 text-xs font-light text-neutral-500 dark:text-neutral-400">
                        <div className="flex justify-between">
                          <span>Subtotal Items:</span>
                          <span className="font-mono font-medium">${getSubtotal()}</span>
                        </div>
                        {appliedDiscount > 0 && (
                          <div className="flex justify-between text-emerald-600">
                            <span>Promo Code Discount:</span>
                            <span className="font-mono font-medium">-${getDiscountAmount()} (-{appliedDiscount * 100}%)</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Surcharge, VAT Taxes (12%):</span>
                          <span className="font-mono font-medium">${getTaxAmount().toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Couture Courier Shipping:</span>
                          <span className="font-mono font-medium">
                            {getSubtotal() > 150 ? <span className="text-emerald-600 uppercase">FREE</span> : "$25"}
                          </span>
                        </div>
                        {getSubtotal() <= 150 && (
                          <span className="text-[10px] text-amber-500 block leading-none font-mono">
                            Add ${(150 - getSubtotal())} more for FREE shipping.
                          </span>
                        )}
                      </div>

                      <div className="border-t border-neutral-500/10 pt-4 flex justify-between text-sm">
                        <span className="font-semibold">Estimated Total Cost:</span>
                        <span className="font-mono font-bold">${getTotal().toFixed(1)}</span>
                      </div>

                      {/* Proceed button */}
                      <button
                        id="proceed-to-checkout"
                        onClick={() => { setCheckoutStep('details'); setActivePage('checkout'); }}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer font-mono"
                      >
                        Proceed To Checkout
                        <ArrowRight size={14} />
                      </button>

                    </div>

                  </div>

                </div>
              ) : (
                <div className="text-center py-24 border rounded-2xl border-dashed border-neutral-500/10 space-y-4 max-w-lg mx-auto">
                  <ShoppingBag className="mx-auto text-neutral-400 animate-bounce" size={40} />
                  <div>
                    <h3 className="text-base font-semibold">Your bag is empty</h3>
                    <p className="text-xs text-neutral-400 font-light mt-1">Explore our drops and find pieces tailored for you.</p>
                  </div>
                  <button
                    id="cart-shop-now"
                    onClick={() => setActivePage('shop')}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-3 px-6 rounded-lg uppercase tracking-wider font-mono cursor-pointer"
                  >
                    Go Shop Drops
                  </button>
                </div>
              )}

            </motion.div>
          )}

          {/* ==================== PAGE: WISHLIST ==================== */}
          {activePage === 'wishlist' && (
            <motion.div
              key="wishlist-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10"
            >
              <div className="border-b border-neutral-500/10 pb-5">
                <h1 className="text-2xl font-serif font-bold tracking-wide">Your Curated Wishlist</h1>
                <p className="text-xs text-neutral-400 font-light font-mono">Pieces reserved for upcoming drops</p>
              </div>

              {wishlist.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {wishlist.map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      onSelect={(p) => { setSelectedProduct(p); setActivePage('product-detail'); }}
                      onQuickView={setSelectedQuickViewProduct}
                      onAddToCart={handleAddToCart}
                      onToggleWishlist={handleToggleWishlist}
                      isWishlisted={true}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 border rounded-2xl border-dashed border-neutral-500/10 space-y-4 max-w-lg mx-auto">
                  <Heart className="mx-auto text-neutral-400" size={36} />
                  <div>
                    <h3 className="text-base font-semibold">Wishlist is empty</h3>
                    <p className="text-xs text-neutral-400 font-light mt-1">Reserve elements by tapping wishlist hearts throughout.</p>
                  </div>
                  <button
                    id="wishlist-shop-now"
                    onClick={() => setActivePage('shop')}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-3 px-6 rounded-lg uppercase tracking-wider font-mono cursor-pointer"
                  >
                    Review Catalog
                  </button>
                </div>
              )}

            </motion.div>
          )}

          {/* ==================== PAGE: ABOUT / BRAND ==================== */}
          {activePage === 'about' && (
            <motion.div
              key="about-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BrandStory darkMode={darkMode} />
            </motion.div>
          )}

          {/* ==================== PAGE: CONTACT ==================== */}
          {activePage === 'contact' && (
            <motion.div
              key="contact-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BrandStory darkMode={darkMode} />
            </motion.div>
          )}

          {/* ==================== PAGE: AUTH LOGIN SIGNUP ==================== */}
          {activePage === 'login' && (
            <motion.div
              key="login-tab"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto px-4 pb-20 pt-10"
            >
              
              <div className={`p-8 rounded-2xl border text-neutral-900 ${
                darkMode ? 'bg-neutral-900 border-white/5 text-white shadow-2x-dark' : 'bg-white border-black/5 shadow-xl'
              }`}>
                {/* Switchers */}
                <div className="flex justify-between border-b border-neutral-500/10 pb-4 mb-6">
                  <button
                    id="auth-login-mode"
                    onClick={() => setAuthMode('login')}
                    className={`font-serif text-lg tracking-wider uppercase font-bold focus:outline-none ${
                      authMode === 'login' ? 'text-amber-600 underline decoration-2 underline-offset-8' : 'opacity-40'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    id="auth-signup-mode"
                    onClick={() => setAuthMode('signup')}
                    className={`font-serif text-lg tracking-wider uppercase font-bold focus:outline-none ${
                      authMode === 'signup' ? 'text-amber-600 underline decoration-2 underline-offset-8' : 'opacity-40'
                    }`}
                  >
                    Join Drop
                  </button>
                </div>

                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  {authMode === 'signup' && (
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-1">Full Name</label>
                      <input
                        id="auth-name-input"
                        type="text"
                        required
                        value={authForm.name}
                        onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-lg border bg-transparent text-white focus:outline-none focus:border-amber-500 placeholder:text-neutral-500"
                        placeholder="Aria Sterling"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-1">Email address</label>
                    <input
                      id="auth-email-input"
                      type="email"
                      required
                      value={authForm.email}
                      onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                      className="w-full text-xs p-3.5 rounded-lg border bg-transparent text-white focus:outline-none focus:border-amber-500 placeholder:text-neutral-500"
                      placeholder="aria@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-1">Password Credentials</label>
                    <input
                      id="auth-password-input"
                      type="password"
                      required
                      value={authForm.password}
                      onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                      className="w-full text-xs p-3.5 rounded-lg border bg-transparent text-white focus:outline-none focus:border-amber-500 placeholder:text-neutral-500"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    id="auth-submit-btn"
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest font-mono cursor-pointer pt-3.5 shadow-md active:scale-95"
                  >
                    {authMode === 'login' ? 'Proceed Login Account' : 'Register Priority Account'}
                  </button>
                </form>

                {/* Simulated session details */}
                {isLoggedIn && (
                  <div className="mt-6 pt-5 border-t border-neutral-500/10 text-center space-y-2">
                    <p className="text-xs text-emerald-600 font-medium">Currently active session: **{loggedInUser}**</p>
                    <button
                      id="auth-logout-btn"
                      onClick={() => { setIsLoggedIn(false); setLoggedInUser(null); }}
                      className="text-[10px] uppercase tracking-wider text-red-500 hover:underline"
                    >
                      Logout Session
                    </button>
                  </div>
                )}

              </div>

            </motion.div>
          )}

          {/* ==================== PAGE: CHECKOUT ==================== */}
          {activePage === 'checkout' && (
            <motion.div
              key="checkout-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10"
            >
              <div className="border-b border-neutral-500/10 pb-5">
                <h1 className="text-2xl font-serif font-bold tracking-wide">Secure Checkout Desk</h1>
                <p className="text-xs text-neutral-400 font-light font-mono">Secure double-encrypted payment</p>
              </div>

              {checkoutStep === 'details' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  {/* Delivery address & payments input cards */}
                  <form onSubmit={handlePlaceOrder} className="space-y-4">
                    <h3 className="text-xs uppercase font-bold tracking-wider">Courier Dispatch Details</h3>
                    
                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">Receipt Name</label>
                      <input
                        id="checkout-name"
                        type="text"
                        required
                        value={checkoutForm.name}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-lg border bg-transparent text-white placeholder:text-neutral-500"
                        placeholder="Aria Sterling"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">Contact Email</label>
                      <input
                        id="checkout-email"
                        type="email"
                        required
                        value={checkoutForm.email}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-lg border bg-transparent text-white placeholder:text-neutral-500"
                        placeholder="aria@example.com"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">Courier Shipping Address</label>
                      <input
                        id="checkout-address"
                        type="text"
                        required
                        value={checkoutForm.address}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                        className="w-full text-xs p-3.5 rounded-lg border bg-transparent text-white placeholder:text-neutral-500"
                        placeholder="100 Rue du Faubourg Saint-Honoré, Paris"
                      />
                    </div>

                    <div className="border-t border-neutral-500/10 pt-4 space-y-4">
                      <h3 className="text-xs uppercase font-bold tracking-wider flex items-center gap-1">
                        <ShieldCheck size={14} className="text-amber-500" /> Card payment Details
                      </h3>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">Card number digits</label>
                        <input
                          id="checkout-card"
                          type="text"
                          required
                          value={checkoutForm.card}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, card: e.target.value })}
                          className="w-full text-xs p-3.5 rounded-lg border bg-transparent text-white placeholder:text-neutral-500"
                          placeholder="4242 4242 4242 4242"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">Expiry</label>
                          <input
                            id="checkout-expiry"
                            type="text"
                            required
                            value={checkoutForm.expiry}
                            onChange={(e) => setCheckoutForm({ ...checkoutForm, expiry: e.target.value })}
                            className="w-full text-xs p-3.5 rounded-lg border bg-transparent text-white placeholder:text-neutral-500"
                            placeholder="12/28"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">CVV</label>
                          <input
                            id="checkout-cvv"
                            type="text"
                            required
                            value={checkoutForm.cvv}
                            onChange={(e) => setCheckoutForm({ ...checkoutForm, cvv: e.target.value })}
                            className="w-full text-xs p-3.5 rounded-lg border bg-transparent text-white placeholder:text-neutral-500"
                            placeholder="321"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      id="checkout-submit-btn"
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest font-mono shadow-md mt-4 active:scale-95"
                    >
                      Process Checkout Order Sum
                    </button>
                  </form>

                  {/* Summary recap sidebar detail page */}
                  <div className={`p-6 rounded-xl border space-y-4 ${
                    darkMode ? 'bg-neutral-900 border-white/5' : 'bg-white border-black/5 shadow-sm'
                  }`}>
                    <h3 className="text-xs uppercase font-bold tracking-wider pb-2 border-b border-neutral-500/10">Order Elements breakdown</h3>
                    
                    <div className="space-y-3.5 text-xs font-light text-neutral-500 dark:text-neutral-400">
                      <div className="flex justify-between">
                        <span>Items Total charges:</span>
                        <span className="font-mono font-medium">${getSubtotal()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>VAT handling surcharge:</span>
                        <span className="font-mono font-medium">${getTaxAmount().toFixed(1)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Registered Courier Dispatch:</span>
                        <span className="font-mono font-medium">FREE</span>
                      </div>
                    </div>

                    <div className="border-t border-neutral-500/10 pt-4 flex justify-between text-base">
                      <span className="font-semibold">Billed Total:</span>
                      <span className="font-mono font-bold text-amber-600">${getTotal().toFixed(1)}</span>
                    </div>

                    <div className="p-3 bg-neutral-500/5 rounded-lg border border-neutral-500/10 text-[10px] text-neutral-400 font-mono flex items-start gap-2">
                      <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                      <span>By placing the order, you authorize Aura Haute imprint to dispatch standard traceable Portuguese mill boxes on carbon neutral delivery.</span>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="text-center py-20 border rounded-2xl border-emerald-600/10 bg-emerald-600/5 space-y-4 max-w-lg mx-auto">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto text-white shadow-md">
                    <Check size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold">Haute Order Dispatch Completed!</h3>
                    <p className="text-xs text-neutral-400 font-light mt-1">Receipt confirmation, dispatch codes, and live tracking are dispatched via email.</p>
                  </div>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg max-w-xs mx-auto text-xs font-mono">
                    Order ID Receipt: <span className="text-amber-500">{lastOrderId}</span>
                  </div>
                  <button
                    id="success-back-shop-btn"
                    onClick={() => setActivePage('shop')}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-3.5 px-6 rounded-lg uppercase tracking-wider font-mono cursor-pointer"
                  >
                    Return to Drops
                  </button>
                </div>
              )}

            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 2. Quick View Overlay Modal */}
      <QuickViewModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        darkMode={darkMode}
      />

      {/* 3. AI Stylist Drawer panel */}
      {isStylistOpen && (
        <AiStylistSection
          onClose={() => setIsStylistOpen(false)}
          onAddToCart={handleAddToCart}
          darkMode={darkMode}
        />
      )}

      {/* 4. Luxury Standard Bottom Footer */}
      <footer id="atelier-footer" className="mt-28 py-16 border-t border-neutral-500/10 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          
          <div className="space-y-4">
            <span className="text-xl font-serif font-bold tracking-widest block text-amber-500">A U R A</span>
            <p className="text-xs font-light text-neutral-400 leading-relaxed">
              Haute outerwear and standard streetwear modules blending high luxury Japanese structure with Portugal loopback fabrics.
            </p>
            <span className="text-[10px] text-neutral-500 font-mono block">© 2026 AURA ATELIER COUTURE. Paris. Porto.</span>
          </div>

          <div>
            <h4 className="text-xs uppercase font-semibold font-mono tracking-widest text-amber-500 mb-4">The Collections</h4>
            <div className="flex flex-col space-y-2 text-xs font-light text-neutral-400">
              <button id="foot-cat-street" onClick={() => { setSelectedCategory('streetwear'); setActivePage('shop'); }} className="text-left hover:text-white transition-colors">Streetwear drop</button>
              <button id="foot-cat-outer" onClick={() => { setSelectedCategory('outerwear'); setActivePage('shop'); }} className="text-left hover:text-white transition-colors">Minimal coats</button>
              <button id="foot-cat-clothing" onClick={() => { setSelectedCategory('clothing'); setActivePage('shop'); }} className="text-left hover:text-white transition-colors">Premium Knits</button>
              <button id="foot-cat-basics" onClick={() => { setSelectedCategory('basics'); setActivePage('shop'); }} className="text-left hover:text-white transition-colors">Mockneck Foundations</button>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase font-semibold font-mono tracking-widest text-amber-500 mb-4">Concierge help</h4>
            <div className="flex flex-col space-y-2 text-xs font-light text-neutral-400">
              <button id="foot-nav-about" onClick={() => setActivePage('about')} className="text-left hover:text-white transition-colors">Ethos & workshops</button>
              <button id="foot-nav-contact" onClick={() => setActivePage('contact')} className="text-left hover:text-white transition-colors">Flagships & Contact</button>
              <span className="text-left cursor-text">Courier Delivery & Returns info</span>
              <span className="text-left cursor-text">Private drop codes requests</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase font-semibold font-mono tracking-widest text-amber-500">priority access</h4>
            <p className="text-xs font-light text-neutral-400 leading-normal">Our list drops closed batch orders first. Subscribe to remain informed.</p>
            <button
              id="footer-stylist-trigger"
              onClick={() => setIsStylistOpen(true)}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-mono font-bold py-3 px-4 rounded-lg text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95"
            >
              <Sparkles size={13} />
              Open AI Stylist
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}
