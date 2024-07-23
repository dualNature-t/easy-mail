import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en-us";
import cn from "./locales/zh-cn";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en_US",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator"],
    },
    resources: {
      zh_CN: {
        translation: cn,
      },
      en_US: {
        translation: en,
      },
    },
  });

export default i18n;
