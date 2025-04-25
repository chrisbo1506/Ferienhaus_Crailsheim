import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import Location from '@/components/Location';
import ImageSlider from '@/components/ImageSlider';
import Reviews from '@/components/Reviews';

const Home: React.FC = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Prüfen, ob wir von einer anderen Seite kommen und einen bestimmten Bereich anzeigen sollen
    const shouldScrollToLocation = sessionStorage.getItem('scrollToLocation') === 'true' || window.location.hash;
    const shouldScrollToTop = sessionStorage.getItem('scrollToTop') === 'true';
    
    // Priorität: Explizite Anfrage zum Scrollen nach oben geht vor Hash-Links
    if (shouldScrollToTop) {
      // Wenn wir von einer anderen Seite kommen und zum Anfang scrollen sollen
      sessionStorage.removeItem('scrollToTop');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (shouldScrollToLocation) {
      // Wenn wir zu einem bestimmten Bereich scrollen sollen
      if (sessionStorage.getItem('scrollToLocation') === 'true') {
        sessionStorage.removeItem('scrollToLocation');
      }
      
      // Etwas Zeit geben, damit die Seite vollständig geladen wird
      setTimeout(() => {
        const id = window.location.hash ? window.location.hash.replace('#', '') : 'location';
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, []);
  
  // Bilder für die Apartments-Vorschau
  const apartment1Images = [
    { src: '/img/Eingangsbereich_wohnung.JPEG', alt: 'Eingangsbereich Wohnung 1' },
    { src: '/img/Wohnzimmer.JPG', alt: 'Wohnzimmer' },
    { src: '/img/Kueche_1.JPEG', alt: 'Küche' }
  ];
  
  return (
    <div className="pb-16">
      <Hero />
      
      {/* Apartments-Übersicht */}
      <section className="py-16" style={{ backgroundColor: '#F8F4E8' }} id="apartments">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-3" style={{ color: "#4A4A4A" }}>
              {language === 'de' ? 'Unsere Ferienwohnungen' : 'Our Apartments'}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#463A22' }}>
              {language === 'de' 
                ? 'Komfortable, vollständig eingerichtete Wohnungen für Ihren Aufenthalt in Crailsheim' 
                : 'Comfortable, fully furnished apartments for your stay in Crailsheim'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Wohnung 1 */}
            <div className="card overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="h-80 overflow-hidden relative" style={{ height: '300px' }}>
                <ImageSlider images={apartment1Images} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-3" style={{ color: "#4A4A4A" }}>
                  {language === 'de' ? 'Wohnung 1' : 'Apartment 1'}
                </h3>
                <p className="mb-4" style={{ color: '#333333' }}>
                  {language === 'de' 
                    ? 'Voll ausgestattete 4-Zimmer-Wohnung im Erdgeschoss – ideal für Geschäftsreisende und Feriengäste.' 
                    : 'Fully equipped 4-room apartment on the ground floor – ideal for business travelers and vacationers.'}
                </p>
                <ul className="mb-6 space-y-2" style={{ color: '#333333' }}>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {language === 'de' ? 'Drei separate Schlafzimmer' : 'Three separate bedrooms'}
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {language === 'de' ? 'Voll ausgestattete Küche' : 'Fully equipped kitchen'}
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {language === 'de' ? 'Gemütlicher Wohnbereich' : 'Cozy living area'}
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold" style={{ color: "#4A4A4A" }}>€82 / {language === 'de' ? 'Nacht' : 'night'}</span>
                  <Link href="/wohnung1" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition duration-300 font-medium">
                    {language === 'de' ? 'Details ansehen' : 'View Details'}
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Wohnung 2 */}
            <div className="card overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="h-80 bg-gray-200 flex items-center justify-center" style={{ backgroundColor: '#EFE9D9', height: '300px' }}>
                <div className="text-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" style={{ color: "#4A4A4A" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
                    <path d="M1 21h22"></path>
                    <path d="M9 7h6"></path>
                    <path d="M9 11h6"></path>
                    <path d="M9 15h6"></path>
                  </svg>
                  <h4 className="text-xl font-heading font-medium" style={{ color: "#4A4A4A" }}>
                    {language === 'de' ? 'Demnächst verfügbar' : 'Coming Soon'}
                  </h4>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-3" style={{ color: "#4A4A4A" }}>
                  {language === 'de' ? 'Wohnung 2' : 'Apartment 2'}
                </h3>
                <p className="mb-4" style={{ color: '#333333' }}>
                  {language === 'de' 
                    ? 'Unsere zweite Ferienwohnung wird derzeit renoviert und steht in Kürze zur Verfügung.' 
                    : 'Our second vacation apartment is currently being renovated and will be available soon.'}
                </p>
                <div className="h-[108px] flex items-end justify-between">
                  <span className="text-xl font-bold opacity-50" style={{ color: "#4A4A4A" }}>
                    {language === 'de' ? 'In Kürze' : 'Coming soon'}
                  </span>
                  <Link href="/wohnung2" className="px-4 py-2 border-2 rounded-md transition duration-300 font-medium" style={{ borderColor: '#606C38', color: '#606C38' }}>
                    {language === 'de' ? 'Mehr erfahren' : 'Learn More'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Location />
      
      <Reviews />
      
      {/* Call-to-Action */}
      <section className="py-16 text-center" style={{ backgroundColor: '#F2ECE1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4" style={{ color: "#4A4A4A" }}>
              {language === 'de' ? 'Bereit für einen angenehmen Aufenthalt?' : 'Ready for a comfortable stay?'}
            </h2>
            <p className="text-lg mb-8" style={{ color: '#333333' }}>
              {language === 'de' 
                ? 'Kontaktieren Sie uns jetzt für eine Anfrage oder Buchung. Wir freuen uns auf Ihren Besuch!' 
                : 'Contact us now for an inquiry or booking. We look forward to your visit!'}
            </p>
            <Link href="/kontakt" className="px-8 py-3 text-white rounded-md hover:opacity-90 transition duration-300 shadow-lg font-medium inline-block" style={{ backgroundColor: '#325670' }}>
              {language === 'de' ? 'Jetzt anfragen' : 'Inquire Now'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
