import Head from 'next/head'

function homeSchema({data,schools}) {
    console.log(data?.scripts?.split(",")[0]);
    return (
        <Head>
            <script defer src={data?.scripts?.split(",")[0]}></script>
    <script
             defer={true}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: 
                   data.schema
    }}/>
    <script
             defer={true}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: 
        JSON.stringify(
       {
        "@context": "http://schema.org",
        "@type": "ItemList",
        "numberOfItems":10,
        "itemListElement": [...new Array(schools.length>10 ? 10 : schools.length)].map((val,index)=>(
            {
                "@type": "ListItem",
                "position": index + 1,
                "url": `http://www.edumynation.com/schools/${schools[index].fields.sheetName}/${schools[index].fields.slug}`
            }
            ))   
    }
        )
       
    }}/>
      
  <script

             defer={true}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: 
                   data.schema2 ? data.schema2 : ''
                    
    }}/>
      <script
             defer={true}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: 
                   data.schema3 ? data.schema3 : ''
                    
    }}/>
     <script
             defer={true}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: 
                   data.schema4 ? data.schema4 : ''
                    
    }}/>

</Head>
    )
}

export default homeSchema