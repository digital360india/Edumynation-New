import Carousel from "react-multi-carousel";

import School from "./components/School";

import { getCarouselResponsive } from "@/utilities/functions/pages/home/functions";


const responsive = getCarouselResponsive({ mobileItems: 2, tabletItems: 3, desktopItems: 4 });

const schools = [
  {
    id: 1,
    name: "Primus Private School, UAE",
    link: {
      url: "#",
      text: "Visit School",
    },
    image: "/pages/home/featured-schools-section/school-1.jpeg"
  },
  {
    id: 2,
    name: "Primus Private School, UAE",
    link: {
      url: "#",
      text: "Visit School",
    },
    image: "/pages/home/featured-schools-section/school-2.jpeg"
  },
  {
    id: 3,
    name: "Primus Private School, UAE",
    link: {
      url: "#",
      text: "Visit School",
    },
    image: "/pages/home/featured-schools-section/school-3.jpeg"
  },
  {
    id: 4,
    name: "Primus Private School, UAE",
    link: {
      url: "#",
      text: "Visit School",
    },
    image: "/pages/home/featured-schools-section/school-2.jpeg"
  },
];


export default function FeaturedSchools() {

  return (
    <section id="featured-schools" className="flex flex-col gap-10 px-5 py-5 bg-primaryLight lg:px-7 xl:px-9">
      <h2 className="px-2 text-3xl font-semibold text-primaryBlue">
        Featured Schools
      </h2>
      <Carousel
        responsive={responsive}
        keyBoardControl
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        itemClass="px-2 rounded-lg"
      >
        {schools.map(school =>
          <School key={school.id} school={school}/>
        )}
      </Carousel>
    </section>
  );
}