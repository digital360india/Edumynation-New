export default function City({ city }) {

  return (
    <div className="city w-[41vw] h-[37vw] sm:w-[29vw] sm:h-[25vw] lg:w-[21vw] lg:h-[15vw] flex flex-col items-center gap-3">
      <div className="city-image-cont rounded-lg">
        <img src={city.image} alt={`${city.cityName} Image`}/>
      </div>
      <div className="city-name text-center text-xs sm:text-sm md:text-md lg:text-lg font-bold">
        {city.cityName}
      </div>
    </div>
  );
}
