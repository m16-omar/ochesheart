import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDonate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Focus', href: '#focus' },
    { name: 'Impact', href: '#impact' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-md py-3 border-b border-rose-100/60'
          : 'bg-[#FFFDF9]/80 backdrop-blur-sm py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#C51E2E] to-[#8E111E] flex items-center justify-center shadow-md shadow-rose-900/20 group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white animate-heart-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#0A192F] group-hover:text-[#C51E2E] transition-colors leading-tight">
              Oche's Heart
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#C51E2E]">
              Foundation
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold text-slate-700 hover:text-[#C51E2E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C51E2E] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: Donate */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDonate}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-[#D97706] hover:bg-[#B45309] text-white shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
            <span>Donate Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <button
            onClick={onOpenDonate}
            className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#D97706] text-white shadow-sm"
          >
            Donate
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-[#C51E2E] hover:bg-rose-50 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-rose-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 text-base font-semibold text-slate-800 hover:text-[#C51E2E] hover:bg-rose-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-3 rounded-xl font-bold bg-[#D97706] hover:bg-[#B45309] text-white shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Donate to Oche's Heart</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

