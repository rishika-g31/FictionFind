import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Sidebar = ({ data }) => {
  return (
    <div className="bg-zinc-800 rounded p-4 flex flex-col items-center justify-between md:h-[80vh]">
      <div className="flex flex-col items-center justify-center">
        <img src={data.avatar} className="h-[10vh] " />
        <p className="mt-3 text-xl font-semibold text-zinc-200">
          {data.username}
        </p>
        <p className="mt-1 text-normal text-zinc-300 text-sm">{data.email}</p>
        <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden md:block"></div>
      </div>
      <div className="w-full flex-col items-center justify-center hidden md:flex">
        <Link
          to="/profile"
          className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Favourites
        </Link>
        <Link
          to="/profile/order-history"
          className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Order History
        </Link>
        <Link
          to="/profile/settings"
          className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300"
        >
          Settings
        </Link>
      </div>
      <button className="flex px-8 mb-8 py-2 w-5/6 mt-4 md:mt-0 items-center justify-center text-white  bg-indigo-800 rounded-xl hover:bg-gray-200 hover:text-indigo-800 transition-all duration-300">
        Logout
        <FaArrowRightFromBracket className="ms-4" />
      </button>
    </div>
  );
};

export default Sidebar;
