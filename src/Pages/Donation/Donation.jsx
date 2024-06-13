import React from 'react'
import Banner from "../../Components/ShareableComponents/Banner/Banner";
import FixedHeader from "../../Components/ShareableComponents/FixedHeader/FixedHeader";
import Donatinform from './donationform/Donatinform';
import Footer from "../../Components/ShareableComponents/Footer/Footer";
const Donation = () => {
  return (
    <>
      <FixedHeader />
      <div>
        <Banner
          backgroundImage="/assets/invoive-img/tac-banner.png"
          title="Donation"
          subtitle="Please consider making a tax-deductible donation to help Kick-Ass Seniors NFP continue providing essential cybersecurity education and support to seniors at no cost to them. Your contribution will directly empower vulnerable older adults with the knowledge, skills and community they need to confidently participate online and avoid exploitation. Help us close the digital divide and create a more secure, inclusive future. Donate online or get in touch to learn more about supporting our mission."
        />
      </div>
      <div>
       <Donatinform/>

       <Footer/>
      </div>
    </>
  );
}

export default Donation
