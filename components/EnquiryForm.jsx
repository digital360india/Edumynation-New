import React, { useState } from 'react';
import styles from 'styled-components';
import { useForm } from 'react-hook-form';
import { base } from '../api/airtable';
import { useRouter } from 'next/router';

function EnquiryForm({ mainStyle = false, schoolData }) {
  const router = useRouter();
  const { city, schoolName } = router.query;

  console.log(schoolData);

  const [status, setStatus] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus('loading....');
    try {
      console.log('response');
      console.log(data);

      base('enquireForm').create(
        [
          {
            fields: {
              schoolSlug: schoolName,
              name: data.name,
              phoneNumber: data.number,
              email: data.email,
              class: data.class,
              schoolId: '',
            },
          },
        ],
        function (err, records) {
          if (err) {
            console.error(err);
            setStatus(err.message);
            return;
          }
          records.forEach(function (record) {
            setStatus('Submitted');
          });
        }
      );
    } catch (err) {
      console.log(err);
      setStatus(err.message);
    }
  };

  return (
    <MainCont className={mainStyle ? 'customMain' : ''}>
      <p className="m-5 text-center bg-[#2F3F93]">ENQUIRY FORM</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="Full name*"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          {...register("number", { required: true })}
          placeholder="Contact Number*"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          {...register("email", { required: true })}
          placeholder="Email Id*"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="selectionCont">
          <select {...register("class")}>
            <option value="">class</option>
            <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
                <option value="All">All</option>
          </select>
          <select {...register("type")}>
            <option value="cbse">CBSE</option>
            <option value="Arabic">Arabic</option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Igcse">Igcse</option>
            <option value="Cie">Cie</option>
          </select>
          <select {...register("cate")}>
            <option value="All-schools">All-schools</option>
          </select>
        </div>
        <div className="text-center">
          <p style={{ color: "black" }}>{status}</p>
        </div>
        <input
          disabled={status !== "Submitting...." ? false : true}
          className={status === 0 ? "animate-spin  submit " : "submit"}
          type="submit"
        />

      </form>
    </MainCont>
  );
}

export default EnquiryForm;

const MainCont = styles.div`
padding: 18px 0px;
width: fit-content;
    border: 1px solid white;
    border-radius: 13px;
    width:100%;
    overflow:hidden;
    position:relative;
    &.customMain{
      background: rgba(214, 218, 232, 0.25);
box-shadow: 2px 2px 14px 3px #90979A;
    }
    h3{
      color: black;
      z-index:9;
    }
    form{
      display: flex;
      flex-direction: column;
      gap: 25px;
      justify-content:center;
      z-index:9;
      width:85%;
      margin:auto;
    }
    input, select{
      background: white;
      border: none;
      padding: 8px 12px;
      border-radius: 7px;
      width: calc(100% - 30px);
      color: gray;
      aspect-ratio: 13/1;
    }
    .selectionCont{
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    select{
      width:30%;

    }
    .submit{
      margin:auto;
      background:#3E4D99;
      border-radius: 20px;
color:white;
border: 1px solid;
width: 45%;
min-width:200px;
margin-top:15px;
border: 2px solid linear-gradient(96.64deg, #FFFFFF -15.79%, rgba(0, 0, 0, 0) 359.39%);
// display: flex;
// align-items: center;
// gap: 20px;
}
`;
