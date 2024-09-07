import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./i18n"
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_uz from "./locales/uz/translation.json"
import global_en from "./locales/en/translation.json"
import global_ru from "./locales/ru/translation.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    uz: {
      global: global_uz,
    },
    ru: {
      global: global_ru,
    },
    en: {
      global: global_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider>
    <App />
  </I18nextProvider>
);

