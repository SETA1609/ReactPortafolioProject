import React from 'react';
import { useTranslation } from 'react-i18next';

interface CardProps {
  title: string;
  body: string;
  photo: string;
  link: string;
}

function Card({ title, body, photo, link }: CardProps) {
  const { t } = useTranslation();
  return (
    <div className="card h-100">
      {photo && <img src={photo} className="card-img-top" alt={title} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <a href={link} target="_blank" className="mt-auto btn btn-primary" rel="noreferrer">
          {t('card.readMore')}
        </a>
      </div>
    </div>
  );
}

export default Card;
