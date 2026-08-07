import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Tag, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onProceedToCheckout,
  appliedOffer,
  onApplyCoupon,
  onRemoveCoupon
}) {
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [tipAmount, setTipAmount] = useState(5);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.itemTotal, 0);
  
  let discount = 0;
  if (appliedOffer) {
    if (appliedOffer.discountPercentage) {
      discount = (subtotal * appliedOffer.discountPercentage) / 100;
      if (appliedOffer.maxDiscount && discount > appliedOffer.maxDiscount) {
        discount = appliedOffer.maxDiscount;
      }
    } else if (appliedOffer.discountFixed) {
      discount = appliedOffer.discountFixed;
    }
  }

  const deliveryFee = subtotal > 50 || subtotal === 0 ? 0 : 5.00;
  const tax = subtotal * 0.08;
  const total = Math.max(0, subtotal - discount + deliveryFee + tax + tipAmount);

  const handleApply = (e) => {
    e.preventDefault();
    setCouponError('');
    if (!couponCode.trim()) return;

    const res = onApplyCoupon(couponCode.trim().toUpperCase());
    if (!res.success) {
      setCouponError(res.message || 'Invalid promo code');
    } else {
      setCouponCode('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
      />

      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="pointer-events-auto w-screen max-w-md glass-card bg-[#0D0D0D] border-l border-white/10 flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="font-serif text-xl font-medium text-white">
                Your Dining Cart
              </h2>
              <span className="text-xs font-mono text-neutral-400">
                ({cartItems.length} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-white/5">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                <ShoppingBag className="w-12 h-12 text-neutral-600 stroke-1" />
                <p className="font-serif text-lg text-neutral-300">Your cart is empty</p>
                <p className="text-xs text-neutral-500 max-w-xs">
                  Explore our michelin-inspired dishes and artisanal pizzas to build your feast.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-start">
                  <img
                    src={item.foodItem.image}
                    alt={item.foodItem.name}
                    className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif text-sm font-medium text-white truncate">
                        {item.foodItem.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-neutral-500 hover:text-rose-400 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Selected add-ons */}
                    {item.selectedAddOns?.length > 0 && (
                      <p className="text-[10px] text-amber-300/80 font-mono line-clamp-1">
                        + {item.selectedAddOns.map(a => a.name).join(', ')}
                      </p>
                    )}

                    <div className="mt-2 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="text-neutral-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold text-white w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="text-neutral-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif font-bold text-sm text-amber-400">
                        ${item.itemTotal.toFixed(2)}
                      </span>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Coupon Code & Summary Section */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 space-y-4 bg-neutral-950/80">
              
              {/* Promo Code Input */}
              <div>
                {appliedOffer ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs">
                    <div className="flex items-center gap-2 text-amber-300 font-mono">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{appliedOffer.code} Applied</span>
                    </div>
                    <button
                      onClick={onRemoveCoupon}
                      className="text-neutral-400 hover:text-rose-400 text-[10px] uppercase font-bold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Promo Code (e.g. SAVORVIP30)"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-300"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-rose-400 mt-1">{couponError}</p>
                )}
              </div>

              {/* Tip Selector */}
              <div>
                <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider block mb-1">
                  Courier Courier Tip
                </span>
                <div className="grid grid-cols-4 gap-1.5 text-xs">
                  {[3, 5, 8, 12].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setTipAmount(amt)}
                      className={`py-1.5 rounded-lg border text-center font-mono ${
                        tipAmount === amt
                          ? 'bg-amber-400 text-black border-amber-400 font-bold'
                          : 'bg-white/5 border-white/10 text-neutral-300'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs text-neutral-300 pt-2 border-t border-white/5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono">${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-amber-400">
                    <span>Discount</span>
                    <span className="font-mono">-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-mono">
                    {deliveryFee === 0 ? <span className="text-emerald-400">FREE</span> : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-mono">${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between font-bold text-base text-white pt-2 border-t border-white/10">
                  <span>Total Due</span>
                  <span className="font-serif text-amber-300 text-xl">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Proceed Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout({ subtotal, discount, deliveryFee, tax, tipAmount, total });
                }}
                className="w-full py-4 rounded-xl bg-amber-400 text-black font-bold uppercase text-xs tracking-widest hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Checkout Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
