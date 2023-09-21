import React from "react";

const data = [
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1109380366055252049/Scales.png",
    heading: "Compare Schools",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208876/edumynation-web/Reorder.png",
    heading: "Common Application",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208877/edumynation-web/Idea_1.png",
    heading: "Expert Counselling",
  },
  {
    img: "https://res.cloudinary.com/eduminatti-com/image/upload/v1686208878/edumynation-web/Calculator_Checked.png",
    heading: "EMI Calculator",
  },
];
const DetailMobCard = () => {
  return (
    <>
      <div className="flex justify-center gap-3 mt-12 lg:hidden">
        {data.map((item, index) => {
          return (
            <>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className=" bg-[#2F3F93] w-20 h-20 flex justify-center rounded-full">
                  <div className="bg-white w-16 h-16 mt-2 rounded-full">
                    <img className="w-20 p-4 hover:animate-spin" src={item.img} alt="" />
                  </div>
                </div>
                <div>
                  <h1 className="w-14 text-center text-[#2F3F93] text-md">
                    {item.heading}
                  </h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DetailMobCard;
