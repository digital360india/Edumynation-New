// 'use client'
// import React, { useEffect, useState,useRef } from "react"; 
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { FiPhoneCall } from "react-icons/fi";
// import { Autoplay, Navigation } from 'swiper/modules';
// import Link from "next/link";
// import styled from "styled-components";
// import FormList from "./Form/FormList";
// const ArticleSection = styled.article`
//   width: 95%;
//   margin: auto;
//   box-shadow: 0 2px 5px -1px rgb(0 0 0 / 30%);
//   padding: 25px;
//   margin-top: 10px;
//   p {
//     font-size: 14px;
//   }
//   h2 {
//     font-size: 18px;
//   }
//   h3 {
//     font-size: 16px;
//   }
// `;

// const ListingHero = ({ categoryData }) => {
// //  const url=
//     console.log(categoryData?.bandesktopImg[0].url)
//   const [btn, setbtn] = useState(true);
//   const [art, setArt] = useState("");

//   useEffect(() => {
//     if (categoryData != undefined || categoryData != "") {
//       setArt(categoryData?.article);
//     }
//   }, [categoryData]);
//   let prevState = false;

//   const [isReadMoreShown, setReadMoreShown] = useState(prevState);

//   const togglebtn = () => {
//     setReadMoreShown((prevState = !prevState));
//   };

//   return (
//     <>
//      <div className="lg:h-[500px] h-[350px]  bg-contain bg-no-repeat w-full hidden sm:flex sm:flex-col">
//         <img
//           src={categoryData?.bandesktopImg[0].url}
//           className="absolute  top-0 left-0 right-0 lg:h-[500px] h-[400px] w-full  hidden sm:flex md:mt-24  "
//         />
//          {/* <img
//           src="https://cdn.discordapp.com/attachments/1078905801017659432/1122111764633501747/Rectangle_8.png"
//           className="absolute top-0 left-0 right-0  h-[650px] w-full  mt-16 block sm:hidden "
//         /> */}
//         <div className=" relative z-10 flex justify-center lg:mt-20 mt-32 flex-col gap-3 pt-20 items-center text-center">
//           <p className="text-white text-2xl lg:text-3xl font-bold">
//             FIND THE BEST <span className="text-[#2F3F93]"> SCHOOLS</span> IN{" "}
//             <span className="text-[#2F3F93]">SECONDS</span> !
//           </p>
//           <p className="text-white text-2xl lg:text-3xl text-center font-bold">
//             Consult our Expert Counsellor{" "}
//             <a href="tel:+971521026963">
//               <span className="text-center text-[#2F3F93] flex justify-center pt-4">
//                 {" "}
//                 <br /> <FiPhoneCall className=" "></FiPhoneCall>{" "}
//               </span>
//             </a>{" "}
//           </p>
//         </div>
//         <div className="sm:flex hidden relative z-10 gap-3 items-center justify-center mt-20 ">
//           <div className="flex flex-col  gap-1 text-white font-semibold">
//             <a className="flex  gap-2" href="tel:+971521026963">
//             <FiPhoneCall className="text-[#2F3F93] rounded-full p-2 w-10 h-10 bg-white"></FiPhoneCall>
//             <div>
//             <p>Helpline Number</p>
//               <p>+971521026963</p>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
    
//     <div className="bg-white">
     
//    <div className=" bg-white  ">
//       <div className=" flex  text-center items-center gap-2 justify-center lg:text-3xl text-xl mt-20 md:mt-36">
//         <span>
//           <div className="lg:border-2 border-[1px] lg:w-44 w-20 border-[#2F3F93]"></div>
//         </span>
//         <h1 className="uppercase tracking-wide text-black font-bold">{categoryData?.slug.split('-').join(" ")}</h1>
//         <span>
//           <div className="lg:border-2 border-[1px] lg:w-44 w-20 border-[#2F3F93]"></div>
//         </span>
//       </div>



//       <div className=" block sm:hidden pl-2 mt-10 w-[90vw] mx-auto ">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {
//   categoryData?.banImg.map((v)=>
//   <>
//   <SwiperSlide>
//     <img src={v?.url} className=" w-[80vw] h-[150px] " alt="" />
//   </SwiperSlide>
//   </>
//   )
// }
//       </Swiper>
//       <div className=" mt-10 block sm:hidden w-[90vw] mx-auto ">
//       <FormList selectremove="yes" />
//       </div>

     
//       </div>

//       <div className=" hidden sm:flex  bg-white  justify-center px-10 mt-12">

//         <ArticleSection>
//           {isReadMoreShown ? (
//             <div
//               className="innerDiv text-black"
//               dangerouslySetInnerHTML={{ __html: art }}
//             ></div>
//           ) : (
//             <div
//               className="innerDiv text-black"
//               dangerouslySetInnerHTML={{
//                 __html: art != undefined ? art.substr(0, 1800) : "",
//               }}
//             ></div>
//           )}
//           <div className="text-blue-700 text-right pr-5 cursor-pointer hover:underline">
//             <span onClick={togglebtn}>
//               {isReadMoreShown ? "Read Less" : "Read More"}
//             </span>
//           </div>
//           <span
//             style={{
//               color: "grey",
//               margin: "10px auto",
//               display: "block",
//               width: "fit-content",
//               fontSize: "15px",
//             }}
//             className="dates"
//           >
//             Author -{" "}
//             <Link href="/Author">
//               Sakshi Padiyar
//             </Link>{" "}
//           </span>
//         </ArticleSection>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default ListingHero;
