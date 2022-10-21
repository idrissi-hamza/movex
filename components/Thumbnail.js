import React from "react";
import Image from "next/image";
// import { useCtrlContext } from "..//hooks/useCtrlContext";
import { useCtrlContext } from "../hooks/useCtrlContext";

const Thumbnail = ({ movie }) => {
  const { dispatch } = useCtrlContext();
  const handleclick = () => {
    dispatch({ type: "MODAL", payload: true });
    dispatch({ type: "PICK_MOVIE", payload: movie });
  };
  return (
    <div
      onClick={handleclick}
      className="group relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt="movie img"
      />
      <p className="absolute bottom-2 left-1 opacity-0 group-hover:opacity-100 bg-black/50 px-1 rounded">
        {" "}
        {movie.title || movie.original_name}
      </p>
      <div
        className={`absolute -top-2 right-1 opacity-0 group-hover:opacity-100  text-xs w-6 h-6 flex items-end justify-center  pt-2 ${
          movie.vote_average > 7 ? "bg-green-600" : "bg-orange-500"
        } `}
      >
        {movie.vote_average.toFixed(2)}
      </div>
    </div>
  );
};

export default Thumbnail;
