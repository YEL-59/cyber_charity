import React from 'react'
import FixedHeader from '../../Components/ShareableComponents/FixedHeader/FixedHeader';
import Banner from '../../Components/ShareableComponents/Banner/Banner';
import Joinusfrom from './GetInvoiceComponents/Joinusform/Joinusfrom';
import SeminarForm from './GetInvoiceComponents/SeminarForm/SeminarForm';
import Event from './GetInvoiceComponents/Event/Event';
import Footer from "../../Components/ShareableComponents/Footer/Footer";
const GetInvoice = () => {
  return (
    <>
      <FixedHeader />
      <div>
        <Banner
          backgroundImage="/assets/invoive-img/tac-banner.png"
          title="Get Involved"
          subtitle="We welcome passionate individuals to join our mission of empowering senior cybersecurity through volunteering, partnerships, donations, and more. Support Kick-Ass Seniors NFP and create positive change for older adults navigating the digital world."
        />
      </div>
      <div>
        <Joinusfrom />
        <SeminarForm />
        <Event />
        <Footer />
      </div>
    </>
  );
}

export default GetInvoice
