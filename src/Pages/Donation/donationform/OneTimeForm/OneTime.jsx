import React, { useState } from "react";
import { useForm } from "react-hook-form";

const OneTime = ({ selectedForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Save form data to local storage
    localStorage.setItem("PartnerFormData", JSON.stringify(data));
    console.log("Form data saved to local storage:", data);
  };

  // Array of donation options
  const donationOptions = [
    { amount: 50, text: "Donate $50" },
    { amount: 100, text: "Donate $100" },
    { amount: 200, text: "Donate $200" },
    { amount: 500, text: "Donate $500" },
    { amount: 1000, text: "Donate $1000" },
  ];

  const handleDonate = (amount) => {
    setValue(amount);
    console.log(`Donating $${amount}`);
  };

  const [value, setValue] = useState(100);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-start max-w-md mx-auto border-b-4 mt-10 mb-10">
          {selectedForm} Donation Form
        </h1>
      </div>
      <div>
        <form
          className="max-w-6xl mx-auto mb-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          {donationOptions.map((option, index) => (
            <div key={index} className="mb-4">
              <button
                type="button"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onClick={() => handleDonate(option.amount)}
              >
                {option.text}
              </button>
            </div>
          ))}
          <div>
            <button
              type="submit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              Submit Donation
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OneTime;
