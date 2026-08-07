import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategoriesView({ categories, onSelectCategory }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-2">
          Culinary Taxonomy
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium text-white mb-3">
          Explore By Category
        </h1>
        <p className="text-neutral-400 text-sm font-light">
          From Japanese Binchotan grills to 72-hour sourdough pizza crusts, explore our handcrafted menus.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group relative glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 cursor-pointer h-72 transition-all duration-300"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
              <span className="text-[10px] uppercase font-mono text-amber-400 block mb-1">
                {cat.itemCount} Specialty Dishes
              </span>
              <h3 className="font-serif text-2xl font-medium text-white group-hover:text-amber-300 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-neutral-300 font-light mt-1 line-clamp-2">
                {cat.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>View Menu</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
