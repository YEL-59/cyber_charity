import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ icon, frontText, backList }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front bg-green-500 text-white flex flex-col items-center justify-center">
          <div className="icon text-6xl mb-2">{icon}</div>
          <p>{frontText}</p>
        </div>
        <div className="flip-card-back  text-white flex flex-col items-center justify-center p-7">
          <ul className="list-disc">
            {backList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
