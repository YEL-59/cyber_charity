import React from "react";

const HowCanHelp = () => {
  return (
    <>
      <section>
        <section className="w-full mt-20">
          <div className="w-full h-[25rem] bg-[url('/assets/programs-img/help-image.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
            <div>
              <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold  bg-gray-800 p-2 bg-opacity-40 rounded-lg">
                How Can We Help You?
              </h1>
            </div>
            <p className="text-white text-2xl mt-5">
              Search in our wide array of resources on senior cybersecurity and
              digital safety.
            </p>
            <div className=" mx-auto flex flex-col items-center">
              <form className="flex flex-col items-center">
                <div className="max-w-5xl flex justify-center items-center gap-2 md:mt-6 xs:mt-4 mx-4">
                  <input
                    type="text"
                    className="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
                    placeholder=""
                  />
                  <button
                    type="submit"
                    className="px-[10px] p-[10px] bg-blue-500 text-lg text-white rounded-md font-semibold"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            {/*  <div class="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
            <input type="text" class="rounded-md w-full p-3 " placeholder="Search MCQ | Topic | Course">


            <button type="submit" class="absolute right-6 top-6">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>

        </div> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default HowCanHelp;
