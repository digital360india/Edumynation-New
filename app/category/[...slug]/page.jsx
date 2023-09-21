
import Testimonials from '@/components/Testimonial';
import ListingHero from '@/components/ListingHero';
import SchoolCard from '@/components/SchoolCard';
import Faq from '@/components/Faq';
import  {base}  from '@/api/airtable.jsx';
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
      schema: categoryData?.schema ,
      schema2: categoryData?.schema2 ,
      schema3: categoryData?.schema3,
    };
 }

 
//Main function
export default async function ListingPage({params}) {
  const categoryData=await get(params.slug);
  return (
    <>
    <div className=''>
<ListingHero categoryData={categoryData}></ListingHero>
          <SchoolCard categoryData={categoryData} />  
          {/* <MobileArticle categoryData={categoryData} /> */}
          <Faq categoryData={categoryData} />
          <Testimonials />
          </div>
    </>
  );
};



 

