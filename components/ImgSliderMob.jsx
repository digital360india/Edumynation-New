'use client'
import Link from "next/link";
import React from "react";


const data = [
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    header: "DUBAI",
    city: "schools-in-dubai",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208363/edumynation-web/Ellipse_14.png",
    header: "SHARJAH",
    city: "sharjah",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208363/edumynation-web/Ellipse_12.png",
    header: "AJMAN",
    city: "schools-in-ajman",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208363/edumynation-web/Ellipse_14.png",
    header: "FUJAIRAH",
    city: "schools-in-fujairah",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208363/edumynation-web/Ellipse_13.png",
    header: "RAK",
    city: "schools-in-rak",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    header: "ABU  DHABI",
    city: "schools-in-abuDhabi",
  },
];

const dataSec = [
  {
    img: "https://res.cloudinary.com/edumynationofficial/image/upload/v1687853731/Other/G-166.png_1024_624.png",
    school: "City school, Ajman",
    header: "AJMAN",
    link: "/schools/ajman/city-school-ajman-in-ajman",
  },
  {
    img: "https://res.cloudinary.com/edumynationofficial/image/upload/v1687854209/Other/G-400.png_1024_624.png",
    school: "Primus Private School",
    header: "DUBAI",
    link: "/schools/dubai/Primus-Private-School-in-dubai",
  },
  {
    img: "https://res.cloudinary.com/edumynationofficial/image/upload/v1687854349/Other/G-533.png_1024_624.png",
    school: "Fujairah Academy",
    header: "FUJAIRAH",
    link: "/schools/fujairah/fujairah-academy-in-fujairah",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208363/edumynation-web/Ellipse_12.png",
    school: "Ideal English School ",
    header: "RAK",
    link: "/schools/rak/ideal-english-school-rak--in-rak",
  },
];

const ImgSliderMob = () => {
  return (
    <div className="lg:hidden">
      <h1 className="text-2xl text-center mt-10 text-[#2F3F93] font-semibold">
        SCHOOLS BY CITIES
      </h1>
<div className="flex justify-center">
      <div className="flex  overflow-x-scroll scrollbar-hide gap-5 px-12 py-16 w-full">
        {data.map((items) => {
          return (
            <Link href={`/category/${items.city}`}>
              <div className="rounded-full w-32 h-32 flex flex-col gap-8 items-center text-center  justify-center scrollbar-hide">
                <img
                  className=" rounded-full w-56 h-56"
                  src={items.img}
                  alt=""
                />
                <h1 className=" font-bold text-[#2F3F93] text-[12px] -mt-4 w-56 h-56">
                  {" "}
                  {items.header}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
      </div>

      <h1 className="text-2xl text-center mt-10 text-[#2F3F93] font-semibold">
        FEATURED SCHOOLS
      </h1>

      <div className="flex  overflow-x-scroll scrollbar-hide gap-5 mt-8  mb-10 px-12 py-16 w-full">
        {dataSec.map((items) => {
          return (
            <>
              <Link href={items.link}>
                <div className="rounded-full w-32 h-32 flex flex-col gap-4 items-center text-center  justify-center scrollbar-hide">
                  <img
                    className=" rounded-full w-56 h-56"
                    src={items.img}
                    alt=""
                  />
                  <div className="text-[14px]  w-32 p-2 font-bold rounded-full border-2  border-[#2F3F93]">
                    <h1 className="text-[#2F3F93] text-[10px]">
                      {items.school}
                    </h1>
                  </div>
                  <h1 className=" font-bold text-[#2F3F93] text-[12px] -mt-4 w-56 h-56">
                    {" "}
                    {items.header}
                  </h1>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ImgSliderMob;
