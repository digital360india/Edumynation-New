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
  setStatus("Submitting....");
  try{
    // console.log("rresponse");
    // console.log(data)
   

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
    }
};

  return (
    <>
      <Fragment>
        <Dialog
        className="w-[320px] sm:w-[400px]"
          open={open}
          handler={() => {
            setOpen(!open);
          }}
        >
          <div className="flex justify-center items-center text-center mt-4">
            <div className="flex flex-col ">
              <h1 className="text-[#2F3F93] text-3xl p-2 ">Enquire Now</h1>
              <p className="text-black">For {schoolName}</p>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="rounded-md mt-5 "
                placeholder=" Name"
                type="text"
              />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="rounded-md mt-5 "
                placeholder="Email Address"
                type="email"
              />

              <input
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                className="rounded-md mt-5 "
                placeholder="Phone Number"
                type="Number"
              />
              <input
                onChange={(e) => {
                  setStandard(e.target.value);
                }}
                className="rounded-md mt-5 "
                placeholder=" Class"
                type="text"
              />

              <span className="mt-3 text-green-500">{status}</span>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center my-5">
            <Button
              onClick={() => {
                setOpen(!open);
              }}
              color="red"
            >
              Cancel
            </Button>

            <Button
              variant="gradient"
              color="#3E4D99"
              onClick={() => {
                onSubmit();
              }}
            >
              <span>Confirm</span>
            </Button>
          </div>
        </Dialog>
      </Fragment>
    </>
  );
};

export default GetCall;
