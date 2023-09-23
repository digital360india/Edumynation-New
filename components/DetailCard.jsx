'use client'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init();
const data = [
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109371890763567145/image_3_2.png",
    heading: "Explore Schools",
    des: "Refer to our school listing and explore schools from all parts of India.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208612/edumynation-web/image_4_4.png",
    heading: "Get Expert Advice",
    des: " Help yourself with our specialized assistance offered by us as a consultancy service.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208613/edumynation-web/image_5_1.png",
    heading: "  Write a Review",
    des: "Write reviews on schools here to guide other parents or students like you.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208614/edumynation-web/image_6.png",
    heading: "All School Details",
    des: "Know about minute details & facilities of each school from our thoroughly curated listing.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208615/edumynation-web/image_7_2.png",
    heading: "Free Counselling",
    des: "Get access to free counselling service for your kids to clear their queries.",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208616/edumynation-web/image_8.png",
    heading: "Register Your School",
    des: "Register your institution with us to get a better visibility through our listing.",
  },
];

const DetailCard = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init();
    }
  }, []);
  return (
    <>
      <div className="flex items-center gap-4 -mt-10 justify-center">
        {data.map((item, index) => {
          return (
            <>
              <div className="sm:flex hidden flex-col  w-[200px] p-2 h-[300px] items-center gap-2 opacity-95 bg-[#2F3F93] rounded-2xl" data-aos={`${index <=2 ? "fade-right" : "fade-left"}`} data-aos-duration="2500">
                <div className=" ">
                  <img
                    className="w-16 p-4 bg-white rounded-full hover:animate-spin"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-[17px] font-semibold mt-4 text-white ">
                    {item.heading}
                  </h1>
                </div>
                <div className="text-[15px] text-center mt-5 text-white">
                  <p>{item.des}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DetailCard;
