import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-xl px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl">Sign-Up</p>
        <div className="mt-4">
          <div>
            <label htmlFor="" className="text-zinc-400">
              Username
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 rounded-xl p-2 px-3 outline-none"
              placeholder="username"
              name="username"
              required
            ></input>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-zinc-400">
              Email
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 rounded-xl p-2 px-3 outline-none"
              placeholder="xyz@gmail.com"
              name="email"
              required
            ></input>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-zinc-400">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 rounded-xl p-2 px-3 outline-none"
              placeholder="password"
              name="password"
              required
            ></input>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-zinc-400">
              Address
            </label>
            <textarea
              className="w-full mt-2 bg-zinc-900 text-zinc-100 rounded-xl p-2 px-3 outline-none"
              rows="5"
              placeholder="address"
              name="address"
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <button className="w-full px-8 mb-4 py-2 text-xl text-white  bg-indigo-800 rounded-xl hover:bg-indigo-900  transition-all duration-300 ">
              Sign-Up
            </button>
          </div>
          <p className="flex items-center justify-center text-zinc-200">Or</p>
          <p className="flex items-center justify-center mt-1 text-zinc-300 ">
            Already Have An Account? &nbsp;
            <Link to="/login" className="hover:text-blue-600">
              <u> Login</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
