import React from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useRouter } from "next/router";
import { useState } from "react";

import getConfig from "next/config";
import { useCtrlContext } from "../hooks/useCtrlContext";
const { publicRuntimeConfig } = getConfig();

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const handleInputs = (e) => {
    setSearchTerm(e.target.value);
  };


  const { dispatch } = useCtrlContext();

  const search = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${publicRuntimeConfig.apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );
    const movies = await res.json();
    router.push(`/search/movie?query=${searchTerm}`);
    setSearchTerm("");
    dispatch({ type: "SEARCHED_MOVIES",payload:movies});
    // console.log(movies);
  };
  return (
    <header className="bg-neutral-900/70 h-12 m-2 rounded-md flex items-center pl-4 pr-5 md:pr-8">
      <h1
        onClick={() => router.push("/")}
        className="text-xl text-white font-bold tracking-wide select-none cursor-pointer pb-[2px] mr-4"
      >
        MOVE<span className="text-yellow-300">X</span>
      </h1>
      <div className="group relative flex-1 sm:flex-none mr-4 ">
        <SearchIcon className=" absolute w-5 h-5  top-2  mx-2 text-gray-900" />
        <form onSubmit={search}>
          <input
            placeholder="Search for Movies"
            className="headerInput"
            value={searchTerm}
            type="text"
            required
            onChange={handleInputs}
          />
        </form>
      </div>
      <nav className="ml-auto hidden md:flex ">
        <ul className="flex space-x-4 font-bold last:mr-4 items-center">
          <li className=" navBtn" onClick={() => router.push("/")}>
            HOME
          </li>
          <li className=" navBtn" onClick={() => router.push("/discover")}>
            DISCOVER
          </li>
          {/* {user && <li>WatchList</li>} */}
        </ul>
        {!user && (
          <button
            className="ml-4 navBtn"
            onClick={() => {
              router.push("/login");
            }}
          >
            Sign In
          </button>
        )}
        {user && (
          <button className="ml-4 navBtn text-yellow-500" onClick={logout}>
            Logout
          </button>
        )}
      </nav>

      <MenuIcon className="w-8 h-8  mx-2 ml-auto block md:hidden " />
    </header>
  );
};

export default Header;
