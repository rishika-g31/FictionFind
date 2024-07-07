import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";

const AllBooks = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-all-books"
      );
      setData(response.data.data);
    };
    fetch();
  }, []);

  return (
    <div className="bg-zinc-900 h-auto px-12 py-8">
      <h4 className="text-3xl text-zinc-300 text-center justify-center p-4">
        Discover Timeless Tales That Captivate!
      </h4>
      {!Data && (
        <div className="flex items-center justify-center my-8">
          <Loader />
        </div>
      )}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllBooks;
