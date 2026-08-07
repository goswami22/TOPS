import React, { useState } from 'react';
import { X, KeyRound, Mail, Lock, User, Phone, ShieldCheck, Sparkles, CheckCircle2, AlertCircle, Chrome, Apple, Facebook } from 'lucide-react';

export default function AuthRoleModal({ isOpen, onClose, currentRole, onLoginSuccess }) {
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup' | 'forgot' | 'otp'
  const [selectedRoleTab, setSelectedRoleTab] = useState(currentRole || 'customer');

  const [formData, setFormData] = useState({
    name: 'Julian Vance',
    email: 'julian.vance@gourmet.com',
    phone: '+1 (555) 234-5678',
    password: '••••••••',
    otp: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState('');

  if (!isOpen) return null;

  const handleRoleSelect = (role) => {
    setSelectedRoleTab(role);
    if (role === 'admin' || role === 'superadmin') {
      setFormData(prev => ({ ...prev, email: 'admin@savoria.com' }));
    } else if (role === 'staff' || role === 'manager') {
      setFormData(prev => ({ ...prev, email: 'manager@savoria.com' }));
    } else {
      setFormData(prev => ({ ...prev, email: 'julian.vance@gourmet.com' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'login' || authMode === 'signup') {
      setNoticeMessage(`Successfully authenticated as ${selectedRoleTab.toUpperCase()}! JWT Token issued.`);
      setTimeout(() => {
        onLoginSuccess({
          name: formData.name || 'Julian Vance',
          email: formData.email,
          phone: formData.phone,
          role: selectedRoleTab
        });
        onClose();
      }, 1000);
    } else if (authMode === 'forgot') {
      setOtpSent(true);
      setAuthMode('otp');
    } else if (authMode === 'otp') {
      setNoticeMessage('OTP verified successfully! Password reset unlocked.');
      setTimeout(() => setAuthMode('login'), 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#121212] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-medium text-white">
            {authMode === 'login' && 'Authentication Portal'}
            {authMode === 'signup' && 'Create Gourmet Account'}
            {authMode === 'forgot' && 'Reset Password'}
            {authMode === 'otp' && 'Verify Security OTP'}
          </h3>
          <p className="text-xs text-neutral-400">
            Select a target role and authenticate securely with JWT sessions.
          </p>
        </div>

        {/* Role Quick Selector Tabs */}
        <div className="p-1 rounded-xl bg-white/5 border border-white/10 grid grid-cols-3 gap-1 text-[11px] font-semibold text-center">
          <button
            onClick={() => handleRoleSelect('customer')}
            className={`py-1.5 rounded-lg transition-all ${
              selectedRoleTab === 'customer' ? 'bg-amber-400 text-black shadow-md' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => handleRoleSelect('manager')}
            className={`py-1.5 rounded-lg transition-all ${
              selectedRoleTab === 'manager' || selectedRoleTab === 'staff' ? 'bg-emerald-400 text-black shadow-md' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Staff / Manager
          </button>
          <button
            onClick={() => handleRoleSelect('admin')}
            className={`py-1.5 rounded-lg transition-all ${
              selectedRoleTab === 'admin' || selectedRoleTab === 'superadmin' ? 'bg-purple-400 text-black shadow-md' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Admin / SuperAdmin
          </button>
        </div>

        {noticeMessage && (
          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{noticeMessage}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {authMode === 'signup' && (
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-neutral-300">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  placeholder="Julian Vance"
                />
              </div>
            </div>
          )}

          {(authMode === 'login' || authMode === 'signup' || authMode === 'forgot') && (
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-neutral-300">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  placeholder="julian@gourmet.com"
                />
              </div>
            </div>
          )}

          {authMode === 'signup' && (
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-neutral-300">Mobile Phone</label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  placeholder="+1 (555) 234-5678"
                />
              </div>
            </div>
          )}

          {(authMode === 'login' || authMode === 'signup') && (
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-medium text-neutral-300">Password</label>
                {authMode === 'login' && (
                  <button
                    type="button"
                    onClick={() => setAuthMode('forgot')}
                    className="text-[10px] text-amber-300 hover:underline"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          {authMode === 'otp' && (
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-neutral-300">Enter 6-Digit OTP Sent to Email</label>
              <input
                type="text"
                required
                maxLength={6}
                value={formData.otp}
                onChange={e => setFormData({ ...formData, otp: e.target.value })}
                className="w-full text-center tracking-[0.5em] py-3 bg-white/5 border border-amber-400/50 rounded-xl text-lg font-mono text-amber-300 focus:outline-none"
                placeholder="123456"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase text-xs tracking-wider transition-colors shadow-lg"
          >
            {authMode === 'login' && `Login as ${selectedRoleTab.toUpperCase()}`}
            {authMode === 'signup' && 'Create Account & Sign In'}
            {authMode === 'forgot' && 'Send Security OTP'}
            {authMode === 'otp' && 'Verify OTP Code'}
          </button>
        </form>

        {/* Social Logins */}
        {authMode === 'login' && (
          <div className="space-y-3 pt-2 border-t border-white/10">
            <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider block text-center">
              Or Fast Social Sign-In
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleRoleSelect('customer')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xs font-medium text-neutral-300 gap-1.5"
              >
                <Chrome className="w-3.5 h-3.5 text-rose-400" />
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect('customer')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xs font-medium text-neutral-300 gap-1.5"
              >
                <Apple className="w-3.5 h-3.5 text-white" />
                <span>Apple</span>
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect('customer')}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xs font-medium text-neutral-300 gap-1.5"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                <span>Facebook</span>
              </button>
            </div>
          </div>
        )}

        {/* Footer Toggle Mode */}
        <div className="text-center text-xs text-neutral-400">
          {authMode === 'login' ? (
            <span>
              Don't have an account?{' '}
              <button onClick={() => setAuthMode('signup')} className="text-amber-300 font-bold hover:underline">
                Sign Up
              </button>
            </span>
          ) : (
            <span>
              Already registered?{' '}
              <button onClick={() => setAuthMode('login')} className="text-amber-300 font-bold hover:underline">
                Log In
              </button>
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
