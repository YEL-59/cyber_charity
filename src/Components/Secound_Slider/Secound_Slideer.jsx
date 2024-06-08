import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';
import { Pagination, Navigation } from "swiper/modules";

export default function Secound_Slider() {
  return (
    <>
      <div className="flex justify-between">
        <div>
        <h1 className="text-3xl text-gray-500 mx-auto font-bold">
        Recent Cyber Attacks in Australia
      </h1>
        </div>
        <div className="flex gap-2  justify-end  mr-16">
          <div className="custom-swiper-button-prev flex items-center justify-center p-2 bg-[#16b1b5] rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
          </div>
          <div className="custom-swiper-button-next flex items-center justify-center p-2 bg-[#16b1b5] rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="newSwiper"
      >
        {newSlidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center  mt-5"
          >
            <div className="flex flex-col md:flex-row justify-between items-center  w-full shadow-2xl rounded-xl bg-slate-100">
              <div className="flex-1 md:pr-4 mb-4 md:mb-0   p-4 rounded">
                <h2 className="text-3xl text-gray-500 font-medium mb-2 leading-relaxed">
                  {slide.title}
                </h2>
                <p className="text-xl font-thin mb-4 max-w-lg leading-relaxed">
                  {slide.text}
                </p>
                <button className="px-4 py-2 bg-[#16b1b5] text-white rounded hover:bg-blue-700">
                  {slide.buttonText}
                </button>
              </div>
              <div className="flex-1 flex justify-end items-center">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="max-w-full h-auto rounded-lg shadow-xl bg-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const newSlidesData = [
  {
    title:
      "102yo grandmother scammed out of aged care bond in $375,000 email hack",
    text: "When 102-year-old Nancy Pun s $375,000 aged care home deposit was stolen, her family could not bring themselves to tell her.",
    buttonText: "Read More",
    imageUrl: "/assets/Secound_Slider-img/slide-1.png",
  },
  {
    title: "Six Million Australian Adults Hacked in the Last Year",
    text: "Roughly-one third of adult Australians, or around 6.4 million people, have been the victim of a breach in the last 12 month.",
    buttonText: "Read More",
    imageUrl: "/assets/Secound_Slider-img/slide-2.png",
  },
  {
    title:
      "ACCC calls for united front as scammers steal over $3bn from Australians",
    text: "Australians lost a record $3.1 billion to scams in 2022, as government, law enforcement and the private sector look to improve collaborative efforts to support the community in the fight against scams. This is an 80 per cent increase on total losses recorded in 2021.",
    buttonText: "Read More",
    imageUrl: "/assets/Secound_Slider-img/slide-3.png",
  },
];
