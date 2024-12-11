import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Jal Sanjeevni',
      waterQuality: 'Water Quality',
      conservation: 'Conservation',
      techniques: 'Techniques',
    }
  },
  hi: {
    translation: {
      welcome: 'जल संजीवनी में आपका स्वागत है',
      waterQuality: 'जल गुणवत्ता',
      conservation: 'संरक्षण',
      techniques: 'तकनीक',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;