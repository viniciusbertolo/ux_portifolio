import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importando seus arquivos de tradução
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';
import translationDE from './locales/de/translation.json';

// Os recursos (traduções)
const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  },
  de: {
    translation: translationDE
  }
};

i18n
  // Detecta o idioma do usuário
  .use(LanguageDetector)
  // Passa a instância do i18n para o react-i18next
  .use(initReactI18next)
  // Inicia a configuração
  .init({
    resources,
    // Idioma padrão caso o detector falhe
    fallbackLng: 'en',
    interpolation: {
      // React já faz o escape por padrão, então desativamos
      escapeValue: false 
    }
  });

export default i18n;