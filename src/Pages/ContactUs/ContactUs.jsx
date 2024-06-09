import React from "react";
import FixedHeader from "../../Components/ShareableComponents/FixedHeader/FixedHeader";
import Banner from "../../Components/ShareableComponents/Banner/Banner";
import Contactusvector from "./ContactusComponents/Contactusvector/Contactusvector";
import ContactusForm from "./ContactusComponents/ContactusForm/ContactusForm";
import Footer from "../../Components/ShareableComponents/Footer/Footer";
const ContactUs = () => {
  return (
    <>
      <FixedHeader />
      <div>
        <Banner
          backgroundImage="/assets/contact-img/contact-us-top-banner.png"
          title="Contact Us"
          subtitle="Your Kick-Ass Seniors Team is always ready to help and give the best solution for your situation!"
        />
      </div>
      <div>
        <Contactusvector/>
        <ContactusForm/>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
