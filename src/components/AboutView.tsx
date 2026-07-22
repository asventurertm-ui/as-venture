import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  UserCheck, 
  Award, 
  Lightbulb, 
  Leaf, 
  Target, 
  Eye, 
  Users, 
  CheckCircle, 
  Briefcase, 
  ChevronRight,
  Sparkles,
  BookmarkCheck
} from 'lucide-react';
import { ActiveTab } from '../types';
import { CORE_VALUES } from '../data'; // Removed TEAM_MEMBERS as it is no longer mapped
import IconRenderer from './IconRenderer';
import { SectionBadge } from './SectionBadge';

interface AboutViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  openQuoteModal: () => void;
}

export default function AboutView({ setActiveTab, openQuoteModal }: AboutViewProps) {
  
  // Fade-in animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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
      className="bg-slate-50 overflow-hidden"
      id="about-view"
    >
      
      {/* 1. HERO SECTION */}
      <section id="about-hero-section" className="relative bg-white pt-8 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/60 shadow-xs" id="about-badge">
                <BookmarkCheck className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-extrabold text-emerald-800 tracking-wide">
                  About AS Solar
                </span>
              </div>

              {/* Headings */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none font-display">
                Building a Sustainable <span className="text-emerald-700">Future</span> Through Smart <span className="text-[#0b1b3d]">Solar Solutions</span>
              </h1>

              {/* Description */}
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                For over a decade, AS Solar has been helping homeowners, businesses, and industries transition to clean, affordable, and reliable solar energy. We combine rigorous engineering expertise, premium Tier-1 product sourcing, and exceptional customer service to deliver long-lasting solar solutions across Central India.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2" id="about-hero-actions">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-3.5 px-7 rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:-translate-y-0.5 transition-all duration-300 text-xs tracking-wide uppercase"
                >
                  Get Free Quote
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-[#0b1b3d] font-extrabold py-3.5 px-7 rounded-xl text-xs tracking-wide uppercase hover:-translate-y-0.5 transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  Explore Our Services
                </button>
              </div>

            </div>

            {/* Right Column Layout (Circular graphics layout) */}
            <div className="lg:col-span-6 relative flex justify-center" id="about-hero-graphics">
              
              <div className="relative w-80 h-80 sm:w-96 sm:h-96" id="about-visual-circle-container">
                
                {/* Large main circle boundary */}
                <div className="absolute inset-4 rounded-full border border-slate-200/60 bg-gradient-to-tr from-emerald-50/20 to-blue-50/20 animate-spin-slow -z-10"></div>
                
                {/* Center Image */}
                <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-slate-200/50">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=420&q=70" 
                    alt="Solar Panel Clean" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Badge 1: 10+ Years of Excellence */}
                <div className="absolute -top-4 left-6 bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3 max-w-[150px]" id="about-fb-1">
                  <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 leading-none">10+</p>
                    <p className="text-[9px] font-bold text-slate-400 mt-1 leading-none">Years Excellence</p>
                  </div>
                </div>

                {/* Floating Badge 2: 500+ Projects Completed */}
                <div className="absolute bottom-6 -left-6 bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3 max-w-[160px]" id="about-fb-2">
                  <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 leading-none">500+</p>
                    <p className="text-[9px] font-bold text-slate-400 mt-1 leading-none">Completed Grids</p>
                  </div>
                </div>

                {/* Floating Badge 3: Clean Energy Tomorrow */}
                <div className="absolute top-1/3 -right-10 bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3 max-w-[150px]" id="about-fb-3">
                  <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-emerald-700 leading-none">Clean Energy</p>
                    <p className="text-[9px] font-bold text-slate-400 mt-1 leading-none">Better Tomorrow</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION CARDS */}
      <section id="mission-vision-section" className="py-16 bg-white border-b border-slate-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Vision Card */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-50/50 rounded-2xl p-8 sm:p-10 border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 group"
        id="vision-card"
      >
        <div className="space-y-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center group-hover:bg-[#0b1b3d] group-hover:text-white transition-all duration-300">
            <Lightbulb className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h3 className="text-xl font-extrabold text-[#0b1b3d] font-display">Our Vision</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To lead India's transition to clean, sustainable, and self-reliant energy by empowering every home and business with solar power.
          </p>
        </div>
        <div className="mt-6 flex items-center space-x-2 text-xs font-bold text-[#0b1b3d]">
          <span>Long-term Objective</span>
          <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full"></span>
          <span>Active</span>
        </div>
      </motion.div>

      {/* Mission Card */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-50/50 rounded-2xl p-8 sm:p-10 border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 group"
        id="mission-card"
      >
        <div className="space-y-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center group-hover:bg-[#0b1b3d] group-hover:text-white transition-all duration-300">
            <Target className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h3 className="text-xl font-extrabold text-[#0b1b3d] font-display">Our Mission</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To provide high-quality, affordable solar solutions backed by innovation, expert support, and complete customer satisfaction.
          </p>
        </div>
        <div className="mt-6 flex items-center space-x-2 text-xs font-bold text-[#0b1b3d]">
          <span>Core Target Integration</span>
          <span className="w-1.5 h-1.5 bg-[#0b1b3d] rounded-full"></span>
          <span>Active</span>
        </div>
      </motion.div>

    </div>
  </div>
</section>
      {/* 3. OUR TEAM SECTION */}
      <section id="team-section" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
            <SectionBadge>Leadership & Competence</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
              Meet Our <span className="text-emerald-700">Professional Team</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm leading-relaxed">
              We operate a fully in-house department of structure analysts, mechanical fitters, electrical grid engineers, and regulatory subsidy liaisons.
            </p>
          </div>

          {/* Group Image Replacement */}
          {/* Group Image Replacement */}
          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl relative group"
            id="team-group-photo-container"
          >
            {/* 
              IMAGE ADJUSTMENTS (FIXES 1 & 2): 
              1. Changed aspect ratio to lg:aspect-[16/10] to prevent height cropping on wide screens.
              2. Changed 'object-center' to 'object-top' to keep the faces at the top visible.
            */}
            <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10] relative overflow-hidden bg-slate-100">
              <img 
                src="/src/assets/AS-venture-Team.jpg" 
                alt="AS Solar Professional Team" 
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/90 via-[#0b1b3d]/10 to-transparent"></div>
              
              {/* Image Caption/Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 lg:p-10 text-left">
                <div className="inline-flex items-center space-x-2 bg-blue-600/90 backdrop-blur-sm px-3 py-1.5 rounded-lg mb-4">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                    Our Experts
                  </span>
                </div>
                <h4 className="font-black text-white text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight shadow-sm max-w-2xl font-display">
                  The Faces Behind Your Seamless Solar Transition
                </h4>
                <p className="text-white/80 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
                  Dedicated professionals committed to delivering maximum power output and uncompromised excellence for every single project.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. OUR CORE VALUES */}
      <section id="core-values-section" className="py-20 sm:py-24 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
            <SectionBadge>Our DNA</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
              Our Core <span className="text-emerald-700">Engineering Values</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every solar panel we mount and wire is a testament to our principles. We believe that clean energy is built on clean business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" id="core-values-grid">
            {CORE_VALUES.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                id={`value-card-${idx}`}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center flex flex-col items-center hover:bg-white hover:shadow-xl hover:border-emerald-700/20 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100/50 flex items-center justify-center mb-4">
                  <IconRenderer name={value.iconName} className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1 tracking-tight">
                  {value.title}
                </h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CERTIFIED & TRUSTED PARTNERS regulatory logos */}
      <section id="certifications-section" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <SectionBadge>Compliance & Approvals</SectionBadge>
            <h4 className="text-xl font-extrabold text-slate-800 tracking-tight font-display">Certified & Fully Trusted Solar Partner</h4>
          </div>

          {/* Highly styled grid of certificate stamps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="certifications-grid">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200/50 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-3xl mb-2">📜</span>
              <p className="text-sm font-black text-slate-900 font-display">MSME</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Government Registered</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/50 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-3xl mb-2">💼</span>
              <p className="text-sm font-black text-slate-900 font-display">GST TAX</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Legally Registered</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/50 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-3xl mb-2">🏅</span>
              <p className="text-sm font-black text-slate-900 font-display">ISO 9001:2015</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Quality Audited</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/50 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-3xl mb-2">🛡️</span>
              <p className="text-sm font-black text-slate-900 font-display">MNRE Approved</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">National Vendor Status</p>
            </div>

          </div>

          <div className="text-center mt-8">
            <p className="text-[10px] font-bold text-slate-400 max-w-xl mx-auto">
              Our licenses, safety clearances, and corporate audits ensure maximum safety and guaranteed eligibility for national subsidies for your grid.
            </p>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section id="about-cta-banner" className="py-16 bg-[#0b1b3d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80")' }}></div>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight leading-none font-display">
            Let's Build a <span className="text-emerald-300 font-extrabold">Cleaner</span>, Smarter Future Together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you are looking to secure energy independence for your household or minimize operating expenses for heavy manufacturing, AS Solar is ready to deploy your premium grid.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" id="about-cta-actions">
            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-3.5 px-8 rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/40 hover:-translate-y-0.5 transition-all duration-300 text-xs tracking-wider uppercase"
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
              Book Free Site Survey
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}