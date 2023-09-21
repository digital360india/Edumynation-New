import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

import { TfiLocationPin } from "react-icons/tfi";

import { IoCallOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
const Contact = () => {
 
  return (
    <>
     
      <div className=" mt-16 md:mt-24 ">
        <div className="flex flex-col items-center gap-2 py-20 bg-white  ">
          <h1 className="text-4xl font-semibold py-5">GET IN TOUCH</h1>

          <ul className="w-[350px] h-[380px] lg:w-[750px] p-9 lg:p-8  lg:h-[310px] flex flex-col gap-4 bg-green-100">
            <li className="flex gap-3">
              <div className="w-6 h-8 flex items-center">
                <TfiLocationPin className="   " />
              </div>
              <div>903, Saeed Tower-1, Sheikh Zayed Road Dubai, UAE</div>
            </li>
            <li className="flex gap-3 items-center">
              {" "}
              <IoCallOutline className="h-8 w-5" />{" "}
              <a href="tel:+971 52 102 6963">+971 52 102 6963</a>
            </li>
            <li className="flex items-center gap-3">
              <SlEnvolope className="h-8 w-5 " />
              <div> info@edumynation.com</div>
            </li>
            <li>For Jobs and Internship: +971521026963</li>
            <div className="flex justify-between">
              <div className="flex gap-4 pt-5  ">
                <a
                  href="https://www.youtube.com/channel/UCp3Dy-Tv2xmdGT-Wwqrkn2g"
                  target="_blank"
                >
                  <BsYoutube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/edumynation/"
                  target="_blank"
                >
                  <BsInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/edumynation" target="_blank">
                  <BiLogoFacebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/edumynation" target="_blank">
                  <BsTwitter className="w-5 h-5" />
                </a>
              </div>
              <img
                className="lg:-mt-28 w-16 h-16 lg:w-40 lg:h-40"
                src="https://www.eduminatti.com/enquireAvatar.png"
                alt=""
              />
            </div>
          </ul>
        </div>

     
      </div>
    </>
  );
};

export default Contact;
