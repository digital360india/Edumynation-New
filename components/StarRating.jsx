
// import { stringify } from "postcss";
import React from "react";
// import { AiFillStar } from "react-icons/ai";
// import { BsStarHalf, BsFillStarFill } from "react-icons/bs";
import { IoStarHalfSharp, IoStarSharp } from "react-icons/io5";
// import { useParams } from "react-router-dom";

const StarRating = ({ rating, review }) => {

  var star_num = rating?.toString();

  var isInteger = !(star_num?.indexOf(".") == -1);
  var whole_stars = [];
  for (let i = 0; i < Math.floor(star_num); i++) {
    whole_stars.push(<IoStarSharp />);
  }
  whole_stars.push(isInteger ? <IoStarHalfSharp /> : null);

  return (
    <>
      <div>
        <div className=" flex gap-1 text-[14px] lg:text-[20px] text-orange-500 ">
          {whole_stars}{" "}
          {review !== -1 &&
          <span className="text-[13px] w-[74px] text-[#2F3F93] lg:flex  font-semibold -mb-1">
            ({review} reviews)
          </span>}
        </div>
      </div>
    </>
  );
};

export default StarRating;
