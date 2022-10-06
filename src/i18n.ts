import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "../src/locales/en/translation.json";
import translationES from "../src/locales/es/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      }
    },
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;
