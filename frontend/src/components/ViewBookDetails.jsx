import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { GrLanguage } from "react-icons/gr";
import { useParams } from "react-router-dom";

const ViewBookDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:1000/api/v1/get-book-by-id/${id}`
      );
      console.log(response);
      setData(response.data.data);
    };
    fetch();
  }, []);
  return (
    <>
      {!Data && (
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
      {Data && (
        <div className="bg-zinc-900 px-12 py-8 flex flex-col md:flex-row gap-8">
          <div className="w-full bg-zinc-800 rounded p-4 h-[70vh] md:h-[80vh] md:w-3/6 items-center justify-center flex ">
            <img
              src={Data.url}
              alt="/"
              className="h-[50vh] md:h-[70vh] rounded"
            />
          </div>
          <div className="w-full md:w-3/6">
            <h1 className="font-semibold text-zinc-300 text-4xl ">
              {Data.title}
            </h1>
            <p className="mt-1 text-zinc-400 ">by {Data.author}</p>
            <p className="mt-4 text-zinc-500  text-xl">{Data.desc}</p>
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
