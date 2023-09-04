import Image from "next/image";
import Link from "next/link";
import EnquireForm from "./enquireForm";
import styled from "styled-components";
import { buildUrl } from "cloudinary-build-url";

const ListSchool = styled.div`
margin:60px 20px;
box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
border-radius: 6px;
padding-bottom: 15px;
padding: 10px;
padding-bottom: 15px;
.mainImg{
    height:150px
    position:relative;
    width:300px;

}
.option{
    width:95px;
    height:45px;
    position:relative;
}
.mainImg div{
    width: 100%;
    height:100%;
}
.option div{
    width: 100%;
    height:100%;
}
.options{
    display:flex;
    justify-content:space-between;
}
.section1{
    display: flex;
    img{
        object-fit: cover !important;
    }
    .schoolImgCont{
        margin-right:20px;
        margin-top: 20px;
    }
    .schoolInfo h3{
        font-size: 14px;
        color: #163696;
    }
    .schoolInfo .starsAndVotes svg{
        width:16px;
    }
    .starsAndVotes{
        align-items: center;
        display: flex;
    }
    .schoolInfo{
        width: 45%;
        
        p, .info{
            font-size: 13px;
            font-weight: 700;
            display: block;
        }
        address{
            font-size: 12px;
    color: grey;
    font-weight: normal;
    margin: 10px 0px;
    font-style: normal;
        }
        .info{
            display: grid;
            grid-template-columns: 1fr 1fr;  
            margin-bottom: 3px;
        }
        }
    .info span{
        font-weight: 450;
    }
    .priceAndButtons{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        a{
            cursor:pointer;
            height: 40px;
            margin: 10px 0;
            font-size: 12px;
            background: #163696;
            color: white;
            width: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            font-weight: 300;
        }
    }

}
.section2{
    h4{
        font-size: 18px;
        width: fit-content;
        color: white;
        border-radius: 5px;
        font-weight: 400;
        color: #3954a5;
        margin-bottom: 0;

    }
}
.popUpEnquire{
    position: absolute;
    width: 100%;
    height: 102%;
    margin-top:-5px;
    z-index: 999;
    justify-content: center;
    align-items: center;
    display: flex;
    left:0;
    backdrop-filter: brightness(0.4);
    display:none;
}
.innerPopDiv{
    width: 50%;
    position:relative;
    width: fit-content;
    background: white;
    padding: 25px;
    border-radius: 5px;
}
.innerPopDiv div{
    width: 100%;
    margin: 0;
   
}
.innerPopDiv span{
    position: absolute;
    right: 30px;
    top: 18px;
    font-size: 25px;
    cursor: pointer;
}
.popUpp{
    display:flex;
}
.loginForm{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    background: rgba(0,0,0,0.6);
  }
  .loginForm.active{
    display:flex;
  }
  .loginInnerDiv{
    position:relative;
    margin: 30px;
    span{
      position: absolute;
      right: 20px;
      top: 13px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
    }
}
@media (max-width:1100px){
    margin-right: 20px;
}
@media (max-width:900px){
    .innerPopDiv span{
        right: 15px;
        top: 10px;
    }
}
@media (max-width:750px){

    .section1 .schoolImgCont{
        margin-right: 0;
    }
    .innerPopDiv{
        width: 52%;
        min-width: 340px;
        max-width: 98%;
        }
    .mainImg {
        width:100%;
        height:400px;
        margin-bottom: 4px;
        }
        .option{
            width:33%;
            height:100px;
        }

    .section1{
        flex-wrap: wrap;
        .schoolInfo{
            width:60%;
            margin-top: 30px;
        }
        .priceAndButtons{
            width:40%;
            margin-top: 30px;
        }
    }
  
}
@media (max-width:600px){
    .mainImg {
        height:300px;
        }
        .option{
            height:70px;
        }
}
@media (max-width:500px){
    margin: 30px auto;
    width:95%;
    .section1{
        .schoolInfo{
            width:100%;
        }
  
        .priceAndButtons{
            width:100%;
            span{
                width: 100%;
    margin-left: 20px;
    
            }
        a{
            width: 100%;
            
        }
        a:nth-child(4){
            padding-right: 45px !important;
        }
        }
        
        .mainImg {
            height:200px;
            }
            .option{
                height:70px;
            }
    
    }
   
  
}
`;
let starNum = 4;
function popUp() {
  const popUp = document.querySelector < HTMLElement > ".popUpEnquire";
  popUp.classList.toggle("popUpp");
  popUp.style.top = `${window.scrollY}px`;
  document.querySelector("body").classList.toggle("body");
}
function formPopUp() {
  document.querySelector(".loginForm").classList.toggle("active");
}
function listSchool({ school }) {
  // let url=`https://res.cloudinary.com/edumynationofficial/image/upload/${school.fields.State}/${school.fields.City}/${school.fields.slug}`;
  const School = school.fields;
  const url = buildUrl(`/gallery/${School.Town.toLowerCase()}/`, {
    cloud: {
      cloudName: "edumynationofficial",
    },
  });
  const curOpt = [
    "icse_isc_schools",
    "cbse_schools",
    "cie_schools",
    "ib_schools",
    "igcse_schools",
    "gcse_schools",
    "Japanese",
    "Filipino",
    "British",
    "American",
    "German",
    "French",
    "Russian",
    "Arabic",
    "MOE",
    "Australian",
    "NCFE",
    "Iranian",
    "Pakistani",
    "SABIS",
    "Canadian",
    "Special Need",
    "UK EYES",
  ];
  let finalOnes: Array<string>;
  finalOnes = curOpt.filter((val) => {
    if (School[val]) {
      return val;
    }
  });
  finalOnes = finalOnes.map((val) => {
    if (val.includes("_schools")) {
      console.log("vallll   " + val);
      let temp = `${val
        .replaceAll(/_schools/g, "")
        .replaceAll(/_/g, " ")
        .toUpperCase()}`;
      console.log(
        "vallll2   " +
          temp +
          "   " +
          val
            .replaceAll(/_schools/g, "")
            .replaceAll(/_/g, " ")
            .toUpperCase()
      );
      return temp;
    } else {
      return val;
    }
  });
  return (
    <>
      <ListSchool onClick={() => console.log(finalOnes)}>
        <div className="section1 listSection1">
          <div className="schoolImgCont">
            <div className="mainImg">
              <Image
                layout="intrinsic"
                alt={`${school.fields.name} building`}
                src={`${url}G-${school.fields.Image_Code}.png`}
                width={300}
                height={150}
              />
            </div>
            <div className="options">
              <div className="option">
                {" "}
                <Image
                  layout="intrinsic"
                  src={`${url}G-${school.fields.Image_Code}.png`}
                  alt={`${school.fields.name} building`}
                  width={12000}
                  height={700}
                />
              </div>
              <div className="option">
                {" "}
                <Image
                  layout="intrinsic"
                  src={`${url}H-${school.fields.Image_Code}.png`}
                  alt={`${school.fields.name} classroom`}
                  width={400}
                  height={300}
                />
              </div>
              <div className="option" style={{ marginRight: "0px" }}>
                {" "}
                <Image
                  layout="intrinsic"
                  src={`${url}I-${school.fields.Image_Code}.png`}
                  alt={`${school.fields.name} students`}
                  width={300 / 3 - 5}
                  height={125 / 3 - 3}
                />
              </div>
            </div>
          </div>
          <div className="schoolInfo">
            <h3>{School.name}</h3>
            <div className="starsAndVotes">
              {[...new Array(5)].map((star, index) => (
                <svg
                  key={index}
                  width="25"
                  height="25"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 34.3167L36.3094 44.6667L31.0238 27.9534L44.8333 17.8334H27.8972L22.5 0.583374L17.1027 17.8334H0.166626L13.9761 27.9534L8.69051 44.6667L22.5 34.3167Z"
                    fill={
                      Math.floor(School.rating ? School.rating : 0) > index
                        ? "#FFA800"
                        : "#80808057"
                    }
                  />
                </svg>
              ))}
              <span>
                {" "}
                <span style={{ color: "#ffa800", marginLeft: "30px" }}>
                  {" "}
                  {School.rating ? School.rating.toFixed(1) : "0.0"}
                </span>{" "}
                {"(" +
                  (School.numOfReviews ? School.numOfReviews : 0) +
                  "votes)"}
              </span>
            </div>
            <address>
              {" "}
              <img
                style={{ width: "10px", marginRight: "5px" }}
                src="/locationIcon.svg"
                alt="location"
              />{" "}
              {school.fields.fullAddress + ", " + school.fields.State}
            </address>
            <span className="info">
              {" "}
              School Category :
              <span>
                {`${School.day_boarding_schools ? "Day Boarding" : ""}
    ${School.full_boarding_schools ? " Full Boarding" : ""}
    ${School.day_schools ? " Day School" : ""}`}{" "}
              </span>
            </span>
            <span className="info">
              {" "}
              Curriculum :
              <span> {finalOnes?.toString().replaceAll(/,/g, ", ")}</span>
            </span>
            <span className="info">
              {" "}
              School Type :
              <span>
                {" "}
                {` ${
                  School.coed_schools
                    ? "Co-Ed School"
                    : School.girls_schools
                    ? "Girls School"
                    : "Boys School"
                }`}
              </span>
            </span>
            <span className="info" onClick={() => console.log(school.fields)}>
              {" "}
              Grade Upto :
              <span> {School.classfrom + " to " + School.classto} </span>
            </span>
            <span className="info">
              {" "}
              Establishment Year :<span> {school.fields.establishment} </span>
            </span>
          </div>
          <div className="priceAndButtons">
            <span style={{ fontSize: "11px" }}>
              Fee: {school.fields.feefrom ? school.fields.feeto + " to " : ""}{" "}
              {school.fields.Maximum_Fees} <small>/year</small>{" "}
            </span>
            <Link href={`/schools/${School.sheetName}/${School.slug}`}>
              <a style={{ background: "#3954A5" }}>VIEW SCHOOL</a>
            </Link>
            <Link href={`/schools/${School.sheetName}/${School.slug}/#review`}>
              <a
                style={{
                  background: "white",
                  color: "#3954A5",
                  border: "1px solid #3954A5",
                }}
              >
                WRITE A REVIEW
              </a>
            </Link>
            <a
              className="callbutton"
              onClick={popUp}
              style={{ background: "#31B43E" }}
            >
              {" "}
              <span style={{ marginRight: "12px", width: "18px" }}>
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 34 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.3475 23.7108C26.605 23.7108 24.9192 23.4025 23.3467 22.8475C22.8508 22.6625 22.2983 22.8013 21.9158 23.2175L19.6917 26.2546C15.6825 24.1733 11.9283 20.2421 9.93083 15.725L12.6933 13.1658C13.0758 12.7342 13.1892 12.1329 13.0333 11.5933C12.5092 9.88208 12.24 8.0475 12.24 6.15125C12.24 5.31875 11.6025 4.625 10.8375 4.625H5.93583C5.17083 4.625 4.25 4.995 4.25 6.15125C4.25 20.4733 15.2008 32.375 28.3475 32.375C29.3533 32.375 29.75 31.4037 29.75 30.5558V25.2371C29.75 24.4046 29.1125 23.7108 28.3475 23.7108Z"
                    fill="white"
                  />
                </svg>
              </span>{" "}
              GET A CALL
            </a>
          </div>
        </div>
        <div className="popUpEnquire">
          <div className="innerPopDiv">
            <span onClick={popUp}>x</span>
            <EnquireForm id={school.id} name={School.name} slug={School.slug} />
          </div>
        </div>
      </ListSchool>
    </>
  );
}

export default listSchool;
