"use client";

import React, { useEffect } from "react";
import Head from "next/head";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="w-screen mt-16 md:mt-24 b   ">
        <div className=" bg-blue-900 flex justify-center ">
          <div className=" bg-white border-b-2 border-grey-800  w-[1200px] px-6">
            {" "}
            <div className="flex  justify-center mt-4">
              <img
                className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
                src="https://www.eduminatti.com/eduminatti-about-us.jpeg"
                alt=""
              />
            </div>
            {/* <h1 className="text-2xl font-extrabold tracking-wider mb-5 ">About Us</h1> */}
            <ul className="flex justify-center items-center text-center gap-10 my-10 ">
              <li className="border-t-2 w-16 lg:w-96 border-[#2F3F93]"></li>

              <li className="text-2xl sm:text-3xl sm:font-extrabold tracking-wider font-semibold ">
                About Us
              </li>
              <li className="border-t-2 w-16 lg:w-96 border-[#2F3F93]"></li>
            </ul>
            <div className="flex flex-col gap-5 leading-6 py-6 ">
              <p>
                Welcome to Edumynation - The ultimate guide to the best schools
                in the United Arab Emirates!
              </p>
              <p>
                Established with a mission to redefine the way people search for
                educational information in the UAE, we strive to connect
                parents, students, and educators with comprehensive, up-to-date
                details about schools across the region.
              </p>
              <p>
                At Edumynation, our mission is to streamline and simplify the
                process of selecting the perfect educational institution. We
                understand that finding the right school is a crucial decision
                that can shape a child's future. Therefore, our platform has
                been designed to provide you with accurate, extensive, and
                impartial information about a vast array of schools, enabling
                you to make informed decisions based on various parameters, such
                as curriculum, facilities, faculty quality, location, fees, and
                more.
              </p>
              <p>
                We believe in the power of education and its potential to shape
                societies. It's our conviction that everyone should have access
                to reliable and relevant educational information. This belief is
                what drove us to create Edumynation - a hub that assembles
                valuable data about the best schools in the UAE at the click of
                a button.
              </p>
              <p>
                Our dedicated team of experts meticulously researches, verifies,
                and compiles comprehensive information about each school listed
                on our platform. They work tirelessly to ensure that the data
                provided is reliable, current, and beneficial for all our users.
              </p>
              <p>
                But Edumynation is more than just a listing portal. It's a
                community, a reliable partner, and a facilitator in your quest
                for quality education. We provide a transparent platform where
                parents and students can review schools, share their
                experiences, and thereby contribute to an ever-evolving, dynamic
                database of the most reliable educational information in the
                UAE.
              </p>
              <p>
                We are committed to making your search for the perfect school as
                smooth and effortless as possible. Together, let's embark on
                this journey of finding the ideal educational institution that
                will unlock countless opportunities for growth and success.
              </p>
              <p>
                Welcome to Edumynation - your reliable guide in the quest for
                the best education in the UAE. Join our community today and
                let's create a brighter future for our children, together.
              </p>
              <p>
                At Edumynation, we're not just building a platform. We're
                nurturing dreams, one school at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
