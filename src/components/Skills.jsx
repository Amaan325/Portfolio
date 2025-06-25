import React, { useRef } from "react";
import Meter1 from "../assets/meter1.svg";
import Meter2 from "../assets/meter2.svg";
import Meter3 from "../assets/meter3.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import backgroundpic from "../assets/color-sharp.png";

const Skills = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const imageWidth = 200;
    const gap = 112;
    const scrollAmount = imageWidth + gap;

    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const skillsData = [
    { img: Meter1, label: "Backend Development" },
    { img: Meter2, label: "Frontend Development" },
    { img: Meter3, label: "UI/UX Design" },
    { img: Meter1, label: "AWS" },
  ];

  return (
    <div className="relative px-6 bg-[#0a0a0a] z-0" id="skills">
      {/* Background Image with reduced opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
        }}
      ></div>

      {/* Skills Content */}
      <div className="relative z-20 py-16 -mt-28">
        <div className="bg-[#111111] -mt-32 rounded-4xl p-6 text-white text-center max-w-6xl mx-auto shadow-2xl">
          <h1 className="text-3xl font-semibold mb-2 mt-9">Skills</h1>
          <p className="mb-6 text-gray-300 max-w-xl mx-auto mt-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi
            aspernatur id magni maxime iure perspiciatis excepturi ipsum tempora.
          </p>

          <div className="flex items-center justify-center gap-4 mt-12 mb-12">
            <button 
              onClick={() => scroll("left")} 
              className="text-3xl text-white hover:text-[#7154ac] transition-colors"
            >
              <IoIosArrowBack />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-hidden gap-28 w-[824px]"
            >
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="w-[200px] flex-shrink-0 flex flex-col items-center text-center"
                >
                  <img
                    src={skill.img}
                    alt={skill.label}
                    className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
                  />
                  <p className="mt-4 text-sm text-gray-300 font-medium">{skill.label}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scroll("right")} 
              className="text-3xl text-white hover:text-[#7154ac] transition-colors"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;