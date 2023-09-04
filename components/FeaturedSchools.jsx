import Link from 'next/link'
import styled from "styled-components";

const FeaturedSchools=styled.div`
margin-left: 20px;
margin-top: 42px;
box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
padding:10px;
margin-right:10px;

h2{
    color: #3954A5;
    font-size: 20px;
    margin-bottom: 6px;
}
.listHere{
    font-size: 16px;
    color: gray;
    font-weight: 700;
    margin-top:0px;
}
.innerfeaturedSchoolsDiv{
    filter: blur(8px);
}
.featuredSchool{
    
    display: flex;
    align-items: center;
    margin-bottom:30px;
}
.featuredSchool img{
    width: 90px;
    height: 90px;
    min-width: 90px;
    margin: auto 20px;
    margin-left: 0;

}
h5{
    color: #000000a6;
    margin: 0;
    width: 100%;
    font-size: 16px;

}
.city{
    display: block;
    margin-bottom: 6px;
    color: #808080bd;

}
.readMore{
    color: #163696;
}
@media (max-width:700px){
    .featuredSchool{
        width: 50%;
    }
}
@media(max-width:500px){
    margin: 24px auto;
    width: 92%;
    .featuredSchool{
        width: 100%;
        justify-content: start !important;
    }
}
`;

function featuredSchools() {
    const featuredSchools=[{
        src:"Vantage-Hall-Dehradun",
url:"/schools/vantage-hall-girls-resedential-school-dehradun",
name:"Vantage Hall Girls Resedential School"
    },
{
    src:"The-Indian-Cambridge-School-Dehradun",
    url:"/schools/the-indian-cambridge-school-dehradun",
name:"The Indian Cambridge School"
},
{
    src:"Welham-Girls-Dehradun",
    url:"/schools/welham-girls-school-dehradun",
    name:"Welham Girls' School"
},
{
    src:"Unison-World-School-Dehradun",
    url:"/schools/unison-world-school-dehradun",
    name:"Unison World School"
}
]
    return (
        <FeaturedSchools>
<h2>Featured Schools</h2>
    <p className="listHere">Your school can be listed here</p>
<div className="innerfeaturedSchoolsDiv">
{
featuredSchools.map((school, index)=>(
<div key={index} className="featuredSchool">
<img src={"/"+school.src+".png"} alt=""/>
<div className="featuredSchoolInfo">
    <h5>{school.name}</h5>
    <span className="city">Dehradun</span>
    <span className="readMore">
        Read More
        </span>
</div>
</div>
))
}
</div>
            
        </FeaturedSchools>
    )
}

export default featuredSchools