import React from 'react';
import './LandingPage.css';
import photo from './foto.png';
import { useTranslation } from 'react-i18next';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='landingPage d-flex flex-column align-items-center justify-content-center min-vh-100 py-4 pt-5 mt-5 mt-md-0 pt-md-0'>
      <div className="d-flex flex-column align-items-center mb-3">
        <img src={photo} alt="My Photo" className="foto" />
      </div>
      <h1 className='text-center fs-2'>{t('greeting')}</h1>
      <p className='text-center fs-4 px-5'>{t('description')}</p>
    </div>
  );
};

export default LandingPage;
