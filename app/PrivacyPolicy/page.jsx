
export async function generateMetadata()
 {  
  return{
      title: "Privacy Policies",
      description: "Welcome to Edumynation - The ultimate guide to the best schools in the United Arab Emirates! " ,
    };
 }
 
const PrivacyPolicy = () => {
  
  return (
    <>

      <div className="w-[98.8vw] mt-16 md:mt-24 mx-auto ">
        <div className=" bg-blue-900 flex justify-center ">
          <div className=" bg-white border-b-2 border-grey-800  w-[1200px] px-6">
            {" "}
            <div className="flex  justify-center mt-4">
              <img
                className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
                src="/privacy.svg"
                alt=""
              />
            </div>
            {/* <h1 className="text-2xl font-extrabold tracking-wider mb-5 ">About Us</h1> */}
            <ul className="flex justify-center items-center text-center gap-10 my-10 ">
              <li className="border-t-2 w-16 lg:w-96 border-[#2F3F93]"></li>

              <li className="text-2xl sm:text-3xl sm:font-extrabold tracking-wider text-black font-semibold ">
                Privacy Policy
              </li>
              <li className="border-t-2 w-16 lg:w-96 border-[#2F3F93]"></li>
            </ul>
            <div className="flex flex-col gap-5 leading-6 py-6 text-black ">
            <p className="font-semibold"> Last Updated: 26//10/23</p>
              <p className="font-semibold">1. Introduction</p>
              <p>
                Welcome to Edumynation, a premier school listing website. This
                Privacy Policy outlines how we collect, use, and protect your
                personal information. By accessing our website, you agree to the
                terms outlined in this policy.
              </p>
              <p className="font-semibold">2. Information Collection</p>
              <p>
                When you visit Edumynation, we may collect information such as
                your IP address, browser type, and the pages you visit. If you
                register on our site, we may also collect personal information
                like your name, email address, and other relevant details.
              </p>

              <p className="font-semibold">3. Use of Information</p>
              <ul>We use the information collected to:
              <li>Enhance user experience</li>
              <li> Provide personalized content and recommendations </li>
              <li>Communicate with users regarding updates or promotions</li>
              <li> Conduct research and analysis to improve our services </li>
              </ul>

              <p className="font-semibold">4. Sharing of Information</p>

              <p>
                We do not sell or rent your personal information to third
                parties. However, we may share your information with trusted
                partners for operational purposes, under strict confidentiality
                agreements.
              </p>

              <p className="font-semibold">5. Protection of Information</p>

              <p>
                Edumynation employs advanced security measures to protect your
                information from unauthorized access, alteration, or disclosure.
              </p>

              <p className="font-semibold">6. Cookies</p>

              <p>
                We use cookies to enhance user experience, analyze site traffic,
                and offer personalized content. You can choose to disable
                cookies through your browser settings, but this may affect the
                site's functionality.
              </p>

              <p className="font-semibold">7. Third-Party Links</p>

              <p>
                Our website may contain links to other sites. We are not
                responsible for the privacy practices of these sites. We
                encourage users to read the privacy policies of any website they
                visit.
              </p>

              <p className="font-semibold">8. Changes to Privacy Policy</p>

              <p>
                We may update this policy from time to time. Any changes will be
                posted on this page, and we encourage users to review our
                privacy policy regularly.
              </p>

              <p className="font-semibold">9. Contact Us</p>

              <p>
                If you have any questions or concerns regarding this policy,
                please contact us at Edumynation@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
