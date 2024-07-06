import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-900 text-white px-10 py-8">
        <Hero />
      </div>
      <Footer />
    </>
  );
};

export default Home;
