import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  body: string;
  photo: string;
  link: string;
}

function Card({ title, body, photo, link }: CardProps) {
  return (
    <div className="card">
      {photo && (
        <div className="card-image">
          <img src={photo} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{body}</p>

      <a href={link} target="_blank">
      Read More
      </a>
    </div>
  );
}

export default Card;
