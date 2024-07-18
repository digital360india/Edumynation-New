'use client'
import React from "react";
import { BsSearch, BsNewspaper } from "react-icons/bs";
// import { HiAdjustmentsHorizontal, GoLocation } from "react-icons/go";
import { FiFilter } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
// import "../components/SchoolCardCss.css";
import { Line } from "rc-progress";
import FormList from "@/components/Form/FormList";
import { base } from "@/app/api/auth/airtable.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Link from "next/link";
import SchoolCardMini from "./SchoolCardMini";


const SchoolCard = ({categoryData}) => {

  const [employees, setEmployees] = useState([]);
  const [citySlug, setCitySlug] = useState("");
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  
  
const scrollPage=()=>{
  window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
}

  useEffect(() => {
    const city = categoryData?.slug.split("-");
    setCitySlug(city[2]);
  }, []);

  useEffect(() => {
    if (citySlug) {
      base(citySlug)
        .select({})
        .eachPage((records, fetchNextPage) => {
          setEmployees(records);
        });
      
     
    }
  }, [citySlug]);

  // console.log("emp", employees);

  return (
    <>
    <div className="bg-white  ">
      <div className=" bg-white">

 
        
        <div className="flex items-center justify-between text-black  mt-24 mb-10 text-center px-5">

          <div className="lg:hidden flex items-center  gap-3  ">
            <HiAdjustmentsHorizontal className="text-2xl"></HiAdjustmentsHorizontal>
            <FiFilter className="text-2xl"></FiFilter>
          </div>
          <div className="lg:hidden flex items-center gap-3">
            <p>{Math.ceil(employees.length)} Results</p>

            <p>
              {" "}
              Page {page} to {Math.ceil(employees.length / 8)}
            </p>
          </div>
        </div>
        <div className="my-5 text-center sm:text-left">

<h2 className="sm:pl-16  sm:text-[30px] text-black text-[20px] font-bold"> List of {Math.ceil(employees.length)} Best Schools in {citySlug[0]?.toUpperCase() + citySlug.slice(1,citySlug.length)}</h2>
</div>
        <div className="lg:flex sm:items-center bg-white text-black  lg:justify-between sm:justify-center lg:px-16 lg:mt-8 pb-8 lg:pb-0">
          <div className="lg:flex sm:flex sm:justify-center sm:items-center pl-6 lg:pl-0">
            <div className="lg:flex lg:justify-start  lg:gap-4  items-center">
              <div className="flex ">
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className="lg:w-[700px] p-2 w-[300px] h-10 border-l-2 border-t-2 border-b-2 outline-none border-[#AEAEAE] border-l-none rounded-l-xl rounded-r-none"
                  type="text"
                  placeholder="Search School"
                />

                <BsSearch className="w-10 p-2 h-10 text-[#AEAEAE]   border-r-2 border-t-2 border-b-2 outline-none border-[#AEAEAE]  border-r-none rounded-r-xl rounded-l-none"></BsSearch>
              </div>

              <div className="lg:flex hidden items-center gap-3 ">
                <HiAdjustmentsHorizontal className="text-2xl"></HiAdjustmentsHorizontal>
                <FiFilter className="text-2xl"></FiFilter>
              </div>
            </div>
          </div>

          <div className="lg:flex hidden items-center gap-8 ">
            <p>{Math.ceil(employees.length)} Results</p>

            <p>
              {" "}
              Page {page} to {Math.ceil(employees.length / 8)}
            </p>
          </div>
        </div>


        
      </div>
      <div className=" flex-col sm:flex sm:flex-row lg:pl-16 bg-white ">
        <div>
          {employees
            .filter((item) => {
              return search.toLowerCase() === "" || undefined || null
                ? item
                : item?.fields?.name == undefined
                ? ""
                : item?.fields?.name.toLowerCase().includes(search);

              // || item?.fields?.Long_Description.toLowerCase().includes(search);
            })
            .slice(page * 8 - 8, page * 8)
            .map((items, index) => {
              return (
                <>
                  <SchoolCardMini
                    data={items}
                    index={index}
                    citySlug={citySlug}
                  />
                </>
              );
            })}
        </div>
        <div className="sm:flex hidden mt-20 pl-5">
          <div>
            <FormList />
          </div>
        </div>
      </div>

      {/* paginate */}
      
        <div className="flex gap-3 text-black  items-center md:items-start justify-center md:justify-start sm:pl-10 ">
          <div className="text-center flex items-center">
            <span>
              <GrFormPrevious className="text-2xl lg:text-xl disabled:text-[#AEAEAE] disabled:cursor-not-allowed " />{" "}
            </span>
            <button
              className="flex gap-5 items-center cursor-pointer text-xl  disabled:text-[#AEAEAE]  disabled:cursor-not-allowed lg:text-[13px]   lg:text-2xl"
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
            >
              {" "}
              Prev
            </button>
          </div>
          <span className="text-xl underline text-blue-600 cursor-pointer">
            {page}
          </span>
          {
            <span
              className="text-xl cursor-pointer"
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </span>
          }

          {
            <span
              className="text-xl cursor-pointer"
              onClick={() => setPage(page + 2)}
            >
              {page + 2}
            </span>
          }
          <div className="text-center flex items-center">
            <button
              disabled={employees?.length / 8 <= page}
              className="flex items-center cursor-pointer text-xl disabled:text-[#AEAEAE]  disabled:cursor-not-allowed  lg:text-[13px]  lg:text-2xl"
              onClick={() => {setPage(page + 1); scrollPage()}}
            >
              Next
              <span>
                {" "}
                <GrFormNext className="text-2xl disabled:text-[#AEAEAE]  lg:text-xl" />{" "}
              </span>{" "}
            </button>
          </div>
        </div>
        
        </div>
    </>
  );
};

export default SchoolCard;
