import React from 'react'

const MissionVission = () => {
  return (
    <>
    <section className="py-12 bg-gray-400">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center  gap-10">
        <div className="lg:w-1/2">
            <img src="/assets/aboutus-img/mission-image.png" alt="Overview" className="lg:w-full rounded-3xl shadow-lg"/>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Mission</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            To empower seniors to safely navigate the digital landscape through free, comprehensive cybersecurity education, resources, and support.
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Vision</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A future where seniors actively participate and thrive in the digital world with confidence and security.
            </p>
          </div>
         
        </div>
      </div>
    </section>
    
    
    </>
  )
}

export default MissionVission