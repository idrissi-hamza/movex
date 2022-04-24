import React from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className=" bg-neutral-900 h-12 m-2 rounded-md flex items-center pl-4 opacity-95 pr-5 md:pr-10">
      <h1 className="text-xl text-white font-bold tracking-wide select-none cursor-pointer pb-[2px]  mr-4">
        MOVE<span className="text-yellow-300">X</span>
      </h1>
      <div className="relative flex-1 sm:flex-none mr-4 ">
        <SearchIcon className=" absolute w-5 h-5  top-2  mx-2 color-white" />

        <input
          placeholder="Search for Movies and Series"
          className="headerInput"
        />
      </div>
      <nav className="ml-auto hidden md:flex">
        <ul className="flex space-x-3 font-bold last:mr-4">
          <li >HOME</li>
          <li>CATEGORY</li>
          <li>WatchList</li>
             
        </ul>
      
      </nav>

      <MenuIcon className="w-8 h-8  mx-2 ml-auto block md:hidden " />
    </header>
  );
};

export default Header;
