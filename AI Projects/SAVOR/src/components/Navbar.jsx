import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  Sparkles, 
  MapPin, 
  Calendar,
  Utensils,
  Shield
} from 'lucide-react';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  cartCount, 
  cartTotal, 
  wishlistCount,
  onOpenAiConcierge,
  onOpenCart,
  searchQuery,
  setSearchQuery
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'The Menu' },
    { id: 'categories', label: 'Categories' },
    { id: 'offers', label: 'Offers & Deals' },
    { id: 'locations', label: 'Locations' },
    { id: 'reservation', label: 'Book Table' },
    { id: 'about', label: 'Our Story' }
  ];

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="group text-left focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                SAVOR<span className="text-amber-400">.</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
                Gourmet Chain
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-[12px] uppercase tracking-[0.18em] font-medium text-neutral-300">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors py-1 relative ${
                    currentView === link.id 
                      ? 'text-white font-semibold' 
                      : 'hover:text-amber-300 text-neutral-400'
                  }`}
                >
                  {link.label}
                  {currentView === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* AI Concierge Trigger */}
            <button
              onClick={onOpenAiConcierge}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-900/30 border border-amber-500/40 text-amber-300 text-xs font-semibold hover:border-amber-400 hover:brightness-110 transition-all cursor-pointer shadow-sm"
              title="AI Culinary Matcher"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>AI Sommelier</span>
            </button>

            {/* Quick Search Button */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-neutral-900 border border-white/20 rounded-full px-3 py-1 text-xs">
                  <Search className="w-3.5 h-3.5 text-neutral-400 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Wagyu, Truffle, Pizza..."
                    className="bg-transparent text-white focus:outline-none w-32 sm:w-48 placeholder-neutral-500"
                    autoFocus
                  />
                  <button 
                    onClick={() => setSearchOpen(false)}
                    className="text-neutral-400 hover:text-white ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setSearchOpen(true);
                    if (currentView !== 'menu') setCurrentView('menu');
                  }}
                  className="p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors"
                  title="Search Menu"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={() => handleNavClick('wishlist')}
              className="relative p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white transition-colors"
              title="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Icon & Total */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline font-mono text-amber-300 font-bold">
                ${cartTotal.toFixed(2)}
              </span>
            </button>

            {/* Reservation CTA Button */}
            <button
              onClick={() => handleNavClick('reservation')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 text-black text-[11px] font-bold uppercase tracking-wider rounded-full hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/10"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>

            {/* Admin Dashboard Button (if role allows or toggled) */}
            <button
              onClick={() => handleNavClick('admin')}
              className={`p-2 rounded-full border text-xs font-semibold transition-all ${
                currentView === 'admin'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/50'
                  : 'border-white/10 hover:border-purple-400/50 text-neutral-300 hover:text-purple-300'
              }`}
              title="Admin Dashboard"
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* User Profile */}
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`p-2 rounded-full border text-xs font-semibold transition-all ${
                currentView === 'dashboard'
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/50'
                  : 'border-white/10 hover:border-amber-400/50 text-neutral-300 hover:text-amber-400'
              }`}
              title="User Dashboard"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-white/10 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
            <button
              onClick={onOpenAiConcierge}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>AI Culinary Pairing</span>
            </button>
            <button
              onClick={() => handleNavClick('reservation')}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-400 text-black text-xs font-bold uppercase"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table</span>
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                  currentView === link.id
                    ? 'bg-white/10 text-amber-400 font-semibold'
                    : 'text-neutral-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
