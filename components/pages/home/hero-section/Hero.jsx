import SearchBox from "./components/SearchBox";

export default function Hero() {

  return (
    <section
      id="hero"
      className={`
        h-[594px] flex justify-center items-center mt-14
        relative
        bg-center bg-cover bg-no-repeat bg-[url('/pages/home/hero-section/background-image.jpeg')]
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-50
      `}
    >
      <div className="wrapper flex flex-col items-center justify-center gap-16 z-10">
        <div className="greeting flex flex-col gap-3 items-center text-white">
          <div className="text-xl uppercase font-semibold">
            Welcome To
          </div>
          <div className="text-4xl font-semibold">
            EdumyNation
          </div>
        </div>
        <SearchBox/>
      </div>
    </section>
  );
}
