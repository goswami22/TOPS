import React from 'react';
import { Sparkles, ArrowRight, Clock, Star, MapPin, Award } from 'lucide-react';

export default function HeroSection({ onExploreMenu, onBookTable, onOpenAiConcierge, onQuickViewFood, foodItems }) {
  const featuredItem = foodItems?.find(item => item.id === 'food-1') || foodItems?.[0];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/10 py-12 lg:py-0">
      
      {/* Background Ambient Glows */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-12 right-1/4 w-80 h-80 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10 pt-4">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-10 bg-amber-400" />
              <span className="text-amber-400 text-xs uppercase tracking-[0.28em] font-semibold">
                Exquisite Dining Experience
              </span>
            </div>

            {/* Main Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.95] font-normal tracking-tight text-white">
              The Art of <br />
              <span className="italic text-amber-300 font-serif">Fine Cuisine</span>
            </h1>

            {/* Subtext */}
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl font-light leading-relaxed">
              Experience the harmony of Michelin-inspired artistry, 45-day dry-aged cuts, woodfired sourdough perfection, and live AI sommelier pairings delivered to your doorstep or served at our flagship locations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={onExploreMenu}
                className="px-8 py-4 bg-amber-400 text-black text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/20 flex items-center gap-2 group cursor-pointer"
              >
                <span>Order Delivery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBookTable}
                className="px-6 py-4 bg-white/5 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all"
              >
                Reserve Table
              </button>

              <button
                onClick={onOpenAiConcierge}
                className="px-5 py-4 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider rounded-sm hover:bg-amber-500/20 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>AI Pairing</span>
              </button>
            </div>

            {/* Key Value Counters */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="text-xs text-neutral-400 uppercase tracking-wider block mb-1">Delivery Time</span>
                <span className="font-serif text-2xl italic text-amber-300">24 — 35 Mins</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 uppercase tracking-wider block mb-1">Michelin Stars</span>
                <span className="font-serif text-2xl italic text-white">3 Stars 2024</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 uppercase tracking-wider block mb-1">Organic Sourcing</span>
                <span className="font-serif text-2xl italic text-white">100% Farm Fresh</span>
              </div>
            </div>

          </div>

          {/* Right Floating Image & Cards Section */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-md lg:max-w-none h-[480px] sm:h-[540px]">
              
              {/* Main Image Container */}
              <div className="w-full h-full bg-neutral-900 rounded-2xl lg:rounded-l-[100px] overflow-hidden border border-white/10 relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
                <img 
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1000" 
                  alt="Savoria Gourmet Dish" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Card 1: Chef's Bestseller */}
              {featuredItem && (
                <div className="absolute top-8 -left-6 sm:-left-10 glass-card p-5 rounded-2xl border border-white/15 z-20 w-72 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] uppercase font-bold tracking-wider rounded border border-amber-500/30">
                      Chef's Special
                    </span>
                    <span className="font-serif text-amber-300 font-bold text-lg">
                      ${featuredItem.price}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium mb-1">
                    {featuredItem.name}
                  </h4>
                  <p className="text-[11px] text-neutral-400 line-clamp-2 leading-snug mb-3">
                    {featuredItem.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-white">{featuredItem.rating}</span>
                      <span className="text-neutral-500">({featuredItem.reviewCount})</span>
                    </div>
                    <button
                      onClick={() => onQuickViewFood(featuredItem)}
                      className="px-3 py-1 rounded-full bg-amber-400 text-black text-[11px] font-bold hover:bg-amber-300 transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              )}

              {/* Floating Card 2: Nearest Location */}
              <div className="absolute -bottom-6 left-6 sm:left-12 glass-card p-4 rounded-xl border border-white/15 z-20 flex items-center gap-4 shadow-2xl backdrop-blur-xl">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/20 text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-bold">
                    Nearest Flagship
                  </span>
                  <p className="font-serif italic text-sm text-white">
                    Manhattan, 5th Avenue
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
