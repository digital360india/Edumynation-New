import Carousel from "react-multi-carousel";

import City from "./components/City";

import { getCarouselResponsive } from "@/utilities/functions/pages/home/functions";


const responsive = getCarouselResponsive({ desktopItems: 4, tabletItems: 3, mobileItems: 2 });

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
  },
  {
    id: 4,
    cityName: "Chandigarh",
    image: "/pages/home/school-by-cities-section/city-1.png"
  },
  {
    id: 5,
    cityName: "Gurugram",
    image: "/pages/home/school-by-cities-section/city-2.png"
  },
];


export default function SchoolByCities() {

  return (
    <section id="school-by-cities" className="flex flex-col gap-7 px-3 py-5 bg-secondaryLight lg:px-7 xl:px-9">
      <h1 className="text-3xl text-primaryBlue font-semibold">
        School by Cities
      </h1>
      
      <Carousel
        responsive={responsive}
        keyBoardControl
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        itemClass="h-[50vw] px-2 select-none fix-drag sm:h-[35vw] lg:h-[25vw] xl:h-[25vw] 2xl:h-[400px] "
      >
        {cities.map(city => 
          <City key={city.id} city={city}/>
        )}
      </Carousel>
    </section>
  );
}