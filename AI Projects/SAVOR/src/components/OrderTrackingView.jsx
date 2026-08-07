import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ChefHat, 
  Flame, 
  PackageCheck, 
  Bike, 
  Home, 
  PhoneCall, 
  Clock, 
  MapPin, 
  ShoppingBag,
  RotateCcw
} from 'lucide-react';

export default function OrderTrackingView({ order, onReorder, onBackToMenu }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(2); // Start at "Cooking"
  const [timeLeft, setTimeLeft] = useState(28);

  const steps = [
    { id: 'accepted', label: 'Order Accepted', icon: CheckCircle, time: '04:15 PM' },
    { id: 'preparing', label: 'Sous Chef Prep', icon: ChefHat, time: '04:18 PM' },
    { id: 'cooking', label: 'Woodfire & Grill', icon: Flame, time: 'In Progress' },
    { id: 'packed', label: 'Insulated Packing', icon: PackageCheck, time: 'Pending' },
    { id: 'out_for_delivery', label: 'Courier En Route', icon: Bike, time: 'Pending' },
    { id: 'delivered', label: 'Delivered', icon: Home, time: 'Pending' }
  ];

  useEffect(() => {
    // Simulated timer step progression for demo feel
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(1, prev - 1));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-medium text-white">No Active Order</h2>
        <p className="text-neutral-400 text-sm">Place an order to experience real-time culinary tracking.</p>
        <button
          onClick={onBackToMenu}
          className="px-6 py-3 bg-amber-400 text-black font-bold uppercase text-xs tracking-wider rounded-xl hover:bg-amber-300"
        >
          Explore Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Banner */}
      <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 mb-8 bg-[#0F0F0F]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] uppercase font-bold tracking-wider border border-amber-500/30">
              Live Order #{order.id}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-white mt-2">
              Preparing Your Culinary Masterpiece
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              Estimated Arrival: <span className="text-amber-300 font-bold font-mono">{timeLeft} Minutes</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentStepIndex((prev) => (prev + 1) % steps.length)}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-neutral-300 border border-white/15"
              title="Simulate next tracking state"
            >
              Advance Tracking State Demo
            </button>
          </div>
        </div>

        {/* Live Stepper Timeline */}
        <div className="pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 relative">
            
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isDone = idx <= currentStepIndex;
              const isCurrent = idx === currentStepIndex;

              return (
                <div key={step.id} className="flex flex-col items-center text-center space-y-2 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all border ${
                    isDone 
                      ? 'bg-amber-400 text-black border-amber-400 shadow-lg shadow-amber-400/20' 
                      : 'bg-white/5 text-neutral-600 border-white/10'
                  } ${isCurrent ? 'ring-4 ring-amber-400/30 animate-pulse' : ''}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <span className={`text-xs font-bold block ${isDone ? 'text-white' : 'text-neutral-500'}`}>
                      {step.label}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono block">
                      {isCurrent ? `${timeLeft}m left` : isDone ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Assigned Courier Card */}
        <div className="md:col-span-5 glass-card p-6 rounded-2xl border border-white/10 space-y-4">
          <h3 className="font-serif text-lg font-medium text-white">
            Assigned Personal Courier
          </h3>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <img
              src={order.driverPhoto}
              alt={order.driverName}
              className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-serif text-base text-white font-medium truncate">
                {order.driverName}
              </h4>
              <p className="text-xs text-amber-300 font-mono">{order.driverVehicle}</p>
              <p className="text-[10px] text-neutral-400">Temp-Controlled Vault Driver</p>
            </div>
          </div>

          <a
            href={`tel:${order.driverPhone}`}
            className="w-full py-3 rounded-xl bg-amber-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Driver ({order.driverPhone})</span>
          </a>

          <div className="pt-4 border-t border-white/10 text-xs text-neutral-300 space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-neutral-400 uppercase font-bold block">Delivery Target</span>
                <span>{order.deliveryAddress || 'Penthouse Residence, 432 Park Ave'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Receipt Details */}
        <div className="md:col-span-7 glass-card p-6 rounded-2xl border border-white/10 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/10">
            <h3 className="font-serif text-lg font-medium text-white">
              Dish Items
            </h3>
            <span className="text-xs font-mono text-amber-400">
              Paid via {order.paymentMethod}
            </span>
          </div>

          <div className="space-y-3 max-h-60 overflow-y-auto">
            {order.items?.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-3">
                  <img src={item.foodItem.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                  <div>
                    <span className="text-white font-medium block">{item.foodItem.name}</span>
                    <span className="text-neutral-400 font-mono text-[10px]">Qty: {item.quantity}</span>
                  </div>
                </div>
                <span className="font-serif text-amber-300 font-bold">
                  ${item.itemTotal.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-bold block">Total Paid</span>
              <span className="font-serif text-2xl text-amber-300 font-bold">${order.totalAmount.toFixed(2)}</span>
            </div>

            <button
              onClick={() => onReorder(order)}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>Reorder Again</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
