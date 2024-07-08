'use client';

import Hero from '../components/pages/home/hero-section/Hero';
import Resources from '../components/pages/home/resources-section/Resources';
import SchoolByCities from '../components/pages/home/school-by-cities-section/SchoolByCities';
import StudentServices from '../components/pages/home/student-services-section/StudentServices';
import FeaturedSchools from '../components/pages/home/featured-schools-section/FeaturedSchools';
import AboutUs from '../components/pages/home/about-us-section/AboutUs';
import Testimonials from '../components/pages/home/testimonials-section/Testimonials';
import ContactUsForm from '../components/pages/home/contact-us-form-section/ContactUsForm';


export default function Home() {

  return (
    <>
      <Hero/>
      <Resources/>
      <SchoolByCities/>
      <StudentServices/>
      <FeaturedSchools/>
      <AboutUs/>
      <Testimonials/>
      <ContactUsForm/>
    </>
  );
}



  

     

