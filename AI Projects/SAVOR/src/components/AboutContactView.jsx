import React, { useState } from 'react';
import { Award, Mail, Phone, MapPin, Send, CheckCircle2, ChefHat, Sparkles } from 'lucide-react';

export default function AboutContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Brand Heritage Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block">
            Our Heritage & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white leading-tight">
            Crafting Culinary Art Since 2012
          </h1>
          <p className="text-neutral-300 text-base font-light leading-relaxed">
            SAVOR. was founded with a singular ambition: bridging the gap between three-star Michelin restaurant mastery and seamless online food delivery. 
            Every dish begins with 100% organic, locally harvested ingredients and is slow-cooked over Japanese Binchotan charcoal or fired in our 900°F wood ovens.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="font-serif text-3xl font-bold text-amber-300 block">3</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Michelin Stars</span>
            </div>
            <div>
              <span className="font-serif text-3xl font-bold text-white block">15+</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Global Flagships</span>
            </div>
            <div>
              <span className="font-serif text-3xl font-bold text-white block">1.2M+</span>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Happy Diners</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="glass-card p-4 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
              alt="Executive Chef Antoine"
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="mt-4 p-2 text-center">
              <h4 className="font-serif text-xl font-medium text-white">Executive Chef Antoine Moreau</h4>
              <p className="text-xs text-amber-400 font-mono">Culinary Director & Master Sommelier</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#0E0E0E]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                Direct Inquiries
              </span>
              <h2 className="font-serif text-3xl font-medium text-white mb-2">
                Get in Touch
              </h2>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Have questions about private catering, press inquiries, or corporate dining memberships? Reach out to our concierge team.
              </p>
            </div>

            <div className="space-y-4 text-xs text-neutral-300">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">HQ Concierge</span>
                  <span>+1 (800) 928-SAVOR</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">Email</span>
                  <span>concierge@savoria.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">Global HQ</span>
                  <span>745 5th Ave, Floor 32, New York, NY</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center p-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-amber-400" />
                <h3 className="font-serif text-2xl text-white">Inquiry Received</h3>
                <p className="text-xs text-neutral-300 max-w-sm">
                  Our hospitality team will respond to your request within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Julian Vance"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="julian@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. VIP Event Booking / Media Request"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How may we assist you?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Concierge Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
