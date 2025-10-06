import React from "react";
import { FaReact, FaDatabase, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus } from "react-icons/si";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-20"
    >
      {/* Skills Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Skills
        </h2>
        <div className="mt-2 h-1 w-20 bg-cyan-400 mx-auto rounded-full shadow-[0_0_20px_rgba(34,211,238,0.7)]"></div>
      </div>

      {/* Main Circle + Floating Icons */}
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center">
        {/* Center Circle */}
        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-2 border-cyan-400 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.6)] center-pulse">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
            Suraj Kumar
          </h1>
          <p className="text-cyan-400 mt-2 tracking-wider text-sm sm:text-base md:text-base text-center">
            FRONT END DEVELOPER
          </p>
        </div>

        {/* React */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center space-x-2 text-white float-slow">
          <FaReact className="text-4xl sm:text-5xl" />
          <span className="text-sm sm:text-lg">React</span>
        </div>

        {/* Tailwind */}
        <div className="absolute top-4 sm:top-6 right-2 sm:right-4 flex items-center space-x-2 text-white float-slower">
          <SiTailwindcss className="text-4xl sm:text-5xl" />
          <span className="text-sm sm:text-lg">Tailwind CSS</span>
        </div>

        {/* GSAP */}
        <div className="absolute right-[-12px] sm:right-[-16px] top-1/2 -translate-y-1/2 flex items-center space-x-2 text-white float-slow">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-sm sm:text-lg">
            G
          </div>
          <span className="text-sm sm:text-lg text-green-400 font-semibold">GSAP</span>
        </div>

        {/* SQL */}
        <div className="absolute left-[-12px] sm:left-[-16px] top-1/2 -translate-y-1/2 flex items-center space-x-2 text-white float-slower">
          <FaDatabase className="text-gray-400 text-4xl sm:text-5xl" />
          <span className="text-sm sm:text-lg">SQL</span>
        </div>

        {/* JavaScript */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center space-x-2 text-white float-slow">
          <FaJs className="text-yellow-400 text-4xl sm:text-5xl" />
          <span className="text-sm sm:text-lg">JavaScript</span>
        </div>

        {/* C++ */}
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center space-x-2 text-white float-slower">
          <SiCplusplus className="text-blue-400 text-4xl sm:text-5xl" />
          <span className="text-sm sm:text-lg">C++</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
