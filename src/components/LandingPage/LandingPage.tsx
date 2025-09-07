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
      <h1 className='text-center'>{t('greeting')}</h1>
      <p className='text-center fs-4 ps-5 pe-5'>{t('description')}</p>
    </div>
  );
};

export default LandingPage;
