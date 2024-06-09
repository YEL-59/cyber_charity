import React from 'react'
import FixedHeader from '../../Components/ShareableComponents/FixedHeader/FixedHeader';
import Banner from '../../Components/ShareableComponents/Banner/Banner';
import Category from './Category/Category';
import DigitalSecuritySection from './ResourcesComponents/DigitalSecuritySection/DigitalSecuritySection';
import Footer from "../../Components/ShareableComponents/Footer/Footer";
const Resources = () => {
  return (
    <>
      <FixedHeader />
      <div>
        <Banner
          backgroundImage="/assets/invoive-img/tac-banner.png"
          title="Resource"
          subtitle="Our blog features the latest tips, advice and stories related to senior online security and technology use. Bookmark this page to stay on top of emerging cybersecurity issues and innovations relevant to older adults."
        />
      </div>
      <div>
        <Category />
      </div>
      <DigitalSecuritySection />

      <div>
        <section>
          <div className="text-center mb-10">
            <h1 className="text-3xl font-medium leading-normal">
              Upcoming Workshop/Seminar
            </h1>
            <p className="text-sm text-blue-500">
              Improve your skill with workshop
            </p>
            <img
              src="/assets/programs-img/no-resouce-img.png"
              className="mx-auto mb-5 "
              alt=""
            />
            <h1 className="text-3xl font-medium leading-normal">
              No Upcoming Workshop/Seminar
            </h1>
            <p className="text-sm text-blue-500">
              No event available. Now stay connected with us.
            </p>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Resources
