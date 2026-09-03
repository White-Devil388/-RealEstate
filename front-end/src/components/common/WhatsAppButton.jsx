import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '919876543210';
  const defaultMsg = encodeURIComponent('Hello Gurukripa Arcon India team, I would like to enquire about your luxury projects and schedule a site visit.');

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center group md:bottom-6 md:right-6">
      <div className="mr-3 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-dark text-[var(--text-inverse)] border border-white/15 text-xs px-4 py-2 rounded-xl shadow-lg whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 w-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform pulse-gold md:h-14 md:w-14"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
