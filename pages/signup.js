import React, { useState } from "react";

import { useSignup } from "../hooks/useSignup";

import Link from "next/link";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const submitHandler = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    // console.log(email, password, displayName);
  };

  const { user, authIsReady } = useAuthContext();
  const router = useRouter();
  user && router.push("/");

  return (
    authIsReady &&
    !user && (
      <div className="flex flex-col items-center mt-8 ">
        <div className="flex justify-center items-end mb-4">
          <h1 className="text-xl text-white font-bold tracking-wide select-none cursor-pointer pb-[2px] mr-4">
            MOVE<span className="text-yellow-300">X</span>
          </h1>
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

          {isPending && <button className="btn w-full">Loading ...</button>}
          {!isPending && <button className="btn w-full">signup</button>}
          {error && alert(error)}
          <div className="pt-2 font-semibold text-sm hover:text-yellow-500 ">
            <Link href="/login">Already have an account?</Link>
          </div>
        </form>
      </div>
    )
  );
}
