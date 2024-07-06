import Link from 'next/link';


export default function Schools({ school }) {

  return (
    <div className="school flex flex-col items-center gap-5">
      <div className="wrapper rounded-lg">
        <img className="image h-[200px]" src={school.image} alt={`${school.name} Image`}/>
        <div className="name text-center bg-primaryBlue text-white py-3">
          {school.name}
        </div>
      </div>
      <Link
        className="px-5 py-1 border border-primaryBlue rounded-full text-primaryBlue"
        href={school.link.url}
      >
        {school.link.text}
      </Link>
    </div>
  );
}
