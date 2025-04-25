export type Language = 'de' | 'en';

// Ein Index-Typ für die Übersetzungs-Map
export interface TranslationMap {
  [key: string]: string;
}

export const translations: Record<Language, TranslationMap> = {
  // Header
  de: {
    overview: "Übersicht",
    apartment1: "Wohnung 1",
    apartment2: "Wohnung 2",
    contact: "Kontakt",
    language: "DE",
    
    // Hero
    welcome: "Willkommen in unserem Ferienhaus in Crailsheim-Roßfeld",
    welcomeText: "Unser Ferienhaus bietet komfortable, vollständig möblierte Wohnungen für Geschäftsreisende, Pendler und Urlauber. Mit einer zentralen Lage und altem Charme aber modernem Komfort ist es Ihre ideale Unterkunft in Crailsheim.",
    discoverApartment1: "Wohnung 1 entdecken",
    sendInquiry: "Anfrage senden",

    // Location
    locationEnvironment: "Lage & Umgebung", 
    address: "Adresse",
    nearby: "In der Nähe",
    shopping: "Einkaufen",
    gastronomy: "Gastronomie",
    leisure: "Freizeit",
    sports: "Fitnessstudios",
    publicTransport: "Öffentliche Verkehrsmittel",
    busStop: "Bushaltestelle",
    directBus: "Direktbus in die Innenstadt",
    perfectLocation: "Perfekte Lage für Geschäftsreisende und Urlauber. Nur 10 Minuten zur Autobahn A6 und ca. 7 Minuten ins Stadtzentrum von Crailsheim.",
    clickMap: "Klicken Sie auf die Karte, um sie zu vergrößern.",
    moreShops: "Mehr Einkaufsmöglichkeiten in der Nähe",
    localRestaurants: "Gutbürgerliche Gasthäuser",
    pizzeria: "Pizzeria",
    sushiRestaurant: "Sushi-Restaurant",
    kebabHouse: "Kebaphaus",
    cinemaCity: "Kino Cinecity",
    beatBowl: "Beat Bowl",
    fitnessStudio1: "Fitness First",
    fitnessStudio2: "Clever Fit",
    locationDescription: "Unsere Ferienwohnung liegt in einer ruhigen Wohngegend, dennoch sind alle Einrichtungen des alltäglichen Bedarfs und die Innenstadt von Crailsheim schnell erreichbar. Genießen Sie die perfekte Mischung aus Ruhe und guter Anbindung.",

    // Apartment 1
    fullEquipped: "Voll ausgestattete 4-Zimmer-Wohnung im EG",
    apartmentDescription: "Wir bieten Ihnen eine großzügige, vollständig möblierte 4-Zimmer-Wohnung im Erdgeschoss in unserem Ferienhaus in Crailsheim-Roßfeld. Die Wohnung wurde mit Blick auf Funktionalität, Komfort und zeitgemäßes Wohnen eingerichtet und eignet sich ideal für Geschäftsreisende, Pendler und Urlauber.",
    comfortBase: "Egal ob Sie beruflich unterwegs sind, ein paar ruhige Tage benötigen oder mit Freunden anreisen– hier finden Sie Ihre Wohlfühlbasis.",
    apartmentDetails: "Wohnungsausstattung im Detail",
    independentAccess: "Eigenständiger Zugang & flexibler Check-In",
    accessDescription: "Sowohl die Haustür als auch die Wohnungstür sind mit elektronischen Codeschlössern ausgestattet. Das ermöglicht Ihnen einen einfachen und kontaktlosen Zugang – Check-In ab 15:00 Uhr, Check-Out bis 11:00 Uhr. Early/Late Check-In ist auf Anfrage möglich.",
    bedrooms: "Drei individuell gestaltete Schlafzimmer",
    brownBedroom: "Braunes Schlafzimmer",
    brownBedroomDesc: "Ausgestattet mit einem 160 cm breiten Doppelbett, Nachttischen, Leselampe mit USB-Anschlüssen, Kleiderschrank, Schreibtisch und bequemem Stuhl.",
    blackBedroom: "Schwarzes Schlafzimmer",
    blackBedroomDesc: "Bietet ein 140 cm breites Einzelbett, Nachttische mit Leselampe, Kleiderschrank, Schreibtisch und Designer-Stuhl.",
    whiteBedroom: "Weißes Schlafzimmer",
    whiteBedroomDesc: "Verfügt über zwei 90 cm breite Einzelbetten, Nachttische, Kleiderschrank, Schreibtisch und bequemen Sessel.",
    livingRoom: "Großes Wohnzimmer mit Essbereich",
    livingRoomDesc: "Das Wohnzimmer bietet eine bequeme Couch-Garnitur, einen Smart-TV (65 Zoll) mit Netflix und weiteren Streaming-Diensten, schnelles Internet, einen Kachelofen und gemütliche Atmosphäre.",
    kitchen: "Voll ausgestattete Küche mit Essbereich",
    kitchenDesc: "Die Küche verfügt über einen großen Kühlschrank mit Gefrierfach, Herd, Backofen, Mikrowelle, Kaffeemaschine, Wasserkocher und alle notwendigen Utensilien. Im Essbereich in der Küche finden bis zu 6 Personen Platz.",
    bathroom: "Badezimmer & Toilette",
    bathroomDesc: "Das Badezimmer ist mit einer großen Dusche, Waschbecken, Handtüchern und Pflegeprodukten ausgestattet. Die separate Toilette bietet zusätzlichen Komfort.",
    techEquipment: "Technische Ausstattung & Annehmlichkeiten",
    wifi: "Schnelles WLAN in allen Räumen",
    smartHeating: "Smarte Heizungssteuerung",
    washingMachine: "Waschmaschine",
    iron: "Bügeleisen & Bügelbrett",
    vacuum: "Staubsauger",
    hairdryer: "Fön",
    freeParking: "Kostenlose Parkplätze vor dem Haus",
    evCharging: "Ladestation für E-Autos (gegen Gebühr)",

    // Gallery
    gallery: "Bildergalerie",
    livingRoomGallery: "Wohnzimmer",
    kitchenGallery: "Küche mit Essbereich",
    brownBedroomGallery: "Braunes Schlafzimmer",
    blackBedroomGallery: "Schwarzes Schlafzimmer",
    whiteBedroomGallery: "Weißes Schlafzimmer",
    bathroomGallery: "Badezimmer",

    // Pricing
    pricing: "Preise",
    basePrice: "Grundpreis",
    twoPeople: "2 Personen",
    perNight: "/Nacht",
    additionalPerson: "Jede weitere Person",
    maxOccupancy: "Maximale Belegung",
    minStay: "Mindestaufenthalt",
    people: "Personen",
    nights: "Nächte",
    discounts: "Rabatte",
    sevenNights: "Ab 7 Nächten",
    discount: "Rabatt",
    fourWeeks: "Ab 4 Wochen",
    note: "Hinweis: Die Nutzung der E-Auto-Ladestation wird separat nach Verbrauch abgerechnet.",

    // Availability
    availability: "Verfügbarkeit",

    // Apartment 2
    comingSoon: "Demnächst verfügbar",
    comingSoonDesc: "Unsere zweite Wohnung befindet sich derzeit im Aufbau und wird in Kürze für Buchungen verfügbar sein.",
    inquireInterest: "Bei Interesse anfragen",

    // Contact
    contactBooking: "Kontakt & Buchungsanfrage",
    contactText: "Senden Sie uns Ihre Anfrage für einen Aufenthalt in unserem Ferienhaus. Wir werden uns so schnell wie möglich bei Ihnen melden!",
    apartmentSelect: "Wohnung",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    numPersons: "Anzahl Personen",
    maxPersons: "Maximal 6 Personen",
    arrivalDate: "Anreisedatum",
    departureDate: "Abreisedatum",
    minNights: "Mindestens 2 Nächte",
    message: "Nachricht",
    privacy: "Ich habe die Datenschutzerklärung gelesen und akzeptiere diese.",
    send: "Anfrage senden",
    required: "*",

    // Form Validation
    dateAfterArrival: "Das Abreisedatum muss nach dem Anreisedatum liegen.",
    minStayRequired: "Die Mindestaufenthaltsdauer beträgt 2 Nächte.",
    personRange: "Die Anzahl der Personen muss zwischen 1 und 6 liegen.",
    inquirySent: "Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.",
    optional: "optional",

    // Footer
    contact_footer: "Kontakt",
    phone_footer: "Telefon:",
    email_footer: "E-Mail:",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy_policy: "Datenschutz",
    terms: "AGB",
    copyright: "© 2025 Ferienhaus Crailsheim-Roßfeld. Alle Rechte vorbehalten."
  },
  en: {
    overview: "Overview",
    apartment1: "Apartment 1",
    apartment2: "Apartment 2",
    contact: "Contact",
    language: "EN",
    
    // Hero
    welcome: "Welcome to our vacation home in Crailsheim-Roßfeld",
    welcomeText: "Our vacation home offers comfortable, fully furnished apartments for business travelers, commuters, and vacationers. With a central location and old-world charm but modern comfort, it is your ideal accommodation in Crailsheim.",
    discoverApartment1: "Discover Apartment 1",
    sendInquiry: "Send inquiry",

    // Location
    locationEnvironment: "Location & Surroundings", 
    address: "Address",
    nearby: "Nearby",
    shopping: "Shopping",
    gastronomy: "Gastronomy",
    leisure: "Leisure",
    sports: "Fitness Studios",
    publicTransport: "Public Transport",
    busStop: "Bus Stop",
    directBus: "Direct Bus to Downtown",
    perfectLocation: "Perfect location for business travelers and vacationers. Only 10 minutes to the A6 highway and about 7 minutes to downtown Crailsheim.",
    clickMap: "Click on the map to enlarge it.",
    moreShops: "More shopping options nearby",
    localRestaurants: "Traditional local restaurants",
    pizzeria: "Pizzeria",
    sushiRestaurant: "Sushi restaurant",
    kebabHouse: "Kebab house",
    cinemaCity: "Cinema Cinecity",
    beatBowl: "Beat Bowl",
    fitnessStudio1: "Fitness First",
    fitnessStudio2: "Clever Fit",
    locationDescription: "Our vacation apartment is located in a quiet residential area, yet all daily amenities and downtown Crailsheim are quickly accessible. Enjoy the perfect mix of tranquility and good connections.",

    // Apartment 1
    fullEquipped: "Fully equipped 4-room apartment on the ground floor",
    apartmentDescription: "We offer you a spacious, fully furnished 4-room apartment on the ground floor in our vacation home in Crailsheim-Roßfeld. The apartment was furnished with functionality, comfort, and contemporary living in mind and is ideal for business travelers, commuters, and vacationers.",
    comfortBase: "Whether you're traveling for business, need a few quiet days, or arriving with friends – here you'll find your comfort base.",
    apartmentDetails: "Apartment features in detail",
    independentAccess: "Independent access & flexible check-in",
    accessDescription: "Both the front door and the apartment door are equipped with electronic code locks. This allows you easy and contactless access – check-in from 3:00 PM, check-out until 11:00 AM. Early/late check-in is possible upon request.",
    bedrooms: "Three individually designed bedrooms",
    brownBedroom: "Brown Bedroom",
    brownBedroomDesc: "Equipped with a 160 cm wide double bed, bedside tables, reading lamp with USB connections, wardrobe, desk, and comfortable chair.",
    blackBedroom: "Black Bedroom",
    blackBedroomDesc: "Offers a 140 cm wide single bed, bedside tables with reading lamp, wardrobe, desk, and designer chair.",
    whiteBedroom: "White Bedroom",
    whiteBedroomDesc: "Features two 90 cm wide single beds, bedside tables, wardrobe, desk, and comfortable armchair.",
    livingRoom: "Large living room with dining area",
    livingRoomDesc: "The living room offers a comfortable couch set, a smart TV (65 inch) with Netflix and other streaming services, fast internet, a tiled stove, and a cozy atmosphere.",
    kitchen: "Fully equipped kitchen with dining area",
    kitchenDesc: "The kitchen has a large refrigerator with freezer compartment, stove, oven, microwave, coffee machine, water kettle, and all necessary utensils. The dining area in the kitchen accommodates up to 6 people.",
    bathroom: "Bathroom & Toilet",
    bathroomDesc: "The bathroom is equipped with a large shower, sink, towels, and care products. The separate toilet offers additional comfort.",
    techEquipment: "Technical equipment & amenities",
    wifi: "Fast WiFi in all rooms",
    smartHeating: "Smart heating control",
    washingMachine: "Washing machine",
    iron: "Iron & ironing board",
    vacuum: "Vacuum cleaner",
    hairdryer: "Hair dryer",
    freeParking: "Free parking spaces in front of the house",
    evCharging: "Charging station for electric cars (for a fee)",

    // Gallery
    gallery: "Photo Gallery",
    livingRoomGallery: "Living Room",
    kitchenGallery: "Kitchen with dining area",
    brownBedroomGallery: "Brown Bedroom",
    blackBedroomGallery: "Black Bedroom",
    whiteBedroomGallery: "White Bedroom",
    bathroomGallery: "Bathroom",

    // Pricing
    pricing: "Prices",
    basePrice: "Base price",
    twoPeople: "2 people",
    perNight: "/night",
    additionalPerson: "Each additional person",
    maxOccupancy: "Maximum occupancy",
    minStay: "Minimum stay",
    people: "people",
    nights: "nights",
    discounts: "Discounts",
    sevenNights: "From 7 nights",
    discount: "discount",
    fourWeeks: "From 4 weeks",
    note: "Note: The use of the electric car charging station is billed separately according to consumption.",

    // Availability
    availability: "Availability",

    // Apartment 2
    comingSoon: "Coming soon",
    comingSoonDesc: "Our second apartment is currently under construction and will be available for bookings soon.",
    inquireInterest: "Inquire if interested",

    // Contact
    contactBooking: "Contact & Booking Inquiry",
    contactText: "Send us your inquiry for a stay in our vacation home. We will get back to you as soon as possible!",
    apartmentSelect: "Apartment",
    name: "Name",
    email: "Email",
    phone: "Phone",
    numPersons: "Number of persons",
    maxPersons: "Maximum 6 people",
    arrivalDate: "Arrival date",
    departureDate: "Departure date",
    minNights: "Minimum 2 nights",
    message: "Message",
    privacy: "I have read and accept the privacy policy.",
    send: "Send inquiry",
    required: "*",

    // Form Validation
    dateAfterArrival: "The departure date must be after the arrival date.",
    minStayRequired: "The minimum stay is 2 nights.",
    personRange: "The number of persons must be between 1 and 6.",
    inquirySent: "Thank you for your inquiry! We will get back to you shortly.",
    optional: "optional",

    // Footer
    contact_footer: "Contact",
    phone_footer: "Phone:",
    email_footer: "Email:",
    legal: "Legal",
    imprint: "Imprint",
    privacy_policy: "Privacy Policy",
    terms: "Terms & Conditions",
    copyright: "© 2025 Vacation Home Crailsheim-Roßfeld. All rights reserved."
  }
};
