import React from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputs = () => {};
  return (
    <header className="bg-neutral-900 h-12 m-2 rounded-md flex items-center pl-4 opacity-95 pr-5 md:pr-8">
      <h1 onClick={()=>router.push('/')} className="text-xl text-white font-bold tracking-wide select-none cursor-pointer pb-[2px] mr-4">
        MOVE<span className="text-yellow-300">X</span>
      </h1>
      <div className="relative flex-1 sm:flex-none mr-4 ">
        <SearchIcon className=" absolute w-5 h-5  top-2  mx-2 color-white" />
        <form>
          <input
            placeholder="Search for Movies and Series"
            className="headerInput"
            value={searchTerm}
            type="text"
            onChange={handleInputs}
            required
          />
        </form>
      </div>
      <nav className="ml-auto hidden md:flex ">
        <ul className="flex space-x-4 font-bold last:mr-4 items-center">
          <li className=" navBtn" onClick={()=>router.push('/')}>HOME</li>
          <li className=" navBtn" onClick={()=>router.push('/discover')}>DISCOVER</li>
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
