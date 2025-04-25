import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer style={{ backgroundColor: '#325670' }} className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">
              {language === 'de' ? 'Ferienhaus Crailsheim-Roßfeld' : 'Vacation Home Crailsheim-Roßfeld'}
            </h3>
            <p className="text-white">Im Schanzbuck</p>
            <p className="text-white">74564 Crailsheim-Roßfeld</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">{t('contact_footer')}</h3>
            <p className="text-white">{t('email_footer')} fewo.rossfeld@gmail.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">{t('legal')}</h3>
            <ul>
              <li><a href="/impressum" className="text-white hover:text-gray-200 transition duration-200">{t('imprint')}</a></li>
              <li><a href="/datenschutz" className="text-white hover:text-gray-200 transition duration-200">{t('privacy_policy')}</a></li>
              <li><a href="/agb" className="text-white hover:text-gray-200 transition duration-200">{t('terms')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-white">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
