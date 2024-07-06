import Carousel from "react-multi-carousel";

import City from "./components/City";

import { getCarouselResponsive } from "@/utilities/functions/pages/home/functions";


const responsive = getCarouselResponsive({ mobileItems: 2 });

const cities = [
  {
    id: 1,
    cityName: "Delhi",
    image: "/pages/home/school-by-cities-section/city-1.png"
  },
  {
    id: 2,
    cityName: "Dehradun",
    image: "/pages/home/school-by-cities-section/city-2.png"
  },
  {
    id: 3,
    cityName: "Banglore",
    image: "/pages/home/school-by-cities-section/city-3.png"
  }
];


export default function SchoolByCities() {

  return (
    <section id="school-by-cities" className="flex flex-col gap-7 px-5 py-5 bg-secondaryLight">
      <h1 className="px-2 text-3xl text-primaryBlue font-semibold">
        School by Cities
      </h1>
      
      <Carousel
        responsive={responsive}
        keyBoardControl
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        itemClass="px-2 rounded-lg"
      >
        {cities.map(city => 
          <City key={city.id} city={city}/>
        )}
      </Carousel>
    </section>
  );
}