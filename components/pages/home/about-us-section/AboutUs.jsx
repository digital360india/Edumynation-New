import Card from "./components/Card";


const cards = [
  {
    id: 1,
    quantity: "50+",
    text: "Lorem Ipsum",
    icon: "material-symbols:adjust-outline"
  },
  {
    id: 2,
    quantity: "60+",
    text: "Lorem Inpsum",
    icon: "material-symbols:adjust-outline"
  },
  {
    id: 3,
    quantity: "70+",
    text: "Lorem Inpsum",
    icon: "material-symbols:adjust-outline"
  },
  {
    id: 4,
    quantity: "80+",
    text: "Lorem Inpsum",
    icon: "material-symbols:adjust-outline"
  }
];


export default function AboutUs() {

  return (
    <section id="about-us" className="flex flex-col gap-5 py-5">
      <h2 className="px-5 text-3xl font-semibold text-primaryBlue lg:mx-2 xl:px-7">
        About Us
      </h2>
      <ul className="cards flex flex-wrap justify-around px-3 rounded sm:mx-5 sm:bg-secondaryBlue lg:mx-7 xl:mx-9">
        {cards.map(card => 
          <Card key={card.id} card={card}/>
        )}
      </ul>
      <p className="px-5 text-sm sm:text-center lg:mx-2 xl:px-7">
        Lorem ipsum dolor sit amet consectetur. Amet cursus mauris eget feugiat id sed. Convallis at massa eget eleifend in euismod enim non diam. Volutpat enim et rhoncus faucibus dui bibendum vivamus dictum faucibus. Gravida integer sit urna sollicitudin cursus leo neque. Rhoncus tincidunt lectus risus tortor eget. Mattis tortor porttitor urna diam sed id. Nisl nunc nulla lacus imperdiet. Mattis in nulla phasellus enim nunc ullamcorper. Sapien in aliquam id suspendisse leo aliquet in mi phasellus. Scelerisque aenean egestas proin risus. Mattis duis sed dictum ac. Ipsum elit ullamcorper odio quam faucibus. Aliquet aliquet elit lectus semper mattis proin.
      </p>
      <button className="w-fit px-10 py-1 ms-5 rounded-full bg-primaryBlue text-white sm:mx-auto">
        Lorem
      </button>
    </section>
  );
}
