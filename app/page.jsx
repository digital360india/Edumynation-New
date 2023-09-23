'use client';
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import{ useRouter } from 'next/navigation';
import TypewriterComponent from "typewriter-effect";
import Testimonials from "@/components/Testimonial";
import DetailCard from "@/components/DetailCard";
import DetailMobCard from "@/components/DetailMobCard";
import About from "@/components/About";
import Register from "@/components/Register";
import ServiceMob from "@/components/ServiceMob";
import Feature from "@/components/Feature";
import Form from "@/components/Form/Form";
import ImgSliderMob from "@/components/ImgSliderMob";
import ImgSlider from "@/components/ImgSlider";
export default function Home() {

  const router = useRouter();
  const [value, setvalue] = useState('');

  const navigatePage = () => {
    if (value !== '') {
      router.push(`/category/${value}`);
    }
  };

  return (
    <>
      <div className="relative bg-cover bg-center mt-16   md:mt-24 h-[450px]"
        style={{
          backgroundImage:'url("https://cdn.discordapp.com/attachments/1078905801017659432/1109361450620825660/Rectangle_1.png")',
        }}>
        <div className="absolute inset-0 flex justify-center items-center  bg-opacity-50">
          <div className="text-white text-center">
            <p className="text-4xl font-bold"> 
            <TypewriterComponent options={{ autoStart: true, loop: true, delay: 50,strings: "Find The Best School In <br /> Seconds !", }}/> 
            </p>
          </div>
        </div>

      <div className="flex justify-center mt-5 lg:mt-16 absolute  top-64 lg:top-52 left-[50%] right-[50%]">
        <div className="flex lg:w-[500px] lg:h-[50px] w-[320px] h-10 bg-white justify-center   items-center rounded-xl lg:rounded-2xl">
          <div className="lg:w-[200px] text-[#909090] ">
          <select className="outline-none border-none bg-transparent p-2 rounded-l-xl" defaultValue={value} name="cars"id="cars">
            <option className="text-[#909090] outline-none" value=""> Type of school</option>
            <option className="text-[#909090]" value="boarding" selected>All Schools</option>
          </select>
          </div>
          <span className="border-r-2 b w-4 border-[#909090] lg:h-[35px] h-8"></span>
          <div className="  text-[#909090]">
          <select className=" w-32 outline-none bg-transparent border-none p-2 outline-rounded-xl lg:outline-rounded-xl" name="cars"   defaultValue={value} id="cars" onChange={(e) => setvalue(e.target.value)}>
            <option className="" value="">Locations</option>
            <option value="schools-in-ajman">Ajman</option>
            <option value="schools-in-dubai">Dubai</option>
            <option value="schools-in-fujairah">Fujairah</option>
            <option value="schools-in-sharjah">Sharjah</option>
            <option value="schools-in-abuDhabi">Abu-Dhabi</option>
            <option value="schools-in-rak">RAK</option>
            <option value="schools-in-alain">Al-ain</option>
          </select>
          </div>
          <span className="border-r-2 b w-4 border-[#909090]  lg:h-[35px] h-8"></span>

          <div className="text-black text-xl lg:text-2xl p-2 lg:p-2 lg:w-[50px] lg:h-10">
            <button onClick={navigatePage} className="text-[#909090]"><FiSearch /></button>
          </div>
        </div>
      </div>
      </div>
      <DetailCard/>
      <DetailMobCard/>
       <ImgSlider/>
      <ImgSliderMob/>
      <Form/>
      <Feature/>
      <ServiceMob/>
      <Register/>
      <About/>
      <Testimonials />
      </>
  
  )
}



  

     

