import React, { useState, useEffect, useRef } from "react";

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import Service from "./components/Service";

import useVisibleSlides from "@/hooks/useVisibleSlides";


const services = [
  {
    id: 1,
    title: "Academic Counselling",
    text: "Counsellors provide individual and group support in the areas of course selection, pathway planning, post secondary applications, scholarships, and access to study supports and peer tutoring.",
    image: "/pages/home/student-services-section/academic-counselling.png"
  },
  {
    id: 2,
    title: "Personal Counselling",
    text: "Provides support and resiliency skills to manage stress, anxiety, relationships and personal decision making. Students may also be connected to our Child and Youth Care staff, Social Worker, or Psychologists.",
    image: "/pages/home/student-services-section/personal-counselling.png"
  },
  {
    id: 3,
    title: "Resources and Information",
    text: "Designed to support and enhance the learning journey of our students, this invaluable platform provides easy access to a wide range of educational materials, helpful guides, research databases, and interactive tools.",
    image: "/pages/home/student-services-section/resources-and-information.png"
  },
  {
    id: 4,
    title: "Personal Counselling",
    text: "Provides support and resiliency skills to manage stress, anxiety, relationships and personal decision making. Students may also be connected to our Child and Youth Care staff, Social Worker, or Psychologists.",
    image: "/pages/home/student-services-section/personal-counselling.png"
  },
  {
    id: 5,
    title: "Academic Counselling",
    text: "Counsellors provide individual and group support in the areas of course selection, pathway planning, post secondary applications, scholarships, and access to study supports and peer tutoring.",
    image: "/pages/home/student-services-section/academic-counselling.png"
  }
];


export default function StudentServices() {

  const carouselRef = useRef(null);
 
  const [currentSlide, visibleSlidesCount] = useVisibleSlides({ carouselRef });

  
  return (
    <section id="student-services" className="flex flex-col items-center gap-5 px-5 py-5 sm:items-start">
      <h2 className="text-3xl text-primaryBlue font-semibold">
        Comprehensive Student Services
      </h2>
      <CarouselProvider
        className="w-[95vw]"
        ref={carouselRef}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        currentSlide={currentSlide}
        visibleSlides={visibleSlidesCount}
        totalSlides={services.length}
      >
        <Slider className="services">
          {services.map((service, index) => 
            <Slide
              key={service.id}
              index={index}
              className={`
                flex items-end border-x-8 pt-[14%] border-white
                relative
                bg-cover bg-center bg-no-repeat
                overlay-black
              `}
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <Service service={service}/>
            </Slide>
          )}
        </Slider>
      </CarouselProvider>
    </section>
  );
}
