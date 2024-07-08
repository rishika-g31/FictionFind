import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="h-screen bg-zinc-900 px-12 py-2 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-xl px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl">Login</p>
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
            <button className="w-full px-8 mb-4 py-2 text-xl text-white  bg-indigo-800 rounded-xl hover:bg-indigo-900 transition-all duration-300 ">
              Login
            </button>
          </div>
          <p className="flex items-center justify-center text-zinc-200">Or</p>
          <p className="flex items-center justify-center mt-1 text-zinc-300 ">
            Don't Have An Account? &nbsp;
            <Link to="/login" className="hover:text-blue-600">
              <u> Sign-Up</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
