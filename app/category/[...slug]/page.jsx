'use client'

import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import Airtable from "airtable";
// import { base } from "@/api/airtable";
import Head from "next/head";
const base = new Airtable({ apiKey: "keyTBOJFFyjyxeoUh" }).base("apprlGN38HXb6otby");
const ListingPage = ({params}) => {
  // const router = useRouter();
  // const { slug } = router.query.slug;
  console.log(params);

  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    // setLoader(true);
    base("category 2")
      .select({
        filterByFormula: `slug= "${params.slug}"`,
      })
      .all()
      .then((value) => {
        console.log(value[0]?.fields);
        setCategoryData(value[0]?.fields);
        // setLoader(false);
      });
  }, [params.slug]);

  // console.log("categoryData", categoryData);

  return (
    <>
      
          <Head>
            <title>{categoryData?.title}</title>
            <meta name='description' content={categoryData?.meta_description} />
            <meta name='keywords' content={categoryData?.keywords} />
            <script type="application/ld+json">{categoryData?.schema}</script>
            <script type="application/ld+json">{categoryData?.schema2}</script>
            <script type="application/ld+json">{categoryData?.schema3}</script>
          </Head>

          <div>Hello</div>
    </>
  );
};

export default ListingPage;
