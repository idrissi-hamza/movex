import React from "react";

const Banner = () => {
  return (
    <div className=" absolute top-0 -z-10 w-screen   bg-hero-pattern h-[70vh]  sm:h-[70vh] bg-center bg-cover  ">
      <div className="absolute center md:left-1/4 md:ml-28    max-w-xs  md:max-w-lg lg:max-w-2xl ">
        <h1 className=" text-2xl md:text-4xl lg:text-7xl font-extrabold mb-2 md:mb-4 lg:mb-8 leading-7  ">
          Go ahead and pick your next Movie
        </h1>
        <p className="text-xs md:text-lg lg:text-2xl">
          With Movex you can navigate over thousands of movies and shows. What
          are you waiting for?
        </p>
      </div>
    </div>
  );
};

export default Banner;
