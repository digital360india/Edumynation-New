import Carousel from "react-multi-carousel";

import Resource from "./components/Resource";

import { getCarouselResponsive } from "@/utilities/functions/pages/home/functions";


const responsive = getCarouselResponsive({desktopItems: 4});

const resources = [
  {
    id: 1,
    title: "Compare Schools",
    icon: "ph:bus-thin",
    text: "Lorem ipsum dolor sit amet consectetur. Dolor magna lorem eget facilisis semper vestibulum lacus elit sit. Aliquam sed tristique facilisi nunc feugiat libero sem rutrum in. Libero.",
    link: {
      url: "#",
      text: "Learn More",
      icon: "ph:arrow-up-right-thin"
    }
  },
  {
    id: 2,
    title: "Common Application",
    icon: "ph:books-thin",
    text: "Lorem ipsum dolor sit amet consectetur. Dolor magna lorem eget facilisis semper vestibulum lacus elit sit. Aliquam sed tristique facilisi nunc feugiat libero sem rutrum in. Libero.",
    link: {
      url: "#",
      text: "Learn More",
      icon: "ph:arrow-up-right-thin"
    } 
  },
  {
    id: 3,
    title: "Expert Counselling",
    icon: "ph:graph-thin",
    text: "Lorem ipsum dolor sit amet consectetur. Dolor magna lorem eget facilisis semper vestibulum lacus elit sit. Aliquam sed tristique facilisi nunc feugiat libero sem rutrum in. Libero.",
    link: {
      url: "#",
      text: "Learn More",
      icon: "ph:arrow-up-right-thin"
    }
  },
  {
    id: 4,
    title: "EMI Calculator",
    icon: "ph:notebook-thin",
    text: "Lorem ipsum dolor sit amet consectetur. Dolor magna lorem eget facilisis semper vestibulum lacus elit sit. Aliquam sed tristique facilisi nunc feugiat libero sem rutrum in. Libero.",
    link: {
      url: "#",
      text: "Learn More",
      icon: "ph:arrow-up-right-thin"
    }
  },
  {
    id: 5,
    title: "Compare Schools",
    icon: "ph:bus-thin",
    text: "Lorem ipsum dolor sit amet consectetur. Dolor magna lorem eget facilisis semper vestibulum lacus elit sit. Aliquam sed tristique facilisi nunc feugiat libero sem rutrum in. Libero.",
    link: {
      url: "#",
      text: "Learn More",
      icon: "ph:arrow-up-right-thin"
    }
  },
  {
    id: 6,
    title: "Compare Schools",
    icon: "ph:bus-thin",
    text: "Lorem ipsum dolor sit amet consectetur. Dolor magna lorem eget facilisis semper vestibulum lacus elit sit. Aliquam sed tristique facilisi nunc feugiat libero sem rutrum in. Libero.",
    link: {
      url: "#",
      text: "Learn More",
      icon: "ph:arrow-up-right-thin"
    }
  },
];


export default function Resources() {

  return (
    <section id="resources" className="flex flex-col gap-5 py-5">
      <h2 className="px-5 text-3xl font-semibold text-primaryBlue">
        Essential Resources for Students
      </h2>
      
      <Carousel
        responsive={responsive}
        keyBoardControl
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        itemClass="border-x-[1.25rem] p-5 border-white bg-primaryLight"
      >
        {resources.map(resource => (
          <Resource key={resource.id} resource={resource}/>
        ))}
      </Carousel>
    </section>
  );
}
