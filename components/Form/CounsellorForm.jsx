'use client';

import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { SchoolContext } from "../context/schoolContext";

const Form = styled.div`
  background: #f1f1f1;
  margin-right: 20px;
  margin-left: 20px;

  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-top: 15px;
  input,
  select {
    margin: 10px 0px;
    border: 1px solid black;
    padding: 10px;
    border: 0.2px solid #cccccc75;
  }
  button {
    width: 60%;
    margin: auto;
    background: #163696;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 3px;
    pointer: cursor;
  }
  .submitted {
    text-align: center;
    color: #1cd21c;
  }
  @media (max-width: 1100px) {
    width: 50%;
    margin: auto;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
`;

function counsellorForm() {
  const { addCounsellorForm, error, setError } = useContext<any>(SchoolContext);
  const [pause, setPause] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [details, setDetails] = useState<any>({
    firstName: "",
    phoneNumber: "",
    email: "",
  });
  
  const classes = [
    {
      value: "pre",
      name: "Pre",
    },
    {
      value: "nursery",
      name: "Nursery",
    },
    {
      value: "kg",
      name: "KG",
    },
    {
      value: "2",
      name: "Class 2",
    },
    {
      value: "2",
      name: "Class 2",
    },
    {
      value: "3",
      name: "Class 3",
    },
    {
      value: "4",
      name: "Class 4",
    },
    {
      value: "5",
      name: "Class 5",
    },
    {
      value: "6",
      name: "Class 6",
    },
    {
      value: "7",
      name: "Class 7",
    },
    {
      value: "8",
      name: "Class 8",
    },
    {
      value: "9",
      name: "Class 9",
    },
    {
      value: "10",
      name: "Class 10",
    },
    {
      value: "11",
      name: "Class 11",
    },
    {
      value: "12",
      name: "Class 12",
    },
  ];
  function submit() {
    setSubmitted(false);
    if (pause) {
      setPause(false);
      setError(null);
      addCounsellorForm(details);
    }
  }
  useEffect(() => {
    setError(null);
  }, []);
  useEffect(() => {
    if (error == false) {
      setSubmitted(true);
      setDetails({
        firstName: "",
        phoneNumber: "",
        email: "",
      });
    }
    setPause(true);
  }, [error]);
  return (
    <Form>
      <p style={{ color: "#163696", fontSize: "18px" }}>
        Confused about which school to choose?
      </p>
      <p style={{ fontSize: "14px" }}>
        Fill this form to get in touch with our counsellor.
      </p>
      <input
        type="text"
        placeholder="Name"
        value={details.firstName}
        onChange={(value) =>
          setDetails({ ...details, firstName: value.target.value })
        }
      />
      <input
        type="number"
        placeholder="Mobile Number"
        value={details.phoneNumber}
        onChange={(value) =>
          setDetails({ ...details, phoneNumber: value.target.value })
        }
      />
      <input
        type="email"
        placeholder="E-Mail"
        value={details.email}
        onChange={(value) =>
          setDetails({ ...details, email: value.target.value })
        }
      />
      {submitted && <p className="submitted">Your Form is Submitted</p>}
      {error && (
        <p className="submitted" style={{ color: "red" }}>
          Something went wrong
        </p>
      )}
      <button style={{ cursor: "pointer" }} onClick={submit}>
        Submit
      </button>
    </Form>
  );
}

export default counsellorForm;