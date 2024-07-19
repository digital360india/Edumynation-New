import Carousel from "react-multi-carousel";

import Testimonial from "./components/Testimonial/Testimonial";

import { getCarouselResponsive } from "@/utilities/functions/pages/home/functions";


const responsive = getCarouselResponsive();

const testimonials = [
  {
    id: 1,
    personName: "Sebastian",
    personDesignation: "Graphic Design",
    ratingByPerson: 4,
    avatar: "/pages/home/testimonials-section/avatars/sebastian.svg",
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  },
  {
    id: 2,
    personName: "Diana",
    personDesignation: "Software Developer",
    ratingByPerson: 5,
    avatar: "/pages/home/testimonials-section/avatars/diana.svg",
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  },
  {
    id: 3,
    personName: "Michelle",
    personDesignation: "Project Coordinator",
    ratingByPerson: 3,
    avatar: "/pages/home/testimonials-section/avatars/michelle.svg",
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  }
];


export default function Testimonials() {

  return (
    <section
      id="testimonials"
      className={`
        flex flex-col justify-center gap-5 px-[5vw] py-5 sm:px-[7vw] md:px-[9vw]
        relative
        bg-center bg-cover bg-no-repeat
        bg-[url('/pages/home/testimonials-section/background-image.jpeg')]
        overlay-black
      `}
    >
      <h2 className="heading px-5 z-10 text-3xl text-white font-semibold lg:text-4xl">
        Testimonials
      </h2>
      <Carousel
        responsive={responsive}
        showDots
        keyBoardControl
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        containerClass="pb-10 z-10"
        sliderClass="flex"
        itemClass="px-5 select-none fix-drag"
      >
        {testimonials.map(testimonial => 
          <Testimonial key={testimonial.id} testimonial={testimonial}/>
        )}
      </Carousel>
    </section>
  )
}
