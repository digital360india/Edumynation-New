import Link from 'next/link';


export default function School({ school }) {

  return (
    <div className="school flex flex-col items-center gap-5">
      <div className="wrapper">
        <div className="image-cont h-[120px]">
          <img className="image w-full h-full" src={school.image} alt={`${school.name} Image`}/>
        </div>
        <div className="name text-center p-3 bg-primaryBlue text-white">
          {school.name}
        </div>
      </div>
      <Link
        className="px-5 py-1 text-xs border border-primaryBlue rounded-full text-primaryBlue"
        href={school.link.url}
      >
        {school.link.text}
      </Link>
    </div>
  );
}
