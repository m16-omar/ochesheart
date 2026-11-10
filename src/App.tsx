import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FocusAreas } from './components/FocusAreas';
import { Impact } from './components/Impact';
import { Stories } from './components/Stories';
import { FAQ } from './components/FAQ';
import { GetInvolved } from './components/GetInvolved';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DonateModal } from './components/DonateModal';
import { VolunteerModal } from './components/VolunteerModal';

export const App: React.FC = () => {
  const [donateOpen, setDonateOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [volunteerType, setVolunteerType] = useState<'volunteer' | 'partner'>('volunteer');

  const handleOpenDonate = () => {
    setDonateOpen(true);
  };

  const handleOpenVolunteer = () => {
    setVolunteerType('volunteer');
    setVolunteerOpen(true);
  };

  const handleOpenPartner = () => {
    setVolunteerType('partner');
    setVolunteerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#1E293B] antialiased selection:bg-[#C51E2E] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenDonate={handleOpenDonate} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenDonate={handleOpenDonate} 
          onOpenVolunteer={handleOpenVolunteer} 
        />
        
        <About />

        <FocusAreas 
          onOpenDonate={handleOpenDonate} 
        />

        <Impact 
          onOpenDonate={handleOpenDonate} 
        />

        <Stories 
          onOpenDonate={handleOpenDonate} 
        />

        <GetInvolved
          onOpenDonate={handleOpenDonate}
          onOpenVolunteer={handleOpenVolunteer}
          onOpenPartner={handleOpenPartner}
        />

        <FAQ />

        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenDonate={handleOpenDonate}
        onOpenVolunteer={handleOpenVolunteer}
      />

      {/* Modals */}
      <DonateModal 
        isOpen={donateOpen} 
        onClose={() => setDonateOpen(false)} 
      />

      <VolunteerModal
        isOpen={volunteerOpen}
        onClose={() => setVolunteerOpen(false)}
        type={volunteerType}
      />
    </div>
  );
};

export default App;

