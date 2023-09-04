'use client';

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import{ useRouter } from 'next/navigation';
import TypewriterComponent from "typewriter-effect";


export default function Home() {
  // const navigate = useNavigate();
  // const [value, setvalue] = useState("");
  // console.log("mmmm=>", value);

  // const navigatePage = () => {
  //   if (value != "") {
  //     navigate(`/category/${value}`);
  //   }
  // };
  const router = useRouter();
  const [value, setvalue] = useState('');

  const navigatePage = () => {
    if (value !== '') {
      router.push(`/category/${value}`);
    }
  };

  return (
    <div className=''>
      <div className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:'url("https://cdn.discordapp.com/attachments/1078905801017659432/1109361450620825660/Rectangle_1.png")',
        }}>
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <p className="text-4xl font-bold"> 
            <TypewriterComponent options={{ autoStart: true, loop: true, delay: 50,strings: "Find The Best School In <br /> Seconds !", }}/> 
            </p>
          </div>
        </div>

      <div className="flex justify-center mt-5 lg:mt-10 absolute  top-64 lg:top-52 left-[50%] right-[50%]">
        <div className="flex lg:w-[500px] lg:h-[50px] w-[320px] h-10 bg-white justify-center   items-center rounded-xl lg:rounded-2xl">
          <div className="lg:w-[200px] text-[#909090] ">
          <select className="outline-none border-none bg-transparent p-2 rounded-l-xl" name="cars"id="cars">
            <option className="text-[#909090] outline-none" value=""> Type of school</option>
            <option className="text-[#909090]" value="boarding" selected>All Schools</option>
          </select>
          </div>
          <span className="border-r-2 b w-4 border-[#909090] lg:h-[35px] h-8"></span>
          <div className="lg:w-[200px]  text-[#909090]">
          <select className="outline-none bg-transparent border-none p-2 outline-rounded-xl lg:outline-rounded-xl" name="cars" id="cars" onChange={(e) => setvalue(e.target.value)}>
            <div></div>
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
    </div>
  )
}



  

     

