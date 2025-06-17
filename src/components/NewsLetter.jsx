import React from "react";
import backgroundpic from "../assets/color-sharp2.png";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className="relative px-6 bg-[#0a0a0a] z-0" id = "newsletter">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundpic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Subscription Section */}
      <div className="w-full text-center flex justify-center pt-32 pb-12 relative z-10">
        <div className="w-[1100px] bg-white flex items-start rounded-4xl px-32 py-16 gap-12 shadow-xl -mt-52">
          <h1 className="font-bold text-2xl text-black text-left">
            Subscribe to our <br /> Newsletter <br />& Never miss latest updates
          </h1>

          <span className="border-2 w-[500px] border-gray-400 rounded-2xl ml-4 flex items-center bg-white">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 h-[60px] w-full rounded-l-2xl placeholder-gray-500 text-black bg-transparent outline-none"
            />
            <button className="mr-1 w-[230px] h-[55px] p-3 bg-gradient-to-r from-[#8e5496] via-[#7154ac] to-[#212d85] text-white rounded-2xl">
              Submit
            </button>
          </span>
        </div>
      </div>

      {/* Logo and Social Icons Section */}
      <div className="relative z-10 flex  items-center justify-between gap-6 px-28 pb-16">
        <h1 className="text-white text-4xl font-semibold">LOGO</h1>
        <div className="flex flex-col gap-4">
          <span className="flex gap-4 pl-32">
            <div className="w-10 h-10 rounded-full bg-gray-800 border border-2 border-gray-200 flex items-center justify-center cursor-pointer group">
              <FaFacebookF className="text-xl text-white group-hover:text-blue-500 transition" />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 border border-2 border-gray-200 flex items-center justify-center cursor-pointer group">
              <FaLinkedinIn className="text-xl text-white group-hover:text-blue-400 transition" />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 border border-2 border-gray-200 flex items-center justify-center cursor-pointer group">
              <FaInstagram className="text-xl text-white group-hover:text-pink-400 transition" />
            </div>
          </span>
          <p className="text-right text-white">Copyright 2025. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
