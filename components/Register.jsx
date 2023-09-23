'use client'
import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";



const Register = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        duration: 800,
      });
    }
  }, []);
  return (
    <>
      <div className="bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1110831085073481838/Rectangle_30_1.png')] h-[400px] lg:h-[500px] w-full bg-cover mt-10 lg:mt-20">
        <div className="flex flex-wrap justify-evenly items-center lg:pt-80 pt-32 text-center gap-16 lg:px-5 ">
          <h1 className="text-white font-semibold text-3xl lg:text-5xl w-[300px] lg:w-[800px]" data-aos="zoom-in-up">
            Register your School <span className=""></span> Today!
          </h1>
          <Link href={"/contact-us"}>
          <button className="text-[#2F3F93] lg:w-[200px] font-bold bg-white px-7 py-4 rounded-full  text-[15px]" data-aos="zoom-in-down">
            CONTACT US
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
