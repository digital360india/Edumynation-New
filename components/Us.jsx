'use client'
import React,{useEffect} from "react";
import dynamic from "next/dynamic";
// import CountUp from 'react-countup';

// import AnimatedNumbers from "react-animated-numbers";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";


const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false, // Disable server-side rendering for this component
});

const Us = () => {
 
    useEffect(() => {
      if (typeof document !== 'undefined') {
        AOS.init({
          duration: 2000,
        });
      }
    }, []);
  return (
    <div data-aos="fade-in">
      <p className="text-[#2F3F93] text-center lg:text-3xl text-2xl lg:mt-24 mt-14 lg:pb-14 font-semibold" >
        ABOUT US
      </p>

      <div className="flex gap-5 p-4 justify-evenly mt-5">
        <div className="flex flex-col items-center ">
          <img
            className="w-10 h-10 lg:w-16 lg:h-16"
            src="https://cdn.discordapp.com/attachments/1078905801017659432/1110835632743391292/Rectangle_26.png"
            alt=""
          />
         <div className="flex justify-center items-center text-center text-xl lg:text-3xl font-bold text-[#2F3F93] mt-4">
            <AnimatedNumbers
              animateToNumber={500}
              fontStyle={{ fontSize: 28 }}
              configs={(number, index) => {
                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
              }}
            ></AnimatedNumbers>
            <p>+</p>
          </div>
          <p className="text-[14px] lg:text-xl text-[#2F3F93]  ">Schools</p>
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="w-10 h-10 lg:w-16 lg:h-16"
            src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686211476/edumynation-web/Rectangle_27.png"
            alt=""
          />
          <div className="flex justify-center items-center text-center text-xl lg:text-3xl font-bold text-[#2F3F93] mt-4">
            <AnimatedNumbers
              animateToNumber={200}
              fontStyle={{ fontSize: 28 }}
              configs={(number, index) => {
                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
              }}
            ></AnimatedNumbers>
            <p>+</p>
          </div>
          <p className="text-[14px] lg:text-xl text-[#2F3F93]  ">Parents</p>
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="w-10 h-10 lg:w-16 lg:h-16"
            src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686211475/edumynation-web/Rectangle_28.png"
            alt=""
          />

          {/* <p className="text-xl lg:text-3xl font-bold text-[#2F3F93] mt-4 ">
            50+
          </p> */}
          <div className="flex justify-center items-center text-center text-xl lg:text-3xl font-bold text-[#2F3F93] mt-4">
            <AnimatedNumbers
              animateToNumber={100}
              fontStyle={{ fontSize: 28 }}
              configs={(number, index) => {
                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
              }}
            ></AnimatedNumbers>
            <p>+</p>
          </div>

          <p className="text-[14px] lg:text-xl text-[#2F3F93]  ">
            Counsellors
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <img
            className="w-10 h-10 lg:w-16 lg:h-16"
            src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686211474/edumynation-web/Rectangle_29.png"
            alt=""
          />
         <div className="flex justify-center items-center text-center text-xl lg:text-3xl font-bold text-[#2F3F93] mt-4">
            <AnimatedNumbers
              animateToNumber={5}
              fontStyle={{ fontSize: 28 }}
              configs={(number, index) => {
                return { mass: 1, tension: 230 * (index + 1), friction: 140 };
              }}
            ></AnimatedNumbers>
            <p>+</p> 
          </div>
          <p className="text-[14px] lg:text-xl text-[#2F3F93]  ">Cities</p>
        </div>
      </div>

      <div className="text-center text-[13px] lg:text-[15px] p-8 flex flex-col gap-4 lg:px-40  lg:p-20">
        <p>
        Welcome to Edumynation - The ultimate guide to the best schools in
              the United Arab Emirates!
        </p>

        <p>
        Established with a mission to redefine the way people search for
              educational information in the UAE, we strive to connect parents,
              students, and educators with comprehensive, up-to-date details
              about schools across the region. At Edumynation, our mission is to streamline and simplify the
              process of selecting the perfect educational institution. We
              understand that finding the right school is a crucial decision
              that can shape a child's future.
        </p>
      </div>
      <div className="flex justify-center items-center text-center lg:pb-20" >
        <Link href={"/about-us"}>
        <button className="bg-[#2F3F93] text-white px-5 py-2 rounded-3xl ">
          Read More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Us;
