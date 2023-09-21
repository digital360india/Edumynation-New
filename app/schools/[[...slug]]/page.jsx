import SchoolDetails from '@/components/SchoolDetails'
import { base, baseRe } from "@/api/airtable";
const data=[];
async function get(params)
{
  const schoolData = await base(params[0])
     .select({
       filterByFormula: `slug= "${params[1]}"`,
     })
     .all()
     .then((value) => {
       return value[0]?.fields;
     });
     return schoolData;
     
}
async function get1(params){
  const review = await baseRe(params[0] + "-reviews")
     .select({
       filterByFormula: `schoolSlug= "${params[1]}"`,
     })
     .all()
     .then((value) => {
      value.map((a)=>{
        data.push(a.fields);
        
      })
       return value;

     });
      
     return review
}



// SSR
export async function generateMetadata({ params })
 {  

  const schoolData=await get(params.slug);

  return{
      title: schoolData?.name,
      description: schoolData?.Meta_Description ,
    };
 }

export default async function SchoolPage({params}) {
  console.log(params)
  const schoolData=await get(params.slug);
  await get1(params.slug);
  return (
    <>
    <div className=''>
      <SchoolDetails school={schoolData} reviews={data} city={params.slug[0]} />
   </div>
    </>
  );
};

