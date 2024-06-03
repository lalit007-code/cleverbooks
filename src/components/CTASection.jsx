import "../App.css";

const CTASection = () => {
  return (
    <div className="mx-20 my-10 px-10 p-8 text-center text-3xl text-neutral-50  h-100 w-100 rounded-xl  bg-gradient-to-br from-purple-500 via-red-400 to-purple-500 animate-gradient-xy bg-200% bg-no-repeat ">
      <div>
        <h1 className="mx-40 text-center">Grow faster than you think!</h1>
      </div>
      <div className="p-30 ">
        <p className="font-thin text-xl mt-10 mb-10 ">
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We
          <br></br> the methods and technologies of large global companies to
          help brands of all sizes <br></br>scale.
        </p>
      </div>
      <div>
        <button className="bg-black text-white rounded-full text-xl p-5">
          {" "}
          Get started with Crest
        </button>
      </div>
    </div>
  );
};

export default CTASection;
