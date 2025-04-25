import React from 'react';
import Contact from '@/components/Contact';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pb-16">
      <div className="py-16 bg-gradient-to-b from-[#E6DCC6] to-[#F8F4E8]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="gradient-heading text-4xl md:text-5xl font-bold mb-4">
              {language === 'de' ? 'Kontakt & Buchung' : 'Contact & Booking'}
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#463A22' }}>
              {language === 'de' 
                ? 'Senden Sie uns eine Anfrage oder buchen Sie direkt' 
                : 'Send us an inquiry or book directly'}
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;