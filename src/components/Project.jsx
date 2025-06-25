import React, { useState } from "react";
import Project1 from "../assets/home_page_new.png";
import Project2 from "../assets/ServiceHome.png";
import Project3 from "../assets/homepage.png";

const Project = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const projects = [
    {
      title: "Full-Stack Blog Platform",
      image: Project1,
      link: "http://51.21.195.234:9700/", // Replace with your real link
    },
    {
      title: "Pryme (Cleaning Services Website)",
      image: Project2,
      link: null,
    },
    {
      title: "PodStream (Podcast Streaming Platform)",
      image: Project3,
      link: null,
    },
  ];

  return (
    <div id="projects">
      <div className="relative left-0 w-full bg-[#121212] text-white py-16 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>

        <p className="text-gray-300 max-w-2xl text-center mb-8">
          I have built the following projects to apply and strengthen my skills
          in full-stack development, deployment, and clean UI design. Each
          project reflects my focus on practical problem-solving, modern web
          technologies, and scalable architecture.
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
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group bg-zinc-800 h-[240px] rounded-3xl shadow-lg overflow-hidden"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#8e5496]/60 via-[#7154ac]/90 to-[#212d85] opacity-0 translate-y-[-100%] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-10"></div>

                {/* Text & Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
                  <h2 className="text-lg font-semibold text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                    {project.title}
                  </h2>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block bg-white text-[#212d85] font-semibold px-4 py-1.5 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                    >
                      View Live
                    </a>
                  )}
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
