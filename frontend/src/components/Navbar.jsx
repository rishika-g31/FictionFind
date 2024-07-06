import React, { useState } from "react";
import logoo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "All-books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
  ];

  const [Nav, setNav] = useState("hidden");

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex">
          <img className="me-4 h-10" src={logoo} alt="" />
          <h1 className="font-semibold text-2xl">FictionFind</h1>
        </Link>
        <div className="nav-link-fictionfind block md:flex items-center gap-4">
          <div className="hidden md:flex gap-6">
            {links.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="hover:text-blue-200 transition-all duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4 ">
            <Link
              to="/login"
              className="px-5 py-1 border border-indigo-500 rounded-xl hover:bg-gray-200 hover:text-indigo-800 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-1 bg-indigo-800 rounded-xl hover:bg-gray-200 hover:text-indigo-800 transition-all duration-300"
            >
              SignIn
            </Link>
          </div>
          <button
            className="tect-white text-2xl hover:text-zinc-400 md:hidden"
            onClick={() =>
              Nav === "hidden" ? setNav("block") : setNav("hidden")
            }
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div
        className={`${Nav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center md:hidden`}
      >
        {links.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            onClick={() =>
              Nav === "hidden" ? setNav("block") : setNav("hidden")
            }
            className="text-white text-3xl font-semibold mb-8 hover:text-blue-200 transition-all duration-300"
          >
            {item.title}
          </Link>
        ))}
        <Link
          to="/login"
          className="px-8 mb-8 text-2xl py-2 text-white border border-indigo-500 rounded-xl hover:bg-gray-200 hover:text-indigo-800 transition-all duration-300"
          onClick={() =>
            Nav === "hidden" ? setNav("block") : setNav("hidden")
          }
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-8 mb-8 py-2 text-2xl text-white  bg-indigo-800 rounded-xl hover:bg-gray-200 hover:text-indigo-800 transition-all duration-300"
          onClick={() =>
            Nav === "hidden" ? setNav("block") : setNav("hidden")
          }
        >
          SignIn
        </Link>
      </div>
    </>
  );
};

export default Navbar;
