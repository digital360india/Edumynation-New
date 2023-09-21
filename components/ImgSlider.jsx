'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronRight,HiChevronLeft } from "react-icons/hi2";
import Link from "next/link";


const data = [
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    h1: " Ras Al Khaimah American Academy",
    h2: "RAK",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    h1: " Ras Al Khaimah American Academy",
    h2: "RAK",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    h1: " Ras Al Khaimah American Academy",
    h2: "RAK",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    h1: " Ras Al Khaimah American Academy",
    h2: "RAK",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    h1: " Ras Al Khaimah American Academy",
    h2: "RAK",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    h1: " Ras Al Khaimah American Academy",
    h2: "RAK",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    h1: " Ras Al Khaimah American Academy",
    h2: "RAK",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png",
    h1: " Ras Al Khaimah American Academy",
    h2: "RAK",
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

function ImgSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <HiChevronRight />,
    prevArrow: <HiChevronLeft />,
    // prevArrow: '<button >Prev </button>',
    // nextArrow: '<button > next </button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-3xl text-[#2F3F93] text-center mt-28 font-semibold sm:flex hidden justify-center lg:mt-32 ">
        SCHOOLS BY CITIES
      </h1>

      <div className="p-12 lg:flex lg:flex-col hidden lg:-mt-14">
        <Slider {...settings}>
          <div className="rounded-full w-80 h-80 p-14 flex flex-col gap-4 items-center text-center  justify-center">
            <Link href="/category/schools-in-dubai">
              <img
                className=" rounded-full hover:animate-pulse"
                src="https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png"
                alt=""
              />
            </Link>
            <h1> DUBAI</h1>
          </div>
          <div className="rounded-full w-80 h-80 p-14  flex flex-col gap-4 items-center text-center  justify-center">
            <Link href="/category/schools-in-ajman">
              <img
                className=" rounded-full hover:animate-pulse"
                src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686208363/edumynation-web/Ellipse_14.png"
                alt=""
              />
            </Link>
            <h1> AJMAN</h1>
          </div>
          <div className="rounded-full w-80 h-80 p-14 flex flex-col gap-4 items-center text-center  justify-center">
            <Link href="/category/schools-in-rak">
              <img
                className=" rounded-full hover:animate-pulse"
                src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686208363/edumynation-web/Ellipse_12.png"
                alt=""
              />
            </Link>
            <h1> RAK</h1>
          </div>
          <div className="rounded-full w-80 h-80 p-14 flex flex-col gap-4 items-center text-center  justify-center">
            <Link href="/category/schools-in-fujairah">
              <img
                className=" rounded-full hover:animate-pulse"
                src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686208363/edumynation-web/Ellipse_13.png"
                alt=""
              />
            </Link>
            <h1> FUJAIRAH</h1>
          </div>
          <div className="rounded-full w-80 h-80 p-14 flex flex-col gap-4 items-center text-center  justify-center">
            <Link href="/category/schools-in-abu-dhabi">
              <img
                className=" rounded-full hover:animate-pulse"
                src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686208363/edumynation-web/Ellipse_14.png"
                alt=""
              />
            </Link>
            <h1> ABU DHABI</h1>
          </div>
          <div className="rounded-full w-80 h-80 p-14 flex flex-col gap-4 items-center text-center  justify-center">
            <Link href="/category/schools-in-al-ain">
              <img
                className=" rounded-full hover:animate-pulse"
                src="https://cdn.discordapp.com/attachments/1078905801017659432/1109419574983667823/Ellipse_11.png"
                alt=""
              />
            </Link>
            <h1> AL-AIN</h1>
          </div>
        </Slider>
      </div>

      <h1 className="text-3xl text-center mt-16 lg:mt-28 text-bold sm:flex hidden justify-center text-[#2F3F93] font-semibold">
        {" "}
        FEATURED SCHOOLS
      </h1>

      {/* <div className="p-20 lg:flex lg:flex-col hidden lg:-mt-8 lg:pb-28"> */}
      <div className="p-12 lg:flex lg:flex-col hidden lg:-mt-4 lg:pb-28">
        <Slider {...settings}>
          {dataSec.map((items) => {
            return (
              <>
              <Link href={items.link}>
                <div className="rounded-full w-80 h-80 lg:w-[370px] lg:h-[370px] p-14 flex flex-col gap-4 items-center text-center  justify-center" >
                  <img className=" rounded-full hover:animate-pulse " src={items.img} alt="" />
                  <div className="w-62 p-1  rounded-full border-2 lg:border-[3px] border-[#2F3F93]">
                    <h1 className="text-black font-bold px-2">{items.school}</h1>
                  </div>
                  <h1 className="text-[#2F3F93] font-bold"> {items.header}</h1>
                </div>
                </Link>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default ImgSlider;
