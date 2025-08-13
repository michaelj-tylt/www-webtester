'use client';
import { useState } from 'react';
import { ContactSalesModal } from '@/shared/contact-sales-modal';
import { usePostHog } from 'posthog-js/react';

export function ContactSalesButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posthog = usePostHog();

  const handleContactSalesClick = () => {
    posthog?.capture('contact_sales_clicked', {
      location: 'pricing_section',
      button_text: 'Contact Sales'
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
        <button
          onClick={handleContactSalesClick}
          className="relative w-full bg-gradient-to-br from-zinc-800/80 to-zinc-700/60 rounded-xl p-4 backdrop-blur-sm border border-zinc-600/50 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group flex items-center space-x-4"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 text-white">💬</div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">Contact Sales</h3>
          </div>
        </button>
      </div>
      
      <ContactSalesModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}