import React from "react";

const SingleCard = ({ icon, title, body_text }) => {
  return (
    <>
      <div
        className="max-w-xl text-center rounded-lg border-2 mt-10 mb-10 p-3"
        style={{ boxShadow: "-7px -7px #16B1B5" }}
      >
        <div className="text-3xl flex justify-center">{icon}</div>
        <h1 className="text-lg font-medium mb-3">{title}</h1>
        <p>{body_text}</p>
      </div>
    </>
  );
};

export default SingleCard;
