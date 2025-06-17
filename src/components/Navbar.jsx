import React from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full pt-6 px-20 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-center poppins-bold text-white">
        LOGO
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-12 pl-80 poppins-medium ml-24">
        {["home", "skills", "projects"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-70} // adjust if you have fixed navbar
            className="cursor-pointer text-gray-300 hover:text-white transition"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Social Icons + Connect Button */}
      <div className="flex items-center gap-3">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-200 flex items-center justify-center cursor-pointer group">
            <FaFacebookF className="text-xl text-white group-hover:text-blue-500 transition" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-800  border-2 border-gray-200 flex items-center justify-center cursor-pointer group">
            <FaLinkedinIn className="text-xl text-white group-hover:text-blue-400 transition" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-200 flex items-center justify-center cursor-pointer group mr-6">
            <FaInstagram className="text-xl text-white group-hover:text-pink-400 transition" />
          </div>
        </div>

        <button className="w-44 h-14 relative overflow-hidden px-4 py-2 bg-black border border-white text-white poppins-semibold group">
          <span className="relative z-10">Let's Connect</span>
          <span className="absolute inset-0 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
