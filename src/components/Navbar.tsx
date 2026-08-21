import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  openQuoteModal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, openQuoteModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Added 'Partners' to navLinks array
  const navLinks: { label: string; tab: ActiveTab; isTab: boolean }[] = [
    { label: 'Home', tab: 'home', isTab: true },
    { label: 'About Us', tab: 'about', isTab: true },
    { label: 'Services', tab: 'services', isTab: true },
    { label: 'Achievements', tab: 'achievements', isTab: true },
    { label: 'Partners', tab: 'partners', isTab: true },
    { label: 'Contact Us', tab: 'contact', isTab: true },
  ];

  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleLinkClick('home')}
            id="nav-logo"
          >
           <div className="relative flex items-center justify-center group-hover:scale-105 transition-all duration-300">
            <img
             src="/VENTURE_LOGO.jpg-removebg-preview.png"
             alt="AS Venture Logo"
             className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            />
           </div>
        
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeTab === link.tab;
              return (
                <button
                  key={link.label}
                  id={`nav-link-${link.tab}`}
                  onClick={() => handleLinkClick(link.tab)}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-300 relative ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-600 hover:text-[#0b1b3d] hover:bg-emerald-50/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-emerald-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center" id="nav-cta-container">
            <button
              id="nav-quote-btn"
              onClick={openQuoteModal}
              className="bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold py-3 px-6 rounded-xl shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/40 hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden" id="mobile-menu-btn-container">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-inner" id="mobile-nav-menu">
          {navLinks.map((link) => {
            const isActive = activeTab === link.tab;
            return (
              <button
                key={link.label}
                id={`mobile-nav-link-${link.tab}`}
                onClick={() => handleLinkClick(link.tab)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold tracking-wide transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-600 hover:text-[#0b1b3d] hover:bg-slate-50/50'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full" />}
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-100 px-2" id="mobile-nav-cta">
            <button
              id="mobile-quote-btn"
              onClick={() => {
                setIsOpen(false);
                openQuoteModal();
              }}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-emerald-700/10 text-center text-sm tracking-wide transition-colors"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}