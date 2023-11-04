import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { base } from "@/app/api/auth/airtable";

const GetCall = ({ open, setOpen, schoolName,school }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [number, setNumber] = useState(null);
  const [standard, setStandard] = useState("");
  const [status, setStatus] = useState("");

const onSubmit = async(data) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; 
  const mobileNumberRegex = /^\d{10}$/;
  if(name!=null && email!="" && mobileNumberRegex.test(number)  && emailRegex.test(email)) {
  setStatus("Submitting....");
  try{   
base('enquireForm').create([
    {
      "fields": {
        "schoolSlug": school,
        "name": name,
        "phoneNumber": number,
        "email": email,
        "class": standard,
        "schoolId": "N/A"
      }
    },
    
  ], function(err, records) {
    if (err) {
      console.error(err);
      setStatus(err.message);

      return;
    }
    records.forEach(function (record) {
      setStatus("Submitted");
      setTimeout(() => {
        
        setOpen(!open);
      }, 1000);

    });
  });
  

   
    }catch(err){
      console.log(err);
      setStatus(err.message);
    }}
    else setStatus("*All Fields Are Mandatory")
};

  return (
    <>
    
      {/* <div className=" h-screen w-screen grid place-content-center"> */}
        <Dialog
        className="  w-screen h-screen grid place-content-center  bg-transparent   backdrop-blur-sm    "
          open={open}
          handler={() => {
            setOpen(!open);
          }}
          
        >
          <div className=" border bg-white   shadow-2xl rounded-2xl px-6 py-4 h-[400px] w-[300px]  sm:w-[400px] ">
          <div className="flex justify-center items-center text-center w-full  mt-4">
            <div className="flex flex-col ">
              <h1 className="text-[#2F3F93] text-3xl p-2 ">Enquire Now</h1>
              <p className="text-black">For {schoolName}</p>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="rounded-md text-red-800 mt-5  "
                placeholder=" Name"
                type="text"
              />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="rounded-md text-red-800 mt-5 "
                placeholder="Email Address"
                type="email"
              />

              <input
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                className="rounded-md text-red-800 mt-5 "
                placeholder="Phone Number"
                type="Number"
              />
              <input
                onChange={(e) => {
                  setStandard(e.target.value);
                }}
                className="rounded-md mt-5 text-red-800 "
                placeholder=" Class"
                type="text"
              />

              <span className="mt-3 text-green-500">{status}</span>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center my-5">
            <button
              onClick={() => {
                setOpen(!open);
                setStatus('');
              }}
              className="  text-red-800   border bg-white border-gray-300 shadow-xl  rounded-xl py-3 px-5 "
            
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onSubmit();
              }}
              className=" text-blue-950   border border-gray-300 shadow-xl  rounded-xl py-3 px-5 "
            
            >
              Confirm
            </button>
          </div>
          </div>
        </Dialog>
        {/* </div> */}
    </>
  );
};

export default GetCall;
