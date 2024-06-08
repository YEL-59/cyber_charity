import React from "react";

const AppDownloadSection = ({ title, items, imageUrl }) => {
  return (
    <section>
      <div className="bg-[#0A2640] ">
        <div className="flex flex-col lg:flex-row justify-between items-center p-10">
          <div className="lg:ml-6 lg:max-w-2xl">
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-9">
              {title}
            </h4>
            <ul className="mt-8 space-y-3 font-medium">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 leading-5 text-white">{item}</p>
                </li>
              ))}
            </ul>
            {/* <div className="w-full flex justify-center items-center ">
              <section className="body-font m-auto my-4  text-gray-600">
                <div className="flex flex-col items-center justify-center px-4 py-0 md:flex-row">
                  <div className="mx-auto flex flex-shrink-0 items-center space-x-2 sm:space-x-4">
                    <button className="inline-flex items-center rounded-lg border border-gray-200 dark:text-white bg-gray-50  px-3 py-1.5 sm:px-4 sm:py-3 hover:bg-gray-100 focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-7 w-5 sm:h-7 sm:w-9"
                        viewBox="0 0 512 512"
                      >
                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                      </svg>
                      <span className="ml-2 flex flex-col items-start leading-none">
                        <span className="mb-0 sm:text-xs text-[10px] text-gray-600 dark:text-gray-300">
                          GET IT ON
                        </span>
                        <span className="title-font sm:text-sm text-xs font-medium dark:text-gray-200">
                          Google Play
                        </span>
                      </span>
                    </button>
                    <button className="inline-flex items-center rounded-lg border border-gray-200 dark:text-white bg-gray-50 px-3 py-1.5 sm:px-4 sm:py-3 hover:bg-gray-100 focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-7 w-5 sm:h-7 sm:w-9"
                        viewBox="0 0 305 305"
                      >
                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                      </svg>
                      <span className="ml-2 flex flex-col items-start leading-none">
                        <span className="mb-0 sm:text-xs text-[10px] text-gray-600 dark:text-gray-300">
                          Download on the
                        </span>
                        <span className="title-font sm:text-sm text-xs font-medium dark:text-gray-200">
                          App Store
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </section>
            </div> */}
             <div
            className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:mt-6 lg:justify-start ">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-8 h-8 text-gray-50">
					<path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
				</svg>
				<span className="flex flex-col items-start ml-4 leading-none">
					<span className="mb-1 text-xs">GET IT ON</span>
					<span className="font-semibold title-font">Google Play</span>
				</span>
			</button>
            <button className="inline-flex items-center px-5 py-3 rounded-lg bg-black text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current w-8 h-8 text-gray-50">
					<path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
				</svg>
				<span className="flex flex-col items-start ml-4 leading-none">
					<span className="mb-1 text-xs">Download on the</span>
					<span className="font-semibold title-font">App Store</span>
				</span>
			</button>
        </div>
          </div>
          <div className="mt-6 lg:mt-0">
            <img src={imageUrl} alt="App Screenshot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
