import React from 'react';

export interface CardDisplayProps {
  imageUrl: string;
  mantra: string;
  question: string;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ imageUrl, mantra, question }) => {
  return (
    <div style={{ border: '4px solid gold', padding: '16px', textAlign: 'center', borderRadius: '8px' }}>
      <img src={imageUrl} alt="Card Image" style={{ maxWidth: '100%', borderRadius: '4px' }} />
      <h3>{mantra}</h3>
      <p>{question}</p>
    </div>
  );
};

export default CardDisplay;
