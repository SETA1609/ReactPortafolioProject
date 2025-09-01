import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: "Hi, I'm Sebastian!",
      description: 'A fullstack developer specialized in Springboot, React, Angular and Django',
      nav: {
        projects: 'Projects',
        contact: 'Contact me',
        toggleTheme: 'Toggle Theme',
        toggleLanguage: 'ES'
      },
      card: {
        readMore: 'Read More'
      },
      contact: {
        name: 'Name',
        email: 'Email',
        type: {
          hireMe: 'Freelance project proposal',
          openSource: 'Open source consultancy session',
          other: 'Other'
        },
        message: 'Your message',
        submit: 'Submit'
      },
      footer: 'footer'
    }
  },
  es: {
    translation: {
      greeting: 'Hola, soy Sebastian!',
      description: 'Un desarrollador fullstack especializado en Springboot, React, Angular y Django',
      nav: {
        projects: 'Proyectos',
        contact: 'Contáctame',
        toggleTheme: 'Cambiar tema',
        toggleLanguage: 'EN'
      },
      card: {
        readMore: 'Leer más'
      },
      contact: {
        name: 'Nombre',
        email: 'Correo',
        type: {
          hireMe: 'Propuesta de proyecto freelance',
          openSource: 'Sesión de consultoría de código abierto',
          other: 'Otro'
        },
        message: 'Tu mensaje',
        submit: 'Enviar'
      },
      footer: 'pie de página'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
