import React from 'react';
import { Quote, Heart, ArrowRight } from 'lucide-react';

interface StoriesProps {
  onOpenDonate: () => void;
}

export const Stories: React.FC<StoriesProps> = ({ onOpenDonate }) => {
  const stories = [
    {
      title: 'Restoring Hope for 120 Widows',
      category: 'Humanitarian Relief',
      quote: "When we thought our community had been forgotten, Oche's Heart Foundation arrived with dignity packages and micro-capital to reopen our local trading cooperative.",
      author: 'Mama Grace A.',
      role: 'Beneficiary & Women Leader, Otukpo Community',
      image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=700&q=80',
      badge: 'Economic Resilience',
    },
    {
      title: 'Educating 3,500 Youth on Free & Peaceful Voting',
      category: 'Electoral Education',
      quote: "Before the civic clinic, many youths felt their votes didn't count. The workshop showed us that credible participation is our sacred democratic right.",
      author: 'Terna Benjamin',
      role: 'Youth Delegate, Benue Civic Forum',
      image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=700&q=80',
      badge: 'Peaceful Elections',
    },
    {
      title: 'Solar Lighting for Rural Health Post',
      category: 'Community Development',
      quote: "Providing emergency maternal care in darkness was terrifying. With solar power installed, our nurses can now deliver babies safely at any hour of the night.",
      author: 'Sister Faith E.',
      role: 'Community Health Nurse, Guma District',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=700&q=80',
      badge: 'Healthcare Access',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] relative border-b border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-100 text-[#C51E2E]">
            <Heart className="w-3.5 h-3.5 fill-[#C51E2E]" />
            Stories of Hope
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight font-heading">
            Voices From The Field
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Behind every number is a human life restored, a family nourished, and an informed citizen standing tall for democracy.
          </p>
        </div>

        {/* Stories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {stories.map((story) => (
            <div
              key={story.title}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 shadow-sm">
                    {story.category}
                  </span>
                  <span className="absolute bottom-3 left-4 text-xs font-semibold text-amber-300">
                    {story.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-bold text-[#0A192F] font-heading leading-snug">
                    {story.title}
                  </h3>

                  <div className="relative pt-2">
                    <Quote className="w-8 h-8 text-rose-200/80 absolute -top-1 -left-2 -z-0" />
                    <p className="relative text-slate-600 text-sm leading-relaxed italic z-10">
                      "{story.quote}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Author Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <div className="text-sm font-bold text-slate-900 font-heading">
                  {story.author}
                </div>
                <div className="text-xs text-slate-500">
                  {story.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center">
          <button
            onClick={onOpenDonate}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold bg-[#D97706] hover:bg-[#B45309] text-white shadow-lg shadow-amber-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Help Us Write More Success Stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
