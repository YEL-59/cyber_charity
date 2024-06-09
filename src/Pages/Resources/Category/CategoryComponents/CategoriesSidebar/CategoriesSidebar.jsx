// CategoriesSidebar.js
import React from "react";

const CategoriesSidebar = ({ categories, setSelectedTag }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-gray-800 mb-2"
            onClick={() => setSelectedTag(category)} // Update selected tag onClick
            style={{ cursor: "pointer" }} // Add cursor style for better UX
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSidebar;
