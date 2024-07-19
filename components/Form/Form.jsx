'use client';

import { useState } from "react";
import { base } from "../../app/api/auth/airtable";

const Form = ({ color }) => {
  const [details, setDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    class: "",
    board: "",
  });

  const [msg, setMsg] = useState("");
  const [btn, setBtn] = useState(false);

  const createCounsellorForm = async () => {
    setBtn(true);
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
          setMsg("Form Submitted Successfully");
          setDetails({
            ...details,
            board: "",
            class: "",
            email: "",
            phoneNumber: "",
            name: "",
          });
     
          setBtn(false);
        });
      }
    );
  };

  return (
    <div
      className={` ${
        !color
          ? "bg-[url('https://cdn.discordapp.com/attachments/1078905801017659432/1110793183572545566/Rectangle_11.png')]"
          : ""
      } h-[550px] w-full     bg-right-bottom    bg-cover   flex items-center justify-center md:justify-start md:items-start md:pl-16`}
    >
      <div className="lg:w-[446px] w-[350px] h-[514px]  pt-12  flex flex-col ">
        <div className="lg:w-[400px]  w-[350px] rounded-t-3xl bg-[#2F3F93] h-20 pt-2">
          <p className="text-white text-center text-[19px] ">
            Confuse About Which School <br /> To Choose?
          </p>
        </div>
        <div className="bg-white  w-[350px] lg:w-[400px] rounded-b-3xl">
          <div className="bg-white  w-[350px] lg:w-[400px] rounded-b-3xl">
            <p className="text-center  text-black text-[15px] pt-3">
              Fill this form to get in touch with our counsellor.
            </p>
            <div className="flex flex-col justify-center  items-center gap-4 mt-5">
              <input
                value={details.name}
                onChange={(value) =>
                  setDetails({ ...details, name: value.target.value })
                }
                className="lg:w-[350px] px-1 rounded-md bg-[#faf7f7] w-[300px] h-12  outline-none"
                type="text"
                placeholder=" Full Name*"
              />
              <input
                value={details.phoneNumber}
                onChange={(value) =>
                  setDetails({ ...details, phoneNumber: value.target.value })
                }
                className="lg:w-[350px] rounded-md bg-[#faf7f7] px-1 w-[300px] h-12  outline-none"
                type="number"
                placeholder=" Mobile number*"
              />
              <input
                value={details.email}
                onChange={(value) =>
                  setDetails({ ...details, email: value.target.value })
                }
                className="lg:w-[350px] rounded-md bg-[#faf7f7] px-1 w-[300px] h-12  outline-none"
                type="Email"
                placeholder=" Email ID*"
              />
            </div>

            <div className="flex flex-row text-black items-center justify-center lg:gap-7 gap-7 mt-3">
              <select
                defaultValue={details.class}
                onChange={(value) =>
                  setDetails({ ...details, class: value.target.value })
                }
                className="lg:w-[100px] rounded-md bg-[#faf7f7] px-1 w-[80px]  h-12  outline-none "
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
                className="lg:w-[100px] rounded-md w-[80px] h-12 bg-[#faf7f7]  outline-none"
                name="cars"
                id="cars"
              >
                <option value="CBSE">CBSE</option>
                <option value="Arabic">Arabic</option>
                <option value="American">American</option>
                <option value="British">British </option>
                <option value="gcse">Gcse</option>
                <option value="igcse">Igcse</option>
                <option value="cie">Cie </option>
              </select>
   
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
        </div>
      </div>
    </div>
  );
};

export default Form;
