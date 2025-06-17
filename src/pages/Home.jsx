import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Footer from "./Footer";
import NewsLetter from "../components/NewsLetter";
const Home = () => {
  return (
    <>
      {/* No background here now */}
      <div className="">
        <About />
      </div>

      {/* Project Section - Full black background */}
      <Project />
      <Footer />
      <NewsLetter />
    </>
  );
};

export default Home;
