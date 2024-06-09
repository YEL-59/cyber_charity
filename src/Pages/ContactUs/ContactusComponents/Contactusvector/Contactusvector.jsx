import React from 'react'

const Contactusvector = () => {
  return (
    <div>
      <section className="py-12 bg-[#EFEFEF] pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center  gap-10">
            <div className="lg:w-1/2">
              <img
                src="/assets/contact-img/contact-us-bottom-dero-side-img.png"
                alt="Overview"
                className="lg:w-full rounded-3xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              
              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                We value your time. After all, your time is your asset. Kindly
                provide your information below, and our team of experts will get
                in touch with you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactusvector
