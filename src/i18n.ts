import i18n, { ResourceLanguage } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en-us";
import cn from "./locales/zh-cn";

const zhLangs = ["zh", "zh_CN", "zh-CN"];
const enLangs = ["en", "en_US", "en-US"];
const resources: Record<string, ResourceLanguage> = {};
[...zhLangs, ...enLangs].forEach((item) => {
  resources[item] = {
    translation: item.includes("zh") ? cn : en,
  };
});

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
    resources,
  });

export default i18n;
