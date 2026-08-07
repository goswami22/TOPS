import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FoodCard from './components/FoodCard';
import FoodDetailModal from './components/FoodDetailModal';
import AiConciergeModal from './components/AiConciergeModal';
import CartDrawer from './components/CartDrawer';
import CheckoutView from './components/CheckoutView';
import OrderTrackingView from './components/OrderTrackingView';
import ReservationView from './components/ReservationView';
import MenuView from './components/MenuView';
import CategoriesView from './components/CategoriesView';
import OffersView from './components/OffersView';
import LocationsView from './components/LocationsView';
import AboutContactView from './components/AboutContactView';
import UserDashboardView from './components/UserDashboardView';
import AdminDashboardView from './components/AdminDashboardView';
import RoleSwitcherBar from './components/RoleSwitcherBar';
import AuthRoleModal from './components/AuthRoleModal';
import Footer from './components/Footer';

import { 
  FOOD_ITEMS, 
  CATEGORIES, 
  COMBO_MEALS, 
  OFFERS, 
  RESTAURANT_LOCATIONS, 
  REVIEWS, 
  INITIAL_USER,
  MOCK_STAFF,
  MOCK_INVENTORY,
  MOCK_CUSTOMERS,
  MOCK_ADMIN_ORDERS,
  MOCK_RESERVATIONS,
  MOCK_ANALYTICS,
  MOCK_CMS,
  MOCK_SETTINGS
} from './data/mockData';

