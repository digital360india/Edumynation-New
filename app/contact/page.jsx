import FormHeading from "@/components/pages/contact/FormHeading";
import Form from "@/components/pages/contact/Form";
import SocialContacts from "@/components/pages/contact/SocialContacts";


export async function generateMetadata() {
  return {
    title: "Contact Us",
    description:
      "Here are the details to contact our team. You can contact us for free counselling service as well as for registering your school on our website",
  };
}


const Contact = () => {

  return (
    <section id="contact" className="flex flex-col gap-10 px-7 py-10">
      <FormHeading/>
      <Form/>
      <SocialContacts/>
    </section>
  );
};

export default Contact;
