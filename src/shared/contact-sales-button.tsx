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
      <button
        onClick={handleContactSalesClick}
        className="inline-block bg-gradient-to-b from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-3 rounded-full transition-all text-base"
      >
        Contact Sales
      </button>
      
      <ContactSalesModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}