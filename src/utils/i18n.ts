import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from '../static/texts.json'

i18n.use(initReactI18next).init({
  resources: translations,
  lng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
