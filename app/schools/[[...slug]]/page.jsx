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

  const categoryData=await get(params.slug);

  return{
    title: categoryData?.name,
    description: categoryData?.Meta_description,
    keywords: categoryData?.Meta_keywords ,
    openGraph: {
     title:categoryData?.name,
     description:categoryData?.Meta_description,
     url:`https://www.edumynation.com/${params.slug[0]}/${params.slug[1]}`,
     locale:['en_US','en_IE'],
     type:'website',
     images: [
      {url: `https://res.cloudinary.com/edumynationofficial/image/upload/${categoryData?.State}/${params.slug[0]}/${params.slug[1]}-building.jpg`},
     ],
     siteName: "EduMyNation",
    //  publisher:"https://www.facebook.com/edumynation/",
    //  updated_time: categoryData?.modified,
    
    },
    themeColor:"#163696",
    robots:{
      index:true,
      follow:true,
      'max-snippet':-1,
      'max-video-preview':-1, 
      'max-image-preview':'standard',
      googleBot:{
        index:true,
        follow:true,
      }
    },
    twitter:{
      card:"summary",
      title:categoryData?.name,
      description:categoryData?.Meta_description,
      card: `https://res.cloudinary.com/edumynationofficial/image/upload/${categoryData?.State}/${params.slug[0]}/${params.slug[1]}-building.jpg`,
      image:`https://res.cloudinary.com/edumynationofficial/image/upload/${categoryData?.State}/${params.slug[0]}/${params.slug[1]}-building.jpg`,
      site: "@edumynation",
      creator: "@edumynation",
    },
    
    alternates:{
      canonical:`https://www.edumynation.com/school/${params.slug[0]}/${params.slug[1]}`,
    }
  };
 }

export default async function SchoolPage({params}) {
  const schoolData=await get(params.slug);
  console.log(schoolData)
  await get1(params.slug);
  return (
    <>
    <head>
    <meta property="website:publisher" content="https://www.facebook.com/edumynation/"/>
    </head>
    <div className=''>
      <SchoolDetails school={schoolData} reviews={data} city={params.slug[0]} />
   </div>
    </>
  );
};

