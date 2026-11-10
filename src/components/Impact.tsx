import React from 'react';
import { Layers, Users2, Flag, CheckCircle, Heart, TrendingUp } from 'lucide-react';

interface ImpactProps {
  onOpenDonate: () => void;
}

export const Impact: React.FC<ImpactProps> = ({ onOpenDonate }) => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-[#0A192F] text-white relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C51E2E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-300/30">
            <TrendingUp className="w-3.5 h-3.5" />
            Impact & Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            Why Oche's Heart Foundation?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real impact is measured not just in promises, but in lives protected, citizens educated, and communities transformed from the ground up.
          </p>
        </div>

        {/* 3 Core Stats Cards (Exact Prompt Requirement: 6 Focus Areas, 100% Community Driven, 1 Mission) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Stat 1: 6 Focus Areas */}
          <div className="relative group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-300 text-center flex flex-col items-center justify-between">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-8 h-8" />
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-black text-amber-400 font-heading tracking-tight mb-2">
                6
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">
                Focus Areas
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Covering humanitarian relief, democracy, credible voting, youth leadership, civic rights, and local infrastructure.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 w-full text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Comprehensive Approach
            </div>
          </div>

          {/* Stat 2: 100% Community Driven */}
          <div className="relative group bg-gradient-to-b from-[#C51E2E]/30 to-black/40 backdrop-blur-md rounded-3xl p-8 border border-rose-500/40 hover:border-rose-400 transition-all duration-300 text-center flex flex-col items-center justify-between shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-[#C51E2E] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-rose-900/40">
              <Users2 className="w-8 h-8" />
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-black text-white font-heading tracking-tight mb-2">
                100%
              </div>
              <h3 className="text-xl font-bold text-rose-200 mb-2 font-heading">
                Community Driven
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Every project is planned, voiced, and executed in direct collaboration with local beneficiaries and grassroot leaders.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-500/30 w-full text-xs font-semibold text-rose-200 uppercase tracking-wider">
              People-Powered Delivery
            </div>
          </div>

          {/* Stat 3: 1 Mission */}
          <div className="relative group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 text-center flex flex-col items-center justify-between">
            <div className="w-16 h-16 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Flag className="w-8 h-8" />
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-black text-emerald-400 font-heading tracking-tight mb-2">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">
                Single Mission
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To improve lives through humanitarian interventions, promote civic education, and advocate good governance for all.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 w-full text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Unwavering Commitment
            </div>
          </div>

        </div>

        {/* Impact Highlights Grid */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Our Grassroots Footprint</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Building trust through direct action in our neighborhoods
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Rather than working from distant boardrooms, our teams deploy directly into markets, rural settlements, and youth hubs. We believe that an informed voter and an empowered mother form the foundation of a prosperous nation.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">Regular emergency nutrition & healthcare support for widows & orphans</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">Non-partisan voter sensitization clinics prior to elections</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">Leadership bootcamps for university and secondary school youth</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenDonate}
                  className="px-6 py-3 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm shadow-lg transition-colors flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Support Our Impact</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-3xl font-extrabold text-amber-400 font-heading">5,000+</div>
                <div className="text-xs text-slate-300 mt-1">Citizens Reached in Civic Forums</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-3xl font-extrabold text-rose-400 font-heading">1,200+</div>
                <div className="text-xs text-slate-300 mt-1">Families Supported with Aid</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-3xl font-extrabold text-emerald-400 font-heading">35+</div>
                <div className="text-xs text-slate-300 mt-1">Community Townhalls Held</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-3xl font-extrabold text-blue-400 font-heading">240+</div>
                <div className="text-xs text-slate-300 mt-1">Active Ground Volunteers</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
