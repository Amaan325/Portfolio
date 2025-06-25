import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Animation from "../assets/header-img.svg";
import banner from "../assets/banner-bg.png";
import { FaArrowCircleRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Skills from "./Skills";

const About = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-0 " id="home">
      {/* About Section with reduced bottom padding */}
      <div
        className="min-h-[90vh] bg-cover bg-center pb-24"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            scrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
          }`}
        >
          <Navbar />
        </div>

        <div className="flex items-center justify-between min-h-[90vh] pt-20 px-20">
          <div className="flex flex-col gap-6 max-w-[60%] min-w-0 pt-32">
            <div className=" inline-flex items-center justify-center w-52 border border-gray-300 h-10 text-gray-200 text-md font-semibold shadow-md bg-gradient-to-r from-[#8e5496] via-[#7154ac] to-[#212d85]">
              Welcome to my Portfolio
            </div>

            <div className="text-6xl font-semibold text-white leading-tight">
              <div className="flex flex-col">
                <div className="flex">
                  <span>Hi! I'm Amaan</span>
                  <span className="inline-block min-w-[120px] ml-2">
                    <ReactTyped
                      strings={["Web", "UI/UX"]}
                      typeSpeed={150}
                      backSpeed={350}
                      backDelay={1500}
                      loop
                    />
                  </span>
                </div>
                <div className="min-h-[75px]">
                  <ReactTyped
                    strings={["Developer", "Designer"]}
                    typeSpeed={150}
                    backSpeed={104}
                    backDelay={1500}
                    loop
                  />
                </div>
              </div>
            </div>

            <p className="text-md poppins-light text-gray-300">
              Full-stack web developer skilled in the MERN stack (MongoDB,
              Express.js, React.js, Node.js) with experience in Vue.js, Redux,
              and Firebase. Proficient in Tailwind CSS, Material UI, Bootstrap,
              and deploying apps using AWS EC2 and PM2. Currently exploring
              Docker for containerized deployments.
            </p>

            <div className="flex items-center gap-2 mt-2 pb-44">
              <button className="bg-[#212d85] hover:bg-[#2b38a5] text-white px-6 py-2 rounded-full font-semibold transition duration-300">
                Let's Connect
              </button>
              <FaArrowCircleRight className="text-[#212d85] text-2xl" />
            </div>
          </div>

          <div className="w-[380px] ml-8 flex-shrink-0 mr-6">
            <img
              src={Animation}
              alt="Animated"
              className="w-full animate-float"
            />
          </div>
        </div>
      </div>

      {/* Skills Section will overlap this */}
      <Skills />
    </div>
  );
};

export default About;
