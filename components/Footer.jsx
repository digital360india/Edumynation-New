import { BsFacebook, BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="w-full bg-[#2F3F93] mt-2 text-center">
      <div className="block sm:flex justify-around p-16">

        <div className="flex flex-col gap-4 lg:w-80 justify-center text-center items-center pt-5  ">
          <img className="w-24 flex items-center justify-center" src="https://cdn.discordapp.com/attachments/1078905801017659432/1110839909721317386/image_1.png" alt=""/>
          <div className="text-3xl text-white flex gap-10 justify-center items-center mt-8">
            <Link href="https://www.facebook.com/edumynation" target="_blank"><BsFacebook /></Link>
            <Link href="https://www.instagram.com/edumynation/" target="_blank"><BsInstagram /></Link>
            <Link href="https://www.linkedin.com/company/edu-my-nation/about/" target="_blank"><BsLinkedin /></Link>
            <Link href={'/'} ><BsYoutube /></Link>
            <Link href="https://twitter.com/edumynation" target="_blank">{" "}
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="white" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </Link>
          </div>
        </div>

        <div className="px-14 text-white ">
          <div><p className="text-white text-[30px]  font-5xl font-semibold mt-4  mb-4 text-center sm:text-left"> Contact</p></div>
            <div className=" flex items-center gap-3 mb-4 text-[14px]">
              <GoLocation  className="text-xl"/><p>903, Saeed Tower-1, Sheikh Zayed Road, Dubai, UAE</p>
            </div>
            <div className="flex items-center gap-3 mb-4  text-[14px] ">
              <FiPhone className="text-xl" /><Link href="tel:+971 56 822 8740" target="_blank">+971 52 102 6963</Link>
            </div>
            <div className="flex items-center gap-3 mb-4 text-[14px] ">
              <HiOutlineMail className="text-xl" /><Link href="mailto:info@edumynation.com">info@edumynation.com</Link>
            </div>
       </div>

        <div className="text-white text-[16px] gap-4 hidden sm:block">
           <div><p className="text-white text-[30px]  font-3xl font-semibold my-4 text-left"> Important Links</p></div>
           <div className="flex  gap-10 text-left" > 
           <div className="flex flex-col space-y-4">
            <Link href={'/'} >Home</Link>
            <Link href={'/PrivacyPolicy'} >Privacy Policies</Link>
            <Link href={'/About'} >About</Link>
            </div>
            <div  className="flex flex-col space-y-4">
            <Link href={"/Terms&Condition"}>Terms & Condition</Link>
            <Link href={'https://blog.edumynation.com/'} >Blogs</Link>
            <Link href={'/sitemap.xml'} >SiteMap</Link>
            </div>
          </div></div>
      </div>
      <div className="text-center text-white pb-4"><p>copyright@edumynation</p></div>

    </div>
  );
};

export default Footer;