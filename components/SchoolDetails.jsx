'use client'

import React, { useEffect,useState } from "react";
import { GoLocation } from "react-icons/go";
import StarRating from "./StarRating";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import {BiBuildingHouse} from "react-icons/bi";
import {BsPersonFillGear} from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import {AiOutlinePieChart} from "react-icons/ai";
import Testimonials from "./Testimonial";

// console.log(process.env.AIRTABLE_API_KEY);

// const reviews = [
//   {
//     name: 'John Doe',
//     profilePicture: '/Group 500.png',
//     rating: 4,
//     reviewText: 'Great school with excellent facilities.',
//   },
//   {
//     name: 'Jane Smith',
//     profilePicture: '/Group 498.png',
//     rating: 5,
//     reviewText: 'Outstanding education and supportive staff.',
//   },
// ];

const ReviewCard = ({ name, profilePicture, rating, reviewText }) => (
  <div className="p-4 rounded-lg mb-4">
    <div className="flex items-center mb-2">
      <img
        className="w-8 h-8 rounded-full mr-2"
        src={profilePicture}
        alt={`${name}'s Profile`}
      />
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <div className="flex items-center">
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
    <p>{reviewText}</p>
  </div>
);


const SchoolDetails = ({school,reviews,city}) => {
  console.log(city)
//   const [total,setTotal]=useState(0);
// useEffect(()=>{
//   setTotal(0);
//   reviews.map((r)=>{
//     setTotal((total)=>total+= r.schoolRating)
//   })
// },[])
  return (
    <>
     
        <section className="bgimage">
          <div
            className="relative bg-cover bg-center h-[500px]"
            style={{
              backgroundImage:
                'url("https://cdn.discordapp.com/attachments/1078905801017659432/1111914564183932938/Rectangle_297.png")',
            }}
          >
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
              <div className="text-white text-center flex flex-col items-center space-y-6">
                <h1 className="text-4xl font-bold mb-4">{school?.name}</h1>
                <button className="bg-[#2F3F93] text-white px-4 py-2 mb-4 rounded-lg">Enquire Now</button>
                <StarRating rating = {Math.ceil(school?.rating)} review={-1} />
              </div>
            </div>
          </div>
        </section>

        <div className=" bg-gray-100 lg:px-32">
          <section className=" py-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:pr-8">
                  <h2 className="text-2xl font-bold mb-4">ABOUT</h2>
                  <p>{school?.Long_Description}</p>
                </div> 

                <div>
                  <Carousel infiniteLoop={true} dynamicHeight={false} transitionTime={2000} showThumbs={false} >

                  <div> <img src={`https://res.cloudinary.com/edumynationofficial/image/upload/v1644649524/gallery/${
                  city == "abuDhabi"
                    ? "abu Dhabi"
                    : city == "alain"
                    ? "Al ain"
                    : city
                }/H-${school?.Image_Code}.png`} /></div>
                <div> <img src={`https://res.cloudinary.com/edumynationofficial/image/upload/v1644649524/gallery/${
                  city == "abuDhabi"
                    ? "abu Dhabi"
                    : city == "alain"
                    ? "Al ain"
                    : city
                }/G-${school?.Image_Code}.png`} /></div>
    <div> <img src={`https://res.cloudinary.com/edumynationofficial/image/upload/v1644649524/gallery/${
                  city == "abuDhabi"
                    ? "abu Dhabi"
                    : city == "alain"
                    ? "Al ain"
                    : city
                }/I-${school?.Image_Code}.png`} /></div>
                  {/* <div><img src="https://res.cloudinary.com/edumynationofficial/image/upload/v1644649524/gallery/dubai/G-400.png" /></div> */}
                </Carousel>
                </div>
              </div>
            </div>
          </section>

          <section className="py-4">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {school?.feefrom&&<div className="md:pr-8">
                  <p>Annual Fees</p>
                  <p className="text-2xl mb-4 text-[#2F3F93]">${school?.feefrom} - ${school?.feeto}</p>
                </div>}

                <div className="flex items-center gap-3 mb-4">
                  <GoLocation />
                  <p>{school?.Address}, {school?.fullAddress},{school?.Town}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="p-8">
            <div className="container lg:px-8">
              <div className="text-center text-xs md:text-sm">
                <div className="flex justify-between ">
                  {school?.cbse_schools && <> <p className="">CBSE</p>
                  <span className="mx-2 text-gray-500">|</span></>}
                  {school?.day_schools && <><p className="">Day-Boarding</p>
                  <span className=" mx-2 text-gray-500">|</span></>}
                  <p className="">{ school?.classfrom} to {school?.classto}</p>
                  <span className=" mx-2 text-gray-500">|</span>
                  {school?.coed_schools&&<><p className="">Co - ed</p>
                  <span className=" mx-2 text-gray-500">|</span></>}
                  <p className="">{school?.establishment}</p>
                </div>
              </div>
            </div>
          </section>

          <section className=" py-10">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <p className="text-2xl font-bold">STATISTICS</p>
              </div>
              <div className="flex lg:gap-8 sm:gap-8 gap-4 md:-ms-4 ">

                <div className="md:flex text-center">
                  <div className="w-16 h-16 lg:w-28 lg:h-28 mx-2">
                  <CircularProgressbarWithChildren value={school?.Infrastructure} styles={buildStyles({pathColor: '#2F3F93'})} >
                    <BiBuildingHouse size={28} color="#2F3F93" />
                  </CircularProgressbarWithChildren>
                  </div>
                  <p className="lg:my-12  text-xs sm:text-sm md:text-md">Infrastructure<p>{Math.ceil(school?.Infrastructure)}%</p> </p>
                </div>

                <div className="md:flex text-center ">
                  <div className="w-16 h-16 lg:w-28 lg:h-28 mx-2">
                  <CircularProgressbarWithChildren value={school?.Administration} styles={buildStyles({pathColor: '#287630'})} >
                    <BsPersonFillGear size={28} color="#2F3F93" />
                  </CircularProgressbarWithChildren>
                  </div>
                  <p className="lg:my-12 text-xs sm:text-sm md:text-md">Administration<p>{Math.ceil(school?.Administration)}%</p></p>
                </div>
                <div className="md:flex text-center">
                  <div className="w-16 h-16 lg:w-28 lg:h-28  mx-2">
                  <CircularProgressbarWithChildren value={school?.Academics} styles={buildStyles({pathColor: '#E5C20A'})} >
                    <HiAcademicCap size={28} color="#2F3F93" />
                  </CircularProgressbarWithChildren>
                  </div>
                  <p className="lg:my-12 text-xs sm:text-sm md:text-md">Academics<p>{Math.ceil(school?.Academics)}%</p></p>
                </div>
                <div className="md:flex text-center">
                <div className="w-16 h-16 lg:w-28 lg:h-28  mx-2">
                  <CircularProgressbarWithChildren value={school?.Extracurricular} styles={buildStyles({pathColor: '#993131'})} >
                    <AiOutlinePieChart size={28} color="#2F3F93" />
                  </CircularProgressbarWithChildren>
                  </div>
                  <p className="lg:my-12 text-xs sm:text-sm md:text-md">Extracurricular<p>{Math.ceil(school?.Extracurricular)}%</p></p>
                </div>
              </div>
            </div>
          </section>

          <section className=" py-10">
            <div className="container mx-auto px-4  justify-between">
              <div className="mb-8">
                <p className="text-2xl font-bold">FACILITIES</p>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[...new Array(8)].map((_, index) => (
                  <img
                    className="w-40"
                    key={index}
                    src={`/Group ${498 + index}.png`}
                    alt=""
                    data-aos="zoom-in"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* <section className=" py-10">
            <div className="container mx-auto px-4">
              <div className="mb-8"><p className="text-2xl font-bold">RATINGS & REVIEWS</p></div>
              <div className="flex mb-4">
             
            
                <StarRating rating={""} />
                <span className="ml-2">{reviews?.schoolRating}</span>
              </div>
            
            <p>Total:{total}</p>
            
              <p className="mb-4"> {reviews?.length} reviews</p>
             

              <div className="rounded-lg mb-4">
                <p className="text-xl font-semibold mb-2">Rate City School Ajman</p>
                <div className="flex items-center mb-2"><StarRating /></div>
                <textarea className="w-1/3 px-3 py-2 border rounded" rows="1" placeholder="Write your review..." />
              </div>
              <button className="bg-[#2F3F93] text-white px-4 py-2 mb-4 rounded-full">Submit</button>

              <div className="flex gap-4 mt-8">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </div>
              <button className="bg-[#2F3F93] text-white px-4 py-2 mb-4 rounded-full">View More</button>
            </div>
          </section> */}
            
        </div>
        <Testimonials /> 
   
    </>
  );
};

export default SchoolDetails;
