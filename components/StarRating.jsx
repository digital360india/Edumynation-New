import React from 'react';
import {IoStarSharp} from "react-icons/io5";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i}>
        <IoStarSharp size={28}
          className={i <= rating ? 'text-[#ED8811]' : 'text-gray-400'}
        />
      </span>
    );
  }
  return <div className="flex gap-3 justify-center">{stars}</div>;
};

export default StarRating;