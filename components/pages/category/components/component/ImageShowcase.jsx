import { useState } from "react";

import { images } from "../NewSchoolCard";


const ImageShowCase = ({ className }) => {
  
  const [image1, image2, image3, image4] = images;

  const [activeImage, setActiveImage] = useState(image1.url);

  const handleSelectedImage = event => {

    if (event.target.tagName !== 'IMG') {
      event.preventDefault();
    }
    else {
      setActiveImage(prev => {
        const selectedImage = event.target.src;
        event.target.src = prev;
        return selectedImage;
      });
    }
  }

  return (
    <div className={`${className} grid grid-rows-2`}>
      <div className="row-1 img-cont h-[16.5rem] row-span-1 col-span-full my-3 lg:h-[18rem]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={activeImage}
          alt={`Active Image`}
        />
      </div>

      <div className="row-2 h-fit grid grid-cols-3 row-span-1 col-span-full gap-2" onClick={handleSelectedImage}>
        <div className="col-1 img-cont h-[6rem] cursor-pointer hover:brightness-50 lg:h-[7.5rem]">
          <img 
            className="w-full h-full object-cover rounded-md"
            src={image2.url}
            alt={`Image ${image2.id - 1}`}
          />
        </div>
        <div className="col-2 img-cont h-[6rem] cursor-pointer hover:brightness-50 lg:h-[7.5rem]">
          <img
            className="w-full h-full object-cover rounded-md"
            src={image3.url}
            alt={`Image ${image3.id - 1}`}
          />
        </div>
        <div className="col-3 img-cont h-[6rem] cursor-pointer hover:brightness-50 lg:h-[7.5rem]">
          <img 
            className="w-full h-full object-cover rounded-md"
            src={image4.url}
            alt={`Image ${image4.id - 1}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageShowCase;
