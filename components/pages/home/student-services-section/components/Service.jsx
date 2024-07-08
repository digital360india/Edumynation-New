export default function Service({ service }) {

  return (
    <li
      className={`
        h-[432px] flex flex-col justify-end p-5
        relative
        bg-cover bg-center bg-no-repeat
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-30
      `}
      style={{ backgroundImage: `url('${service.image}')` }}
    > 
      <div className="service flex flex-col gap-4 z-10">
        <div className="title text-2xl text-white ">
          {service.title}
        </div>
        <hr className="w-full"/>
        <div className="text text-sm text-white">
          {service.text}
        </div>
      </div>
    </li>
  );
}
