import React from 'react';
import './Navbar.css';
import Icons from './Icons';
import InnerLinks from './InnerLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useThemeUpdate } from '../../context/ThemeContext';
import { useLanguage, useSetLanguage } from '../../context/LanguageContext';

function Navbar() {
  const { t } = useTranslation();
  const toggleTheme = useThemeUpdate();
  const language = useLanguage();
  const setLanguage = useSetLanguage();
  const nextLang = language === 'en' ? 'es' : 'en';

  return (
    <header>
      <nav className="navbar">
        <ul className="icons-list">
          {Icons.map((icon, index) => (
            <li key={index}>
              <a href={icon.url}>
                <FontAwesomeIcon icon={icon.icon} />
              </a>
            </li>
          ))}
        </ul>
        <ul className="links">
          {InnerLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{t(`nav.${link.key}`)}</a>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme}>{t('nav.toggleTheme')}</button>
          </li>
          <li>
            <button onClick={() => setLanguage(nextLang)}>{t('nav.toggleLanguage')}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

