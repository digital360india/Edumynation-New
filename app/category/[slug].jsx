'use client';

import { useEffect, useContext, useState } from "react";
import { SchoolContext } from "@/context/schoolcontext";
import MetaData from "@/components/CategoryMeta";
import Schema from "@/components/CategorySchema";
import ListSchool from "@/components/ListSchool";
import Form from "@/components/Form/CounsellorForm";
// import FeaturedSchools from "@/components/FeaturedSchools";
import { useRouter } from "next/router";
import { minifyRecords, base } from "@/api/airtable";
import styled from "styled-components";
// import SearchDiv from "../../components/searchWithBackground";
import Article from "@/components/Article";
import Bar from "@/components/Bar";
import Faq from "@/components/Faq";

const MainCont = styled.div`
  .articleCont {
    h1 {
      width: fit-content;
      margin: 41px auto auto;
      padding-bottom: 12px;
      text-align: center;
      color: rgba(0, 0, 0, 0.6);
      text-transform: capitalize;
      font-size: 24px;
    }
  }
  @media (min-width: 800px) {
    .articleCont {
      h1 {
        font-size: 30px;
      }
    }
  }
`;

const CategoryDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  .schools {
    .topSpan {
      display: block;
      line-height: 40px;
      margin-left: 20px;
      span {
        font-size: 12px;
        padding-left: 20px;
      }
    }
  }
  .schools {
    width: 75%;
  }
  .schoolPages {
    margin-left: 20px;
  }
  .schoolPages span {
    margin-right: 15px;
  }
  .schoolPages .pageButton {
    cursor: pointer;
  }
  .activeee {
    color: #8a7e7e;
  }
  .remove {
    display: none;
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    display: flex;
    align-items: center;
    .schools .topSpan {
      margin-left: 0px;
    }
    .schools {
      width: 95%;
    }
    .featuredSchoolDivv .innerfeaturedSchoolsDiv {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 450px) {
    .sideForm{
      display:none;
    }
    .featuredSchoolDivv .innerfeaturedSchoolsDiv .featuredSchool {
      justify-content: center;
    }
  }
`;
let styleNum = 1;

function category({ initialSchools, categoryData, initialList }) {
    console.log(categoryData)
  const [currentPage, setCurrentPage] = useState(1);
  const [width, setWidth] = useState(0);

  const [schoolUp, setSchoolUp] = useState(false);
  console.log("categoryyyyyyy");
  const router = useRouter();
  console.log(router.pathname);
  const slug = router.query.slug;
  const { setSchools, schools, setSchool } = useContext<any>(SchoolContext);
  let arraySlug = `${slug}`.split("-");
  let subSlug = arraySlug.slice(0, arraySlug.length - 2);
  let filterr = subSlug.toString().replace(/,/g, "_");
  let realNumOfRevShown = 30;
  const [numOfSchoolsShown, setNumOfSchoolsShown] = useState(
    schools.length < realNumOfRevShown ? schools.length : realNumOfRevShown
  );
  const [test, setTest] = useState(false);
  setSchool();
  function filter() {
    setSchools(initialSchools);
    const array = `${slug}`.split("-");
    const filterIndex = array
      .slice(0, array.length - 2)
      .join()
      .replace(/,/g, "_");
    let prop;
    if (
      (filterIndex.includes("girls") || filterIndex.includes("boys")) &&
      filterIndex[2]
    ) {
      let temp = array
        .slice(1, array.length - 2)
        .join()
        .replace(/,/g, "_");
      prop = [`${array[0]}_schools`, temp];
      finalFilter(prop, false);
    } else {
      prop = [filterIndex];
      finalFilter(prop, false);
    }
  }

  function finalFilter(prop, form, range = null) {
    if (!form) {
      setSchools((main) =>
        initialSchools.filter((val, index) => {
          for (let i = 0; i < prop.length; i++) {
            if (prop[i] == "schools") {
              return val;
            }
            if (prop[i] == "boarding_schools") {
              if (
                !val.fields.full_boarding_schools
              ) {
                return;
              }
            } else if (prop[i] == "international_schools") {
              if (
                !val.fields.ib_schools &&
                !val.fields.cie_schools &&
                !val.fields.igcse_schools
              ) {
                return;
              }
            } else if (!val.fields[prop[i]]) {
              return;
            }
          }
          return val;
        })
      );
    } else if (form) {
      setSchools((main) =>
        initialSchools.filter((val, index) => {
          if (
            ((val.fields.feefrom < range.min ||
              val.fields.feefrom > range.max) &&
              (val.fields.feeto > range.max || val.fields.feeto < range.min)) ||
            (!val.fields.feefrom && !val.fields.feeto)
          ) {
            return;
          }
          for (let i = 0; i < prop[0].length; i++) {
            if (val.fields[prop[0][i]]) {
              break;
            } else if (i + 1 == prop[0].length) {
              return;
            }
          }
          for (let x = 0; x < prop[1].length; x++) {
            if (prop[1][x] == "boarding_schools") {
              if (
                val.fields.full_boarding_schools
              ) {
                break;
              } else if (x + 1 == prop[0].length) {
                return;
              }
            }
            if (prop[1][x] == "international_schools") {
              if (val.fields.ib_schools || val.fields.cie_schools) {
                break;
              } else if (x + 1 == prop[0].length) {
                return;
              }
            }
            if (val.fields[prop[1][x]]) {
              break;
            } else if (x + 1 == prop[1].length) {
              return;
            }
          }
          for (let y = 0; y < prop[2].length; y++) {
            if (val.fields[prop[2][y]]) {
              return val;
            } else if (y + 1 == prop[2].length) {
              return;
            }
          }
          return val;
        })
      );
    }
  }

  useEffect(() => {
    filter();
    setSchoolUp(!schoolUp);
    setWidth(window.innerWidth);
  }, [initialSchools]);
  useEffect(() => {
    console.log(numOfSchoolsShown + "numOfSchoolsShown");
    if (
      (schools.length < numOfSchoolsShown && schools.length > 0) ||
      (schools.length > numOfSchoolsShown &&
        numOfSchoolsShown < realNumOfRevShown)
    ) {
      setNumOfSchoolsShown(
        schools.length < realNumOfRevShown ? schools.length : realNumOfRevShown
      );
      console.log("seeeeeeingigngi");

      console.log(schools.length);
    }
    console.log("wwwwwwwwww");
  }, [test]);

  console.log(initialSchools);

  const [nextNum, setNextNum] = useState(0);
  const [displayNum, setDisplayNum] = useState(1);
  let numOfPages = schools.length / numOfSchoolsShown;
  console.log(categoryData);
  if (router.isFallback) {
    return;
  }
  setSchools(initialSchools);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = schools.slice(indexOfFirstPost, indexOfLastPost);
  function pagenate(div, num) {
    console.log(num);
    if (num !== currentPage) {
      div.scrollIntoView();
    }
    setCurrentPage(num);
  }
  return (
    <MainCont>
      {categoryData[0] && (
        <MetaData
          data={categoryData[0].fields}
          url={`https://edumynation.com${router.asPath}`}
        />
      )}
      {schools[0] && categoryData[0] && (
        <Schema data={categoryData[0].fields} schools={schools} />
      )}
      {categoryData[0] && (
        <SearchDiv data={initialList} cate={categoryData[0].fields} />
      )}
      {categoryData[0] && width > 800 && (
        <div className="articleCont">
          <h1 className="h1About">
            {categoryData[0].fields.slug.replace(/-/g, " ").toLowerCase()
               .replace(/abudhabi/g, "Abu Dhabi")
               .replace(/alain/g, "Al Ain")
            }
          </h1>
          <Article article={categoryData[0].fields.article} />
        </div>
      )}
      <CategoryDiv onClick={() => console.log(numOfSchoolsShown)}>
        <div className="schools">
          <span
            className="topSpan"
            style={{
              fontSize: "14px",
              wordSpacing: "8px",
              marginTop: "30px",
              background: "#F1F1F1",
              padding: "5px 10px",
              borderRadius: "4px 4px 0 0",
              borderBottom: "1px solid #d6d6d6",
            }}
          >
            {"Home  > category  >  "}
            <span
              style={{
                display: "contents",
                color: "blue",
                wordSpacing: "normal",
              }}
            >
              {`LIST OF ${slug}`.replace(/-/g, " ").toUpperCase()}
            </span>{" "}
          </span>
          <span
            className="topSpan schoolss"
            style={{
              background: "#F1F1F1",
              padding: "5px 10px",
              borderRadius: "0 0 4px 4px",
            }}
          >{`Showing Page ${Math.ceil((nextNum + 1) / 10)} - ${Math.ceil(
            schools.length / 10
          )} Results : ${schools.length}`}</span>
          {schools.length > 0 &&
            schools.length >= numOfSchoolsShown &&
            currentPosts.map((school, index) => (
              <ListSchool
                school={school}
                key={index}
              />
            ))}
          {schools.length > 0 && (
            <Bar
              currentPage={currentPage}
              pagenate={pagenate}
              total={schools.length}
              per={postsPerPage}
              scrollDiv={".schoolss"}
            />
          )}
        </div>
        <div className="sideBar">
          <div className="sideForm">
          <Form />
          </div>
          {width > 800 && (
            <div className="featuredSchoolDivv">
              <FeaturedSchools />
            </div>
          )}
        </div>
      </CategoryDiv>
      {categoryData[0] && width <= 800 && (
        <div className="articleCont">
          <h1 className="h1About">
            {categoryData[0].fields.slug.replace(/-/g, " ").toLowerCase()}
          </h1>
          <Article article={categoryData[0].fields.article} />
        </div>
      )}
      {categoryData[0]?.fields.FAQ && (
        <div className="faqCont">
          <Faq data={categoryData[0].fields} />
        </div>
      )}
    </MainCont>
  );
}

export default category;

export async function getServerSideProps(context) {
  try {
    const slug = context.params.slug.split("-");
    const tableee = slug[slug.length - 1];
    const schools = await base(tableee)
      .select({
      })
      .all();
    const list = await base("city").select({}).all();

    const categoryData = await base("category 2")
      .select({
        filterByFormula: `slug= "${context.params.slug}"`,
      })
      .all();
    return {
      props: {
        initialSchools: minifyRecords(schools),
        categoryData: minifyRecords(categoryData),
        initialList: minifyRecords(list),
      },
    };
  } catch (err) {
    return {
      props: {
        err: "Something went wrong",
      },
    };
  }
}