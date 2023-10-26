export async function generateMetadata() {
  return {
    title: "Terms & Condition",
    description:
      "Welcome to Edumynation - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const TermsCondition = () => {
  return (
    <>
      <div className="w-[98.8vw] mt-16 md:mt-24 mx-auto  ">
        <div className=" bg-blue-900 flex justify-center ">
          <div className=" bg-white border-b-2 border-grey-800  w-[1200px] px-6">
            {" "}
            <div className="flex  justify-center mt-4">
              <img
                className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
                src="/t&C.svg"
                alt=""
              />
            </div>
            {/* <h1 className="text-2xl font-extrabold tracking-wider mb-5 ">About Us</h1> */}
            <ul className="flex justify-center items-center text-center gap-10 my-10 ">
              <li className="border-t-2 w-16 lg:w-96 border-[#2F3F93]"></li>

              <li className="text-2xl sm:text-3xl sm:font-extrabold tracking-wider text-black font-semibold ">
                Terms & Condition
              </li>
              <li className="border-t-2 w-16 lg:w-96 border-[#2F3F93]"></li>
            </ul>
            <div className="flex flex-col gap-5 leading-6 py-6 text-black ">
              <p className="font-semibold">Last Updated: 26//10/23</p>

              <p className="font-semibold">1. Introduction</p>

              <p>
                Welcome to Edumynation. The terms "we," "us," and "our" refer to
                Edumynation. By accessing our website and using our services,
                you agree to abide by the following terms and conditions.
              </p>

              <p className="font-semibold">2. Website Access and Use</p>

              <p>
                By accessing our website, you represent that you are of legal
                age in your jurisdiction. Any unauthorized or illegal use of our
                services is strictly prohibited.
              </p>

              <p className="font-semibold">3. Registration and Account Information</p>

              <p>
                By registering on Edumynation, you agree to provide accurate and
                up-to-date information. It is your responsibility to safeguard
                your account credentials.
              </p>

              <p className="font-semibold">4. Content and Services</p>

              <p>
                All content on Edumynation is for informational purposes. While
                we strive for accuracy, we cannot guarantee that all information
                is up-to-date or error-free.
              </p>

              <p className="font-semibold">5. User Submissions</p>

              <p>
                Any feedback, comments, or suggestions you provide is entirely
                voluntary, and we reserve the right to use such submissions
                without any obligation to compensate you.
              </p>

              <p className="font-semibold">6. Third-Party Links</p>

              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content or privacy practices of these
                sites.
              </p>

              <p className="font-semibold">7. Pricing and Services</p>

              <p>
                We reserve the right to modify our service offerings and pricing
                without prior notice.
              </p>

              <p className="font-semibold">8. Prohibited Uses</p>

              <p>
                You may not use our website for any unlawful purpose or in a way
                that violates these terms and conditions.
              </p>

              <p className="font-semibold">9. Disclaimer and Limitation of Liability</p>

              <p>
                Our services are provided "as is" without any warranties. We are
                not liable for any direct or indirect damages arising from your
                use of our services.
              </p>

              <p className="font-semibold">10. Indemnification</p>

              <p>
                You agree to indemnify and hold Edumynation harmless from any
                claims or damages arising from your use of our services or
                violation of these terms.
              </p>

              <p className="font-semibold">11. Changes to Terms and Conditions</p>

              <p>
                We reserve the right to update or modify these terms and
                conditions at any time. It is your responsibility to review
                these terms periodically.
              </p>

              <p className="font-semibold">12. Contact Us</p>

              <p>
                For any questions or concerns regarding these terms, please
                contact us at Edumynation@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsCondition;
