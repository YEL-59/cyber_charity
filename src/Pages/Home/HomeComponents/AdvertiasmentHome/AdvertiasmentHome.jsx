const AdvertiasmentHome = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center  mt-5">
          <div className="flex flex-col md:flex-row justify-between items-center  w-full shadow-2xl rounded-xl bg-slate-100">
          <div className="flex-1 flex justify-start ">
              <img
                src="/assets/cyber-banner-women.png"
                alt=""
                className="w-full h-auto rounded-lg shadow-xl bg-cover"
              />
            </div>
            <div className="flex-1 md:pr-4 mb-4 md:mb-0   p-4 rounded">
              <h2 className="text-5xl text-gray-500 font-medium mb-10 max-w-xl leading-normal">
                Don’t wait until it’s too late! Take control of your own
                security today!
              </h2>

              <button className="px-10 py-4 bg-[#16b1b5] text-white rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvertiasmentHome;
