import StarActive from "@/assets/pages/home/testimonials-section/ratings/star-active.svg";
import StarInactive from "@/assets/pages/home/testimonials-section/ratings/star-inactive.svg";


export default function Rating({ given, length = 5 }) {

  return (
    <div className="rating flex p-1 mt-2">
      {Array.from({ length: length }).map((_, index) =>
      <div className="icon-cont">
        {index < given ? 
          <StarActive key={index}/> : <StarInactive key={index}/>}
      </div>
      )}
    </div>
  );
}
