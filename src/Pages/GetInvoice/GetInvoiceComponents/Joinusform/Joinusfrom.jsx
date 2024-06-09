import React, { useEffect, useState } from 'react'
import VolunteerForm from './VolunteerForm/VolunteerForm';
import PartnerForm from './PartnerForm/PartnerForm';

const Joinusfrom = () => {
const [selectedForm, setSelectedForm] = useState('volunteer');

useEffect(() => {
  const savedForm = localStorage.getItem("selectedForm");
  if (savedForm) {
    setSelectedForm(savedForm);
  }
}, []);

const handleButtonClick = (formType) => {
  setSelectedForm(formType);
  localStorage.setItem("selectedForm", formType);
};

return (
  <>
    <div>
      <div className="flex justify-center items-center mt-10 mb-5">
        <h1 className="text-3xl font-bold text-center">
          You Can Join With Us As :
        </h1>
        <div className="flex gap-5 ml-5">
          <button
            className={`border px-20 py-2.5 rounded-lg  ${
              selectedForm === "volunteer" ? "text-white bg-[#16b1b5]" : ""
            }`}
            onClick={() => handleButtonClick("volunteer")}
          >
            Volunteer
          </button>
          <button
            className={`border px-20 py-2.5 rounded-lg ${
              selectedForm === "partner" ? "text-white bg-[#16b1b5]" : ""
            }`}
            onClick={() => handleButtonClick("partner")}
          >
            Partner
          </button>
        </div>
      </div>
      <div className="mt-5 bg-[#F3F3F3] p-2">
        {selectedForm === "volunteer" && (
          <VolunteerForm selectedForm={selectedForm} />
        )}
        {selectedForm === "partner" && (
          <PartnerForm selectedForm={selectedForm} />
        )}
      </div>
    </div>
  </>
);
}

export default Joinusfrom
