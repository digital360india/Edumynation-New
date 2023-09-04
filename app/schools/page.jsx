'use client';

import SchoolDetails from '@/components/SchoolDetails'
import React from 'react'


const page = () => {

  // const { city,reviews,rating, schoolName } = useParams();
  // console.log(city)
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0 });
  // }, []);

  // const [schoolData, setSchoolData] = useState({});
  // const [loader, setLoader] = useState(false);
  // const [review, setReview] = useState([]);
  // const [Rating, setRating] = useState([]);
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   // setLoader(true);
  //   base(city)
  //     .select({
  //       filterByFormula: `slug= "${schoolName}"`,
  //     })
  //     .all()
  //     .then((value) => {
  //       setSchoolData(value[0]?.fields);
  //       setLoader(false);
  //     });
  // }, []);

  // // console.log(schoolData);

  // useEffect(() => {
  //   baseRe(city + "-reviews")
  //     .select({
  //       filterByFormula: `schoolSlug= "${schoolName}"`,
  //     })
  //     .all()
  //     .then((value) => {
  //       setReview(value);
  //     });
  // }, []);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  return (
    <>  
    <SchoolDetails />
    {/* <SchoolDetails schoolData={schoolData} reviewData={reviewData} /> */}
    </>
  )
}

export default page
