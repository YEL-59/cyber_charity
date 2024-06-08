import React from "react";

const Background = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:order-2">
            <img
              src="/assets/aboutus-img/our_background.png"
              alt="Overview"
              className="lg:w-full rounded-3xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:order-1">
            <div
              className="bg-white p-6 lg:p-8"
              style={{
                backgroundColor: "#d0d0d0",
                borderRadius: "16px",
                padding: "50px 30px 54px 43px",
                position: "relative",
                top: "-17%",
                left: "-17%",
                height: "75%",
                marginTop: "10px",
                width: "123%",
              }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Our Background
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the past year, we have helped hundreds of seniors learn
                cybersecurity best practices, make their online accounts more
                secure, avoid online scams and meaningfully connect through
                technology. Our offerings now include in-person and virtual
                workshops, digital toolkits, one-on-one coaching and mentoring,
                and an online forum managed by trusted moderators. We are
                constantly enhancing our programs based on participant feedback
                to provide the most accessible and empowering experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
