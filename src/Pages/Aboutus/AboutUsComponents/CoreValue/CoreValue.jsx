import React from "react";
import {
  FaBeer,
  FaCoffee,
  FaApple,
  FaAndroid,
  FaWindows,
} from "react-icons/fa";
import SingleCard from "./CoreValueComponents/SingleCard/SingleCard";
const CoreValue = () => {
  const cardData = [
    {
      icon: <FaBeer />,
      title: "Security",
      body_text:
        "We are dedicated to protecting seniors wellbeing in the digital age.",
    },
    {
      icon: <FaCoffee />,
      title: "Empowerment",
      body_text:
        "We believe in empowering seniors with knowledge and skills to manage technological change.",
    },
    {
      icon: <FaApple />,
      title: "Inclusion",
      body_text:
        "We strive to make technology accessible, understandable, and beneficial for all seniors.",
    },
    {
      icon: <FaAndroid />,
      title: "Compassion",
      body_text:
        "We approach our mission with empathy, patience and respect for the needs of seniors.",
    },
    {
      icon: <FaWindows />,
      title: "Community",
      body_text:
        "We are dedicated to protecting seniors' wellbeing in the digital age.",
    },
  ];
  return (
    <>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {cardData.map((card, index) => {
            return(
          <SingleCard
            key={index}
            icon={card.icon}
            title={card.title}
            body_text={card.body_text}
          />
            )
        })}
      </div>
    </>
  );
};

export default CoreValue;
