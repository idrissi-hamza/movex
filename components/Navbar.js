import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";
const Navbar = () => {
  const router=useRouter()
  return (
    <nav className="relative mt-10">
      <div className="flex  px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
          onClick={()=>router.push(`/discover/?genre=${key}`)}
            key={key}
            className="last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-gray-800 h-full w-2/12 "/>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-gray-800 h-full w-2/12 "/>
    </nav>
  );
};

export default Navbar;
