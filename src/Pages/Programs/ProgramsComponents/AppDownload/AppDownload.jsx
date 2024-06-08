import React from "react";
import AppDownloadSection from "./AppDownloadComponents/AppDownloadSection/AppDownloadSection";

const AppDownload = () => {
    const items = [
        "Receive new task notifications even if you’re on a job or on the road",
        " Browse hundreds of tasks wherever you are - no extra charges",
        "Private messaging with customers"
      ];
    
  return (
    <section>
      <div className="container mx-auto">
      <AppDownloadSection
        title="Download the Kick-Ass Seniors App"
        items={items}
        imageUrl="/assets/programs-img/mobile.png"
      />
      </div>
    </section>
  );
};

export default AppDownload;
