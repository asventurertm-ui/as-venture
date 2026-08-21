import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Plus, 
  Minus, 
  ArrowRight, 
  Quote, 
  Users, 
  CheckCircle, 
  Zap, 
  Award, 
  Smile, 
  ThumbsUp, 
  Leaf, 
  HeartHandshake 
} from 'lucide-react';
import { ActiveTab } from '../types';
import { STATS_DATA, TRUST_FACTORS, SOLAR_SERVICES, PROCESS_STEPS, TESTIMONIALS, FAQS,CLIENTS_DATA } from '../data';
import IconRenderer from './IconRenderer';
import SolarCalculator from './SolarCalculator';
import { AnimatedCounter } from './AnimatedCounter';
import { SectionBadge } from './SectionBadge';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  openQuoteModal: () => void;
}

export default function HomeView({ setActiveTab, openQuoteModal }: HomeViewProps) {
  // Testimonials Slider State
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  // FAQs Accordion State
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  // Animated Heading Words State
  const headingWords = ["Premium", "Advanced", "Modern"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % headingWords.length);
    }, 4800);
    return () => clearInterval(interval);
  }, []);

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleCalculateSavingsScroll = () => {
    const calcEl = document.getElementById('home-savings-calculator-section');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Fade-in variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
      id="home-view"
    >
      
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative bg-white pt-8 pb-16 sm:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Hero Text) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            

              {/* Headings */}
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-black text-slate-900 tracking-tight leading-tight lg:leading-none font-display">
                Save Up To <span className="text-emerald-700 relative inline-block">90%
                  {/* Decorative underline */}
                  <span className="absolute left-0 bottom-1 w-full h-[6px] bg-emerald-700/10 rounded-full"></span>
                </span> On Your <span className="text-[#0b1b3d]">Electricity Bills</span> With{' '}
                <motion.span 
                  layout
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative inline-flex flex-col overflow-hidden align-bottom text-emerald-700"
                >
                  <span className="invisible font-extrabold select-none pointer-events-none whitespace-nowrap">
                    {headingWords[wordIndex]}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={headingWords[wordIndex]}
                      initial={{ y: "50%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-50%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-0 font-extrabold whitespace-nowrap"
                    >
                      {headingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.span>{' '}
                <span className="text-[#0b1b3d] font-extrabold">Solar Energy</span>
              </h1>

              {/* Description */}
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Power your home or business with highly reliable, peak-performance solar systems. AS Solar delivers custom residential, commercial, and industrial solar engineering backed by premium products, 3D shade simulation, and robust after-sales AMC support.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2" id="hero-actions">
                <button
                  type="button"
                  id="hero-quote-btn"
                  onClick={openQuoteModal}
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-4 px-8 rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/45 hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
                >
                  Get Free Quote
                </button>
                <button
                  type="button"
                  id="hero-calc-btn"
                  onClick={handleCalculateSavingsScroll}
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-[#0b1b3d] font-extrabold py-4 px-8 rounded-xl hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide flex items-center justify-center space-x-2 shadow-xs hover:shadow-md"
                >
                  <span>Calculate Savings</span>
                  <ArrowRight className="w-4 h-4 text-emerald-700" />
                </button>
              </div>

            </div>

            {/* Right Column (Visual Design Layout) */}
          <div className="lg:col-span-5 relative" id="hero-visual-container">
  {/* Complex bento image layout */}
  <div className="grid grid-cols-12 gap-3 relative z-10">

    {/* Windmill panel image */}
    <div className="col-span-7 rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-[16/9]">
      <img
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=420&q=70"
        alt="Solar Panel and Wind Turbines"
        width={420}
        height={236}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>

    {/* Engineer Badge */}
    <div className="col-span-5 rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white flex flex-col justify-between p-4">
      <div className="flex items-center space-x-2">
        <span className="text-xl">🌿</span>
        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest leading-tight">
          Powering A Sustainable Tomorrow
        </span>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-50">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
          Solar Grid Tech
        </p>
        <p className="text-xs font-black text-slate-900 mt-1">
          Certified Tier-1 Panels Only
        </p>
      </div>
    </div>

    {/* Solar Engineer */}
    <div className="col-span-5 rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-[4/5]">
      <img
        src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=400&q=80"
        alt="Solar Engineer Portrait"
        width={400}
        height={500}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>

    {/* Solar Panel Grid */}
    <div className="col-span-7 rounded-2xl overflow-hidden shadow-md border border-slate-100 relative aspect-[16/10]">
      <img
        src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=420&q=70"
        alt="Residential Solar Install"
        width={420}
        height={262}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />

      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm py-2 px-3.5 rounded-xl shadow-md border border-slate-100/50 flex items-center space-x-2">
        <div className="flex -space-x-2">
          <img
            className="w-6 h-6 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&q=80"
            alt="user"
            width={24}
            height={24}
            loading="lazy"
          />
          <img
            className="w-6 h-6 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80"
            alt="user"
            width={24}
            height={24}
            loading="lazy"
          />
          <img
            className="w-6 h-6 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&q=80"
            alt="user"
            width={24}
            height={24}
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-[10px] font-extrabold text-[#0b1b3d] leading-none">
            500+
          </p>
          <p className="text-[8px] font-bold text-slate-500 leading-none mt-0.5">
            Happy Clients
          </p>
        </div>
      </div>
    </div>

  </div>

  {/* Background Blur */}
  <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-700/5 rounded-full blur-3xl -z-10"></div>
  <div className="absolute -left-12 -top-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
</div>

          </div>
        </div>
      </section>

      {/* 2. STATS ROW */}
   <section id="stats-section" className="bg-gradient-to-r from-[#173e87] via-[#2258bd] to-[#173e87] py-8 sm:py-10 md:py-12 relative z-10 text-white border-y border-[#173e87]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.04)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Compact Heading */}
    <h2 className="text-center text-sm sm:text-base md:text-lg font-black text-white tracking-widest uppercase mb-6 sm:mb-8 opacity-95">
      Clientele & Experience Overview
    </h2>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-6 md:gap-x-10">
      {[
        { target: 300, suffix: 'MW+', label: 'O&M Experience' },
        { target: 1200, suffix: '+', label: 'Residential Clients' },
        { target: 60, suffix: '+', label: 'Commercial Clients' },
        { target: 32, suffix: '+', label: 'Industrial Clients' },
        { target: 10, suffix: '+', label: 'Religious Projects' },
        { target: 8, suffix: '+', label: 'Hospitals & Pharma' },
        { target: 5, suffix: '+', label: 'Schools & Colleges' },
        { target: 4, suffix: '+', label: 'Hotels & Marriage Gardens' }
      ].map((stat, idx) => (
        <div
          key={idx}
          className="text-center flex flex-col items-center justify-center"
          id={`stat-box-${idx}`}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display leading-none flex items-baseline">
            <AnimatedCounter target={stat.target} suffix={stat.suffix} />
          </h3>
          <p className="text-[9px] sm:text-[11px] font-bold text-blue-100/80 tracking-wider uppercase mt-1.5 text-center">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 3. WHY THOUSANDS TRUST AS SOLAR */}
      <section id="trust-factors-section" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
            <SectionBadge>Uncompromised Excellence</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
              Why Thousands Trust <span className="text-emerald-700">AS Solar</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm leading-relaxed">
              We engineer maximum power output and durability. From site auditing to government documentation, we ensure a seamless and rewarding solar transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="trust-cards-grid">
            {TRUST_FACTORS.map((factor, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                id={`trust-card-${idx}`}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-emerald-700/20 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(11,27,61,0.06)] transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-emerald-700/20 transition-all duration-300 mb-5">
                  <IconRenderer name={factor.iconName} className="w-6 h-6 stroke-[2]" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-2 tracking-tight group-hover:text-emerald-800 transition-colors">
                  {factor.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. COMPLETE SOLAR SOLUTIONS */}
    <>
  {/* EXISTING SERVICES GRID SECTION - UNTOUCHED */}
 {/* EXISTING SERVICES GRID SECTION - UNTOUCHED */}
  <section id="services-grid-section" className="py-20 sm:py-24 bg-white border-t border-b border-slate-100">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
        <SectionBadge>End-to-End Solutions</SectionBadge>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
          Complete <span className="text-[#0b1b3d]">Solar Energy</span> Solutions
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 text-sm leading-relaxed">
          We offer bespoke commercial, residential, and agricultural solar grids designed to maximize yields and provide sustained, worry-free clean power.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8" id="home-services-grid">
        {SOLAR_SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            id={`service-card-${service.id}`}
            className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100/80 hover:border-emerald-700/30 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(11,27,61,0.05)] transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs py-1 px-2.5 rounded-lg border border-slate-200/50 shadow-xs text-[10px] font-extrabold text-slate-800 uppercase tracking-wider">
                  {service.id.replace('-', ' ')}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h4 className="font-extrabold text-slate-900 text-lg mb-2 tracking-tight group-hover:text-emerald-800 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 text-slate-700 font-bold text-xs tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 shadow-xs hover:shadow-md"
              >
                <span>Learn Features</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12" id="explore-services-cta">
        <button
          onClick={() => {
            setActiveTab('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-2 bg-[#0b1b3d] hover:bg-emerald-800 text-white font-extrabold py-3.5 px-8 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-700/20 hover:-translate-y-0.5 cursor-pointer group"
        >
          <span>Explore All Services</span>
          <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  </section>

  {/* NEW FEATURE: CLIENTS WE EMPOWERED (INFINITE SCROLL) - Adjusted Height & Image Sizes */}
  <section id="services-clients-section" className="pt-12 pb-10 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center space-y-3">
      <SectionBadge>Our Trusted Partners</SectionBadge>
      <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
        Clients We Empowered
      </h2>
    </div>

    {/* Infinite Marquee Container - Borders removed, padding reduced */}
    <div className="relative w-full overflow-hidden flex bg-white py-4">
      {/* Duplicated array for seamless infinite loop */}
      <div className="flex w-max animate-scroll-x items-center gap-12 sm:gap-24 px-6 sm:px-12 hover:[animation-play-state:paused]">
        {[...CLIENTS_DATA, ...CLIENTS_DATA].map((client, idx) => (
          <div 
            key={`${client.id}-${idx}`} 
            className="flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer min-w-[120px] sm:min-w-[140px]"
          >
            {/* Reduced image sizes */}
            <img 
              src={client.logo} 
              alt={client.name} 
              className="h-8 sm:h-12 object-contain mb-2 drop-shadow-sm" 
              loading="lazy" 
            />
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 text-center uppercase tracking-wider">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
    
    {/* Inline styles for custom infinite scroll animation */}
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes scroll-x {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll-x {
        animation: scroll-x 30s linear infinite;
      }
    `}} />
  </section>
</>

      {/* 5. PROCESS STEP TIMELINE */}
      <section id="process-timeline-section" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
            <SectionBadge>Seamless Deployment</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
              Simple, Transparent & Hassle-Free Process
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm leading-relaxed">
              We make going solar smooth and simple. Our complete deployment pipeline keeps you fully informed and supported.
            </p>
          </div>

          <div className="relative mt-12" id="timeline-wrapper">
            
            <div className="hidden lg:block absolute top-[43px] left-10 right-10 h-[2px] bg-slate-200/80 -z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4" id={`timeline-step-${step.step}`}>
                  
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-slate-200/80 text-[#0b1b3d] shadow-xs hover:border-emerald-700 hover:text-emerald-700 hover:shadow-md hover:shadow-emerald-700/10 transition-all duration-300 group">
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-amber-500 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                      {step.step}
                    </span>
                    <IconRenderer name={step.iconName} className="w-6 h-6 stroke-[2]" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. SOLAR CALCULATOR SECTION */}
      <section id="home-savings-calculator-section" className="py-20 sm:py-24 bg-slate-100/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div>
                <SectionBadge>Financial Forecaster</SectionBadge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
                Estimate Your <span className="text-emerald-700">Solar Savings</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto lg:mx-0 rounded-full"></div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
                Instantly calculate your optimal panel capacity, estimated government subsidies, and payback timelines under the current solar laws. Slide to match your average electricity bill.
              </p>
              
              <ul className="space-y-2.5 text-xs font-bold text-slate-600 inline-block text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>PM Surya Ghar subsidy models included</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Refined for Central India utility rates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Estimates shadow-free space in sq ft</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <SolarCalculator compact={true} />
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHAT OUR CUSTOMERS SAY */}
      <section id="testimonials-section" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
            <SectionBadge>Client Testimonials</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
              What Our <span className="text-emerald-700">Customers Say</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm leading-relaxed">
              We take pride in our 98% satisfaction rating. Hear from homeowners and enterprise managers who have slashed their utility costs with AS Solar.
            </p>
          </div>

          {/* Testimonial Carousel Container */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative min-h-[180px] flex flex-col justify-between transition-all duration-500">
              
              {/* Top Section: Quote Icon & Review */}
              <div>
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mb-4 stroke-[1.5] rotate-180" />
                <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed">
                  "{TESTIMONIALS[testimonialIndex]?.review}"
                </p>
              </div>

              {/* Bottom Section: Profile & Rating */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  {/* Initials Placeholder */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-full shrink-0">
                    <span className="font-black text-xs sm:text-sm text-[#0b1b3d]">
                      {TESTIMONIALS[testimonialIndex]?.name?.substring(0, 2).toUpperCase() || 'AS'}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                      {TESTIMONIALS[testimonialIndex]?.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      {TESTIMONIALS[testimonialIndex]?.location}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-0.5 shrink-0 mt-2 sm:mt-0">
                  {Array.from({ length: TESTIMONIALS[testimonialIndex]?.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-5 mt-6">
              <button 
                onClick={handlePrevTestimonial}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 text-slate-700" />
              </button>

              {/* Progress Dots/Pills */}
              <div className="flex gap-1.5 items-center">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                      idx === testimonialIndex 
                        ? 'w-5 bg-[#0b1b3d]' 
                        : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNextTestimonial}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>

        </div>
      </section>
      
      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq-section" className="py-12 sm:py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
      <SectionBadge>Got Questions?</SectionBadge>
      <h2 className="text-3xl sm:text-4xl font-black text-[#0b1b3d] tracking-tight font-display">
        Frequently Asked <span className="text-emerald-700">Questions</span>
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mt-2 mb-2"></div>
      <p className="text-slate-500 text-sm leading-relaxed">
        Find instant clarity on solar panel installations, subsidies, net metering, and maintenance services.
      </p>
    </div>

    <div className="space-y-2" id="faqs-accordion-list">
      {FAQS.map((faq) => {
        const isOpen = openFaq === faq.id;
        return (
          <div 
            key={faq.id} 
            id={`faq-item-${faq.id}`}
            className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left p-3.5 sm:p-4 flex justify-between items-center text-slate-800 hover:text-emerald-700 transition-colors focus:outline-hidden"
            >
              <span className="font-extrabold text-sm sm:text-base tracking-tight leading-tight pr-4">
                {faq.question}
              </span>
              <span className="p-1 rounded-lg bg-emerald-50 text-emerald-700 flex-shrink-0">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-3.5 sm:px-4 pb-4 pt-1 border-t border-slate-50 animate-fade-in" id={`faq-answer-${faq.id}`}>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>

    <div className="text-center mt-6" id="faqs-all-cta">
      <button
        onClick={() => {
          setActiveTab('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="py-3 px-6 rounded-xl border border-slate-200 hover:border-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 text-slate-700 font-bold text-xs tracking-wide transition-all duration-300 cursor-pointer shadow-xs hover:shadow-sm"
      >
        Have other questions? Contact Us
      </button>
    </div>

  </div>
</section>

      {/* 9. READY TO START SAVING WITH SOLAR? CTA */}
     <section
  id="bottom-cta-banner"
  className="py-20 bg-white"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0b1b3d] px-8 py-16 sm:px-12 lg:px-20 text-center">

      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80")',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">

        <h2 className="text-4xl sm:text-5xl font-black leading-tight font-display text-white">
          Ready to Start Saving with{" "}
          <span className="text-emerald-300">
            Solar Energy
          </span>
          ?
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
          Join hundreds of satisfied residential, commercial, and industrial
          clients across Central India who have successfully switched to smart
          solar grids. Book your free site survey today.
        </p>

        <div
          id="bottom-cta-actions"
          className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4"
        >
          <button
            type="button"
            onClick={openQuoteModal}
            className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-4 px-10 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Get Free Quote
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="w-full sm:w-auto border border-white/20 bg-white/10 hover:bg-white/15 text-white font-extrabold py-4 px-10 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            Book Free Site Survey
          </button>
        </div>

      </div>
    </div>
  </div>
</section>
    </motion.div>
  );
}