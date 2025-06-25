import React from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full pt-6 px-20 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-center poppins-bold text-white">
        thequreshidev
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6 pl-80 poppins-medium">
        {["home", "skills", "projects"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer text-gray-300 hover:text-white transition"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Social Icons + Connect Button */}
      <div className="flex items-center gap-3">
        <div className="flex gap-3">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/amaan-waqar-qureshi-2b8b18235/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-200 flex items-center justify-center cursor-pointer group"
          >
            <FaLinkedinIn className="text-xl text-white group-hover:text-blue-400 transition" />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Amaan325"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-200 flex items-center justify-center cursor-pointer group mr-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 group-hover:text-gray-400 transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.6 3 8.4 7.1 9.8.5.1.7-.2.7-.5v-1.6c-2.9.6-3.5-1.4-3.5-1.4-.5-1.1-1.1-1.3-1.1-1.3-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.3 0-1.2.4-2.1 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.9 1.1.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-.1 2.9-1.1 2.9-1.1.5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.8 0 4.1-2.4 5-4.7 5.3.4.4.6 1 .6 2v2.9c0 .3.2.6.7.5 4.1-1.4 7.1-5.2 7.1-9.8 0-5.8-4.7-10.5-10.5-10.5z"
              />
            </svg>
          </a>
        </div>

        {/* Let's Connect Button with scroll and gradient */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative w-44 h-14 overflow-hidden border border-white text-white poppins-semibold flex items-center justify-center cursor-pointer group"
        >
          <span className="relative z-10 ">Let's Connect</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-[#8e5496] via-[#7154ac] to-[#212d85] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
