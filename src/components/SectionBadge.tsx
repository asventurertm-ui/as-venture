import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative inline-flex items-center justify-center px-6 py-2.5 bg-blue-600/[0.04] backdrop-blur-md text-[#1d4ed8] tracking-[0.22em] uppercase text-[11px] sm:text-xs font-extrabold font-sans select-none shadow-[0_4px_12px_rgba(29,78,216,0.03)] ${className}`}>
      {/* High-Contrast L-shaped Cyber Corner Borders */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-blue-500"></div>
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-blue-500"></div>
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-blue-500"></div>
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-blue-500"></div>
      
      <span className="relative z-10 leading-none">{children}</span>
    </div>
  );
};
