import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookCard = ({ data, favourite }) => {
  // console.log(data);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  };
  const handleRemoveBook = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/remove-book-from-favourite",
      {},
      { headers }
    );
    console.log(response.data.message);
  };
  return (
    <>
      <div className="bg-zinc-800 rounded p-4 flex flex-col ">
        <Link to={`/view-book-details/${data._id}`}>
          <div className="">
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
        {favourite && (
          <button
            className="text-yellow-100  border border-yellow-100 text-sm px-4 py-2 items-center rounded-xl hover:bg-zinc-900 mt-4"
            onClick={handleRemoveBook}
          >
            Remove From Favourite
          </button>
        )}
      </div>
    </>
  );
};

export default BookCard;
