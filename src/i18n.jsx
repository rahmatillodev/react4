import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false, 
    },
    // resources: {
    //   en: {
    //     translation: {
    //     }
    //   }
    // }
  });