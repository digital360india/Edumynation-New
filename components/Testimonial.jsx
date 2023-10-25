// 'use client'

// import { Carousel } from "react-responsive-carousel";
const TestimonialCard = ({ img,name,ptag }) => (
  <div className="bg-gradient-to-br  from-[#DCE4FF] to-[#FFEFF9] p-6 rounded-lg shadow-md w-[80%] mx-auto  text-center">
    <div className="flex flex-col sm:flex-row  justify-center   items-center gap-3  mb-4">
      <img
        className=" min-w-[240px] w-[240px] object-cover    h-[240px]    rounded-full "
        src={img}
      
        alt={`${name}'s Photo`}
      />
      <div><p className=" text-left   ">{ptag}</p>
    <p className="font-bold text-center  ">{name}</p>
    {/* <p className="text-gray-500">{designation}</p> */}
    </div>
    </div>
  </div>
  
);
const arry = [
  {
    img: "https://res.cloudinary.com/dqulcdek8/image/upload/v1698216965/WhatsApp_Image_2023-10-25_at_12.25.33_b971b3e6_dnruly.jpg",
    name: "Nancy",
    ptag: "This platform amply solved my queries regarding different fields and educational topics. Edu My Nation's consultancy service helped me greatly in planning the education of my sister.",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1122048608087330886/tes3.jpg_9061224.png",
    name: "Vaibhav",
    ptag: "Edu My Nation is a great way of browsing through options and picking the best school for our kids. Also, their consultant appropriately acknowledged my doubts and cleared all my confusions about diverse educational sectors.",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1122049221718196234/tes2.jpg_6491280.png",
    name: "Shalini",
    ptag: "This platform amply solved my queries regarding different fields and educational topics. Edu My Nation's consultancy service helped me greatly in planning the education of my kid.",
  },
];
export default function Testimonials({})
{
  return(

<section className="py-10 bg-white  ">
<div className="container  text-justify md:w-[80vw]  mx-auto text-black  md:px-4">
  <p className="text-2xl font-bold text-center mb-8">TESTIMONIALS</p>
  {/* <Carousel showArrows={true} showStatus={false} showIndicators={false} showThumbs={false} > */}
    {arry.map((testimonial, index) => ( <div className="mt-8" key={index}><TestimonialCard {...testimonial} /></div>))}
  {/* </Carousel> */}
</div>
</section>
)}