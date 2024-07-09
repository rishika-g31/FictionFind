import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const [Values, setValues] = useState({
    username: "",

    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };
  const submit = async () => {
    try {
      if (Values.username === "" || Values.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/sign-in",
          Values
        );
        // console.log(response.data);

        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));

        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        navigate("/profile");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="h-screen bg-zinc-900 px-12 py-2 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-xl px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl">Login</p>
        <div className="mt-4">
          <div>
            <label htmlFor="" className="text-zinc-400">
              Username
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 rounded-xl p-2 px-3 outline-none"
              placeholder="username"
              name="username"
              required
              value={Values.username}
              onChange={change}
            ></input>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-zinc-400">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 rounded-xl p-2 px-3 outline-none"
              placeholder="password"
              name="password"
              required
              value={Values.password}
              onChange={change}
            ></input>
          </div>

          <div className="mt-4">
            <button
              className="w-full px-8 mb-4 py-2 text-xl text-white  bg-indigo-800 rounded-xl hover:bg-gray-400 hover:text-black transition-all duration-300 "
              onClick={submit}
            >
              Login
            </button>
          </div>
          <p className="flex items-center justify-center text-zinc-200">Or</p>
          <p className="flex items-center justify-center mt-1 text-zinc-300 ">
            Don't Have An Account? &nbsp;
            <Link to="/login" className="hover:text-blue-600">
              <u> Sign-Up</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
