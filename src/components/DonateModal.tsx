import React, { useState } from 'react';
import { Heart, X, CheckCircle, Sparkles, Mail, ShieldCheck, HeartHandshake, Check } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('tier2');

  const tiers = [
    {
      id: 'tier1',
      title: 'Widow Nutrition Kit',
      amount: '₦15,000 / $10',
      description: 'Emergency food staples & essential hygiene supplies for a vulnerable widow.',
    },
    {
      id: 'tier2',
      title: 'Orphan School Supplies',
      amount: '₦35,000 / $25',
      description: 'Full term exercise books, school bag, uniforms, and learning aids.',
      popular: true,
    },
    {
      id: 'tier3',
      title: 'Civic & Voter Clinic',
      amount: '₦75,000 / $50',
      description: 'Constitutional literacy guides & townhall forum materials for 100 youth.',
    },
    {
      id: 'tier4',
      title: 'Community Development',
      amount: '₦150,000 / $100',
      description: 'Contributes to rural clean water borehole repair and community lighting.',
    },
  ];

  if (!isOpen) return null;

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl shadow-2xl border border-amber-100 overflow-hidden text-[#1E293B] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Crimson Banner */}
        <div className="relative bg-gradient-to-r from-[#C51E2E] via-[#A61423] to-[#0A192F] p-5 sm:p-6 text-white text-center shrink-0">
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="mx-auto w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-2 backdrop-blur-md shadow-inner">
            <Heart className="w-7 h-7 text-amber-300 fill-amber-300 animate-pulse" />
          </div>
          
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-400 text-slate-900 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Support Our Mission
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Oche's Heart Foundation
          </h3>
          <p className="text-[11px] sm:text-xs text-rose-100">
            Touching Lives • Empowering Citizens • Transforming Society
          </p>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Main prompt requirement notice */}
          <div className="text-center space-y-2">
            <h4 className="text-xl font-bold text-[#0A192F] font-heading">
              Thank you for your heart to give.
            </h4>
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-sm sm:text-base leading-snug">
              Donation details coming soon.
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We are currently finalizing our verified NGO banking rails and transparent donation gateway so you can contribute with total peace of mind.
            </p>
          </div>

          {/* Giving Tiers selector to see impact */}
          <div className="space-y-2 pt-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Select Your Intended Impact Area:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tiers.map((tier) => {
                const isSelected = selectedTier === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-3 rounded-2xl text-left border transition-all relative ${
                      isSelected
                        ? 'border-[#C51E2E] bg-rose-50/60 ring-2 ring-[#C51E2E]/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {tier.popular && (
                      <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-amber-400 text-slate-900">
                        Most Needed
                      </span>
                    )}
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-[#C51E2E] bg-[#C51E2E] text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </div>
                      <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                        {tier.title}
                      </div>
                    </div>
                    <div className="text-xs font-extrabold text-[#C51E2E] mt-1 pl-6">
                      {tier.amount}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 pl-6 leading-normal">
                      {tier.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Audited Transparency</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
              <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Direct Relief Delivery</span>
            </div>
          </div>

          {/* Stay Notified Form */}
          {!subscribed ? (
            <form onSubmit={handleNotifySubmit} className="space-y-2 pt-1">
              <label className="block text-xs font-semibold text-slate-700">
                Leave your email to receive our payment details the moment we launch:
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#D97706] hover:bg-[#B45309] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all shrink-0"
                >
                  Notify Me First
                </button>
              </div>
            </form>
          ) : (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>We'll notify {email} immediately once our online payment channels are open!</span>
            </div>
          )}

          {/* Action button */}
          <div className="pt-1 text-center">
            <button
              onClick={onClose}
              className="w-full py-3 px-6 rounded-xl font-bold bg-[#0A192F] hover:bg-slate-800 text-white transition-colors shadow-md text-xs sm:text-sm"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
