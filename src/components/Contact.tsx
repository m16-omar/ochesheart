import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-100 text-[#C51E2E]">
            Connect With Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight font-heading">
            Get in Touch With Our Team
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have inquiries about our programs, seek civic advice, or wish to recommend an intervention in your locality? We are here to listen and serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 bg-[#0A192F] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C51E2E]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Headquarters & Liaison</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                Oche's Heart Foundation
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Touching lives, empowering citizens, and transforming society through active civic stewardship.
              </p>

              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</div>
                    <a
                      href="mailto:info@ochesheartfoundation.org"
                      className="text-white hover:text-amber-300 font-medium text-sm sm:text-base transition-colors"
                    >
                      info@ochesheartfoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Line</div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      +234 (0) 800 624 3743 / +234 812 345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Liaison Office</div>
                    <p className="text-white font-medium text-sm sm:text-base leading-relaxed">
                      Plot 104 Civic Action Avenue, Central District, Abuja FCT, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Office Hours</div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Mon – Fri: 8:00 AM – 5:00 PM (WAT)
                    </p>
                  </div>
                </div>
              </div>

              {/* Motto Banner */}
              <div className="mt-8 p-4 rounded-2xl bg-white/10 border border-white/10 text-xs text-slate-200 italic">
                "Touching Lives. Empowering Citizens. Transforming Society."
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#0A192F] font-heading">
                Send Us a Message
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Fill in the details below and our secretarial desk will respond within 24 hours.
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-8 text-center space-y-4 bg-white rounded-2xl border border-emerald-200 shadow-sm animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 font-heading">
                  Message Sent Successfully!
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your correspondence has been routed to our correspondence team at <strong className="text-slate-900">info@ochesheartfoundation.org</strong>.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#0A192F] text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Oche Emmanuel"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. oche@example.org"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Subject / Area of Inquiry
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Humanitarian outreach in Benue community / Civic workshop"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full p-4 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-[#C51E2E] hover:bg-[#991321] text-white text-sm shadow-lg shadow-rose-900/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
