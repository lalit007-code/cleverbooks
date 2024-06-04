import React from "react";

const Card = ({ image, heading, description }) => {
  return (
    <div>
      {" "}
      <blockquote className="flex h-full flex-col justify-between bg-pink-100 rounded-3xl p-6 shadow-sm sm:p-8">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <img className="w-10 h-10" src={image} alt="logo" />
          </div>

          <div className="mt-4">
            <p className="text-2xl font-semithin text-black-600 sm:text-3xl">
              {heading}
            </p>

            <p className="mt-4 leading-relaxed text-gray-700">{description}</p>
          </div>
        </div>
      </blockquote>
    </div>
  );
};

export default Card;
