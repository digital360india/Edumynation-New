export default function Service({ service }) {

  return (

      <div className="service flex flex-col gap-4 px-2 pb-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4 lg:px-5 lg:pb-5">
        <div className="title text-2xl text-white z-10">
          {service.title}
        </div>
        <hr className="w-full z-10"/>
        <div className="text z-10 text text-white">
          {service.text}
        </div>
      </div>

  );
}
