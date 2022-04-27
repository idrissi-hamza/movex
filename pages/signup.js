import React, { useState } from "react";

import { useSignup } from "../hooks/useSignup";

import { useRouter } from "next/router";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();
  const router = useRouter()
  const submitHandler = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    // console.log(email, password, displayName);
    router.push('/')
  };

  return (
    <div className="flex flex-col items-center mt-8 ">
      <div to="/" className="flex justify-center items-end mb-4">
        <span className="ml-2 font-semibold text-base text-gray-700 ">
          Movex
        </span>
      </div>
      <form
        className=" h-[27rem] max-w-sm w-80  bg-white p-5 border shadow rounded text-slate-600"
        onSubmit={submitHandler}
      >
        <h2 className="text-xl font-semibold ">Signup</h2>

        <label className="block my-6 mx-auto">
          <span className="block mb-2"> Email:</span>
          <input
            className="py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block mx-auto">
          <span className="block mb-2"> Password</span>
          <input
            className="py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label className="block my-6 mx-auto">
          <span className="block mb-2"> Display name</span>
          <input
            className="py-2 px-1 text-md h-8 border-gray-300  border min-w-full rounded focus:border-gray-500  outline-none"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>

        {false && <button>Loading ...</button>}
        {true && <button>signup</button>}
        {false && alert(error)}
        <div className="pt-2 font-semibold text-sm hover:text-indigo-700 ">
          <Link href="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}
