import React, { useState } from 'react';
import { X, Sparkles, Flame, Check, ArrowRight, Utensils, Heart } from 'lucide-react';

export default function AiConciergeModal({ isOpen, onClose, onSelectRecommendedFood }) {
  const [mood, setMood] = useState('Indulgent & Comforting');
  const [diet, setDiet] = useState('Omnivore');
  const [spicePreference, setSpicePreference] = useState('Medium');
  const [occasion, setOccasion] = useState('Dinner with Friends');
  
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  if (!isOpen) return null;

  const moods = [
    'Indulgent & Comforting', 
    'Light & Refreshing', 
    'Exotic Umami Explorer', 
    'Late Night Craving', 
    'Fine Dining Luxury'
  ];

  const diets = ['Omnivore', 'Vegetarian', 'Pescatarian', 'Keto / Low Carb'];
  const spices = ['Mild (No Spice)', 'Medium Spice', 'Spicy & Fiery'];
  const occasions = ['Solo Feast', 'Dinner with Friends', 'Romantic Date Night', 'Family Gathering'];

  const handleGetRecommendations = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/ai/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood, diet, spicePreference, occasion })
      });
      const data = await res.json();
      setRecommendations(data.recommendations || []);
    } catch (err) {
      console.error("AI Concierge error:", err);
      setRecommendations([
        {
          name: "Wagyu Truffle Smash Burger",
          tagline: "Unmatched Umami Luxury",
          category: "burgers",
          reason: "Perfect for an indulgent mood, rich double Wagyu beef layered with black truffle aioli.",
          recommendedDrink: "Smoked Vanilla Old Fashioned",
          estimatedCalories: "790 kcal"
        },
        {
          name: "Artisanal Burrata & Prosciutto Pizza",
          tagline: "Woodfired Perfection",
          category: "pizza",
          reason: "Crispy 72-hour fermented sourdough crust topped with fresh creamy burrata.",
          recommendedDrink: "Yuzu Elderflower Tonic",
          estimatedCalories: "640 kcal"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl glass-card rounded-2xl overflow-hidden border border-amber-500/30 p-6 sm:p-8 bg-[#0C0C0C] my-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-medium text-white">
              AI Culinary Concierge
            </h2>
            <p className="text-xs text-neutral-400">
              Tell us your mood & cravings for custom chef recommendations.
            </p>
          </div>
        </div>

        {/* Form Controls */}
        <div className="space-y-5">
          
          {/* Mood Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              What's Your Dining Mood?
            </label>
            <div className="flex flex-wrap gap-2">
              {moods.map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    mood === m
                      ? 'bg-amber-400 text-black font-bold shadow-md'
                      : 'bg-white/5 border border-white/10 text-neutral-300 hover:border-white/20'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Diet & Spice Preference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Dietary Preference
              </label>
              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                {diets.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Spice Tolerance
              </label>
              <select
                value={spicePreference}
                onChange={(e) => setSpicePreference(e.target.value)}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                {spices.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

          </div>

          {/* Occasion */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Occasion
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {occasions.map((o) => (
                <button
                  key={o}
                  onClick={() => setOccasion(o)}
                  className={`p-2 rounded-xl text-xs text-center transition-all ${
                    occasion === o
                      ? 'bg-amber-400/20 border border-amber-400 text-amber-300 font-semibold'
                      : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGetRecommendations}
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-amber-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Sparkles className="w-4 h-4 text-black animate-spin" />
                <span>Generating Personalized Menu...</span>
              </>
            ) : (
              <>
                <Utensils className="w-4 h-4" />
                <span>Curate My Personalized Menu</span>
              </>
            )}
          </button>

        </div>

        {/* Results Showcase */}
        {recommendations && (
          <div className="mt-8 pt-6 border-t border-white/10 space-y-4 animate-in fade-in duration-300">
            <h3 className="font-serif text-lg font-medium text-amber-300">
              Chef's Curated Suggestions For You
            </h3>

            <div className="space-y-3">
              {recommendations.map((rec, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-serif text-white">{rec.name}</span>
                      <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-mono">
                        {rec.estimatedCalories}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 italic font-serif">"{rec.tagline}"</p>
                    <p className="text-[11px] text-neutral-400">{rec.reason}</p>
                    <p className="text-[10px] text-amber-400 font-mono">Suggested Drink: {rec.recommendedDrink}</p>
                  </div>

                  <button
                    onClick={() => {
                      onSelectRecommendedFood(rec.name);
                      onClose();
                    }}
                    className="px-4 py-2 rounded-lg bg-amber-400 text-black text-xs font-bold uppercase hover:bg-amber-300 transition-colors shrink-0"
                  >
                    View Dish
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
