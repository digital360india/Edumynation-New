'use client'
import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Feature = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        duration: 800,
      });
    }
  }, []);
  return (
    <>
      <div className="sm:flex flex-col hidden">
        <div className="text-center">
          <h1 className="font-bold text-3xl text-[#2F3F93] pt-20">
            EDUMYNATION TOP FEATURES
          </h1>
          <p className=" pt-12 pb-10">
            Try out our unique app features and make your school search much
            more <br /> reliable!
          </p>
        </div>

        <div className="flex gap-20 justify-center text-[#2F3F93] font-semibold">
          <div className="w-[200px] h-[200px] border-[3px] rounded-xl border-[#2F3F93]" data-aos="flip-left">
            <div className="flex flex-col gap-5 pt-3 items-center">
              <div className="border-4  rounded-full border-[#2F3F93]">
                <img
                  className="w-[120px] p-7 h-[120px] "
                  src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686211216/edumynation-web/Scales_2.png"
                  alt=""
                />
              </div>
              <h1 className="text-lg">Compare Schools</h1>
            </div>
          </div>
          <div className="w-[200px] h-[200px] border-[3px] rounded-xl border-[#2F3F93]" data-aos="flip-left">
            <div className="flex flex-col gap-5 pt-3 items-center">
              <div className="border-4  rounded-full border-[#2F3F93]">
                <img
                  className="w-[120px] p-7 h-[120px] "
                  src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686208876/edumynation-web/Reorder.png"
                  alt=""
                />
              </div>
              <h1 className="text-lg">Common Application</h1>
            </div>
          </div>
          <div className="w-[200px] h-[200px] border-[3px] rounded-xl border-[#2F3F93]" data-aos="flip-right">
            <div className="flex flex-col gap-5 pt-3 items-center">
              <div className="border-4  rounded-full border-[#2F3F93]">
                <img
                  className="w-[120px] p-7 h-[120px] "
                  src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686208877/edumynation-web/Idea_1.png"
                  alt=""
                />
              </div>
              <h1 className="text-lg">Expert Counselling</h1>
            </div>
          </div>
          <div className="w-[200px] h-[200px] border-[3px] rounded-xl border-[#2F3F93]"  data-aos="flip-right">
            <div className="flex flex-col gap-5 pt-3 items-center">
              <div className="border-4  rounded-full border-[#2F3F93]">
                <img
                  className="w-[120px] p-7 h-[120px] "
                  src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686208878/edumynation-web/Calculator_Checked.png"
                  alt=""
                />
              </div>
              <h1 className="text-lg">EMI Calculator</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
