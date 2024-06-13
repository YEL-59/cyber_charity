import  { useEffect, useState } from "react";
import OneTime from "./OneTimeForm/OneTime";
import MonthlyForm from "./MonthlyForm/MonthlyForm";

const Donatinform = () => {
  const [selectedForm, setSelectedForm] = useState("on-time");

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
      <div className="container mx-auto">
        <div className="grid grid-cols-2 justify-center gap-5  mt-10 mb-5">
          <div>
            {" "}
            <h1 className="text-3xl font-bold text-center">
             Frequency:
            </h1>
            <div className="flex gap-5 ml-5">
              <button
                className={`border px-20 py-2.5 rounded-lg  ${
                  selectedForm === "on-time" ? "text-white bg-[#16b1b5]" : ""
                }`}
                onClick={() => handleButtonClick("on-time")}
              >
                On Time
              </button>
              <button
                className={`border px-20 py-2.5 rounded-lg ${
                  selectedForm === "monthly" ? "text-white bg-[#16b1b5]" : ""
                }`}
                onClick={() => handleButtonClick("monthly")}
              >
                Monthly
              </button>
            </div>
            <div className="mt-5 bg-[#F3F3F3] p-2">
              {selectedForm === "on-time" && (
                <OneTime selectedForm={selectedForm} />
              )}
              {selectedForm === "monthly" && (
                <MonthlyForm selectedForm={selectedForm} />
              )}
            </div>
          </div>
          <div>
            <img
              src="/assets/invoive-img/no-upcomming-event-img.png"
              className="mx-auto mb-5 "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Donatinform;
