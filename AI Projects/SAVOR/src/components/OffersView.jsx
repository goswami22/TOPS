import React, { useState } from 'react';
import { Tag, Copy, Check, Percent, Gift, Sparkles } from 'lucide-react';

export default function OffersView({ offers, combos, onAddToCart, onApplyCouponCode }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    if (onApplyCouponCode) onApplyCouponCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Offers Title */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-2">
          Privileges & Promotions
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium text-white mb-3">
          Offers, Vouchers & Combos
        </h1>
        <p className="text-neutral-400 text-sm font-light">
          Claim exclusive gourmet rewards, family tasting packs, and complimentary chef additions.
        </p>
      </div>

      {/* Promos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden bg-gradient-to-br ${offer.bgGradient} space-y-4`}
          >
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 bg-amber-400 text-black text-[10px] font-bold uppercase tracking-wider rounded-md">
                {offer.validTill}
              </span>
              <Gift className="w-5 h-5 text-amber-400" />
            </div>

            <div>
              <h3 className="font-serif text-xl font-medium text-white mb-1">
                {offer.title}
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                {offer.subtitle}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <div className="font-mono text-sm text-amber-300 font-bold tracking-wider">
                CODE: {offer.code}
              </div>

              <button
                onClick={() => handleCopy(offer.code)}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-black text-xs font-bold uppercase transition-all flex items-center gap-1.5"
              >
                {copiedCode === offer.code ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Applied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Claim</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Combos & Tasting Bundles */}
      <div className="space-y-6 pt-6 border-t border-white/10">
        <h2 className="font-serif text-2xl font-medium text-white">
          Curated Combo Tasting Bundles
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all"
            >
              <div className="relative h-48 bg-neutral-900">
                <img src={combo.image} alt={combo.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 bg-amber-400 text-black text-xs font-bold uppercase tracking-wider rounded-md">
                  {combo.badge}
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-0.5 bg-black/80 backdrop-blur-md text-amber-300 text-[10px] font-mono rounded">
                  {combo.servingSize}
                </span>
              </div>

              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-white mb-1">
                    {combo.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                    {combo.description}
                  </p>

                  <ul className="text-xs text-neutral-300 space-y-1">
                    {combo.itemsIncluded.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="font-serif font-bold text-xl text-amber-400">${combo.price}</span>
                    <span className="text-xs text-neutral-500 line-through ml-2">${combo.originalPrice}</span>
                  </div>

                  <button
                    onClick={() => onAddToCart({
                      id: `${combo.id}-${Date.now()}`,
                      foodItem: {
                        id: combo.id,
                        name: combo.name,
                        price: combo.price,
                        image: combo.image,
                        description: combo.description
                      },
                      quantity: 1,
                      selectedAddOns: [],
                      itemTotal: combo.price
                    })}
                    className="px-4 py-2 bg-amber-400 text-black text-xs font-bold uppercase rounded-lg hover:bg-amber-300 transition-colors"
                  >
                    Add Bundle
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
