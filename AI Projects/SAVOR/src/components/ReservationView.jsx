import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, MapPin, Wine } from 'lucide-react';

export default function ReservationView({ locations, onBookingSuccess }) {
  const [branch, setBranch] = useState(locations?.[0]?.name || 'Manhattan Flagship Reserve');
  const [date, setDate] = useState('2026-07-30');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [seatingZone, setSeatingZone] = useState('Main Dining Room');
  const [occasion, setOccasion] = useState('Anniversary / Date Night');
  const [specialRequest, setSpecialRequest] = useState('');
  const [name, setName] = useState('Julian Vance');
  const [email, setEmail] = useState('julian.vance@gourmet.com');
  const [phone, setPhone] = useState('+1 (555) 234-5678');
  
  const [confirmedReservation, setConfirmedReservation] = useState(null);

  const seatingZones = ['Main Dining Room', "Chef's Counter Live", 'Terrace Skyline View', 'Private VIP Booth'];
  const occasions = ['Casual Gourmet Dining', 'Anniversary / Date Night', 'Birthday Celebration', 'Executive Business Lunch'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRes = {
      id: `RES-${Math.floor(10000 + Math.random() * 90000)}`,
      branchName: branch,
      branchAddress: locations?.find(l => l.name === branch)?.address || '745 5th Ave, NY',
      date,
      time,
      guests,
      seatingZone,
      occasion,
      specialRequest,
      contactName: name,
      contactPhone: phone,
      contactEmail: email,
      status: 'Confirmed',
      confirmationCode: `SVR-TABLE-${Math.floor(100 + Math.random() * 900)}`,
      createdAt: new Date().toLocaleDateString()
    };

    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}

    setConfirmedReservation(newRes);
    if (onBookingSuccess) onBookingSuccess(newRes);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-2">
          Table Reservation
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium text-white mb-3">
          Reserve Your Dining Experience
        </h1>
        <p className="text-neutral-400 text-sm font-light">
          Enjoy live chef pairings, candlelit seating, and bespoke hospitality at our flagship dining rooms.
        </p>
      </div>

      {confirmedReservation ? (
        /* Confirmation Card */
        <div className="glass-card p-8 rounded-3xl border border-amber-500/40 text-center space-y-6 bg-[#0E0E0E] animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-bold font-mono uppercase tracking-wider">
              Confirmed • {confirmedReservation.confirmationCode}
            </span>
            <h2 className="font-serif text-3xl font-medium text-white mt-3">
              Table Reserved for {confirmedReservation.contactName}
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Confirmation sent to {confirmedReservation.contactEmail}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs">
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block">Outlet</span>
              <span className="text-white font-medium">{confirmedReservation.branchName}</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block">Date & Time</span>
              <span className="text-amber-300 font-mono font-bold">{confirmedReservation.date} @ {confirmedReservation.time}</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block">Party Size</span>
              <span className="text-white font-medium">{confirmedReservation.guests} Guests</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block">Seating Zone</span>
              <span className="text-amber-300 font-medium">{confirmedReservation.seatingZone}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => setConfirmedReservation(null)}
              className="px-6 py-3 rounded-xl bg-amber-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-amber-300 transition-colors"
            >
              Book Another Table
            </button>
          </div>
        </div>
      ) : (
        /* Reservation Form */
        <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 space-y-6 bg-[#0D0D0D]">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Branch Selection */}
            <div className="sm:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Select Dining Location
              </label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {locations?.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} ({loc.neighborhood})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Preferred Time Slot
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {['17:00', '18:00', '19:00', '19:30', '20:00', '21:00'].map(t => (
                  <option key={t} value={t}>{t} PM</option>
                ))}
              </select>
            </div>

            {/* Party Size */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                max="12"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            {/* Seating Zone */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Seating Atmosphere
              </label>
              <select
                value={seatingZone}
                onChange={(e) => setSeatingZone(e.target.value)}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {seatingZones.map(z => <option key={z} value={z}>{z}</option>)}
              </select>
            </div>

            {/* Occasion */}
            <div className="sm:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Occasion
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {occasions.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setOccasion(o)}
                    className={`p-2.5 rounded-xl text-xs text-center border transition-all ${
                      occasion === o
                        ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                Special Requests / Dietary Notes
              </label>
              <textarea
                rows={3}
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                placeholder="e.g. Quiet corner table, gluten allergy, quiet champagne toast..."
                className="w-full bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 placeholder-neutral-600"
              />
            </div>

          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-amber-400 text-black font-bold uppercase text-xs tracking-widest hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/20"
          >
            Confirm Reservation
          </button>

        </form>
      )}

    </div>
  );
}
