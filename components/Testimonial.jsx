import React from 'react';
import Slider from 'react-slick';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';

const arry = [
    {
      img: "https://cdn.discordapp.com/attachments/1078905801017659432/1122048868356468756/tes4.jpg_10661599.png",
      name: "Srishti",
      ptag: "This platform amply solved my queries regarding different fields and educational topics. Edu My Nation's consultancy service helped me greatly in planning the education of my kid.",
    },
    {
      img: "https://cdn.discordapp.com/attachments/1078905801017659432/1122048608087330886/tes3.jpg_9061224.png",
      name: "Vaibhav",
      ptag: "Edu My Nation is a great way of browsing through options and picking the best school for our kids. Also, their consultant appropriately acknowledged my doubts and cleared all my confusions about diverse educational sectors.",
    },
    {
      img: "https://cdn.discordapp.com/attachments/1078905801017659432/1122049221718196234/tes2.jpg_6491280.png",
      name: "Shalini",
      ptag: "This platform amply solved my queries regarding different fields and educational topics. Edu My Nation's consultancy service helped me greatly in planning the education of my kid.",
    },
  ];

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        
        nextArrow: <HiChevronRight />,
        prevArrow: <HiChevronLeft />,
        // prevArrow: true,
        // nextArrow: true,
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
      <div className="flex justify-center items-center pt-5 pb-10">
        {/* <div className=" border-b-4 border-blue-900 w-60  pl-10"></div>
        <div className=" text-center text-gray-600 text-3xl  w-96">
          TESTIMONIALS
        </div>
        <div className=" border-b-4 border-blue-900 w-60"></div> */}
          <div className=" flex  text-center items-center gap-2 justify-center lg:text-3xl text-2xl mt-24 lg:-mt-4">
        <span>
          <div className="lg:border-3 border-[2px] lg:w-44 w-20 border-[#2F3F93]"></div>
        </span>
        <h2 className="uppercase tracking-wide">TESTIMONIALS</h2>
        <span>
          <div className="lg:border-3 border-[2px] lg:w-44 w-20 border-[#2F3F93]"></div>
        </span>
      </div>
      </div>
      <div className=" px-5 p-1 lg:pb-12">
        <Slider {...settings}>
          {arry.map((item) => {
            return (
              <>
                <div className="w-full   flex justify-center items-center gap-16">
                  <div className=" bg-cover w-[400px] lg:w-[450px] flex flex-col gap-10 md:gap-12  items-center h-[550px] lg:h-[450px]  bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1122052666168725546/SHAPEEEE_1.png')]">
                    <img
                      className="w-32 lg:w-[140px] lg:h-[140px]  h-32 rounded-full mt-14 "
                      src={item.img}
                      alt=""
                    />
                    <div className="flex flex-col items-center justify-center px-3 lg:w-[300px] text-[14px]  text-justify w-[220px]  text-white">
                      <p className="text-white text-[17px] -mt-10 ">
                        {item.name}
                      </p>
                      <p className="lg:w-[300px] text-[13px]  sm:text-[14px] sm:mt-3   text-justify  lg:px-10  w-[220px] h-[150px] text-white">
                        {item.ptag}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
