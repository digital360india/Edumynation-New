'use client'
import Slider from "react-slick";
const TestimonialCard = ({ img,name,ptag }) => (
  <div className="bg-gradient-to-br mx-2    from-[#DCE4FF] to-[#FFEFF9] p-6 rounded-lg shadow-md   text-center">
    <div className="flex flex-col sm:flex-row  justify-center   items-center gap-3  mb-4">
      <img
        className=" min-w-[240px] w-[240px] object-cover    h-[240px]    rounded-full "
        src={img}
      
        alt={`${name}'s Photo`}
      />
      <div><p className=" text-justify  ">{ptag}</p>
    <p className="font-bold text-right text-xl  ">~&nbsp;{name}</p>
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
    ptag: "Edu My Nation is a great way of browsing through options and picking the best school for our kids. Also, their consultant appropriately acknowledged my doubts and cleared all my confusions.",
  },
  {
    img: "https://cdn.discordapp.com/attachments/1078905801017659432/1122049221718196234/tes2.jpg_6491280.png",
    name: "Shalini",
    ptag: "This platform amply solved my queries regarding different fields and educational topics. Edu My Nation's consultancy service helped me greatly in planning the education of my kid.",
  },
];
export default function Testimonials({})
{
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    pauseOnFocus:true,
    pauseOnHover:true,

  };
  return(

<section className="py-10 bg-white overflow-hidden  ">
<div className="container  text-justify w-full     text-black  md:px-4">
  <p className="text-2xl font-bold text-center mb-8">TESTIMONIALS</p>
  <div className="w-[80vw] mx-auto ">
    <Slider
    {...settings}
  
   
    >
    {arry.map((testimonial, index) => ( <TestimonialCard {...testimonial} />))}
    </Slider>
    </div>

</div>
</section>
)}