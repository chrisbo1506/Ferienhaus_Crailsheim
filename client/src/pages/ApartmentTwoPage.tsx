import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const ApartmentTwoPage: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8F4E8' }}>
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6 flex justify-center">
            <HiOutlineWrenchScrewdriver size={80} className="text-gray-400" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4" style={{ color: '#325670' }}>
            {language === 'de' ? 'Wohnung 2 - In Renovierung' : 'Apartment 2 - Under Renovation'}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {language === 'de' 
              ? 'Diese Wohnung wird derzeit renoviert und ist bald verfügbar.' 
              : 'This apartment is currently being renovated and will be available soon.'}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-100">
            <h2 className="text-xl font-heading font-semibold mb-3" style={{ color: '#325670' }}>
              {language === 'de' ? 'Weitere Informationen folgen' : 'More information coming soon'}
            </h2>
            <p className="text-gray-600 mb-4">
              {language === 'de'
                ? 'Wir arbeiten daran, diese Wohnung für Sie so komfortabel wie möglich zu gestalten. Schauen Sie bald wieder vorbei oder kontaktieren Sie uns für weitere Informationen.'
                : 'We are working to make this apartment as comfortable as possible for you. Check back soon or contact us for more information.'}
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link href="/kontakt">
              <Button 
                className="font-medium px-6 py-3 rounded-md transition-all duration-300"
                style={{ 
                  backgroundColor: '#325670',
                  color: 'white',
                  boxShadow: '0 4px 14px 0 rgba(50, 86, 112, 0.2)',
                }}
              >
                {language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApartmentTwoPage;