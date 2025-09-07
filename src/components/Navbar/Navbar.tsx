import React, { useEffect, useRef, useState } from 'react';
import Icons from './Icons';
import InnerLinks from './InnerLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useTheme, useThemeUpdate } from '../../context/ThemeContext';
import { useLanguage, useSetLanguage, Language } from '../../context/LanguageContext';
import './Navbar.css';

const languages: Language[] = ['en', 'es', 'de'];

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const isDarkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const language = useLanguage();
  const setLanguage = useSetLanguage();

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-${isDarkTheme ? 'dark' : 'light'} bg-${isDarkTheme ? 'dark' : 'light'} navbar-expand-lg py-3 ${hidden ? 'navbar-hidden' : ''}`}>
      <div className="container">

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
          <ul className="navbar-nav mb-0 align-items-lg-center d-flex gap-2">
            {InnerLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  href={link.url}
                  className={`btn btn-${isDarkTheme ? 'light' : 'dark'} w-100 w-lg-auto my-1 my-lg-0`}
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <button
                className={`btn btn-${isDarkTheme ? 'light' : 'dark'} w-100 w-lg-auto my-1 my-lg-0`}
                onClick={toggleTheme}
              >
                {t('nav.toggleTheme')}
              </button>
            </li>
            <li className="nav-item dropdown lang-dropdown">
              <button
                className={`btn btn-${isDarkTheme ? 'light' : 'dark'} btn my-lg-0 w-lg-auto dropdown-toggle my-1 my-lg-0`}

                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t(`nav.language.${language}`)}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
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
    );
  };

export default Navbar;
