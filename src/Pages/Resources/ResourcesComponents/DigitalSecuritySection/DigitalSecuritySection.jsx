import React from 'react'

const DigitalSecuritySection = () => {
  return (
    <>
      <section className="container mx-auto rounded-3xl py-12 h-[38rem] bg-gray-100 mt-10 mb-10">
        <div className=" ">
          <div className="flex flex-col lg:flex-row justify-center items-center align-middle gap-10 p-10">
            <div className="lg:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Digital Security for Seniors
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Advancing age often brings physical limitations and cognitive
                changes that can make it challenging for seniors to adopt new
                technology and learn cybersecurity best practices. But with
                thoughtful guidance tailored to their needs, older adults can
                utilize tools to protect their finances, identity and personal
                information online.
              </p>
            </div>
            <div className=" ">
              <img
                src="/assets/aboutus-img/overview-image.png"
                alt="Overview"
                className=" flex items-end justify-end rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DigitalSecuritySection
