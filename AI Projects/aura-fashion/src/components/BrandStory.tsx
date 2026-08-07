import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, ArrowRight, Heart, Check } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data';

interface BrandStoryProps {
  darkMode: boolean;
}

export default function BrandStory({ darkMode }: BrandStoryProps) {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setEmailInput('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setContactSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setContactSubmitted(false), 4000);
  };

  return (
    <div className="space-y-24 py-12">
      
      {/* 1. Ethos/About Page visual representation */}
      <section id="about-brand-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold font-mono block">OUR RESTRAINT / ETHOS</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide leading-tight">
              AURA is an architectural response to disposable streetwear culture.
            </h2>
            <div className="space-y-4 text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-400">
              <p>
                Founded in 2024 between the industrial mills of Porto and design studios of Paris, AURA strips away unnecessary visual noise. We believe outerwear and basic apparel should wear as a structural silhouette, serving as reliable daily armor.
              </p>
              <p>
                Each seasonal drop utilizes exclusively custom-milled organic textiles (including Portuguese compact loopbacks and long-staple Japanese cottons) to ensure absolute longevity, physical luxury, and sustainability of stitch.
              </p>
            </div>
            {/* Visual statistic call */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-neutral-500/10">
              <div>
                <span className="block text-xl font-bold font-mono">100%</span>
                <span className="text-[10px] uppercase text-neutral-400 font-mono">Organic Milled Cottons</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono">480G</span>
                <span className="text-[10px] uppercase text-neutral-400 font-mono">Heavyweight Fleece</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono">Europe/JP</span>
                <span className="text-[10px] uppercase text-neutral-400 font-mono">Traceable Workshops</span>
              </div>
            </div>
          </div>

          {/* Left Large visual model lookbook overlay */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
              alt="Aura high fashion model drop styling"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Ambient detail tags on the image */}
            <div className="absolute bottom-6 left-6 right-6 p-4 glassmorphism rounded-lg text-neutral-900 flex justify-between items-center">
              <div>
                <h4 className="text-xs font-bold leading-none">Vibes lookbook drop 02</h4>
                <p className="text-[10px] text-neutral-500 mt-1">Paris collection selection preview</p>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">2026 Drop</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Instagram Fashion Gallery */}
      <section id="instagram-fashion-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">#AURAONLY</span>
          <h2 className="mt-2 text-2xl font-serif font-bold tracking-wider">Atelier Digital Editorial</h2>
          <p className="text-xs font-light text-neutral-400 mt-1.5">Tag your drops on instagram to be featured on Aura’s mood board.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-neutral-100"
            >
              <img
                src={post.img}
                alt="Instagram lookbook"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay stats and icon on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <Instagram size={20} className="mb-1" />
                <span className="text-[11px] font-semibold tracking-wider flex items-center gap-1">
                  <Heart size={10} fill="currentColor" /> {post.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Newsletter subscription overlay */}
      <section id="newsletter-subscription-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 sm:p-12 rounded-2xl border text-center max-w-4xl mx-auto ${
          darkMode 
            ? 'bg-neutral-900 border-white/5 shadow-2x-dark' 
            : 'bg-white border-black/5 shadow-lg'
        }`}>
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold font-mono">PRIORITY CLUB DROP CODES</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide">Unlock 15% Off Your Initial Drop</h2>
            <p className="text-xs font-light text-neutral-400 leading-relaxed">
              Subscribe to standard notifications to receive private invitation-only drop times, catalog secrets, and access codes.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <input
                id="newsletter-email-input"
                type="email"
                placeholder="Enter your email address"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 rounded-lg border px-4 py-3 text-xs bg-transparent border-neutral-500/10 focus:outline-none focus:border-amber-500"
              />
              <button
                id="newsletter-submit-btn"
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-6 py-3 text-xs uppercase tracking-widest font-bold font-mono flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check size={14} />
                    Codes Registered!
                  </>
                ) : (
                  <>
                    Join Atelier
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Contact Form section */}
      <section id="contact-atelier-section" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">STREET ADRESS / COUTURE SUPPORT</span>
          <h2 className="mt-2 text-2xl font-serif font-bold tracking-wider">Contact Aura Concierge</h2>
          <p className="text-xs font-light text-neutral-400 mt-1.5 font-mono">Our assistance response operates Monday - Friday: 10AM to 6PM Paris GMT.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center text-xs">
          <div className="p-4 rounded-xl border border-neutral-500/10 bg-neutral-500/5">
            <Mail size={16} className="mx-auto text-amber-600 mb-2" />
            <h4 className="font-semibold uppercase tracking-wider text-[10px]">Email Support</h4>
            <span className="text-neutral-400 font-light mt-1 block">concierge@aurawear.com</span>
          </div>
          <div className="p-4 rounded-xl border border-neutral-500/10 bg-neutral-500/5">
            <Phone size={16} className="mx-auto text-amber-600 mb-2" />
            <h4 className="font-semibold uppercase tracking-wider text-[10px]">Atelier Phone</h4>
            <span className="text-neutral-400 font-light mt-1 block">+33 1 45 61 21 02</span>
          </div>
          <div className="p-4 rounded-xl border border-neutral-500/10 bg-neutral-500/5">
            <MapPin size={16} className="mx-auto text-amber-600 mb-2" />
            <h4 className="font-semibold uppercase tracking-wider text-[10px]">Main flagship</h4>
            <span className="text-neutral-400 font-light mt-1 block">Rue du Faubourg Saint-Honoré, Paris</span>
          </div>
        </div>

        {/* Contact Form input container */}
        <form onSubmit={handleContactSubmit} className="space-y-4 p-6 rounded-xl border border-neutral-500/10 bg-neutral-500/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">Your Name</label>
              <input
                id="contact-name-input"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs p-3 rounded-lg border bg-transparent border-neutral-500/10 focus:outline-none focus:border-amber-500 text-white"
                placeholder="Aria Sterling"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">Email Address</label>
              <input
                id="contact-email-input"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs p-3 rounded-lg border bg-transparent border-neutral-500/10 focus:outline-none focus:border-amber-500 text-white"
                placeholder="aria@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-1">Message Details</label>
            <textarea
              id="contact-message-input"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full text-xs p-3 rounded-lg border bg-transparent border-neutral-500/10 focus:outline-none focus:border-amber-500 text-white"
              placeholder="Detailed questions about premium sizing dropdown limits or portugal drops..."
            />
          </div>
          <button
            id="contact-submit-btn"
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-4 rounded-lg text-xs uppercase tracking-widest font-mono flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-95"
          >
            {contactSubmitted ? (
              <>
                <Check size={14} />
                Message Dispatch SUCCESS
              </>
            ) : (
              <>
                <Send size={14} />
                Send Inquiry to Concierge
              </>
            )}
          </button>
        </form>
      </section>

    </div>
  );
}
