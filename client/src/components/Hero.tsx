import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="uebersicht" className="py-12 relative" style={{ backgroundColor: '#F5F0E1' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl" style={{ border: '5px solid white' }}>
              <img 
                src="/img/Eingangsbereich_Haus.JPG" 
                alt="Ferienhaus Außenansicht" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ color: '#4A4A4A' }}>
              {t('welcome')}
            </h2>
            <p className="text-lg mb-8" style={{ color: '#463A22' }}>
              {t('welcomeText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <a 
                href="/wohnung1" 
                className="px-6 py-3 rounded-md text-center transition duration-200 font-medium text-white" style={{ backgroundColor: '#325670' }}
              >
                {t('discoverApartment1')}
              </a>
              <a 
                href="/wohnung2" 
                className="px-6 py-3 rounded-md text-center transition duration-200 font-medium text-white" 
                style={{ 
                  backgroundColor: '#5A82A5',
                }}
              >
                {language === 'de' ? 'Wohnung 2 - Coming Soon' : 'Apartment 2 - Coming Soon'}
              </a>
            </div>
            <div>
              <a 
                href="/kontakt" 
                className="bg-transparent border-2 px-6 py-3 rounded-md text-center transition duration-200 font-medium inline-block" style={{ borderColor: '#325670', color: '#325670' }}
              >
                {t('sendInquiry')}
              </a>
            </div>
          </div>
        </div>
        
        {/* Dekorative Elemente */}
        <div className="absolute top-0 right-0 w-28 h-28 md:w-40 md:h-40 -z-10 opacity-20" style={{ backgroundColor: '#325670', borderRadius: '0 0 0 100%' }}></div>
        <div className="absolute bottom-0 left-0 w-28 h-28 md:w-40 md:h-40 -z-10 opacity-20" style={{ backgroundColor: '#325670', borderRadius: '0 100% 0 0' }}></div>
      </div>
    </section>
  );
};

export default Hero;
