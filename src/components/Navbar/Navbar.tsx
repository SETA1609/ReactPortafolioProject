import React from 'react';
import Icons from './Icons';
import InnerLinks from './InnerLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useTheme, useThemeUpdate } from '../../context/ThemeContext';
import { useLanguage, useSetLanguage, Language } from '../../context/LanguageContext';

const languages: Language[] = ['en', 'es', 'de'];

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const isDarkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const language = useLanguage();
  const setLanguage = useSetLanguage();

  return (
    <header className={`bg-${isDarkTheme ? 'dark' : 'light'} text-${isDarkTheme ? 'light' : 'dark'}`}>
      <nav className="container d-flex justify-content-between align-items-center py-2">
        <ul className="list-unstyled d-flex mb-0">
          {Icons.map((icon, index) => (
            <li key={index} className="ms-3">
              <a href={icon.url} className={`text-${isDarkTheme ? 'light' : 'dark'}`}>
                <FontAwesomeIcon icon={icon.icon} />
              </a>
            </li>
          ))}
        </ul>
        <ul className="list-unstyled d-flex mb-0">
          {InnerLinks.map((link, index) => (
            <li key={index} className="ms-3">
              <a href={link.url} className={`text-${isDarkTheme ? 'light' : 'dark'}`}>
                {t(`nav.${link.key}`)}
              </a>
            </li>
          ))}
          <li className="ms-3">
            <button
              className={`btn btn-${isDarkTheme ? 'light' : 'dark'}`}
              onClick={toggleTheme}
            >
              {t('nav.toggleTheme')}
            </button>
          </li>
          <li className="ms-3 dropdown">
            <button
              className={`btn btn-${isDarkTheme ? 'light' : 'dark'} dropdown-toggle`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t(`nav.language.${language}`)}
            </button>
            <ul className="dropdown-menu">
              {languages.map(lang => (
                <li key={lang}>
                  <button className="dropdown-item" onClick={() => setLanguage(lang)}>
                    {t(`nav.language.${lang}`)}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

