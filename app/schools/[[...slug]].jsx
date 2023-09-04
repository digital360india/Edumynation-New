// 'use client';

// import { minifyRecords, base, baseRe } from "../api/Airtable";
// import School from "../../components/schoolCom";
// import {useEffect, useContext} from "react";
// import  { useRouter } from "next/router";
// import {SchoolContext} from "../../context/schoolContext";
// import styled,{ createGlobalStyle } from 'styled-components';
// import MetaData from "../../components/schoolMeta";

// const GlobalStyle = createGlobalStyle`
// body {
//   margin: 0;
//   padding: 0;
//   background: #fff;
//   font-family: Inter;
//   scroll-behavior: smooth;
//   img{
//     object-fit:cover !important;s
//   }
// }
// `;

// const SchoolMainContainer=styled.div`
// min-height: 100%;
// `;
// export async function getServerSideProps(context) {
//   const slug = context.params.slug[1];
//   const tableee = context.params.slug[0];
//   const tableReview = tableee + "-reviews";
//   try {
//     const reviews = await baseRe(tableReview)
//       .select({
//         filterByFormula: `schoolSlug= "${slug}"`,
//       })
//       .all();
// const list = await base("city").select({}).all();

// const schools = await base(tableee)
// .select({
//   filterByFormula: `slug= "${slug}"`,
// })
// .all();
// console.log(reviews);
//     return {
//       props: {
//         initialSchools: minifyRecords(schools),
//         reviewsCollection: minifyRecords(reviews),
//         initialList: minifyRecords(list),
//       },
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       props: {
//         err: "Something went wrong",
//       },
//     };
//   }
// }

// function HomePage(props) {
//   const {initialSchools, reviewsCollection,initialList} = props; 
//    const {setReviews,tab,setSchool,school,setTab,reviews}=useContext<any>(SchoolContext);
// const router=useRouter();
// useEffect(() => {
//   setReviews(reviewsCollection);
//   console.log(initialList);
// }, [reviewsCollection]);

// useEffect(() => {
//   let slug=`${router.asPath}`;
//   let slugArray=slug.split("/");
//   setTab(slugArray[slugArray.length-2])
//   initialSchools && setSchool(initialSchools[0]);
//   console.log(school);
//   }, [initialSchools]);
//   if(router.isFallback){
//     return;
// }
//   return (
    
//     <SchoolMainContainer>
//       { initialSchools[0] &&
//         <MetaData data={initialSchools[0].fields} url={`https://edumynation.com${router.asPath}`}/>
//       }
//     <GlobalStyle/>
   
//     { school && initialSchools[0] &&
//         <School data={initialList} schools={initialSchools[0]}/>
//     }
//     </SchoolMainContainer>
// )}

// export default HomePage

