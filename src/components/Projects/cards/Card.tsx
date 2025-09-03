import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../context/ThemeContext';

interface CardProps {
  title: string;
  body: string;
  photo: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, body, photo, link }) => {
  const { t } = useTranslation();
  const isDarkTheme = useTheme();
  return (
    <div className="card h-100">
      {photo && <img src={photo} className="card-img-top" alt={title} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <a
          href={link}
          target="_blank"
          className={`mt-auto btn btn-${isDarkTheme ? 'light' : 'dark'}`}
          rel="noreferrer"
        >
          {t('card.readMore')}
        </a>
      </div>
    </div>
  );
};

export default Card;
