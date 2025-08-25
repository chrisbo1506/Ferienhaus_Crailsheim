import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import ApartmentTwo from '@/components/ApartmentTwo';
import { useLanguage } from '@/contexts/LanguageContext';

const ApartmentTwoPage: React.FC = () => {
  const { language } = useLanguage();
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top when component mounts or location changes
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="pb-16">
      {/* Hero section with enhanced styling */}
      <div className="py-20 bg-gradient-to-b from-[#E6DCC6] to-[#F8F4E8] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" style={{ backgroundColor: '#606C38' }}></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" style={{ backgroundColor: '#606C38' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" 
                style={{ 
                  color: '#463A22',
                  textShadow: '0px 1px 1px rgba(255, 255, 255, 0.5)'
                }}>
              {language === 'de' ? 'Wohnung 2' : 'Apartment 2'}
            </h1>
            <div className="w-24 h-1 bg-[#606C38] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" 
               style={{ color: '#463A22' }}>
              {language === 'de' 
                ? 'Kompakte 3-Zimmer-Wohnung im OG mit großer Dachterrasse – ideal für Paare und kleine Gruppen' 
                : 'Compact 3-room apartment on the upper floor with large roof terrace - ideal for couples and small groups'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
              <div className="flex items-center text-[#463A22] bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M2 9V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
                  <path d="M2 13v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  <path d="M2 9h20" />
                </svg>
                <span className="font-medium">{language === 'de' ? '2 Schlafzimmer' : '2 Bedrooms'}</span>
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
                  <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
                  <path d="M6 17h12" />
                </svg>
                <span className="font-medium">{language === 'de' ? 'Küche' : 'Kitchen'}</span>
              </div>
              
              <div className="flex items-center text-[#463A22] bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                  <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                  <path d="M5 18v2" />
                  <path d="M19 18v2" />
                </svg>
                <span className="font-medium">{language === 'de' ? 'Wohnzimmer mit Essbereich' : 'Living room with dining area'}</span>
              </div>
              
              <div className="flex items-center text-[#463A22] bg-white bg-opacity-60 px-4 py-2 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span className="font-medium">{language === 'de' ? 'Große Dachterrasse' : 'Large roof terrace'}</span>
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
              <a 
                href="#roofterrace" 
                className="px-3 py-1 rounded-full transition-all text-xs md:text-sm font-medium"
                style={{ 
                  backgroundColor: '#F8F4E8', 
                  color: '#4A4A4A',
                  border: '1px solid #E6DCC6',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                {language === 'de' ? 'Dachterrasse' : 'Roof Terrace'}
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
      <ApartmentTwo />
    </div>
  );
};

export default ApartmentTwoPage;