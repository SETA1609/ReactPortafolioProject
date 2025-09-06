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
  <div ClassName="container">
    <nav
      className={`navbar navbar-${isDarkTheme ? 'dark' : 'light'}  
      text-${isDarkTheme ? 'light' : 'dark'} navbar-expand-lg py-3`}>
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-0 align-items-center flex-row flex-nowrap">
          {Icons.map((icon, index) => (
            <li key={index} className="nav-item me-3">
              <a
                href={icon.url}
                target="_blank"
                className={`nav-link text-${isDarkTheme ? 'light' : 'dark'}`}
              >
                <FontAwesomeIcon icon={icon.icon} />
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-0 align-items-lg-center">
            {InnerLinks.map((link, index) => (
              <li key={index} className="nav-item me-1">
                <a
                  href={link.url}
                  className={`btn btn-${isDarkTheme ? 'light' : 'dark'} w-100 w-lg-auto mx-1 my-1 my-lg-0`}
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
            <li className="nav-item ms-1">
              <button
                className={`btn btn-${isDarkTheme ? 'light' : 'dark'} w-100 w-lg-auto mx-1 my-1 my-lg-0`}
                onClick={toggleTheme}
              >
                {t('nav.toggleTheme')}
              </button>
            </li>
            <li className="nav-item dropdown">
              <button
                className={`btn btn-${isDarkTheme ? 'light' : 'dark'} dropdown-toggle w-100 w-lg-auto mx-1 my-1 my-lg-0`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t(`nav.language.${language}`)}
              </button>
              <ul className="dropdown-menu">
                {languages.map(lang => (
                  <li key={lang}>
                    <button className="dropdown-item text-center" onClick={() => setLanguage(lang)}>
                      {t(`nav.language.${lang}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
  );
};

export default Navbar;
