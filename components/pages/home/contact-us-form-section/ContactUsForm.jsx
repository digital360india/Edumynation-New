import Form from "./components/Form";


export default function ContactUsForm() {

  return (
    <section id="contact-us-form" className="p-5 sm:p-8 lg:p-14 xl:p-16 2xl:p-20">
      <div className="wrapper p-5 rounded-lg bg-primaryLight sm:p-8 md:flex md:items-stretch md:gap-10 xl:p-14 2xl:p-16">
        <div className="image-cont hidden md:w-[80%] md:block">
          <img className="md:w-full md:h-full md:object-cover md:object-center md:rounded-xl" src="/pages/home/contact-us-form-section/globe.jpeg" alt="Globe Image"/>
        </div>
        <div className="form-wrapper w-full md:w-[80%] flex flex-col items-center justify-center gap-5">
          <h2 className="text-3xl 2xl:text-4xl font-semibold">
            Contact Us
          </h2>
          <Form/>
        </div>
      </div>
    </section>
  );
}
