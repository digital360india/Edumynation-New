import Form from "./components/Form";


export default function ContactUsForm() {

  return (
    <section id="contact-us-form" className="p-5">
      <div className="wrapper w-full flex flex-col items-center gap-5 p-5 rounded-lg bg-primaryLight">
        <h2 className="text-3xl font-semibold">
          Contact Us
        </h2>
        <Form/>
      </div> 
    </section>
  );
}
