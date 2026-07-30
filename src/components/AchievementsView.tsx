import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, CheckCircle, X } from 'lucide-react';
import { SectionBadge } from './SectionBadge'; 

const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "Global Solar Expo",
    category: "Acheivements",
    image: "/as-venture-acheivements.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Premier Solar",
    category: "Installation",
    image: "/as-venture-premier.solar.jpeg",
    size: "small",
  },
  {
    id: 3,
    title: "Saatvik Solar",
    category: "Partnership",
    image: "/as-venture-saatvik.solar.png",
    size: "small",
  },
  {
    id: 4,
    title: "Tata Solar",
    category: "Residential",
    image: "/as-venture-tata.solar.jpg",
    size: "small",
  },
  {
    id: 5,
    title: "Vikram Solar",
    category: "Industrial",
    image: "/as-venture-vikram.solar.jpg",
    size: "tall",
  },
  {
    id: 6,
    title: "Waaree Solar",
    category: "Mega Project",
    image: "/as-venture-waaree.solar.jpg",
    size: "wide",
  },
  {
    id: 7,
    title: "AS Venture Certificate",
    category: "Certification",
    image: "/as-venture-certificate.jpeg",
    size: "small",
  },
  {
    id: 8,
    title: "Certificate II",
    category: "Certification",
    image: "/as-venture-certificate2.jpeg",
    size: "small",
  },
  {
    id: 9,
    title: "Certificate III",
    category: "Certification",
    image: "/as-venture-certificate3.jpeg",
    size: "wide",
  },
  {
    id: 10,
    title: "Certificate IV",
    category: "Certification",
    image: "/as-venture-certificate4.jpeg",
    size: "small",
  },
];

export default function AchievementsView() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const getGridSpanClasses = (size: string) => {
    switch (size) {
      case 'large': return 'col-span-2 row-span-2';
      case 'wide': return 'col-span-2 row-span-1';
      case 'tall': return 'col-span-1 row-span-2';
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-slate-50 min-h-screen py-16 sm:py-24"
      id="achievements-view"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-6">
          <SectionBadge>Our Pride</SectionBadge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Milestones & <span className="text-emerald-700">Achievements</span>
          </h1>
          <p className="text-slate-500 text-base leading-relaxed">
            Every project completed is a testament to our commitment to engineering excellence across Central India.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
          {ACHIEVEMENTS_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(item.image)}
              className={`relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-slate-200 ${getGridSpanClasses(item.size)}`}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3d]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">{item.category}</span>
                <h3 className="text-sm md:text-lg font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}