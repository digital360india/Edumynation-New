export default function City({ city }) {

  return (
    <div className="city flex flex-col items-center gap-3">
      <div className="city-image-cont">
        <img src={city.image} alt={`${city.cityName} Image`}/>
      </div>
      <div className="city-name font-bold">
        {city.cityName}
      </div>
    </div>
  );
}
