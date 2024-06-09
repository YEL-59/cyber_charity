// Category.js
import React, { useState } from "react";
import ContentSection from "./CategoryComponents/ContentSection/ContentSection";
import CategoriesSidebar from "./CategoryComponents/CategoriesSidebar/CategoriesSidebar";

const Category = () => {
  const [selectedTag, setSelectedTag] = useState("All Videos");
  // Sample data for categories and videos
  const categories = ["All Videos", "Cyber Video", "Video", "Guideline Blog"];
  const videos = [
    {
      title: "Video 1",
      description: "Description of Video 1",
      tags: ["Cyber", "Tech"],
    },
    {
      title: "Video 2",
      description: "Description of Video 2",
      tags: ["Health", "Fitness"],
    },
    {
      title: "Video 3",
      description: "Description of Video 3",
      tags: ["Cyber", "Security"],
    },
    {
      title: "Video 4",
      description: "Description of Video 4",
      tags: ["Tech", "Gadgets"],
    },
  ];

  return (
    <div className="flex">
      <CategoriesSidebar
        categories={categories}
        setSelectedTag={setSelectedTag}
      />
      <ContentSection videos={videos} selectedTag={selectedTag} />
    </div>
  );
};

export default Category;
