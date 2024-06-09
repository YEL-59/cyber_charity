import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
// import FooterLogo from "../../../../public/images/Footer_Images/footer-logo.png";

import Single_SocialIcon from "./Footer_Components/Single_SocialIcon/Single_SocialIcon";
const Footer = () => {
  //this is important to show content in top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full  h-full  pb-5  text-white px-5 bg-[#564e4e] opacity-95  ">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className=" md:w-64 lg:w-[15rem] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img
                src="/assets/footer-img/footer-logo.png"
                alt=" main logo"
                className=" h-20 "
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <img
                src="/assets/footer-img/Registered-Charity-Logo.png"
                alt=" main logo"
                className=" h-40 "
              />
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-3/12 md:w-1/2 w-full ">
              <h2 className=" mb-[18px]  text-white text-[18px] font-bold select-none">
                Company
              </h2>
              <nav className="list-none mb-5">
                <ul className="flex flex-col gap-1 text-white">
                  <Link
                    to="/aboutus"
                    className="hover:underline"
                    onClick={scrollToTop}
                    href=""
                  >
                    <li>About Us </li>
                  </Link>

                  <li>
                    <Link
                      to="/service"
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
                      {" "}
                      Our Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product"
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
                      {" "}
                      Our Product
                    </Link>
                  </li>
                  <p className="text-[16px] font-medium my-2 ">
                    Connect With Us
                  </p>

                  <div className="inline-flex  space-x-2">
                    <Single_SocialIcon
                      icon={<BiLogoFacebookCircle size={30} />}
                      hoverIconSrc="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                      alt="Facebook"
                      link="https://facebook.com"
                    />
                    <Single_SocialIcon
                      icon={<BiLogoTwitter size={30} />}
                      hoverIconSrc="https://img.icons8.com/fluent/30/000000/twitter.png"
                      alt="Twitter"
                      link="https://twitter.com"
                    />
                    <Single_SocialIcon
                      icon={<BiLogoInstagramAlt size={30} />}
                      hoverIconSrc="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                      alt="Instagram"
                      link="https://instagram.com"
                    />
                    <Single_SocialIcon
                      icon={<BiLogoLinkedinSquare size={29} />}
                      hoverIconSrc="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
                      alt="LinkedIn"
                      link="https://linkedin.com"
                    />
                  </div>
                </ul>
              </nav>
            </div>

            <div className="lg:w-3/12 md:w-1/2 w-full ">
              <Link to="/contact_us" className="font-bold text-lg ">
                Resources
              </Link>

              <nav className="list-none mt-3 mb-10">
                <ul className="flex flex-col gap-[10px] text-white">
                  <a className="hover:underline" href="#">
                    <li>Smart Home Guide</li>
                  </a>
                  <Link
                    to={"/project"}
                    className="hover:underline"
                    onClick={scrollToTop}
                    href=""
                  >
                    <li>Project</li>
                  </Link>
                  <Link
                    to={"/blog"}
                    className="hover:underline"
                    onClick={scrollToTop}
                    href=""
                  >
                    <li>Blog</li>
                  </Link>
                </ul>
              </nav>
            </div>

            <div className="lg:w-3/12 md:w-1/2 w-full ">
              <h2 className="mb-[18px]  text-white text-[18px] font-bold select-none">
                Help
              </h2>
              <nav className="list-none ">
                <ul className="flex flex-col gap-[10px] text-white">
                  <Link className="hover:underline" href="">
                    <li>Customer Support</li>
                  </Link>
                  <Link className="hover:underline" href="">
                    <li>Delivery Details</li>
                  </Link>
                  <Link
                    className="hover:underline"
                    onClick={scrollToTop}
                    to={"/terms_and_condition"}
                  >
                    <li>Terms & Conditions</li>
                  </Link>
                  <Link
                    to={"/privacy_policy"}
                    className="hover:underline"
                    onClick={scrollToTop}
                    href=""
                  >
                    <li>Privacy Policy</li>
                  </Link>

                 
                </ul>
              </nav>
            </div>
            <div className="lg:w-3/12 md:w-1/2 w-full ">
              <h2 className="mb-[10px]  text-white text-[18px] font-bold select-none">
                Download Our App
              </h2>
              <p>App Is Coming Soon On The App Store</p>

              {/* <div>
                <form>
                  <label className="mb-2 text-sm font-medium text-white sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none"></div>
                    <input
                      type="email"
                      id="default-search"
                      className="block w-full p-2 pl-10 text-sm text-white border  rounded-lg bg-white "
                      placeholder="Email..."
                      required
                    />
                    <button
                      type="submit"
                      className=" absolute right-3.5 bottom-1.5 border-2 border-[#00ABE4] rounded-full p-0.5"
                    >
                      <BsSendFill size={15} color="#00ABE4" />
                    </button>
                  </div>
                </form>
              </div> */}
              <div>
                <div className="  flex justify-start items-start mt-3">
                  <div className="flex flex-shrink-0 items-center space-x-2 sm:space-x-4">
                    <button className="inline-flex items-center rounded-lg border border-gray-200  bg-black  px-2 py-1  hover:bg-gray-100 focus:outline-none ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-5 w-5"
                        viewBox="0 0 512 512"
                      >
                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                      </svg>
                      <span className="ml-2 flex flex-col items-start leading-none">
                        <span className="mb-0 sm:text-xs text-[10px] text-white">
                          GET IT ON
                        </span>
                        <span className="title-font sm:text-sm text-xs font-medium ">
                          Google Play
                        </span>
                      </span>
                    </button>
                    <button className="inline-flex items-center rounded-lg border border-gray-200  bg-black  px-2 py-1  hover:bg-gray-100 focus:outline-none ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-5 w-5 "
                        viewBox="0 0 305 305"
                      >
                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                      </svg>
                      <span className="ml-2 flex flex-col items-start leading-none">
                        <span className="mb-0 sm:text-xs text-[10px] text-white ">
                          Download on the
                        </span>
                        <span className="title-font sm:text-sm text-xs font-medium ">
                          App Store
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black opacity-95">
        <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col justify-between sm:flex-row">
          <p className="text-white  text-sm text-center font-normal sm:text-left">
            Copyright © 2023 smart home people ABN Number 20611064601
          </p>
          <p className="text-white  text-sm font-normal  ">
            Developed By{" "}
            <a
              href="https://krazyit.com/#"
              target="blank"
              className="hover:underline"
            >
              {" "}
              Krazyit
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
