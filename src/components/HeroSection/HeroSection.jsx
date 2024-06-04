import Header from "../Header/Header";

const HeroSection = () => {
  return (
    <div>
      <Header />

      <section className="relative  bg-cover bg-center bg-no-repeat">
        <div className="  grid  grid-cols-1 md:grid-cols-2 gap-96 relative bg-gradient-to-r bg-slate-950 from-purple-800 mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 overflow-hidden">
          <div className="max-w-xl mx-10 text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span>Every Order</span>
              <strong className="block font-extrabold ">
                {" "}
                <span className="text-neutral-50">fulfilled ,</span>{" "}
                <span className="text-pink-700">on time </span>.{" "}
              </strong>
            </h1>

            <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>

            <div className="mt-8 flex gap-4 text-center rounded-xl">
              <button
                className="block w-full rounded-full bg-black px-12 py-3 text-sm
              font-medium text-white shadow hover:bg-pink-700  focus:outline-none
              focus:ring active:bg-rose-500 sm:w-auto"
              >
                {" "}
                Get started with Crest
              </button>
              <div className="">
                <img
                  className=""
                  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg"
                  alt="ButtonSideImg"
                />
              </div>
            </div>
          </div>
          <div>
            <img
              className=""
              src="      https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg
"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
