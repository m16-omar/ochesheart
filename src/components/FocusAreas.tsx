import React from 'react';
import { 
  HeartHandshake, 
  Scale, 
  Vote, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  ArrowRight
} from 'lucide-react';

interface FocusAreasProps {
  onSelectArea?: (title: string) => void;
  onOpenDonate: () => void;
}

export const FocusAreas: React.FC<FocusAreasProps> = ({ onOpenDonate }) => {
  const focusList = [
    {
      id: 'humanitarian',
      title: 'Humanitarian Services',
      description: 'Support for widows, orphans, vulnerable families and disadvantaged communities.',
      details: 'Food drives, healthcare assistance, educational scholarships for orphans, and direct economic livelihood support for widows.',
      icon: HeartHandshake,
      color: 'from-rose-500 to-red-600',
      tag: 'Compassion & Care',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'democracy',
      title: 'Democracy and Governance',
      description: 'Promote transparency, accountability and responsible leadership.',
      details: 'Town hall forums, public budget monitoring, anti-corruption advocacy, and citizen scorecards for elected public officials.',
      icon: Scale,
      color: 'from-blue-600 to-indigo-700',
      tag: 'Accountability',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'electoral',
      title: 'Electoral Education',
      description: 'Encourage peaceful, credible, free and fair elections.',
      details: 'Voter registration sensitisation, violence prevention campaigns, grassroots voter turnout drives, and election integrity workshops.',
      icon: Vote,
      color: 'from-amber-500 to-yellow-600',
      tag: 'Free & Fair Voting',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'youth',
      title: 'Youth Empowerment',
      description: 'Build leadership capacity and encourage youth participation in governance.',
      details: 'Young political leadership academies, digital advocacy bootcamps, grassroots mentorship, and civic entrepreneurship grants.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-600',
      tag: 'Future Leaders',
      image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'civic',
      title: 'Civic Education',
      description: 'Educate citizens on their rights, responsibilities and democratic values.',
      details: 'Constitutional literacy toolkits, rights awareness in local languages, community radio debates, and high school civic clubs.',
      icon: GraduationCap,
      color: 'from-emerald-500 to-teal-600',
      tag: 'Informed Citizens',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'community',
      title: 'Community Development',
      description: 'Support initiatives that improve living conditions and create opportunities.',
      details: 'Clean water boreholes, community sanitation, solar lighting for rural markets, and micro-infrastructure self-help projects.',
      icon: Building2,
      color: 'from-cyan-600 to-blue-700',
      tag: 'Sustainable Progress',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <section id="focus" className="py-20 md:py-28 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 text-[#D97706]">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight font-heading">
            Our 6 Core Areas of Focus
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every initiative at Oche's Heart Foundation is tailored to meet immediate humanitarian crises while building enduring structures for civic freedom and prosperity.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF7F2] rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#C51E2E]/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                {/* Image Header with Tag */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm">
                    {item.tag}
                  </span>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white text-[#C51E2E] shadow-lg flex items-center justify-center group-hover:bg-[#C51E2E] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] font-heading group-hover:text-[#C51E2E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm leading-normal pt-1 border-t border-slate-200/60">
                      {item.details}
                    </p>
                  </div>

                  {/* Card Footer action */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenDonate}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C51E2E] hover:text-[#991321] transition-colors"
                    >
                      <span>Support This Cause</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner within Focus */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0A192F] via-[#152544] to-[#C51E2E] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl sm:text-3xl font-bold font-heading">
              Have a grassroots project in need of partnership?
            </h4>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl">
              We work closely with community leaders, local faith groups, and youth coalitions across regions.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm shadow-md transition-all duration-200 shrink-0 transform hover:scale-105"
          >
            Reach Out to Our Team
          </a>
        </div>

      </div>
    </section>
  );
};

