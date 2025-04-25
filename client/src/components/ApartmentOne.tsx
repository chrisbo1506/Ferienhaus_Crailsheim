import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Gallery from './Gallery';
import GalleryGrid from './GalleryGrid';
import ImageModal from './ImageModal';

const ApartmentOne: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Zustand für das Modal für einzelne Bilder
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>("");
  
  // Funktionen zum Öffnen und Schließen des Modal-Dialogs
  const openImageModal = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedImageAlt(alt);
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
  };
  
  // Bilderdaten für die Küchenbildergalerie
  const kitchenImages = [
    { src: '/img/Kueche_1.JPEG', alt: language === 'de' ? 'Küche Ansicht 1' : 'Kitchen View 1' },
    { src: '/img/Kueche_2.JPEG', alt: language === 'de' ? 'Küche Ansicht 2' : 'Kitchen View 2' },
    { src: '/img/Kueche_3.JPEG', alt: language === 'de' ? 'Küche Ansicht 3' : 'Kitchen View 3' },
  ];

  return (
    <section id="wohnung1" className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#F8F4E8] to-[#E6DCC6] rounded-2xl p-8 shadow-xl">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Wir bieten Ihnen eine großzügige, vollständig möblierte 4-Zimmer-Wohnung im Erdgeschoss in unserem Ferienhaus in Crailsheim-Roßfeld. Die Wohnung wurde mit Blick auf Funktionalität, Komfort und zeitgemäßes Wohnen eingerichtet und eignet sich ideal für Geschäftsreisende, Pendler und Urlauber.' : 'We offer you a spacious, fully furnished 4-room apartment on the ground floor in our vacation home in Crailsheim-Roßfeld. The apartment was furnished with functionality, comfort, and contemporary living in mind and is ideal for business travelers, commuters, and vacationers.'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center mb-12">
          <div className="h-px bg-[#E6DCC6] flex-grow"></div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold px-6 text-center" style={{ color: '#463A22' }}>
            {language === 'de' ? 'Wohnungsausstattung im Detail' : 'Apartment details'}
          </h3>
          <div className="h-px bg-[#E6DCC6] flex-grow"></div>
        </div>
        
        {/* Eigenständiger Zugang & flexibler Check-In */}
        <div id="checkin" className="mb-8 pt-10 -mt-10">
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M7 7h1v1H7z" />
                <path d="M11 7h1v1h-1z" />
                <path d="M15 7h1v1h-1z" />
                <path d="M7 11h1v1H7z" />
                <path d="M11 11h1v1h-1z" />
                <path d="M15 11h1v1h-1z" />
                <path d="M7 15h1v1H7z" />
                <path d="M11 15h1v1h-1z" />
                <path d="M15 15h1v1h-1z" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Eigenständiger Zugang & flexibler Check-In' : 'Independent access & flexible check-in'}
            </h4>
          </div>
          <div className="ml-14 mb-12">
            <p className="text-gray-700 mb-3 leading-relaxed">
              Sowohl die Haustür als auch die Wohnungstür sind mit elektronischen Codeschlössern ausgestattet. Das ermöglicht Ihnen einen einfachen und kontaktlosen Zugang.
            </p>
            <div className="bg-[#F8F4E8] p-3 rounded-lg text-center mb-4 max-w-sm mx-auto shadow-sm">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="border-r border-[#325670] border-opacity-20 pr-1">
                  <h5 className="font-semibold text-sm" style={{ color: '#325670' }}>
                    {language === 'de' ? 'Check-In' : 'Check-In'}
                  </h5>
                  <p className="text-base" style={{ color: '#333333' }}>
                    {language === 'de' ? 'ab 15:00 Uhr' : 'from 3:00 PM'}
                  </p>
                </div>
                <div className="pl-1">
                  <h5 className="font-semibold text-sm" style={{ color: '#325670' }}>
                    {language === 'de' ? 'Check-Out' : 'Check-Out'}
                  </h5>
                  <p className="text-base" style={{ color: '#333333' }}>
                    {language === 'de' ? 'bis 11:00 Uhr' : 'until 11:00 AM'}
                  </p>
                </div>
              </div>
              <div className="border-t border-[#325670] border-opacity-20 pt-1 text-sm">
                <p className="text-[#325670] font-medium">
                  {language === 'de' ? 'Early/Late Check-In auf Anfrage möglich' : 'Early/late check-in available on request'}
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl mx-auto" style={{ maxWidth: '600px' }}>
              <img
                src="/img/Eingangsbereich_wohnung.JPEG"
                alt="Eingangsbereich mit Codeschloss"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Drei individuell gestaltete Schlafzimmer */}
        <div id="bedrooms" className="mb-8 pt-10 -mt-10">
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <path d="M2 9V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
                <path d="M2 13v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                <path d="M2 9h20" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Drei individuell gestaltete Schlafzimmer' : 'Three individually designed bedrooms'}
            </h4>
          </div>
          <div className="ml-14">
            <div className="mb-12">
              <h5 className="text-lg md:text-xl font-semibold mb-3" style={{ color: "#4A4A4A" }}>
                {language === 'de' ? 'Braunes Schlafzimmer' : 'Brown Bedroom'}
              </h5>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {language === 'de' ? 'Ausgestattet mit einem 160 cm breiten Doppelbett. Warme Farbgestaltung sorgt für eine ruhige und behagliche Atmosphäre – ideal zum Abschalten nach einem langen Arbeitstag.' : 'Equipped with a 160 cm wide double bed. Warm color design creates a quiet and cozy atmosphere - ideal for unwinding after a long working day.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-300 hover:shadow-2xl" 
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}
                  onClick={() => openImageModal('/img/braunes_Zimmer_1.JPEG', 'Braunes Schlafzimmer Ansicht 1')}
                >
                  <img
                    src="/img/braunes_Zimmer_1.JPEG"
                    alt="Braunes Schlafzimmer Ansicht 1"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-300 hover:shadow-2xl" 
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}
                  onClick={() => openImageModal('/img/braunes_Zimmer_2.JPEG', 'Braunes Schlafzimmer Ansicht 2')}
                >
                  <img
                    src="/img/braunes_Zimmer_2.JPEG"
                    alt="Braunes Schlafzimmer Ansicht 2"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h5 className="text-lg md:text-xl font-semibold mb-3" style={{ color: "#4A4A4A" }}>
                {language === 'de' ? 'Schwarzes Schlafzimmer' : 'Black Bedroom'}
              </h5>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {language === 'de' ? 'Dieses Zimmer verfügt über ein 140 cm breites Bett mit stilvollen dunklen Möbeln. Der reduzierte Look und funktionale Schnitt machen es besonders beliebt bei Alleinreisenden oder Geschäftsreisenden.' : 'This room has a 140 cm wide bed with stylish dark furniture. The reduced look and functional design make it particularly popular with solo travelers or business travelers.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]" 
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}
                  onClick={() => openImageModal('/img/schwarzes_Zimmer_1.JPG', 'Schwarzes Schlafzimmer Ansicht 1')}
                >
                  <img
                    src="/img/schwarzes_Zimmer_1.JPG"
                    alt="Schwarzes Schlafzimmer Ansicht 1"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]" 
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}
                  onClick={() => openImageModal('/img/schwarzes_Zimmer_2.JPEG', 'Schwarzes Schlafzimmer Ansicht 2')}  
                >
                  <img
                    src="/img/schwarzes_Zimmer_2.JPEG"
                    alt="Schwarzes Schlafzimmer Ansicht 2"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h5 className="text-lg md:text-xl font-semibold mb-3" style={{ color: "#4A4A4A" }}>
                {language === 'de' ? 'Weißes Schlafzimmer' : 'White Bedroom'}
              </h5>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {language === 'de' ? 'Ebenfalls mit einem 140 cm breiten Bett ausgestattet, wirkt dieses Zimmer besonders hell und freundlich. Es eignet sich ideal als Rückzugsort für Paare oder Einzelpersonen.' : 'Also equipped with a 140 cm wide bed, this room appears particularly bright and friendly. It is ideal as a retreat for couples or individuals.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]" 
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}
                  onClick={() => openImageModal('/img/weißes_Zimmer_1.JPEG', 'Weißes Schlafzimmer Ansicht 1')}
                >
                  <img
                    src="/img/weißes_Zimmer_1.JPEG"
                    alt="Weißes Schlafzimmer Ansicht 1"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]" 
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}
                  onClick={() => openImageModal('/img/weißes_Zimmer_2.JPEG', 'Weißes Schlafzimmer Ansicht 2')}
                >
                  <img
                    src="/img/weißes_Zimmer_2.JPEG"
                    alt="Weißes Schlafzimmer Ansicht 2"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 mb-4 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold mb-3" style={{ color: "#4A4A4A" }}>
                {language === 'de' ? 'Standardausstattung aller Schlafzimmer' : 'Standard features of all bedrooms'}
              </h5>
              <p className="text-gray-700">
                {language === 'de' ? 'Alle Schlafzimmer sind mit Nachttischen, Leselampen mit USB-Anschlüssen, geräumigen Kleiderschränken, Schreibtischen und bequemen Stühlen ausgestattet. Sie finden überall hochwertige Matratzen, zusätzliches Nackenstützkissen, frische Bettwäsche sowie Hand- und Badetücher – alles inklusive.' : 'All bedrooms are equipped with bedside tables, reading lamps with USB connections, spacious wardrobes, desks, and comfortable chairs. You will find high-quality mattresses, additional neck support pillows, fresh bed linen as well as hand and bath towels throughout - all inclusive.'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Küche & Essbereich */}
        <div id="kitchen" className="mb-8 pt-10 -mt-10">
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
                <path d="M6 17h12" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Küche mit Essbereich' : 'Kitchen with dining area'}
            </h4>
          </div>
          <div className="ml-8">
            <p className="mb-2">
              {language === 'de' ? 'Die separate Küche mit Essbereich ist funktional eingerichtet und bietet Ihnen genügend Platz für mehrere Personen. Die Ausstattung umfasst:' : 'The separate kitchen with dining area is functionally furnished and offers enough space for several people. The equipment includes:'}
            </p>
            <ul className="list-disc pl-6 mb-4" style={{ color: '#333333' }}>
              <li>{language === 'de' ? 'Kühl-Gefrierkombination' : 'Refrigerator-freezer combination'}</li>
              <li>{language === 'de' ? 'Backofen mit Cerankochfeld' : 'Oven with ceramic cooktop'}</li>
              <li>{language === 'de' ? 'Spülmaschine' : 'Dishwasher'}</li>
              <li>{language === 'de' ? 'Mikrowelle' : 'Microwave'}</li>
              <li>{language === 'de' ? 'Wasserkocher, Handrührgerät, Toaster' : 'Water kettle, hand mixer, toaster'}</li>
              <li>{language === 'de' ? 'Kaffeevollautomat' : 'Fully automatic coffee machine'}</li>
              <li>{language === 'de' ? 'Geschirr und Besteck' : 'Dishes and cutlery'}</li>
              <li>{language === 'de' ? 'Staubsauger, Bügelbrett, Dampfbügeleisen' : 'Vacuum cleaner, ironing board, steam iron'}</li>
            </ul>
            <div className="mb-6">
              {/* Küchenbildergalerie mit Klickfunktion */}
              <GalleryGrid 
                images={kitchenImages} 
                mainImageIndex={0} 
                mainImageHeight={400} 
                regularImageHeight={250} 
              />
            </div>
          </div>
        </div>
        
        {/* Wohnzimmer */}
        <div id="livingroom" className="mb-8 pt-10 -mt-10">
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                <path d="M5 18v2" />
                <path d="M19 18v2" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Wohnzimmer' : 'Living room'}
            </h4>
          </div>
          <div className="ml-8">
            <p className="mb-4" style={{ color: '#333333' }}>
              {language === 'de' ? 'Im separaten Wohnzimmer befindet sich eine gemütliche Sitzecke mit Relaxfunktion sowie ein Smart-TV. Von hier aus gelangen Sie direkt auf die Terrasse.' : 'The separate living room has a cozy seating area with relaxation function and a smart TV. From here you have direct access to the terrace.'}
            </p>
            <div 
              className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]" 
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}
              onClick={() => openImageModal('/img/Wohnzimmer.JPG', 'Wohnzimmer')}
            >
              <img
                src="/img/Wohnzimmer.JPG"
                alt="Wohnzimmer"
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Badezimmer & separates WC */}
        <div id="bathroom" className="mb-8 pt-10 -mt-10">
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <path d="m4 4 2.5 2.5" />
                <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
                <path d="M15 5 5 15" />
                <path d="M14 17v.01" />
                <path d="M10 16v.01" />
                <path d="M13 13v.01" />
                <path d="M16 10v.01" />
                <path d="M11 20v.01" />
                <path d="M17 14v.01" />
                <path d="M20 11v.01" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Badezimmer & separates WC' : 'Bathroom & separate toilet'}
            </h4>
          </div>
          <div className="ml-8">
            <p className="mb-4">
              {language === 'de' ? 'Das Badezimmer ist mit einer praktischen Eckbadewanne inkl. Duschwand ausgestattet. Zusätzlich stehen eine Waschmaschine und ein Trockner zur Verfügung – besonders praktisch für Langzeitgäste. Das WC befindet sich in einem separaten Raum.' : 'The bathroom is equipped with a practical corner bathtub including shower wall. Additionally, a washing machine and dryer are available - especially practical for long-term guests. The toilet is located in a separate room.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]" 
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' }}
                onClick={() => openImageModal('/img/Bad_1.JPEG', 'Badezimmer')}
              >
                <img
                  src="/img/Bad_1.JPEG"
                  alt="Badezimmer"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]" 
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' }}
                onClick={() => openImageModal('/img/Bad_2.JPEG', 'Badezimmer weitere Ansicht')}
              >
                <img
                  src="/img/Bad_2.JPEG"
                  alt="Badezimmer weitere Ansicht"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]" 
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' }}
                onClick={() => openImageModal('/img/Toilette.JPEG', 'Separates WC')}
              >
                <img
                  src="/img/Toilette.JPEG"
                  alt="Separates WC"
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Internet & Unterhaltung und weitere Ausstattung */}
        <div className="mb-8">
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12" y2="20.01" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Internet & Unterhaltung' : 'Internet & Entertainment'}
            </h4>
          </div>
          <div className="ml-8 mb-6">
            <p>
              {language === 'de' ? 'In der Wohnung und auf der Terrasse steht Ihnen ein Gäste-WLAN für alltägliche Online-Aktivitäten, Streaming oder Homeoffice zur Verfügung. Der Smart-TV bietet Zugang zu gängigen Streamingdiensten.' : 'In the apartment and on the terrace, guest WiFi is available for everyday online activities, streaming, or home office. The smart TV provides access to common streaming services.'}
            </p>
          </div>
          
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Außenbereich & Parkmöglichkeiten' : 'Outdoor area & parking'}
            </h4>
          </div>
          <div className="ml-8 mb-6">
            <ul className="list-disc pl-6">
              <li>{language === 'de' ? 'Ab dem Frühjahr lädt eine möblierte Terrasse zum Verweilen ein.' : 'From spring, a furnished terrace invites you to linger.'}</li>
              <li>{language === 'de' ? 'Eine E-Ladestation für Elektroautos und E-Bikes befindet sich direkt vor dem Haus und kann auf Anfrage dazu gebucht werden.' : 'An e-charging station for electric cars and e-bikes is located directly in front of the house and can be booked on request.'}</li>
              <li>{language === 'de' ? 'Zusätzlich stehen auf dem Grundstück private Parkplätze zur Verfügung.' : 'Additionally, private parking spaces are available on the property.'}</li>
            </ul>
          </div>
          
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
                <path d="M18 8c0-2.5-2-2.5-2-5" />
                <path d="m2 2 20 20" />
                <path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
                <path d="M22 8c0-2.5-2-2.5-2-5" />
                <path d="M7 12v4" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Hinweis für Raucher' : 'Information for smokers'}
            </h4>
          </div>
          <div className="ml-8">
            <p>
              {language === 'de' ? 'Rauchen ist ausschließlich im Außenbereich erlaubt. Ein Aschenbecher steht auf dem Bistrotisch vor dem Eingang bereit.' : 'Smoking is only allowed in the outdoor area. An ashtray is provided on the bistro table in front of the entrance.'}
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 shadow-md mb-8">
          <h4 className="text-xl font-semibold mb-4 text-center" style={{ color: '#463A22' }}>
            {language === 'de' ? 'Komplette Ausstattung – Alles, was Sie brauchen' : 'Complete equipment - Everything you need'}
          </h4>
          <p className="mb-4">
            {language === 'de' ? 'Unsere Wohnung ist vollständig eingerichtet, sodass Sie nur Ihre persönlichen Dinge mitbringen müssen. Zur Standardausstattung in allen Räumen gehören:' : 'Our apartment is fully furnished so that you only need to bring your personal belongings. The standard equipment in all rooms includes:'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h5 className="font-medium mb-2" style={{ color: '#4A4A4A' }}>
                {language === 'de' ? 'Wohnen & Schlafen' : 'Living & Sleeping'}
              </h5>
              <ul className="list-disc pl-6 text-gray-700">
                <li>{language === 'de' ? 'Bequeme Betten mit hochwertigen Matratzen' : 'Comfortable beds with high-quality mattresses'}</li>
                <li>{language === 'de' ? 'Frische Bettwäsche und Handtücher' : 'Fresh bed linen and towels'}</li>
                <li>{language === 'de' ? 'Kleiderschränke mit ausreichend Platz' : 'Wardrobes with sufficient space'}</li>
                <li>{language === 'de' ? 'Schreibtische und Arbeitsstühle in jedem Schlafzimmer' : 'Desks and office chairs in each bedroom'}</li>
                <li>{language === 'de' ? 'Smart-TV mit Streamingdiensten' : 'Smart TV with streaming services'}</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2" style={{ color: '#4A4A4A' }}>
                {language === 'de' ? 'Küche & Haushalt' : 'Kitchen & Household'}
              </h5>
              <ul className="list-disc pl-6 text-gray-700">
                <li>{language === 'de' ? 'Vollfunktionsfähige Küche mit allen Geräten' : 'Fully functional kitchen with all appliances'}</li>
                <li>{language === 'de' ? 'Geschirr und Besteck' : 'Dishes and cutlery'}</li>
                <li>{language === 'de' ? 'Waschmaschine & Wäscheständer' : 'Washing machine & clothes rack'}</li>
                <li>{language === 'de' ? 'Bügeleisen & Bügelbrett' : 'Iron & ironing board'}</li>
                <li>{language === 'de' ? 'Staubsauger und Reinigungsmittel' : 'Vacuum cleaner and cleaning supplies'}</li>
              </ul>
            </div>
          </div>
          <p className="text-center font-medium">
            {language === 'de' ? 'Egal ob Sie beruflich unterwegs sind, ein paar ruhige Tage benötigen oder mit Freunden anreisen – hier finden Sie Ihre Wohlfühlbasis.' : 'Whether you are traveling for business, need a few quiet days, or arriving with friends - here you will find your comfort base.'}
          </p>
        </div>
        
        {/* Pricing */}
        <div id="prices" className="mb-10 pt-10 -mt-10">
          <h3 className="text-2xl font-heading font-semibold mb-6">{t('pricing')}</h3>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-heading font-medium mb-4">{t('basePrice')}</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>{t('twoPeople')}</span>
                    <span className="font-medium">€82{t('perNight')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('additionalPerson')}</span>
                    <span className="font-medium">+€25{t('perNight')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('maxOccupancy')}</span>
                    <span className="font-medium">6 {t('people')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('minStay')}</span>
                    <span className="font-medium">2 {t('nights')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-heading font-medium mb-4">{t('discounts')}</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>{t('sevenNights')}</span>
                    <span className="font-medium">10% {t('discount')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('fourWeeks')}</span>
                    <span className="font-medium">20% {t('discount')}</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm">{t('note')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Availability Calendar */}
        <div id="availability" className="mb-10 pt-10 -mt-10">
          <h3 className="text-2xl font-heading font-semibold mb-6">{t('availability')}</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=fewo.rossfeld%40gmail.com&ctz=Europe%2FBerlin" 
              style={{ border: 0 }} 
              width="100%" 
              height="500" 
              frameBorder="0" 
              scrolling="no"
              title="Availability Calendar"
            />
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg font-medium mb-2">
            {language === 'de' ? '📍 Adresse: Im Schanzbuck, 74564 Crailsheim-Roßfeld' : '📍 Address: Im Schanzbuck, 74564 Crailsheim-Roßfeld'}
          </p>
          <a href="/kontakt" className="text-lg hover:underline block" style={{ color: '#325670' }}>
            {language === 'de' ? 'Jetzt anfragen & buchen – wir freuen uns auf Ihren Besuch!' : 'Inquire & book now - we look forward to your visit!'}
          </a>
        </div>
      </div>
      
      {/* Modal für Bildanzeige */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeImageModal}
          imageSrc={selectedImage}
          imageAlt={selectedImageAlt}
        />
      )}
    </section>
  );
};

export default ApartmentOne;
