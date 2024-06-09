import React from 'react'
import { useForm } from 'react-hook-form';

const SeminarForm = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-start max-w-md mx-auto mt-10 mb-10">
          Love to hear from you Get in touch{" "}
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
                {...register("firstName", { required: true })}
              />
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
                {...register("lastName", { required: true })}
              />
            </div>
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
                {...register("phone", { required: true })}
              />
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
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <h1 className=" font-bold text-gray-900 mb-2">Personal Address:</h1>
          <div className="bg-gray-300 rounded-lg p-3 mb-2">
            <div className="grid md:grid-cols-2 md:gap-6 ">
              <div className="mb-5">
                <label
                  htmlFor="house"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  House No
                </label>
                <input
                  type="text"
                  id="house"
                  {...register("houseNumber", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="House No."
                />
               
              </div>
              <div className="mb-5">
                <label
                  htmlFor="road"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Road No
                </label>
                <input
                  type="text"
                  id="road"
                  {...register("roadNumber", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Road No."
                />
               
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="mb-5">
                <label
                  htmlFor="block"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Block
                </label>
                <input
                  type="text"
                  id="block"
                  {...register("block", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Block"
                />
                
              </div>
              <div className="mb-5">
                <label
                  htmlFor="area"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Area
                </label>
                <input
                  type="text"
                  id="area"
                  {...register("area", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Area"
                />
               
              </div>
              <div className="mb-5">
                <label
                  htmlFor="post_code"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Post Code
                </label>
                <input
                  type="text"
                  id="post_code"
                  {...register("postCode", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Post Code"
                />
               
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."
              {...register("message", { required: true })}
            ></textarea>
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
}

export default SeminarForm
