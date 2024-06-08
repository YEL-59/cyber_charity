import React from "react";

const Overview = () => {
  return (
    <>
     <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center  gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Overview</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ​Kick-Ass Seniors NFP aims to make cybersecurity awareness and technical literacy accessible to senior citizens. Our tailored programs and services help seniors learn essential skills to protect themselves from digital threats. We offer cybersecurity workshops, personalized coaching, community support forums, educational materials and more - completely free for seniors. Our team of experts provides compassionate guidance to seniors, enabling them to enjoy the benefits of technology while staying safe online. We are bridging the digital divide.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="/assets/aboutus-img/overview-image.png" alt="Overview" className="lg:w-full rounded-3xl shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Overview;
