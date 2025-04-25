import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Location: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16" id="location" style={{ backgroundColor: '#F8F4E8' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-3" style={{ color: "#4A4A4A" }}>{t('locationEnvironment')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#463A22' }}>
            {t('perfectLocation')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg" style={{ border: '1px solid #E6DCC6' }}>
              <h3 className="text-xl font-heading font-semibold mb-4" style={{ color: "#4A4A4A" }}>{t('address')}</h3>
              <p className="mb-5 text-lg">Im Schanzbuck<br />74564 Crailsheim-Roßfeld</p>
              
              <div className="rounded-lg overflow-hidden mb-3 shadow-md" style={{ background: '#f0f0f0', minHeight: '250px' }}>
                {language === 'de' ? (
                  <iframe 
                    width="100%" 
                    height="250"
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=de&amp;q=Im+Schanzbuck,+74564+Crailsheim&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Location Map"
                    className="border-0"
                    style={{ display: 'block' }}
                  />
                ) : (
                  <iframe 
                    width="100%" 
                    height="250"
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=Im+Schanzbuck,+74564+Crailsheim&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Location Map"
                    className="border-0"
                    style={{ display: 'block' }}
                  />
                )}
              </div>
              <p className="text-sm italic text-gray-600">{t('clickMap')}</p>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg h-full" style={{ border: '1px solid #E6DCC6' }}>
              <h3 className="text-xl font-heading font-semibold mb-5" style={{ color: "#4A4A4A" }}>{t('nearby')}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-semibold flex items-center mb-3" style={{ color: "#4A4A4A" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3h2l.5 3"/>
                      <path d="M7 13h10l4-9H5.5M7 13 5.5 6M7 13l-2.3 4.5"/>
                      <circle cx="8.5" cy="19.5" r="1.5"/>
                      <circle cx="16.5" cy="19.5" r="1.5"/>
                    </svg>
                    {t('shopping')}
                  </h4>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>Aldi Süd (0,8 km)</li>
                    <li>Kaufland (0,6 km)</li>
                    <li>Bäckerei Hessenauer (0,25 km)</li>
                    <li>{t('moreShops')}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-heading font-semibold flex items-center mb-3" style={{ color: "#4A4A4A" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
                      <line x1="6" x2="18" y1="17" y2="17"/>
                    </svg>
                    {t('gastronomy')}
                  </h4>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>{t('localRestaurants')}</li>
                    <li>{t('pizzeria')}</li>
                    <li>{t('sushiRestaurant')}</li>
                    <li>{t('kebabHouse')}</li>
                    <li>McDonald's</li>
                    <li>Subway</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-heading font-semibold flex items-center mb-3" style={{ color: "#4A4A4A" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m2 16 6-6M2 10l10 10M12 20l4-4M10 4l4 4 4-4"/>
                    </svg>
                    {t('leisure')}
                  </h4>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>{t('cinemaCity')} (3,3 km)</li>
                    <li>{t('beatBowl')} (6,6 km)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-heading font-semibold flex items-center mb-3" style={{ color: "#4A4A4A" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6.5 6.5h11"></path>
                      <path d="M20 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                      <path d="M4 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                      <path d="M16 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                      <path d="M8 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                      <path d="M12 12v4"></path>
                      <path d="M12 12h4"></path>
                    </svg>
                    {t('sports')}
                  </h4>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>{t('fitnessStudio1')} (0,2 km)</li>
                    <li>{t('fitnessStudio2')} (0,4 km)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-heading font-semibold flex items-center mb-3" style={{ color: "#4A4A4A" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 17h8"></path>
                      <path d="M8 7h8"></path>
                      <path d="M3 9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v0Z"></path>
                      <path d="M3 17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v0Z"></path>
                    </svg>
                    {t('publicTransport')}
                  </h4>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>{t('busStop')} (100 m)</li>
                    <li>{language === 'de' ? 'Bahnhof Crailsheim (unter 10 Min. mit dem Bus)' : 'Crailsheim train station (less than 10 min by bus)'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto" style={{ border: '1px solid #E6DCC6' }}>
          <p className="text-lg" style={{ color: '#463A22' }}>
            {t('locationDescription')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
