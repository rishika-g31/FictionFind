import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "All-books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
  ];
  return (
    <div className="flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
      <div className="flex items-center">
        <img className="me-4 h-10" src={logo} alt="logo" />
        <h1 className="font-semibold text-2xl">FictionFind</h1>
      </div>
      <div className="nav-link-fictionfind flex items-center gap-4">
        <div className="flex gap-6">
          {links.map((items, i) => (
            <Link
              to={items.link}
              className="hover:text-blue-200 transition-all duration-300"
              key={i}
            >
              {items.title}
            </Link>
          ))}
        </div>
        <div className="gap-4 flex">
          <button className="px-5 py-1 border border-indigo-500 rounded-xl hover:bg-gray-200 hover:text-indigo-800 transition-all duration-300">
            Login
          </button>
          <button className="px-5 py-1 bg-indigo-800 rounded-xl hover:bg-gray-200 hover:text-indigo-800 transition-all duration-300">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
