import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
    <Routes>
      <Navbar />
      <Route path="/" element={<Home />} />
      {/* <Home /> */}
      <Footer />
      </Routes>
    </>
  );
};

export default App;
