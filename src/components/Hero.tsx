import React from 'react';
import { Heart, Users, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate, onOpenVolunteer }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-rose-100/60 via-amber-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-[#C51E2E] text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#C51E2E] animate-ping" />
              <Heart className="w-3.5 h-3.5 fill-[#C51E2E]" />
              <span>Oche's Heart Foundation • Non-Governmental Organization</span>
            </div>

            {/* Big Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A192F] tracking-tight leading-[1.15] font-heading">
              Touching <span className="text-[#C51E2E]">Lives.</span><br />
              Empowering <span className="text-[#D97706]">Citizens.</span><br />
              Transforming <span className="text-[#0A192F] underline decoration-[#C51E2E]/40 decoration-wavy decoration-2">Society.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              A society where every individual enjoys <strong className="text-slate-800 font-semibold">dignity</strong>, <strong className="text-slate-800 font-semibold">equal opportunities</strong>, <strong className="text-slate-800 font-semibold">responsible leadership</strong>, <strong className="text-slate-800 font-semibold">democratic participation</strong> and <strong className="text-slate-800 font-semibold">social justice</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenDonate}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold bg-[#D97706] hover:bg-[#B45309] text-white shadow-lg shadow-amber-600/30 hover:shadow-amber-600/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <Heart className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVolunteer}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold bg-[#0A192F] hover:bg-slate-800 text-white shadow-md shadow-slate-900/15 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <Users className="w-5 h-5 text-amber-300" />
                <span>Become a Volunteer</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Widow & Orphan Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#C51E2E] shrink-0" />
                <span>Credible Civic Education</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Youth Leadership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Image with Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[4/4.2]">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                  alt="African community members and children smiling together in solidarity and support"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle gradient overlay at bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Quote in Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <p className="text-xs sm:text-sm font-medium italic">
                    "Every hand extended in love creates ripples of social justice across our nation."
                  </p>
                  <p className="text-[11px] font-bold text-amber-300 mt-1 uppercase tracking-wider">
                    — Community Outreach Team
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: 100% Community Driven */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#C51E2E] flex items-center justify-center">
                  <Heart className="w-5 h-5 fill-[#C51E2E]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0A192F] uppercase tracking-wider">Grassroots First</div>
                  <div className="text-base sm:text-lg font-black text-[#C51E2E]">100% Driven</div>
                </div>
              </div>

              {/* Floating Badge 2: 6 Focus Areas */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-[#0A192F] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-black">
                  6
                </div>
                <div>
                  <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Key Pillars</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-100">Humanitarian & Civic</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

