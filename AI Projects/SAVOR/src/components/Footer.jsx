import React from 'react';
import { Award, Smartphone, Send, Instagram, Facebook, Twitter, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#080808] border-t border-white/10 text-neutral-400 text-xs mt-20">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/5 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Col 1 Brand */}
        <div className="space-y-4">
          <span className="font-serif text-3xl font-bold tracking-tight text-white block">
            SAVOR<span className="text-amber-400">.</span>
          </span>
          <p className="text-neutral-400 leading-relaxed font-light">
            Luxury multi-location restaurant chain delivering 3-star Michelin inspired gastronomy, dry-aged Wagyu, and woodfired sourdough pizza.
          </p>
          <div className="flex gap-3 text-neutral-400">
            <Instagram className="w-4 h-4 hover:text-amber-400 cursor-pointer" />
            <Facebook className="w-4 h-4 hover:text-amber-400 cursor-pointer" />
            <Twitter className="w-4 h-4 hover:text-amber-400 cursor-pointer" />
          </div>
        </div>

        {/* Col 2 Navigation */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm text-white uppercase font-bold tracking-wider">
            Quick Navigation
          </h4>
          <ul className="space-y-2">
            {['home', 'menu', 'categories', 'offers', 'locations', 'reservation'].map((id) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate(id)}
                  className="capitalize hover:text-amber-400 transition-colors"
                >
                  {id === 'home' ? 'Home Page' : id === 'menu' ? 'Culinary Menu' : id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 Mobile App Download */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm text-white uppercase font-bold tracking-wider">
            SAVOR Mobile App
          </h4>
          <p className="text-neutral-400 leading-relaxed">
            Download our iOS & Android apps for live driver GPS tracking and exclusive VIP chef tasting events.
          </p>
          <div className="flex flex-col gap-2 pt-1">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400 flex items-center gap-3 cursor-pointer">
              <Smartphone className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-[9px] text-neutral-400 block uppercase">Download on</span>
                <span className="text-xs text-white font-bold">App Store & Google Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* Col 4 Michelin Distinction */}
        <div className="glass-card p-5 rounded-2xl border border-amber-500/20 space-y-3 bg-gradient-to-br from-amber-950/30 to-black">
          <Award className="w-6 h-6 text-amber-400" />
          <h4 className="font-serif text-base text-white font-medium">3 Michelin Stars Distinction</h4>
          <p className="text-[11px] text-neutral-300">
            Awarded for culinary excellence, organic farm sourcing, and innovative AI sommelier pairings.
          </p>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-[11px]">
        <p>© 2026 SAVOR. Gourmet Chain Inc. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
          <span>•</span>
          <span className="hover:text-neutral-400 cursor-pointer">Allergens Guide</span>
        </div>
      </div>

    </footer>
  );
}
