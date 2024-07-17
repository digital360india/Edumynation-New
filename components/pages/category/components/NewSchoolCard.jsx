"use client";

import Carousel from "react-multi-carousel";

import { Icon } from "@iconify/react";

import ImageShowcase from "./component/ImageShowcase";
import ProgressBar from "./component/ProgressBar";

import useWindowSize from "@/hooks/useWindowSize";

import { getCarouselResponsive } from "@/utilities/functions/pages/home/functions";

import { breakpoints } from "@/utilities/constants/pages/home/constants";

import FeatureIcon from "@/assets/pages/category/icons/feature-icon.svg";


const responsive = getCarouselResponsive();


export const images = [
  {
    id: 1,
    url: "/pages/category/image-1.jpeg"
  },
  {
    id: 2,
    url: "/pages/category/image-2.jpeg"
  },
  {
    id: 3,
    url: "/pages/category/image-3.jpeg"
  },
  {
    id: 4,
    url: "/pages/category/image-4.jpeg"
  }
];

const features = [
  {
    id: 1,
    icon: <FeatureIcon/>,
    text: "Lorem Ipsum"
  },
  {
    id: 2,
    icon: <FeatureIcon/>,
    text: "Lorem Ipsum"
  },
  {
    id: 3,
    icon: <FeatureIcon/>,
    text: "Lorem Ipsum"
  },
  {
    id: 4,
    icon: <FeatureIcon/>,
    text: "Lorem Ipsum"
  }
];

const progressBars = [
  {
    title: "Infrastructure",
    progress: "43%"
  },
  {
    title: "Administration",
    progress: "89%"
  },
  {
    title: "Academics",
    progress: "73%"
  },
  {
    title: "Extracurricular",
    progress: "73%"
  }
];

const buttons = [
  {
    id: 1,
    text: "Get a Call"
  },
  {
    id: 2,
    text: "Visit School"
  },
  {
    id: 3,
    text: "Preparation"
  }
];


export default function NewSchoolCard() {

  const screenWidth = useWindowSize();
  const { md } = breakpoints;

  return (
    <div className="school-card flex flex-col gap-5 px-3 py-5 md:flex-row md:mx-3">

      {screenWidth >= md && 
        <ImageShowcase className="image-showcase-cont w-[40%] px-2"/>
      }

      <div className="wrapper flex flex-col gap-5 md:w-[60%] md:py-5">
        <div className="heading text-2xl font-semibold px-[5vw] md:px-2 lg:text-3xl">
          Greenfield International School
        </div>
        
        {screenWidth < md &&
          <Carousel
            responsive={responsive}
            keyBoardControl
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            itemClass="px-[5vw]"
          >
            {images.map(image =>
              <div key={image.id} className="image-cont h-[60vw] sm:h-[28vw]">
                <img
                  className="w-full h-full object-cover rounded"
                  src={image.url}
                  alt={`Image ${image.id}`}
                />
              </div>
            )}
          </Carousel>
        }
  
        <div className="content-cont flex flex-col items-center gap-5 md:items-stretch">
          <div className="location-cont flex gap-1 px-2">
            <Icon className="location-icon text-2xl text-primaryBlue md:text-xl" icon="system-uicons:location" />
            <span className="location-text text-center text-sm text-black opacity-90 md:text-left lg:text-base">
              Lorem ipsum dolor sit amet consectetur. Aliquet facilisis.
            </span>
          </div>
      
          <div className="annual-fee-cont px-2 md:order-first">
            <div className="annual-fee">
              <span className="text-lg text-black opacity-90 lg:text-2xl">Annual Fee </span>
              <span className="text-xs text-black opacity-90 lg:text-2xl">(in AED) </span>
              <span className="text-black opacity-90 md:hidden">- </span>
              <span className="text-lg text-primaryBlue font-medium md:block md:text-2xl lg:text-3xl">
                18606 to 28531
              </span>
            </div>
          </div>
      
          <ul className="features-cont flex gap-[10vw] px-2 text-xs font-medium md:gap-5 lg:text-base">
            {features.map(feature =>
              <li key={feature.id} className="feature flex flex-col flex-wrap items-center gap-3">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-text mx-auto text-center text-primaryBlue font-semibold">
                  {feature.text}
                </div>
              </li>
            )}
          </ul>
      
          <ul className="progress-bars-cont w-full flex flex-col flex-wrap items-center gap-1 px-[5vw] text-sm font-medium text-black opacity-90 sm:flex-row sm:gap-5 md:px-2 lg:text-lg">
            {progressBars.map(progressBar =>
              <li className="progress-bar-item w-[inherit] sm:w-[48%] md:w-[45%]">
                <ProgressBar title={progressBar.title} progress={progressBar.progress} />
              </li>
            )}
          </ul>
      
          <ul className="button-group flex flex-wrap gap-[5vw] text-xs font-bold md:gap-5 lg:text-base">
            {buttons.map(button =>
              <li key={button.id} className="button-item">
                <button className="text-center border px-3 py-1 rounded-full border-primaryBlue text-primaryBlue sm:px-5 md:px-7 md:py-2 lg:px-8"
                >
                  {button.text}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}