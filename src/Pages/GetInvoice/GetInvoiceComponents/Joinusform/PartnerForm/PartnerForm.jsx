import React from "react";
import { useForm } from "react-hook-form";

const PartnerForm = ({ selectedForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Save form data to local storage
    localStorage.setItem("PartnerFormData", JSON.stringify(data));
    console.log("Form data saved to local storage:", data);
    //console.log(data);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-start max-w-md mx-auto border-b-4 mt-10 mb-10">
          {selectedForm} Application Form
        </h1>
      </div>
      <div>
        <form
          className="max-w-6xl mx-auto mb-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="f_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="f_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="l_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="l_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className="mb-5">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Phone"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Date Of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                {...register("dob", { required: "Date of Birth is required" })}
              />
              {errors.dob && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dob.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gender
              </label>
              <select
                id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="nationality"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nationality"
                {...register("nationality", {
                  required: "Nationality is required",
                })}
              />
              {errors.nationality && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nationality.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="occupation"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Occupation"
                {...register("occupation", {
                  required: "Occupation is required",
                })}
              />
              {errors.occupation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.occupation.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="experience"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you have any related partnership with the same or other Non
              Profit Organization?
            </label>
            <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">
              Please Specify:
            </div>
            <input
              type="text"
              id="experience"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Experience"
              {...register("experience", {
                required: "This field is required",
              })}
            />
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1">
                {errors.experience.message}
              </p>
            )}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="howHeard"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                How did you heard about Kick Ass Senior?
              </label>
              <input
                type="text"
                id="howHeard"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="How did you hear about us?"
                {...register("howHeard", {
                  required: "This field is required",
                })}
              />
              {errors.howHeard && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.howHeard.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="availability"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                What is your availability per week / month?
              </label>
              <input
                type="text"
                id="availability"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Availability"
                {...register("availability", {
                  required: "This field is required",
                })}
              />
              {errors.availability && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.availability.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="volunteerExperience"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Do you have any experience as a volunteer for other Non-Profit
              Organisations? Please specify:
            </label>
            <input
              type="text"
              id="volunteerExperience"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Volunteer experience"
              {...register("volunteerExperience", {
                required: "This field is required",
              })}
            />
            {errors.volunteerExperience && (
              <p className="text-red-500 text-sm mt-1">
                {errors.volunteerExperience.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-[#16b1b5] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PartnerForm;
