import React from 'react';
import { Link } from 'wouter';
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
            <p className="text-white">Im Schanzbuck 48</p>
            <p className="text-white">74564 Crailsheim-Roßfeld</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">{t('contact_footer')}</h3>
            <p className="text-white">{t('email_footer')} fewo.rossfeld@gmail.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">{t('legal')}</h3>
            <ul>
              <li><Link to="/impressum" className="text-white hover:text-gray-200 transition duration-200">{t('imprint')}</Link></li>
              <li><Link to="/datenschutz" className="text-white hover:text-gray-200 transition duration-200">{t('privacy_policy')}</Link></li>
              <li><Link to="/agb" className="text-white hover:text-gray-200 transition duration-200">{t('terms')}</Link></li>
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
