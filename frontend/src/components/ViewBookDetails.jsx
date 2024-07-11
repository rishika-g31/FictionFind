import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { GrLanguage } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const ViewBookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [Data, setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  // console.log(isLoggedIn);
  // console.log(role);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:1000/api/v1/get-book-by-id/${id}`
      );
      // console.log(response);
      setData(response.data.data);
    };
    fetch();
  }, []);
  const handleFavourite = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-book-to-favourite",
      {},
      { headers }
    );
    alert(response.data.message);
  };
  const handleCart = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-book-to-cart",
      {},
      { headers }
    );
    alert(response.data.message);
  };
  return (
    <>
      {!Data && (
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
      {Data && (
        <div className="bg-zinc-900 px-12 py-8 flex flex-col md:flex-row gap-8">
          <div className="w-full lg:w-3/6 ">
            <div className="justify-around flex flex-col md:flex-row bg-zinc-800 p-12 rounded ">
              <img
                src={Data.url}
                alt="/"
                className="h-[50vh] md:h-[70vh] rounded"
              />
              {isLoggedIn === true && role === "user" && (
                <>
                  <div className="flex flex-row md:flex-col mt-4 md:mt-0 justify-center items-center gap-8 md:gap-0 md:justify-start">
                    <button
                      className="rounded-full bg-white text-3xl p-2 hover:bg-zinc-300 mt-4 md:mt-4 text-red-500"
                      onClick={handleFavourite}
                    >
                      <FaHeart />
                    </button>
                    <button
                      className="rounded-full bg-white text-3xl p-2 hover:bg-zinc-300 mt-4 md:mt-8 "
                      onClick={handleCart}
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                </>
              )}
              {isLoggedIn === true && role === "admin" && (
                <>
                  <div className="flex flex-row md:flex-col mt-4 md:mt-0 justify-center items-center gap-8 md:gap-0 md:justify-start">
                    <button className="rounded-full bg-white text-3xl p-2 hover:bg-zinc-300 mt-4 md:mt-4 ">
                      <MdEdit />
                    </button>
                    <button className="rounded-full bg-white text-3xl p-2 hover:bg-zinc-300 mt-4 md:mt-8 text-red-500">
                      <MdDelete />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-full md:w-3/6">
            <h1 className="font-semibold text-zinc-300 text-4xl ">
              {Data.title}
            </h1>
            <p className="mt-1 text-zinc-400 ">by {Data.author}</p>
            <p className="mt-4 text-zinc-500 text-md lg:text-xl">{Data.desc}</p>
            <p className="flex items-center justify-start mt-6 text-zinc-400 text-xl">
              <GrLanguage className="me-2" />
              {Data.language}
            </p>
            <p className="mt-4 text-zinc-100 font-semibold text-3xl">
              Price : ${Data.price}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
