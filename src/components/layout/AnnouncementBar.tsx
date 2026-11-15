import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MESSAGES = [
  'COMPLIMENTARY EXPRESS GLOBAL SHIPPING ON ORDERS OVER $100',
  'AUTUMN/WINTER HAUTE CAMPAIGN — NOW LIVE WORLDWIDE',
  'RECEIVE OUR SIGNATURE ATELIER GIFT BOX WITH EVERY OCCASION ABAYA'
];

export const AnnouncementBar: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % MESSAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-black text-brand-sand text-[10px] sm:text-[11px] tracking-super-wide uppercase py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => setCurrentIdx((prev) => (prev - 1 + MESSAGES.length) % MESSAGES.length)}
          className="text-neutral-400 hover:text-white transition-colors p-0.5"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="w-3 h-3" />
        </button>

        <div className="text-center font-medium overflow-hidden whitespace-nowrap truncate flex-1 px-2 transition-all duration-500 ease-in-out">
          <span className="truncate block">{MESSAGES[currentIdx]}</span>
        </div>

        <button
          onClick={() => setCurrentIdx((prev) => (prev + 1) % MESSAGES.length)}
          className="text-neutral-400 hover:text-white transition-colors p-0.5"
          aria-label="Next announcement"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

