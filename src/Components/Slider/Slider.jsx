import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation,Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
            delay: 6000, 
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div
              className="flex flex-col md:flex-row justify-between items-center w-full    rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${slide.bgImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex-1 md:pr-4 px-[5rem]  mb-4 md:mb-0">
                <h2 className="text-4xl text-white font-extrabold mb-2 leading-relaxed">{slide.title}</h2>
                <h3 className="text-2xl text-white font-bold mb-2 leading-relaxed">{slide.subtitle}</h3>
                <p className="text-lg text-white mb-4 leading-relaxed">{slide.text}</p>
                <button className="px-9 py-3 mt-5 bg-white text-black rounded-lg  hover:bg-[#16b1b5] hover:text-white">
                  {slide.buttonText}
                </button>
              </div>
              <div className="flex-1 flex justify-center items-center pt-10">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const slidesData = [
  {
    title: "Cyber Seniors Charity",
    subtitle:
      "Our Senior Citizens are being left destitute. Bank accounts emptied & Identities Stolen!",
    text: "Donate today and fight back against the scammers and cyber criminals stealing millions of dollars from our Senior Citizens annually.",
    buttonText: "Learn More",
    imageUrl: "/assets/Slider-img/persion1.png",
    bgImageUrl: "/assets/Slider-img/sliderbg.png",
  },
  {
    title: "Could your elderly parents? fall victim to cyber-criminals",
    subtitle:
      "If you worry about your elderly parents falling victim to cyber-criminals, we can help?",
    text: "Kicak Ass Seniors is a free service that helps senior citizens who have been victims of cyber-crime.We offer emotional support, legal advice, and financial assistance to help them recover from the trauma and loss.",
    buttonText: "Learn More",
    imageUrl: "/assets/Slider-img/persion2.png",
    bgImageUrl: "/assets/Slider-img/sliderbg.png",
  },
  {
    title: "Over 76,000 Reported Cyber Attacks in Australia last year!",
    subtitle:
      "Australians aged 65 and older lost more money to scams than any other age group, with a total of $82 million lost.",
    text: "We believe that senior citizens deserve respect and dignity, not exploitation and abuse.That's why we need your donation to keep our service running and reach more vulnerable elders. Please support Kicak Ass Seniors today and make a difference in someone's life.",
    buttonText: "Learn More",
    imageUrl: "/assets/Slider-img/persion3.png",
    bgImageUrl: "/assets/Slider-img/sliderbg.png",
  },
  {
    title: "Free Service that Helps Elderly Victims of Cybercrime",
    subtitle:
      "Scammers and hackers can exploit seniors lack of digital literacy, to steal their money, identity, or personal information.",
    text: "Kick Ass Seniors is a team of volunteers who are trained in cybersecurity, fraud prevention and cyber recovery after an attack has taken place.",
    buttonText: "Learn More",
    imageUrl: "/assets/Slider-img/persion4.png",
    bgImageUrl: "/assets/Slider-img/sliderbg.png",
  },
];
