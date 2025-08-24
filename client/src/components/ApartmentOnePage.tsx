import React from 'react';
import ApartmentOne from '@/components/ApartmentOne';
import { useLanguage } from '@/contexts/LanguageContext';

const ApartmentOnePage: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pb-16">
      {/* Hero section with enhanced styling */}
      <div className="py-20 bg-gradient-to-b from-[#E6DCC6] to-[#F8F4E8] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#606C38] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#606C38] rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" 
                style={{ 
                  color: '#463A22',
                  textShadow: '0px 1px 1px rgba(255, 255, 255, 0.5)'
                }}>
              {language === 'de' ? 'Wohnung 1' : 'Apartment 1'}
            </h1>
            <div className="w-24 h-1 bg-[#606C38] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" 
               style={{ color: '#463A22' }}>
              {language === 'de' 
                ? 'Voll ausgestattete 4-Zimmer-Wohnung im EG – ideal für Geschäftsreisende und Feriengäste' 
                : 'Fully equipped 4-room apartment on the ground floor - ideal for business travelers and vacationers'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
              <div className="flex items-center text-[#463A22] bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M2 9V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
                  <path d="M2 13v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  <path d="M2 9h20" />
                </svg>
                <span className="font-medium">{language === 'de' ? '3 Schlafzimmer' : '3 Bedrooms'}</span>
              </div>
              
              <div className="flex items-center text-[#463A22] bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M3 12h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2z" />
                  <path d="M21 12h-4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2z" />
                  <path d="M19 22v-6a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v6" />
                  <path d="M7 10v1" />
                  <path d="M17 10v1" />
                </svg>
                <span className="font-medium">1 {language === 'de' ? 'Bad' : 'Bath'}</span>
              </div>
              
              <div className="flex items-center text-[#463A22] bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M8 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
                  <path d="M8 10h12" />
                  <path d="M12 4v16" />
                </svg>
                <span className="font-medium">1 {language === 'de' ? 'Separates WC' : 'Separate Toilet'}</span>
              </div>
              
              <div className="flex items-center text-[#463A22] bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M19 9h-5a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5" />
                  <rect width="19" height="12" x="3" y="8" rx="2" />
                  <path d="M12 8v12" />
                  <path d="M3 14h12" />
                </svg>
                <span className="font-medium">{language === 'de' ? 'Küche mit Essbereich' : 'Kitchen with dining area'}</span>
              </div>
              
              <div className="flex items-center text-[#463A22] bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="18" height="12" x="3" y="7" rx="2" />
                  <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
                  <path d="M12 12v3" />
                  <path d="M8 12h8" />
                </svg>
                <span className="font-medium">1 {language === 'de' ? 'Wohnzimmer' : 'Living room'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="bg-white py-2 sticky top-[52px] z-40 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-2">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
              <a 
                href="#checkin" 
                className="px-3 py-1 rounded-full transition-all text-xs md:text-sm font-medium"
                style={{ 
                  backgroundColor: '#F8F4E8', 
                  color: '#4A4A4A',
                  border: '1px solid #E6DCC6',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {language === 'de' ? 'Check-In' : 'Check-In'}
              </a>
              <a 
                href="#bedrooms" 
                className="px-3 py-1 rounded-full transition-all text-xs md:text-sm font-medium"
                style={{ 
                  backgroundColor: '#F8F4E8', 
                  color: '#4A4A4A',
                  border: '1px solid #E6DCC6',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {language === 'de' ? 'Schlafzimmer' : 'Bedrooms'}
              </a>
              <a 
                href="#kitchen" 
                className="px-3 py-1 rounded-full transition-all text-xs md:text-sm font-medium"
                style={{ 
                  backgroundColor: '#F8F4E8', 
                  color: '#4A4A4A',
                  border: '1px solid #E6DCC6',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {language === 'de' ? 'Küche' : 'Kitchen'}
              </a>
              <a 
                href="#livingroom" 
                className="px-3 py-1 rounded-full transition-all text-xs md:text-sm font-medium"
                style={{ 
                  backgroundColor: '#F8F4E8', 
                  color: '#4A4A4A',
                  border: '1px solid #E6DCC6',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {language === 'de' ? 'Wohnzimmer' : 'Living Room'}
              </a>
              <a 
                href="#bathroom" 
                className="px-3 py-1 rounded-full transition-all text-xs md:text-sm font-medium"
                style={{ 
                  backgroundColor: '#F8F4E8', 
                  color: '#4A4A4A',
                  border: '1px solid #E6DCC6',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {language === 'de' ? 'Bad & WC' : 'Bath & WC'}
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-2 md:mt-0">
              <a 
                href="#prices" 
                className="px-3 py-1 rounded-full transition-all text-xs md:text-sm font-medium"
                style={{ 
                  backgroundColor: '#325670', 
                  color: 'white',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                {language === 'de' ? 'Preise' : 'Prices'}
              </a>
              <a 
                href="#availability" 
                className="px-3 py-1 rounded-full transition-all text-xs md:text-sm font-medium"
                style={{ 
                  backgroundColor: '#325670', 
                  color: 'white',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                {language === 'de' ? 'Verfügbarkeit' : 'Availability'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <ApartmentOne />
    </div>
  );
};

export default ApartmentOnePage;