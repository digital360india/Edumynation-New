import Avatar from "./components/Avatar";
import Rating from "../Testimonial/components/Rating";


export default function Testimonial({ testimonial }) {

  return (
    <div className="testimonial wrapper pt-10 relative">
      <div className="flex flex-col gap-3 px-8 pt-10 pb-6 rounded-2xl bg-white">
        <Avatar
          className="absolute top-[3%] left-[15%]"
          src={testimonial.avatar}
          alt={testimonial.personName}
          size={60}
        />
        <div className="wrapper flex justify-between">
          <div className="person-name-and-designation-wrapper">
            <div className="person-name text-xl font-semibold">
              {testimonial.personName}
            </div>
            <div className="person-designation text-xs">
              {testimonial.personDesignation}
            </div>
          </div>
          <Rating given={testimonial.ratingByPerson}/>
        </div>
        <p className="person-text text-xs">
          {testimonial.textByPerson}
        </p>
      </div>
    </div>
  );
}
