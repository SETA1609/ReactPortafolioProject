import React from 'react';
import './LandingPage.css';
import photo from './foto.png';
import { useTranslation } from 'react-i18next';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='landingPage d-flex flex-column align-items-center justify-content-center'>
      <div className="d-flex flex-column align-items-center mb-3">
        <img src={photo} alt="My Photo" className="foto" />
      </div>
      <p className='text-center'>{t('greeting')}</p>
      <h1 className='text-center'>{t('description')}</h1>
    </div>
  );
};

export default LandingPage;
