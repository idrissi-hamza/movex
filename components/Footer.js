import React from "react";

const Footer = () => {
  return (
    <footer className=" px-20 sm:px-36 xl:px-53 py-4 bg-gray-900 flex justify-between">
      <h1 className=" text-3xl text-white font-bold tracking-wide select-none cursor-pointer pb-[2px] mr-4">
        MOVE<span className="text-yellow-300">X</span>
      </h1>
      <p className=" text-sm text-slate-500">Copyright © 2022 Movex</p>
    </footer>
  );
};

export default Footer;
