import React, { useState } from 'react';
import { UserCheck, Shield, ChevronDown, Sparkles, KeyRound, LogOut, User, Lock, Crown, Briefcase, ChefHat } from 'lucide-react';

export default function RoleSwitcherBar({ currentRole, onChangeRole, onOpenAuthModal, currentUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const roles = [
    { id: 'guest', label: 'Guest User', icon: User, color: 'bg-neutral-800 text-neutral-300 border-neutral-700', description: 'Browse menu & reserve tables' },
    { id: 'customer', label: 'Registered Customer', icon: UserCheck, color: 'bg-amber-500/20 text-amber-300 border-amber-500/30', description: 'User Dashboard, Wishlist, Orders' },
    { id: 'staff', label: 'Restaurant Staff / Chef', icon: ChefHat, color: 'bg-blue-500/20 text-blue-300 border-blue-500/30', description: 'Kitchen Display & Order Processing' },
    { id: 'manager', label: 'Branch Manager', icon: Briefcase, color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', description: 'Branch Inventory & Staffing' },
    { id: 'admin', label: 'System Admin', icon: Shield, color: 'bg-purple-500/20 text-purple-300 border-purple-500/30', description: 'Full Food, Category & Order CMS' },
    { id: 'superadmin', label: 'Super Admin', icon: Crown, color: 'bg-rose-500/20 text-rose-300 border-rose-500/30', description: 'Complete Revenue, Multi-branch & Settings' }
  ];

  const currentRoleObj = roles.find(r => r.id === currentRole) || roles[0];
  const CurrentIcon = currentRoleObj.icon;

  return (
    <div className="bg-gradient-to-r from-neutral-950 via-[#12110F] to-neutral-950 border-b border-amber-500/20 py-1.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-neutral-400 text-[11px] font-medium hidden sm:inline">Role Sandbox Mode:</span>
          
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold transition-all hover:scale-105 ${currentRoleObj.color}`}
            >
              <CurrentIcon className="w-3.5 h-3.5" />
              <span>{currentRoleObj.label}</span>
              <ChevronDown className="w-3 h-3 ml-0.5" />
            </button>

            {isOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                <div className="absolute left-0 mt-2 w-72 bg-[#121212] border border-amber-500/30 rounded-2xl shadow-2xl p-2 z-50 space-y-1">
                  <div className="px-3 py-1.5 border-b border-white/10 text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                    Switch Active Role
                  </div>
                  {roles.map(r => {
                    const RoleIcon = r.icon;
                    const isSelected = currentRole === r.id;
                    return (
                      <button
                        key={r.id}
                        onClick={() => {
                          onChangeRole(r.id);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left p-2 rounded-xl transition-all flex items-start gap-2.5 ${
                          isSelected ? 'bg-amber-400/20 border border-amber-400/50' : 'hover:bg-white/5'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${r.color}`}>
                          <RoleIcon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1">
                            {r.label}
                            {isSelected && <span className="text-[9px] bg-amber-400 text-black px-1.5 py-0.2 rounded font-mono font-bold">ACTIVE</span>}
                          </div>
                          <div className="text-[10px] text-neutral-400">{r.description}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-neutral-300 font-medium">
                Logged in as <strong className="text-amber-300 font-serif">{currentUser.name}</strong>
              </span>
              <button
                onClick={onOpenAuthModal}
                className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] text-white flex items-center gap-1 transition-colors"
              >
                <KeyRound className="w-3 h-3 text-amber-400" />
                <span>Auth / Login</span>
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuthModal}
              className="px-2.5 py-1 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-[11px] flex items-center gap-1 transition-colors"
            >
              <KeyRound className="w-3 h-3" />
              <span>Login / Sign Up</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
