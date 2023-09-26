import Testimonials from "@/components/Testimonial";
import ListingHero from "@/components/ListingHero";
import SchoolCard from "@/components/SchoolCard";
import Faq from "@/components/Faq";
import { base } from "@/api/airtable.jsx";
async function get(params) {
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
export async function generateMetadata({ params }) {
  const categoryData = await base("category 2")
    .select({
      filterByFormula: `slug= "${params.slug}"`,
    })
    .all()
    .then((value) => {
      return value[0]?.fields;
    });
  return {
    title: categoryData?.title,
    description: categoryData?.meta_description,
    keywords: categoryData?.keywords,
    authors: [{ name: categoryData?.author }],

    alternates: {
      canonical: `https://www.edumynation.com/category/${params.slug}`,
    },
    openGraph: {
      title: categoryData?.title,
      description: categoryData?.meta_description,
      url: `https://www.edumynation.com/${params.slug}`,
      locale: "en_US",
      type: "website",
      images: [{ url: categoryData?.featuredImg }],
      siteName: "EduMyNation",
      siteName: "EduMyNation School Search Portal",
    },
    robots: {
      googleBot: {
        index: true,
        follow: true,
      },
    },
    twitter: {
      card: "summary",
      title: categoryData?.title,
      description: categoryData?.meta_description,
      card: categoryData?.featuredImg,
      image: categoryData?.featuredImg,
      site: "@edumynation",
      creator: "@edumynation",
    },
  };
}

//Main function
export default async function ListingPage({ params }) {
  const categoryData = await get(params.slug);
  // console.log(categoryData);
  return (
    <>
      <head>
        <script
        defer={true}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categoryData.schema,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categoryData.schema2,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categoryData.schema3,
          }}
        />
      </head>


      <div className="bg-white">
        <ListingHero categoryData={categoryData}></ListingHero>
        <SchoolCard categoryData={categoryData} />
        <Faq categoryData={categoryData} />
        <Testimonials />
      </div>
    </>
  );
}
