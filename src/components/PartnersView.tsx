import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, X } from "lucide-react";
import { SectionBadge } from "./SectionBadge";
import { PARTNER_SECTIONS } from "../data";

export default function PartnersView() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section
        id="partners"
        className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-5">
          {/* Heading */}
          <div className="text-center mb-20">
            <SectionBadge>Our Network</SectionBadge>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#0b1b3d]">
              Trusted Partners
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-slate-500 text-lg leading-relaxed">
              We collaborate with India's leading solar manufacturers,
              technology providers and finance institutions to deliver
              world-class renewable energy solutions.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-20">
  {PARTNER_SECTIONS.map((section) => {
    const Icon = section.icon;

    return (
      <div key={section.id}>
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm flex items-center justify-center">
            <Icon className="h-7 w-7 text-emerald-600" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-800">
              {section.title}
            </h3>

            <p className="text-slate-500 mt-1 max-w-2xl">
              {section.description}
            </p>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {section.logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={() => setSelectedImage(logo)}
              className="relative group cursor-pointer bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 h-36 flex items-center justify-center p-6 overflow-hidden"
            >
              <img
                src={logo}
                alt={section.title}
                className="max-h-20 max-w-full object-contain transition duration-300 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-slate-700 shadow-lg">
                  View Logo
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-5"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 md:top-8 md:right-8 h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-red-500 transition-all"
            >
              <X className="text-white h-7 w-7" />
            </button>

            {/* Image */}
            <motion.img
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              src={selectedImage}
              alt="Partner"
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}