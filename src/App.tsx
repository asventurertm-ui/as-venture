import React, { useState } from 'react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ContactView from './components/ContactView';
import AchievementsView from './components/AchievementsView'; // 1. Added import for Achievements
import CertificatesAndPartnersView from './components/PartnersView'
import { X, CheckCircle, Send, Lock } from 'lucide-react';
import QuoteModal from './components/QuoteModal';
import InstagramButton from "./components/InstagramButton";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: '',
    phone: '',
    email: '',
    bill: '',
    city: ''
  });

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setModalSubmitted(false);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setModalSubmitted(false);
  };

  const handleModalFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModalForm(prev => ({ ...prev, [name]: value }));
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalForm.name && modalForm.phone && modalForm.email) {
      setModalSubmitted(true);
      setModalForm({
        name: '',
        phone: '',
        email: '',
        bill: '',
        city: ''
      });
      // Auto close after some time
      setTimeout(() => {
        closeQuoteModal();
      }, 5000);
    }
  };

  const renderActiveView = () => {
  switch (activeTab) {
    case 'home':
      return <HomeView setActiveTab={setActiveTab} openQuoteModal={openQuoteModal} />;
    case 'about':
      return <AboutView setActiveTab={setActiveTab} openQuoteModal={openQuoteModal} />;
    case 'services':
      return <ServicesView setActiveTab={setActiveTab} openQuoteModal={openQuoteModal} />;
    case 'achievements':
      return <AchievementsView />;
    case 'partners': // 2. Add this case
      return <CertificatesAndPartnersView />;
    case 'contact':
      return <ContactView openQuoteModal={openQuoteModal} />;
    default:
      return <HomeView setActiveTab={setActiveTab} openQuoteModal={openQuoteModal} />;
  }
};

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-emerald-500 selection:text-white" id="main-app-container">
      
      {/* Dynamic Header Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openQuoteModal={openQuoteModal} 
      />

      {/* Primary Page Canvas */}
      <main className="flex-grow" id="primary-view-canvas">
        {renderActiveView()}
      </main>

      {/* Integrated Page Footer */}
     <Footer setActiveTab={setActiveTab} />

<InstagramButton />

<QuoteModal
   isQuoteModalOpen={isQuoteModalOpen} 
   closeQuoteModal={() => setIsQuoteModalOpen(false)} 
/>

    </div>
  );
}