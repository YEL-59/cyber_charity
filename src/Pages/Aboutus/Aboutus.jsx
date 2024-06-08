import React from "react";
import FixedHeader from "../../Components/ShareableComponents/FixedHeader/FixedHeader";
import Banner from "../../Components/ShareableComponents/Banner/Banner";
import Overview from "./AboutUsComponents/Overview/Overview";
import MissionVission from "./AboutUsComponents/MissionVission/MissionVission";
import CoreValue from "./AboutUsComponents/CoreValue/CoreValue";
import History from "./AboutUsComponents/History/History";
import Background from "./AboutUsComponents/Background/Background";
import Footer from "../../Components/ShareableComponents/Footer/Footer";

const Aboutus = () => {
 
  return (
    <>
      <section>
        <FixedHeader />
        <div>
          <Banner
            backgroundImage="/assets/programs-img/program-banner.png"
            title="About Us"
            subtitle="At Kick-Ass Seniors NFP, our mission is to empower senior citizens to safely and confidently embrace technology. We provide free cybersecurity education, resources and support to help bridge the digital divide for older adults. Our goal is to equip seniors with the knowledge, tools and community they need to navigate the online world securely."
          />
        </div>
        <div >
            <Overview/>
            <MissionVission/>
            <CoreValue/>
            <History/>
            <Background/>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default Aboutus;
