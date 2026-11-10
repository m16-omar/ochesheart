import React, { useState } from 'react';
import { X, CheckCircle2, HeartHandshake, User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'volunteer' | 'partner';
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose, type = 'volunteer' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interest: 'Humanitarian Services',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const isPartner = type === 'partner';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-[#1E293B] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#0A192F] via-[#1E2E4F] to-[#C51E2E] p-6 text-white text-left shrink-0">
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-300/30">
              {isPartner ? <Briefcase className="w-5 h-5" /> : <HeartHandshake className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                {isPartner ? 'Collaborate With Us' : 'Join Our Hands On The Ground'}
              </span>
              <h3 className="text-2xl font-bold font-heading">
                {isPartner ? 'Partner With Us' : 'Become a Volunteer'}
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-200">
            {isPartner
              ? 'Join hands with Oche’s Heart Foundation to amplify civic good and humanitarian reach.'
              : 'Help us deliver relief, conduct voter clinics, and mentor upcoming civic leaders.'}
          </p>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-heading">
                Thank You, {formData.name || 'Friend'}!
              </h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                Your application to {isPartner ? 'partner with' : 'volunteer for'} Oche's Heart Foundation has been received. Our community coordinator will reach out to you at <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#C51E2E] hover:bg-[#991321] text-white font-medium rounded-xl text-sm transition-colors shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isPartner ? 'Organization / Representative Name' : 'Full Name'} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isPartner ? 'e.g. Civic Action Initiative' : 'e.g. John Doe'}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.org"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 ..."
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City / State</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Abuja, Benue, Lagos"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Area of Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white"
                  >
                    <option value="Humanitarian Services">Humanitarian Services</option>
                    <option value="Democracy and Governance">Democracy & Governance</option>
                    <option value="Electoral Education">Electoral Education</option>
                    <option value="Youth Empowerment">Youth Empowerment</option>
                    <option value="Civic Education">Civic Education</option>
                    <option value="Community Development">Community Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isPartner ? 'Tell us how you would like to collaborate' : 'Briefly tell us how you would like to help'}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={isPartner ? 'Describe your organization and proposed joint initiative...' : 'Any previous experience, skills, or available hours...'}
                  className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C51E2E] bg-white resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-1/3 py-2.5 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-100 font-medium text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-2.5 bg-[#C51E2E] hover:bg-[#991321] text-white font-semibold rounded-xl text-sm transition-colors shadow-md"
                >
                  {isPartner ? 'Submit Proposal' : 'Register as Volunteer'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

