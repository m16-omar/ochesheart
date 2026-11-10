import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Governance & Independence',
      question: "Is Oche's Heart Foundation politically affiliated?",
      answer: "No. Oche's Heart Foundation is strictly a non-partisan, non-governmental humanitarian organization. While we actively promote democratic participation, voter turnout, and credible elections, we do not endorse or sponsor political candidates or parties.",
    },
    {
      category: 'Humanitarian Assistance',
      question: 'How are widows, orphans, and vulnerable families selected for relief?',
      answer: 'Our field teams collaborate directly with grassroots community heads, local ward committees, and faith leaders. We conduct on-site verifications and needs assessments to ensure aid directly reaches the most vulnerable without bias.',
    },
    {
      category: 'Volunteering',
      question: 'Can I volunteer if I live outside the state capital?',
      answer: 'Yes! We run decentralized community hubs and grassroots outreach drives across multiple states and local government areas. Volunteers can assist in distribution drives, civic literacy forums, social media advocacy, and event logistics.',
    },
    {
      category: 'Financial Accountability',
      question: 'How does the foundation ensure financial transparency?',
      answer: 'We believe that public trust is sacred. We maintain rigorous accounting records, independent project auditing, and periodic impact reports that show exactly how every resource is deployed to uplift beneficiaries.',
    },
    {
      category: 'Youth & Civic Education',
      question: 'What is the Youth Leadership Academy and how can young people join?',
      answer: 'The Youth Leadership Academy equips young adults with governance literacy, ethical leadership frameworks, and democratic advocacy skills. Enrollments are open semi-annually and publicized through our website and community partners.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FFFDF9] relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-100 text-[#C51E2E]">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Find clear answers to how we operate, our non-partisan stance, and how you can engage with our initiatives.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#C51E2E]/40 bg-[#FAF7F2] shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C51E2E]">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A192F] font-heading">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#C51E2E] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Have a question not listed here?</div>
              <div className="text-xs text-slate-600">Our liaison team is happy to assist you directly.</div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#0A192F] hover:bg-slate-800 text-white font-bold text-xs tracking-wider uppercase transition-colors shrink-0 shadow-sm"
          >
            Ask Us Anything
          </a>
        </div>

      </div>
    </section>
  );
};
