import React from 'react';
import { Eye, Target, Compass, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF7F2] relative overflow-hidden border-y border-rose-100/50">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-100 text-[#C51E2E]">
            <Compass className="w-3.5 h-3.5" />
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight font-heading">
            Dedicated to Dignity, Democracy & Development
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Oche's Heart Foundation is an independent civic and humanitarian organization founded on the principle that sustainable community transformation requires both compassionate humanitarian intervention and empowered civic consciousness.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          
          {/* Card 1: Vision */}
          <div className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-rose-100 hover:border-[#C51E2E]/40 transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C51E2E] to-[#D97706] rounded-t-3xl" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-[#C51E2E] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C51E2E] group-hover:text-white transition-all duration-300 shadow-sm">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pillar I</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-4 font-heading flex items-center gap-2">
              Our Vision
            </h3>
            
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              A society where every individual enjoys <strong className="text-[#C51E2E] font-semibold">dignity</strong>, <strong className="text-slate-900 font-semibold">equal opportunities</strong>, <strong className="text-[#0A192F] font-semibold">responsible leadership</strong>, <strong className="text-[#D97706] font-semibold">democratic participation</strong> and <strong className="text-slate-900 font-semibold">social justice</strong>.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#C51E2E]"></span>
              <span>Long-term systemic impact for every citizen</span>
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-100 hover:border-[#0A192F]/40 transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0A192F] via-[#1E2E4F] to-[#D97706] rounded-t-3xl" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-[#0A192F] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0A192F] group-hover:text-white transition-all duration-300 shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pillar II</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A192F] mb-4 font-heading flex items-center gap-2">
              Our Mission
            </h3>
            
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              To improve lives through <strong className="text-[#C51E2E] font-semibold">humanitarian interventions</strong>, promote <strong className="text-slate-900 font-semibold">civic education</strong>, strengthen <strong className="text-[#0A192F] font-semibold">democratic participation</strong>, encourage <strong className="text-[#D97706] font-semibold">credible elections</strong> and advocate <strong className="text-slate-900 font-semibold">transparency, accountability and good governance</strong>.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#0A192F]"></span>
              <span>Action-oriented fieldwork and community upliftment</span>
            </div>
          </div>

        </div>

        {/* 3 Core Principles Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-slate-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">Integrity & Accountability</h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Strict adherence to transparency in all our humanitarian relief and resource deployment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-slate-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#C51E2E] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">Compassionate Service</h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Putting the vulnerable—widows, orphans, and disadvantaged communities—at the center.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-slate-200/60 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0A192F] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm font-heading">Civic Empowerment</h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Equipping young minds and citizens to demand good governance and participate actively.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

