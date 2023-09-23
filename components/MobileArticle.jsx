'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
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

const MobileArticle = ({ categoryData,param }) => {
    // console.log()
  const [btn, setbtn] = useState(true);
  const [art, setArt] = useState("");

  useEffect(() => {
    if (categoryData != undefined || categoryData != "") {
      setArt(categoryData?.article);
    }
  }, [categoryData]);

  let prevState = false;

  const [isReadMoreShown, setReadMoreShown] = useState(prevState);

  const togglebtn = () => {
    setReadMoreShown((prevState = !prevState));
  };

  return (
    <div className="lg:hidden">
      <div className=" flex text-center items-center gap-2 justify-center lg:text-3xl text-xl mt-16 lg:-mt-4">
        <span>
          <div className="lg:border-2 border-[1px] lg:w-44 w-20 border-[#2F3F93]"></div>
        </span>
        <h2 className="uppercase tracking-wide">{param?.slug.split('-').join(" ")}</h2>
        <span>
          <div className="lg:border-2 border-[1px] lg:w-44 w-20 border-[#2F3F93]"></div>
        </span>
      </div>
      <div className="lg:hidden justify-center px-10 mt-12">
        <ArticleSection>
          <div
            className="innerDiv"
            dangerouslySetInnerHTML={{ __html: art }}
          ></div>
          <div className="text-blue-700 text-right pr-5 cursor-pointer hover:underline">
            <span onClick={togglebtn}>
              {/* {isReadMoreShown ? "Read Less" : "Read More"} */}
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
            <Link to="/Author">
              <a style={{ color: "blue", fontSize: "13px" }}>Sakshi Padiyar</a>
            </Link>{" "}
          </span>
        </ArticleSection>
      </div>
    </div>
  );
};

export default MobileArticle;
