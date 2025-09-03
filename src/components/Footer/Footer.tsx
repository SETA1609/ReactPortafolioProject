import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>{t('footer')}</p>
    </footer>
  );
};

export default Footer;
