import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const { t, switchLanguage, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  
  // Funktion für die Navigation zur Startseite (immer ganz nach oben scrollen)
  const handleOverviewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location === '/') {
      // Wenn bereits auf der Startseite, zum Anfang scrollen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Bei Navigation von anderen Seiten zur Startseite
      // Flag setzen, dass kein Auto-Scroll zu anderen Bereichen erfolgen soll
      sessionStorage.setItem('scrollToTop', 'true');
      window.location.href = '/';
    }
  };

  // Funktion, um zum Location-Bereich zu scrollen
  const handleLocationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Beim Klick speichern wir immer die aktuelle Spracheinstellung
    // um sicherzustellen, dass sie bei der Navigation erhalten bleibt
    
    // Wenn wir nicht auf der Startseite sind, zuerst dorthin navigieren mit Hash
    if (location !== '/') {
      sessionStorage.setItem('scrollToLocation', 'true');
      // Hier setzen wir kein window.location.href direkt, sondern lassen uns 
      // zur Startseite umleiten und scrollen dann zum Ankerpunkt
      window.location.href = '/'; 
      
      // Setzen wir ein Flag, dass wir zur Location scrollen wollen, nachdem die Seite geladen ist
      sessionStorage.setItem('scrollToLocationAfterLoad', 'true');
    } else {
      // Auf der Startseite direkt zum Ankerpunkt scrollen
      const locationElement = document.getElementById('location');
      if (locationElement) {
        locationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Dieser Effekt sorgt dafür, dass nach dem Laden der Seite
  // geprüft wird, ob zu einer bestimmten Position gescrollt werden soll
  useEffect(() => {
    // Wenn wir auf der Startseite sind
    if (location === '/') {
      // Prüfen, ob zur Location-Sektion gescrollt werden soll
      const shouldScrollToLocation = sessionStorage.getItem('scrollToLocationAfterLoad') === 'true';
      
      if (shouldScrollToLocation) {
        // Kurze Verzögerung, damit die Seite vollständig geladen ist
        const timer = setTimeout(() => {
          const locationElement = document.getElementById('location');
          if (locationElement) {
            locationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          // Flag zurücksetzen
          sessionStorage.removeItem('scrollToLocationAfterLoad');
        }, 300);
        
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      }`} 
      style={{ 
        backgroundColor: '#F8F4E8', 
        borderBottom: '1px solid #E6DCC6'
      }}
    >
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold" style={{ 
              color: '#325670',
              background: 'linear-gradient(to right, #325670, #5A82A5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Ferienhaus Crailsheim
            </span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md"
          style={{ color: "#4A4A4A" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="/" 
                onClick={handleOverviewClick}
                className="font-medium hover:text-primary transition duration-200 relative py-2 group" 
                style={{ color: '#463A22' }}
              >
                {language === 'de' ? 'Übersicht' : 'Overview'}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#325670' }}></span>
              </a>
            </li>
            <li>
              <Link 
                href="/wohnung1" 
                className="font-medium hover:text-primary transition duration-200 relative py-2 group" 
                style={{ color: '#463A22' }}
              >
                {language === 'de' ? 'Wohnung 1' : 'Apartment 1'}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#325670' }}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/wohnung2" 
                className="font-medium hover:text-primary transition duration-200 relative py-2 group" 
                style={{ color: '#463A22' }}
              >
                {language === 'de' ? 'Wohnung 2' : 'Apartment 2'}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#325670' }}></span>
              </Link>
            </li>
            <li>
              <a 
                href="#location" 
                onClick={handleLocationClick}
                className="font-medium hover:text-primary transition duration-200 relative py-2 group" 
                style={{ color: '#463A22' }}
              >
                {language === 'de' ? 'Lage' : 'Location'}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#325670' }}></span>
              </a>
            </li>
            <li>
              <Link 
                href="/kontakt" 
                className="font-medium hover:text-primary transition duration-200 relative py-2 group" 
                style={{ color: '#463A22' }}
              >
                {language === 'de' ? 'Kontakt' : 'Contact'}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#325670' }}></span>
              </Link>
            </li>
            <li>
              <button 
                onClick={switchLanguage} 
                className="flex items-center font-medium transition-colors px-3 py-1 rounded-md border hover:bg-gray-100"
                style={{ 
                  borderColor: '#325670',
                  color: '#325670'
                }}
                title={language === 'de' ? 'Zur englischen Version wechseln' : 'Switch to German version'}
              >
                <span className="mr-1">{language === 'de' ? 'EN' : 'DE'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" x2="22" y1="12" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full mt-4 bg-white rounded-lg shadow-lg absolute top-full left-0 right-0 border-t p-4" style={{ borderColor: '#E6DCC6' }}>
            <ul className="flex flex-col space-y-3">
              <li>
                <a 
                  href="/"
                  onClick={(e) => {
                    handleOverviewClick(e);
                    setMobileMenuOpen(false);
                  }} 
                  className="block py-2 px-4 font-medium hover:bg-gray-50 rounded-md transition" 
                  style={{ color: '#463A22' }}
                >
                  {language === 'de' ? 'Übersicht' : 'Overview'}
                </a>
              </li>
              <li>
                <Link 
                  href="/wohnung1" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block py-2 px-4 font-medium hover:bg-gray-50 rounded-md transition" 
                  style={{ color: '#463A22' }}
                >
                  {language === 'de' ? 'Wohnung 1' : 'Apartment 1'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/wohnung2" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block py-2 px-4 font-medium hover:bg-gray-50 rounded-md transition" 
                  style={{ color: '#463A22' }}
                >
                  {language === 'de' ? 'Wohnung 2' : 'Apartment 2'}
                </Link>
              </li>
              <li>
                <a 
                  href="#location" 
                  onClick={(e) => {
                    handleLocationClick(e);
                    setMobileMenuOpen(false);
                  }} 
                  className="block py-2 px-4 font-medium hover:bg-gray-50 rounded-md transition" 
                  style={{ color: '#463A22' }}
                >
                  {language === 'de' ? 'Lage' : 'Location'}
                </a>
              </li>
              <li>
                <Link 
                  href="/kontakt" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block py-2 px-4 font-medium hover:bg-gray-50 rounded-md transition" 
                  style={{ color: '#463A22' }}
                >
                  {language === 'de' ? 'Kontakt' : 'Contact'}
                </Link>
              </li>
              <li className="pt-2 border-t" style={{ borderColor: '#E6DCC6' }}>
                <button 
                  onClick={() => {
                    switchLanguage();
                    setMobileMenuOpen(false);
                  }} 
                  className="flex items-center py-2 px-4 font-medium w-full text-left rounded-md hover:bg-gray-50 transition"
                  style={{ color: "#4A4A4A" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" x2="22" y1="12" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  {language === 'de' ? 'Englische Version' : 'German Version'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
