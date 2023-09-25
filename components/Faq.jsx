'use client';

import React, { useEffect, useState } from "react";

function Faq({ categoryData }) {
  const [data1, setData1] = useState("");
  const [catFaq, setCatFaq] = useState([]);

  useEffect(() => {
    if (categoryData !== undefined && categoryData !== null) {
      const obj = JSON.parse(categoryData.FAQ);
      setCatFaq(obj);
    }
  }, [categoryData]);

  return (
    <div className="lg:pb-20 text-black ">
      <div className="flex text-center items-center gap-2 justify-center lg:text-3xl text-2xl mt-24 mb-10">
        <span>
          <div className="lg:border-3 border-[2px] lg:w-44 w-20 border-[#2F3F93]"></div>
        </span>
        <h2 className="tracking-wide">FAQs</h2>
        <span>
          <div className="lg:border-3 border-[2px] lg:w-44 w-20 border-[#2F3F93]"></div>
        </span>
      </div>
      <div className="contianer px-5 md:px-64">
        {catFaq.map((faq, index) => (
          <div key={index}>
            <ul className="flex flex-col">
              <li className="bg-white my-2 border-b-[3px]" x-data={`accordion(${index + 1})`}>
                <h2
                  className="flex flex-row justify-between w-[350px] md:w-[600px] lg:w-[1000px] font-semibold p-3 cursor-pointer"
                  onClick={() => {
                    setData1(data1 === index + 1 ? "" : `${index + 1}`);
                  }}
                >
                  <span className="text-gray-500 w-[350px] lg:w-[350px]">
                    {faq.ques}
                  </span>
                  <svg
                    // h-6 w-6
                    className="w-8 h-8 fill-current text-blue-600  transform transition-transform duration-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </h2>
                {data1 === `${index + 1}` && (
                  <div className="duration-900 transform transition-transform scroll-smooth">
                    <p className="p-3 text-gray-900 transition duration-700 ease-in-out">
                      {faq.ans}
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