import { Sparkles, Utensils, Star, Flame, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [currentRole, setCurrentRole] = useState('customer');
  const [currentUser, setCurrentUser] = useState(INITIAL_USER);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Dynamic Datasets State for Admin & User
  const [foodItems, setFoodItems] = useState(FOOD_ITEMS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [offers, setOffers] = useState(OFFERS);
  const [orders, setOrders] = useState(MOCK_ADMIN_ORDERS);
  const [reservations, setReservations] = useState(MOCK_RESERVATIONS);
  const [staffList, setStaffList] = useState(MOCK_STAFF);
  const [inventory, setInventory] = useState(MOCK_INVENTORY);
  const [customers, setCustomers] = useState(MOCK_CUSTOMERS);
  const [reviews, setReviews] = useState(REVIEWS);
  const [cmsData, setCmsData] = useState(MOCK_CMS);
  const [settingsData, setSettingsData] = useState(MOCK_SETTINGS);

  const [cartItems, setCartItems] = useState([
    {
      id: 'cart-init-1',
      foodItem: FOOD_ITEMS[0],
      quantity: 1,
      selectedAddOns: [FOOD_ITEMS[0].addOns[0]],
      itemTotal: FOOD_ITEMS[0].price + FOOD_ITEMS[0].addOns[0].price
    }
  ]);
  const [wishlist, setWishlist] = useState([FOOD_ITEMS[1]]);
  
  // Modals & Drawers
  const [activeFoodDetail, setActiveFoodDetail] = useState(null);
  const [aiConciergeOpen, setAiConciergeOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Orders State
  const [checkoutTotals, setCheckoutTotals] = useState(null);
  const [activeOrder, setActiveOrder] = useState(null);
  const [pastOrders, setPastOrders] = useState([
    {
      id: 'SVR-829102',
      items: [
        { id: 'p1', foodItem: FOOD_ITEMS[1], quantity: 1, selectedAddOns: [], itemTotal: 32 }
      ],
      subtotal: 32,
      discountAmount: 0,
      deliveryFee: 5,
      tax: 2.56,
      tipAmount: 5,
      totalAmount: 44.56,
      status: 'Delivered',
      createdAt: '2026-07-28'
    }
  ]);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [appliedOffer, setAppliedOffer] = useState(null);

  // Cart Handlers
  const handleAddToCart = (payload) => {
    // Check if payload is direct cart object or item
    const newItem = payload.foodItem ? payload : {
      id: `${payload.id}-${Date.now()}`,
      foodItem: payload,
      quantity: 1,
      selectedAddOns: [],
      itemTotal: payload.price
    };

    setCartItems(prev => [...prev, newItem]);
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (cartId, quantity) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === cartId) {
        const unit = item.itemTotal / item.quantity;
        return { ...item, quantity, itemTotal: unit * quantity };
      }
      return item;
    }));
  };

  const handleRemoveItem = (cartId) => {
    setCartItems(prev => prev.filter(i => i.id !== cartId));
  };

  // Wishlist Toggle
  const handleToggleWishlist = (food) => {
    if (wishlist.some(w => w.id === food.id)) {
      setWishlist(wishlist.filter(w => w.id !== food.id));
    } else {
      setWishlist([...wishlist, food]);
    }
  };

  // Coupons
  const handleApplyCoupon = (code) => {
    const matched = OFFERS.find(o => o.code === code);
    if (matched) {
      setAppliedOffer(matched);
      return { success: true };
    }
    return { success: false, message: 'Invalid promo code' };
  };

  // Checkout Success
  const handlePlaceOrderSuccess = (newOrder) => {
    setActiveOrder(newOrder);
    setPastOrders(prev => [newOrder, ...prev]);
    setCartItems([]);
    setAppliedOffer(null);
    setCurrentView('order-tracking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reorder
  const handleReorder = (order) => {
    setCartItems(order.items);
    setCartDrawerOpen(true);
  };

  // AI Recommender direct match
  const handleSelectRecommendedFood = (dishName) => {
    const match = FOOD_ITEMS.find(f => f.name.toLowerCase().includes(dishName.toLowerCase())) || FOOD_ITEMS[0];
    setActiveFoodDetail(match);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.itemTotal, 0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between selection:bg-amber-400 selection:text-black">
      
      {/* Sandbox Role Switcher Sticky Bar */}
      <RoleSwitcherBar
        currentRole={currentRole}
        onChangeRole={(newRole) => {
          setCurrentRole(newRole);
          if (newRole === 'admin' || newRole === 'superadmin' || newRole === 'manager' || newRole === 'staff') {
            setCurrentView('admin');
          } else {
            setCurrentView('dashboard');
          }
        }}
        onOpenAuthModal={() => setAuthModalOpen(true)}
        currentUser={currentUser}
      />

      {/* Top Sticky Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={cartCount}
        cartTotal={cartSubtotal}
        wishlistCount={wishlist.length}
        onOpenAiConcierge={() => setAiConciergeOpen(true)}
        onOpenCart={() => setCartDrawerOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main View Router */}
      <main className="flex-1">
        
        {currentView === 'home' && (
          <div className="space-y-16">
            
            {/* Hero Section */}
            <HeroSection
              onExploreMenu={() => { setCurrentView('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              onBookTable={() => { setCurrentView('reservation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              onOpenAiConcierge={() => setAiConciergeOpen(true)}
              onQuickViewFood={(food) => setActiveFoodDetail(food)}
              foodItems={FOOD_ITEMS}
            />

            {/* Popular Categories Showcase */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                    Curated Selections
                  </span>
                  <h2 className="font-serif text-3xl font-medium text-white">
                    Popular Categories
                  </h2>
                </div>
                <button
                  onClick={() => setCurrentView('categories')}
                  className="text-xs text-amber-300 font-bold uppercase tracking-wider hover:text-white flex items-center gap-1"
                >
                  <span>All Categories</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setCurrentView('menu');
                    }}
                    className="p-3 rounded-2xl glass-card border border-white/10 hover:border-amber-400/50 flex flex-col items-center text-center space-y-2 group transition-all"
                  >
                    <img src={cat.image} alt={cat.name} className="w-12 h-12 rounded-full object-cover border border-amber-400/30 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-serif font-medium text-white group-hover:text-amber-300 line-clamp-1">{cat.name}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Best Selling Foods Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                    Michelin Standard
                  </span>
                  <h2 className="font-serif text-3xl font-medium text-white">
                    Chef's Bestseller Creations
                  </h2>
                </div>
                <button
                  onClick={() => setCurrentView('menu')}
                  className="text-xs text-amber-300 font-bold uppercase tracking-wider hover:text-white flex items-center gap-1"
                >
                  <span>Full Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {FOOD_ITEMS.slice(0, 4).map((item) => (
                  <FoodCard
                    key={item.id}
                    item={item}
                    onQuickView={(food) => setActiveFoodDetail(food)}
                    onAddToCart={handleAddToCart}
                    isWishlisted={wishlist.some(w => w.id === item.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onOpenAiPairing={(food) => setActiveFoodDetail(food)}
                  />
                ))}
              </div>
            </section>

            {/* Limited Time Banner Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card p-8 sm:p-12 rounded-3xl border border-amber-500/30 relative overflow-hidden bg-gradient-to-r from-amber-950/60 via-[#0E0E0E] to-[#0E0E0E] flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <span className="px-3 py-1 bg-amber-400 text-black text-xs font-bold uppercase tracking-wider rounded-md">
                    Limited Time Offer • 30% OFF
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white leading-tight">
                    The Royal Tasting Feast
                  </h2>
                  <p className="text-neutral-300 text-sm font-light">
                    Use promo code <span className="text-amber-300 font-mono font-bold">SAVORVIP30</span> at checkout to claim 30% off your first online food order.
                  </p>
                  <button
                    onClick={() => {
                      handleApplyCoupon('SAVORVIP30');
                      setCurrentView('menu');
                    }}
                    className="px-6 py-3 bg-amber-400 text-black font-bold uppercase text-xs tracking-wider rounded-xl hover:bg-amber-300 transition-colors"
                  >
                    Claim 30% Offer
                  </button>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
                  alt="Royal Feast"
                  className="w-full md:w-80 h-60 object-cover rounded-2xl border border-white/10 shadow-2xl shrink-0"
                />
              </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                  Guest Testimonials
                </span>
                <h2 className="font-serif text-3xl font-medium text-white">
                  Verified Food Critic Reviews
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {REVIEWS.map((rev) => (
                  <div key={rev.id} className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                    <div className="flex items-center gap-3">
                      <img src={rev.customerPhoto} alt={rev.customerName} className="w-10 h-10 rounded-full object-cover border border-amber-400" />
                      <div>
                        <h4 className="font-serif text-sm font-medium text-white">{rev.customerName}</h4>
                        <span className="text-[10px] text-amber-300 font-mono">Verified Diner • {rev.dishName}</span>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-300 italic font-serif leading-relaxed">
                      "{rev.comment}"
                    </p>
                    <div className="flex text-amber-400 text-xs">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {currentView === 'menu' && (
          <MenuView
            foodItems={FOOD_ITEMS}
            categories={CATEGORIES}
            combos={COMBO_MEALS}
            onQuickViewFood={(food) => setActiveFoodDetail(food)}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onOpenAiPairing={(food) => setActiveFoodDetail(food)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {currentView === 'categories' && (
          <CategoriesView
            categories={CATEGORIES}
            onSelectCategory={(catId) => {
              setSelectedCategory(catId);
              setCurrentView('menu');
            }}
          />
        )}

        {currentView === 'offers' && (
          <OffersView
            offers={OFFERS}
            combos={COMBO_MEALS}
            onAddToCart={handleAddToCart}
            onApplyCouponCode={(code) => handleApplyCoupon(code)}
          />
        )}

        {currentView === 'locations' && (
          <LocationsView
            locations={RESTAURANT_LOCATIONS}
            onBookTableAtLocation={(locName) => {
              setCurrentView('reservation');
            }}
          />
        )}

        {currentView === 'reservation' && (
          <ReservationView
            locations={RESTAURANT_LOCATIONS}
            onBookingSuccess={() => {}}
          />
        )}

        {currentView === 'about' && <AboutContactView />}

        {currentView === 'checkout' && (
          <CheckoutView
            cartItems={cartItems}
            totals={checkoutTotals}
            user={INITIAL_USER}
            onPlaceOrderSuccess={handlePlaceOrderSuccess}
            onBackToMenu={() => setCurrentView('menu')}
          />
        )}

        {currentView === 'order-tracking' && (
          <OrderTrackingView
            order={activeOrder}
            onReorder={handleReorder}
            onBackToMenu={() => setCurrentView('menu')}
          />
        )}

        {currentView === 'wishlist' && (
          <MenuView
            foodItems={wishlist}
            categories={CATEGORIES}
            combos={COMBO_MEALS}
            onQuickViewFood={(food) => setActiveFoodDetail(food)}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onOpenAiPairing={(food) => setActiveFoodDetail(food)}
            searchQuery=""
            setSearchQuery={() => {}}
            selectedCategory="all"
            setSelectedCategory={() => {}}
          />
        )}

        {currentView === 'dashboard' && (
          <UserDashboardView
            user={currentUser}
            setUser={setCurrentUser}
            pastOrders={pastOrders}
            onReorder={handleReorder}
            onSelectFoodItem={(food) => setActiveFoodDetail(food)}
            wishlist={wishlist}
            setWishlist={setWishlist}
            onTrackOrder={() => setCurrentView('order-tracking')}
          />
        )}

        {currentView === 'admin' && (
          <AdminDashboardView
            foodItems={foodItems}
            setFoodItems={setFoodItems}
            categories={categories}
            setCategories={setCategories}
            orders={orders}
            setOrders={setOrders}
            reservations={reservations}
            setReservations={setReservations}
            staffList={staffList}
            setStaffList={setStaffList}
            inventory={inventory}
            setInventory={setInventory}
            customers={customers}
            setCustomers={setCustomers}
            reviews={reviews}
            setReviews={setReviews}
            offers={offers}
            setOffers={setOffers}
            analyticsData={MOCK_ANALYTICS}
            cmsData={cmsData}
            setCmsData={setCmsData}
            settingsData={settingsData}
            setSettingsData={setSettingsData}
            locations={RESTAURANT_LOCATIONS}
          />
        )}

      </main>

      <AuthRoleModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        currentRole={currentRole}
        onLoginSuccess={(authUserData) => {
          setCurrentUser(prev => ({ ...prev, ...authUserData }));
          setCurrentRole(authUserData.role);
          if (authUserData.role === 'admin' || authUserData.role === 'superadmin' || authUserData.role === 'manager' || authUserData.role === 'staff') {
            setCurrentView('admin');
          } else {
            setCurrentView('dashboard');
          }
        }}
      />

      {/* Floating Modal & Drawers */}
      <FoodDetailModal
        item={activeFoodDetail}
        onClose={() => setActiveFoodDetail(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={(cartPayload) => {
          setCartItems([cartPayload]);
          setActiveFoodDetail(null);
          setCurrentView('checkout');
        }}
      />

      <AiConciergeModal
        isOpen={aiConciergeOpen}
        onClose={() => setAiConciergeOpen(false)}
        onSelectRecommendedFood={handleSelectRecommendedFood}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={(totals) => {
          setCheckoutTotals(totals);
          setCurrentView('checkout');
        }}
        appliedOffer={appliedOffer}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={() => setAppliedOffer(null)}
      />

      {/* Editorial Footer */}
      <Footer onNavigate={(view) => { setCurrentView(view); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />

    </div>
  );
}
