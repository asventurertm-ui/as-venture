import React from 'react';
import { Facebook, Instagram, Linkedin, Zap, Mail, Phone, MapPin } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-[#11285b] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
         {/* Col 1: Brand Info */}
<div className="lg:col-span-1 space-y-6" id="footer-brand-section">

  {/* Logo */}
  <div className="flex items-center">
  <img
    src="/VENTURE_LOGO.jpg-removebg-preview.png"
    alt="AS Venture Logo"
    className="max-h-24 w-auto"
  />
</div>

  {/* Description */}
  <p className="text-white text-sm leading-7 max-w-xs">
    Powering a sustainable tomorrow with smart solar energy solutions for
    homes, businesses, and industries across Central India.
  </p>

  {/* Social Icons */}
  <div className="flex gap-4">
    {[
      {
        icon: <Linkedin className="w-5 h-5" />,
        url: "https://www.linkedin.com/company/as-venture-advance-solution-engineering-/",
      },
      {
        icon: <Instagram className="w-5 h-5" />,
        url: "https://www.instagram.com/as_venture_solar?utm_source=qr&igsh=MWZheTR1eXZ2NDcxeA==",
      },
      {
        icon: <Facebook className="w-5 h-5" />,
        url: "https://www.facebook.com/share/1CnnF7oeJ5/",
      },
    ].map((social, idx) => (
      <a
        key={idx}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-emerald-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
      >
        {social.icon}
      </a>
    ))}
  </div>

</div>

          {/* Col 2: Quick Links (FIXED: Explicit mapping to ensure correct routing) */}
          <div className="space-y-4" id="footer-quick-links">
            <h4 className="font-bold text-base text-emerald-400 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white">
              {[
                { label: 'Home', key: 'home' },
                { label: 'About Us', key: 'about' },
                { label: 'Services', key: 'services' },
                { label: 'Achievements', key: 'achievements' },
                { label: 'Partners', key: 'partners' },
                { label: 'Contact Us', key: 'contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => handleLinkClick(link.key as ActiveTab)} 
                    className="hover:text-emerald-400 hover:translate-x-1 transition-all text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4" id="footer-services-links">
            <h4 className="font-bold text-base text-emerald-400 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm text-white">
              {['Residential Solar', 'Commercial Solar', 'Industrial Solar', 'Solar Water Pumps', 'Solar Maintenance'].map((service) => (
                <li key={service}>
                  <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 hover:translate-x-1 transition-all text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Registered Office */}
          <div className="space-y-4" id="footer-contact-info">
            <h4 className="font-bold text-base text-emerald-400 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4 text-sm text-white">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <p>1st Floor, Hani Hardware, Station Road, Ratlam, 457001 (MP)</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <p>+91 9009051114</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <p>asventurertm@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] text-slate-500 pt-8">
          © {new Date().getFullYear()} AS Solar Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}