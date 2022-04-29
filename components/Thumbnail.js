import React from "react";
import Image from "next/image";
// import { useCtrlContext } from "..//hooks/useCtrlContext";
import { useCtrlContext } from "../hooks/useCtrlContext";

const Thumbnail = ({ movie }) => {
  const { dispatch } = useCtrlContext();
import { useCtrlContext } from "../hooks/useCtrlContext";
  const handleclick = () => {
    dispatch({ type: "MODAL", payload: true });
    dispatch({ type: "PICK_MOVIE",payload:movie });
  };
  return (
    <div
      onClick={handleclick}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
