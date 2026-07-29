import { useState, useEffect } from 'react';
import { ShoppingBag, Heart, User, Search, Menu, X, Sparkles, Moon, Sun, ChevronDown } from 'lucide-react';
import { ProductCategory } from '../types';
import { CATEGORIES } from '../data';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  cartCount: number;
  wishlistCount: number;
  setSelectedCategory: (cat: ProductCategory) => void;
  onOpenStylist: () => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({
  activePage,
  setActivePage,
  cartCount,
  wishlistCount,
  setSelectedCategory,
  onOpenStylist,
  darkMode,
  setDarkMode
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryNav = (catId: string) => {
    setSelectedCategory(catId as ProductCategory);
    setActivePage('shop');
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-white/5 py-4 shadow-sm'
            : 'bg-white/85 backdrop-blur-md border-b border-black/5 py-4 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Icon */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 rounded-full transition-colors hover:bg-neutral-500/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              id="brand-logo"
              onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
              className="text-2xl font-serif tracking-widest font-bold uppercase transition-opacity hover:opacity-80"
            >
              A U R A
            </button>
          </div>

          {/* Mega Menu / Categories for Desktop */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <button
              id="nav-home"
              onClick={() => setActivePage('home')}
              className={`text-sm tracking-widest uppercase transition-colors relative py-1 hover:text-brown ${
                activePage === 'home' ? 'font-semibold font-sans' : 'font-light'
              }`}
            >
              Home
              {activePage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-600 rounded-full" />
              )}
            </button>

            {/* Collection Category Group with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                id="nav-shop-mega"
                onClick={() => { setActivePage('shop'); setSelectedCategory('all'); }}
                className={`text-sm tracking-widest uppercase flex items-center gap-1 py-1 transition-colors hover:text-brown ${
                  activePage === 'shop' ? 'font-semibold font-sans' : 'font-light'
                }`}
              >
                Atelier Drop
                <ChevronDown size={14} className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown menu */}
              {megaMenuOpen && (
                <div
                  id="mega-menu"
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[420px] rounded-lg shadow-xl p-6 grid grid-cols-2 gap-4 border transition-all duration-300 ${
                    darkMode ? 'bg-neutral-900 border-white/5' : 'bg-white border-black/5'
                  }`}
                >
                  <div>
                    <h4 className="text-xs uppercase font-semibold tracking-wider text-amber-600 mb-2">Collections</h4>
                    <div className="flex flex-col space-y-2">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          id={`cat-${cat.id}`}
                          onClick={() => handleCategoryNav(cat.id)}
                          className="text-left text-sm font-light hover:translate-x-1 transition-transform p-1 rounded hover:bg-neutral-500/5 hover:text-amber-500"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-l border-neutral-500/10 pl-4 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs uppercase font-semibold tracking-wider text-amber-600 mb-1">AI Recommendation</h4>
                      <p className="text-xs font-light text-neutral-400 mb-3">Instant bespoke stylist advising based on occasion and budget.</p>
                    </div>
                    <button
                      id="navbar-ai-recommend-btn"
                      onClick={() => { onOpenStylist(); setMegaMenuOpen(false); }}
                      className="bg-amber-600 hover:bg-amber-700 text-white rounded-md text-[11px] uppercase tracking-wider py-1.5 px-3 flex items-center justify-center gap-2 font-medium transition-transform active:scale-95"
                    >
                      <Sparkles size={12} />
                      Consult Expert Stylist
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              id="nav-about"
              onClick={() => setActivePage('about')}
              className={`text-sm tracking-widest uppercase transition-colors relative py-1 hover:text-brown ${
                activePage === 'about' ? 'font-semibold font-sans' : 'font-light'
              }`}
            >
              About Brand
              {activePage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-600 rounded-full" />
              )}
            </button>

            <button
              id="nav-contact"
              onClick={() => setActivePage('contact')}
              className={`text-sm tracking-widest uppercase transition-colors relative py-1 hover:text-brown ${
                activePage === 'contact' ? 'font-semibold font-sans' : 'font-light'
              }`}
            >
              Contact
              {activePage === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-amber-600 rounded-full" />
              )}
            </button>
          </nav>

          {/* Right Icons Row */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-full transition-colors hover:bg-neutral-500/10 text-neutral-500 hover:text-amber-500"
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* AI Assistant Call */}
            <button
              id="stylist-toggle-btn"
              onClick={onOpenStylist}
              className="relative p-1.5 rounded-full transition-colors bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 flex items-center justify-center gap-1 px-3 text-xs tracking-wider uppercase font-medium"
              title="Open AI Personal Stylist"
            >
              <Sparkles size={16} className="animate-pulse" />
              <span className="hidden sm:inline">AI Stylist</span>
            </button>

            {/* Search Toggle */}
            <div className="relative">
              <button
                id="search-toggle-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 rounded-full transition-colors hover:bg-neutral-500/10 text-neutral-500 hover:text-amber-500"
                aria-label="Toggle Search"
              >
                <Search size={20} />
              </button>

              {searchOpen && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                      setActivePage('shop');
                      setSearchOpen(false);
                    }
                  }}
                  className={`absolute right-0 mt-3 p-2 rounded-lg border shadow-xl flex items-center gap-2 z-50 w-72 transition-all ${
                    darkMode ? 'bg-neutral-900 border-white/10' : 'bg-white border-black/10'
                  }`}
                >
                  <input
                    id="navbar-search-input"
                    type="text"
                    placeholder="Search AURA collection..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none text-xs w-full focus:outline-none focus:ring-0 px-2"
                    autoFocus
                  />
                  <button type="submit" className="p-1.5 bg-neutral-500/10 rounded-md hover:bg-neutral-500/20 text-xs">
                    Go
                  </button>
                </form>
              )}
            </div>

            {/* Wishlist */}
            <button
              id="wishlist-nav-btn"
              onClick={() => setActivePage('wishlist')}
              className="relative p-1.5 rounded-full transition-colors hover:bg-neutral-500/10 text-neutral-500 hover:text-amber-500"
              aria-label="View Wishlist"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Link */}
            <button
              id="cart-nav-btn"
              onClick={() => setActivePage('cart')}
              className="relative p-1.5 rounded-full transition-colors hover:bg-neutral-500/10 text-neutral-500 hover:text-amber-500"
              aria-label="View Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Login Toggle */}
            <button
              id="auth-nav-btn"
              onClick={() => setActivePage('login')}
              className={`p-1.5 rounded-full transition-colors hover:bg-neutral-500/10 text-neutral-500 hover:text-amber-500 ${
                activePage === 'login' ? 'text-amber-600' : ''
              }`}
              aria-label="User Profile"
            >
              <User size={20} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className={`lg:hidden border-t py-4 px-6 relative z-40 transition-all ${
            darkMode ? 'bg-neutral-950 border-white/5' : 'bg-white border-black/5'
          }`}
        >
          <div className="flex flex-col space-y-4">
            <button
              id="mob-nav-home"
              onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
              className="text-left text-sm uppercase tracking-wider py-1 font-light"
            >
              Home
            </button>
            
            <div className="border-b pb-2 mb-1 border-neutral-500/10">
              <span className="text-xs uppercase text-amber-600 tracking-wider block mb-2 font-medium">Categories</span>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    id={`mob-cat-${cat.id}`}
                    onClick={() => handleCategoryNav(cat.id)}
                    className="text-left text-xs font-light py-1 text-neutral-400 hover:text-amber-500"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              id="mob-nav-about"
              onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }}
              className="text-left text-sm uppercase tracking-wider py-1 font-light"
            >
              About Brand
            </button>

            <button
              id="mob-nav-contact"
              onClick={() => { setActivePage('contact'); setMobileMenuOpen(false); }}
              className="text-left text-sm uppercase tracking-wider py-1 font-light"
            >
              Contact
            </button>

            <button
              id="mob-ai-consult-btn"
              onClick={() => { onOpenStylist(); setMobileMenuOpen(false); }}
              className="w-full bg-amber-600/10 text-amber-600 border border-amber-650/20 rounded-md py-2 px-4 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-medium hover:bg-amber-600 hover:text-white"
            >
              <Sparkles size={14} />
              AI Recommendations Shop
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
