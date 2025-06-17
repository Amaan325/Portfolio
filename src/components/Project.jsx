import React, { useState } from "react";
import Project1 from "../assets/project-img1.png";
import Project2 from "../assets/project-img2.png";
import Project3 from "../assets/project-img3.png";

const Project = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const projectImages = [Project1, Project2, Project3];

  return (
    <div className="" id="projects">
      <div className="relative left-0 w-full bg-[#121212] text-white py-16 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>

        <p className="text-gray-300 max-w-2xl text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsa
          nostrum cumque neque ipsam natus magnam atque vitae, dolor cupiditate.
          Sed quos adipisci perferendis deserunt ab officiis quis laborum quod!
        </p>

        <div className="flex divide-x divide-white/30 rounded-full overflow-hidden shadow-lg mb-10">
          {["tab1", "tab2", "tab3"].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`min-w-[200px] px-6 py-3 text-white transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#8e5496] via-[#7154ac] to-[#212d85]"
                  : "bg-zinc-800 hover:bg-gradient-to-r from-[#8e5496] via-[#7154ac] to-[#212d85]"
              }`}
            >
              Tab {idx + 1}
            </button>
          ))}
        </div>

        {activeTab === "tab1" && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="relative group bg-zinc-800 h-[240px] rounded-3xl shadow-lg overflow-hidden"
              >
                {/* Image */}
                <img
                  src={projectImages[index % projectImages.length]}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay animating from top to bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#8e5496]/60 via-[#7154ac]/90 to-[#212d85] opacity-0 translate-y-[-100%] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-10"></div>

                {/* Text sliding from bottom to center */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h2 className="text-lg font-semibold text-white text-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                    Business Startup <br /> Design and Development
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
