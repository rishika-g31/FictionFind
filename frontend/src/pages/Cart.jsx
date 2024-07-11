import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const Cart = () => {
  const [Cart, setCart] = useState();
  const [Total, setTotal] = useState(0);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-cart-books",
        { headers }
      );
      setCart(response.data.data);
    };
    fetch();
  }, [Cart]);
  const deleteItem = async (bookid) => {
    const response = await axios.put(
      `http://localhost:1000/api/v1/remove-book-from-cart/${bookid}`,
      {},
      { headers }
    );
    setCart(response.data.data);
  };
  useEffect(() => {
    if (Cart && Cart.length > 0) {
      let total = 0;
      Cart.map((items) => {
        total += items.price;
      });
      // console.log(total);
      setTotal(total);
      total = 0;
    }
  }, [Cart]);
  return (
    <div className="h-auto md:h-screen  bg-zinc-900 px-12 pb-4">
      {!Cart && (
        <div className="flex items-center justify-center  ">
          <Loader />
        </div>
      )}
      {Cart && Cart.length === 0 && (
        <div className="text-4xl font-semibold text-zinc-700 flex items-center justify-center h-[100%]">
          No Books In Your Cart
        </div>
      )}
      {Cart && Cart.length > 0 && (
        <>
          <h1 className="text-4xl font-semibold text-zinc-600 mb-8 pt-8">
            Your Cart
          </h1>
          {Cart &&
            Cart.map((items, i) => (
              <div
                className="w-full rounded my-4 flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center "
                key={i}
              >
                <img
                  src={items.url}
                  className="h-[20vh] md:h-[10vh] object-cover "
                />
                <div className="w-full md:w-auto">
                  <div className="text-zinc-200 text-2xl font-semibold text-start mt-2 md:mt-0">
                    {items.title}
                  </div>
                  <p className="text-normal text-zinc-400 mt-2 hidden lg:block">
                    {items.desc.slice(0, 100)}...
                  </p>
                  <p className="text-normal text-zinc-400 mt-2 hidden md:block lg:hidden">
                    {items.desc.slice(0, 65)}...
                  </p>
                  <p className="text-normal text-zinc-400 mt-2 block md:hidden">
                    {items.desc.slice(0, 100)}...
                  </p>
                </div>
                <div className="flex text-zinc-100 text-2xl font-semibold mt-4 w-full md:w-auto items-center justify-between">
                  ${items.price}
                </div>
                <button
                  className="bg-red-100 text-red-600 border text-2xl hover:bg-red-200 border-red-600 rounded p-2 ms-12"
                  onClick={() => deleteItem(items._id)}
                >
                  <MdDelete />
                </button>
              </div>
            ))}
        </>
      )}
      {Cart && Cart.length > 0 && (
        <div className="mt-4 w-full flex items-center justify-end">
          <div className="p-4 bg-zinc-800 rounded">
            <h1 className="text-2xl text-zinc-200 font-semibold">
              Total Amount
            </h1>
            <div className="flex items-center mt-3 justify-between text-xl text-zinc-300">
              <h2>{Cart.length} books </h2>
              <h2>${Total}</h2>
            </div>
            <div className="w-[100%] mt-3 ">
              <button className="text-yellow-100  border border-yellow-100 text-md px-4 py-2 items-center rounded-xl hover:bg-zinc-900 mt-4">
                Place Your Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
