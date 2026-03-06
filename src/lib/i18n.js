import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: require('./lib/locales/en.json') },
      de: { translation: require('./lib/locales/de.json') },
    },
    fallbackLng: 'en',
    detection: { order: ['queryString', 'cookie'] },
    interpolation: { escapeValue: false },
  });

export default i18n;