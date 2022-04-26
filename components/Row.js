import React from "react";
import Thumbnail from "./Thumbnail";

const Row = ({ title, results }) => {
  return (
    <>
      <h2 className=" ml-8 w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className=" ml-8 flex space-x-1 overflow-x-scroll scrollbar-thin 
      scrollbar-thumb-transparent hover:scrollbar-thumb-yellow-400 scrollbar-track-transparent   md:space-x-2.5 md:p-2">
        {results.map((movie) => (
          <Thumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Row;
