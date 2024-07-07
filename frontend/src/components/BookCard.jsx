import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Link to={`/view-book-details/${data._id}`}>
        <div className="bg-zinc-800 rounded p-4 flex flex-col">
          <div className="bg-zinc-900 rounded items-center justify-center flex">
            <img className="h-[30vh]" src={data.url} alt="/" />
          </div>
          <h2 className="mt-4 text-zinc-200 text-xl font-semibold">
            {data.title}
          </h2>
          <p className="mt-2 text-zinc-400 font-semibold">by {data.author}</p>
          <p className="mt-2 text-zinc-200 font-semibold text-xl">
            $ {data.price}
          </p>
        </div>
      </Link>
    </>
  );
};

export default BookCard;
