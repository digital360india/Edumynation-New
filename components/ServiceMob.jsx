'use client'
import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const data = [
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1110824488720937011/image_9_1.png",
    heading: "Explore Schools",
    des: "Refer to our school listing and explore schools from all parts of India.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686813941/image_9_2.png",
    heading: "Get Expert Advice",
    des: "Refer to our school listing and explore schools from all parts of India.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686813942/image_9_3.png",
    heading: "Write a Review",
    des: "Refer to our school listing and explore schools from all parts of India.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686813945/image_9_4.png",
    heading: "All School Details",
    des: "Refer to our school listing and explore schools from all parts of India.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686813947/image_9_5.png",
    heading: "Free Counselling",
    des: "Refer to our school listing and explore schools from all parts of India.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686813950/image_9_6.png",
    heading: "Register Your School",
    des: "Refer to our school listing and explore schools from all parts of India.",
  },
];

const ServiceMob = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        duration: 800,
      });
    }
  }, []);
  return (
    <div className="lg:hidden">
      <h1 className="text-center font-bold text-2xl mt-5 pb-10">
        OUR SERVICES
      </h1>

      <div className="flex justify-center flex-wrap p-2 gap-4">
        {data.map((item) => {
          return (
            <>
              <div className="w-[170px] h-[200px] flex flex-col items-center gap-1 text-center " data-aos="zoom-in" >
                <img className="w-[40px] h-[40px]" src={item.img} alt="" />
                <h1 className="w-full p-2 text-[12px] text-[#2F3F93] font-bold">
                  {item.heading}
                </h1>
                <p className="w-[150px] text-[11px] text-[#2F3F93]">
                  {item.des}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceMob;
