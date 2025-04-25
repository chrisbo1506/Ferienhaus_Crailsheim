import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

const ApartmentTwo: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16" style={{ backgroundColor: '#F8F4E8' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-8" style={{ color: "#4A4A4A" }}>
            {language === 'de' ? 'In Kürze verfügbar' : 'Coming Soon'}
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg" style={{ border: '1px solid #E6DCC6' }}>
            <div className="flex justify-center">
              <div className="text-6xl mb-6" style={{ color: "#4A4A4A" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
                  <path d="M1 21h22"></path>
                  <path d="M9 7h6"></path>
                  <path d="M9 11h6"></path>
                  <path d="M9 15h6"></path>
                </svg>
              </div>
            </div>
            
            <p className="text-xl mb-6" style={{ color: '#463A22' }}>
              {language === 'de' 
                ? 'Unsere zweite Ferienwohnung wird derzeit renoviert und steht in Kürze zur Verfügung.' 
                : 'Our second vacation apartment is currently being renovated and will be available soon.'}
            </p>
            
            <p className="text-lg mb-10" style={{ color: '#463A22' }}>
              {language === 'de' 
                ? 'Für weitere Informationen oder um über die Verfügbarkeit informiert zu werden, kontaktieren Sie uns bitte.' 
                : 'For more information or to be notified about availability, please contact us.'}
            </p>
            
            <div className="flex justify-center">
              <a href="/kontakt" className="px-6 py-3 text-white rounded-md hover:opacity-90 transition duration-300 shadow-md font-medium" style={{ backgroundColor: '#325670' }}>
                {language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}
              </a>
            </div>
          </div>
          
          <div className="mt-16 bg-white p-6 rounded-lg shadow-md" style={{ border: '1px solid #E6DCC6' }}>
            <h3 className="text-2xl font-heading font-medium mb-4" style={{ color: "#4A4A4A" }}>
              {language === 'de' ? 'Melden Sie sich für Updates an' : 'Sign Up for Updates'}
            </h3>
            
            <p className="mb-6" style={{ color: '#463A22' }}>
              {language === 'de' 
                ? 'Schauen Sie regelmäßig vorbei oder kontaktieren Sie uns, um Updates zu erhalten, sobald die Wohnung verfügbar ist.' 
                : 'Check back regularly or contact us to receive updates as soon as the apartment becomes available.'}
            </p>
            
            <div className="flex justify-center">
              <Link href="/" className="px-6 py-2 border-2 rounded-md font-medium transition duration-300" style={{ 
                borderColor: '#325670',
                color: '#325670'
              }}>
                {language === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentTwo;