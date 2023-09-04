'use client';

import Link from 'next/link'
import styled from "styled-components";
import { useState } from 'react';

const ArticleSection = styled.article`
width: 95%;
    margin: auto;
    box-shadow: 0 2px 5px -1px rgb(0 0 0 / 30%);
    padding: 25px;
    margin-top: 10px;
    p{
        font-size:12px;
    }
    h1{
        font-size:20px;
    }
    h2{
        font-size:18px;
    }
    h3{
        font-size:16px;
    }
`;

function article({article}) {
   let prevState = false

    const [ isReadMoreShown, setReadMoreShown ] = useState(prevState);


const togglebtn = ()=> {
    setReadMoreShown (prevState = !prevState)

}


    return (
        <ArticleSection >
            {isReadMoreShown ? <div className="innerDiv" dangerouslySetInnerHTML={{ __html: article }}>
            </div> : <div className="innerDiv" dangerouslySetInnerHTML={{ __html: article.substr(0,1800) }}>
            </div>}
            <div style={{color: "blue", cursor: "pointer" , textAlign:"right" }}>
            <span  onClick={togglebtn}>{isReadMoreShown ? "Read Less" : "Read More"}</span>
            </div>
            {/* | updated on {date} */}
            <span style={{    color: "grey", margin:"10px auto", display:'block', width:"fit-content", fontSize:"15px"}} className="dates">Author - <Link href="/authors/sakshi-padiyar"><a style={{ color: "blue", fontSize: "13px"}}>Sakshi Padiyar</a></Link> </span>

       </ArticleSection>
    )
}

export default article