import Header from "./Header";
// bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)]

const HeroSection = () => {
  return (
    <div>
      <Header />

      <section className="relative  bg-cover bg-center bg-no-repeat">
        <div className="  grid  grid-cols-1 md:grid-cols-2 gap-96 relative bg-slate-800 mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl mx-10 text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span>Every Order</span>
              <strong className="block font-extrabold ">
                {" "}
                <span className="text-neutral-50">fulfilled ,</span>{" "}
                <span className="text-pink-700">on time </span>.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center rounded-xl">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started with Crest
              </a>
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
