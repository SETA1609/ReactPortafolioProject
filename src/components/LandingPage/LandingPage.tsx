import React from 'react';
import './LandingPage.css';
import photo from './foto.png';
import { useTranslation } from 'react-i18next';

function LandingPage() {
  const { t } = useTranslation();
  return (
    <div className='landingPage'>
      <div className="foto-Container">
        <img src={photo} alt="My Photo" className="foto" />
      </div>
      <p>{t('greeting')}</p>
      <h1>{t('description')}</h1>
    </div>
  );
}

export default LandingPage;
