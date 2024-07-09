import Link from 'next/link';


export default function School({ school }) {

  return (
    <div className="school flex flex-col items-center gap-5">
      <div className="wrapper">
        <div className="image-cont w-[41vw] h-[37vw] sm:w-[29vw] sm:h-[25vw] lg:w-[21vw] lg:h-[17vw]">
          <img className="image w-full h-full rounded-t-lg" src={school.image} alt={`${school.name} Image`}/>
        </div>
        <div className="name w-[41vw] sm:w-[29vw] lg:w-[21vw] text-center p-3 rounded-b-lg text-xs lg:text-sm bg-primaryBlue text-white">
          {school.name}
        </div>
      </div>
      <Link
        className="px-5 py-1 text-xs lg:text-sm border border-primaryBlue rounded-full text-primaryBlue"
        href={school.link.url}
      >
        {school.link.text}
      </Link>
    </div>
  );
}
