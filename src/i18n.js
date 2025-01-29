import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Load translations from JSON files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // React binding
  .init({
    lng: localStorage.getItem('language' || 'de'),
    fallbackLng: 'de', // Default language
    debug: true, // Enable debug mode in development
    interpolation: {
      escapeValue: false, // React already escapes output
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
  });

export default i18n;
