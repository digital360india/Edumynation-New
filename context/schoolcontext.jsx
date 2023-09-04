'use client';

import {useEffect} from "react";
import { createContext, useState } from "react";


const SchoolContext = createContext<any>([]);
const SchoolsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [tab, setTab] = useState('');
    const [reviewsTab, setReviewsTab] = useState('');
    useEffect(() => {
    setReviewsTab(tab+"-reviews");
    }, [tab])

    const [error, setError]=useState<boolean>(false);
    const [errorEn, setErrorEn]=useState<boolean>(false);
    const [errorCt, setErrorCt]=useState<boolean>(false);
    const [upRev, setUpRev]=useState<boolean>(false);


    const [fbOrG, setFbOrG] = useState();

    console.log(error);
  const [schools, setSchools] = useState<any>([]);
  const [reviewFormDetails, setReviewFormDetails] = useState<any>({
    academics: null,
    infrastructure: null,
    administration: null,
    parentRating: null,
    extracurricular: null,
    schoolRating: null,
    title: null,
    reviewmessage: null,
  });
  const [school,setSchool]=useState<any>(false);
  const [mainRating, setMainRating] = useState<any>(false);
  const [user, setUser] = useState({
    userName: undefined,
    userId: undefined,
    userEmail: undefined,
    userImg: undefined,
  });

  const refreshSchools = async () => {
    try {
      const res = await fetch("/api/getSchools");
      const latestSchools = await res.json();
      setSchools(latestSchools);
    } catch (err) {
      console.error(err);
    }
  };
  const refreshReviews = async (schoolSlug) => {
    try {
      const res = await fetch(`/api/getReviews/${schoolSlug}`, {
        method: "POST",
        body: JSON.stringify({tab }),
        headers: { "Content-Type": "application/json" },
      });
      const latestReviews = await res.json();
      setReviews(latestReviews);
      console.log(latestReviews);
      setUpRev(true);
      console.log(upRev);

    } catch (err) {
      setUpRev(false);
      console.log(err);
    }
  };

  const addReview = async (description) => {
    try {
      const res = await fetch("/api/createReview", {
        method: "POST",
        body: JSON.stringify({ description,tab }),
        headers: { "Content-Type": "application/json" },
      });
      const newReview = await res.json();
      setReviews([...reviews, newReview]);
      console.log(reviews);
      console.log("not sameeeeeeeee");
      console.log(newReview);
    } catch (err) {
      console.error(err);
    }
  };
  const addCounsellorForm = async (description) => {
    try {
      const res = await fetch("/api/createCouncellorForm", {
        method: "POST",
        body: JSON.stringify({ description }),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      setError(false);
    } catch (err) {
        setError(true);
      console.error(err);
    }
  };
  const addEnquireForm = async (description) => {
    try {
      const res = await fetch("/api/createEnquireForm", {
        method: "POST",
        body: JSON.stringify({ description }),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      setErrorEn(false);
    } catch (err) {
        setErrorEn(true);
      console.error(err);
    }
  };
  const addContactForm = async (description) => {
    try {
      const res = await fetch("/api/createContactForm", {
        method: "POST",
        body: JSON.stringify({ description }),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      setErrorCt(false);
    } catch (err) {
        setErrorCt(true);
      console.error(err);
    }
  };
  const updateSchool = async (updatedSchool) => {
    try {
      const res = await fetch("/api/updateSchool", {
        method: "PUT",
        body: JSON.stringify({updatedSchool,tab}),
        headers: { "Content-Type": "application/json" },
      });
     const updated= await res.json();
      setSchool(updated);
      console.log(updated);
      console.log("school");
    } catch (err) {
      console.error(err);
    }
  };
  const updateReview = async (updateReview) => {
    try {
      const res = await fetch("/api/updateReview", {
        method: "PUT",
        body: JSON.stringify({updateReview,tab}),
        headers: { "Content-Type": "application/json" },
      });
      await res.json();
      setReviews((preReview) => {
        const existingreviews = [...preReview];
        console.log(existingreviews);
        const existingReview = existingreviews.find(
          (review) => review.fields.userId === updateReview.fields.userId
        );
        existingReview.fields = updateReview.fields;
        console.log(existingreviews);
        return existingreviews;
      });
    } catch (err) {
      console.error("Context" + err);
    }
  };


  return (
    <SchoolContext.Provider
      value={{
        schools,
        setSchools,
        reviews,
        setReviews,
        refreshSchools,
        refreshReviews,
        updateSchool,
        updateReview,
        addReview,
        reviewFormDetails,
        setReviewFormDetails,
        user,
        setUser,
        mainRating,
        setMainRating,
        setSchool,
        school,
        addCounsellorForm,
        error,
        setError,
        errorEn,
        setErrorEn,
        addEnquireForm,
        addContactForm,
        errorCt,
        setErrorCt,
        fbOrG,
        setFbOrG,
        tab,
        upRev,
        setUpRev,
        setTab,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};
// testing
export { SchoolsProvider, SchoolContext };