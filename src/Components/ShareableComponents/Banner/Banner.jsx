import React from 'react';

const Banner = ({ backgroundImage, title, subtitle }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-blend-multiply h-[25rem] mb-1"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="mb-3">
          <h1 className="text-4xl font-bold text-white relative inline-block">
            {title}
            <div className="absolute w-1/2 border-b-4 rounded-md border-white mt-2"></div>
          </h1>
        </div>
        {subtitle && (
          <p className="text-2xl text-white max-w-5xl leading-normal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
