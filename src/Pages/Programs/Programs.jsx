import Banner from "../../Components/ShareableComponents/Banner/Banner";
import FixedHeader from "../../Components/ShareableComponents/FixedHeader/FixedHeader";
import FlipCard from "./ProgramsComponents/FlipCard/FlipCard";
import {
  FaBeer,
  FaCoffee,
  FaApple,
  FaAndroid,
  FaWindows,
} from "react-icons/fa";
import Workshop from "./ProgramsComponents/Workshop/Workshop";
import AppDownload from "./ProgramsComponents/AppDownload/AppDownload";
import HowCanHelp from "./ProgramsComponents/HowCanhelp/HowCanHelp";
import Footer from "../../Components/ShareableComponents/Footer/Footer";
const Programs = () => {
  const cardData = [
    {
      icon: <FaBeer />,
      frontText: "Personal Assistance",
      backList: [
        " One-on-one consultations to help seniors implement secure practices online and address concerns.",
        "Technical support to help with digital devices, account security, passwords, privacy settings, and software.",
        "Ongoing mentoring relationships via phone/video chat for continued learning.",
      ],
    },
    {
      icon: <FaCoffee />,
      frontText: "Support Offerings",
      backList: [
        "Cybersecurity helpline assists seniors dealing with online threats, fraud attempts, or data breaches.",
        "Online community forum enables knowledge sharing between peers and access to expert moderators.",
        " Referral program connects seniors to relevant government, legal, financial and healthcare resources.",
      ],
    },
    {
      icon: <FaApple />,
      frontText: "Educational Workshops and Seminars",
      backList: [
        "Introductory and advanced courses covering topics like online safety, avoiding scams, identity protection, safe social media use, secure banking and more.",
        " Group sessions held at senior centers, libraries, community centers, both in-person and virtually to extend reach.",
        "Private customized workshops for retirement communities tailored to their specific needs.",
        " All workshops and seminars are offered completely free for seniors.",
      ],
    },
    {
      icon: <FaAndroid />,
      frontText: "Educational Resources",
      backList: [
        "Printed guides on digital security basics, online privacy, social media safety, identifying scams, and other relevant topics.",
        " Instructional videos on cybersecurity topics and online activities tailored for seniors.",
        " Monthly webinars on the latest threats and best practices seniors need to know.",
        " Online learning portal with e-courses, resources and a knowledge library.",
      ],
    },
    {
      icon: <FaWindows />,
      frontText: "Mobile Application",
      backList: [
        "User-friendly mobile app provides cybersecurity tips, reminders, resources and urgent response options.",
        "Available on both iOS and Android to maximize accessibility.",
        " Incorporates interactive games and quizzes to engage users.",
        "Provides overview of topics covered in workshops and learning portal.",
      ],
    },
  ];

  return (
    <>
      <FixedHeader />
      <div>
        <Banner
          backgroundImage="/assets/programs-img/program-banner.png"
          title="Programs and Services"
          subtitle="At Kick-Ass Seniors NFP, we offer a range of free cybersecurity education and support programs tailored to seniors' needs. Our services empower older adults to safely enjoy the benefits of technology through personalized guidance."
        />
      </div>
      <div>
        <div className=" container mx-auto p-4 mt-10 mb-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {cardData.map((card, index) => (
              <FlipCard
                key={index}
                icon={card.icon}
                frontText={card.frontText}
                backList={card.backList}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Workshop/>
        <AppDownload/>
        <HowCanHelp/>

      </div>
      <Footer/>
    </>
  );
};

export default Programs;
