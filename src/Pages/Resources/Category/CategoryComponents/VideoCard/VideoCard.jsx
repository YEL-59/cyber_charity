// VideoCard.js
import React, { useState } from "react";

const VideoCard = ({ title, description, tags }) => {
  const [showTags, setShowTags] = useState(false);

  const toggleTags = () => {
    setShowTags(!showTags);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button onClick={toggleTags}>Toggle Tags</button>
      {showTags && (
        <div>
          <h3>Tags:</h3>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
