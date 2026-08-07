import React from 'react';
import { Star, Clock, Flame, Heart, Eye, Plus, Sparkles } from 'lucide-react';

export default function FoodCard({ 
  item, 
  onQuickView, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist,
  onOpenAiPairing 
}) {
  return (
    <div className="group relative glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between h-full shadow-lg hover:shadow-2xl hover:shadow-amber-500/5">
      
      {/* Top Image Banner */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-900">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {item.isChefsSpecial && (
            <span className="px-2.5 py-1 bg-amber-500/90 text-black text-[10px] font-bold uppercase tracking-wider rounded-md shadow-md">
              Chef's Special
            </span>
          )}
          {item.isBestseller && (
            <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-amber-300 text-[10px] font-semibold uppercase tracking-wider rounded-md border border-white/20">
              Bestseller
            </span>
          )}
        </div>

        {/* Favorite Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(item);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all z-10 ${
            isWishlisted
              ? 'bg-rose-500 text-white border-rose-400'
              : 'bg-black/40 text-neutral-300 border-white/15 hover:text-rose-400 hover:bg-black/60'
          }`}
          title={isWishlisted ? "Remove from Favorites" : "Add to Favorites"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Floating Overlay Button */}
        <button
          onClick={() => onQuickView(item)}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
          title="Quick View Details"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Veg / Non-Veg Indicator */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10 text-[10px]">
          <span className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center p-0.5 ${
            item.isVeg ? 'border-emerald-500' : 'border-rose-500'
          }`}>
            <span className={`w-2 h-2 rounded-full ${
              item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
            }`} />
          </span>
          <span className="text-neutral-300 font-medium">
            {item.isVeg ? 'Vegetarian' : 'Non-Veg'}
          </span>
        </div>
      </div>

      {/* Body Information */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Title & Price */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-serif text-lg font-medium text-white group-hover:text-amber-300 transition-colors line-clamp-1">
              {item.name}
            </h3>
            <div className="text-right">
              <span className="font-serif font-bold text-lg text-amber-400">
                ${item.price}
              </span>
              {item.discountPrice && (
                <span className="block text-[10px] text-neutral-500 line-through">
                  ${item.discountPrice}
                </span>
              )}
            </div>
          </div>

          {/* Description snippet */}
          <p className="text-neutral-400 text-xs font-light line-clamp-2 leading-relaxed mb-3">
            {item.description}
          </p>

          {/* Meta Info: Rating, Prep Time, Calories, Spice */}
          <div className="flex items-center gap-3 text-[11px] text-neutral-400 pt-2 border-t border-white/5">
            <div className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{item.rating}</span>
              <span className="text-neutral-500">({item.reviewCount})</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-neutral-400" />
              <span>{item.prepTime}</span>
            </div>

            <div className="flex items-center gap-0.5 text-amber-500">
              {Array.from({ length: item.spiceLevel || 0 }).map((_, i) => (
                <Flame key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          
          <button
            onClick={() => onOpenAiPairing(item)}
            className="flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 transition-colors font-medium"
            title="Ask AI Sommelier for wine & starter pairings"
          >
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>AI Pairing</span>
          </button>

          <button
            onClick={() => onAddToCart(item)}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-400 text-black text-[11px] font-bold uppercase tracking-wider rounded-md hover:bg-amber-300 transition-colors cursor-pointer shadow-md shadow-amber-400/10"
          >
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
            <span>Add</span>
          </button>

        </div>

      </div>

    </div>
  );
}
