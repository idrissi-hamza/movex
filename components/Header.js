import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useRouter } from "next/router";
import { useState } from "react";

import Popover from "@mui/material/Popover";
import { useCtrlContext } from "../hooks/useCtrlContext";

const Header = () => {
  //MUI POPOVER COMPONENT
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const handleInputs = (e) => {
    setSearchTerm(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    router.push(`/search/movie?query=${searchTerm}`);
    setSearchTerm("");
  };

  const { watchList } = useCtrlContext();
  console.log(watchList);
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
          {user && (
            <div>
              <li
                className="navBtn "
                aria-describedby={id}
                onClick={handleClick}
              >
                WATCHLIST
              </li>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="mt-3"><><div>watch list movies</div>
                <div>{watchList.map(movie=><p>{movie}</p>)}</div></></div>
              </Popover>
            </div>
          )}
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
