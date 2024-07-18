import {
  BsFacebook,
  BsPinterest,
  BsTwitter,
  BsLinkedin,
  BsQuora,
  BsInstagram,
} from "react-icons/bs";

import { IoEarth } from "react-icons/io5";


const Author = () => {

  return (
    <>
      <div className="w-screen">
        <div className="flex flex-col  items-center p-16">
          <h1 className="text-4xl lg:text-5xl text-center font-bold text-blue-950 py-4 lg:py-10">
            Author
          </h1>

          <div className="px-2 lg:px-10 py-5 flex  bg-white rounded-lg flex-col lg:flex lg:flex-row  w-[400px] md:w-[800px] lg:w-[1200px]  items-center gap-10">
            <div className="relative h-[350px] w-[300px] rounded-2xl shadow-2xl">
              <img
                src="/sakshi.jpg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold  text-white">
                  Sakshi Padiyar
                </h1>
                <p className="text-sm text-gray-300 pb-2">Author</p>
                <ul className="flex text-white mt-2 gap-4 px-4">
                  <a
                    href="https://www.facebook.com/sakshipadiyar08/"
                    target="_default"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    href="https://in.pinterest.com/sakshipadiyar08/"
                    target="_default"
                  >
                    <BsPinterest />
                  </a>
                  <a
                    href="https://twitter.com/padiyar_sakshi?s=08"
                    target="_default"
                  >
                    <BsTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sakshi-padiyar-a354a011b/"
                    target="_default"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://www.quora.com/profile/Sakshi-Padiyar"
                    target="_default"
                  >
                    <BsQuora />
                  </a>
                  <a
                    href="https://www.instagram.com/sakshipadiyar08/"
                    target="_default"
                  >
                    <BsInstagram />
                  </a>
                  <a href="http://sakshipadiyar.com/" target="_default">
                    <IoEarth />
                  </a>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[300px] md:w-[600px] lg:w-[900px] text-blue-900 leading-[1.4rem]">
              <div className="lg:text-start text-center">
                <h2 className="font-bold text-2xl text-black">
                  Sakshi Padiyar
                </h2>
                <p className="text-black">Writer at edumynation</p>
              </div>
              <p>
                I am an Educational Writer and Consultant at edumynation
                International Girls School, Dehradun. Graduated as an engineer
                from Govind Ballabh Pant Engineering College, Pauri; currently,
                I am working at Digital 360. Having experience in content
                creation, education, and parenting, I have curated diversified
                content for parents, students, and aspirants, which has helped
                them resolve their educational queries. Hi! I'm Sakshi. I'm a
                writer at Edumynation and I love helping people solve all sorts
                of problems—especially when those problems are about education
              </p>
              <p>
                I have done my Bachelor in Technology from Govind Ballabh Pant
                Engineering College in Pauri, and I currently work as a digital
                marketing manager at Digital 360. I have experience in content
                creation, education, and parenting—and that means I can help you
                resolve any educational queries you may have.
              </p>
              <p>
                My experience in content creation has helped me write articles
                that are informative, valuable, and practical. I've written
                extensively on education-related topics to help people learn
                more about their options in the field and how they can choose
                the best option for them.
              </p>
              <p>
                I've always been drawn to the art of writing—transforming
                thoughts into words is a truly amazing skill. I've learned it
                over the years!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
