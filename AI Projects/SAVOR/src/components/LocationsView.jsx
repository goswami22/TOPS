import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar } from 'lucide-react';

export default function LocationsView({ locations, onBookTableAtLocation }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-2">
          Global Flagship Network
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium text-white mb-3">
          Our Restaurant Locations
        </h1>
        <p className="text-neutral-400 text-sm font-light">
          Visit our fine dining establishments or order express delivery from your nearest outlet.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all bg-[#0D0D0D]"
          >
            <div className="relative h-56 bg-neutral-900">
              <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                loc.dineInStatus === 'Open'
                  ? 'bg-emerald-500/80 text-white'
                  : 'bg-amber-500/80 text-black'
              }`}>
                {loc.dineInStatus}
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase font-bold block mb-1">
                  {loc.neighborhood} • {loc.distance}
                </span>
                <h3 className="font-serif text-2xl font-medium text-white mb-2">
                  {loc.name}
                </h3>

                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{loc.openHours}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <a href={`tel:${loc.phone}`} className="hover:text-amber-300 transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Directions</span>
                </a>

                <button
                  onClick={() => onBookTableAtLocation(loc.name)}
                  className="flex-1 py-2.5 rounded-xl bg-amber-400 text-black text-xs font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve</span>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
