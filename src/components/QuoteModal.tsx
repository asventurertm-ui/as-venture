import React, { useState } from 'react';
import { X, CheckCircle, Send, Lock } from 'lucide-react';

interface QuoteModalProps {
  isQuoteModalOpen: boolean;
  closeQuoteModal: () => void;
}

export default function QuoteModal({ isQuoteModalOpen, closeQuoteModal }: QuoteModalProps) {
  // Form State
  const [modalForm, setModalForm] = useState({
    name: '',
    phone: '',
    city: '',
    email: '',
    bill: ''
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);

  // Handle Input Changes
  const handleModalFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModalForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle Submit & WhatsApp Redirect
  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (modalForm.name && modalForm.phone && modalForm.email && modalForm.city) {
      
      // 1. Format the message for WhatsApp
      const msg = `*New Solar Quote Request*%0A%0A` +
        `*Name:* ${modalForm.name}%0A` +
        `*Phone:* ${modalForm.phone}%0A` +
        `*Email:* ${modalForm.email}%0A` +
        `*City:* ${modalForm.city}%0A` +
        `*Monthly Bill:* ₹${modalForm.bill || 'Not provided'}`;

      // 2. Open WhatsApp in a new tab
      window.open(`https://wa.me/919009051114?text=${msg}`, '_blank');

      // 3. Show success UI
      setModalSubmitted(true);
      
      // 4. Reset and close after 8 seconds
      setTimeout(() => {
        setModalSubmitted(false);
        closeQuoteModal();
        setModalForm({ name: '', phone: '', email: '', city: '', bill: '' }); 
      }, 8000);
    }
  };

  // If modal is not open, render nothing
  if (!isQuoteModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" id="quote-modal-overlay">
      {/* Backdrop blurring click layer */}
      <div 
        className="absolute inset-0 bg-slate-900/65 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeQuoteModal}
      ></div>
      
      {/* Modal box body */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100/50 animate-scale-up z-10" id="quote-modal-body">
        
        {/* Modal Header */}
        <div className="bg-[#0b1b3d] text-white p-6 sm:p-8 flex justify-between items-center relative">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight font-display">Get Your Free Solar Quote</h3>
            <p className="text-xs text-slate-300 mt-1">Free 3D shading audit within 24 hours</p>
          </div>
          <button 
            onClick={closeQuoteModal}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form content */}
        <div className="p-6 sm:p-8">
          {modalSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-scale-up" id="modal-success">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-2">
                <CheckCircle className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h4 className="text-lg font-extrabold text-slate-900">Request Sent Successfully!</h4>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto">
                Our solar engineers have queued your rooftop request. We will run a satellite simulation and call you shortly to confirm the 3D design blueprint appointment.
              </p>
              <button
                onClick={() => {
                  setModalSubmitted(false);
                  closeQuoteModal();
                  setModalForm({ name: '', phone: '', email: '', city: '', bill: '' });
                }}
                className="mt-4 px-6 py-2.5 bg-[#0b1b3d] text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleModalSubmit} className="space-y-4" id="modal-form-inner">
              
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1" htmlFor="modal-name">Full Name *</label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  name="name"
                  value={modalForm.name}
                  onChange={handleModalFormChange}
                  placeholder="e.g. Anand Sharma"
                  className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-2.5 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1" htmlFor="modal-phone">Phone Number *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    name="phone"
                    value={modalForm.phone}
                    onChange={handleModalFormChange}
                    placeholder="e.g. +91 98989 98989"
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-2.5 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1" htmlFor="modal-city">City *</label>
                  <input
                    id="modal-city"
                    type="text"
                    required
                    name="city"
                    value={modalForm.city}
                    onChange={handleModalFormChange}
                    placeholder="e.g. Bhopal"
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-2.5 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1" htmlFor="modal-email">Email Address *</label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    name="email"
                    value={modalForm.email}
                    onChange={handleModalFormChange}
                    placeholder="anand@gmail.com"
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-2.5 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1" htmlFor="modal-bill">Monthly Electricity Bill (₹)</label>
                  <input
                    id="modal-bill"
                    type="number"
                    name="bill"
                    value={modalForm.bill}
                    onChange={handleModalFormChange}
                    placeholder="e.g. 4500"
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-2.5 text-xs border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all duration-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/40 hover:-translate-y-0.5 cursor-pointer mt-2"
              >
                <span>Submit Free Request</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[9px] text-slate-400 font-bold mt-2">
                <Lock className="w-3 h-3" />
                <span>Your privacy is secured • ISO 9001:2015 Audited Site</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}