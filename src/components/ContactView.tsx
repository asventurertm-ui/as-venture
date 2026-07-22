import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Wrench,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Lock,
  Headphones
} from 'lucide-react';

interface ContactViewProps {
  openQuoteModal: () => void;
}

export default function ContactView({ openQuoteModal }: ContactViewProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    bill: '',
    service: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email) {
      
      // WhatsApp Redirect Logic added here
      const msg = `*New Solar Inquiry*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*City:* ${formData.city}%0A` +
        `*Monthly Bill:* ₹${formData.bill}%0A` +
        `*Service:* ${formData.service}%0A` +
        `*Message:* ${formData.message}`;

      window.open(`https://wa.me/919009051114?text=${msg}`, '_blank');

      setFormSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        bill: '',
        service: '',
        message: ''
      });
      setTimeout(() => setFormSubmitted(false), 8000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white overflow-hidden"
      id="contact-view"
    >
      
      {/* 1. HERO SECTION */}
      <section id="contact-hero-section" className="relative text-slate-900 py-20 sm:py-28 overflow-hidden border-b border-slate-100 bg-sky-50/20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80")' 
          }}
        ></div>
        {/* Soft radial overlay updated to reveal the image more clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/40 via-white/60 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Badge - Contact Us */}
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 shadow-xs" id="contact-badge">
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span className="text-xs font-extrabold text-emerald-800 tracking-wide uppercase">
              Contact Us
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-[#0b1b3d] font-display max-w-3xl">
            Let's Build Your <span className="text-emerald-700">Solar</span> Future Together
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
            Whether you're planning a residential rooftop system, a commercial installation, or an industrial solar project, our experts are here to help. Contact us today for a free consultation and personalized solar solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2" id="contact-hero-actions">
            <button
              type="button"
              onClick={openQuoteModal}
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-3.5 px-8 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:-translate-y-0.5 flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <span className="text-sm font-bold">➔</span>
            </button>
            <a
              href="tel:+919009051114"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-[#0b1b3d] font-extrabold py-3.5 px-8 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Call Now</span>
              <Phone className="w-4 h-4 text-[#0b1b3d]" />
            </a>
          </div>

        </div>
      </section>

      {/* 2. CONTACT INFO CARDS - White Cards with Blue Solid Circle Icons */}
      <section id="contact-cards-section" className="py-12 bg-slate-50/50 relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="info-cards-grid">
            
            {/* Card 1: Call Us */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(11,27,61,0.06)] hover:border-emerald-700/20 flex flex-col justify-between items-start space-y-4 hover:-translate-y-1.5 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shadow-xs mb-4 transition-all duration-300">
                  <Phone className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="font-extrabold text-[#0b1b3d] text-base group-hover:text-emerald-800 transition-colors">Call Us</h4>
                <p className="text-slate-900 font-extrabold text-sm sm:text-base mt-2">+91 90090 51114</p>
                <p className="text-slate-400 text-xs mt-1 font-semibold">Mon - Sat, 9 AM - 7 PM</p>
              </div>
              <a href="tel:+919009051114" className="text-xs font-extrabold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1 transition-colors">
                <span>Call Now</span>
                <span className="text-sm">➔</span>
              </a>
            </div>

            {/* Card 2: Email Us */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(11,27,61,0.06)] hover:border-emerald-700/20 flex flex-col justify-between items-start space-y-4 hover:-translate-y-1.5 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shadow-xs mb-4 transition-all duration-300">
                  <Mail className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="font-extrabold text-[#0b1b3d] text-base group-hover:text-emerald-800 transition-colors">Email Us</h4>
                <p className="text-slate-900 font-extrabold text-sm sm:text-base mt-2">asventurertm@gmail.com</p>
                <p className="text-slate-400 text-xs mt-1 font-semibold">We reply within 30 mins</p>
              </div>
              <a href="mailto:asventurertm@gmail.com" className="text-xs font-extrabold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1 transition-colors">
                <span>Send Email</span>
                <span className="text-sm">➔</span>
              </a>
            </div>

            {/* Card 3: Office Address */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(11,27,61,0.06)] hover:border-emerald-700/20 flex flex-col justify-between items-start space-y-4 hover:-translate-y-1.5 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shadow-xs mb-4 transition-all duration-300">
                  <MapPin className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="font-extrabold text-[#0b1b3d] text-base group-hover:text-emerald-800 transition-colors">Office Address</h4>
                <p className="text-slate-700 text-xs mt-2 font-bold leading-relaxed">
                  Registered Office <br/>
                  1st Floor, Hani Hardware, Station Road,
                </p>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                  Ratlam, 457001 (MP)
                </p>
              </div>
              <a href="#map" className="text-xs font-extrabold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1 transition-colors">
                <span>Get Directions</span>
                <span className="text-sm">➔</span>
              </a>
            </div>

            {/* Card 4: Business Hours */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(11,27,61,0.06)] hover:border-emerald-700/20 flex flex-col justify-between items-start space-y-4 hover:-translate-y-1.5 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center shadow-xs mb-4 transition-all duration-300">
                  <Clock className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="font-extrabold text-[#0b1b3d] text-base group-hover:text-emerald-800 transition-colors">Business Hours</h4>
                <p className="text-slate-900 font-extrabold text-sm sm:text-base mt-2">Monday - Saturday</p>
                <p className="text-slate-400 text-xs mt-1 font-semibold">9:00 AM - 7:00 PM</p>
              </div>
              <span className="text-xs font-extrabold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1 cursor-pointer transition-colors">
                <span>View Schedule</span>
                <span className="text-sm">➔</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEND US A MESSAGE FORM + INTERACTIVE MAP */}
      <section id="contact-form-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between shadow-xs">
              
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-black text-[#0b1b3d] font-display">Send Us a Message</h3>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Fill out the form and our experts will get in touch with you.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 text-center space-y-4 animate-scale-up my-auto" id="form-success-banner">
                  <span className="text-4xl">🎉</span>
                  <h4 className="text-emerald-800 font-extrabold text-lg">Inquiry Submitted Successfully!</h4>
                  <p className="text-emerald-600 text-xs leading-relaxed max-w-sm mx-auto">
                    Thank you. Your request for solar consultation has been received. Our engineering experts will contact you shortly to configure your free 3D shading design.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form-inner">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5" htmlFor="form-name">Full Name *</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-lg px-4 py-3 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5" htmlFor="form-phone">Phone Number *</label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-lg px-4 py-3 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5" htmlFor="form-email">Email Address *</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-lg px-4 py-3 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5" htmlFor="form-city">City *</label>
                      <input
                        id="form-city"
                        type="text"
                        required
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter your city"
                        className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-lg px-4 py-3 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5" htmlFor="form-bill">Monthly Electricity Bill (₹) *</label>
                      <input
                        id="form-bill"
                        type="number"
                        required
                        name="bill"
                        value={formData.bill}
                        onChange={handleInputChange}
                        placeholder="Enter your monthly bill"
                        className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-lg px-4 py-3 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5" htmlFor="form-service">Service Required *</label>
                      <select
                        id="form-service"
                        required
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 text-slate-800 rounded-lg px-4 py-3 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Solar Solutions</option>
                        <option value="commercial">Commercial Solar Solutions</option>
                        <option value="industrial">Industrial Solar Solutions</option>
                        <option value="pump">Solar Water Pump</option>
                        <option value="light">Solar Street Light</option>
                        <option value="ev">EV Charging Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5" htmlFor="form-message">Message *</label>
                    <textarea
                      id="form-message"
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirement..."
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-lg px-4 py-3 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-md shadow-emerald-700/10 hover:shadow-emerald-700/30 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Request Free Consultation</span>
                    <span className="text-sm">➔</span>
                  </button>

                  <div className="flex items-center justify-center space-x-1.5 text-[10px] text-slate-400 font-bold mt-2">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your information is secure and will never be shared.</span>
                  </div>

                </form>
              )}

            </div>

            {/* REAL GOOGLE MAP EMBED (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-100 rounded-3xl p-6 shadow-xs relative overflow-hidden" id="map">
              <div className="relative flex-grow min-h-[350px] bg-[#E8ECEF] rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center">
                <iframe 
                  title="AS Solar Solutions Location"
                  src="https://maps.google.com/maps?q=Hani+Hardware,+Station+Road,+Ratlam,+457001&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CERTIFICATIONS STRIP / FOOTER BADGE STRIP - Perfectly styled strip as requested */}
      <section id="contact-trust-highlights" className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="trust-strip">
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100/80 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300" id="trust-card-mnre">
              <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full">
                <Award className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-sm">MNRE</p>
                <p className="text-xs text-slate-500 font-semibold">Approved Vendor</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100/80 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300" id="trust-card-warranty">
              <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-sm">25-Year</p>
                <p className="text-xs text-slate-500 font-semibold">Performance Warranty</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100/80 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300" id="trust-card-team">
              <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full">
                <Wrench className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-sm">Expert Team</p>
                <p className="text-xs text-slate-500 font-semibold">Professional Installation</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100/80 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300" id="trust-card-support">
              <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full">
                <Headphones className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-sm">After-Sales Support</p>
                <p className="text-xs text-slate-500 font-semibold">Always Here to Help</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </motion.div>
  );
}