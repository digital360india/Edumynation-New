import SearchBox from "./components/SearchBox";

export default function Hero() {

  return (
    <section 
      className="hero-sec h-[594px] flex justify-center items-center bg-center bg-no-repeat mt-14"
      style={{ backgroundImage: "url('/pages/home/hero-section/background-image.png')" }}
    >
      <div className="wrapper flex flex-col items-center justify-center gap-16">
        <div className="greeting flex flex-col gap-3 items-center text-white">
          <div className="text-xl uppercase">
            Welcome To
          </div>
          <div className="text-4xl font-bold">
            EdumyNation
          </div>
        </div>
        <SearchBox/>
      </div>
    </section>
  );
}
