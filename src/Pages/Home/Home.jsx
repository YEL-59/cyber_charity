import { useState } from "react";
import NavBar from "../../Components/ShareableComponents/NavBar/NavBar";
import Footer from "../../Components/ShareableComponents/Footer/Footer";
import Slider from "../../Components/Slider/Slider";
import Secound_Slider from "../../Components/Secound_Slider/Secound_Slideer";
import Mission from "./HomeComponents/Mission/Mission";
import HomeCard from "./HomeComponents/HomeCard/HomeCard";
import AdvertiasmentHome from "./HomeComponents/AdvertiasmentHome/AdvertiasmentHome";
import FAQ from "./HomeComponents/FAQ/Faq";

const Home = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
      <div
        className={`z-20  ${
          navfix
            ? "fixed top-0  shadow-lg w-full  bg-white transition-all duration-300 ease-in-out "
            : ""
        }`}
      >
        <NavBar className="relative " />
      </div>
      <Slider />
     
      {/* Recent Cyber Attacks in Australia */}
      <div className="container mx-auto mt-5 mb-10">
        <Secound_Slider />
      </div>
      <div className="container mx-auto">
        <Mission />
      </div>
    
        <div className="container mx-auto  mt-10 mb-10">
          <HomeCard />
        </div>
      <div className="container mx-auto">
        <AdvertiasmentHome/>
      </div>
      <div>
      
        <FAQ/>
      </div>
      <div className="container mx-auto mb-5">
          <img src="/public/assets/cyber_security_banner.png" className="flex justify-center items-center align-middle h-auto w-full" alt="" />
        </div>
      <Footer />
    </>
  );
};

export default Home;
