'use client'

import React from "react";
import { useState } from "react";
import { base } from "@/api/airtable";

const FormList = () => {
  const [details, setDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    class: "",
    board: "",
  });

  const [msg, setMsg] = useState("");
  const [btn, setbtn] = useState(false);

  const createCounsellorForm = () => {
    setbtn(true);
    base("counsellorForm").create(
      [
        {
          fields: {
            firstName: details.name,
            email: details.email,
            phoneNumber: details.phoneNumber,
            class: details.class,
            board: details.board,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          setMsg("Form Submited Successfully");
          setDetails({
            ...details,
            board: "",
            class: "",
            email: "",
            phoneNumber: "",
            name: "",
          });
          console.log(record.getId());
          setbtn(false);
        });
      }
    );
  };
  return (
    <>
      <div className="lg:w-[400px]  w-[350px] rounded-t-3xl bg-[#2F3F93] h-20 pt-2">
        <p className="text-white text-center text-[19px] ">
          Confuse About Which School <br /> To Choose?
        </p>
      </div>
      <div className="bg-white border-[1px] border-white shadow-2xl w-[350px] lg:w-[400px] rounded-b-3xl">
        <p className="text-center  text-black text-[15px] pt-3">
          Fill this form to get in touch with our counsellor.
        </p>
        <div className="flex flex-col justify-center items-center gap-4 mt-5">
          <input
            className="lg:w-[350px] w-[300px] h-12 shadow-2xl border-[1px] border-[#909090] outline-none"
            type="text"
            placeholder=" Full Name*"
            value={details.name}
            onChange={(value) =>
              setDetails({ ...details, name: value.target.value })
            }
          />
          <input
            className="lg:w-[350px] w-[300px] h-12 shadow-2xl border-[1px] border-[#909090] outline-none"
            type="number"
            placeholder=" Mobile number*"
            value={details.phoneNumber}
            onChange={(value) =>
              setDetails({ ...details, phoneNumber: value.target.value })
            }
          />
          <input
            className="lg:w-[350px] w-[300px] h-12 shadow-2xl border-[1px] border-[#909090] outline-none"
            type="Email"
            placeholder=" Email ID*"
            value={details.email}
            onChange={(value) =>
              setDetails({ ...details, email: value.target.value })
            }
          />
        </div>

        <div className="flex flex-row text-black items-center justify-center lg:gap-7 gap-7 mt-3">
          <select
            className="lg:w-[100px] w-[80px]  h-12 shadow-2xl border-[1px] border-[#909090] outline-none "
            name="cars"
            id="cars"
            defaultValue={details.class}
            onChange={(value) =>
              setDetails({ ...details, class: value.target.value })
            }
          >
            <option value="Class">Class</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
            <option value="All">All</option>

          </select>
          <select
            defaultValue={details.board}
            onChange={(value) =>
              setDetails({ ...details, board: value.target.value })
            }
            className="lg:w-[100px] w-[80px] h-12 shadow-2xl border-[1px] border-[#909090] outline-none"
            name="cars"
            id="cars"
          >
            <option value="Class">CBSE</option>
            <option value="Arabic">Arabic</option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Gcse">Gcse</option>
            <option value="Cie">Cie</option>
          </select>
          `<select
            className="lg:w-[100px] w-[80px] h-12 shadow-2xl border-[1px] border-[#909090] outline-none"
            name="cars"
            id="cars"
            defaultValue="Type Of School"
          >
            <option value="Class">All-Schools</option>
          
          </select>`
        </div>
        <div className="text-center mt-3">
          <span className="text-[#2F3F93]">{msg}</span>
        </div>

        <div className="mt-3 pb-7 lg:w-[400px] w-[350px] text-center">
          <button
            disabled={btn}
            className="text-white bg-[#2F3F93] rounded-full px-7 py-2 disabled:bg-gray-400 "
            onClick={() => {
              createCounsellorForm();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default FormList;
