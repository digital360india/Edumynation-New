import Script from 'next/script';
import Testimonials from '@/components/Testimonial';
import ListingHero from '@/components/ListingHero';
import SchoolCard from '@/components/SchoolCard';
import Faq from '@/components/Faq';
import  {base}  from '@/api/airtable.jsx';
import Head from 'next/head';
async function get(params)
{
  const categoryData = await base("category 2")
     .select({
       filterByFormula: `slug= "${params}"`,
     })
     .all()
     .then((value) => {
       return value[0]?.fields;
     });
     return categoryData;
}


// SSR
export async function generateMetadata({ params })
 {  
  const categoryData = await base("category 2")
     .select({
       filterByFormula: `slug= "${params.slug}"`,
     })
     .all()
     .then((value) => {
       return value[0]?.fields;
     });
  return{
      title: categoryData?.title,
      description: categoryData?.meta_description ,
      keywords: categoryData?.keywords ,
      authors: [{ name: categoryData?.author }],
      openGraph: {
       title:categoryData?.title,
       description:categoryData?.meta_description,
       url:`https://www.edumynation.com/${params.slug}`,
       locale:'en_US',
       type:'website',
       images: [
        {url: categoryData?.featuredImg},
       ],
       siteName: "EduMyNation",
       siteName: "EduMyNation School Search Portal",
      //  publisher:"https://www.facebook.com/edumynation/",
      
      },
      themeColor:"#163696",
      robots:{
        googleBot:{
          index:true,
          follow:true,
        }
      },
      twitter:{
        card:"summary",
        title:categoryData?.title,
        description:categoryData?.meta_description,
        card: categoryData?.featuredImg,
        image:categoryData?.featuredImg,
        site: "@edumynation",
        creator: "@edumynation",
      },
      
      alternates:{
        canonical:`https://www.edumynation.com/category/${params.slug}`,
      },

    };
  }

//Main function
export default async function ListingPage({params}) {
  const categoryData=await get(params.slug);
  console.log(categoryData)
  return (
    <>
    <head>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryData.schema) }}
      />
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryData.schema2) }}
      />
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryData.schema3) }}
      />
    </head>
     
    
    <div className=''>
<ListingHero categoryData={categoryData}></ListingHero>
          <SchoolCard categoryData={categoryData} />  
          <Faq categoryData={categoryData} />
          <Testimonials />
          </div>
    </>
  );
};



 

