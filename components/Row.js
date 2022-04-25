import React from "react";
import Thumbnail from "./Thumbnail";

const Row = ({ title, results }) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className=" flex items-center space-x-0.5 overflow-x-scroll  md:space-x-2.5 md:p-2">
        {results.map((movie) => (
          <Thumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Row;
