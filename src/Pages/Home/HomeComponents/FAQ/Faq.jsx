import React, { useState } from "react";
import Accordion from "./FAQ_Components/Accordion/Accordion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      <section className="FAQ-section ">
        <div className=" lg:p-5">
          {/* <h1 className="title-font text-[#2c6777] text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mt-12 mb-12 text-center">
            Frequently Asked Questions
          </h1> */}
          <h2 className="text-2xl text-center  font-extrabold leading-10 tracking-tight text-gray-800  sm:leading-none md:text-5xl mt-10 mb-10">
            Frequently Asked
            <span className="font-bold text-[#16b1b5]"> Questions</span>
          </h2>
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4  p-2">
              {/* large div */}
              <div className="col-span-12 lg:col-span-9 mb-6  lg:mb-0">
                <div>
                  <Accordion
                    title="1) How do I make a donation to Kick-Ass Seniors ? "
                    content="You can donate online via credit card or PayPal through our secure donation form."
                    index={0}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Accordion
                    title="2) Are donations to Kick-Ass Seniors tax deductible ? "
                    content=" Yes, as a registered charity with Deductible Gift Recipient (DGR) status in Australia, donations made to Kick-Ass Seniors of $2 or more are tax deductible for the donor. All donations will be provided with a receipt containing our DGR endorsement and ABN to allow for deduction claims. We comply with all Charities Act and ACNC regulations to maintain our deductible charity status in Australia."
                    index={1}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Accordion
                    title=" 3) What kinds of senior cybersecurity services do you provide ?"
                    content=" Our main offerings include educational workshops, individual consultations, printed/online resources, a support helpline, and a mobile safety app. All free for seniors in need. The KASS program includes our face to face First Response call to people over 65 who have been the victims of cybercrime. We also provide educational workshops, online resources, remote support and access to the Kick-Ass App."
                    index={2}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Accordion
                    title="4) How can I get involved with Kick-Ass Seniors as a volunteer ?"
                    content="We welcome volunteers to help with workshops, creating content, administrative tasks, events, and more. Visit our Get Involved page to learn more."
                    index={3}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                </div>
              </div>
              {/* right side small dev */}
              <div className="col-span-12 lg:col-span-3">
                <div className=" w-auto h-[18rem]  border border-gray-200 rounded-lg bg-cover bg-center bg-hero-pattern shadow  ">
                  <div className="p-3  ">
                    <div className="text-center max-w-sm  ">
                      <h1 className="title-font text-white text-[28px]  title-font font-me  mb-4">
                        Any Question
                      </h1>
                      <p className="  mx-auto  font-semibold   text-black ">
                        Do you have questions? We have answers. Check the most
                        frequently asked questions regarding Kick-Ass Seniors
                      </p>
                    </div>

                    <div className="flex justify-center mt-3 ">
                      <a
                        href="#"
                        className=" bg-[#16b1b5] text-white no-underline hover:bg-green-500 mt-2  px-9 py-2 rounded-md    text-[16px] font-[500]"
                      >
                        Ask Question
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section end */}
    </>
  );
};

export default FAQ;
