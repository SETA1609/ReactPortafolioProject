import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../i18n';

export type Language = 'en' | 'es' | 'de';

const LanguageContext = createContext<Language>('en');
const LanguageUpdateContext = createContext<((lang: Language) => void) | undefined>(undefined);

export const useLanguage = (): Language => useContext(LanguageContext);
export const useSetLanguage = () => {
  const setLanguage = useContext(LanguageUpdateContext);
  if (!setLanguage) {
    throw new Error('useSetLanguage must be used within a LanguageProvider');
  }
  return setLanguage;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language | null;
    return stored ?? 'en';
  });

  useEffect(() => {
    void i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={language}>
      <LanguageUpdateContext.Provider value={setLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};
