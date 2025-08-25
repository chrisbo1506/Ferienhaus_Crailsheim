import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ImageModal from '@/components/ImageModal';

const ApartmentTwo: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('');

  const openImageModal = (imageSrc: string, imageAlt: string) => {
    setSelectedImage(imageSrc);
    setSelectedImageAlt(imageAlt);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedImageAlt('');
  };

  return (
    <section id="wohnung2" className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#F8F4E8] to-[#E6DCC6] rounded-2xl p-8 shadow-xl">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Wir bieten Ihnen eine gemütliche, vollständig möblierte 3-Zimmer-Wohnung im Obergeschoss in unserem Ferienhaus in Crailsheim-Roßfeld. Die Wohnung wurde mit Blick auf Komfort und zeitgemäßes Wohnen eingerichtet und eignet sich ideal für Paare, kleine Gruppen und Feriengäste.' : 'We offer you a cozy, fully furnished 3-room apartment on the upper floor in our vacation home in Crailsheim-Roßfeld. The apartment was furnished with comfort and contemporary living in mind and is ideal for couples, small groups, and vacationers.'}
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
        
        {/* Zwei individuell gestaltete Schlafzimmer */}
        <div id="bedrooms" className="mb-8 pt-10 -mt-10">
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
                <path d="M1 21h22"></path>
                <circle cx="12" cy="8" r="1"></circle>
                <path d="M9 21v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2"></path>
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Sicherer Eingangsbereich' : 'Secure entrance area'}
            </h4>
          </div>
          <div className="ml-14">
            <p className="mb-6 leading-relaxed" style={{ color: '#333333' }}>
              {language === 'de' ? 'Der Zugang zur Wohnung erfolgt über ein digitales Codeschloss – Sie erhalten den Code vor Ihrer Ankunft und können flexibel ein- und auschecken.' : 'Access to the apartment is via a digital code lock - you will receive the code before your arrival and can check in and out flexibly.'}
            </p>
            <div 
              className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center mx-auto" 
              style={{ height: '300px', maxWidth: '600px' }}
            >
              <div className="text-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">
                  {language === 'de' ? 'Eingangsbereich' : 'Entrance Area'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Zwei individuell gestaltete Schlafzimmer */}
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
              {language === 'de' ? 'Zwei komfortable Schlafzimmer' : 'Two comfortable bedrooms'}
            </h4>
          </div>
          <div className="ml-14">
            <div className="mb-12">
              <h5 className="text-lg md:text-xl font-semibold mb-3" style={{ color: "#4A4A4A" }}>
                {language === 'de' ? 'Großes Schlafzimmer (Hauptschlafzimmer)' : 'Large Bedroom (Master Bedroom)'}
              </h5>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {language === 'de' ? 'Das Hauptschlafzimmer verfügt über ein Queensize Bett für zwei Personen. Der helle und freundliche Raum bietet viel Platz und Stauraum für einen entspannten Aufenthalt.' : 'The master bedroom features a queen-size bed for two people. The bright and friendly room offers plenty of space and storage for a relaxing stay.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                  style={{ height: '300px' }}
                >
                  <div className="text-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">
                      {language === 'de' ? 'Hauptschlafzimmer 1' : 'Master Bedroom 1'}
                    </p>
                  </div>
                </div>
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                  style={{ height: '300px' }}
                >
                  <div className="text-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">
                      {language === 'de' ? 'Hauptschlafzimmer 2' : 'Master Bedroom 2'}
                    </p>
                  </div>
                </div>
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                  style={{ height: '300px' }}
                >
                  <div className="text-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">
                      {language === 'de' ? 'Hauptschlafzimmer 3' : 'Master Bedroom 3'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h5 className="text-lg md:text-xl font-semibold mb-3" style={{ color: "#4A4A4A" }}>
                {language === 'de' ? 'Kleines Schlafzimmer (Einzelzimmer)' : 'Small Bedroom (Single Room)'}
              </h5>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {language === 'de' ? 'Das kleinere Schlafzimmer ist mit einem bequemen Einzelbett und Smart TV ausgestattet.' : 'The smaller bedroom is equipped with a comfortable single bed and smart TV.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                  style={{ height: '300px' }}
                >
                  <div className="text-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">
                      {language === 'de' ? 'Einzelzimmer 1' : 'Single Room 1'}
                    </p>
                  </div>
                </div>
                <div 
                  className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                  style={{ height: '300px' }}
                >
                  <div className="text-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">
                      {language === 'de' ? 'Einzelzimmer 2' : 'Single Room 2'}
                    </p>
                  </div>
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
              {language === 'de' ? 'Vollausgestattete Küche' : 'Fully equipped kitchen'}
            </h4>
          </div>
          <div className="ml-8">
            <p className="mb-4">
              {language === 'de' ? 'Die moderne Küche bietet alles, was Sie für die Zubereitung von Speisen benötigen. Ob schnelles Frühstück oder mehrgängiges Dinner – hier sind Sie bestens ausgestattet.' : 'The modern kitchen offers everything you need to prepare meals. Whether a quick breakfast or a multi-course dinner - you are well equipped here.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h5 className="font-semibold mb-3" style={{ color: '#4A4A4A' }}>
                  {language === 'de' ? 'Küchenausstattung' : 'Kitchen equipment'}
                </h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{language === 'de' ? 'Induktionskochfeld' : 'Induction hob'}</li>
                  <li>{language === 'de' ? 'Backofen mit Grill- und Mikrowellenfunktion' : 'Oven with grill and microwave function'}</li>
                  <li>{language === 'de' ? 'Kühl-/Gefrierkombination' : 'Fridge/freezer combination'}</li>
                  <li>{language === 'de' ? 'Spülmaschine' : 'Dishwasher'}</li>
                  <li>{language === 'de' ? 'Nespresso Kapselmaschine' : 'Nespresso capsule machine'}</li>
                  <li>{language === 'de' ? 'Wasserkocher & Toaster' : 'Kettle & toaster'}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3" style={{ color: '#4A4A4A' }}>
                  {language === 'de' ? 'Geschirr & Zubehör' : 'Dishes & accessories'}
                </h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{language === 'de' ? 'Komplettes Geschirr für 6 Personen' : 'Complete tableware for 6 people'}</li>
                  <li>{language === 'de' ? 'Töpfe, Pfannen und Kochutensilien' : 'Pots, pans and cooking utensils'}</li>
                  <li>{language === 'de' ? 'Gläser, Tassen und Besteck' : 'Glasses, cups and cutlery'}</li>
                  <li>{language === 'de' ? 'Schneidebretter und Messer' : 'Cutting boards and knives'}</li>
                  <li>{language === 'de' ? 'Küchenwaage und Messbecher' : 'Kitchen scale and measuring cups'}</li>
                  <li>{language === 'de' ? 'Gewürze und Grundausstattung' : 'Spices and basic supplies'}</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '250px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">
                    {language === 'de' ? 'Küche 1' : 'Kitchen 1'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '250px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">
                    {language === 'de' ? 'Küche 2' : 'Kitchen 2'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '250px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">
                    {language === 'de' ? 'Nespresso' : 'Nespresso'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '250px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">
                    {language === 'de' ? 'Essbereich' : 'Dining Area'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wohnzimmer mit Esstisch */}
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
              {language === 'de' ? 'Wohnzimmer mit Essbereich' : 'Living room with dining area'}
            </h4>
          </div>
          <div className="ml-8">
            <p className="mb-4" style={{ color: '#333333' }}>
              {language === 'de' ? 'Das geräumige Wohnzimmer kombiniert gemütliche Sitzgelegenheiten mit einem praktischen Essbereich. Das Ecksofa mit Schlaffunktion bietet eine zusätzliche Schlafmöglichkeit für eine 4. Person. Der Smart-TV und die direkte Verbindung zur Dachterrasse machen diesen Raum zum Herzstück der Wohnung.' : 'The spacious living room combines comfortable seating with a practical dining area. The corner sofa with sleep function provides an additional sleeping option for a 4th person. The smart TV and direct connection to the roof terrace make this room the heart of the apartment.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold mb-3" style={{ color: '#4A4A4A' }}>
                  {language === 'de' ? 'Sitzbereich' : 'Seating area'}
                </h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{language === 'de' ? 'Ecksofa mit Schlaffunktion' : 'Corner sofa with sleep function'}</li>
                  <li>{language === 'de' ? 'Smart-TV mit Streamingdiensten' : 'Smart TV with streaming services'}</li>
                  <li>{language === 'de' ? 'Couchtisch für Getränke und Snacks' : 'Coffee table for drinks and snacks'}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3" style={{ color: '#4A4A4A' }}>
                  {language === 'de' ? 'Essbereich' : 'Dining area'}
                </h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{language === 'de' ? 'Esstisch für 4 Personen' : 'Dining table for 4 people'}</li>
                  <li>{language === 'de' ? 'Bequeme Esszimmerstühle' : 'Comfortable dining chairs'}</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '300px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">
                    {language === 'de' ? 'Sitzecke' : 'Seating Area'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '300px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">
                    {language === 'de' ? 'Esstisch' : 'Dining Table'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '300px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">
                    {language === 'de' ? 'Smart-TV' : 'Smart TV'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '300px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">
                    {language === 'de' ? 'Gesamtansicht' : 'Overview'}
                  </p>
                </div>
              </div>
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
              {language === 'de' ? 'Das Badezimmer ist mit einer Badewanne und einer Dusche ausgestattet. Zusätzlich stehen eine Waschmaschine und ein Trockner zur Verfügung – besonders praktisch für Langzeitgäste. Das WC befindet sich in einem separaten Raum.' : 'The bathroom is equipped with a bathtub and a shower. Additionally, a washing machine and dryer are available - especially practical for long-term guests. The toilet is located in a separate room.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 justify-items-center">
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '300px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">
                    {language === 'de' ? 'Badezimmer' : 'Bathroom'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '300px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">
                    {language === 'de' ? 'Separates WC' : 'Separate Toilet'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dachterrasse */}
        <div id="roofterrace" className="mb-8 pt-10 -mt-10">
          <div className="flex items-center mb-5">
            <div className="bg-[#325670] bg-opacity-10 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#325670" }}>
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-heading font-semibold" style={{ color: '#463A22' }}>
              {language === 'de' ? 'Große Dachterrasse mit Überdachung' : 'Large covered roof terrace'}
            </h4>
          </div>
          <div className="ml-8">
            <p className="mb-6" style={{ color: '#333333' }}>
              {language === 'de' ? 'Das Highlight der Wohnung ist die große Dachterrasse mit teilweiser Überdachung. Von hier aus haben Sie einen wunderschönen Ausblick und können sowohl sonnige als auch schattige Plätze genießen.' : 'The highlight of the apartment is the large roof terrace with partial covering. From here you have a beautiful view and can enjoy both sunny and shaded spots.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold mb-3" style={{ color: '#4A4A4A' }}>
                  {language === 'de' ? 'Ausstattung' : 'Features'}
                </h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{language === 'de' ? 'Große überdachte Fläche' : 'Large covered area'}</li>
                  <li>{language === 'de' ? 'Gemütliche Sitzgruppe' : 'Comfortable seating group'}</li>
                  <li>{language === 'de' ? 'Sonnenschirm für zusätzlichen Schatten' : 'Parasol for additional shade'}</li>
                  <li>{language === 'de' ? 'Wetterfeste Gartenmöbel' : 'Weather-resistant garden furniture'}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3" style={{ color: '#4A4A4A' }}>
                  {language === 'de' ? 'Nutzungsmöglichkeiten' : 'Usage options'}
                </h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>{language === 'de' ? 'Entspannung bei jedem Wetter' : 'Relaxation in any weather'}</li>
                  <li>{language === 'de' ? 'Mahlzeiten im Freien' : 'Outdoor dining'}</li>
                  <li>{language === 'de' ? 'Arbeitsplatz mit Aussicht' : 'Workspace with a view'}</li>
                  <li>{language === 'de' ? 'Perfekt für Abendsonne' : 'Perfect for evening sun'}</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '250px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">
                    {language === 'de' ? 'Terrassenübersicht' : 'Terrace Overview'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '250px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">
                    {language === 'de' ? 'Überdachung' : 'Covered Area'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '250px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">
                    {language === 'de' ? 'Sitzgruppe' : 'Seating Group'}
                  </p>
                </div>
              </div>
              <div 
                className="rounded-xl overflow-hidden shadow-xl cursor-pointer bg-gray-200 flex items-center justify-center" 
                style={{ height: '250px' }}
              >
                <div className="text-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs">
                    {language === 'de' ? 'Ausblick' : 'View'}
                  </p>
                </div>
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
              {language === 'de' ? 'In der Wohnung und auf der Dachterrasse steht Ihnen ein Gäste-WLAN für alltägliche Online-Aktivitäten, Streaming oder Homeoffice zur Verfügung. Der Smart-TV bietet Zugang zu gängigen Streamingdiensten.' : 'In the apartment and on the roof terrace, guest WiFi is available for everyday online activities, streaming, or home office. The smart TV provides access to common streaming services.'}
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
              <li>{language === 'de' ? 'Große überdachte Dachterrasse mit gemütlicher Sitzgruppe.' : 'Large covered roof terrace with comfortable seating group.'}</li>
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
              {language === 'de' ? 'Rauchen ist ausschließlich im Außenbereich (Dachterrasse) erlaubt. Ein Aschenbecher steht auf der Terrasse bereit.' : 'Smoking is only allowed in the outdoor area (roof terrace). An ashtray is provided on the terrace.'}
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
                <li>{language === 'de' ? 'Garderobe im Eingangsbereich' : 'Coat rack in the entrance area'}</li>
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
                <li>{language === 'de' ? 'Waschmaschine & Wäschetrockner' : 'Washing machine & dryer'}</li>
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
                    <span className="font-medium">€98{t('perNight')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{language === 'de' ? '3. Person' : '3rd person'}</span>
                    <span className="font-medium">+€30{t('perNight')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{language === 'de' ? '4. Person (Schlafsofa)' : '4th person (sofa bed)'}</span>
                    <span className="font-medium">+€30{t('perNight')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('maxOccupancy')}</span>
                    <span className="font-medium">4 {t('people')}</span>
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
                    <span>{t('fourWeeks')}</span>
                    <span className="font-medium">10% {t('discount')}</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm">{t('note')}</p>
                </div>
              </div>
            </div>
            
            {/* Seasonal Surcharges */}
            <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-lg">
              <h4 className="text-lg font-heading font-medium mb-3" style={{ color: '#D2691E' }}>
                {language === 'de' ? '🎪 Saisonale Aufpreise' : '🎪 Seasonal Surcharges'}
              </h4>
              <p className="text-sm mb-3" style={{ color: '#463A22' }}>
                {language === 'de' ? 'Zu bestimmten Saisonzeiten berechnen wir einen Aufpreis von 25€ pro Nacht (nur auf den Grundpreis):' : 'During certain seasonal periods, we charge a surcharge of €25 per night (only on the base price):'}
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between">
                  <span>{language === 'de' ? 'Volksfest:' : 'Folk Festival:'}</span>
                  <span className="font-medium">17.09. bis 24.09. (+€25{language === 'de' ? '/Nacht' : '/night'})</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === 'de' ? 'Weihnachten & Silvester:' : 'Christmas & New Year:'}</span>
                  <span className="font-medium">23.12. bis 02.01. (+€25{language === 'de' ? '/Nacht' : '/night'})</span>
                </li>
              </ul>
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
            {language === 'de' ? '📍 Adresse: Im Schanzbuck 48, 74564 Crailsheim-Roßfeld' : '📍 Address: Im Schanzbuck 48, 74564 Crailsheim-Roßfeld'}
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

export default ApartmentTwo;