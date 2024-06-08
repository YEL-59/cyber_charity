import React from "react";

const History = () => {
  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:order-2">
              <img
                src="/public/assets/aboutus-img/our-history.png"
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
                  top: "-2%",
                  right: "-1%",
                  height: "60%",
                  width: "121%",
                }}
              >
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Our History
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kick-Ass Seniors NFP was founded in 2023 by a team of tech experts, senior care advocates and non-profit leaders from Geeks CRS, the fastest-growing micro-tech service provider in Australia, who recognized the need for specialized digital literacy training for the elderly. Throughout the years of providing tech, IT, and computer services to households and business, it has been noted that many seniors are left behind and vulnerable to online scams, fraud and privacy breaches. Kick-Ass Seniors NFP was created to address this pressing issue through empathy, education and community support.


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
