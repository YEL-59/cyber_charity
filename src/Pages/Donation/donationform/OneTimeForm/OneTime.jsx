import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setDonationAmount } from "../../../../redux/reducers/donationSlice";

const OneTime = ({ selectedForm, donationAmount, setDonationAmount }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Save form data to local storage or dispatch further actions
    localStorage.setItem("OntimeFormData", JSON.stringify(data));
    console.log("Form data saved to local storage:", data);
  };

  const handleDonate = (amount) => {
    setDonationAmount(amount);
    console.log(`Donating $${amount}`);
  };

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
          <button
            type="button"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
            onClick={() => handleDonate(50)}
          >
            Donate $50
          </button>
          <button
            type="button"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
            onClick={() => handleDonate(100)}
          >
            Donate $100
          </button>
          <button
            type="button"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
            onClick={() => handleDonate(200)}
          >
            Donate $200
          </button>
          <button
            type="button"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
            onClick={() => handleDonate(500)}
          >
            Donate $500
          </button>
          <button
            type="button"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
            onClick={() => handleDonate(1000)}
          >
            Donate $1000
          </button>
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

const mapStateToProps = (state) => ({
  donationAmount: state.donation.amount, 
});

const mapDispatchToProps = { setDonationAmount };

export default connect(mapStateToProps, mapDispatchToProps)(OneTime);
