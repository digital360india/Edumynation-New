import Head from 'next/head'
const Meta = ({data,url}) => (      
<Head>
<meta charSet="UTF-8"/>
<meta name="theme-color" content="#163696"/>
<title> {data.title? data.title : `${data.name}- reviews, fees and all details`} </title>
<meta name="description" content={data.meta_description}/>
<meta name="keywords" content={data.keywords}/>
<meta name="author" content="Author name"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="googlebot" content="index,follow"/>
<link rel="icon" href="/favicon.ico"/>
<link rel="canonical" href={url}/>
{/* og tags */}
<meta property="og:title" content={data.title} />
<meta property="og:description" content={data.meta_description} />
<meta property="og:url" content={url} />
<meta property="og:locale" content="en"/>
<meta property="og:type" content="website" />
<meta property="og:image" content={data.featuredImg} />
<meta property="og:site_name" content="EduMyNation"/>
<meta property="website:publisher" content="https://www.facebook.com/edumynation/"/>
{/* <meta property="og:updated_time" content="date time"/> */}
{/* Twitter Card Tags */}
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content={data.title}/>
<meta name="twitter:description" content={data.meta_description} />
<meta name="twitter:card" content={data.featuredImg}/>
<meta name="twitter:image" content={data.featuredImg}/>
<meta name="twitter:site" content="@edumynation"/>
<meta name="twitter:creator" content="@edumynation"/>
<meta property="og:locale" content="en_IE"/>
<meta property="og:site_name" content="EduMyNation School Search Portal"/>
</Head>
)
export default Meta;