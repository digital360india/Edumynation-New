'use client';

import React, { useState,useEffect } from "react";
import styled from "styled-components";

const MainDiv = styled.ul`
display:flex;
list-style: none;
margin-top:20px;
padding: 0;
li{
    color: #7b7777;
    margin-right: 8px;
    font-size:calc(0.7em + 1vw);
    cursor:pointer;
}
@media (min-width: 800px) {
  li{
    font-size:calc(0.6em + 0.7vw);

  }
}
`;

function pagiBar({ pagenate, per, total, currentPage, scrollDiv }) {
  const [add, setAdd] = useState(0);
  const curNum = [];
  function addFun(value) {
  
    if (value == 2 && curNum[value + 1 + add]) {
      setAdd(add + 1);
    }
    if (value == 0 && curNum[value + add]) {
      setAdd(add - 1);

    }
  }

  for (let i = 0; i < Math.ceil(total / per); i++) {
    curNum.push(i);
  }
  const [div,setDiv]=useState<any>();
  useEffect(() => {
    setDiv(document.querySelector<any>(scrollDiv));
  }, []);
useEffect(() => {
  
  if(currentPage==1){
    setAdd(0);
  }else if(currentPage>1){
     setAdd(currentPage-1);
  }
}, [currentPage])

  return (
    <MainDiv>
      <li>
        <span
          onClick={() => {
            // currentPage-2
            addFun(0);
            pagenate(div,currentPage-1 <= 0 ? 1 :  currentPage-1);
          }}
        >
          {`<pre`}
        </span>
      </li>
      {curNum.map(
        (value, index) =>
          index < 3 && (
            <li key={index} style={{color: `${value+1+add==currentPage ? "#0074ad" : "#7b7777"}`}}>
              <span
                onClick={() => {
                        addFun(value);
                  pagenate(div,value + 1 + add);
                }}
                    >
                {value + 1 + add}
              </span>
            </li>
          )
      )}
      <li>
        <span
          onClick={() => {
            // currentPage
            addFun(2);
            pagenate(div,currentPage+1 > curNum.length ? curNum.length :  currentPage+1);
          }}
        >
          {`next>`}
        </span>
      </li>
    </MainDiv>
  );
}

export default pagiBar;