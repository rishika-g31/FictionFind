import React from "react";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="md:h-[82vh] flex flex-col items-center justify-center md:flex-row">
      <div className="w-full lg:w-3/6 items-center flex flex-col lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
          Discover Your Next Great Read
        </h1>
        <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
          Uncover captivating stories, enriching knowledge, and endless
          inspiration in our curated collection of books
        </p>
        <div className="mt-8">
          <Link
            to="/all-books"
            className="text-yellow-100  border border-yellow-100 text-xl lg:text-2xl font-semibold px-10 py-2 items-center rounded-full hover:bg-zinc-800 "
          >
            Discover Books
          </Link>
        </div>
      </div>
      <div className=" w-full lg:w-3/6 lg:h-[100%] h-auto flex items-center justify-center pb-14">
        <img className="" src={hero} />
      </div>
    </div>
  );
};

export default Hero;
