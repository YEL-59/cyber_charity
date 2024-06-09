// ContentSection.js
import React from "react";
import VideoCard from "../VideoCard/VideoCard";

const ContentSection = ({ selectedTag, videos }) => {
  // Filter videos based on selected tag
  const filteredVideos =
    selectedTag === "All Videos"
      ? videos
      : videos.filter((video) => video.tags.includes(selectedTag));

  return (
    <div className="w-3/4 p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Featured Videos - {selectedTag}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVideos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            description={video.description}
            tags={video.tags} // Pass tags as prop
          />
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
