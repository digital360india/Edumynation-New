'use client'
import Link from 'next/link';
import React,{useState} from 'react'
import styled from "styled-components";
const ArticleSection = styled.article`
  width: 95%;
  margin: auto;
  box-shadow: 0 2px 5px -1px rgb(0 0 0 / 30%);
  padding: 25px;
  margin-top: 10px;
  p {
    font-size: 14px;
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
`;
function Article1({art}) {
    let prevState = false;

  const [isReadMoreShown, setReadMoreShown] = useState(prevState);
    const togglebtn = () => {
        setReadMoreShown((prevState = !prevState));
      };
  return (
    <div className="flex  sm:hidden bg-white  justify-center px-10 mt-12">

    <ArticleSection>
    {isReadMoreShown ? (
      <div
        className="innerDiv text-black"
        dangerouslySetInnerHTML={{ __html: art }}
      ></div>
    ) : (
      <div
        className="innerDiv text-black"
        dangerouslySetInnerHTML={{
          __html: art != undefined ? art.substr(0, 1800) : "",
        }}
      ></div>
    )}
    <div className="text-blue-700 text-right pr-5 cursor-pointer hover:underline">
      <span onClick={togglebtn}>
        {isReadMoreShown ? "Read Less" : "Read More"}
      </span>
    </div>
    <span
      style={{
        color: "grey",
        margin: "10px auto",
        display: "block",
        width: "fit-content",
        fontSize: "15px",
      }}
      className="dates"
    >
      Author -{" "}
      <Link href="/Author">
        Sakshi Padiyar
      </Link>{" "}
    </span>
  </ArticleSection>
  

  </div>
  )
}

export default Article1
