import Carousel from "react-multi-carousel";

import Service from "./components/Service";

import { getCarouselResponsive } from "@/utilities/functions/pages/home/functions";


const responsive = getCarouselResponsive();

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
  }
];


export default function StudentServices() {

  return (
    <section id="student-services" className="flex flex-col items-center gap-5 px-5 py-5">
      <h2 className="text-3xl text-primaryBlue font-semibold">
        Comprehensive Student Services
      </h2>

      {/* <Carousel
        responsive={responsive}
        keyBoardControl
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        itemClass="px-2"
      > */}
      <ul className="services-cont flex flex-col gap-5 md:flex-row">
        {services.map(service => 
          <Service key={service.id} service={service}/>
        )}
      </ul>
      {/* </Carousel> */}
    </section>
  );
}
