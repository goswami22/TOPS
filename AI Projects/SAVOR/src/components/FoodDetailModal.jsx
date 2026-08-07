import React, { useState, useEffect } from 'react';
import { 
  X, 
  Star, 
  Clock, 
  Flame, 
  Sparkles, 
  Check, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Wine, 
  Utensils, 
  ShieldAlert,
  ChefHat
} from 'lucide-react';

export default function FoodDetailModal({ item, onClose, onAddToCart, onBuyNow }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [spiceChoice, setSpiceChoice] = useState(item?.spiceLevel || 0);
  const [customNotes, setCustomNotes] = useState('');
  
  // AI Pairing State
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'ai-pairing'
  const [aiPairing, setAiPairing] = useState(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    if (item) {
      setQuantity(1);
      setSelectedAddOns([]);
      setSpiceChoice(item.spiceLevel || 0);
      setCustomNotes('');
      setAiPairing(null);
    }
  }, [item]);

  if (!item) return null;

  const toggleAddOn = (addOn) => {
    if (selectedAddOns.some(a => a.id === addOn.id)) {
      setSelectedAddOns(selectedAddOns.filter(a => a.id !== addOn.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = item.price + addOnsTotal;
  const totalPrice = unitPrice * quantity;

  // Fetch AI Sommelier Pairings from Server API
  const handleFetchAiPairing = async () => {
    setActiveTab('ai-pairing');
    if (aiPairing) return; // already loaded

    setLoadingAi(true);
    try {
      const res = await fetch('/api/ai/pairings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dishName: item.name,
          category: item.category,
          userPreferences: `Spice level: ${spiceChoice}, Notes: ${customNotes}`
        })
      });
      const data = await res.json();
      setAiPairing(data);
    } catch (err) {
      console.error("AI Pairing fetch error:", err);
      setAiPairing({
        beveragePairing: {
          name: "Savoria Reserve Pinot Noir '23",
          description: "Silky black cherry notes with subtle oak finish that complements rich flavors.",
          temperature: "Slightly Chilled (16°C)"
        },
        appetizerPairing: {
          name: "Truffle Burrata Crostini",
          description: "Creamy burrata with black truffle drizzle to elevate your dining journey."
        },
        chefTastingNote: "Our chefs slow-infuse wild herbs into organic butter to achieve deep umami warmth.",
        flavorProfile: ["Rich Umami", "Herbal Warmth", "Smoky Velvet"]
      });
    } finally {
      setLoadingAi(false);
    }
  };

  const handleAdd = (isBuyNow = false) => {
    const cartPayload = {
      id: `${item.id}-${Date.now()}`,
      foodItem: item,
      quantity,
      selectedAddOns,
      spiceChoice,
      customNotes,
      itemTotal: totalPrice
    };

    if (isBuyNow) {
      onBuyNow(cartPayload);
    } else {
      onAddToCart(cartPayload);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-3xl glass-card rounded-2xl overflow-hidden border border-white/20 my-8 shadow-2xl bg-[#0F0F0F]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-amber-400 hover:text-black transition-colors border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column Image & Quick Badges */}
          <div className="md:col-span-5 relative bg-neutral-900 min-h-[260px] md:min-h-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />

            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              <span className="px-3 py-1 bg-amber-400 text-black text-xs font-bold uppercase tracking-wider rounded-md shadow-md">
                ${item.price}
              </span>
              {item.isChefsSpecial && (
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-amber-300 text-xs font-medium uppercase tracking-wider rounded-md border border-amber-500/30">
                  Chef's Special
                </span>
              )}
            </div>

            {/* Nutrition Pill Bar */}
            <div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-xl border border-white/10 hidden md:block">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-bold mb-1">
                Nutritional Breakdown
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-white/5 p-1.5 rounded-lg">
                  <span className="text-amber-400 font-bold block">{item.nutrition?.protein || '30g'}</span>
                  <span className="text-[10px] text-neutral-400">Protein</span>
                </div>
                <div className="bg-white/5 p-1.5 rounded-lg">
                  <span className="text-amber-400 font-bold block">{item.nutrition?.carbs || '45g'}</span>
                  <span className="text-[10px] text-neutral-400">Carbs</span>
                </div>
                <div className="bg-white/5 p-1.5 rounded-lg">
                  <span className="text-amber-400 font-bold block">{item.nutrition?.fat || '20g'}</span>
                  <span className="text-[10px] text-neutral-400">Fat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            
            <div>
              {/* Modal Tabs: Overview vs AI Sommelier */}
              <div className="flex border-b border-white/10 mb-5 text-xs font-semibold uppercase tracking-wider">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-3 px-4 transition-colors relative ${
                    activeTab === 'details'
                      ? 'text-amber-300 border-b-2 border-amber-400'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Dish Overview
                </button>
                <button
                  onClick={handleFetchAiPairing}
                  className={`pb-3 px-4 flex items-center gap-1.5 transition-colors relative ${
                    activeTab === 'ai-pairing'
                      ? 'text-amber-300 border-b-2 border-amber-400'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>AI Sommelier</span>
                </button>
              </div>

              {activeTab === 'details' ? (
                <div className="space-y-5">
                  
                  {/* Dish Title & Rating */}
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-white mb-2">
                      {item.name}
                    </h2>
                    <div className="flex items-center gap-4 text-xs text-neutral-400">
                      <div className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span>{item.rating}</span>
                        <span className="text-neutral-500">({item.reviewCount} reviews)</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.prepTime}</span>
                      </div>
                      <span>•</span>
                      <span className="text-amber-300 font-medium">{item.calories} kcal</span>
                    </div>
                  </div>

                  {/* Full Description */}
                  <p className="text-neutral-300 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Ingredients List */}
                  <div>
                    <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider block mb-2">
                      Key Fresh Ingredients
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.ingredients?.map((ing, i) => (
                        <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Allergen Notice */}
                  {item.allergens?.length > 0 && (
                    <div className="flex items-center gap-2 p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs text-amber-300">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>Contains Allergens: {item.allergens.join(', ')}</span>
                    </div>
                  )}

                  {/* Custom Add-ons Section */}
                  {item.addOns?.length > 0 && (
                    <div>
                      <span className="text-xs uppercase font-bold text-amber-400 tracking-wider block mb-2">
                        Enhance Your Dish (Optional Add-ons)
                      </span>
                      <div className="space-y-2">
                        {item.addOns.map((addOn) => {
                          const isSelected = selectedAddOns.some(a => a.id === addOn.id);
                          return (
                            <button
                              key={addOn.id}
                              onClick={() => toggleAddOn(addOn)}
                              className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                                isSelected
                                  ? 'bg-amber-400/10 border-amber-400 text-white'
                                  : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/30'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                                  isSelected ? 'bg-amber-400 border-amber-400 text-black' : 'border-white/30'
                                }`}>
                                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                                <span>{addOn.name}</span>
                              </div>
                              <span className="font-mono text-amber-300 font-semibold">+${addOn.price}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Special Preparation Instructions */}
                  <div>
                    <label className="text-xs uppercase font-bold text-neutral-400 tracking-wider block mb-1">
                      Chef Notes / Dietary Requests
                    </label>
                    <input
                      type="text"
                      value={customNotes}
                      onChange={(e) => setCustomNotes(e.target.value)}
                      placeholder="e.g. Extra sauce on side, no onions..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                </div>
              ) : (
                /* AI Sommelier Tab Content */
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-amber-400">
                    <ChefHat className="w-5 h-5" />
                    <h3 className="font-serif text-lg font-medium text-white">
                      AI Sommelier & Executive Chef Pairing
                    </h3>
                  </div>

                  {loadingAi ? (
                    <div className="py-12 flex flex-col items-center justify-center space-y-3">
                      <Sparkles className="w-8 h-8 text-amber-400 animate-spin" />
                      <p className="text-xs text-neutral-400 font-mono">
                        Consulting Master Sommelier for perfect pairing...
                      </p>
                    </div>
                  ) : aiPairing ? (
                    <div className="space-y-4">
                      
                      {/* Wine / Beverage Card */}
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
                        <div className="flex items-center gap-2 text-amber-300">
                          <Wine className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Recommended Beverage</span>
                          <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono">
                            {aiPairing.beveragePairing?.temperature}
                          </span>
                        </div>
                        <h4 className="font-serif text-base text-white font-medium">
                          {aiPairing.beveragePairing?.name}
                        </h4>
                        <p className="text-xs text-neutral-300 leading-snug">
                          {aiPairing.beveragePairing?.description}
                        </p>
                      </div>

                      {/* Appetizer Starter Card */}
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                        <div className="flex items-center gap-2 text-amber-300">
                          <Utensils className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Complementary Starter</span>
                        </div>
                        <h4 className="font-serif text-base text-white font-medium">
                          {aiPairing.appetizerPairing?.name}
                        </h4>
                        <p className="text-xs text-neutral-300 leading-snug">
                          {aiPairing.appetizerPairing?.description}
                        </p>
                      </div>

                      {/* Chef's Tasting Note */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-neutral-900 border border-amber-500/20">
                        <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold block mb-1">
                          Chef's Secret Technique
                        </span>
                        <p className="font-serif italic text-sm text-neutral-200">
                          "{aiPairing.chefTastingNote}"
                        </p>
                      </div>

                      {/* Flavor Profile Badges */}
                      <div className="flex items-center gap-2 pt-2">
                        <span className="text-[10px] text-neutral-400 uppercase font-bold">Flavor Notes:</span>
                        {aiPairing.flavorProfile?.map((note, i) => (
                          <span key={i} className="px-2 py-0.5 bg-white/10 text-amber-300 rounded text-[10px] font-mono">
                            {note}
                          </span>
                        ))}
                      </div>

                    </div>
                  ) : null}
                </div>
              )}

            </div>

            {/* Modal Bottom Bar: Quantity & Actions */}
            <div className="pt-6 border-t border-white/10 mt-6 flex flex-wrap items-center justify-between gap-4">
              
              {/* Quantity Counter */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-mono font-bold text-sm w-6 text-center text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 ml-auto">
                <button
                  onClick={() => handleAdd(false)}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span>Add to Cart (${totalPrice.toFixed(2)})</span>
                </button>

                <button
                  onClick={() => handleAdd(true)}
                  className="px-6 py-3 rounded-xl bg-amber-400 text-black hover:bg-amber-300 text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-amber-400/20"
                >
                  Order Now
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
