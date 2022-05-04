import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { useCtrlContext } from "../hooks/useCtrlContext";

const SingleResult = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const { dispatch } = useCtrlContext();
  const handleClick = () => {
    dispatch({ type: "MODAL", payload: true });
    dispatch({ type: "PICK_MOVIE",payload:result });
  };
  return (
    <div
      onClick={handleClick}
      className="relative p-2 group cursor-pointer transition duration-200  transform sm:hover:scale-105 "
    >
      <div className={`absolute -top-1 right-3 opacity-0 group-hover:opacity-100 rounded-xl text-sm w-8 h-8 flex items-center justify-center z-10 ${result.vote_average>7?'bg-green-600':'bg-orange-500'} `}>{result.vote_average}</div>
      <Image
      className="relative"
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        width={1920}
        height={1080}
        alt='movie poster'
      />
      <div className="p-2 ">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 ">
          {result.media_type && `${result.media_type}`}
          {result.release_date || result.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
      
    </div>
  );
};

export default SingleResult;
