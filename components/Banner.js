import React from "react";

const Banner = () => {
  return (
    <div className="absolute top-0 -z-10 w-screen   bg-hero-pattern h-[50vh]  sm:h-[70vh] bg-center bg-cover  ">
      <h1 className=" text-2xl md:text-4xl font-extrabold  absolute sm:ml-20   center sm:top-1/2 sm:left-1/4 sm:w-1/3 ">
        Go ahead and pick your next Movie
      </h1>
    </div>
  );
};

export default Banner;
