import React, { useState } from 'react';
import FoodCard from './FoodCard';
import { Search, Mic, Flame, Sparkles, Filter, SlidersHorizontal } from 'lucide-react';

export default function MenuView({ 
  foodItems, 
  categories, 
  combos,
  onQuickViewFood, 
  onAddToCart, 
  wishlist, 
  onToggleWishlist,
  onOpenAiPairing,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) {
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'nonveg'
  const [maxSpice, setMaxSpice] = useState(3);
  const [sortBy, setSortBy] = useState('bestseller'); // 'bestseller' | 'price-asc' | 'price-desc' | 'rating'
  const [isListening, setIsListening] = useState(false);

  // Voice Search Handler
  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Voice search is not supported in this browser window.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };

    recognition.start();
  };

  // Filter Logic
  const filteredItems = foodItems.filter(item => {
    // Category check
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    
    // Diet check
    if (dietFilter === 'veg' && !item.isVeg) return false;
    if (dietFilter === 'nonveg' && item.isVeg) return false;

    // Spice check
    if (item.spiceLevel > maxSpice) return false;

    // Search query check
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchIng = item.ingredients?.some(i => i.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchIng) return false;
    }

    return true;
  });

  // Sort Logic
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
            Michelin-Inspired Crafting
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-white">
            Our Culinary Menu
          </h1>
        </div>

        {/* Search & Voice */}
        <div className="flex items-center gap-2 max-w-md w-full">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Wagyu, Truffle, Burrata, Cod..."
              className="w-full bg-white/5 border border-white/15 rounded-full pl-9 pr-10 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
            />
            <button
              onClick={handleVoiceSearch}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full ${
                isListening ? 'text-amber-400 animate-pulse' : 'text-neutral-400 hover:text-white'
              }`}
              title="Voice Search"
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
            selectedCategory === 'all'
              ? 'bg-amber-400 text-black shadow-md'
              : 'bg-white/5 border border-white/10 text-neutral-300 hover:border-white/20'
          }`}
        >
          All Dishes ({foodItems.length})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-amber-400 text-black shadow-md'
                : 'bg-white/5 border border-white/10 text-neutral-300 hover:border-white/20'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Filter Controls Bar */}
      <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
        
        {/* Diet Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-neutral-400 uppercase font-bold text-[10px]">Diet:</span>
          {['all', 'veg', 'nonveg'].map((d) => (
            <button
              key={d}
              onClick={() => setDietFilter(d)}
              className={`px-3 py-1 rounded-lg uppercase text-[10px] font-bold ${
                dietFilter === d
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {d === 'all' ? 'All' : d === 'veg' ? 'Veg Only' : 'Non-Veg'}
            </button>
          ))}
        </div>

        {/* Spice Tolerance Slider */}
        <div className="flex items-center gap-2">
          <span className="text-neutral-400 uppercase font-bold text-[10px]">Max Spice:</span>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3].map((level) => (
              <button
                key={level}
                onClick={() => setMaxSpice(level)}
                className={`p-1 rounded ${maxSpice >= level ? 'text-amber-500' : 'text-neutral-600'}`}
              >
                <Flame className="w-3.5 h-3.5 fill-current" />
              </button>
            ))}
          </div>
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-neutral-400 uppercase font-bold text-[10px]">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-neutral-900 border border-white/15 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none"
          >
            <option value="bestseller">Chef Bestsellers</option>
            <option value="rating">Highest Rated</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

      </div>

      {/* Grid of Food Items */}
      {sortedItems.length === 0 ? (
        <div className="py-20 text-center space-y-3">
          <p className="font-serif text-xl text-neutral-300">No dishes found matching your criteria</p>
          <p className="text-xs text-neutral-500">Try clearing search terms or resetting spice & diet filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setDietFilter('all');
              setMaxSpice(3);
            }}
            className="px-4 py-2 rounded-xl bg-amber-400 text-black text-xs font-bold uppercase"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onQuickView={onQuickViewFood}
              onAddToCart={(payload) => {
                if (payload.foodItem) onAddToCart(payload);
                else onAddToCart({
                  id: `${item.id}-${Date.now()}`,
                  foodItem: item,
                  quantity: 1,
                  selectedAddOns: [],
                  itemTotal: item.price
                });
              }}
              isWishlisted={wishlist.some(w => w.id === item.id)}
              onToggleWishlist={onToggleWishlist}
              onOpenAiPairing={onOpenAiPairing}
            />
          ))}
        </div>
      )}

    </div>
  );
}
