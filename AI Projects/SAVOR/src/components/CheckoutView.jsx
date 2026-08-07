import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Truck, 
  Store, 
  UtensilsCrossed, 
  MapPin, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';

export default function CheckoutView({ 
  cartItems, 
  totals, 
  user, 
  onPlaceOrderSuccess, 
  onBackToMenu 
}) {
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'pickup' | 'dinein'
  const [selectedAddress, setSelectedAddress] = useState(user?.savedAddresses?.[0]?.address || '432 Park Ave, Apt 62B, New York, NY');
  const [newAddress, setNewAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-medium text-white">Your Cart is Empty</h2>
        <p className="text-neutral-400 text-sm">Please add dishes to your cart before proceeding to checkout.</p>
        <button
          onClick={onBackToMenu}
          className="px-6 py-3 bg-amber-400 text-black font-bold uppercase text-xs tracking-wider rounded-xl hover:bg-amber-300"
        >
          Explore Menu
        </button>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    setIsSubmitting(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback if confetti fails
    }

    setTimeout(() => {
      const newOrder = {
        id: `SVR-${Math.floor(100000 + Math.random() * 900000)}`,
        items: cartItems,
        subtotal: totals?.subtotal || 0,
        discountAmount: totals?.discount || 0,
        deliveryFee: totals?.deliveryFee || 0,
        tax: totals?.tax || 0,
        tipAmount: totals?.tipAmount || 0,
        totalAmount: totals?.total || 0,
        status: 'accepted',
        orderType,
        deliveryAddress: orderType === 'delivery' ? (newAddress || selectedAddress) : undefined,
        pickupTime: orderType === 'pickup' ? '20 mins from now' : undefined,
        paymentMethod: paymentMethod === 'card' ? 'Visa ending in 4242' : paymentMethod,
        estimatedArrivalMinutes: 30,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        driverName: "Antoine Moreau",
        driverPhone: "+1 (555) 019-2831",
        driverPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        driverVehicle: "Black Tesla Model Y (NY-9281)"
      };

      setIsSubmitting(false);
      onPlaceOrderSuccess(newOrder);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-2">
          Secure Gourmet Checkout
        </h1>
        <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
          SAVOR. Executive Culinary Fulfillment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Steps Form */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Step 1: Fulfillment Mode */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center text-[10px]">1</span>
              <span>Select Order Fulfillment</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setOrderType('delivery')}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between space-y-2 transition-all ${
                  orderType === 'delivery'
                    ? 'bg-amber-400/15 border-amber-400 text-white'
                    : 'bg-white/5 border-white/10 text-neutral-400 hover:border-white/20'
                }`}
              >
                <Truck className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-xs font-bold text-white block">Home Delivery</span>
                  <span className="text-[10px] text-neutral-400">25 - 35 mins estimated</span>
                </div>
              </button>

              <button
                onClick={() => setOrderType('pickup')}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between space-y-2 transition-all ${
                  orderType === 'pickup'
                    ? 'bg-amber-400/15 border-amber-400 text-white'
                    : 'bg-white/5 border-white/10 text-neutral-400 hover:border-white/20'
                }`}
              >
                <Store className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-xs font-bold text-white block">Outlet Pickup</span>
                  <span className="text-[10px] text-neutral-400">Manhattan Flagship (15 mins)</span>
                </div>
              </button>

              <button
                onClick={() => setOrderType('dinein')}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between space-y-2 transition-all ${
                  orderType === 'dinein'
                    ? 'bg-amber-400/15 border-amber-400 text-white'
                    : 'bg-white/5 border-white/10 text-neutral-400 hover:border-white/20'
                }`}
              >
                <UtensilsCrossed className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="text-xs font-bold text-white block">Table Ordering</span>
                  <span className="text-[10px] text-neutral-400">Direct to your reserved table</span>
                </div>
              </button>
            </div>
          </div>

          {/* Step 2: Address / Location Details */}
          {orderType === 'delivery' && (
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center text-[10px]">2</span>
                <span>Delivery Address</span>
              </h3>

              <div className="space-y-3">
                {user?.savedAddresses?.map((addr) => (
                  <button
                    key={addr.id}
                    onClick={() => { setSelectedAddress(addr.address); setNewAddress(''); }}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                      selectedAddress === addr.address && !newAddress
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white block">{addr.label}</span>
                        <span className="text-neutral-400">{addr.address}</span>
                      </div>
                    </div>
                    {selectedAddress === addr.address && !newAddress && (
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    )}
                  </button>
                ))}

                <div>
                  <label className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                    Or Enter A New Address
                  </label>
                  <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="e.g. 100 Hudson St, Suite 4A, New York, NY"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Payment Method */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center text-[10px]">3</span>
              <span>Payment Option</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'card', name: 'Credit Card (Visa/Amex)', desc: '•••• 4242' },
                { id: 'apple', name: 'Apple Pay', desc: 'Instant Touch ID' },
                { id: 'cod', name: 'Gourmet Gold Pay', desc: 'Balance: $450.00' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPaymentMethod(p.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    paymentMethod === p.id
                      ? 'bg-amber-400/15 border-amber-400 text-white'
                      : 'bg-white/5 border-white/10 text-neutral-400 hover:border-white/20'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-amber-400 mb-2" />
                  <span className="text-xs font-bold text-white block">{p.name}</span>
                  <span className="text-[10px] text-neutral-400">{p.desc}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Summary Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-5 sticky top-24 bg-[#0F0F0F]">
            <h3 className="font-serif text-lg font-medium text-white border-b border-white/10 pb-3">
              Order Receipt
            </h3>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white font-medium">{item.foodItem.name}</span>
                    <span className="text-neutral-500 block font-mono">x{item.quantity}</span>
                  </div>
                  <span className="font-serif font-bold text-amber-300">
                    ${item.itemTotal.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-neutral-300 pt-3 border-t border-white/10">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono">${totals?.subtotal.toFixed(2)}</span>
              </div>
              {totals?.discount > 0 && (
                <div className="flex justify-between text-amber-400">
                  <span>Promo Discount</span>
                  <span className="font-mono">-${totals.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-mono">${totals?.deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax & Tip</span>
                <span className="font-mono">${((totals?.tax || 0) + (totals?.tipAmount || 0)).toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-bold text-base text-white pt-3 border-t border-white/10">
                <span>Total Amount</span>
                <span className="font-serif text-amber-300 text-2xl">
                  ${totals?.total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              onClick={handlePlaceOrder}
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-amber-400 text-black font-bold uppercase text-xs tracking-widest hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Confirming Gourmet Order...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorize & Place Order</span>
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-neutral-500 font-mono">
              30-Min Freshness Guarantee • Encrypted 256-bit SSL
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}
