import React, { useState } from 'react';
import { 
  Award, Gift, MapPin, Clock, RotateCcw, ShieldCheck, Heart, ShoppingBag, 
  Wallet, User, Edit2, Key, Trash2, Plus, Calendar, Star, Bell, Settings as SettingsIcon,
  CheckCircle2, XCircle, ArrowRight, Download, Printer, Copy, Sparkles, AlertTriangle
} from 'lucide-react';

export default function UserDashboardView({ user, setUser, pastOrders, onReorder, onSelectFoodItem, wishlist, setWishlist, onTrackOrder }) {
  const [userTab, setUserTab] = useState('overview'); // 'overview' | 'profile' | 'orders' | 'wishlist' | 'addresses' | 'reservations' | 'reviews' | 'rewards' | 'notifications' | 'settings'

  // Profile Edit State
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: user?.name || 'Julian Vance',
    email: user?.email || 'julian.vance@gourmet.com',
    phone: user?.phone || '+1 (555) 234-5678',
    avatar: user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'
  });

  // Address Modal State
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({ type: 'Home', label: 'Home Residence', address: '', city: 'New York' });

  // Review Modal State
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ dishName: 'Truffle Wagyu Smash Burger', rating: 5, comment: '' });

  // Delete Account Modal State
  const [deleteAccountModalOpen, setDeleteAccountModalOpen] = useState(false);

  // Settings State
  const [userSettings, setUserSettings] = useState({
    theme: 'dark',
    language: 'English (US)',
    orderUpdatesEmail: true,
    promoSMS: false,
    reservationPush: true
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser(prev => ({ ...prev, ...profileForm }));
    setProfileModalOpen(false);
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    const addrObj = {
      id: `addr-${Date.now()}`,
      ...newAddress,
      isDefault: false
    };
    setUser(prev => ({ ...prev, savedAddresses: [...(prev.savedAddresses || []), addrObj] }));
    setAddressModalOpen(false);
  };

  const handleDeleteAddress = (id) => {
    setUser(prev => ({ ...prev, savedAddresses: prev.savedAddresses.filter(a => a.id !== id) }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Welcome & Wallet Header Banner */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-950/50 via-[#0E0E0E] to-[#0E0E0E]">
        <div className="flex items-center gap-5">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-amber-400 p-0.5 shadow-2xl shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Welcome back, {user?.name}
              </h1>
              <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-[10px] uppercase font-bold tracking-wider">
                {user?.membershipTier || 'Gold Connoisseur'}
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-1 font-mono">{user?.email} • {user?.phone}</p>
          </div>
        </div>

        {/* Balance & Points */}
        <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-center w-full md:w-auto justify-around">
          <div>
            <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider block">Gourmet Points</span>
            <span className="font-serif text-2xl text-amber-300 font-bold">{user?.loyaltyPoints || 1240} PTS</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10" />
          <div>
            <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider block">Wallet Balance</span>
            <span className="font-serif text-2xl text-emerald-400 font-bold">${(user?.walletBalance || 150.00).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* User Dashboard Navigation Bar */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-white/10 text-xs font-semibold scrollbar-none">
        {[
          { id: 'overview', label: 'Dashboard Overview', icon: ShoppingBag },
          { id: 'profile', label: 'My Profile', icon: User },
          { id: 'orders', label: 'My Orders', icon: Clock },
          { id: 'wishlist', label: 'Wishlist & Favorites', icon: Heart },
          { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
          { id: 'reservations', label: 'Table Reservations', icon: Calendar },
          { id: 'reviews', label: 'My Reviews', icon: Star },
          { id: 'rewards', label: 'Rewards & Coupons', icon: Gift },
          { id: 'notifications', label: 'Notifications', icon: Bell },
          { id: 'settings', label: 'User Settings', icon: SettingsIcon }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = userTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setUserTab(tab.id)}
              className={`px-4 py-2.5 rounded-2xl whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-400/10' : 'bg-white/5 text-neutral-300 hover:bg-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* USER TAB 1: OVERVIEW */}
      {userTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Recent Orders */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="font-serif text-xl font-medium text-white">Active & Recent Orders</h2>
              <button onClick={() => setUserTab('orders')} className="text-xs text-amber-300 font-bold hover:underline">
                View All Orders &rarr;
              </button>
            </div>

            <div className="space-y-4">
              {pastOrders?.map((ord) => (
                <div key={ord.id} className="glass-card p-5 rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono font-bold text-amber-400">Order #{ord.id}</span>
                      <span className="text-neutral-400 ml-3">{ord.createdAt}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">
                      {ord.status}
                    </span>
                  </div>

                  <div className="space-y-2 border-y border-white/5 py-3">
                    {ord.items?.map((it, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-white font-medium">{it.foodItem?.name || 'Gourmet Dish'} (x{it.quantity})</span>
                        <span className="font-mono text-neutral-400">${it.itemTotal?.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-serif text-lg text-amber-300 font-bold">
                      Total: ${ord.totalAmount?.toFixed(2)}
                    </span>
                    <button
                      onClick={() => onReorder(ord)}
                      className="px-4 py-2 rounded-xl bg-amber-400 text-black text-xs font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reorder 1-Click</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Favorites & Quick Perks */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
              <h3 className="font-serif text-lg font-medium text-white flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400 fill-current" />
                <span>Saved Wishlist Dishes</span>
              </h3>

              {wishlist?.length === 0 ? (
                <p className="text-xs text-neutral-500 italic">No dishes bookmarked yet.</p>
              ) : (
                <div className="space-y-3">
                  {wishlist?.map((fav) => (
                    <div
                      key={fav.id}
                      onClick={() => onSelectFoodItem(fav)}
                      className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img src={fav.image} alt={fav.name} className="w-10 h-10 rounded-xl object-cover" />
                        <div>
                          <span className="text-xs font-medium text-white block line-clamp-1">{fav.name}</span>
                          <span className="text-[10px] text-amber-300 font-mono">${fav.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      )}

      {/* USER TAB 2: MY PROFILE */}
      {userTab === 'profile' && (
        <div className="max-w-2xl space-y-6">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="font-serif text-xl font-bold text-white">Account Details</h3>
              <button
                onClick={() => setProfileModalOpen(true)}
                className="px-4 py-2 bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-300 transition-colors flex items-center gap-1.5"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400">Full Name</span>
                <span className="font-bold text-white">{user?.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400">Email Address</span>
                <span className="font-bold text-white">{user?.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400">Mobile Phone</span>
                <span className="font-bold text-white">{user?.phone}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-neutral-400">Membership Tier</span>
                <span className="font-bold text-amber-300">{user?.membershipTier || 'Gold Connoisseur'}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <button
                onClick={() => setDeleteAccountModalOpen(true)}
                className="text-xs text-rose-400 hover:underline flex items-center gap-1 font-bold"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Account & Data</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* USER TAB 3: MY ORDERS */}
      {userTab === 'orders' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="font-serif text-2xl font-medium text-white">Order History & Invoices</h2>
          </div>

          <div className="space-y-4">
            {pastOrders?.map((ord) => (
              <div key={ord.id} className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-mono font-bold text-amber-400 text-sm">Order #{ord.id}</span>
                    <span className="text-neutral-400 ml-3">{ord.createdAt}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">
                    {ord.status}
                  </span>
                </div>

                <div className="space-y-2 border-y border-white/5 py-3 text-xs">
                  {ord.items?.map((it, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-white">{it.foodItem?.name} (x{it.quantity})</span>
                      <span className="font-mono text-neutral-400">${it.itemTotal?.toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="font-serif text-lg font-bold text-amber-300">${ord.totalAmount?.toFixed(2)}</span>
                  <div className="flex gap-2">
                    <button onClick={() => onReorder(ord)} className="px-4 py-2 bg-amber-400 text-black font-bold text-xs uppercase rounded-xl hover:bg-amber-300">
                      Reorder
                    </button>
                    <button onClick={() => setReviewModalOpen(true)} className="px-3 py-2 bg-white/10 text-white font-bold text-xs uppercase rounded-xl hover:bg-white/20">
                      Rate Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* USER TAB 4: WISHLIST */}
      {userTab === 'wishlist' && (
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="font-serif text-2xl font-medium text-white">My Favorite Dishes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist?.map((item) => (
              <div key={item.id} className="glass-card p-4 rounded-3xl border border-white/10 space-y-3">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-2xl" />
                <h4 className="font-serif text-base font-bold text-white">{item.name}</h4>
                <div className="flex justify-between items-center font-mono text-amber-300 font-bold">
                  <span>${item.price}</span>
                  <button onClick={() => setWishlist(prev => prev.filter(w => w.id !== item.id))} className="text-xs text-rose-400 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* USER TAB 5: SAVED ADDRESSES */}
      {userTab === 'addresses' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="font-serif text-2xl font-medium text-white">Saved Delivery Residences</h2>
            <button onClick={() => setAddressModalOpen(true)} className="px-4 py-2 bg-amber-400 text-black font-bold text-xs uppercase rounded-xl hover:bg-amber-300">
              Add New Address
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {user?.savedAddresses?.map((addr) => (
              <div key={addr.id} className="glass-card p-6 rounded-3xl border border-white/10 space-y-3 relative">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-sm">{addr.label} ({addr.type})</span>
                  <button onClick={() => handleDeleteAddress(addr.id)} className="text-neutral-400 hover:text-rose-400">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-neutral-300">{addr.address}, {addr.city}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EDIT PROFILE MODAL */}
      {profileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#121212] border border-amber-500/30 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-xl font-bold text-white">Edit Profile Details</h3>
              <button onClick={() => setProfileModalOpen(false)} className="text-neutral-400 hover:text-white"><XCircle className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveProfile} className="space-y-3 text-xs">
              <div>
                <label className="text-neutral-300 block mb-1">Full Name</label>
                <input type="text" value={profileForm.name} onChange={e => setProfileForm({ ...profileForm, name: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>
              <div>
                <label className="text-neutral-300 block mb-1">Email</label>
                <input type="email" value={profileForm.email} onChange={e => setProfileForm({ ...profileForm, email: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>
              <div>
                <label className="text-neutral-300 block mb-1">Phone</label>
                <input type="text" value={profileForm.phone} onChange={e => setProfileForm({ ...profileForm, phone: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>
              <button type="submit" className="w-full py-3 bg-amber-400 text-black font-bold uppercase rounded-xl">Save Changes</button>
            </form>
          </div>
        </div>
      )}

      {/* ADD ADDRESS MODAL */}
      {addressModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#121212] border border-amber-500/30 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-xl font-bold text-white">Add Delivery Address</h3>
              <button onClick={() => setAddressModalOpen(false)} className="text-neutral-400 hover:text-white"><XCircle className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleAddAddress} className="space-y-3 text-xs">
              <div>
                <label className="text-neutral-300 block mb-1">Label (e.g. Penthouse, Office)</label>
                <input required type="text" value={newAddress.label} onChange={e => setNewAddress({ ...newAddress, label: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>
              <div>
                <label className="text-neutral-300 block mb-1">Street Address</label>
                <input required type="text" value={newAddress.address} onChange={e => setNewAddress({ ...newAddress, address: e.target.value })} className="w-full p-2.5 bg-white/5 border border-white/10 rounded-xl text-white" />
              </div>
              <button type="submit" className="w-full py-3 bg-amber-400 text-black font-bold uppercase rounded-xl">Save Address</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
