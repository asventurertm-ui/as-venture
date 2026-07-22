import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  HelpCircle, 
  Plus, 
  ArrowRight, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Leaf,
  Timer,
  Clock,
  Sparkles,
  Award,
  Wrench,
  Headphones
} from 'lucide-react';
import { ActiveTab } from '../types';
import { SOLAR_SERVICES, EXTRA_SERVICES_DATA, SEVEN_STEPS_INSTALLATION } from '../data';
import IconRenderer from './IconRenderer';
import { SectionBadge } from './SectionBadge';

interface ServicesViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  openQuoteModal: () => void;
}

export default function ServicesView({ setActiveTab, openQuoteModal }: ServicesViewProps) {
  
  // Animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white overflow-hidden"
      id="services-view"
    >
      
      {/* 1. HERO SECTION - Updated opacity and gradient to make image more visible */}
      <section id="services-hero-section" className="relative text-slate-900 py-20 sm:py-28 overflow-hidden border-b border-slate-100 bg-sky-50/20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1600&q=80")' 
          }}
        ></div>
        {/* Softened radial overlay to let the image show through clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/40 via-white/60 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Breadcrumbs */}
          <nav className="inline-flex items-center space-x-2 text-xs font-bold text-slate-400 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-100 shadow-xs">
            <button onClick={() => setActiveTab('home')} className="hover:text-emerald-700 transition-colors cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-emerald-700">Services</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-[#0b1b3d] font-display max-w-3xl">
            Our <span className="text-emerald-700">Solar Solutions</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            AS Solar provides complete solar energy systems for homes, businesses, industries, and agricultural lands. From raw engineering blueprints and 3D shadow mapping to government approvals and net metering, we make the path to clean energy simple, affordable, and highly reliable.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2" id="services-hero-actions">
            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-3.5 px-8 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:-translate-y-0.5 flex items-center justify-center space-x-1.5"
            >
              <span>Get Free Quote</span>
              <span className="text-sm font-bold">➔</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('contact')}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-[#0b1b3d] font-extrabold py-3.5 px-8 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
              <span className="text-sm">➔</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. SOLAR SOLUTIONS WE OFFER */}
      <section id="services-offer-section" className="py-20 sm:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <SectionBadge>Primary Offerings</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
              Solar Solutions We Offer
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Tailored premium grids engineered to output peak efficiency. Review our primary installation setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8" id="solutions-offer-grid">
            {SOLAR_SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                id={`solutions-offer-card-${service.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100/85 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(11,27,61,0.06)] hover:border-emerald-700/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-emerald-700 text-white py-0.5 px-2 rounded-md text-[10px] font-extrabold uppercase tracking-wider">
                      Optimum Yield
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 space-y-2">
                    <h3 className="font-extrabold text-[#0b1b3d] text-[17px] leading-tight tracking-tight group-hover:text-emerald-800 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-0.5">
                      <div className="space-y-1" id={`service-features-${service.id}`}>
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Key Highlights</p>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {service.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start space-x-1.5">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                              <span className="font-medium leading-tight">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-1 pt-1.5 border-t border-slate-100" id={`service-suitability-${service.id}`}>
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Suitable For</p>
                        <div className="flex flex-wrap gap-1">
                          {service.suitableFor.map((suit, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="bg-slate-50 px-2 py-0.5 rounded-md text-[10px] font-bold text-slate-500 border border-slate-200/50"
                            >
                              • {suit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="p-3 sm:p-4 border-t border-slate-100 bg-slate-50/50 flex gap-2" id={`service-actions-${service.id}`}>
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="flex-1 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold py-1.5 rounded-xl text-xs tracking-wide transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    Get Quote
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 bg-white hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-700/30 text-slate-700 border border-slate-200 font-extrabold py-1.5 rounded-xl text-xs tracking-wide transition-all duration-300 text-center cursor-pointer"
                  >
                    Consult Free
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. MORE SERVICES WE PROVIDE */}
      <section id="extra-services-section" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <SectionBadge>Full Lifecycle Care</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
              More Services We Provide
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              We do not just mount solar panels; we ensure they operate at peak yield for 25+ years with responsive field care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="extra-services-grid">
            {EXTRA_SERVICES_DATA.map((srv, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                id={`extra-service-card-${idx}`}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100/85 hover:border-emerald-700/20 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(11,27,61,0.06)] transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 flex items-center justify-center mb-5">
                  <IconRenderer name={srv.iconName} className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="font-extrabold text-[#0b1b3d] text-base mb-1.5 tracking-tight group-hover:text-emerald-800 transition-colors">
                  {srv.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {srv.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SEVEN STEPS INSTALLATION PROCESS - Reduced Height */}
      <section id="installation-process-section" className="py-12 sm:py-16 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <SectionBadge>Execution Timeline</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
              Our 7-Step Installation Process
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              How we carry your project from a blank roof space to a fully commissioned, live bi-directional solar array.
            </p>
          </div>

          {/* Reduced space-y gap for lower height */}
          <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-10 space-y-6 max-w-3xl mx-auto" id="seven-steps-timeline">
            {SEVEN_STEPS_INSTALLATION.map((stp) => (
              <div key={stp.step} className="relative" id={`seven-step-${stp.step}`}>
                
                <div className="absolute -left-[39px] sm:-left-[51px] top-1 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs shadow-md border-4 border-white z-10">
                  {stp.step}
                </div>

                {/* Reduced padding inside the card */}
                <div className="space-y-1 bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-700/20 transition-all duration-300">
                  <h4 className="font-extrabold text-[#0b1b3d] text-base tracking-tight leading-tight">
                    {stp.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {stp.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE AS SOLAR BENTO BANNER */}
      <section id="services-bento-why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1b3d] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl" id="services-why-banner">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80")' }}></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              
              <div className="space-y-4">
                <span className="text-emerald-300 font-extrabold text-xs uppercase tracking-widest">Guaranteed Returns</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-display">Why Choose AS Solar?</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We specialize strictly in smart, high-output solar design. We conduct digital solar shadow simulation models for every building to guarantee the fastest return on investment.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                    <span>Elevated structurally sound galvanized designs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                    <span>Standard dual-axis wind clearance certificates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                    <span>Comprehensive real-time mobile app monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                
                <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50 text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-display">15 MW+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Solar Deployed</p>
                </div>

                <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50 text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-display">500+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Certified Installations</p>
                </div>

                <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50 text-center col-span-2">
                  <p className="text-xl font-bold text-emerald-300 font-display">98% Customer Satisfaction</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Verified by Bureau Audits</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section id="services-cta-banner" className="py-16 bg-[#0b1b3d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80")' }}></div>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight leading-none font-display">
            Ready to Switch to <span className="text-emerald-300 font-extrabold">Solar Energy</span>?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Book your free engineering site survey and get a complete 3D shading blueprint generated for your rooftop completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" id="services-cta-actions">
            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-3.5 px-8 rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/45 hover:-translate-y-0.5 text-xs tracking-wider uppercase transition-all duration-300"
            >
              Get Free Quote
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 border border-white/20 text-white font-extrabold py-3.5 px-8 rounded-xl text-xs tracking-wider uppercase hover:-translate-y-0.5 transition-all duration-300"
            >
              Schedule Site Survey
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}