'use client'

import { Line } from "rc-progress";
import React, { useEffect } from "react";
import { BsNewspaper } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import StarRating from "./StarRating";
import GetCall from "./GetCall";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

AOS.init({
  duration: 1200,
});


// const citySlug = "dubai";

const SchoolCardMini = ({ data, index, citySlug }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);




  const [open, setOpen] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [school, setSchool] = useState("");


  return (

    <>
    <div>
      <div className="flex flex-col justify-center items-center mb-8">
        <div className="lg:flex bg-white shadow-2xl lg:px-10 p-4  lg:h-[340px] rounded-md lg:w-[1000px] lg:mt-14 items-center">
          <div className="w-[350px] lg:w-[380px] mt-4  lg:h-[350px] h-[233.97px] flex items-center  flex-col gap-2 -mb-4">
            <img
              className="w-[320px] lg:w-[380px] lg:h-[230px]  h-[170px] "  data-aos="zoom-in"
              src={`https://res.cloudinary.com/edumynationofficial/image/upload/v1644649524/gallery/${
                citySlug == "abuDhabi"
                  ? "abu Dhabi"
                  : citySlug == "alain"
                  ? "Al ain"
                  : citySlug
              }/G-${data?.fields?.Image_Code}.png`}
              alt=""
            />
            <div className="flex justify-evenly bg-white  gap-5 ">
              <img
                className="w-[90px] h-[50px] lg:w-[110px] lg:h-[60px]"
                src={`https://res.cloudinary.com/edumynationofficial/image/upload/v1644649524/gallery/${
                  citySlug == "abuDhabi"
                    ? "abu Dhabi"
                    : citySlug == "alain"
                    ? "Al ain"
                    : citySlug
                }/G-${data?.fields?.Image_Code}.png`}
                alt=""
              />
              <img
                className="w-[90px] h-[50px] lg:w-[110px] lg:h-[60px]"
                src={`https://res.cloudinary.com/edumynationofficial/image/upload/v1644649524/gallery/${
                  citySlug == "abuDhabi"
                    ? "abu Dhabi"
                    : citySlug == "alain"
                    ? "Al ain"
                    : citySlug
                }/H-${data?.fields?.Image_Code}.png`}
                alt=""
              />
              <img
                className="w-[90px] h-[50px] lg:w-[110px] lg:h-[60px]"
                src={`https://res.cloudinary.com/edumynationofficial/image/upload/v1644649524/gallery/${
                  citySlug == "abuDhabi"
                    ? "abu Dhabi"
                    : citySlug == "alain"
                    ? "Al ain"
                    : citySlug
                }/I-${data?.fields?.Image_Code}.png`}
                alt=""
              />
            </div>
          </div>

          <div className=" lg:w-[550px]  w-[350px] p-[3px] mt-4  lg:p-0 border-2 border-[#2F3F93]  lg:border-0 lg:px-7">
            <div className="flex items-center justify-between lg:gap-2 ">
              <p className="text-[15px] lg:text-[20px] text-black mt-5 lg:mt-0 ml-2 sm:ml-0 ">
                {data?.fields?.name}
              </p>
              <div className="mr-2">
                <StarRating
                  rating={data?.fields?.rating}
                  review={data?.fields?.numOfReviews}
                />
              </div>
            </div>

            <div className="text-[#2F3F93] lg:flex lg:pt-[1px] flex-col hidden">
              <p className="text-[12px] lg:text-[12px] text-[#596574]">
                Annual Fees (in AED)
              </p>
              <p className="text-[12px] lg:text-[28px] text-[#2F3F93]">
                {data?.fields?.feefrom} to {data?.fields?.feeto}
              </p>
            </div>

            <div className="flex gap-1 lg:gap-1 items-center ml-2 sm:ml-0  ">
              <GoLocation className="text-sm lg:text-[14px]  text-[#2F3F93]"></GoLocation>
              <p className="text-xs lg:text-[10px] text-[#596574]  ">
                {" "}
                {data?.fields?.Address}
              </p>
            </div>

            <div className="flex gap-3 mt-5 pl-2 lg:pl-0   w-[350px] lg:w-[600px] lg:gap-5 lg:mt-[4px] ">
              <div className="flex flex-col text-center w-[55px] lg:w-[90px]  items-center">
                <img
                  className="w-8 h-8 lg:w-7 lg:h-7"
                  src="https://cdn.discordapp.com/attachments/1078905801017659432/1111964193558626364/1_2.png"
                  alt=""
                />
                <p className="text-[10px] lg:text-[12px] text-[#596574] font-semibold">
                  Established
                </p>
                <p className="text-[10px] lg:text-[12px] font-bold text-[#2F3F93]">
                  {data?.fields?.establishment}
                </p>
              </div>
              <div className="flex flex-col text-center w-[55px] lg:w-[90px] h-28 items-center">
                <img
                  className="w-8 h-8 lg:w-7 lg:h-7"
                  src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686225930/edumynation-web/2_4.png"
                  alt=""
                />
                <p className="text-[10px] lg:text-[12px] text-[#596574] font-semibold">
                  Board
                </p>
                <p className="text-[10px] lg:text-[12px] font-bold text-[#2F3F93]">
                  {data?.fields?.cbse_schools == true
                    ? "CBSE"
                    : data?.fields?.American
                    ? "American"
                    : data?.fields?.American
                    ? "American"
                    : data?.fields?.icse_isc_schools
                    ? "icse/isc"
                    : data?.fields?.cie_schools
                    ? "cie"
                    : data?.fields?.ib_schools
                    ? "IB school"
                    : data?.fields?.igcse_schools
                    ? "igcse"
                    : data?.fields?.British
                    ? "British "
                    : data?.fields?.gcse_schools
                    ? "gcse schools "
                    : data?.fields?.Pakistani
                    ? "Pakistani "
                    : null}
                </p>
              </div>
              <div className="flex flex-col text-center w-[55px] lg:w-[90px]  items-center">
                <img
                  className="w-8 h-8 lg:w-7 lg:h-7"
                  src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686225928/edumynation-web/4_2.png"
                  alt=""
                />
                <p className="text-[10px] lg:text-[12px] text-[#596574] font-semibold">
                  Category
                </p>
                <p className="text-[10px] lg:text-[12px] font-bold text-[#2F3F93]">
                  {data?.fields?.girls_schools == true
                    ? "Girls School"
                    : data?.fields?.boys_schools
                    ? "Boys School"
                    : data?.fields?.coed_schools
                    ? "Co-Ed School"
                    : null}
                </p>
              </div>
              <div className="flex flex-col text-center w-[55px] lg:w-[90px]  items-center">
                <img
                  className="w-8 h-8 lg:w-7 lg:h-7"
                  src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686225926/edumynation-web/5_1.png"
                  alt=""
                />
                <p className="text-[10px] lg:text-[12px] text-[#596574] font-semibold">
                  Type
                </p>
                <p className="text-[10px] lg:text-[12px] font-bold text-[#2F3F93]">
                  {data?.fields?.day_schools == true
                    ? "Day School"
                    : data?.fields?.day_boarding_schools
                    ? "Day boarding"
                    : data?.fields?.full_boarding_schools
                    ? "Full boarding"
                    : null}
                </p>
              </div>
              <div className="flex flex-col text-center w-[55px] lg:w-[90px] items-center">
                <img
                  className="w-8 h-8 lg:w-7 lg:h-7"
                  src="https://res.cloudinary.com/eduminatti-com/image/upload/v1686225923/edumynation-web/3_3.png"
                  alt=""
                />
                <p className="text-[10px] lg:text-[12px] text-[#596574] font-semibold">
                  Grade Upto
                </p>
                <p className="text-[10px] lg:text-[12px] font-bold text-[#2F3F93]">
                  {data?.fields?.classto}
                </p>
              </div>
            </div>

            <div className=" justify-evenly items-center px-1   -mt-2 lg:-mt-12">
              <div className="lg:flex lg:justify-between lg:w-[470px] lg:gap-16 ">
                <div className="flex flex-row md:flex md:flex-col lg:gap-0 gap-2  items-center  lg:justify-center w-[340px] text-[#596574] font-semibold">
                  <div className="flex flex-col">
                    <div className="flex items-center  ">
                      <p className="text-[11px] lg:text-[10px] lg:w-28 w-[78px]">
                        Infrastructure
                      </p>
                      <Line
                        className="lg:w-28 w-16"
                        percent={data?.fields?.Infrastructure}
                        strokeWidth={4}
                        strokeColor="#FF7900"
                        trailWidth={4}
                       

                      />
                      <p className="text-[10px]">
                      {data?.fields?.Infrastructure && data?.fields?.Infrastructure?.toString()?.slice(0,2)}%
                      </p>
                    </div>

                    <div className="flex items-center  ">
                      <p className="lg:text-[10px] text-[11px] lg:w-28 w-[78px]">
                        Academics
                      </p>
                      <Line
                        className="lg:w-28 w-16"
                        percent={data?.fields?.Academics}
                        strokeWidth={4}
                        strokeColor="#FF7900"
                        trailWidth={4}
                      />
                      <p className="text-[9px]">
                      {data?.fields?.Academics?.toString()?.slice(0,2)}%
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center  ">
                      <p className="text-[11px] lg:text-[10px] lg:w-28 w-[78px]">
                      Administration
                      </p>
                      <Line
                        className="lg:w-28 w-16"
                        percent={data?.fields?.Administration}
                        strokeWidth={4}
                        strokeColor="#FF7900"
                        trailWidth={4}
                      />
                      <p className="text-[10px]">
                      {data?.fields?.Administration?.toString()?.slice(0,2)}%
                      </p>
                    </div>

                    <div className="flex items-center  ">
                      <p className="lg:text-[10px] text-[10.5px] lg:w-28 w-[78px]">
                        Extracurricular
                      </p>
                      <Line
                        className="lg:w-28 w-16"
                        percent={data?.fields?.Extracurricular}
                        strokeWidth={4}
                        strokeColor="#FF7900"
                        trailWidth={4}
                      />
                      <p className="text-[9px]">
                      {data?.fields?.Extracurricular?.toString()?.slice(0,2)}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex lg:flex-col lg:pt-4 lg:gap-2  gap-4">
                  <Link href={`/schools/${citySlug}/${data?.fields?.slug}`}>
                    <button className="flex items-center gap-4 lg:gap-3 bg-white text-[#2F3F93] px-5 py-2 border-2 lg:px-5 lg:py-2 lg:rounded-3xl border-[#2F3F93] lg:text-[15px] lg:w-[154px] rounded-3xl">
                      {" "}
                      <span>
                        <FaGraduationCap></FaGraduationCap>
                      </span>
                      View School
                    </button>
                  </Link>
                  <button className="flex items-center gap-4 text-white bg-[#2F3F93] px-5 py-2 border-2 border-[#2F3F93] rounded-3xl lg:gap-3 lg:px-5 lg:py-2 lg:rounded-3xl lg:text-[15px] lg:w-[154px]"  onClick={()=>{setOpen(!open); setSchoolName(data?.fields?.name);setSchool(data?.fields?.slug)}} >
                    {" "}
                    <span className="text-white">
                      <BsNewspaper></BsNewspaper>
                    </span>
                    Get A Call
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-4  lg:pr-5 w-[350px]  mt-5 items-center pb-5 ">
                <div className="text-[#2F3F93] lg:hidden text-xl">
                  <p className="text-[10px] text-[#AEAEAE]">
                    Annual Fees (in AED)
                  </p>
                  {data?.fields?.feefrom} to {data?.fields?.feeto}
                </div>

                <div className="flex flex-col lg:hidden gap-3 pr-1">
                  <Link href={`/schools/${citySlug}/${data?.fields?.slug}`}>
                    <button className="flex gap-[8px] uppercase items-center text-[11px] w-28 py-2 justify-center rounded-3xl text-center bg-white text-[#2F3F93]  border-2 border-[#2F3F93] ">
                      {" "}
                      <span className="text-[#2F3F93] text-[11px] ">
                        <FaGraduationCap></FaGraduationCap>
                      </span>
                      View School
                    </button>


                  </Link>
                    {/* {console.log("outer",data?.fields?.slug)} */}
                  <button className="flex gap-[8px] items-center text-[11px] w-28 py-2 rounded-3xl text-center justify-center bg-[#2F3F93] text-white " onClick={()=>{ setSchool(data?.fields?.slug);  setSchoolName(data?.fields?.name);setOpen(!open)  }}   >
                    {" "}
                    <span className="text-white  text-[11px]">
                      <BsNewspaper></BsNewspaper>
                    </span>
                    Get A Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <GetCall open={open} setOpen={setOpen} schoolName={schoolName} school={school}  />
    </>

  );
};

export default SchoolCardMini;
