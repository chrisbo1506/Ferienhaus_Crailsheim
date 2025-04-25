import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  switchLanguage: () => void;
  t: (key: string) => string;
}

// Create a default context value to prevent the "must be used within a provider" error
const defaultContextValue: LanguageContextType = {
  language: 'de',
  switchLanguage: () => {},
  t: (key: string) => key
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export const useLanguage = () => {
  return useContext(LanguageContext);
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Beim ersten Laden der Seite prüfen, ob eine Spracheinstellung im localStorage vorhanden ist
  const getSavedLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      return (savedLanguage === 'en' || savedLanguage === 'de') ? savedLanguage : 'de';
    }
    return 'de';
  };

  const [language, setLanguage] = useState<Language>(getSavedLanguage());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Bei Änderung der Sprache auch im localStorage speichern
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('preferredLanguage', language);
    }
  }, [language, mounted]);

  const switchLanguage = () => {
    const newLanguage = language === 'de' ? 'en' : 'de';
    setLanguage(newLanguage);
    // Speichere die Spracheinstellung auch im localStorage
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  const t = (key: string): string => {
    // Typensichere Version der Übersetzungsfunktion
    if (language !== 'de' && language !== 'en') {
      return key;
    }
    
    // Zugriff auf die Übersetzungen über unsere neuen Types
    const translationsForLanguage = translations[language];
    
    // Wir verwenden den type guard mit hasOwnProperty
    if (Object.prototype.hasOwnProperty.call(translationsForLanguage, key)) {
      return translationsForLanguage[key];
    }
    
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
